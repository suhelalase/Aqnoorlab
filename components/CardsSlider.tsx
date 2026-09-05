"use client";

import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Zap, Cpu, ArrowUpRight } from "lucide-react";
import { N8N_PROJECTS } from "@/lib/constants";
import { RocketLmsShowcase } from "@/components/RocketLmsShowcase";

interface CardData {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  year: string;
  highlight?: string;
  link?: string;
  isLmsPreview?: boolean;
}

type Tab = "engineering" | "n8n";

const ENGINEERING_CARDS: CardData[] = [
  {
    id: 1,
    title: "Rocket LMS Platform",
    description:
      "All-in-one Learning Management System with course creation, live video classes, instructor payouts, and automated certificates.",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    tags: ["Next.js", "Tailwind CSS", "LMS"],
    year: "2025",
    highlight: "Interactive Desktop Preview",
    isLmsPreview: true,
  },
  {
    id: 2,
    title: "MyMedicare",
    description:
      "A futuristic cloud-based Pharmacy POS & inventory system with automated GST billing, real-time stock tracking, and expiry alerts.",
    category: "Web Application",
    image: "/images/mymedicare.png",
    tags: ["Next.js", "PostgreSQL", "Node.js"],
    year: "2025",
    highlight: "Pharmacy POS & Billing",
    link: "https://mymedicare.aqnoorlabs.online/",
  },
  {
    id: 3,
    title: "Biznexis",
    description:
      "All-in-one business tool: client-side optimized e-commerce utility automating invoice parsing, barcode sheets, and multi-layer GST/DTC margins.",
    category: "Web Application",
    image: "/images/biznexis.png",
    tags: ["Next.js", "Tailwind CSS", "WebAssembly"],
    year: "2025",
    highlight: "Seller Automation",
    link: "https://biznexis.aqnoorlabs.online/",
  },
  {
    id: 4,
    title: "Hotel Diamond",
    description:
      "Counter billing and QR-code table booking POS system with integrated AI chatbot and fully manageable control panel.",
    category: "Web Application",
    image: "/images/hoteldiamond.png",
    tags: ["Next.js", "Node.js", "AI Chatbot"],
    year: "2025",
    highlight: "Hospitality POS",
    link: "https://hoteldiamond.aqnoorlabs.online/",
  },
  {
    id: 5,
    title: "Aura Fintech Mobile App",
    description:
      "A personal asset and expense tracker that helps users manage cash flow effortlessly with zero sync delays.",
    category: "Mobile Application",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    tags: ["React Native", "Spring Boot", "PostgreSQL"],
    year: "2024",
    highlight: "Zero sync delays",
  },
  {
    id: 6,
    title: "Chronos Developer CLI",
    description:
      "A desktop dashboard for monitoring server and database health — instant alerts whenever issues occur.",
    category: "Desktop Software",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
    tags: ["Electron", "React", "TypeScript"],
    year: "2023",
    highlight: "Instant alerts",
  },
  {
    id: 7,
    title: "NexusAI Support Assistant",
    description:
      "AI customer support chatbot that answers FAQs 24/7 — reducing support ticket response times by 60%.",
    category: "AI Solution",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["Python", "Cloudflare", "Vector DB"],
    year: "2025",
    highlight: "60% faster support",
  },
];

const N8N_CARDS: CardData[] = N8N_PROJECTS.map((p, i) => ({
  id: i + 1,
  title: p.title,
  description: p.description,
  category: p.category,
  image: p.image,
  tags: p.tags,
  year: "2025",
}));

function FeaturedCard({ card, large = false }: { card: CardData; large?: boolean }) {
  const handleClick = () => {
    if (card.isLmsPreview) {
      if (onOpenLms) onOpenLms();
    } else if (card.link) {
      window.open(card.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card cursor-pointer ${
        large ? "h-[380px]" : "h-[300px]"
      }`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          draggable={false}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
      </div>

      {/* Top badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-semibold text-white">
          {card.category}
        </span>
      </div>

      {/* Year badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="inline-flex items-center rounded-full bg-primary/80 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-white">
          {card.year}
        </span>
      </div>

      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        {card.highlight && (
          <span className="inline-flex items-center gap-1 mb-2 rounded-full bg-primary/95 px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider transition-all duration-300 transform md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0">
            ✦ {card.highlight}
          </span>
        )}
        <h3 className="text-base font-bold text-white leading-tight mb-1.5 group-hover:text-primary-foreground transition-colors">
          {card.title}
        </h3>
        <p className="text-xs text-white/70 leading-relaxed line-clamp-2 mb-3">
          {card.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {card.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/15 text-white/90 backdrop-blur-sm border border-white/15"
              >
                {tag}
              </span>
            ))}
            {card.tags.length > 2 && (
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                +{card.tags.length - 2}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs font-bold text-white bg-primary rounded-full px-3 py-1.5 transition-all duration-300 transform md:opacity-0 md:scale-90 md:group-hover:opacity-100 md:group-hover:scale-100">
            {card.isLmsPreview ? (
              <>
                <Monitor className="w-3 h-3" />
                Preview UI
              </>
            ) : (
              <>
                <ExternalLink className="w-3 h-3" />
                View
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CardsSlider() {
  const [activeTab, setActiveTab] = useState<Tab>("engineering");
  const [isLmsModalOpen, setIsLmsModalOpen] = useState(false);

  const cards = activeTab === "engineering" ? ENGINEERING_CARDS : N8N_CARDS;

  // Layout: first card is large (spans 2 rows on lg), rest fill a 3-col grid
  const [featured, ...rest] = cards;
  return (
    <div id="projects" className="w-full py-16 md:py-20">
      {/* Section Header */}
      <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0 mb-10 text-center">
        <Badge
          variant="outline"
          className="mb-4 inline-flex items-center gap-2 rounded-full border-primary/20 bg-primary/5 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-primary"
        >
          Showcase
        </Badge>
        <h2 className="mb-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Featured Projects
        </h2>
        <p className="text-foreground/65 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-medium">
          Real projects for real businesses — see what we&apos;ve built and what it did for them.
        </p>

        {/* Tab Switcher */}
        <div className="mt-8 inline-flex items-center gap-1.5 p-1.5 rounded-full bg-secondary/80 border border-border/50 shadow-sm">
          <button
            onClick={() => setActiveTab("engineering")}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeTab === "engineering"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Cpu className="w-4 h-4" />
            Web & Apps
          </button>
          <button
            onClick={() => setActiveTab("n8n")}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeTab === "n8n"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Zap className="w-4 h-4" />
            AI Automation
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0"
        >
          {/* Bento-style layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {/* Featured large card - spans 2 cols on lg */}
            {featured && (
              <div className="sm:col-span-2 lg:col-span-2">
                <FeaturedCard
                  card={featured}
                  large
                  onOpenLms={() => setIsLmsModalOpen(true)}
                />
              </div>
            )}

            {/* Rest of cards */}
            {rest.map((card) => (
              <div key={card.id}>
                <FeaturedCard
                  card={card}
                  onOpenLms={() => setIsLmsModalOpen(true)}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Desktop Laptop Screen Preview Backdrop Modal */}
      <AnimatePresence>
        {isLmsModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
            onClick={() => setIsLmsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Modal Header */}
              <div className="flex items-center justify-between px-4 py-2 mb-2 text-white">
                <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
                  <Monitor className="w-4 h-4 text-primary" />
                  <span>Rocket LMS Platform Preview</span>
                </div>
                <button
                  onClick={() => setIsLmsModalOpen(false)}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                  Close
                </button>
              </div>

              {/* Desktop Laptop Mockup Screen Component */}
              <RocketLmsShowcase onClose={() => setIsLmsModalOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Short CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0 mt-12"
      >
        <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-gradient-to-r from-primary/8 via-primary/12 to-accent/8 p-6 md:p-10">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-primary mb-1.5">
                Have a project in mind?
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                Let&apos;s turn it into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  something real.
                </span>
              </h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-md font-medium leading-relaxed">
                We usually reply within a few hours — no long waits, no chasing us for updates.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-bold text-sm md:text-base hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-primary/25 cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
