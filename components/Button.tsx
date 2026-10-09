"use client";

import React from "react";
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
    "inline-flex items-center justify-center font-sans font-bold rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#0052cc]/40 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variants = {
    // Primary: Corporate Blue
    primary:
      "bg-[#0052cc] text-white border border-[#0052cc] hover:bg-[#0043a8] hover:border-[#0043a8] shadow-xs",
    // Secondary: Light Slate Accent
    secondary:
      "bg-slate-100 text-slate-900 border border-slate-300 hover:bg-slate-200 shadow-xs",
    // Outline: Solid Light Card Outline
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-xs",
    // Text: Muted Slate
    text: "text-slate-700 hover:text-[#0052cc] hover:bg-slate-100",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs uppercase tracking-wider",
    md: "px-5 py-2.5 text-xs sm:text-sm uppercase tracking-wider",
    lg: "px-7 py-3 text-sm sm:text-base uppercase tracking-wider",
  };

  const buttonClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        style={{ cursor: "pointer" }}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClasses}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      {...props}
    >
      {children}
    </button>
  );
}

