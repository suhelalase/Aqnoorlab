"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { FADE_UP, SCALE_UP } from "@/lib/animations";
import Button from "./Button";
import LucideIcon from "./LucideIcon";
import SectionTitle from "./SectionTitle";
import SocialsCard from "./SocialsCard";

const contactSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  company: z.string().optional(),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  budget: z.string().min(1, { message: "Please select a budget range." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
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
      phone: "",
      company: "",
      projectType: "",
      budget: "",
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

  return (
    <section id="contact" className="py-12 md:py-24 bg-white overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-light/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          tag="Contact"
          title="Get In Touch"
          description="Have an idea? Let's discuss your next software project and map out a solution."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-8">
          {/* Left Column: Info Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className="md:col-span-4 flex flex-col items-center text-center md:items-start md:text-left space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-4">
                Let's Start a Conversation
              </h3>
              <p className="text-sm sm:text-base text-muted font-sans leading-relaxed">
                Whether you have a fully drafted spec document or just a rough idea, we're here to brainstorm and guide your architecture.
              </p>
            </div>

            <div className="flex flex-col space-y-4 pt-2 w-full items-center md:items-start">
              {/* Email */}
              <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-4 space-y-2 md:space-y-0">
                <div className="w-10 h-10 rounded-xl bg-brand-light/10 text-brand flex items-center justify-center flex-shrink-0">
                  <LucideIcon name="Mail" className="w-4 h-4" />
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <h4 className="font-display font-bold text-xs text-foreground uppercase tracking-wider">Email Us</h4>
                  <a
                    href="mailto:aqnoorlabs@gmail.com"
                    className="text-sm text-foreground font-semibold hover:text-brand transition-colors font-sans"
                  >
                    aqnoorlabs@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-4 space-y-2 md:space-y-0 mt-4 md:mt-0">
                <div className="w-10 h-10 rounded-xl bg-brand-light/10 text-brand flex items-center justify-center flex-shrink-0">
                  <LucideIcon name="Phone" className="w-4 h-4" />
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <h4 className="font-display font-bold text-xs text-foreground uppercase tracking-wider">Call Us</h4>
                  <a
                    href="tel:8767395353"
                    className="text-sm text-foreground font-semibold hover:text-brand transition-colors font-sans"
                  >
                    +91 8767395353
                  </a>
                </div>
              </div>
            </div>

            {/* Socials Card block */}
            <div className="pt-4 flex justify-center md:justify-start w-full scale-90 sm:scale-100 origin-center md:origin-left">
              <SocialsCard />
            </div>
          </motion.div>

          {/* Right Column: Form Container */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={SCALE_UP}
            className="md:col-span-8 bg-background/50 border border-border-custom rounded-3xl p-6 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.01)] relative min-h-[450px] flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  id="contact-form"
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground font-sans">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        {...register("fullName")}
                        className={`px-4 py-3 rounded-xl bg-white border ${
                          errors.fullName ? "border-red-500" : "border-border-custom"
                        } focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand text-foreground font-sans text-sm transition-all shadow-sm`}
                      />
                      {errors.fullName && (
                        <span className="text-xs text-red-500 font-sans">{errors.fullName.message}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground font-sans">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        {...register("email")}
                        className={`px-4 py-3 rounded-xl bg-white border ${
                          errors.email ? "border-red-500" : "border-border-custom"
                        } focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand text-foreground font-sans text-sm transition-all shadow-sm`}
                      />
                      {errors.email && (
                        <span className="text-xs text-red-500 font-sans">{errors.email.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground font-sans">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="8767395353"
                        {...register("phone")}
                        className={`px-4 py-3 rounded-xl bg-white border ${
                          errors.phone ? "border-red-500" : "border-border-custom"
                        } focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand text-foreground font-sans text-sm transition-all shadow-sm`}
                      />
                      {errors.phone && (
                        <span className="text-xs text-red-500 font-sans">{errors.phone.message}</span>
                      )}
                    </div>

                    {/* Company */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground font-sans">Company Name (Optional)</label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        {...register("company")}
                        className="px-4 py-3 rounded-xl bg-white border border-border-custom focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand text-foreground font-sans text-sm transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Project Type */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground font-sans">Project Type</label>
                      <select
                        {...register("projectType")}
                        className={`px-4 py-3 rounded-xl bg-white border ${
                          errors.projectType ? "border-red-500" : "border-border-custom"
                        } focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand text-foreground font-sans text-sm transition-all shadow-sm`}
                      >
                        <option value="">Select Service Type...</option>
                        <option value="website">Custom Website</option>
                        <option value="webapp">Web Application</option>
                        <option value="mobile">Mobile Application</option>
                        <option value="desktop">Desktop Application</option>
                        <option value="ai">AI & Automation Solution</option>
                        <option value="cloud">Cloud Architecture</option>
                        <option value="design">UI/UX Design</option>
                        <option value="other">Other Solution</option>
                      </select>
                      {errors.projectType && (
                        <span className="text-xs text-red-500 font-sans">{errors.projectType.message}</span>
                      )}
                    </div>

                    {/* Budget Range */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground font-sans">Estimated Budget</label>
                      <select
                        {...register("budget")}
                        className={`px-4 py-3 rounded-xl bg-white border ${
                          errors.budget ? "border-red-500" : "border-border-custom"
                        } focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand text-foreground font-sans text-sm transition-all shadow-sm`}
                      >
                        <option value="">Select Budget Range...</option>
                        <option value="under-5k">Less than $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="above-50k">$50,000 +</option>
                      </select>
                      {errors.budget && (
                        <span className="text-xs text-red-500 font-sans">{errors.budget.message}</span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-foreground font-sans">Project Details / Message</label>
                    <textarea
                      rows={4}
                      placeholder="Outline what you are building, timeline expectations, or desired technologies..."
                      {...register("message")}
                      className={`px-4 py-3 rounded-xl bg-white border ${
                        errors.message ? "border-red-500" : "border-border-custom"
                      } focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand text-foreground font-sans text-sm transition-all resize-none shadow-sm`}
                    />
                    {errors.message && (
                      <span className="text-xs text-red-500 font-sans">{errors.message.message}</span>
                    )}
                  </div>

                  {/* Send Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-center"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6 shadow-md">
                    <LucideIcon name="Check" className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm sm:text-base text-muted font-sans max-w-md mb-8">
                    Thank you for reaching out to AqNoorLabs. Our engineering architects are reviewing your project requirements and will reach out to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    size="md"
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
