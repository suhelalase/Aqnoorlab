import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, LEGAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200 p-8 md:py-16 md:px-12">
      <div className="max-w-[1440px] mx-auto px-0 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-12 border-b border-slate-200">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-11 h-11 rounded-lg bg-white border border-slate-200 p-1 flex items-center justify-center shadow-xs">
                <Image
                  src="/images/logo.png"
                  alt="AqNoorLabs Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-slate-900 tracking-tight leading-none">
                  AqNoor<span className="text-[#0052cc]">Labs</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-tight mt-0.5">
                  Software Systems &amp; AI
                </span>
              </div>
            </Link>
            <p className="text-xs md:text-sm text-slate-600 font-sans max-w-sm leading-relaxed font-normal">
              AqNoorLabs is a custom software engineering company helping Indian businesses build scalable web systems, mobile applications, desktop software, and AI automation.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white border border-slate-200 text-[11px] font-mono text-slate-600 shadow-xs">
              <span>GST REGISTERED &bull; MILESTONE PRICING</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3.5">
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 flex flex-col items-center sm:items-start">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs md:text-sm text-slate-600 hover:text-[#0052cc] font-sans font-semibold transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3.5">
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest">
              Compliance &amp; Terms
            </h4>
            <ul className="space-y-2 flex flex-col items-center sm:items-start">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs md:text-sm text-slate-600 hover:text-[#0052cc] font-sans font-semibold transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3.5">
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest">
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs md:text-sm text-slate-600 font-sans flex flex-col items-center sm:items-start">
              <p className="flex flex-col items-center sm:items-start">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-0.5">General Inquiries</span>
                <a
                  href="mailto:hi@aqnoorlabs.online"
                  className="text-[#0052cc] hover:underline font-bold"
                >
                  hi@aqnoorlabs.online
                </a>
              </p>
              <p className="flex flex-col items-center sm:items-start">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-0.5">Technical Support</span>
                <a
                  href="mailto:support@aqnoorlabs.online"
                  className="text-[#0052cc] hover:underline font-bold"
                >
                  support@aqnoorlabs.online
                </a>
              </p>
              <p className="flex flex-col items-center sm:items-start">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-0.5">Direct Phone &amp; WhatsApp</span>
                <a
                  href="https://wa.me/917387450332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline font-bold text-sm"
                >
                  +91 7387450332
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4 text-center md:text-left text-xs text-slate-500 font-sans">
          <p>
            &copy; 2026 AqNoorLabs. All rights reserved. (Entity: Abuswaliha Bashir Shaikh)
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 hover:text-[#0052cc] hover:border-slate-300 transition-colors font-mono text-[11px] shadow-xs"
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
