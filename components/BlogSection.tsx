"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowUpRight, Tag } from "lucide-react";
import { useState } from "react";

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
      "Most small business websites in India are slow, un-optimized, and invisible to Google. Here's exactly what we've seen break businesses — and the practical fixes we use for every client.",
    category: "Web Development",
    tags: ["SEO", "Performance", "Next.js"],
    date: "Jul 20, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    author: { name: "Abuswaliha B Shaikh", role: "Founder" },
    featured: true,
  },
  {
    id: 2,
    title: "Building a WhatsApp Lead Bot with n8n — A Step-by-Step Guide",
    excerpt:
      "Automated lead capture can transform your sales pipeline. We walk through how we built a WhatsApp bot using n8n that captures, qualifies, and routes leads to your CRM in under 30 seconds.",
    category: "AI Automation",
    tags: ["n8n", "WhatsApp API", "Lead Generation"],
    date: "Jul 14, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
    author: { name: "Suhel M Alase", role: "CTO" },
  },
  {
    id: 3,
    title: "React Native vs Flutter in 2026 — Which One Should You Choose?",
    excerpt:
      "After shipping apps in both frameworks for Indian clients, here's our honest take: which one wins for your use case, team size, and budget — no marketing fluff included.",
    category: "Mobile Development",
    tags: ["React Native", "Flutter", "Mobile Apps"],
    date: "Jul 8, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    author: { name: "Suhel M Alase", role: "CTO" },
  },
  {
    id: 4,
    title: "How We Reduced a Client's AWS Bill by ₹40,000/Month Without Touching Code",
    excerpt:
      "Cloud costs spiral quickly when no one's watching. Here are the exact optimizations — reserved instances, right-sizing, CDN changes — we used to slash monthly bills for a D2C brand.",
    category: "DevOps",
    tags: ["AWS", "Cost Optimization", "Cloud"],
    date: "Jun 30, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    author: { name: "Abuswaliha B Shaikh", role: "Founder" },
  },
  {
    id: 5,
    title: "Milestone-Based Pricing: Why It Protects Both the Client and the Agency",
    excerpt:
      "Fixed-price contracts lead to scope creep. Time-and-material gets expensive. Here's why we built our entire billing model around milestones — and why clients love it.",
    category: "Business",
    tags: ["Pricing", "Client Work", "Transparency"],
    date: "Jun 22, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    author: { name: "Abuswaliha B Shaikh", role: "Founder" },
  },
  {
    id: 6,
    title: "The Stack We Use for Every New Client Project in 2026",
    excerpt:
      "Next.js 15, PostgreSQL, Cloudflare, and n8n for automation — we've refined our default stack over dozens of projects. Here's what we pick and why for different project types.",
    category: "Engineering",
    tags: ["Tech Stack", "Next.js", "Architecture"],
    date: "Jun 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
    author: { name: "Suhel M Alase", role: "CTO" },
  },
];

const CATEGORIES = ["All", "Web Development", "AI Automation", "Mobile Development", "DevOps", "Business", "Engineering"];

const CATEGORY_COLORS: Record<string, string> = {
  "Web Development": "bg-blue-500/10 text-blue-700 border-blue-500/20",
  "AI Automation": "bg-violet-500/10 text-violet-700 border-violet-500/20",
  "Mobile Development": "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  "DevOps": "bg-orange-500/10 text-orange-700 border-orange-500/20",
  "Business": "bg-pink-500/10 text-pink-700 border-pink-500/20",
  "Engineering": "bg-cyan-500/10 text-cyan-700 border-cyan-500/20",
};

function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative h-64 md:h-auto overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60 md:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:hidden" />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-md">
              ✦ Featured
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7 md:p-9 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${CATEGORY_COLORS[post.category] || "bg-primary/10 text-primary border-primary/20"}`}>
              {post.category}
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight leading-tight mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 font-medium line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-primary group-hover:gap-2.5 transition-all">
              Read Article
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-400 cursor-pointer flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${CATEGORY_COLORS[post.category] || "bg-primary/10 text-primary border-primary/20"}`}>
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-sm font-extrabold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3 font-medium">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/8 text-primary border border-primary/15"
            >
              <Tag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-foreground">{post.author.name}</span>
            <span className="text-[10px] text-muted-foreground">{post.author.role}</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-0.5">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-0.5">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
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
    <section className="py-10 md:py-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="outline"
            className="mb-4 inline-flex items-center gap-2 rounded-full border-primary/20 bg-primary/5 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-primary"
          >
            Blog & Insights
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight mb-4">
            Ideas, Guides &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary/60">
              Opinions
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
            No fluff. Real-world perspectives from building software for Indian businesses — covering tech, strategy, and everything in between.
          </p>
        </motion.div>
      </div>

      {/* Featured Post */}
      {featured && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-10">
          <FeaturedPostCard post={featured} />
        </div>
      )}

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-8">
        <div className="flex overflow-x-auto gap-2 pb-3 md:pb-0 md:flex-wrap snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border cursor-pointer flex-shrink-0 snap-center ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground font-medium">
            No posts in this category yet — check back soon!
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-16"
      >
        <div className="relative rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/8 via-background to-accent/8 p-8 md:p-12 text-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-3">
              Got a project in mind?
            </h2>
            <p className="text-sm text-muted-foreground font-medium mb-6 max-w-lg mx-auto leading-relaxed">
              We write about what we build. If you want us to build something for you — let&apos;s talk.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-primary/25"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
