"use client";

import { Mail, Phone, ShieldCheck, Cpu, MessageSquare, ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-white relative flex items-center justify-center min-h-[75vh] border-b border-slate-200">
      <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Corporate Info */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-slate-300 bg-slate-50 px-3 py-1 font-mono text-xs font-bold uppercase text-slate-700 shadow-2xs">
                <span>[ CONTACT ENGINEERING ]</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-display">
                Request a Technical Estimate.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                At <span className="font-bold text-slate-900">AqNoorLabs</span>, we engineer software systems designed for precision and reliable execution:
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex gap-3 items-start p-3 rounded.xl bg-slate-50 border border-slate-200">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-50 border border-blue-200 text-[#0052cc]">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-display">Engineering Scale &amp; Performance</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5 font-normal">
                      Planned and architected for high volume without performance degradation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-50 border border-blue-200 text-[#0052cc]">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-display">Milestone Guarantee &amp; Support</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5 font-normal">
                      Transparent milestone delivery, fast hosting, and dedicated technical maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Details & WhatsApp Callout */}
            <div className="space-y-4 border-t border-slate-200 pt-6">
              <a
                href="https://wa.me/917387450332?text=Hi%20AqNoorLabs%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 text-slate-900 border border-emerald-200 hover:border-emerald-300 transition-all shadow-2xs cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-2xs">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">
                        Direct WhatsApp Inquiry
                      </span>
                      <span className="text-[10px] uppercase font-mono font-bold px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300">
                        Online
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-mono">
                      Fast Developer Response &bull; Direct Lead
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center h-7 w-7 rounded-md bg-white border border-emerald-200 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </a>

              <div className="grid grid-cols-1 gap-2.5 text-xs text-slate-700 font-medium pt-2">
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <Mail className="h-4 w-4 text-[#0052cc] shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">General Inquiries</span>
                    <a href="mailto:hi@aqnoorlabs.online" className="hover:text-[#0052cc] font-bold text-slate-800">
                      hi@aqnoorlabs.online
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <Mail className="h-4 w-4 text-[#0052cc] shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">Technical Support</span>
                    <a href="mailto:support@aqnoorlabs.online" className="hover:text-[#0052cc] font-bold text-slate-800">
                      support@aqnoorlabs.online
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <Phone className="h-4 w-4 text-[#0052cc] shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">Direct Phone &amp; WhatsApp</span>
                    <a href="tel:+917387450332" className="hover:text-[#0052cc] font-bold text-slate-800">
                      +91 7387450332
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="w-full md:col-span-7 enterprise-card p-6 md:p-8 flex flex-col justify-center shadow-xs">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
