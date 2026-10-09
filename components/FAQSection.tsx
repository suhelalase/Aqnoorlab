"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { useId, useState } from "react";

const faqs = [
  {
    question: "How do I get started with AqNoorLabs?",
    answer:
      "Fill out our contact form or send us a WhatsApp message. We will schedule a technical call to outline your exact requirements, provide a detailed scope of work, transparent cost structure, and milestone schedule.",
  },
  {
    question: "Do you work with businesses outside metro cities?",
    answer:
      "Yes, absolutely. We partner with founders, enterprise SMEs, D2C brands, and regional companies across Tier-1, Tier-2, and Tier-3 cities throughout India.",
  },
  {
    question: "What are your payment terms and billing milestones?",
    answer:
      "We follow transparent, milestone-based pricing. Typically 30% advance deposit to commence development, with subsequent payments tied strictly to verified project milestones.",
  },
  {
    question: "Will my application scale reliably as user volume grows?",
    answer:
      "Yes. We design for enterprise scale from day one using optimized database queries, connection pooling, edge caching, and scalable cloud hosting infrastructure.",
  },
  {
    question: "What is your approach to system architecture and user interface design?",
    answer:
      "We build fast, intuitive, highly structured web and desktop interfaces focused on operational efficiency, high speed, clear navigation, and responsive cross-platform compatibility.",
  },
  {
    question: "Do you provide long-term maintenance and technical SLA support?",
    answer:
      "Yes. We offer ongoing technical maintenance, cloud infrastructure management, security patching, and system updates to ensure your software runs reliably.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div id="faq" className="w-full px-5 py-16 md:py-24 bg-[#f8fafc] border-b border-slate-300">
      <div className="mx-auto w-full md:w-[90%] max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded border border-slate-300 bg-white px-3 py-1 font-mono text-xs font-bold uppercase text-slate-700 shadow-sm">
            <HelpCircle className="h-3.5 w-3.5 text-[#0052cc]" />
            <span>[ FREQUENTLY ASKED QUESTIONS ]</span>
          </div>
          <h2 className="mb-3 text-3xl font-extrabold sm:text-4xl md:text-5xl text-slate-900 font-display">
            Client &amp; Technical FAQs
          </h2>
          <p className="text-sm text-slate-600 sm:text-base md:text-lg font-medium max-w-xl mx-auto">
            Clear answers regarding engagement terms, technology stacks, timelines, and milestone delivery.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const questionId = `${baseId}-question-${index}`;
            const answerId = `${baseId}-answer-${index}`;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="enterprise-card overflow-hidden bg-white border border-slate-200 rounded-xl shadow-xs"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-5 md:p-6 text-left focus:outline-none focus:bg-blue-50/40 cursor-pointer text-slate-900"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  id={questionId}
                >
                  <h3 className="text-base md:text-lg font-bold pr-4 font-display text-slate-900">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0052cc]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    aria-labelledby={questionId}
                    className="px-5 md:px-6 pb-6 pt-1 border-t border-slate-100 bg-slate-50/50"
                  >
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQSection;

