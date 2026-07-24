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
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-background/80 backdrop-blur-md border-b border-border-custom"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-white border border-border-custom overflow-hidden shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logos/logo.png"
                alt="AQNoorLabs Symbol"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="font-display font-bold text-xl text-foreground tracking-tight">
              AqNoor<span className="text-brand">Labs</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-sans font-medium text-muted hover:text-brand transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:block">
            <Button
              href="#contact-form"
              size="sm"
              className="bg-brand text-white border-none shadow-[0_4px_14px_rgba(108,99,255,0.45)] hover:shadow-[0_6px_20px_rgba(108,99,255,0.6)] hover:scale-[1.03]"
            >
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-brand transition-colors duration-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            <LucideIcon name={isOpen ? "X" : "Menu"} className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-45 bg-foreground/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Drawer Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-surface shadow-2xl p-8 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-8 mt-16">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-display font-semibold text-muted hover:text-brand transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-8 flex flex-col space-y-4">
                <Button
                  href="#contact-form"
                  size="md"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-brand text-white border-none shadow-[0_4px_14px_rgba(108,99,255,0.45)] hover:shadow-[0_6px_20px_rgba(108,99,255,0.6)]"
                >
                  Book Free Consultation
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
