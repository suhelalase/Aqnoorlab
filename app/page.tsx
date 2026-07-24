import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Why from "@/components/Why";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-background">
        <Hero />
        <About />
        <Features />
        <Trust />
        <Services />
        <Process />
        <Why />
        <Projects />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
