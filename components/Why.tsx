"use client";

import { motion } from "framer-motion";
import { WHY_US } from "@/lib/constants";
import { CONTAINER_VARIANTS } from "@/lib/animations";
import AnimatedCard from "./AnimatedCard";
import LucideIcon from "./LucideIcon";
import SectionTitle from "./SectionTitle";

export default function Why() {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionTitle
          tag="Our Promise"
          title="Why Choose AqNoorLabs"
          description="We hold ourselves to the highest technical standards. Here is how we ensure project success for every partnership."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={CONTAINER_VARIANTS(0.15)}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {WHY_US.map((item, index) => (
            <AnimatedCard
              key={item.title}
              delay={index * 0.1}
              hoverEffect={true}
              className="bg-background/30 border border-border-custom hover:bg-white flex flex-col items-start p-8 rounded-3xl"
            >
              {/* Icon container */}
              <div className="w-12 h-12 rounded-xl bg-brand-light/10 text-brand flex items-center justify-center mb-6">
                <LucideIcon name={item.icon} className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {item.title}
              </h3>
              
              <p className="text-sm sm:text-base text-muted font-sans leading-relaxed">
                {item.description}
              </p>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
