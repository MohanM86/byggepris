"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp } from "@/components/ui/animations";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({
  items,
  title = "Ofte stilte spørsmål",
  subtitle,
}: {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-10">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-3">
            {title}
          </h2>
          {subtitle && <p className="text-text-secondary text-lg">{subtitle}</p>}
        </FadeInUp>

        <div className="space-y-3">
          {items.map((item, i) => (
            <FadeInUp key={i} delay={i * 0.05}>
              <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left group"
                >
                  <span className="font-display font-semibold text-text-primary group-hover:text-accent-yellow transition-colors pr-4">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-bg-tertiary flex items-center justify-center text-text-tertiary"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 1v10M1 6h10" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 pb-5 text-text-secondary text-sm leading-relaxed border-t border-surface-border pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
