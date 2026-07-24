"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { CONTAINER_VARIANTS, FADE_UP } from "@/lib/animations";
import SectionTitle from "./SectionTitle";

export default function Process() {
  return (
    <section className="py-12 md:py-24 bg-background/50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionTitle
          tag="Methodology"
          title="Our Development Process"
          description="We follow a systematic, highly collaborative process to translate your concept into a reliable, enterprise-grade solution."
        />

        <div className="relative">
          {/* Subtle connecting line for larger screens */}
          <div className="hidden lg:block absolute top-[45px] left-8 right-8 h-[2px] bg-border-custom z-0" />

          {/* Timeline Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={CONTAINER_VARIANTS(0.2)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
          >
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                variants={FADE_UP}
                className="flex flex-col items-start bg-white border border-border-custom rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_-10px_rgba(108,99,255,0.08)] transition-all duration-300 relative group"
              >
                {/* Connector line for mobile (vertical) */}
                {index < 3 && (
                  <div className="lg:hidden absolute left-[44px] bottom-[-32px] w-[2px] h-[32px] bg-border-custom z-0" />
                )}

                {/* Step circle */}
                <div className="w-12 h-12 rounded-2xl bg-brand text-white font-display font-bold text-lg flex items-center justify-center mb-6 shadow-[0_4px_12px_rgba(108,99,255,0.3)] transition-transform duration-300 group-hover:scale-105">
                  {step.id}
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted font-sans leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
