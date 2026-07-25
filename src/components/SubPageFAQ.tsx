"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubPageFAQItem {
  readonly question: string;
  readonly answer: string;
}

interface SubPageFAQProps {
  readonly items: ReadonlyArray<SubPageFAQItem>;
}

export default function SubPageFAQ({ items }: SubPageFAQProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openFaq === i;
        return (
          <div key={`${item.question}-${i}`}>
            <button
              type="button"
              onClick={() => setOpenFaq(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`subpage-faq-panel-${i}`}
              id={`subpage-faq-trigger-${i}`}
              className={cn(
                "w-full flex items-center justify-between gap-4 rounded-xl border p-5 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2",
                isOpen
                  ? "border-violet-200 bg-violet-50/60 shadow-sm"
                  : "border-violet-100/50 bg-white hover:border-violet-200 hover:shadow-sm",
              )}
            >
              <span className="text-sm sm:text-base font-medium text-foreground pr-4">
                {item.question}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "h-5 w-5 shrink-0 text-muted transition-transform duration-300",
                  isOpen && "rotate-180 text-violet-600",
                )}
              />
            </button>
            <motion.div
              id={`subpage-faq-panel-${i}`}
              role="region"
              aria-labelledby={`subpage-faq-trigger-${i}`}
              aria-hidden={!isOpen}
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 py-4 text-sm text-muted leading-relaxed">
                {item.answer}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
