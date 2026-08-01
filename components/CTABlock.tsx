"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CTABlock() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative overflow-hidden border-border bg-card shadow-2xl rounded-3xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

            {/* Glow blob */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/10 blur-[80px] pointer-events-none" />

            <div className="relative z-10 p-8 text-center md:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {/* Heading */}
                <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-5xl lg:text-6xl tracking-tight">
                  Ready to Build Your Next Project?
                </h2>

                {/* Sub-text */}
                <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground md:text-lg leading-relaxed font-medium">
                  Tell us what you&apos;re trying to build — we&apos;ll show you exactly how we&apos;d do it, what it costs, and how long it&apos;ll take.
                </p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-col justify-center gap-4 sm:flex-row items-center"
                >
                  <a href="#contact">
                    <Button size="lg" className="group w-full gap-2.5 sm:w-auto rounded-full font-bold text-base px-8 py-5 cursor-pointer shadow-xl shadow-primary/25 hover:scale-105 transition-transform">
                      Get a Free Quote
                      <MessageSquare className="h-5 w-5 transition-transform group-hover:scale-110" />
                    </Button>
                  </a>

                  <a href="#projects">
                    <Button
                      size="lg"
                      variant="outline"
                      className="group w-full gap-2.5 sm:w-auto rounded-full font-bold text-base px-8 py-5 cursor-pointer hover:scale-105 transition-transform"
                    >
                      See Our Work
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </motion.div>

                {/* Trust line */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-muted-foreground font-medium"
                >
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 inline-block" />
                    <span className="text-emerald-600 font-semibold">Accepting new projects across India</span>
                  </span>
                  <span className="hidden sm:inline-block text-border">•</span>
                  <span className="font-semibold text-foreground/70">We usually reply within a few hours — no chasing us for updates</span>
                </motion.div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
export default CTABlock;
