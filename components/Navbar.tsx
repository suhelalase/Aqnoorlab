"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import Button from "./Button";
import LucideIcon from "./LucideIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-background/80 backdrop-blur-md border-b border-border"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3.5 group">
            <div className="relative w-14 h-14 rounded-2xl bg-white border border-border overflow-hidden shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105 p-1">
              <Image
                src="/logos/logo.png"
                alt="AQNoorLabs Symbol"
                width={44}
                height={44}
                className="object-contain"
              />
            </div>
            <span className="font-display font-extrabold text-2xl md:text-3xl text-foreground tracking-tight">
              AqNoor<span className="text-brand">Labs</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base md:text-lg font-sans font-semibold text-foreground/75 hover:text-brand transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              href="#contact"
              size="md"
              className="bg-brand text-white text-base font-bold border-none shadow-[0_4px_14px_rgba(108,99,255,0.45)] hover:shadow-[0_6px_20px_rgba(108,99,255,0.6)] hover:scale-[1.03] px-6 py-2.5"
            >
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-brand transition-colors duration-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            <LucideIcon name={isOpen ? "X" : "Menu"} className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-45 bg-foreground/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-background shadow-2xl p-8 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-8 mt-16">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-display font-semibold text-foreground/70 hover:text-brand transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-8 flex flex-col space-y-4">
                <Button
                  href="#contact"
                  size="md"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-brand text-white border-none shadow-[0_4px_14px_rgba(108,99,255,0.45)] hover:shadow-[0_6px_20px_rgba(108,99,255,0.6)]"
                >
                  Get a Free Quote
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
