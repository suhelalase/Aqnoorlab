"use client";

import React from "react";
import { motion } from "framer-motion";
import { SCALE_UP } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export default function AnimatedCard({
  children,
  className,
  delay = 0,
  hoverEffect = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={SCALE_UP}
      transition={{ delay }}
      className={cn(
        "bg-surface border border-border-custom rounded-3xl p-6 sm:p-8 transition-all duration-300",
        hoverEffect && "purple-glow-hover hover:-translate-y-1.5 cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
