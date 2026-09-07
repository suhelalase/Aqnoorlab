"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, LEGAL_LINKS } from "@/lib/constants";
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

  // Prevent body scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center ${
          scrolled || isOpen
            ? "h-16 bg-background/80 backdrop-blur-md border-b border-border/45"
            : "h-16 md:h-[96px] bg-background/80 backdrop-blur-md border-b border-border/45 md:bg-transparent md:backdrop-blur-none md:border-b-0"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3.5 group">
            <div className="relative w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white border border-border overflow-hidden shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105 p-1">
              <Image
                src="/images/logo.png"
                alt="AQNoorLabs Symbol"
                width={44}
                height={44}
                className="object-contain w-8 h-8 md:w-11 md:h-11"
                priority
              />
            </div>
            <span className="font-display font-extrabold text-xl md:text-3xl text-foreground tracking-tight">
              AqNoor<span className="text-brand">Labs</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm lg:text-base font-sans font-semibold text-foreground/75 hover:text-brand transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}

            {/* Policies Dropdown Menu */}
            <div className="relative group py-2">
              <button
                type="button"
                className="flex items-center space-x-1 text-sm lg:text-base font-sans font-semibold text-foreground/75 group-hover:text-brand transition-colors duration-200 focus:outline-none"
              >
                <span>Policies</span>
                <LucideIcon
                  name="ChevronDown"
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-foreground/60 group-hover:text-brand"
                />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                <div className="w-56 bg-background/95 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-border/80 flex flex-col space-y-1">
                  {LEGAL_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="px-3.5 py-2 rounded-xl text-xs md:text-sm font-sans font-semibold text-foreground/80 hover:text-white hover:bg-brand transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              href="/contact"
              size="md"
              className="bg-brand text-white text-xs lg:text-base font-bold border-none shadow-[0_4px_14px_rgba(108,99,255,0.45)] hover:shadow-[0_6px_20px_rgba(108,99,255,0.6)] hover:scale-[1.03] px-4 py-2 lg:px-6 lg:py-2.5"
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
            className="fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-md md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-background shadow-2xl p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Mobile Drawer Header */}
                <div className="flex items-center justify-between pb-6 border-b border-border/50 mb-8">
                  <div className="flex items-center space-x-3.5">
                    <div className="relative w-10 h-10 rounded-xl bg-white border border-border overflow-hidden shadow-sm flex items-center justify-center p-1">
                      <Image
                        src="/images/logo.png"
                        alt="AQNoorLabs Symbol"
                        width={30}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-display font-extrabold text-xl text-foreground tracking-tight">
                      AqNoor<span className="text-brand">Labs</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-foreground hover:text-brand transition-colors duration-200 focus:outline-none"
                    aria-label="Close menu"
                  >
                    <LucideIcon name="X" className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col space-y-5">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-sans font-semibold text-foreground/80 hover:text-brand transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* Policies in Mobile Menu */}
                <div className="mt-6 pt-5 border-t border-border/50">
                  <p className="text-xs uppercase tracking-wider text-foreground/45 font-bold mb-3">
                    Legal &amp; Policies
                  </p>
                  <div className="flex flex-col space-y-2.5">
                    {LEGAL_LINKS.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-sans font-semibold text-foreground/75 hover:text-brand transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col space-y-4">
                <Button
                  href="/contact"
                  size="md"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-brand text-white border-none shadow-[0_4px_14px_rgba(108,99,255,0.45)] hover:shadow-[0_6px_20px_rgba(108,99,255,0.6)] py-3.5 text-base font-bold"
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
