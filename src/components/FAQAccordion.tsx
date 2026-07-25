"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MotionReveal from "./MotionReveal";
import { cn } from "@/lib/utils";

interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

interface FAQAccordionProps {
  readonly items: ReadonlyArray<FAQItem>;
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <MotionReveal key={i} y={10} delay={i * 0.03}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              id={`faq-trigger-${i}`}
              className={cn(
                "w-full flex items-center justify-between gap-4 rounded-xl border p-5 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2",
                isOpen
                  ? "border-violet-200 bg-violet-50/60 shadow-sm"
                  : "border-violet-100/50 bg-white hover:border-violet-200 hover:shadow-sm"
              )}
            >
              <span className="text-sm sm:text-base font-medium text-foreground pr-4">
                {item.question}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "h-5 w-5 shrink-0 text-muted transition-transform duration-300",
                  isOpen && "rotate-180 text-violet-600"
                )}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 py-4 text-sm text-muted leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </MotionReveal>
        );
      })}
    </div>
  );
}
