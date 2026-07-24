"use client";

import { motion } from "framer-motion";
import { FADE_UP, SCALE_UP } from "@/lib/animations";
import Button from "./Button";
import RotatingStack from "./RotatingStack";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-8 md:pt-32 md:pb-16 px-6 md:px-12 max-w-[1440px] mx-auto overflow-hidden min-h-[85vh] flex items-center"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full hero-glow pointer-events-none -z-10" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10 w-full">
        {/* Hero Texts & CTAs (Left) */}
        <div className="md:col-span-7 flex flex-col items-center text-center md:items-start md:text-left space-y-5">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="inline-flex items-center space-x-2 bg-brand-light/10 text-foreground px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            <span>Innovating Digital Spaces</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display tracking-tight text-foreground leading-[1.15] md:leading-[1.1] max-w-2xl"
          >
            Building Digital Products <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-deep">
              That Grow Businesses
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="text-sm sm:text-base md:text-lg text-muted font-sans max-w-xl leading-relaxed"
          >
            We design and develop premium Websites, Mobile Apps, Desktop Software, AI Solutions, and business platforms for startups and enterprises.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-4 w-full sm:w-auto pt-2"
          >
            <Button href="#contact-form" variant="primary" size="md">
              Start Your Project
            </Button>
            <Button href="#services" variant="outline" size="md">
              View Services
            </Button>
          </motion.div>
        </div>

        {/* Hero Illustration / Rotating Stack (Right) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={SCALE_UP}
          className="md:col-span-5 flex items-center justify-center min-h-[220px] md:min-h-[300px] relative mt-8 md:mt-0"
        >
          <div className="scale-90 sm:scale-100 md:scale-105 lg:scale-115 xl:scale-120 transition-transform duration-300">
            <RotatingStack />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
