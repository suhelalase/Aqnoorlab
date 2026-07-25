"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Mail, Phone, ShieldCheck, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const contactSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  mobile: z
    .string()
    .min(7, { message: "Please enter a valid mobile number." })
    .regex(/^[+]?[0-9\s\-().]{7,20}$/, { message: "Please enter a valid mobile number." }),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  const checkmarkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" as any, delay: 0.2 },
    },
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-background relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Company Info & Copy (System Design, Scale, Cache, UI/UX, Hosting) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div>
              <Badge
                variant="outline"
                className="mb-4 inline-flex items-center gap-2 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur"
              >
                Get In Touch
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
                Let's Architect.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
                At <span className="font-semibold text-foreground">AqNoorLabs</span>, we engineering premium software systems with a strict focus on:
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">System Design & Scale</h4>
                    <p className="text-xs text-muted-foreground leading-normal mt-0.5">
                      Distributed microservices and database query optimization built to scale seamlessly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Caching, Hosting & UI/UX</h4>
                    <p className="text-xs text-muted-foreground leading-normal mt-0.5">
                      Advanced Redis cache layers, AWS hosting integration, and pixel-perfect dynamic designs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Details */}
            <div className="space-y-2 border-t border-border/40 pt-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Mail className="h-3.5 w-3.5 text-primary" />
                <a href="mailto:aqnoorlabs@gmail.com" className="hover:text-primary transition-colors">
                  aqnoorlabs@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Phone className="h-3.5 w-3.5 text-primary" />
                <a href="tel:8767395353" className="hover:text-primary transition-colors">
                  +91 8767395353
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form Container (Fits completely on page) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 bg-card/40 border border-border/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-center min-h-[380px]"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  {/* Name */}
                  <div className="space-y-1.5">
                    <Label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      {...register("fullName")}
                      className={`rounded-xl border bg-background/50 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/60 ${
                        errors.fullName ? "border-destructive focus:border-destructive" : "border-border/40"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-destructive">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email")}
                      className={`rounded-xl border bg-background/50 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/60 ${
                        errors.email ? "border-destructive focus:border-destructive" : "border-border/40"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-1.5">
                    <Label htmlFor="mobile" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Mobile Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="+91 98765 43210"
                      {...register("mobile")}
                      className={`rounded-xl border bg-background/50 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/60 ${
                        errors.mobile ? "border-destructive focus:border-destructive" : "border-border/40"
                      }`}
                    />
                    {errors.mobile && (
                      <p className="text-xs text-destructive">{errors.mobile.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Project Message <span className="text-muted-foreground font-normal normal-case">(optional)</span>
                    </Label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Share details about scaling load, database caching, or UI designs..."
                      {...register("message")}
                      className={`flex w-full rounded-xl border bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 resize-none ${
                        errors.message ? "border-destructive focus-visible:ring-destructive" : "border-border/40"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl font-semibold cursor-pointer shadow-md mt-2"
                  >
                    {isSubmitting ? "Sending Spec..." : "Send Message"}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center p-6 space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-10 w-10" viewBox="0 0 52 52">
                      <motion.circle
                        cx="26"
                        cy="26"
                        r="25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      />
                      <motion.path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 27l8 8 16-16"
                        variants={checkmarkVariants}
                        initial="hidden"
                        animate="visible"
                      />
                    </svg>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground max-w-sm leading-relaxed">
                      Thank you. Our systems architect has received your specifications and will respond in under 24 hours to discuss scalability and query setups.
                    </p>
                  </div>

                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    className="rounded-xl cursor-pointer"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
