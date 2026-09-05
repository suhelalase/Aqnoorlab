"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { TurnstileWidget, TurnstileWidgetRef } from "@/components/TurnstileWidget";

const phoneRegex = /^\+?[0-9\s\-().]{7,20}$/;

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(80, { message: "Name must not exceed 80 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Phone number must be at least 7 characters." })
    .max(20, { message: "Phone number must not exceed 20 characters." })
    .regex(phoneRegex, { message: "Please enter a valid phone number (international format supported)." }),
  projectDetails: z
    .string()
    .trim()
    .min(10, { message: "Project details must be at least 10 characters." })
    .max(3000, { message: "Project details must not exceed 3000 characters." }),
  honeypot: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface Toast {
  id: string;
  type: "success" | "error";
  message: string;
}

export function ContactForm() {
  const [mountedTime, setMountedTime] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileWidgetRef>(null);

  // Capture page mount time to detect instant automated bot submissions
  useEffect(() => {
    setMountedTime(Date.now());
  }, []);

  const addToast = useCallback((type: "success" | "error", message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken(null);
  }, []);

  const handleTurnstileError = useCallback(() => {
    setTurnstileToken(null);
    addToast("error", "Verification failed. Try again.");
  }, [addToast]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectDetails: "",
      honeypot: "",
    },
  });

  const formValues = watch();
  const formDataRef = useRef<ContactFormValues>(formValues);
  const hasSubmittedRef = useRef(false);
  const lastSentDataRef = useRef<string>("");

  useEffect(() => {
    formDataRef.current = formValues;
  }, [formValues]);

  // Lead recovery: capture entered data if user closes tab or navigates away before submitting
  useEffect(() => {
    const sendAbandonedData = () => {
      if (hasSubmittedRef.current) return;
      const current = formDataRef.current;
      if (!current) return;

      const phoneDigits = (current.phone || "").replace(/\D/g, "");
      const hasEmail = (current.email || "").includes("@") && (current.email || "").length >= 5;
      const hasPhone = phoneDigits.length >= 5;

      // Only capture if at least email or phone number was typed in
      if (!hasEmail && !hasPhone) return;

      const payloadString = JSON.stringify({
        name: current.name,
        email: current.email,
        phone: current.phone,
        projectDetails: current.projectDetails,
        honeypot: current.honeypot,
      });

      if (lastSentDataRef.current === payloadString) return;
      lastSentDataRef.current = payloadString;

      const endpoint = "/api/contact/abandoned";
      if (typeof navigator !== "undefined" && navigator.sendBeacon) {
        const blob = new Blob([payloadString], { type: "application/json" });
        navigator.sendBeacon(endpoint, blob);
      } else {
        fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payloadString,
          keepalive: true,
        }).catch(() => {});
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sendAbandonedData();
      }
    };

    const handlePageHide = () => {
      sendAbandonedData();
    };

    window.addEventListener("pagehide", handlePageHide);
    window.addEventListener("beforeunload", handlePageHide);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("pagehide", handlePageHide);
      window.removeEventListener("beforeunload", handlePageHide);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const onSubmit = async (data: ContactFormValues) => {
    const hasSiteKey = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

    if (hasSiteKey && !turnstileToken) {
      addToast("error", "Complete the security check.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ...data,
        timestamp: mountedTime,
        turnstileToken,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Verification failed. Try again.");
      }

      // Success sequence
      hasSubmittedRef.current = true;
      setIsSuccess(true);
      addToast("success", "Thank you! We'll contact you shortly.");
      reset();
      turnstileRef.current?.reset();
      setTurnstileToken(null);
      
      // Update mount time for any subsequent submits
      setMountedTime(Date.now());
    } catch (err: unknown) {
      turnstileRef.current?.reset();
      setTurnstileToken(null);
      const errMsg = err instanceof Error ? err.message : "Verification failed. Try again.";
      addToast("error", errMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full">
      {/* Toast Notifications - Highly mobile responsive placement */}
      <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3 w-[calc(100%-2rem)] max-w-sm pointer-events-none left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
              className={`p-4 rounded-2xl shadow-xl flex items-start gap-3 border pointer-events-auto backdrop-blur-md transition-colors ${
                toast.type === "success"
                  ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-200"
                  : "bg-destructive/10 border-destructive/25 text-destructive-200"
              }`}
            >
              {toast.type === "success" ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="h-5 w-5 text-destructive-400 shrink-0 mt-0.5" />
              )}
              <div className="flex-1 text-sm font-semibold text-foreground">
                {toast.message}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-muted-foreground hover:text-foreground text-xs font-bold transition-colors cursor-pointer shrink-0 ml-1"
                type="button"
                aria-label="Close Notification"
              >
                ✕
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-5"
          >
            {/* Honeypot field (hidden from users, will trap spam bots trying to auto-fill) */}
            <div style={{ display: "none" }} aria-hidden="true">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("honeypot")}
              />
            </div>

            {/* Name */}
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="e.g. Rahul Sharma"
                {...register("name")}
                className={`h-[52px] md:h-12 text-sm sm:text-base rounded-xl border bg-background/50 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/60 ${
                  errors.name ? "border-destructive focus:border-destructive" : "border-border/40"
                }`}
              />
              {errors.name && (
                <p className="text-xs text-destructive font-medium mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="rahul@company.com"
                {...register("email")}
                className={`h-[52px] md:h-12 text-sm sm:text-base rounded-xl border bg-background/50 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/60 ${
                  errors.email ? "border-destructive focus:border-destructive" : "border-border/40"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-destructive font-medium mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                Mobile / WhatsApp Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 73874 50332"
                {...register("phone")}
                className={`h-[52px] md:h-12 text-sm sm:text-base rounded-xl border bg-background/50 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/60 ${
                  errors.phone ? "border-destructive focus:border-destructive" : "border-border/40"
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-destructive font-medium mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Project Details */}
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="projectDetails" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                Project Details <span className="text-destructive">*</span>
              </Label>
              <textarea
                id="projectDetails"
                rows={4}
                placeholder="Tell us what you want to build, target launch timeline, or budget..."
                {...register("projectDetails")}
                className={`flex w-full rounded-xl border bg-background/50 px-3 py-2.5 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 resize-none h-[120px] ${
                  errors.projectDetails ? "border-destructive focus-visible:ring-destructive" : "border-border/40"
                }`}
              />
              {errors.projectDetails && (
                <p className="text-xs text-destructive font-medium mt-1">{errors.projectDetails.message}</p>
              )}
            </div>

            {/* Cloudflare Turnstile CAPTCHA (Managed mode) */}
            <div className="py-1 flex justify-center w-full">
              <TurnstileWidget
                ref={turnstileRef}
                onVerify={handleTurnstileVerify}
                onExpire={handleTurnstileExpire}
                onError={handleTurnstileError}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting || (Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) && !turnstileToken)}
              className={`w-full h-[52px] md:h-12 rounded-xl font-semibold shadow-md mt-2 flex items-center justify-center gap-2 text-sm sm:text-base transition-all duration-200 ${
                isSubmitting || (Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) && !turnstileToken)
                  ? "opacity-60 cursor-not-allowed"
                  : "cursor-pointer hover:opacity-95 active:scale-[0.99]"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                  <span>Submitting Request...</span>
                </>
              ) : Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) && !turnstileToken ? (
                "Complete Security Check to Submit"
              ) : (
                "Get a Free Quote"
              )}
            </Button>
          </motion.form>
        ) : (
          <motion.div
            key="success-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center text-center py-6 px-2 sm:py-10 space-y-5"
          >
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner">
              <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 animate-pulse" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                Request Sent Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-sm leading-relaxed font-medium">
                Thank you! We have successfully connected. We&apos;ll analyze your requirements and reply within a few hours.
              </p>
            </div>

            <Button
              onClick={() => setIsSuccess(false)}
              variant="outline"
              className="rounded-xl px-5 h-10 sm:h-11 text-xs sm:text-sm font-semibold cursor-pointer border-border/60 hover:bg-secondary/80 text-foreground transition-all duration-200"
            >
              Send Another Request
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
