import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";
export const metadata: Metadata = {
  title: "Blog — AqNoorLabs",
  description:
    "Insights, tutorials, and perspectives from the AqNoorLabs team — covering web development, mobile apps, AI automation, and building software for Indian businesses.",
  alternates: {
    canonical: "https://aqnoorlabs.online/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-background pt-24">
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
