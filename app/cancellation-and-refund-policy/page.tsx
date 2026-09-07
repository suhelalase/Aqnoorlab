import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | AqNoorLabs",
  description:
    "Cancellation and Refund Policy for Abuswaliha Bashir Shaikh (AqNoorLabs). Read about our cancellation procedures, 15-day reporting window for damaged items, and 3-5 days refund processing.",
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
              Customer Protection
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground tracking-tight mb-4">
              Cancellation &amp; Refund Policy
            </h1>
            <p className="text-sm md:text-base text-muted-foreground font-sans max-w-xl mx-auto">
              Last updated on 07-09-2026 23:49:11. Please read this policy carefully regarding order cancellations, returns, and refund disbursements.
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
                Immediate Cancellation
              </h3>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed">
                Cancellations are accepted if requested immediately after placing your order, before merchant shipping commences.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-border/60 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand font-bold text-lg mb-3">
                📦
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-1">
                15 Days Reporting Window
              </h3>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed">
                Report damaged, defective, or not-as-described items within 15 days of receipt for merchant inspection and resolution.
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
                Once approved by Abuswaliha Bashir Shaikh, your refund will be processed and credited within 3-5 working days.
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
                    1. Overview &amp; Policy Intent
                  </a>
                  <a href="#cancellations" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">
                    2. Order Cancellation Guidelines
                  </a>
                  <a href="#perishable" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">
                    3. Perishable Items &amp; Quality Checks
                  </a>
                  <a href="#damaged-defective" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">
                    4. Damaged, Defective, or Mismatched Goods (15 Days)
                  </a>
                  <a href="#warranty" className="block text-sm text-foreground/70 hover:text-brand font-medium transition-colors">
                    5. Manufacturer Warranty Products
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
                
                {/* Introduction / Overview */}
                <section id="overview" className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    1. Overview &amp; Policy Intent
                  </h2>
                  <p>
                    <strong>Abuswaliha Bashir Shaikh</strong> (operating as <strong>AqNoorLabs</strong>) believes in helping its customers as far as possible, and has therefore established a liberal cancellation policy.
                  </p>
                  <p>
                    We are dedicated to ensuring a transparent, fair, and reliable experience when acquiring software solutions, digital deliverables, or physical goods across our platforms. This policy outlines your entitlements, reporting timelines, and our refund execution steps.
                  </p>
                </section>

                {/* Section 2: Order Cancellations */}
                <section id="cancellations" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    2. Order Cancellation Guidelines
                  </h2>
                  <p>
                    Under our liberal cancellation policy:
                  </p>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>Immediate Request Requirement:</strong> Cancellations will be considered only if the request is made immediately after placing the order.
                    </li>
                    <li>
                      <strong>Merchant &amp; Vendor Dispatch:</strong> However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping or fulfilling them.
                    </li>
                  </ul>
                </section>

                {/* Section 3: Perishable Items */}
                <section id="perishable" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    3. Perishable Items &amp; Quality Exceptions
                  </h2>
                  <p>
                    Special conditions apply to perishable and consumable items:
                  </p>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>General Policy:</strong> <strong>Abuswaliha Bashir Shaikh</strong> does not accept cancellation requests for perishable items like flowers, eatables, etc.
                    </li>
                    <li>
                      <strong>Quality Grievance Exception:</strong> However, a refund or replacement can be granted if the customer establishes that the quality of the product delivered is not good or sub-standard upon receipt.
                    </li>
                  </ul>
                </section>

                {/* Section 4: Damaged, Defective, or Mismatched Goods */}
                <section id="damaged-defective" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    4. Damaged, Defective, or Mismatched Goods (15 Days Window)
                  </h2>
                  <p>
                    We uphold strict quality standards. In case an issue occurs during transit or fulfillment:
                  </p>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>Damaged or Defective Items:</strong> In case of receipt of damaged or defective items, please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end.
                    </li>
                    <li>
                      <strong>15-Day Reporting Window:</strong> This should be reported within <strong>15 Days</strong> of receipt of the products.
                    </li>
                    <li>
                      <strong>Discrepancy with Site Display or Expectations:</strong> In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within <strong>15 Days</strong> of receiving the product.
                    </li>
                    <li>
                      <strong>Team Evaluation:</strong> The Customer Service Team after looking into your complaint will take an appropriate decision regarding replacement, exchange, or refund.
                    </li>
                  </ul>
                </section>

                {/* Section 5: Manufacturer Warranties */}
                <section id="warranty" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    5. Manufacturer Warranty Products
                  </h2>
                  <p>
                    In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue directly to the authorized manufacturer or brand service center as per the warranty card / terms provided with the product.
                  </p>
                </section>

                {/* Section 6: Refund Processing Timeline */}
                <section id="refund-timeline" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    6. Refund Processing Timeline (3-5 Days)
                  </h2>
                  <div className="bg-muted/40 border border-border/60 rounded-2xl p-6 space-y-3">
                    <p className="font-semibold text-foreground text-base">
                      Processing Turnaround Time:
                    </p>
                    <p>
                      In case of any Refunds approved by the <strong>Abuswaliha Bashir Shaikh</strong>, it will take <strong>3-5 Days</strong> for the refund to be processed and credited back to the end customer via the original mode of payment.
                    </p>
                  </div>
                  <p className="text-sm text-foreground/70">
                    *Note: Depending on your issuing bank or card provider, it may take 1-2 additional banking business days for the credit to reflect in your statement.
                  </p>
                </section>

                {/* Section 7: Support & Contact */}
                <section id="support" className="space-y-4 pt-6 border-t border-border/40">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    7. Customer Support &amp; Assistance
                  </h2>
                  <p>
                    To initiate a cancellation, file a complaint for a damaged product, or check your refund status, please reach out to our Customer Service team with your Order ID and photographic evidence (if applicable):
                  </p>
                  <div className="bg-muted/40 border border-border/50 rounded-2xl p-6 space-y-2 font-sans text-sm mt-4">
                    <p><strong>Merchant Entity:</strong> Abuswaliha Bashir Shaikh (AqNoorLabs)</p>
                    <p><strong>Customer Support Email:</strong> <a href="mailto:support@aqnoorlabs.online" className="text-brand hover:underline font-semibold">support@aqnoorlabs.online</a></p>
                    <p><strong>General Inquiries:</strong> <a href="mailto:hi@aqnoorlabs.online" className="text-brand hover:underline font-semibold">hi@aqnoorlabs.online</a></p>
                    <p><strong>Phone &amp; WhatsApp:</strong> <a href="https://wa.me/917387450332" className="text-brand hover:underline font-semibold">+91 7387450332</a></p>
                    <p><strong>Operating Hours:</strong> Monday to Saturday (10:00 AM - 7:00 PM IST)</p>
                    <p><strong>Location:</strong> Sangli, Maharashtra, India</p>
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
