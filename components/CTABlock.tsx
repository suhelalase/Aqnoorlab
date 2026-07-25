"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CTABlock() {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
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

            <div className="relative z-10 p-8 text-center md:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h2 className="mb-6 text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl tracking-tight">
                  Ready to Build Your Next Project?
                </h2>

                <p className="mx-auto mb-10 max-w-3xl text-xl text-muted-foreground md:text-2xl leading-relaxed font-medium">
                  Tell us what you&apos;re trying to build — we&apos;ll show you exactly how we&apos;d do it, what it costs, and how long it&apos;ll take.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-col justify-center gap-5 sm:flex-row items-center"
                >
                  <a href="#contact">
                    <Button size="lg" className="group w-full gap-2.5 sm:w-auto rounded-full font-bold text-base md:text-lg px-9 py-6 cursor-pointer shadow-xl shadow-primary/25 hover:scale-105 transition-transform">
                      Get a Free Quote
                      <MessageSquare className="h-5 w-5 transition-transform group-hover:scale-110" />
                    </Button>
                  </a>

                  <a href="#projects">
                    <Button
                      size="lg"
                      variant="outline"
                      className="group w-full gap-2.5 sm:w-auto rounded-full font-bold text-base md:text-lg px-9 py-6 cursor-pointer hover:scale-105 transition-transform"
                    >
                      See Our Work
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mt-10 flex flex-col items-center justify-center gap-4 text-base text-muted-foreground sm:flex-row sm:gap-8 font-medium"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                    <span className="text-emerald-600 font-semibold">Accepting new projects across India</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-primary font-bold">⚡</span>
                    <span className="font-semibold text-foreground/80">We usually reply within a few hours — no chasing us for updates</span>
                  </div>
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
