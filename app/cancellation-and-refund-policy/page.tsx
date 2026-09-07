import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | AqNoorLabs",
  description:
    "Cancellation and Refund Policy for software products, digital licenses, and development services by Abuswaliha Bashir Shaikh (AqNoorLabs).",
  alternates: {
    canonical: "https://aqnoorlabs.online/cancellation-and-refund-policy",
  },
};

export default function CancellationAndRefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-background pt-32 pb-24">
        <div className="max-w-[1280px] w-full md:w-[90%] mx-auto px-5 md:px-0">
          {/* Header Banner */}
          <div className="text-center mb-10 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand/5 blur-3xl rounded-full -z-10" />
            <span className="text-xs uppercase tracking-widest text-brand font-bold bg-brand/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Software &amp; Digital Services
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground tracking-tight mb-4">
              Cancellation &amp; Refund Policy
            </h1>
            <p className="text-sm md:text-base text-muted-foreground font-sans max-w-xl mx-auto">
              Last updated on 07-09-2026 23:49:11. Please review our liberal cancellation and refund terms for software products, custom development, and digital solutions.
            </p>
          </div>

          {/* Quick Legal Switcher Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-14">
            <Link
              href="/terms-and-conditions"
              className="px-5 py-2.5 rounded-xl text-xs md:text-sm font-sans font-semibold uppercase tracking-wider transition-all duration-200 border border-border/60 bg-muted/30 text-foreground/75 hover:bg-brand hover:text-white hover:border-brand shadow-sm"
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
              className="px-5 py-2.5 rounded-xl text-xs md:text-sm font-sans font-semibold uppercase tracking-wider transition-all duration-200 bg-brand text-white border border-brand shadow-md"
            >
              Cancellation &amp; Refund
            </Link>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-panel p-6 rounded-2xl border border-border/60 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand font-bold text-lg mb-3">
                ⚡
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-1">
                Pre-Sprint Cancellation
              </h3>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed">
                Full cancellation is accommodated if requested immediately after order placement, prior to developer sprint allocation or license provisioning.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-border/60 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand font-bold text-lg mb-3">
                💻
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-1">
                15 Days Defect Review
              </h3>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed">
                Report functional bugs, missing features, or scope discrepancies within 15 days of build delivery for priority remediation or refund.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-border/60 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand font-bold text-lg mb-3">
                💳
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-1">
                3-5 Days Refund Processing
              </h3>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed">
                Once approved by Abuswaliha Bashir Shaikh, your refund is credited back to your original payment method within 3-5 working days.
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
                <nav className="space-y-3">
                  <a href="#overview" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">
                    1. Overview &amp; Software Scope
                  </a>
                  <a href="#cancellations" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">
                    2. Service &amp; Project Cancellation
                  </a>
                  <a href="#digital-products" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">
                    3. Digital Deliverables &amp; Licenses
                  </a>
                  <a href="#defects-quality" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">
                    4. Defect Reporting &amp; Scope Review (15 Days)
                  </a>
                  <a href="#third-party-services" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">
                    5. Third-Party APIs &amp; Cloud Dependencies
                  </a>
                  <a href="#refund-timeline" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">
                    6. Refund Processing Timeline (3-5 Days)
                  </a>
                  <a href="#support" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">
                    7. Customer Support &amp; Assistance
                  </a>
                </nav>
              </div>
            </div>

            {/* Document Content */}
            <div className="lg:col-span-8 space-y-12">
              <div className="glass-panel rounded-2xl md:rounded-3xl p-4 sm:p-8 md:p-12 shadow-xl border border-border/40 font-sans text-foreground/80 leading-relaxed space-y-10">
                
                {/* Section 1: Overview */}
                <section id="overview" className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    1. Overview &amp; Software Scope
                  </h2>
                  <p>
                    <strong>Abuswaliha Bashir Shaikh</strong> (operating as <strong>AqNoorLabs</strong>) believes in helping its customers as far as possible, and has therefore established a fair and liberal cancellation and refund policy specifically tailored for our software products, custom development, web applications, mobile applications, AI automation tools, and technology consulting services.
                  </p>
                  <p>
                    Because software involves digital assets, engineering hours, and cloud provisioning, this policy clearly sets out the terms under which orders may be cancelled, modifications requested, or refunds granted.
                  </p>
                </section>

                {/* Section 2: Service & Project Cancellation */}
                <section id="cancellations" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    2. Service &amp; Project Cancellation Guidelines
                  </h2>
                  <p>
                    Under our liberal cancellation policy:
                  </p>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>Immediate Cancellation Window:</strong> Cancellations will be considered only if the request is made immediately after placing the order or initiating payment.
                    </li>
                    <li>
                      <strong>Commencement of Engineering Sprints:</strong> Cancellation requests may not be entertained if the project scope has already been finalized, developer sprints have been assigned, cloud staging environments have been provisioned, or custom coding and architecture work has officially commenced.
                    </li>
                    <li>
                      <strong>Milestone Engagements:</strong> For milestone-based custom projects, if a cancellation request is submitted during an active milestone, work will cease immediately. The client will be invoiced only for the work hours or deliverables completed up to the date of cancellation, and any unutilized advance for future milestones will be refunded.
                    </li>
                  </ul>
                </section>

                {/* Section 3: Digital Deliverables & Licenses */}
                <section id="digital-products" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    3. Digital Deliverables, Source Code &amp; Software Licenses
                  </h2>
                  <p>
                    Due to the irrevocable nature of digital intellectual property:
                  </p>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>Delivered Digital Assets:</strong> <strong>Abuswaliha Bashir Shaikh</strong> does not accept cancellation or unconditional refund requests once full source code repositories, software license activation keys, or production database credentials have been transferred to the client.
                    </li>
                    <li>
                      <strong>Quality &amp; Defect Exceptions:</strong> However, a refund, code replacement, or warranty patch will be granted if the customer establishes that the quality of the software delivered does not meet the agreed project specification or suffers from critical, unresolvable technical defects.
                    </li>
                  </ul>
                </section>

                {/* Section 4: Defect Reporting & Scope Review */}
                <section id="defects-quality" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    4. Defect Reporting, Discrepancies &amp; Review (15 Days Window)
                  </h2>
                  <p>
                    We guarantee the functionality of all deliverables against the agreed Statement of Work (SOW):
                  </p>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>Defective or Broken Builds:</strong> In case of receipt of software builds with critical bugs, non-functional modules, or broken workflows, please report the issue directly to our Customer Support / Technical Team.
                    </li>
                    <li>
                      <strong>15-Day Reporting Window:</strong> Discrepancies must be reported within <strong>15 Days</strong> of delivery of the staging build, release milestone, or software handover.
                    </li>
                    <li>
                      <strong>Discrepancy with Scope or Demo:</strong> In case you feel that the software delivered is not as demonstrated on the staging link or as agreed per project specifications, you must bring it to the notice of our customer service within <strong>15 Days</strong> of receiving the deliverable.
                    </li>
                    <li>
                      <strong>Evaluation &amp; Remediation:</strong> Our technical team will inspect the issue within 48 business hours. We will first offer priority bug fixing, code refactoring, or milestone adjustments at zero extra cost. If the issue cannot be resolved or the agreed scope cannot be fulfilled, our team will process an appropriate refund decision.
                    </li>
                  </ul>
                </section>

                {/* Section 5: Third-Party Dependencies */}
                <section id="third-party-services" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    5. Third-Party APIs, Hosting &amp; External Services
                  </h2>
                  <p>
                    In case of complaints regarding third-party software, external cloud hosting (e.g. AWS, Vercel, Google Cloud), third-party APIs (e.g. OpenAI, Meta WhatsApp Business API, Razorpay payment gateway), or domain registrars:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Please refer the issue directly to the third-party provider, as AqNoorLabs does not control external API downtime, third-party pricing changes, or account suspensions imposed by third-party platforms.
                    </li>
                    <li>
                      Subscription or usage fees paid directly to third parties are strictly non-refundable by AqNoorLabs.
                    </li>
                  </ul>
                </section>

                {/* Section 6: Refund Processing Timeline */}
                <section id="refund-timeline" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    6. Refund Processing Timeline (3-5 Days)
                  </h2>
                  <div className="bg-muted/40 border border-border/60 rounded-2xl p-6 space-y-3">
                    <p className="font-semibold text-foreground text-base">
                      Turnaround Time &amp; Disbursement:
                    </p>
                    <p>
                      In case of any Refunds approved by <strong>Abuswaliha Bashir Shaikh</strong>, it will take <strong>3-5 Days</strong> for the refund to be processed and credited back to the end customer via the original mode of payment (bank transfer, UPI, or credit/debit card).
                    </p>
                  </div>
                  <p className="text-sm text-foreground/70">
                    *Note: Depending on your bank&apos;s settlement cycle or card network clearing rules, it may take 1-2 additional banking business days for the credit to reflect in your bank statement.
                  </p>
                </section>

                {/* Section 7: Support & Contact */}
                <section id="support" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    7. Customer Support &amp; Dispute Resolution
                  </h2>
                  <p>
                    To request a project cancellation, report a technical software defect, or inquire about an existing refund status, please contact our support team with your Project / Invoice ID:
                  </p>
                  <div className="bg-muted/40 border border-border/50 rounded-2xl p-6 space-y-2 font-sans text-sm mt-4">
                    <p><strong>Merchant / Entity Name:</strong> Abuswaliha Bashir Shaikh (AqNoorLabs)</p>
                    <p><strong>Customer Support Email:</strong> <a href="mailto:support@aqnoorlabs.online" className="text-brand hover:underline font-semibold">support@aqnoorlabs.online</a></p>
                    <p><strong>General Inquiries:</strong> <a href="mailto:hi@aqnoorlabs.online" className="text-brand hover:underline font-semibold">hi@aqnoorlabs.online</a></p>
                    <p><strong>Official Phone &amp; WhatsApp:</strong> <a href="https://wa.me/917387450332" className="text-brand hover:underline font-semibold">+91 7387450332</a></p>
                    <p><strong>Business Hours:</strong> Monday to Saturday (10:00 AM – 7:00 PM IST)</p>
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
