import Navbar from "@/components/Navbar";
import { HeroBlock } from "@/components/HeroBlock";
import { CardsSlider } from "@/components/CardsSlider";
import { FAQSection } from "@/components/FAQSection";
import { CTABlock } from "@/components/CTABlock";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";

export default function Home() {
  return (
    <>
      <CursorFollower />
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
