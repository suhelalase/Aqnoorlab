import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import ClientCursorFollower from "@/components/ClientCursorFollower";

export const metadata: Metadata = {
  title: "Our Team — AqNoorLabs",
  description:
    "Meet the talented team behind AqNoorLabs — building world-class software for Indian businesses. Founder Abuswaliha B Shaikh and CTO Suhel M Alase lead the company.",
  alternates: {
    canonical: "https://aqnoorlabs.online/team",
  },
};

export default function TeamPage() {
  return (
    <>
      <ClientCursorFollower />
      <Navbar />
      <main className="flex-1 w-full bg-background pt-24">
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
