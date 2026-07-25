"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroBlock() {
  return (
    <section id="home" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/8 blur-[80px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12">
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
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-primary/20 bg-gradient-to-br from-primary/20 to-muted/40 p-2 shadow-xl shadow-primary/10">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-white flex items-center justify-center p-1">
                <Image
                  src="/logos/logo.png"
                  alt="AqNoorLabs Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-5xl font-bold text-foreground md:text-7xl tracking-tight"
          >
            AqNoor<span className="text-primary">Labs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed"
          >
            Engineering premium software systems with a focus on robust architecture, scalable microservices, intelligent caching, and exceptional UI/UX.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#contact">
              <Button size="lg" className="gap-2 rounded-full font-semibold px-8">
                <Mail className="h-4 w-4" />
                Get in Touch
              </Button>
            </a>
            <a href="#projects">
              <Button size="lg" variant="outline" className="gap-2 rounded-full font-semibold px-8">
                View Projects
                <ArrowDown className="h-4 w-4" />
              </Button>
            </a>
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
