"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { animate, motion, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Zap, Cpu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { N8N_PROJECTS } from "@/lib/constants";

interface CardData {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  year: string;
}

type Tab = "engineering" | "n8n";

const ENGINEERING_CARDS: CardData[] = [
  {
    id: 1,
    title: "Apex Analytics Dashboard",
    description:
      "Realtime data visualizer connecting marketing API channels with live graph rendering and Redis caching for sub-100ms query times.",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Next.js", "Redis", "Node.js"],
    author: { name: "AqNoorLabs", avatar: "/logos/logo.png" },
    year: "2024",
  },
  {
    id: 2,
    title: "Aura Fintech Mobile App",
    description:
      "Fluid personal asset tracking application with end-to-end encryption, PostgreSQL sharding, and offline-first architecture.",
    category: "Mobile Application",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    tags: ["React Native", "Spring Boot", "PostgreSQL"],
    author: { name: "AqNoorLabs", avatar: "/logos/logo.png" },
    year: "2024",
  },
  {
    id: 3,
    title: "Chronos Developer CLI",
    description:
      "Electron-based desktop dashboard for Docker container health, local database states, and instant log streaming.",
    category: "Desktop Software",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
    tags: ["Electron", "React", "TypeScript"],
    author: { name: "AqNoorLabs", avatar: "/logos/logo.png" },
    year: "2023",
  },
  {
    id: 4,
    title: "NexusAI Chatbot Platform",
    description:
      "LLM-powered customer support platform with context memory, vector search, and blazing-fast Cloudflare-hosted inference.",
    category: "AI Solution",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["Python", "Cloudflare", "Vector DB"],
    author: { name: "AqNoorLabs", avatar: "/logos/logo.png" },
    year: "2025",
  },
  {
    id: 5,
    title: "PulseOps Cloud Monitor",
    description:
      "AWS infrastructure monitoring suite with automatic incident alerting, cost analytics, and Kubernetes pod health visualization.",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tags: ["AWS", "Kubernetes", "Grafana"],
    author: { name: "AqNoorLabs", avatar: "/logos/logo.png" },
    year: "2025",
  },
];

const N8N_CARDS: CardData[] = N8N_PROJECTS.map((p, i) => ({
  id: i + 1,
  title: p.title,
  description: p.description,
  category: p.category,
  image: p.image,
  tags: p.tags,
  author: { name: "AqNoorLabs", avatar: "/logos/logo.png" },
  year: "2025",
}));

function ProjectCard({ card }: { card: CardData }) {
  return (
    <Card className="group relative h-full overflow-hidden rounded-3xl border-border/50 bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/30 to-transparent" />

        <div className="absolute top-4 left-4">
          <Badge
            variant="secondary"
            className="bg-background/70 backdrop-blur-md border-white/10 text-xs font-medium px-3 py-1 text-foreground"
          >
            {card.category}
          </Badge>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full bg-white/95 px-5 py-2 text-sm font-semibold text-black shadow-lg"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            View Project
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-[calc(100%-12rem)] justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors">
            {card.title}
          </h3>
          <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">
            {card.description}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-7 w-7 border border-border/50">
              <AvatarImage src={card.author.avatar} alt={card.author.name} />
              <AvatarFallback className="text-[10px] font-bold">AQ</AvatarFallback>
            </Avatar>
            <span className="text-xs font-semibold text-foreground">{card.author.name}</span>
          </div>
          <span className="text-[10px] text-muted-foreground font-medium bg-secondary/60 px-2.5 py-1 rounded-full">
            {card.year}
          </span>
        </div>
      </div>
    </Card>
  );
}

function HorizontalSlider({ cards }: { cards: CardData[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const x = useMotionValue(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const w = containerRef.current.scrollWidth - containerRef.current.offsetWidth;
        setScrollWidth(w);
        setCanScrollRight(w > 0);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [cards]);

  const updateScrollState = (newX: number) => {
    setCanScrollLeft(newX < -1);
    setCanScrollRight(newX > -scrollWidth + 1);
  };

  const scrollTo = (direction: "left" | "right") => {
    const currentX = x.get();
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const scrollAmount = containerWidth * 0.75;
    let newX = direction === "left" ? currentX + scrollAmount : currentX - scrollAmount;
    newX = Math.max(Math.min(newX, 0), -scrollWidth);
    animate(x, newX, { type: "spring", stiffness: 300, damping: 30 });
    updateScrollState(newX);
  };

  if (cards.length === 0) return null;

  return (
    <div className="relative mt-6">
      {/* Always-visible nav buttons */}
      <button
        onClick={() => scrollTo("left")}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
        className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-5 z-20 h-10 w-10 md:h-11 md:w-11 rounded-full bg-background/95 backdrop-blur-md border border-border/50 shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all active:scale-95 cursor-pointer text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      <button
        onClick={() => scrollTo("right")}
        disabled={!canScrollRight}
        aria-label="Scroll right"
        className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-5 z-20 h-10 w-10 md:h-11 md:w-11 rounded-full bg-background/95 backdrop-blur-md border border-border/50 shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all active:scale-95 cursor-pointer text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      <motion.div
        ref={containerRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -scrollWidth }}
          dragElastic={0.08}
          style={{ x }}
          onDragEnd={() => {
            const newX = Math.max(Math.min(x.get(), 0), -scrollWidth);
            updateScrollState(newX);
          }}
          className="flex gap-5 py-4 px-1"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="min-w-[300px] max-w-[300px] h-[430px] flex-shrink-0"
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <ProjectCard card={card} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export function CardsSlider() {
  const [activeTab, setActiveTab] = useState<Tab>("engineering");

  const cards = activeTab === "engineering" ? ENGINEERING_CARDS : N8N_CARDS;
  const firstThree = cards.slice(0, 3);
  const rest = cards.slice(3);

  return (
    <div id="projects" className="w-full py-20">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 mb-10 text-center">
        <Badge
          variant="outline"
          className="mb-4 inline-flex items-center gap-2 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary"
        >
          Showcase
        </Badge>
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Featured Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base mb-8">
          A selection of premium software systems we&apos;ve engineered — from distributed backends to AI-powered frontends.
        </p>

        {/* Tab Switcher */}
        <div className="inline-flex items-center gap-1 p-1 rounded-full bg-secondary/60 border border-border/50">
          <button
            onClick={() => setActiveTab("engineering")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "engineering"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            Engineering
          </button>
          <button
            onClick={() => setActiveTab("n8n")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "n8n"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            AI Automation (n8n)
          </button>
        </div>
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="max-w-6xl mx-auto px-6 md:px-8"
      >
        {/* First 3 in grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {firstThree.map((card) => (
            <motion.div
              key={card.id}
              className="h-[430px]"
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <ProjectCard card={card} />
            </motion.div>
          ))}
        </div>

        {/* Remaining in horizontal slider */}
        {rest.length > 0 && (
          <div className="mt-6">
            <p className="text-xs text-muted-foreground font-medium mb-3 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-primary/40 rounded" />
              Scroll to explore more
              <span className="inline-block w-6 h-px bg-primary/40 rounded" />
            </p>
            <HorizontalSlider cards={rest} />
          </div>
        )}
      </motion.div>

      {/* Short CTA Slogan Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-6xl mx-auto px-6 md:px-8 mt-16"
      >
        <div className="relative rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-8 md:p-10 shadow-xl shadow-primary/5">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-1">
                Got a project in mind?
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                Your idea deserves to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  ship fast.
                </span>
              </h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-md">
                We reply in hours, not days. Let&apos;s build something remarkable together.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-primary/25"
              >
                <span>Contact Us Now</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
