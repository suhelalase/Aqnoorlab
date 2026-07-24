"use client";

import { motion } from "framer-motion";
import { TECHNOLOGIES } from "@/lib/constants";
import { CONTAINER_VARIANTS, FADE_UP } from "@/lib/animations";

export default function Trust() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-border-custom overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="text-center mb-10"
        >
          <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-muted/80">
            Trusted Technologies & Frameworks
          </h3>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={CONTAINER_VARIANTS(0.05)}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {TECHNOLOGIES.map((tech) => (
            <motion.div
              key={tech.name}
              variants={FADE_UP}
              whileHover={{ scale: 1.05, borderColor: "rgba(108, 99, 255, 0.3)" }}
              className="px-5 py-2.5 rounded-full bg-[#F8F8FA] border border-border-custom text-sm font-sans font-medium text-muted hover:text-brand hover:bg-white transition-all duration-300 cursor-default"
            >
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-muted/40 transition-colors duration-300 group-hover:bg-brand" />
                <span>{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
