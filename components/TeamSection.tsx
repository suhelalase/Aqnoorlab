"use client";

import { Code2, BrainCircuit, Layers, Rocket } from "lucide-react";
import Button from "@/components/Button";

const TEAM = [
  {
    id: 1,
    name: "Abuswaliha B Shaikh",
    role: "Founder & Managing Director",
    initials: "AB",
    shortBio:
      "Visionary entrepreneur and business strategist driving AqNoorLabs' mission to deliver high-performance software systems for Indian businesses.",
    skills: ["Product Strategy", "Business Operations", "Client Relations", "Growth"],
    tag: "Founder",
    icon: <Rocket className="w-3.5 h-3.5 text-[#0052cc]" />,
  },
  {
    id: 2,
    name: "Suhel M Alase",
    role: "Chief Technology Officer",
    initials: "SA",
    shortBio:
      "Full-stack engineer and software architect specializing in high-scale web applications, AI integrations, desktop POS systems, and cloud infrastructure.",
    skills: ["Next.js", "System Architecture", "AI Systems", "Cloud Infra"],
    tag: "CTO",
    icon: <Code2 className="w-3.5 h-3.5 text-[#0052cc]" />,
  },
];

const STATS = [
  { label: "Production Systems", value: "30+", icon: <Layers className="w-5 h-5 text-[#0052cc]" /> },
  { label: "Active Enterprise Clients", value: "20+", icon: <BrainCircuit className="w-5 h-5 text-[#0052cc]" /> },
  { label: "Years Combined", value: "5+", icon: <Rocket className="w-5 h-5 text-[#0052cc]" /> },
  { label: "Core Technologies", value: "15+", icon: <Code2 className="w-5 h-5 text-[#0052cc]" /> },
];

export default function TeamSection() {
  return (
    <section className="py-12 md:py-20 bg-[#f8fafc] border-b border-slate-200">
      {/* Header */}
      <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0 text-center mb-12">
        <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1 font-mono text-xs font-bold uppercase text-slate-700 shadow-xs">
          <span>[ ENGINEERING LEADERSHIP ]</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-3">
          The Leadership Behind AqNoorLabs
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-600 leading-relaxed font-medium">
          Engineering leads committed to clean architecture, reliable timelines, and transparent software delivery.
        </p>
      </div>

      {/* Team Cards */}
      <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEAM.map((member) => (
            <div
              key={member.id}
              className="enterprise-card p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left mb-5 pb-5 border-b border-slate-200">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl border border-blue-200 flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-100 to-indigo-50 shadow-xs">
                    <span className="font-display font-extrabold text-xl sm:text-2xl text-[#0052cc]">
                      {member.initials}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <h3 className="text-xl font-display font-bold text-slate-900">
                        {member.name}
                      </h3>
                      <span className="enterprise-badge self-center sm:self-start">
                        {member.icon}
                        {member.tag}
                      </span>
                    </div>

                    <p className="text-xs font-mono font-bold text-[#0052cc]">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {member.shortBio}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="enterprise-card p-5 text-center"
            >
              <div className="flex justify-center mb-1.5">{stat.icon}</div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">{stat.value}</p>
              <p className="text-xs text-slate-600 font-mono font-semibold mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Culture Section */}
      <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0">
        <div className="rounded-xl bg-gradient-to-r from-blue-50/80 via-slate-50 to-indigo-50/80 text-slate-900 p-8 md:p-12 text-center border border-blue-200/70 shadow-xs">
          <h3 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 tracking-tight mb-3">
            Engineered like our own production infrastructure.
          </h3>
          <p className="max-w-2xl mx-auto text-xs sm:text-base text-slate-600 leading-relaxed font-medium mb-6">
            Every software module, database schema, and security check is built with long-term engineering rigor.
          </p>
          <Button
            href="/contact"
            variant="primary"
            size="md"
            className="font-bold bg-[#0052cc] hover:bg-[#0043a8] text-white"
          >
            <span>Initiate Collaboration</span>
            <Rocket className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
