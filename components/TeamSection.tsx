"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, BrainCircuit, Layers, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TEAM = [
  {
    id: 1,
    name: "Abuswaliha B Shaikh",
    role: "Founder",
    shortBio:
      "Visionary entrepreneur and business strategist driving AqNoorLabs' mission to make world-class software accessible to Indian businesses of every size.",
    image: "/images/founder.png",
    skills: ["Product Strategy", "Business Development", "Client Relations", "Growth"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    tag: "Founder",
    icon: <Rocket className="w-4 h-4 text-brand" />,
  },
  {
    id: 2,
    name: "Suhel M Alase",
    role: "Chief Technology Officer",
    shortBio:
      "Full-stack engineer and systems architect with deep expertise in scalable web applications, AI integrations, and cloud infrastructure that powers real business results.",
    image: "/images/cto.png",
    skills: ["Next.js", "System Design", "AI/ML", "Cloud Infrastructure"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    tag: "CTO",
    icon: <Code2 className="w-4 h-4 text-brand" />,
  },
];

const STATS = [
  { label: "Projects Delivered", value: "30+", icon: <Layers className="w-5 h-5" /> },
  { label: "Happy Clients", value: "20+", icon: <BrainCircuit className="w-5 h-5" /> },
  { label: "Years Combined", value: "5+", icon: <Rocket className="w-5 h-5" /> },
  { label: "Technologies", value: "15+", icon: <Code2 className="w-5 h-5" /> },
];

export default function TeamSection() {
  return (
    <section className="py-12 md:py-20">
      {/* Hero Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="outline"
            className="mb-4 inline-flex items-center gap-2 rounded-full border-primary/20 bg-primary/5 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-primary"
          >
            Meet the Team
          </Badge>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-foreground tracking-tight mb-4">
            The People Behind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-deep to-brand/60">
              AqNoorLabs
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
            A small, focused team that punches above its weight — building software that&apos;s fast, reliable, and built to scale.
          </p>
        </motion.div>
      </div>

      {/* Team Cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              {/* Card Container */}
              <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:shadow-md hover:border-brand/40 transition-all duration-300 flex flex-col p-6 md:p-8">
                {/* Subtle light background card glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/3 blur-3xl rounded-full -z-10 transition-opacity duration-300 group-hover:bg-brand/8" />
                
                {/* Header: Picture and details */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left mb-6">
                  {/* Photo */}
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-border shadow-sm flex-shrink-0 bg-slate-50">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="96px"
                    />
                  </div>

                  {/* Name, Role & Socials */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1.5">
                      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                        {member.name}
                      </h3>
                      <span className="self-center sm:self-start inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand/5 border border-brand/10 text-brand">
                        {member.icon}
                        {member.tag}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-brand-deep font-sans mb-3">
                      {member.role}
                    </p>

                    {/* Social links */}
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <a
                        href={member.social.linkedin}
                        aria-label={`${member.name} LinkedIn`}
                        className="h-7 px-3 rounded-lg bg-slate-50 hover:bg-brand/5 border border-border flex items-center justify-center hover:text-brand hover:border-brand/30 transition-all duration-200 text-xs font-medium text-muted-foreground"
                      >
                        LinkedIn
                      </a>
                      <a
                        href={member.social.twitter}
                        aria-label={`${member.name} Twitter`}
                        className="h-7 px-3 rounded-lg bg-slate-50 hover:bg-brand/5 border border-border flex items-center justify-center hover:text-brand hover:border-brand/30 transition-all duration-200 text-xs font-medium text-muted-foreground"
                      >
                        Twitter
                      </a>
                      <a
                        href={member.social.github}
                        aria-label={`${member.name} GitHub`}
                        className="h-7 px-3 rounded-lg bg-slate-50 hover:bg-brand/5 border border-border flex items-center justify-center hover:text-brand hover:border-brand/30 transition-all duration-200 text-xs font-medium text-muted-foreground"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 font-medium">
                  {member.shortBio}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/50">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-50 border border-border text-foreground/75"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mb-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="rounded-2xl border border-border bg-card p-5 text-center hover:border-brand/30 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex justify-center mb-2 text-brand">{stat.icon}</div>
              <p className="text-3xl font-extrabold text-foreground tracking-tight">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-semibold mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Culture Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8"
      >
        <div className="relative rounded-3xl overflow-hidden border border-border bg-card p-8 md:p-12 text-center shadow-sm">
          {/* Faint card glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand/2 to-brand-deep/2 -z-10" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-display font-extrabold text-foreground tracking-tight mb-4">
              We build like it&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-deep">
                our own product.
              </span>
            </h3>
            <p className="max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed font-medium mb-6">
              Every line of code, every design decision, every deadline — we treat your business like it&apos;s ours. That&apos;s not a promise. It&apos;s how we operate.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-bold text-white hover:opacity-95 hover:scale-105 transition-all shadow-[0_4px_14px_rgba(108,99,255,0.35)]"
            >
              Work With Us
              <Rocket className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
