"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { CONTAINER_VARIANTS } from "@/lib/animations";
import AnimatedCard from "./AnimatedCard";
import LucideIcon from "./LucideIcon";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 bg-background/50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionTitle
          tag="Showcase"
          title="Featured Engineering Projects"
          description="A selection of custom web systems, mobile applications, and desktop utility architectures built by AQNoorLabs."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={CONTAINER_VARIANTS(0.15)}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <AnimatedCard
              key={project.title}
              delay={index * 0.1}
              hoverEffect={false} // Custom hover effect implemented here
              className="bg-white border border-border-custom p-0 rounded-[2rem] overflow-hidden flex flex-col h-full shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_-10px_rgba(108,99,255,0.12)] transition-all duration-500 group"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-background">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-w-780px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-border-custom px-3 py-1 rounded-full text-xs font-semibold text-brand font-sans">
                  {project.category}
                </div>
              </div>

              {/* Contents */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted font-sans leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-background/50 border border-border-custom text-xs font-sans text-muted rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <div className="border-t border-border-custom/50 pt-6">
                  <Button
                    href="#contact"
                    variant="outline"
                    className="w-full text-sm font-sans flex items-center justify-center space-x-1.5"
                  >
                    <span>View Project</span>
                    <LucideIcon name="ArrowRight" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
