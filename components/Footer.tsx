import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-background/40 border-t border-border-custom pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-border-custom/60">
          {/* Left Column: Brand */}
          <div className="flex flex-col space-y-4">
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-white border border-border-custom overflow-hidden shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logos/logo.png"
                  alt="AqNoorLabs Symbol"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-display font-bold text-xl text-foreground tracking-tight">
                AqNoor<span className="text-brand">Labs</span>
              </span>
            </a>
            <p className="text-sm text-muted font-sans max-w-xs leading-relaxed">
              AqNoorLabs is a premium software development company, transforming ideas into scalable, production-ready systems.
            </p>
          </div>

          {/* Middle Column: Navigation */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-display font-bold text-foreground uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-brand font-sans transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Contact info */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-display font-bold text-foreground uppercase tracking-wider">
              Contact Details
            </h4>
            <div className="space-y-2 text-sm text-muted font-sans">
              <p className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-muted/65 mb-0.5">Email</span>
                <a
                  href="mailto:aqnoorlabs@gmail.com"
                  className="text-brand hover:text-brand-light transition-colors duration-200"
                >
                  aqnoorlabs@gmail.com
                </a>
              </p>
              <p className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-muted/65 mb-0.5">Phone</span>
                <a
                  href="tel:8767395353"
                  className="text-brand hover:text-brand-light transition-colors duration-200"
                >
                  +91 8767395353
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row: copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-muted font-sans space-y-4 sm:space-y-0">
          <p>© 2026 AqNoorLabs. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="#services" className="hover:text-brand transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
