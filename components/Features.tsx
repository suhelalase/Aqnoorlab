"use client";

import { motion } from "framer-motion";
import { FEATURE_CARDS } from "@/lib/constants";
import { CONTAINER_VARIANTS } from "@/lib/animations";
import AnimatedCard from "./AnimatedCard";
import LucideIcon from "./LucideIcon";
import SectionTitle from "./SectionTitle";

export default function Features() {
  return (
    <section className="py-12 md:py-24 bg-background/50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionTitle
          tag="Core Expertise"
          title="Engineered for Performance & Scale"
          description="We combine cutting-edge design principles with solid software engineering to deliver state-of-the-art applications."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={CONTAINER_VARIANTS(0.15)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {FEATURE_CARDS.map((card, index) => (
            <AnimatedCard
              key={card.title}
              delay={index * 0.1}
              hoverEffect={true}
              className="flex flex-col justify-between h-full bg-white border border-border-custom"
            >
              <div>
                {/* Icon Container with Lavender background */}
                <div className="w-12 h-12 rounded-2xl bg-brand-light/10 text-brand flex items-center justify-center mb-6">
                  <LucideIcon name={card.icon} className="w-6 h-6" />
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-brand-light font-sans">
                  {card.tag}
                </span>
                
                <h3 className="text-xl font-display font-bold text-foreground mt-2 mb-3">
                  {card.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted font-sans leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Card Footer Decoration */}
              <div className="mt-8 flex items-center text-xs font-semibold text-brand font-sans group">
                <span>Discover capabilities</span>
                <LucideIcon
                  name="ArrowRight"
                  className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
