"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import Button from "@/components/Button";
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

  useEffect(() => {
    const sendAbandonedData = () => {
      if (hasSubmittedRef.current) return;
      const current = formDataRef.current;
      if (!current) return;

      const phoneDigits = (current.phone || "").replace(/\D/g, "");
      const hasEmail = (current.email || "").includes("@") && (current.email || "").length >= 5;
      const hasPhone = phoneDigits.length >= 5;

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

      hasSubmittedRef.current = true;
      setIsSuccess(true);
      addToast("success", "Thank you! We'll contact you shortly.");
      reset();
      turnstileRef.current?.reset();
      setTurnstileToken(null);
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
      {/* Toast Notifications */}
      <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3 w-[calc(100%-2rem)] max-w-sm pointer-events-none left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`p-4 rounded shadow-lg flex items-start gap-3 border pointer-events-auto transition-colors ${
              toast.type === "success"
                ? "bg-emerald-900 text-white border-emerald-700"
                : "bg-red-900 text-white border-red-700"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
            )}
            <div className="flex-1 text-sm font-semibold">
              {toast.message}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-300 hover:text-white text-xs font-bold transition-colors cursor-pointer shrink-0 ml-1"
              type="button"
              aria-label="Close Notification"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {!isSuccess ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          {/* Honeypot field */}
          <div style={{ display: "none" }} aria-hidden="true">
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("honeypot")}
            />
          </div>

          {/* Name */}
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
              Full Name <span className="text-red-600">*</span>
            </Label>
            <Input
              id="name"
              placeholder="e.g. Rahul Sharma"
              {...register("name")}
              className={`h-11 text-sm rounded border bg-white text-slate-900 placeholder:text-slate-400 font-medium ${
                errors.name ? "border-red-500" : "border-slate-300 focus:border-[#0052cc]"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-600 font-semibold mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
              Corporate Email Address <span className="text-red-600">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="rahul@company.com"
              {...register("email")}
              className={`h-11 text-sm rounded border bg-white text-slate-900 placeholder:text-slate-400 font-medium ${
                errors.email ? "border-red-500" : "border-slate-300 focus:border-[#0052cc]"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-600 font-semibold mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Mobile Number */}
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
              Mobile / WhatsApp Contact <span className="text-red-600">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 73874 50332"
              {...register("phone")}
              className={`h-11 text-sm rounded border bg-white text-slate-900 placeholder:text-slate-400 font-medium ${
                errors.phone ? "border-red-500" : "border-slate-300 focus:border-[#0052cc]"
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-600 font-semibold mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-1.5">
            <Label htmlFor="projectDetails" className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
              System Specification / Requirements <span className="text-red-600">*</span>
            </Label>
            <textarea
              id="projectDetails"
              rows={4}
              placeholder="Describe your software project, target features, timelines, or budget constraints..."
              {...register("projectDetails")}
              className={`flex w-full rounded border bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0052cc] resize-none h-[110px] font-medium ${
                errors.projectDetails ? "border-red-500" : "border-slate-300"
              }`}
            />
            {errors.projectDetails && (
              <p className="text-xs text-red-600 font-semibold mt-1">{errors.projectDetails.message}</p>
            )}
          </div>

          {/* CAPTCHA */}
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
            variant="primary"
            size="lg"
            disabled={isSubmitting || (Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) && !turnstileToken)}
            className="w-full font-bold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                <span>Processing Specification...</span>
              </>
            ) : Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) && !turnstileToken ? (
              "Complete Security Verification to Submit"
            ) : (
              "Submit Project Specification"
            )}
          </Button>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-6 px-2 space-y-4">
          <div className="flex h-14 w-14 items-center justify-center rounded bg-emerald-100 text-emerald-700 border border-emerald-300">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#162032] font-display">
              Technical Inquiry Received
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed font-medium">
              Thank you for providing your project scope. Our engineering lead will analyze your request and reply with a quote promptly.
            </p>
          </div>

          <Button
            onClick={() => setIsSuccess(false)}
            variant="outline"
            size="sm"
            className="font-bold"
          >
            Submit Another Specification
          </Button>
        </div>
      )}
    </div>
  );
}

