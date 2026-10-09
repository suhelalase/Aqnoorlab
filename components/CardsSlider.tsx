"use client";

import { useState } from "react";
import { ExternalLink, Zap, Cpu, ArrowUpRight, X, Monitor } from "lucide-react";
import { N8N_PROJECTS } from "@/lib/constants";
import { RocketLmsShowcase } from "@/components/RocketLmsShowcase";
import Button from "@/components/Button";

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
  previewData?: {
    title: string;
    badge: string;
    description: string;
    imageSrc: string;
    liveUrl?: string;
    displayUrl?: string;
    buttonText?: string;
  };
}

type Tab = "engineering" | "n8n";

const ENGINEERING_CARDS: CardData[] = [
  {
    id: 1,
    title: "Rocket LMS Platform",
    description:
      "All-in-one Learning Management System with course creation, live video classes, instructor payouts, and automated certificates.",
    category: "Web Application",
    image: "/images/rocket-lms.png",
    tags: ["Next.js", "Tailwind CSS", "LMS"],
    year: "2025",
    highlight: "Interactive Desktop Preview",
    isLmsPreview: true,
    previewData: {
      title: "Rocket LMS Platform & Mobile Experience",
      badge: "Live Production LMS",
      description:
        "Course builder, HD live classes with chat, automated certificates, and instructor commission payouts.",
      imageSrc: "/images/rocket-lms.png",
      liveUrl: "https://lms.rocket-soft.org/",
      displayUrl: "https://lms.rocket-soft.org/",
      buttonText: "Open Live LMS Demo",
    },
  },
  {
    id: 2,
    title: "MyMedicare POS & ERP",
    description:
      "Cloud-based Pharmacy POS & inventory system with automated GST billing, real-time stock tracking, and expiry alerts.",
    category: "Enterprise System",
    image: "/images/mymedicare.png",
    tags: ["Next.js", "PostgreSQL", "Node.js"],
    year: "2025",
    highlight: "Pharmacy POS & Billing",
    isLmsPreview: true,
    link: "https://mymedicare.aqnoorlabs.online/",
    previewData: {
      title: "MyMedicare — Pharmacy POS & Inventory ERP",
      badge: "Live Pharmacy POS",
      description:
        "Real-time analytics dashboard, automated GST billing, multi-layer expiry alerts, barcode stock tracking, and multi-user access.",
      imageSrc: "/images/mymedicare.png",
      liveUrl: "https://mymedicare.aqnoorlabs.online/",
      displayUrl: "https://mymedicare.aqnoorlabs.online/",
      buttonText: "Open Live Pharmacy POS",
    },
  },
  {
    id: 3,
    title: "Biznexis Utility Engine",
    description:
      "Client-side optimized e-commerce utility automating invoice parsing, barcode sheets, and multi-layer GST/DTC margins.",
    category: "Web Application",
    image: "/images/mymedicare.png",
    tags: ["Next.js", "Tailwind CSS", "WebAssembly"],
    year: "2025",
    highlight: "Seller Automation",
    link: "https://biznexis.aqnoorlabs.online/",
    isLmsPreview: true,
    previewData: {
      title: "Biznexis — Seller Automation & Invoice Engine",
      badge: "E-Commerce Utility",
      description:
        "Client-side optimized e-commerce utility automating invoice parsing, barcode sheets, and multi-layer GST/DTC margins.",
      imageSrc: "/images/mymedicare.png",
      liveUrl: "https://biznexis.aqnoorlabs.online/",
      displayUrl: "https://biznexis.aqnoorlabs.online/",
      buttonText: "Open Biznexis App",
    },
  },
  {
    id: 4,
    title: "Hotel Diamond POS",
    description:
      "Counter billing and QR-code table booking POS system with integrated AI chatbot and fully manageable control panel.",
    category: "Hospitality ERP",
    image: "/images/mobile_project.jpg",
    tags: ["Next.js", "Node.js", "AI Chatbot"],
    year: "2025",
    highlight: "Hospitality POS",
    link: "https://hoteldiamond.aqnoorlabs.online/",
    isLmsPreview: true,
    previewData: {
      title: "Hotel Diamond — Hospitality POS & QR Dining",
      badge: "Hospitality POS",
      description:
        "Counter billing and QR-code table booking POS system with integrated AI chatbot and fully manageable control panel.",
      imageSrc: "/images/mobile_project.jpg",
      liveUrl: "https://hoteldiamond.aqnoorlabs.online/",
      displayUrl: "https://hoteldiamond.aqnoorlabs.online/",
      buttonText: "Open Hotel Diamond POS",
    },
  },
  {
    id: 5,
    title: "Aura Fintech Mobile App",
    description:
      "A personal asset and expense tracker that helps users manage cash flow effortlessly with zero sync delays.",
    category: "Mobile Software",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    tags: ["React Native", "Spring Boot", "PostgreSQL"],
    year: "2024",
    highlight: "Zero Sync Delays",
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
    highlight: "Instant Monitoring",
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

function ProjectCard({
  card,
  onOpenPreview,
}: {
  card: CardData;
  onOpenPreview?: (card: CardData) => void;
}) {
  const handleClick = () => {
    if (card.isLmsPreview || card.previewData) {
      if (onOpenPreview) onOpenPreview(card);
    } else if (card.link) {
      window.open(card.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="enterprise-card group flex flex-col justify-between overflow-hidden cursor-pointer h-full"
    >
      <div>
        <div className="relative h-44 w-full overflow-hidden bg-slate-900 border-b border-slate-200">
          <img
            src={card.image}
            alt={card.title}
            className="h-full w-full object-cover"
            draggable={false}
          />
          <div className="absolute top-3 left-3">
            <span className="enterprise-badge">{card.category}</span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="px-2 py-0.5 rounded bg-[#162032] text-white font-mono text-xs font-bold">
              {card.year}
            </span>
          </div>
        </div>

        <div className="p-5">
          {card.highlight && (
            <span className="inline-block font-mono text-[11px] font-bold text-[#0052cc] uppercase tracking-wider mb-1">
              [ {card.highlight} ]
            </span>
          )}
          <h3 className="text-lg font-bold text-[#162032] leading-snug mb-2 font-display">
            {card.title}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
            {card.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-2">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
        <span className="text-xs font-bold text-slate-700">
          {card.isLmsPreview || card.previewData ? "Interactive Preview" : "Production Release"}
        </span>
        <div className="inline-flex items-center gap-1 text-xs font-bold text-[#0052cc] group-hover:text-[#003366]">
          {card.isLmsPreview || card.previewData ? (
            <>
              <Monitor className="w-3.5 h-3.5" />
              <span>Launch Demo</span>
            </>
          ) : (
            <>
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View System</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function CardsSlider() {
  const [activeTab, setActiveTab] = useState<Tab>("engineering");
  const [selectedPreviewCard, setSelectedPreviewCard] = useState<CardData | null>(null);

  const cards = activeTab === "engineering" ? ENGINEERING_CARDS : N8N_CARDS;

  return (
    <div id="projects" className="w-full py-16 md:py-24 bg-white border-b border-slate-300">
      {/* Section Header */}
      <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-slate-300 bg-[#f1f5f9] font-mono text-xs font-bold uppercase text-slate-700 mb-3 shadow-sm">
          <span>[ PRODUCTION DELIVERABLES ]</span>
        </div>
        <h2 className="mb-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#162032] font-display">
          Featured Engineering Projects
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
          Production systems built for real businesses — inspect live web applications, mobile platforms, and automated workflow pipelines.
        </p>

        {/* Tab Switcher */}
        <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded bg-slate-100 border border-slate-300">
          <button
            onClick={() => setActiveTab("engineering")}
            className={`flex items-center gap-2 px-5 py-2 rounded text-xs font-bold font-mono uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === "engineering"
                ? "bg-[#162032] text-white shadow-sm"
                : "text-slate-600 hover:text-[#162032]"
            }`}
          >
            <Cpu className="w-4 h-4" />
            Web Platforms &amp; Software
          </button>
          <button
            onClick={() => setActiveTab("n8n")}
            className={`flex items-center gap-2 px-5 py-2 rounded text-xs font-bold font-mono uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === "n8n"
                ? "bg-[#162032] text-white shadow-sm"
                : "text-slate-600 hover:text-[#162032]"
            }`}
          >
            <Zap className="w-4 h-4" />
            AI &amp; n8n Automation
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.id}>
              <ProjectCard
                card={card}
                onOpenPreview={(c) => setSelectedPreviewCard(c)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {selectedPreviewCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 overflow-y-auto"
          onClick={() => setSelectedPreviewCard(null)}
        >
          <div
            className="relative w-full max-w-5xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-t border-x border-slate-700 rounded-t-lg text-white">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-slate-200">
                <Monitor className="w-4 h-4 text-[#38bdf8]" />
                <span>{selectedPreviewCard.title} &bull; System Inspection</span>
              </div>
              <button
                onClick={() => setSelectedPreviewCard(null)}
                className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer border border-slate-600"
              >
                <X className="w-4 h-4" />
                <span>Close</span>
              </button>
            </div>

            <RocketLmsShowcase
              onClose={() => setSelectedPreviewCard(null)}
              title={selectedPreviewCard.previewData?.title || selectedPreviewCard.title}
              badge={selectedPreviewCard.previewData?.badge}
              description={selectedPreviewCard.previewData?.description || selectedPreviewCard.description}
              imageSrc={selectedPreviewCard.previewData?.imageSrc || selectedPreviewCard.image}
              liveUrl={selectedPreviewCard.previewData?.liveUrl || selectedPreviewCard.link}
              displayUrl={selectedPreviewCard.previewData?.displayUrl || selectedPreviewCard.link}
              buttonText={selectedPreviewCard.previewData?.buttonText || "Open Live Demo"}
            />
          </div>
        </div>
      )}

      {/* Short CTA Banner */}
      <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0 mt-12">
        <div className="rounded-xl bg-gradient-to-r from-blue-50/80 via-slate-50 to-indigo-50/80 text-slate-900 p-8 border border-blue-200/70 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#0052cc] mb-1">
              HAVE A CUSTOM SOFTWARE SYSTEM TO BUILD?
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              Turn your requirements into production software.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-md font-medium leading-relaxed">
              We respond promptly with technical estimates, scope of work, and clear milestone schedules.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto font-bold bg-[#0052cc] hover:bg-[#0043a8] text-white"
            >
              <span>Request Project Quote</span>
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

