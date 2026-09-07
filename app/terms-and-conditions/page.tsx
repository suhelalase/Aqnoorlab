import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | AqNoorLabs",
  description:
    "Terms and Conditions for Abuswaliha Bashir Shaikh (AqNoorLabs). Read our terms of use, payment policies, user responsibilities, and governing law.",
  alternates: {
    canonical: "https://aqnoorlabs.online/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-background pt-32 pb-24">
        <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0">
          {/* Header Banner */}
          <div className="text-center mb-10 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand/5 blur-3xl rounded-full -z-10" />
            <span className="text-xs uppercase tracking-widest text-brand font-bold bg-brand/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Legal Agreement
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground tracking-tight mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm md:text-base text-muted-foreground font-sans max-w-xl mx-auto">
              Last updated on 07-09-2026 23:57:17. Please review these terms carefully before accessing our website or availing our services.
            </p>
          </div>

          {/* Quick Legal Switcher Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-14">
            <Link
              href="/terms-and-conditions"
              className="px-5 py-2.5 rounded-xl text-xs md:text-sm font-sans font-semibold uppercase tracking-wider transition-all duration-200 bg-brand text-white border border-brand shadow-md"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="px-5 py-2.5 rounded-xl text-xs md:text-sm font-sans font-semibold uppercase tracking-wider transition-all duration-200 border border-border/60 bg-muted/30 text-foreground/75 hover:bg-brand hover:text-white hover:border-brand shadow-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cancellation-and-refund-policy"
              className="px-5 py-2.5 rounded-xl text-xs md:text-sm font-sans font-semibold uppercase tracking-wider transition-all duration-200 border border-border/60 bg-muted/30 text-foreground/75 hover:bg-brand hover:text-white hover:border-brand shadow-sm"
            >
              Cancellation &amp; Refund
            </Link>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-panel p-6 rounded-2xl border border-border/60 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand font-bold text-lg mb-3">
                ⚖️
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-1">
                Binding Agreement
              </h3>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed">
                A legally enforceable agreement between Abuswaliha Bashir Shaikh and you governing website usage and services.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-border/60 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand font-bold text-lg mb-3">
                🛡️
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-1">
                Refund Protection
              </h3>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed">
                Entitlement to claim a refund if services cannot be provided within our specified policy timelines.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-border/60 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand font-bold text-lg mb-3">
                📍
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-1">
                Indian Jurisdiction
              </h3>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed">
                Governed under Indian laws with exclusive dispute jurisdiction in courts of Sangli, Maharashtra.
              </p>
            </div>
          </div>

          {/* Grid Layout: Sidebar & Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Sidebar Table of Contents */}
            <div className="lg:col-span-4 sticky top-32 hidden lg:block h-fit self-start">
              <div className="glass-panel rounded-3xl p-6 shadow-md border border-border/60">
                <h3 className="text-base font-display font-bold text-foreground mb-4 pb-2 border-b border-border/50">
                  Quick Navigation
                </h3>
                <nav className="space-y-2.5 text-sm">
                  <a href="#agreement" className="block text-foreground/70 hover:text-brand font-medium transition-colors">
                    1. Binding Agreement &amp; Acceptance
                  </a>
                  <a href="#registration" className="block text-foreground/70 hover:text-brand font-medium transition-colors">
                    2. Registration &amp; Account Information
                  </a>
                  <a href="#disclaimer" className="block text-foreground/70 hover:text-brand font-medium transition-colors">
                    3. Accuracy of Materials &amp; Disclaimer
                  </a>
                  <a href="#risk" className="block text-foreground/70 hover:text-brand font-medium transition-colors">
                    4. Use at Own Risk &amp; Assessment
                  </a>
                  <a href="#ip" className="block text-foreground/70 hover:text-brand font-medium transition-colors">
                    5. Proprietary Content &amp; IP Rights
                  </a>
                  <a href="#charges" className="block text-foreground/70 hover:text-brand font-medium transition-colors">
                    6. Charges &amp; Lawful Use
                  </a>
                  <a href="#third-party" className="block text-foreground/70 hover:text-brand font-medium transition-colors">
                    7. Third-Party Links &amp; Websites
                  </a>
                  <a href="#contracts" className="block text-foreground/70 hover:text-brand font-medium transition-colors">
                    8. Legally Enforceable Transactions
                  </a>
                  <a href="#refunds" className="block text-foreground/70 hover:text-brand font-medium transition-colors">
                    9. Refund Entitlements &amp; Timelines
                  </a>
                  <a href="#force-majeure" className="block text-foreground/70 hover:text-brand font-medium transition-colors">
                    10. Force Majeure
                  </a>
                  <a href="#jurisdiction" className="block text-foreground/70 hover:text-brand font-medium transition-colors">
                    11. Governing Law &amp; Jurisdiction
                  </a>
                  <a href="#contact" className="block text-foreground/70 hover:text-brand font-medium transition-colors">
                    12. Contact &amp; Communications
                  </a>
                </nav>
              </div>
            </div>

            {/* Document Content */}
            <div className="lg:col-span-8 space-y-12">
              <div className="glass-panel rounded-2xl md:rounded-3xl p-4 sm:p-8 md:p-12 shadow-xl border border-border/40 font-sans text-foreground/80 leading-relaxed space-y-10">
                
                {/* Section 1 */}
                <section id="agreement" className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    1. Binding Agreement &amp; Acceptance
                  </h2>
                  <p>
                    These Terms and Conditions, along with privacy policy or other terms (&ldquo;Terms&rdquo;) constitute a binding agreement by and between <strong>Abuswaliha Bashir Shaikh</strong>, (&ldquo;Website Owner&rdquo; or &ldquo;we&rdquo; or &ldquo;us&rdquo; or &ldquo;our&rdquo;) and you (&ldquo;you&rdquo; or &ldquo;your&rdquo;) and relate to your use of our website, goods (as applicable) or services (as applicable) (collectively, &ldquo;Services&rdquo;).
                  </p>
                  <p>
                    By using our website and availing the Services, you agree that you have read and accepted these Terms (including the Privacy Policy). We reserve the right to modify these Terms at any time and without assigning any reason. It is your responsibility to periodically review these Terms to stay informed of updates.
                  </p>
                  <p className="font-semibold text-foreground">
                    The use of this website or availing of our Services is subject to the following terms of use:
                  </p>
                </section>

                {/* Section 2 */}
                <section id="registration" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    2. Registration &amp; Account Information
                  </h2>
                  <p>
                    To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account.
                  </p>
                </section>

                {/* Section 3 */}
                <section id="disclaimer" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    3. Accuracy of Materials &amp; Disclaimer of Warranty
                  </h2>
                  <p>
                    Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="risk" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    4. Use at Own Risk &amp; Independent Assessment
                  </h2>
                  <p>
                    Your use of our Services and the website is solely at your own risk and discretion. You are required to independently assess and ensure that the Services meet your requirements.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="ip" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    5. Proprietary Content &amp; Intellectual Property
                  </h2>
                  <p>
                    The contents of the Website and the Services are proprietary to Us and you will not have any authority to claim any intellectual property rights, title, or interest in its contents.
                  </p>
                  <p>
                    You acknowledge that unauthorized use of the Website or the Services may lead to action against you as per these Terms or applicable laws.
                  </p>
                </section>

                {/* Section 6 */}
                <section id="charges" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    6. Charges &amp; Lawful Use
                  </h2>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>Service Charges:</strong> You agree to pay us the charges associated with availing the Services.
                    </li>
                    <li>
                      <strong>Lawful Use:</strong> You agree not to use the website and/or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.
                    </li>
                  </ul>
                </section>

                {/* Section 7 */}
                <section id="third-party" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    7. Third-Party Websites &amp; Links
                  </h2>
                  <p>
                    You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites.
                  </p>
                </section>

                {/* Section 8 */}
                <section id="contracts" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    8. Legally Enforceable Contract on Transaction
                  </h2>
                  <p>
                    You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with us for the Services.
                  </p>
                </section>

                {/* Section 9 */}
                <section id="refunds" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    9. Refund Entitlement &amp; Timelines
                  </h2>
                  <div className="bg-muted/40 border border-border/60 rounded-2xl p-6 space-y-3">
                    <p className="font-semibold text-foreground text-base">
                      Refund Claim Policy:
                    </p>
                    <p>
                      You shall be entitled to claim a refund of the payment made by you in case we are not able to provide the Service. The timelines for such return and refund will be according to the specific Service you have availed or within the time period provided in our policies (as applicable). In case you do not raise a refund claim within the stipulated time, then this would make you ineligible for a refund.
                    </p>
                  </div>
                </section>

                {/* Section 10 */}
                <section id="force-majeure" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    10. Force Majeure
                  </h2>
                  <p>
                    Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.
                  </p>
                </section>

                {/* Section 11 */}
                <section id="jurisdiction" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    11. Governing Law &amp; Jurisdiction
                  </h2>
                  <p>
                    These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India.
                  </p>
                  <p>
                    All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in <strong>Sangli, Maharashtra</strong>.
                  </p>
                </section>

                {/* Section 12 */}
                <section id="contact" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    12. Contact Information &amp; Communications
                  </h2>
                  <p>
                    All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website:
                  </p>
                  <div className="bg-muted/40 border border-border/50 rounded-2xl p-6 space-y-2 font-sans text-sm mt-4">
                    <p><strong>Website Owner:</strong> Abuswaliha Bashir Shaikh (AqNoorLabs)</p>
                    <p><strong>Customer Support Email:</strong> <a href="mailto:support@aqnoorlabs.online" className="text-brand hover:underline font-semibold">support@aqnoorlabs.online</a></p>
                    <p><strong>General Inquiries:</strong> <a href="mailto:hi@aqnoorlabs.online" className="text-brand hover:underline font-semibold">hi@aqnoorlabs.online</a></p>
                    <p><strong>Phone &amp; WhatsApp:</strong> <a href="https://wa.me/917387450332" className="text-brand hover:underline font-semibold">+91 7387450332</a></p>
                    <p><strong>Jurisdiction &amp; Office:</strong> Sangli, Maharashtra, India</p>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
