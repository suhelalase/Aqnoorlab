import Navbar from "@/components/Navbar";
import { HeroBlock } from "@/components/HeroBlock";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

// Dynamically import heavy and below-the-fold components
const CardsSlider = dynamic(() => import("@/components/CardsSlider").then((mod) => mod.CardsSlider), {
  ssr: true,
  loading: () => <div className="min-h-[400px] flex items-center justify-center text-muted-foreground text-sm font-medium">Loading projects...</div>,
});

const FAQSection = dynamic(() => import("@/components/FAQSection").then((mod) => mod.FAQSection), {
  ssr: true,
  loading: () => <div className="min-h-[300px] flex items-center justify-center text-muted-foreground text-sm font-medium">Loading FAQs...</div>,
});

const CTABlock = dynamic(() => import("@/components/CTABlock").then((mod) => mod.CTABlock), {
  ssr: true,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: true,
  loading: () => <div className="min-h-[400px] flex items-center justify-center text-muted-foreground text-sm font-medium">Loading contact form...</div>,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});

import ClientCursorFollower from "@/components/ClientCursorFollower";

export const metadata: Metadata = {
  title: "aqnoorlabs — Software Development Agency for Indian Businesses",
  description:
    "AqNoorLabs builds custom websites, web applications, mobile apps, desktop software, and AI systems that help Indian businesses grow — delivered on time, on budget.",
  alternates: {
    canonical: "https://aqnoorlabs.online",
  },
};

export default function Home() {
  return (
    <>
      <ClientCursorFollower />
      <Navbar />
      <main className="flex-1 w-full bg-background">
        <HeroBlock />
        <CardsSlider />
        <FAQSection />
        <CTABlock />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
