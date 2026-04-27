"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import SectionLink from "./SectionLink";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-11 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 section-gradient-1" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-4 py-1.5 text-sm font-medium text-amber-700 mb-4">
            Trustpilot Average 4.9/5
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            IPTV Reviews From{" "}
            <span className="gradient-text">UK Customers</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted">
            Read what real UK users say about our service. Every{" "}
            <SectionLink href="/#testimonials" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              IPTV review
            </SectionLink>{" "}
            comes from a verified account.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl border border-violet-100/50 bg-white p-6 transition-all duration-500 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/40 premium-card"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-violet-100 transition-colors group-hover:text-violet-200" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
                {Array.from({ length: 5 - testimonial.rating }).map((_, j) => (
                  <Star
                    key={`empty-${j}`}
                    className="h-4 w-4 text-gray-200"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 text-sm font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted">
                    <MapPin className="h-3 w-3" />
                    {testimonial.location} · Subscriber since {testimonial.since}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See all reviews CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
          className="mt-12 text-center"
        >
          <SectionLink
            href="/#testimonials"
            className="group inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-white px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-violet-300 hover:bg-violet-50 shadow-sm"
          >
            Read More Reviews
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </SectionLink>
        </motion.div>
      </div>
    </section>
  );
}
