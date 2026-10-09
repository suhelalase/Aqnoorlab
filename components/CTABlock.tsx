"use client";

import Button from "@/components/Button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CTABlock() {
  return (
    <section className="py-12 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0">
        <div className="rounded-xl bg-gradient-to-r from-blue-50/80 via-slate-50 to-indigo-50/80 text-slate-900 p-8 md:p-14 text-center border border-blue-200/70 shadow-sm">
          <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-blue-200 bg-white px-3.5 py-1.5 font-mono text-xs font-bold uppercase text-[#0052cc] shadow-xs">
            <span>[ ENGAGEMENT INITIATION ]</span>
          </div>

          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Ready to Build Your Software System?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Outline your system requirements — we will provide a comprehensive architecture roadmap, clear cost estimate, and milestone delivery timeline.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3.5 items-center">
            <Button href="#contact" size="lg" variant="primary" className="w-full sm:w-auto font-bold px-8 py-3.5 bg-[#0052cc] hover:bg-[#0043a8]">
              <span>Get a Free Quote</span>
              <MessageSquare className="ml-2 h-4 w-4" />
            </Button>

            <Button
              href="#projects"
              size="lg"
              variant="outline"
              className="w-full sm:w-auto font-bold px-8 py-3.5 bg-white text-slate-800 border-slate-300 hover:bg-slate-50 shadow-xs"
            >
              <span>View System Deliverables</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-slate-500 font-mono">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
              <span className="font-semibold text-slate-700">ACTIVE ENGINEERING CAPACITY IN INDIA</span>
            </span>
            <span className="hidden sm:inline-block text-slate-300">&bull;</span>
            <span className="font-semibold text-slate-700">PROMPT TECHNICAL EVALUATION &amp; RESPONSES</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTABlock;
