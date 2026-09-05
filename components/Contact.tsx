"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ShieldCheck, Cpu, MessageSquare, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-10 md:py-20 bg-background relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-primary/5 blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-primary/5 blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Company Info & Copy (System Design, Scale, Cache, UI/UX, Hosting) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 flex flex-col justify-between space-y-8 md:space-y-0"
          >
            <div>
              <Badge
                variant="outline"
                className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border-primary/20 bg-primary/5 px-3 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary backdrop-blur"
              >
                Get In Touch
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4 sm:mb-5 leading-tight">
                Let&apos;s Build Your Project.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
                At <span className="font-semibold text-foreground">AqNoorLabs</span>, we focus on getting your project right the first time:
              </p>

              <div className="mt-6 sm:mt-8 space-y-5">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="mt-1 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Cpu className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-foreground">Built to Handle Growth</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-0.5 sm:mt-1">
                      Your app won&apos;t break or slow down as your users grow — we plan for scale from day one.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="mt-1 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ShieldCheck className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-foreground">Fast, Reliable &amp; Good-Looking</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-0.5 sm:mt-1">
                      Quick load times, dependable hosting, and a design your customers will actually enjoy using.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Details & WhatsApp Callout */}
            <div className="space-y-5 border-t border-border/40 pt-6 mt-6 md:mt-0">
              {/* Enhanced WhatsApp Button */}
              <a
                href="https://wa.me/917387450332?text=Hi%20AqNoorLabs%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/25 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/10 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/30 group-hover:scale-105 transition-transform duration-300">
                    <MessageSquare className="h-5 w-5 fill-white/20" />
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border-2 border-background"></span>
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-base font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                        Chat on WhatsApp
                      </span>
                      <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                        Online
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">
                      Fast response • Direct developer contact
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center justify-center h-8 w-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </a>

              <div className="flex flex-col space-y-3.5 text-sm sm:text-base text-muted-foreground pt-2">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold mb-0.5">General Inquiries</span>
                    <a href="mailto:hi@aqnoorlabs.online" className="hover:text-primary font-semibold transition-colors break-all">
                      hi@aqnoorlabs.online
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold mb-0.5">Support</span>
                    <a href="mailto:support@aqnoorlabs.online" className="hover:text-primary font-semibold transition-colors break-all">
                      support@aqnoorlabs.online
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold mb-0.5">Phone &amp; WhatsApp</span>
                    <a href="tel:+917387450332" className="hover:text-primary font-semibold transition-colors">
                      +91 7387450332
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full max-w-[420px] md:max-w-none mx-auto md:mx-0 md:col-span-7 bg-card/40 border border-border/40 rounded-[20px] md:rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-xl flex flex-col justify-center min-h-[380px] sm:min-h-[400px]"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
