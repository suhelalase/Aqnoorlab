"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroBlock() {
  return (
    <section id="home" className="relative flex min-h-fit md:min-h-screen w-full items-center justify-center overflow-hidden bg-background pt-28 pb-16 md:pt-0 md:pb-0">
      {/* Animated background grid */}
      <div className="hero-grid-bg" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/8 blur-[80px] pointer-events-none" />

      <div className="relative z-10 w-full md:w-[90%] max-w-4xl mx-auto px-5 md:px-0 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 180 }}
            className="mb-8 inline-block"
          >
            <div className="mx-auto flex h-32 w-32 md:h-36 md:w-36 items-center justify-center rounded-full border-4 border-primary/25 bg-gradient-to-br from-primary/20 via-background to-muted/40 p-2.5 shadow-2xl shadow-primary/20 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-white flex items-center justify-center p-1 shadow-inner">
                <Image
                  src="/images/logo.png"
                  alt="AqNoorLabs Logo"
                  width={110}
                  height={110}
                  className="object-contain scale-115 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-4xl font-bold text-foreground md:text-6xl tracking-tight"
          >
            AqNoor<span className="text-primary">Labs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-lg lg:text-xl leading-relaxed font-medium"
          >
            We build websites, apps &amp; AI systems that help your business grow — on time, on budget.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <a href="#contact" className="w-full sm:w-auto flex justify-center">
              <Button
                size="lg"
                className="w-full sm:w-auto max-w-[320px] h-[52px] sm:h-11 gap-2 rounded-full font-semibold px-8 cursor-pointer shadow-lg shadow-primary/20 flex items-center justify-center"
              >
                <Mail className="h-4 w-4 shrink-0" />
                Get a Free Quote
              </Button>
            </a>
            <a href="#projects" className="w-full sm:w-auto flex justify-center">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto max-w-[320px] h-[52px] sm:h-11 gap-2 rounded-full font-semibold px-8 cursor-pointer flex items-center justify-center"
              >
                See Our Work
                <ArrowDown className="h-4 w-4 shrink-0" />
              </Button>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-muted-foreground font-medium"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 inline-block" />
              <span className="text-emerald-600 font-semibold">Accepting new projects across India</span>
            </span>
            <span className="hidden sm:inline-block text-muted-foreground/40">•</span>
            <span className="font-medium text-muted-foreground">We usually reply within a few hours — no chasing us for updates</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <a href="#projects">
            <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
