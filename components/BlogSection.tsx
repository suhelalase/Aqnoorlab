"use client";

import { Calendar, Clock, ArrowUpRight, Tag } from "lucide-react";
import { useState } from "react";
import Button from "@/components/Button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
  featured?: boolean;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Why Most Indian SME Websites Fail (And How to Fix Yours in 30 Days)",
    excerpt:
      "Most small business websites in India are slow, un-optimized, and invisible to search algorithms. Here is our engineering breakdown and practical performance fixes.",
    category: "Web Engineering",
    tags: ["SEO", "Performance", "Next.js"],
    date: "Jul 20, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    author: { name: "Abuswaliha B Shaikh", role: "Founder" },
    featured: true,
  },
  {
    id: 2,
    title: "Building a WhatsApp Lead Bot with n8n — Step-by-Step Architecture",
    excerpt:
      "Automated lead capture can transform sales pipelines. We detail how to construct a WhatsApp bot with n8n that qualifies and routes leads to your CRM.",
    category: "AI Automation",
    tags: ["n8n", "WhatsApp API", "Lead Routing"],
    date: "Jul 14, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
    author: { name: "Suhel M Alase", role: "CTO" },
  },
  {
    id: 3,
    title: "React Native vs Flutter in 2026 — Architectural Breakdown",
    excerpt:
      "After shipping production apps in both frameworks for enterprise clients, here is an objective analysis of performance, bundle sizes, and maintenance cost.",
    category: "Mobile Systems",
    tags: ["React Native", "Flutter", "Mobile"],
    date: "Jul 8, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    author: { name: "Suhel M Alase", role: "CTO" },
  },
  {
    id: 4,
    title: "Optimizing AWS & Cloud Infrastructure Bills for Enterprise Apps",
    excerpt:
      "Cloud expenses scale rapidly when unchecked. Here are practical optimizations — reserved instances, connection pooling, and CDN caching — to reduce costs.",
    category: "DevOps",
    tags: ["AWS", "Cost Optimization", "Cloud"],
    date: "Jun 30, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    author: { name: "Abuswaliha B Shaikh", role: "Founder" },
  },
  {
    id: 5,
    title: "Milestone-Based Billing: Protecting Project Integrity and Client Value",
    excerpt:
      "Fixed-price contracts cause scope creep while time-and-materials create budget unpredictability. Here is why milestone-based delivery creates alignment.",
    category: "Operations",
    tags: ["Milestones", "Client Engagement", "SLA"],
    date: "Jun 22, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    author: { name: "Abuswaliha B Shaikh", role: "Founder" },
  },
  {
    id: 6,
    title: "Our Engineering Stack Choice for Production Client Systems",
    excerpt:
      "Next.js 15, PostgreSQL, Cloudflare, and n8n — we have refined our production stack over dozens of software implementations.",
    category: "Engineering",
    tags: ["Tech Stack", "Next.js", "Architecture"],
    date: "Jun 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
    author: { name: "Suhel M Alase", role: "CTO" },
  },
];

const CATEGORIES = ["All", "Web Engineering", "AI Automation", "Mobile Systems", "DevOps", "Operations", "Engineering"];

function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <div className="enterprise-card group overflow-hidden cursor-pointer">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-64 md:h-auto overflow-hidden bg-slate-900 border-b md:border-b-0 md:border-r border-slate-200">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-2.5 py-1 rounded bg-[#0052cc] text-white font-mono text-xs font-bold uppercase">
              FEATURED ESSAY
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-center bg-white">
          <div className="mb-2">
            <span className="enterprise-badge">{post.category}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-[#162032] tracking-tight leading-tight mb-3 font-display">
            {post.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between border-t border-slate-200 pt-4">
            <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-[#0052cc]">
              <span>Read Insight</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <div className="enterprise-card group cursor-pointer flex flex-col justify-between h-full">
      <div>
        <div className="relative h-44 overflow-hidden bg-slate-900 border-b border-slate-200">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <span className="enterprise-badge">{post.category}</span>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-base font-bold text-[#162032] leading-tight mb-2 font-display line-clamp-2">
            {post.title}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3 font-normal">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
              >
                <Tag className="w-2.5 h-2.5 text-[#0052cc]" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
        <span className="font-bold text-slate-800">{post.author.name}</span>
        <span className="text-slate-500 font-mono">{post.date}</span>
      </div>
    </div>
  );
}

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = BLOG_POSTS.find((p) => p.featured);
  const filtered = BLOG_POSTS.filter((p) => {
    if (p.featured) return false;
    if (activeCategory === "All") return true;
    return p.category === activeCategory;
  });

  return (
    <section className="py-12 md:py-20 bg-[#f8fafc] border-b border-slate-300">
      <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0 mb-12 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded border border-slate-300 bg-white px-3 py-1 font-mono text-xs font-bold uppercase text-slate-700 shadow-sm">
          <span>[ ENGINEERING INSIGHTS &amp; PAPERS ]</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#162032] tracking-tight mb-3 font-display">
          Technical Essays &amp; Case Analysis
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-600 leading-relaxed font-medium">
          Practical takeaways from engineering scalable web applications, mobile software, and AI automation systems.
        </p>
      </div>

      {featured && (
        <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0 mb-10">
          <FeaturedPostCard post={featured} />
        </div>
      )}

      {/* Category Filter */}
      <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0 mb-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                activeCategory === cat
                  ? "bg-[#0052cc] text-white border-[#0052cc] shadow-xs"
                  : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-500 font-mono text-sm">
            No papers in this category currently.
          </div>
        )}
      </div>

      <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0 mt-16">
        <div className="rounded-xl bg-gradient-to-r from-blue-50/80 via-slate-50 to-indigo-50/80 text-slate-900 p-8 md:p-12 text-center border border-blue-200/70 shadow-xs">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2 font-display">
            Require Technical Advice for Your Project?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium mb-6 max-w-lg mx-auto leading-relaxed">
            Reach out to our engineering lead for a direct code architecture review and consultation.
          </p>
          <Button href="/contact" variant="primary" size="md" className="font-bold bg-[#0052cc] hover:bg-[#0043a8] text-white">
            <span>Consult Technical Lead</span>
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

