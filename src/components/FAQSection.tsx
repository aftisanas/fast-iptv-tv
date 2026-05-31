"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import SectionLink from "./SectionLink";
import { FAQ_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-11 lg:py-16">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-sm font-medium text-violet-700 mb-4">
            Fast IPTV UK · Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Fast IPTV UK &mdash; Frequently{" "}
            <span className="gradient-text">Asked Questions</span>
          </h2>
          <p className="text-lg text-muted">
            Everything to{" "}
            <Link href="/blog" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              review
            </Link>{" "}
            before starting your{" "}
            <SectionLink href="/#pricing" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              fast IPTV subscription
            </SectionLink>. Already streaming and seeing playback issues? See our{" "}
            <Link href="/iptv-buffering-fix" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              IPTV buffering fix
            </Link>{" "}
            guide.
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
                transition={{ delay: i * 0.03 }}
              >
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

                {/* Panel is always rendered (kept in initial HTML for SEO —
                    full Q&A text and the internal comparison link must be crawlable);
                    collapsed visually via animated height. */}
                <motion.div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
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
                    {item.question === "How does fast-iptv.tv compare to traditional pay-TV?" && (
                      <>
                        {" "}
                        <Link
                          href="/blog/iptv-vs-traditional-tv"
                          className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
                        >
                          see our full IPTV vs traditional TV comparison
                        </Link>
                        .
                      </>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
