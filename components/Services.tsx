"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { CONTAINER_VARIANTS } from "@/lib/animations";
import AnimatedCard from "./AnimatedCard";
import LucideIcon from "./LucideIcon";
import SectionTitle from "./SectionTitle";

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionTitle
          tag="Our Services"
          title="End-to-End Engineering Solutions"
          description="We cover every step of your digital transformation, delivering secure, modern, and highly performant custom systems."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={CONTAINER_VARIANTS(0.1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {SERVICES.map((service, index) => (
            <AnimatedCard
              key={service.title}
              delay={index * 0.05}
              hoverEffect={true}
              className="flex flex-col justify-between h-full bg-background/30 border border-border-custom hover:bg-white"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Service Icon with soft lavender glow */}
                  <div className="w-12 h-12 rounded-xl bg-brand-light/10 text-brand flex items-center justify-center">
                    <LucideIcon name={service.icon} className="w-6 h-6" />
                  </div>
                  
                  {/* Subtle index indicator */}
                  <span className="text-sm font-sans font-medium text-muted/30">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Learn More link with hover animation */}
              <div className="mt-8 pt-4 border-t border-border-custom/50 flex items-center text-xs font-semibold text-brand font-sans group">
                <a href="#contact" className="inline-flex items-center">
                  <span>Inquire about {service.title.split(" ")[0]}</span>
                  <LucideIcon
                    name="ArrowRight"
                    className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
