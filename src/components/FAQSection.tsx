import Link from "next/link";
import SectionLink from "./SectionLink";
import MotionReveal from "./MotionReveal";
import FAQAccordion from "./FAQAccordion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-11 lg:py-16">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center mb-16">
          <span className="inline-block rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-sm font-medium text-violet-700 mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            IPTV Providers UK &mdash; Frequently{" "}
            <span className="gradient-text">Asked Questions</span>
          </h2>
          <p className="text-lg text-muted">
            Essential answers to{" "}
            <Link href="/blog" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              review
            </Link>{" "}
            before choosing an{" "}
            <SectionLink href="/#pricing" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              IPTV subscription
            </SectionLink>{" "}from the growing list of UK IPTV providers.
          </p>
        </MotionReveal>

        <FAQAccordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
