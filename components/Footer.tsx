import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-background/40 border-t border-border pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-border/60">

          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <a href="/" className="flex items-center space-x-3.5 group">
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
            </a>
            <p className="text-base text-foreground/70 font-sans max-w-sm leading-relaxed">
              AqNoorLabs is a software development company helping Indian businesses build websites, apps, and AI tools that actually work.
            </p>
            <p className="text-xs md:text-sm text-foreground/50 font-sans font-medium">
              GST Registered • Milestone-Based Pricing
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-display font-bold text-foreground uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5">
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

          {/* Contact */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-display font-bold text-foreground uppercase tracking-wider">
              Contact Details
            </h4>
            <div className="space-y-3.5 text-base text-foreground/65 font-sans">
              <p className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-foreground/45 font-semibold mb-0.5">Email</span>
                <a
                  href="mailto:aqnoorlabs@gmail.com"
                  className="text-brand hover:text-brand-deep font-semibold transition-colors duration-200"
                >
                  aqnoorlabs@gmail.com
                </a>
              </p>
              <p className="flex flex-col">
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

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-foreground/45 font-sans space-y-4 sm:space-y-0">
          <p>© 2026 AqNoorLabs. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="/#projects" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="/#faq" className="hover:text-brand transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
