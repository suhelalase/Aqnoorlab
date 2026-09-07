import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, LEGAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-background/40 border-t border-border p-8 md:py-16 md:px-12">
      <div className="max-w-[1440px] mx-auto px-0 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-12 border-b border-border/60">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3.5 group">
              <div className="relative w-14 h-14 rounded-2xl bg-white border border-border overflow-hidden shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105 p-1">
                <Image
                  src="/images/logo.png"
                  alt="AqNoorLabs Symbol"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <span className="font-display font-bold text-2xl md:text-3xl text-foreground tracking-tight">
                AqNoor<span className="text-brand">Labs</span>
              </span>
            </Link>
            <p className="text-base text-foreground/70 font-sans max-w-sm leading-relaxed">
              AqNoorLabs is a software development company helping Indian businesses build websites, apps, and AI tools that actually work.
            </p>
            <p className="text-xs md:text-sm text-foreground/50 font-sans font-medium">
              GST Registered • Milestone-Based Pricing
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <h4 className="text-sm font-display font-bold text-foreground uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 flex flex-col items-center sm:items-start">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-foreground/65 hover:text-brand font-sans font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <h4 className="text-sm font-display font-bold text-foreground uppercase tracking-wider">
              Legal &amp; Policies
            </h4>
            <ul className="space-y-2.5 flex flex-col items-center sm:items-start">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-foreground/65 hover:text-brand font-sans font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <h4 className="text-sm font-display font-bold text-foreground uppercase tracking-wider">
              Contact Details
            </h4>
            <div className="space-y-3.5 text-base text-foreground/65 font-sans flex flex-col items-center sm:items-start">
              <p className="flex flex-col items-center sm:items-start">
                <span className="text-xs uppercase tracking-wider text-foreground/45 font-semibold mb-0.5">General Inquiries</span>
                <a
                  href="mailto:hi@aqnoorlabs.online"
                  className="text-brand hover:text-brand-deep font-semibold transition-colors duration-200"
                >
                  hi@aqnoorlabs.online
                </a>
              </p>
              <p className="flex flex-col items-center sm:items-start">
                <span className="text-xs uppercase tracking-wider text-foreground/45 font-semibold mb-0.5">Support</span>
                <a
                  href="mailto:support@aqnoorlabs.online"
                  className="text-brand hover:text-brand-deep font-semibold transition-colors duration-200"
                >
                  support@aqnoorlabs.online
                </a>
              </p>
              <p className="flex flex-col items-center sm:items-start">
                <span className="text-xs uppercase tracking-wider text-foreground/45 font-semibold mb-0.5">Phone &amp; WhatsApp</span>
                <a
                  href="https://wa.me/917387450332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand-deep transition-colors duration-200 font-semibold text-base md:text-lg"
                >
                  +91 7387450332 (WhatsApp)
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row with button-styled policy navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4 text-center md:text-left">
          <p className="text-xs md:text-sm text-foreground/50 font-sans">
            © 2026 AqNoorLabs. All rights reserved. (Entity: Abuswaliha Bashir Shaikh)
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-xs md:text-sm font-sans font-semibold uppercase tracking-wider border border-border/60 bg-background/60 text-foreground/75 hover:text-white hover:bg-brand hover:border-brand shadow-sm transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
