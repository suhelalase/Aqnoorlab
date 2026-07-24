"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { CONTAINER_VARIANTS, FADE_UP } from "@/lib/animations";
import LucideIcon from "./LucideIcon";
import SectionTitle from "./SectionTitle";

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-light/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          tag="Client Feedback"
          title="What Clients Say About Us"
          description="We prioritize strong relationships and elite product execution. Here is why our clients value our partnership."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={CONTAINER_VARIANTS(0.15)}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={FADE_UP}
              transition={{ delay: index * 0.1 }}
              className="glass-panel rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-border-custom flex flex-col justify-between h-full relative hover:scale-[1.01] hover:border-brand-light/35 transition-all duration-300 group"
            >
              {/* Quote Mark Icon */}
              <div className="absolute -top-4 -right-2 text-brand-light/10 font-serif text-[120px] select-none pointer-events-none transition-colors duration-300 group-hover:text-brand-light/15">
                ”
              </div>

              <div>
                <div className="text-brand mb-6">
                  <LucideIcon name="Quote" className="w-8 h-8 opacity-40 rotate-180" />
                </div>
                
                <p className="text-base text-muted font-sans italic leading-relaxed mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author details */}
              <div className="flex items-center space-x-4 border-t border-border-custom/50 pt-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border-custom bg-background">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-sm tracking-tight">
                    {testimonial.author}
                  </h4>
                  <p className="font-sans text-xs text-muted">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
