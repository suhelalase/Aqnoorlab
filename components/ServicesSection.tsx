"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  AppWindow,
  Bot,
  Monitor,
  Smartphone,
  Workflow,
  Headset,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentGradient: string;
  iconColor: string;
  features: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "full-stack",
    title: "Full-Stack Applications",
    badge: "Web & SaaS",
    description:
      "Scalable, cloud-native web applications and enterprise platforms built with high-performance architectures, intuitive UX, and robust backend systems.",
    icon: AppWindow,
    accentGradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    iconColor: "text-blue-500 dark:text-blue-400",
    features: [
      "Next.js, React & Modern UI",
      "Fast Node / Go / Python Backends",
      "Scalable SQL & NoSQL Databases",
      "Secure REST & GraphQL APIs",
    ],
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    badge: "LLMs & Agents",
    description:
      "Intelligent conversational AI bots and multi-channel assistants that resolve customer queries, capture high-intent leads, and automate support 24/7.",
    icon: Bot,
    accentGradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    iconColor: "text-purple-500 dark:text-purple-400",
    features: [
      "WhatsApp & Web Live Chat",
      "RAG on Private Business Data",
      "Multilingual Support (EN / HI / etc.)",
      "Automated CRM Lead Routing",
    ],
  },
  {
    id: "desktop-apps",
    title: "Desktop Applications",
    badge: "Cross-Platform",
    description:
      "Ultra-fast, offline-first desktop software for Windows, macOS, and Linux built for high-throughput enterprise tasks, POS billing, and local hardware control.",
    icon: Monitor,
    accentGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    iconColor: "text-emerald-500 dark:text-emerald-400",
    features: [
      "Windows, macOS & Linux",
      "Offline-First SQLite Storage",
      "Thermal Printers & Barcode Scanners",
      "Automated GST Invoicing",
    ],
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    badge: "iOS & Android",
    description:
      "Fluid, responsive native and cross-platform mobile apps engineered with pixel-perfect designs, biometric authentication, and lightning-fast speeds.",
    icon: Smartphone,
    accentGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    iconColor: "text-amber-500 dark:text-amber-400",
    features: [
      "React Native & Flutter Builds",
      "Instant Push Notifications",
      "Secure UPI & Payment Gateways",
      "App Store & Play Store Launch",
    ],
  },
  {
    id: "ai-workflows",
    title: "AI Workflows",
    badge: "Automation",
    description:
      "End-to-end automated business pipelines and AI-driven document processing systems that connect your tools and eliminate manual repetitive tasks.",
    icon: Workflow,
    accentGradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    iconColor: "text-cyan-500 dark:text-cyan-400",
    features: [
      "n8n & Custom Webhook Pipelines",
      "Intelligent OCR & PDF Extraction",
      "Auto-Generated Invoices & Alerts",
      "Multi-App Data Synchronization",
    ],
  },
  {
    id: "customer-support",
    title: "Customer Support Setup",
    badge: "Email, Tickets, Calls",
    description:
      "Omnichannel customer support infrastructure integrating smart ticketing systems, shared inboxes, VoIP call routing, and self-serve help centers.",
    icon: Headset,
    accentGradient: "from-rose-500/20 via-red-500/10 to-transparent",
    iconColor: "text-rose-500 dark:text-rose-400",
    features: [
      "Unified Shared Inboxes & Tickets",
      "Cloud VoIP & Call Queuing",
      "SLA Management & Escalation",
      "Self-Service Knowledge Bases",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full py-20 md:py-28 overflow-hidden bg-background"
    >
      {/* Subtle Background Lighting & Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-accent/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs sm:text-sm font-semibold mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Core Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-5"
          >
            End-to-End Software &{" "}
            <span className="bg-gradient-to-r from-primary via-brand to-indigo-600 bg-clip-text text-transparent">
              AI Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium"
          >
            From bespoke full-stack platforms and mobile apps to 24/7 AI chatbots
            and automated support operations — we engineer solutions that scale
            your business effortlessly.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="h-full"
              >
                <Card className="group relative flex flex-col justify-between h-full overflow-hidden rounded-2xl border border-border/80 bg-card/70 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                  {/* Subtle Top Gradient Glow */}
                  <div
                    className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${service.accentGradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  />

                  <div>
                    <CardHeader className="p-6 pb-4 relative z-10">
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/90 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-primary/40">
                          <Icon className={`h-6 w-6 ${service.iconColor}`} />
                        </div>
                        <Badge
                          variant="secondary"
                          className="font-medium text-xs border border-border/60 bg-muted/60 text-muted-foreground group-hover:border-primary/20 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                        >
                          {service.badge}
                        </Badge>
                      </div>

                      <CardTitle className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
                        {service.title}
                      </CardTitle>

                      <CardDescription className="text-sm text-muted-foreground leading-relaxed pt-2">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-6 pt-0 relative z-10">
                      <div className="border-t border-border/50 pt-4 mt-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 mb-3">
                          Key Capabilities
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs sm:text-sm text-foreground/80"
                            >
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>

                  <CardFooter className="p-6 pt-0 relative z-10 border-t border-border/40 mt-4 bg-muted/20">
                    <a
                      href="#contact"
                      className="inline-flex w-full items-center justify-between text-xs sm:text-sm font-semibold text-primary group-hover:text-primary/90 transition-colors pt-3"
                    >
                      <span>Discuss this service</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-14 md:mt-20 p-6 md:p-8 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 via-accent/15 to-primary/5 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
              Have a custom requirement or need a hybrid setup?
            </h3>
            <p className="text-sm text-muted-foreground font-medium">
              We design bespoke architectures tailored specifically to your tech stack, workflow, and budget.
            </p>
          </div>
          <a href="#contact" className="shrink-0 w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full font-semibold px-6 shadow-md shadow-primary/20 gap-2 cursor-pointer"
            >
              Request Custom Proposal
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
