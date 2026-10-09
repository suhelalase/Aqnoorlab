"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import LucideIcon from "@/components/LucideIcon";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Our Team", href: "/team" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cancellation & Refund", href: "/cancellation-and-refund-policy" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 flex items-center bg-white/95 backdrop-blur-md border-b border-slate-200 ${
          scrolled ? "h-16 shadow-sm" : "h-16 md:h-20"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Brand Tag */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-lg bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shadow-xs">
              <Image
                src="/images/logo.png"
                alt="AqNoorLabs Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg md:text-xl text-slate-900 tracking-tight leading-none">
                AqNoor<span className="text-[#0052cc]">Labs</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-tight mt-0.5 hidden sm:block font-medium">
                Software Systems &amp; AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-sans font-semibold text-slate-700 hover:text-[#0052cc] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}

            {/* Policies Dropdown Menu */}
            <div className="relative group py-2">
              <button
                type="button"
                className="flex items-center space-x-1 text-sm font-sans font-semibold text-slate-700 hover:text-[#0052cc] transition-colors duration-150 focus:outline-none"
              >
                <span>Policies</span>
                <LucideIcon
                  name="ChevronDown"
                  className="w-4 h-4 text-slate-400 group-hover:text-[#0052cc] transition-transform duration-150 group-hover:rotate-180"
                />
              </button>
              <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                <div className="w-56 bg-white rounded-lg border border-slate-200 p-1.5 shadow-lg flex flex-col space-y-1">
                  {LEGAL_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="px-3 py-2 rounded text-xs font-sans font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#0052cc] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              href="/contact"
              size="sm"
              className="bg-[#0052cc] hover:bg-[#0043a8] text-white text-xs font-bold uppercase tracking-wider rounded-md px-4 py-2 border-none shadow-sm"
            >
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-[#0052cc] focus:outline-none"
            aria-label="Toggle menu"
          >
            <LucideIcon name={isOpen ? "X" : "Menu"} className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-xs md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white text-slate-900 border-l border-slate-200 p-6 flex flex-col justify-between shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Mobile Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div className="flex items-center space-x-2.5">
                  <div className="relative w-8 h-8 rounded bg-slate-50 p-0.5 border border-slate-200 flex items-center justify-center">
                    <Image
                      src="/images/logo.png"
                      alt="AqNoorLabs Logo"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-display font-bold text-lg text-slate-900 tracking-tight">
                    AqNoor<span className="text-[#0052cc]">Labs</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-900 focus:outline-none"
                  aria-label="Close menu"
                >
                  <LucideIcon name="X" className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-semibold text-slate-700 hover:text-[#0052cc] transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200">
                <p className="text-xs uppercase font-mono tracking-wider text-slate-500 font-bold mb-3">
                  Legal &amp; Policies
                </p>
                <div className="flex flex-col space-y-2">
                  {LEGAL_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-semibold text-slate-600 hover:text-[#0052cc] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col space-y-3">
              <Button
                href="/contact"
                size="md"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#0052cc] hover:bg-[#0043a8] text-white border-none py-3 text-sm font-bold uppercase tracking-wider rounded-md shadow-sm"
              >
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
