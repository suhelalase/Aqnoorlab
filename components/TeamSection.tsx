"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, BrainCircuit, Layers, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TEAM = [
  {
    id: 1,
    name: "Abuswaliha B Shaikh",
    role: "Founder & CEO",
    shortBio:
      "Visionary entrepreneur and business strategist driving AqNoorLabs' mission to make world-class software accessible to Indian businesses of every size.",
    image: "/images/founder.png",
    skills: ["Product Strategy", "Business Development", "Client Relations", "Growth"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    gradient: "from-violet-500/20 via-purple-500/10 to-indigo-500/20",
    accentColor: "text-violet-600",
    badgeBg: "bg-violet-500/10 border-violet-500/20 text-violet-700",
    glowColor: "shadow-violet-500/20",
    icon: <Rocket className="w-5 h-5" />,
    tag: "Founder",
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
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
    accentColor: "text-cyan-600",
    badgeBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-700",
    glowColor: "shadow-cyan-500/20",
    icon: <Code2 className="w-5 h-5" />,
    tag: "CTO",
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
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight mb-4">
            The People Behind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary/60">
              AqNoorLabs
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
            A small, focused team that punches above its weight — building software that&apos;s fast, reliable, and built to scale.
          </p>
        </motion.div>
      </div>

      {/* Team Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-xl ${member.glowColor} hover:shadow-2xl transition-all duration-500`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px]" />

                {/* Top tag */}
                <div className="absolute top-5 right-5 z-20">
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold ${member.badgeBg}`}>
                    {member.icon}
                    {member.tag}
                  </span>
                </div>

                <div className="relative z-10 p-7 md:p-8">
                  {/* Photo + Name Row */}
                  <div className="flex items-start gap-5 mb-6">
                    {/* Photo with animated ring */}
                    <div className="relative flex-shrink-0">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                        style={{ margin: "-6px" }}
                      />
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
                          sizes="96px"
                        />
                      </div>
                      {/* Online dot */}
                      <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-background shadow-sm" />
                    </div>

                    {/* Name and role */}
                    <div className="pt-1">
                      <h2 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight leading-tight">
                        {member.name}
                      </h2>
                      <p className={`text-sm font-bold mt-1 ${member.accentColor}`}>
                        {member.role}
                      </p>
                      {/* Social links */}
                      <div className="flex items-center gap-2 mt-3">
                        <a
                          href={member.social.linkedin}
                          aria-label="LinkedIn"
                          className="h-7 px-3 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 text-[10px] font-bold text-foreground/70"
                        >
                          LinkedIn
                        </a>
                        <a
                          href={member.social.twitter}
                          aria-label="Twitter"
                          className="h-7 px-3 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 text-[10px] font-bold text-foreground/70"
                        >
                          Twitter
                        </a>
                        <a
                          href={member.social.github}
                          aria-label="GitHub"
                          className="h-7 px-3 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 text-[10px] font-bold text-foreground/70"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 font-medium">
                    {member.shortBio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs font-semibold px-3 py-1 rounded-full border ${member.badgeBg}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="rounded-2xl border border-border/60 bg-card p-5 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-2 text-primary">{stat.icon}</div>
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
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8"
      >
        <div className="relative rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/8 via-background to-accent/8 p-8 md:p-12 text-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
              We build like it&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-500">
                our own product.
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed font-medium mb-6">
              Every line of code, every design decision, every deadline — we treat your business like it&apos;s ours. That&apos;s not a promise. It&apos;s how we operate.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-primary/25"
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
