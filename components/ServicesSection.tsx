"use client";

import React from "react";
import {
  AppWindow,
  Bot,
  Monitor,
  Smartphone,
  Workflow,
  Headset,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Button from "@/components/Button";

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "full-stack",
    title: "Full-Stack Web Systems",
    badge: "WEB & SAAS",
    description:
      "Scalable cloud-native web applications and enterprise platforms engineered with Next.js, Node, Go, and high-performance relational databases.",
    icon: AppWindow,
    features: [
      "Next.js, React & Modern UI",
      "Fast Node / Go / Python Backends",
      "Scalable SQL & NoSQL Databases",
      "Secure REST & GraphQL APIs",
    ],
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots & Agents",
    badge: "LLMS & AUTOMATION",
    description:
      "Intelligent conversational AI bots and multi-channel agents that resolve queries, capture high-intent leads, and automate support 24/7.",
    icon: Bot,
    features: [
      "WhatsApp & Web Live Chat",
      "RAG on Private Business Data",
      "Multilingual Support (EN / HI / etc.)",
      "Automated CRM Lead Routing",
    ],
  },
  {
    id: "desktop-apps",
    title: "Desktop Software & POS",
    badge: "CROSS-PLATFORM",
    description:
      "Ultra-fast, offline-first desktop software for Windows, macOS, and Linux built for POS billing, inventory, and hardware integration.",
    icon: Monitor,
    features: [
      "Windows, macOS & Linux",
      "Offline-First SQLite Storage",
      "Thermal Printers & Barcode Scanners",
      "Automated GST Invoicing",
    ],
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    badge: "IOS & ANDROID",
    description:
      "Fluid, responsive native and cross-platform mobile apps engineered with biometric authentication, push alerts, and UPI payment gateways.",
    icon: Smartphone,
    features: [
      "React Native & Flutter Builds",
      "Instant Push Notifications",
      "Secure UPI & Payment Gateways",
      "App Store & Play Store Launch",
    ],
  },
  {
    id: "ai-workflows",
    title: "AI Workflows & n8n",
    badge: "PIPELINES",
    description:
      "End-to-end automated business pipelines and AI document processing systems that connect your software stack and eliminate manual work.",
    icon: Workflow,
    features: [
      "n8n & Custom Webhook Pipelines",
      "Intelligent OCR & PDF Extraction",
      "Auto-Generated Invoices & Alerts",
      "Multi-App Data Synchronization",
    ],
  },
  {
    id: "customer-support",
    title: "Support Infrastructure",
    badge: "ENTERPRISE SUPPORT",
    description:
      "Omnichannel customer support setup integrating ticketing systems, shared inboxes, VoIP call routing, and self-serve help centers.",
    icon: Headset,
    features: [
      "Unified Shared Inboxes & Tickets",
      "Cloud VoIP & Call Queuing",
      "SLA Management & Escalation",
      "Self-Service Knowledge Bases",
    ],
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full py-16 md:py-24 bg-[#f1f5f9] border-b border-slate-300"
    >
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-slate-300 bg-white font-mono text-xs font-bold uppercase text-slate-700 mb-3 shadow-sm">
            <span>[ SYSTEM CAPABILITIES ]</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#162032] mb-4 font-display">
            Core Engineering Capabilities
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            From bespoke full-stack platforms and mobile applications to 24/7 AI chatbots
            and automated workflow operations — we engineer software built for business performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="enterprise-card flex flex-col justify-between p-6 h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 border border-blue-200 text-[#0052cc] shadow-2xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="enterprise-badge">{service.badge}</span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-2 font-display">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                    {service.description}
                  </p>

                  <div className="border-t border-slate-200 pt-4 mb-4">
                    <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Technical Deliverables
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0052cc] mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 mt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052cc] hover:text-[#003366] uppercase tracking-wider transition-colors"
                  >
                    <span>Inquire About This Capability</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 md:p-8 rounded-xl bg-gradient-to-r from-blue-50/70 via-slate-50 to-indigo-50/70 border border-blue-200/70 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 font-display">
              Require a Custom Architecture or Legacy Integration?
            </h3>
            <p className="text-sm text-slate-600 font-medium">
              We design tailored software architectures aligned with your exact technical requirements and budget.
            </p>
          </div>
          <Button
            href="#contact"
            variant="primary"
            size="md"
            className="shrink-0 w-full sm:w-auto font-bold"
          >
            <span>Request Technical Proposal</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

