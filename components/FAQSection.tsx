"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useId, useState } from "react";

const faqs = [
  {
    question: "How do I get started with AqNoorLabs?",
    answer:
      "Fill out our contact form or book a free call. We'll understand what you need, share a clear plan with cost and timeline, and get started once you're comfortable.",
  },
  {
    question: "Do you work with businesses outside metro cities?",
    answer:
      "Yes, absolutely. We work with founders, SMEs, D2C brands, and local businesses across India — whether you're in Bangalore, Mumbai, Delhi-NCR, or Tier-2 and Tier-3 cities.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We follow transparent, milestone-based pricing. Typically 30% advance to start, with remaining payments tied directly to clear project milestones so you only pay as work is delivered.",
  },
  {
    question: "Will my app slow down or break as my business grows?",
    answer:
      "No. We plan for scale from day one using optimized databases, fast hosting, and caching so your app handles growth smoothly without crashing or slowing down.",
  },
  {
    question: "What is your approach to design and user experience?",
    answer:
      "We focus on creating fast, intuitive, and modern interfaces that your customers actually enjoy using, ensuring high conversion rates and effortless navigation across desktop and mobile.",
  },
  {
    question: "Do you provide post-launch maintenance and support?",
    answer:
      "Yes. We offer ongoing maintenance, hosting setup, performance monitoring, and updates so your software continues running reliably long after launch.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div id="faq" className="w-full px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-4 inline-flex rounded-full bg-primary/10 p-3"
            aria-hidden="true"
          >
            <HelpCircle
              className="h-8 w-8 text-primary"
              aria-hidden="true"
            />
          </motion.div>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg md:text-xl font-medium">
            Everything you need to know about working with us, pricing, and timelines
          </p>
        </motion.div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const questionId = `${baseId}-question-${index}`;
            const answerId = `${baseId}-answer-${index}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-card/60 backdrop-blur border-border/50 shadow-md">
                  <CardHeader className="p-6 md:p-8">
                    <motion.button
                      type="button"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="flex w-full items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-primary/70 cursor-pointer text-foreground"
                      whileHover={{ x: 4 }}
                      aria-expanded={openIndex === index}
                      aria-controls={answerId}
                      id={questionId}
                    >
                      <h3 className="text-xl md:text-2xl font-bold pr-4">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        aria-hidden="true"
                      >
                        <ChevronDown className="h-6 w-6 text-muted-foreground" />
                      </motion.div>
                    </motion.button>
                  </CardHeader>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        role="region"
                        id={answerId}
                        aria-labelledby={questionId}
                      >
                        <CardContent className="pt-0 px-6 md:px-8 pb-6 md:pb-8">
                          <p className="text-foreground/80 text-base md:text-lg leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default FAQSection;
