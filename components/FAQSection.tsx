"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useId, useState } from "react";

const faqs = [
  {
    question: "How do I get started with AqNoorLabs?",
    answer:
      "Simply reach out to us using our contact form or book a free consultation! We will analyze your system requirements, draft detailed architectural design options, and guide your launch strategy.",
  },
  {
    question: "Do you focus on system designs and scalability?",
    answer:
      "Yes, scalability is at the core of what we build. We specialize in system design topics: microservices architectures, data caching layers (using Redis or Memcached), optimized relational/non-relational database queries, and secure cloud hosting infrastructure that automatically scales with your load.",
  },
  {
    question: "What is your approach to caching and databases?",
    answer:
      "We design cached queries and response layers to reduce database latency by up to 90%. By choosing appropriate data storage configurations (PostgreSQL, MongoDB, etc.) and tuning indexes, we ensure your system behaves reliably even during heavy concurrent spikes.",
  },
  {
    question: "Do you support premium UI/UX design?",
    answer:
      "Absolutely. A high-performance backend needs an equally outstanding interface. We craft beautiful, fluid, responsive user designs utilizing modern front-end technologies (Next.js, Framer Motion, and Tailwind CSS) to deliver micro-interactions that delight visitors.",
  },
  {
    question: "Which hosting platforms do you use?",
    answer:
      "Depending on your requirements, we host and manage deployments on AWS, Vercel, Docker containers, and Cloudflare CDN layers. We configure robust CI/CD deployment pipelines that build and test your codebase automatically.",
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
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base md:text-lg">
            Everything you need to know about our engineering expertise and methodology
          </p>
        </motion.div>

        <div className="space-y-4">
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
                <Card className="overflow-hidden bg-card/60 backdrop-blur border-border/50">
                  <CardHeader className="p-6">
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
                      <span className="text-lg font-semibold pr-4">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        aria-hidden="true"
                      >
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
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
                        <CardContent className="pt-0 px-6 pb-6">
                          <p className="text-muted-foreground leading-relaxed">
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
