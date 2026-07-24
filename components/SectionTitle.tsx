"use client";

import { motion } from "framer-motion";
import { FADE_UP } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  tag,
  title,
  description,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={FADE_UP}
    >
      {tag && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-brand-light/10 text-brand font-sans">
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground tracking-tight leading-[1.15] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-muted font-sans max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
