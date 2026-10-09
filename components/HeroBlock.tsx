"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Button from "@/components/Button";

const HERO_SLIDES = [
  {
    id: 1,
    image: "/images/hero_slide_1.png",
    title: "Web Engineering & Cloud Systems",
  },
  {
    id: 2,
    image: "/images/hero_slide_2.png",
    title: "iOS & Android Mobile Applications",
  },
  {
    id: 3,
    image: "/images/hero_slide_3.png",
    title: "Desktop POS & Retail ERP Billing",
  },
  {
    id: 4,
    image: "/images/hero_slide_4.png",
    title: "AI Workflows & 24/7 Automation",
  },
];

export function HeroBlock() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] md:min-h-[90vh] w-full items-center justify-center overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20 border-b border-slate-800 bg-slate-950"
    >
      {/* 100% Opacity Full-Bleed Auto-Sliding Background Images */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={idx === 0}
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* Translucent Black Overlay Div for High Text Contrast */}
      <div className="absolute inset-0 z-1 bg-black/55" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 md:px-8 text-center">
        {/* Company Logo Badge */}
        <div className="mb-5 flex justify-center">
          <div className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-2xl border border-white/80 bg-white p-3 shadow-2xl">
            <Image
              src="/images/logo.png"
              alt="AqNoorLabs Logo"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display drop-shadow-md">
          AqNoor<span className="text-[#38bdf8]">Labs</span>
        </h1>

        <p className="mx-auto mb-4 max-w-3xl text-xl sm:text-2xl font-bold text-slate-100 leading-snug drop-shadow-sm">
          Custom Enterprise Websites, Mobile Apps &amp; AI Systems Built for Real Growth.
        </p>

        <p className="mx-auto mb-8 max-w-2xl text-sm sm:text-base text-slate-200 leading-relaxed font-medium drop-shadow-xs">
          We engineer robust full-stack platforms, cross-platform mobile apps, POS desktop software, and 24/7 AI workflow automation. Delivered on time, on budget, with transparent milestone pricing.
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full mb-10">
          <Button
            href="#contact"
            size="lg"
            variant="primary"
            className="w-full sm:w-auto font-bold px-8 py-3.5 bg-[#0052cc] hover:bg-[#0043a8] text-white shadow-xl text-sm border-none"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            href="#projects"
            size="lg"
            variant="outline"
            className="w-full sm:w-auto font-bold px-8 py-3.5 bg-white/15 hover:bg-white/25 text-white border-white/30 backdrop-blur-xs shadow-xl text-sm"
          >
            <span>View Work &amp; Demos</span>
          </Button>
        </div>

        {/* Corporate Trust Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-6 border-t border-white/20 mb-6">
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs font-semibold text-slate-200 shadow-md">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Milestone-Based Billing</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs font-semibold text-slate-200 shadow-md">
            <ShieldCheck className="h-4 w-4 text-[#38bdf8] shrink-0" />
            <span>Scalable Cloud Architecture</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs font-semibold text-slate-200 shadow-md">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Post-Launch Technical Support</span>
          </div>
        </div>

        {/* Auto Slider Progress Bar Indicator */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentSlide ? "w-8 bg-[#38bdf8]" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroBlock;
