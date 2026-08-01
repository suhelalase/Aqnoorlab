import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientCursorFollower from "@/components/ClientCursorFollower";

export const metadata: Metadata = {
  title: "Privacy Policy | AqNoorLabs",
  description: "Privacy Policy for AqNoorLabs. Read about how we handle personal data in compliance with India's Digital Personal Data Protection (DPDP) Act, 2023.",
  alternates: {
    canonical: "https://aqnoorlabs.online/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <ClientCursorFollower />
      <Navbar />
      <main className="flex-1 w-full bg-background pt-32 pb-24">
        <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0">
          {/* Header Banner */}
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand/5 blur-3xl rounded-full -z-10" />
            <span className="text-xs uppercase tracking-widest text-brand font-bold bg-brand/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Privacy Compliance
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm md:text-base text-muted-foreground font-sans max-w-xl mx-auto">
              Last updated: July 27, 2026. This policy outlines how we collect, store, and process your personal data under the DPDP Act, 2023.
            </p>
          </div>

          {/* Grid Layout: Sidebar & Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Sidebar Table of Contents */}
            <div className="lg:col-span-4 sticky top-32 hidden lg:block h-fit self-start">
              <div className="glass-panel rounded-3xl p-6 shadow-md border border-border/60">
                <h3 className="text-base font-display font-bold text-foreground mb-4 pb-2 border-b border-border/50">
                  Quick Navigation
                </h3>
                <nav className="space-y-3">
                  <a href="#dpdp-compliance" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">1. DPDP Act 2023 Compliance</a>
                  <a href="#data-collected" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">2. Personal Data We Collect</a>
                  <a href="#data-usage" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">3. Purpose of Processing Data</a>
                  <a href="#data-consent" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">4. Consent &amp; Right to Withdraw</a>
                  <a href="#user-rights" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">5. Your Rights as a Data Principal</a>
                  <a href="#data-retention" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">6. Data Retention &amp; Erasure</a>
                  <a href="#cookies" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">7. Cookies &amp; Analytics</a>
                  <a href="#grievance-officer" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">8. Grievance Redressal &amp; Contact</a>
                </nav>
              </div>
            </div>

            {/* Document Content */}
            <div className="lg:col-span-8 space-y-12">
              <div className="glass-panel rounded-2xl md:rounded-3xl p-4 sm:p-8 md:p-12 shadow-xl border border-border/40 font-sans text-foreground/80 leading-relaxed space-y-10">
                
                {/* Introduction */}
                <section className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    Introduction
                  </h2>
                  <p>
                    At <strong>AqNoorLabs</strong>, we prioritize the protection and security of your personal data. This Privacy Policy describes how we collect, use, store, and share personal information when you visit our website (<strong>aqnoorlabs.online</strong>), fill out our contact forms, or engage our services.
                  </p>
                  <p>
                    By interacting with our services, you consent to the collection and use of your information as outlined in this Policy.
                  </p>
                </section>

                {/* Section 1 */}
                <section id="dpdp-compliance" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    1. DPDP Act 2023 Compliance Notice
                  </h2>
                  <p>
                    This policy is aligned with India&apos;s <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>. As a registered entity under Indian laws:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      We act as a <strong>Data Fiduciary</strong> in determining the purpose and means of processing your personal data.
                    </li>
                    <li>
                      All personal data is processed solely on the basis of your **explicit, unambiguous, and revocable consent**, or for legitimate uses defined under the law.
                    </li>
                    <li>
                      You have the right to request a summary of the data we hold, correct inaccuracies, and demand erasure of your personal data at any time.
                    </li>
                  </ul>
                </section>

                {/* Section 2 */}
                <section id="data-collected" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    2. Personal Data We Collect
                  </h2>
                  <p>
                    We collect personal data that you voluntarily provide to us when you fill out contact forms or correspond with us:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Identity &amp; Contact Details:</strong> Full Name, Email Address, WhatsApp/Phone Number, and Company Name.
                    </li>
                    <li>
                      <strong>Project Requirements:</strong> Information about your business, website ideas, budgets, deadlines, and project scope details shared in message forms.
                    </li>
                    <li>
                      <strong>Technical &amp; Usage Data:</strong> IP Address, browser type, device information, operating system, and pages visited via session cookies.
                    </li>
                  </ul>
                </section>

                {/* Section 3 */}
                <section id="data-usage" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    3. Purpose of Processing Data
                  </h2>
                  <p>
                    We process your personal data strictly for specified and legitimate purposes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Service Provisioning:</strong> To reply to your project inquiries, discuss contracts, share proposals, issue invoices, and manage ongoing project developments.
                    </li>
                    <li>
                      <strong>Communication:</strong> To send you project updates via email, WhatsApp, or phone calls.
                    </li>
                    <li>
                      <strong>Security &amp; Abuse Prevention:</strong> To prevent fraudulent submissions and safeguard our server systems.
                    </li>
                    <li>
                      <strong>Legal &amp; Tax Obligations:</strong> To comply with GST billing and audit regulations under the Government of India.
                    </li>
                  </ul>
                </section>

                {/* Section 4 */}
                <section id="data-consent" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    4. Consent &amp; Right to Withdraw
                  </h2>
                  <p>
                    By submitting your details via our contact forms, you provide your explicit consent to process your information for the purposes stated.
                  </p>
                  <p>
                    <strong>Right to Withdraw:</strong> You have the right to withdraw your consent at any time. Upon receiving your withdrawal request, we will cease processing your personal data within 14 business days, except where retention is required by Indian law (e.g. historical tax invoices, financial accounting audits).
                  </p>
                </section>

                {/* Section 5 */}
                <section id="user-rights" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    5. Your Rights as a Data Principal
                  </h2>
                  <p>
                    Under the DPDP Act 2023, you hold the following rights:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Right to Access:</strong> Request a copy of the personal data we hold about you.
                    </li>
                    <li>
                      <strong>Right to Correction &amp; Completion:</strong> Request correction of inaccurate personal data or completion of incomplete records.
                    </li>
                    <li>
                      <strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> Ask us to delete your personal data when it is no longer necessary for the purpose it was collected.
                    </li>
                    <li>
                      <strong>Right to Grievance Redressal:</strong> Submit a complaint if you feel your data rights have been violated.
                    </li>
                  </ul>
                </section>

                {/* Section 6 */}
                <section id="data-retention" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    6. Data Retention &amp; Erasure
                  </h2>
                  <p>
                    We retain your contact details and business requirements only as long as necessary to fulfill project discussion or execution.
                  </p>
                  <p>
                    If you decide not to proceed with a project, you can email us to request data deletion, and your contact records will be wiped from our lead tracking databases within 30 days. Otherwise, active project data and invoices will be retained for up to 8 financial years to comply with Indian income tax and corporate audit regulations.
                  </p>
                </section>

                {/* Section 7 */}
                <section id="cookies" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    7. Cookies &amp; Analytics
                  </h2>
                  <p>
                    We use essential and functional cookies to ensure proper website rendering and styling. We may also use web analytics services (like Google Analytics) to monitor website traffic and improve layout performance. You can block or disable cookies via your browser settings, though some interactive elements on our website may cease to function correctly.
                  </p>
                </section>

                {/* Section 8 */}
                <section id="grievance-officer" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    8. Grievance Redressal &amp; Contact Details
                  </h2>
                  <p>
                    In accordance with Section 10 of the Digital Personal Data Protection (DPDP) Act, 2023, we have appointed a Grievance Officer. If you wish to exercise your data principal rights, withdraw consent, or file a complaint regarding your personal data, please contact:
                  </p>
                  <div className="bg-muted/40 border border-border/50 rounded-2xl p-6 space-y-2 mt-4 font-sans text-sm">
                    <p><strong>Designation:</strong> Data Grievance Officer, AqNoorLabs</p>
                    <p><strong>Email Address:</strong> <a href="mailto:aqnoorlabs@gmail.com" className="text-brand hover:underline font-semibold">aqnoorlabs@gmail.com</a></p>
                    <p><strong>Official Phone &amp; WhatsApp:</strong> <a href="https://wa.me/917387450332" className="text-brand hover:underline font-semibold">+91 7387450332</a></p>
                    <p><strong>Address:</strong> Maharashtra, India</p>
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
