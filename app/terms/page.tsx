import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientCursorFollower from "@/components/ClientCursorFollower";

export const metadata: Metadata = {
  title: "Terms and Conditions | AqNoorLabs",
  description: "Terms and Conditions of Service for AqNoorLabs. Read about our freelance and agency contracting, payment milestones, invoicing, IP transfer, and compliance under Indian laws.",
  alternates: {
    canonical: "https://aqnoorlabs.online/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <ClientCursorFollower />
      <Navbar />
      <main className="flex-1 w-full bg-background pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header Banner */}
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand/5 blur-3xl rounded-full -z-10" />
            <span className="text-xs uppercase tracking-widest text-brand font-bold bg-brand/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Legal Agreement
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground tracking-tight mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm md:text-base text-muted-foreground font-sans max-w-xl mx-auto">
              Last updated: July 27, 2026. Please read these terms carefully before starting a project with us.
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
                  <a href="#services" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">1. Scope of Services</a>
                  <a href="#contracts" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">2. Proposals &amp; Contracts</a>
                  <a href="#payments" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">3. Invoicing &amp; Payment Milestones</a>
                  <a href="#tax-compliance" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">4. Indian Tax Compliance (GST &amp; TDS)</a>
                  <a href="#intellectual-property" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">5. Intellectual Property (IP) Rights</a>
                  <a href="#dependencies" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">6. Client Responsibilities &amp; Delays</a>
                  <a href="#termination" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">7. Termination &amp; Cancellation</a>
                  <a href="#governing-law" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">8. Governing Law &amp; Jurisdiction</a>
                </nav>
              </div>
            </div>

            {/* Document Content */}
            <div className="lg:col-span-8 space-y-12">
              <div className="glass-panel rounded-3xl p-8 md:p-12 shadow-xl border border-border/40 font-sans text-foreground/80 leading-relaxed space-y-10">
                
                {/* Introduction */}
                <section className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    Introduction
                  </h2>
                  <p>
                    Welcome to <strong>AqNoorLabs</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By hiring us for software development, website creation, mobile app design, AI automation, or consulting services, you (&ldquo;Client&rdquo;, &ldquo;you&rdquo;, or &ldquo;your&rdquo;) agree to be bound by the following Terms and Conditions.
                  </p>
                  <p>
                    These terms govern all freelancing projects, contractual engagements, invoices, and deliverables provided by AqNoorLabs, and form a legally binding agreement under the <strong>Indian Contract Act, 1872</strong>.
                  </p>
                </section>

                {/* Section 1 */}
                <section id="services" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    1. Scope of Services
                  </h2>
                  <p>
                    AqNoorLabs provides custom software engineering, website development, application programming interface (API) integrations, database designs, AI automation systems, and maintenance support.
                  </p>
                  <p>
                    The specific scope, requirements, and deliverables for each project will be outlined in a separate <strong>Project Proposal, Statement of Work (SOW), or Freelance Agreement</strong>. Any work requested outside of this predefined scope will be treated as a change request and billed separately at our hourly rate or as a separate milestone.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="contracts" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    2. Proposals &amp; Contracts
                  </h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Execution:</strong> A project officially commences only after both parties have signed a written contract or mutually agreed on a Statement of Work via email or digital signature, and the advance payment is received.
                    </li>
                    <li>
                      <strong>Validity:</strong> Project quotes and proposals issued by AqNoorLabs are valid for 15 calendar days from the date of issuance, after which they are subject to review or revision.
                    </li>
                  </ul>
                </section>

                {/* Section 3 */}
                <section id="payments" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    3. Invoicing &amp; Payment Milestones
                  </h2>
                  <p>
                    To ensure transparency and protect both parties, we operate strictly on a <strong>milestone-based payment structure</strong>:
                  </p>
                  <div className="overflow-x-auto my-4 rounded-xl border border-border/50">
                    <table className="min-w-full divide-y divide-border/50 text-sm">
                      <thead className="bg-muted/50 font-display font-bold text-foreground">
                        <tr>
                          <th className="px-4 py-3 text-left">Milestone Phase</th>
                          <th className="px-4 py-3 text-left">Invoice Percentage</th>
                          <th className="px-4 py-3 text-left">Release Condition</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-foreground">1. Kickoff Advance</td>
                          <td className="px-4 py-3">30% of total budget</td>
                          <td className="px-4 py-3">Due upfront before any coding/development begins.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-foreground">2. Development / Mid-way</td>
                          <td className="px-4 py-3">40% of total budget</td>
                          <td className="px-4 py-3">Due upon demo of prototype or core features.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-foreground">3. Final Delivery &amp; Handover</td>
                          <td className="px-4 py-3">30% of total budget</td>
                          <td className="px-4 py-3">Due prior to production deployment and source code transfer.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Advance Payments:</strong> The 30% kickoff advance is strictly non-refundable once development or research has commenced.
                    </li>
                    <li>
                      <strong>Invoice Due Date:</strong> Invoices raised upon completion of a milestone must be settled within <strong>7 business days</strong>.
                    </li>
                    <li>
                      <strong>Late Fee:</strong> Delayed payments beyond 10 days will attract a late fee of 1.5% per month on the outstanding amount.
                    </li>
                    <li>
                      <strong>Work Suspension:</strong> AqNoorLabs reserves the right to suspend development, lock preview staging links, or pause servers if milestone payments are delayed.
                    </li>
                  </ul>
                </section>

                {/* Section 4 */}
                <section id="tax-compliance" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    4. Indian Tax Compliance (GST &amp; TDS)
                  </h2>
                  <p>
                    As an Indian software agency, we comply with the rules set by the Ministry of Finance:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>GST (Goods and Services Tax):</strong> Our invoices will explicitly list the applicable GST rate (typically 18% for Software Development/IT services SAC code 998314) where applicable. Clients registered under GSTIN can claim Input Tax Credit (ITC) as per official rules.
                    </li>
                    <li>
                      <strong>Tax Deducted at Source (TDS):</strong> For corporate clients in India deducting TDS under Section 194J (Professional/Technical Services) or Section 194C (Contractors) of the Income Tax Act, 1961, the TDS certificate (Form 16A) must be provided in a timely manner. The client is obligated to pay the net amount after deducting TDS, and deposit the deducted TDS with the Income Tax Department.
                    </li>
                  </ul>
                </section>

                {/* Section 5 */}
                <section id="intellectual-property" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    5. Intellectual Property (IP) Rights
                  </h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>IP Transfer:</strong> All ownership, copyright, intellectual property rights, and source code of the custom software developed will be transferred to you **ONLY after full clearance of all invoices** related to the project. Until final payment is made, all proprietary rights remain with AqNoorLabs.
                    </li>
                    <li>
                      <strong>Open Source Components:</strong> Libraries, frameworks, or templates utilized in the project (e.g. React, Next.js, Tailwind CSS) are governed by their respective open-source licenses (MIT, Apache, etc.).
                    </li>
                    <li>
                      <strong>Portfolio Rights:</strong> Unless otherwise negotiated in writing via a strict Non-Disclosure Agreement (NDA), AqNoorLabs reserves the right to display screenshots, case studies, and links of the completed project in our public portfolio and marketing channels.
                    </li>
                  </ul>
                </section>

                {/* Section 6 */}
                <section id="dependencies" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    6. Client Responsibilities &amp; Delays
                  </h2>
                  <p>
                    Successful delivery requires timely cooperation. The Client agrees to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Provide all necessary text assets, brand logos, high-resolution media, access credentials (hosting, domains, API tokens), and feedback within 3 business days of request.
                    </li>
                    <li>
                      Pay third-party service fees (such as cloud hosting, Vercel/AWS fees, domain purchases, API subscription plans) directly.
                    </li>
                    <li>
                      Acknowledge that any delay in asset delivery or feedback will automatically extend the project timeline.
                    </li>
                  </ul>
                </section>

                {/* Section 7 */}
                <section id="termination" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    7. Termination &amp; Cancellation
                  </h2>
                  <p>
                    Either party may terminate the project by giving a **7-day written notice** if the other party breaches any material term of this agreement.
                  </p>
                  <p>
                    Upon termination, the Client will immediately be invoiced for all work hours or milestones completed up to the date of termination, and any unpaid balance must be cleared within 5 business days. Once settled, completed materials up to that stage will be shared with the Client.
                  </p>
                </section>

                {/* Section 8 */}
                <section id="governing-law" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    8. Governing Law &amp; Jurisdiction
                  </h2>
                  <p>
                    These terms are governed by and construed in accordance with the laws of the Republic of India.
                  </p>
                  <p>
                    Any dispute, controversy, or claim arising out of or relating to these terms, including their validity, breach, or termination, shall be resolved through mutual consultation first. If unresolved, disputes shall be subject to the exclusive jurisdiction of the courts of <strong>Sangli, Maharashtra, India</strong>.
                  </p>
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
