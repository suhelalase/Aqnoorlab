"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  disabled = false,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand/40 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    // Primary: Navy Blue background, transitions to Orange on hover
    primary:
      "bg-foreground text-white border border-transparent shadow-[0_4px_12px_rgba(4,50,109,0.25)] hover:bg-brand hover:shadow-[0_6px_18px_rgba(245,143,32,0.3)] hover:-translate-y-[1px]",
    // Secondary: Orange background, transitions to darker Orange
    secondary:
      "bg-brand text-white border border-transparent shadow-[0_4px_12px_rgba(245,143,32,0.25)] hover:bg-brand-deep hover:-translate-y-[1px]",
    // Outline: Navy Blue outline, transitions to filled Navy on hover
    outline:
      "border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-white hover:-translate-y-[1px]",
    // Text: Muted dark grey-blue text, hover underline
    text: "text-muted hover:text-foreground hover:bg-brand-light/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider",
    md: "px-6 py-3 text-sm uppercase tracking-wider",
    lg: "px-8 py-4 text-base uppercase tracking-wider",
  };

  const buttonClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileTap={{ scale: 0.98 }}
        onClick={onClick as any}
        style={{ cursor: "pointer" }}
        {...(props as any)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={buttonClasses}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
