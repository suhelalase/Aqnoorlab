"use client";

import { motion } from "framer-motion";
import { FADE_UP } from "@/lib/animations";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column - Core Pitch */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className="md:col-span-5 flex flex-col items-center text-center md:items-start md:text-left space-y-4"
          >
            <SectionTitle
              tag="About AqNoorLabs"
              title="Why Businesses Choose AqNoorLabs"
              align="left"
              className="mb-0"
            />
            <p className="text-sm sm:text-base md:text-lg text-muted font-sans leading-relaxed">
              AqNoorLabs builds scalable software products with modern technologies.
              From startups to enterprise platforms, we transform ideas into reliable digital solutions that help businesses grow faster.
            </p>
            <div className="pt-2">
              <Button href="#contact-form" variant="primary" size="md">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Editorial Philosophy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            transition={{ delay: 0.2 }}
            className="md:col-span-7 bg-background/50 border border-border-custom rounded-[2rem] p-6 sm:p-10 md:p-12 relative mt-4 md:mt-0"
          >
            {/* Soft background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-light/5 blur-3xl pointer-events-none" />

            <h3 className="text-lg font-display font-bold uppercase tracking-wider text-brand mb-6">
              Our Philosophy
            </h3>
            
            <div className="space-y-6 text-base sm:text-lg text-muted font-sans leading-relaxed">
              <p>
                We believe that software should be as beautiful on the inside as it is on the outside. A product's engineering quality determines its ability to scale, pivot, and endure. We do not write quick scripts or cut corners; we architect robust, well-documented foundations that stand the test of time.
              </p>
              <p>
                Design is not just how it looks, but how it works. By coupling clean interface designs with fast-loading, responsive structures, we ensure your users enjoy every interaction. Whether building a complex AI agent pipeline, a custom desktop automation tool, or an optimized corporate website, we treat every line of code as craft.
              </p>
              <p className="font-display font-semibold text-foreground text-lg sm:text-xl border-l-2 border-brand pl-4 py-1">
                "We operate not just as contractors, but as a strategic technology partner dedicated to scaling your business."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
