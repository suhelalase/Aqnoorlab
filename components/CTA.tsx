"use client";

import { motion } from "framer-motion";
import { SCALE_UP } from "@/lib/animations";
import Button from "./Button";

export default function CTA() {
  return (
    <section className="py-10 md:py-20 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={SCALE_UP}
        className="relative bg-white border border-border-custom rounded-[2rem] p-8 sm:p-16 md:p-20 text-center shadow-[0_20px_60px_-10px_rgba(108,99,255,0.05)] overflow-hidden"
      >
        {/* Soft background ambient circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-light/10 blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6 md:space-y-8 relative z-10">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-brand-light/10 text-brand font-sans">
            Work With Us
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground tracking-tight leading-[1.15]">
            Let's Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
              Amazing Together
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted font-sans max-w-xl mx-auto leading-relaxed">
            Whether you need a website, mobile app, AI solution, or complete digital transformation, AQNoorLabs is ready to help.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto pt-4">
            <Button href="#contact-form" variant="primary" size="lg">
              Start Your Project
            </Button>
            <Button href="#contact-form" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
