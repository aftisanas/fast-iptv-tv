"use client";

import { motion } from "framer-motion";
import { Mail, Clock, MapPin, Headphones, Star, HeadphonesIcon } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For detailed enquiries and account-related questions.",
    detail: CONTACT_EMAIL,
    action: `mailto:${CONTACT_EMAIL}`,
    badge: "24/7",
    badgeColor: "bg-primary/10 text-primary border border-primary/10",
  },
];

export default function ContactContent() {
  return (
    <div>
      {/* ── Premium Hero Section ── */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24">
        {/* Deep premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0a3e] to-[#0c1445]" />

        {/* Aurora blobs */}
        <div
          className="aurora-blob w-[600px] h-[600px] bg-purple-600/20 -top-32 -left-32"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="aurora-blob w-[450px] h-[450px] bg-blue-500/15 top-1/4 right-[-8%]"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="aurora-blob w-[400px] h-[400px] bg-cyan-500/15 bottom-[-15%] left-1/3"
          style={{ animationDelay: "8s" }}
        />
        <div
          className="aurora-blob w-[300px] h-[300px] bg-fuchsia-500/12 top-[30%] left-[55%]"
          style={{ animationDelay: "6s" }}
        />

        {/* Radial overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.18),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.07),transparent_60%)]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-[20%] left-[12%] w-2 h-2 rounded-full bg-purple-400/50 animate-float" />
        <div className="absolute top-[40%] right-[10%] w-1.5 h-1.5 rounded-full bg-cyan-400/40 animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-[20%] left-[25%] w-1 h-1 rounded-full bg-blue-400/50 animate-float" style={{ animationDelay: "5s" }} />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-white/[0.07] backdrop-blur-md px-5 py-2.5 text-sm text-purple-200 mb-8"
          >
            <HeadphonesIcon className="h-4 w-4 text-cyan-400" />
            <span className="font-medium">Dedicated UK Support — 24/7</span>
            <span className="flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-white">Contact The IPTV Providers UK</span>{" "}
            <span className="gradient-text-hero">Support Team</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-300/90 leading-relaxed"
          >
            The IPTV Providers UK support team answers live chat, email and WhatsApp 24/7 — a named British crew with deep knowledge of the UK market. Average first response: under four minutes.
          </motion.p>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafbff] via-[#fafbff]/80 to-transparent" />
      </section>

      {/* Contact Methods */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.title}
                href={method.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="absolute top-4 right-4">
                  <span className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-medium ${method.badgeColor}`}>
                    {method.badge}
                  </span>
                </div>

                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 transition-all group-hover:from-primary/15 group-hover:to-accent/10">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">{method.title}</h3>
                <p className="text-sm text-muted mb-3">{method.description}</p>
                <p className="text-sm font-medium text-primary">{method.detail}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Info */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">IPTV Providers UK Support Hours</h3>
              </div>
              <div className="space-y-4">
                {[
                  { dept: "Customer Support", hours: "24/7 — Always Available" },
                  { dept: "Technical Support", hours: "24/7 — Always Available" },
                  { dept: "Sales Department", hours: "Mon–Fri, 9am–6pm GMT" },
                  { dept: "Billing Enquiries", hours: "Mon–Fri, 9am–6pm GMT" },
                ].map((item) => (
                  <div key={item.dept} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <span className="text-sm text-muted">{item.dept}</span>
                    <span className="text-sm font-medium text-foreground">{item.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <Headphones className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Where IPTV Providers UK Can Help</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Device setup and installation guidance",
                  "Account and subscription management",
                  "Technical troubleshooting",
                  "Channel and content enquiries",
                  "Billing and payment support",
                  "General enquiries and feedback",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-muted">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-muted">
                <MapPin className="h-3 w-3" />
                <span>Based in London, United Kingdom</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
