import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Contact Us | AqNoorLabs",
  description: "Get in touch with AqNoorLabs. We build custom websites, web applications, mobile apps, and workflow automation solutions for Indian businesses.",
  alternates: {
    canonical: "https://aqnoorlabs.online/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-background pt-24">
        {/* Contact Form Section */}
        <Contact />

        {/* Google Maps Location Section */}
        <section className="py-12 md:py-20 bg-background/50 border-t border-border/40">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-2">
                Our Location
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto font-medium">
                Visit us or locate our office on the map below.
              </p>
            </div>
            
            <div className="w-full overflow-hidden rounded-3xl border border-border/40 shadow-xl bg-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472159.15146024147!2d74.6061824!3d16.8759673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1195113731cc5%3A0xe7d294a71a65570c!2sAqnoor%20Labs!5e1!3m2!1sen!2sin!4v1785061159033!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-[450px]"
                title="Aqnoor Labs Location Map"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
