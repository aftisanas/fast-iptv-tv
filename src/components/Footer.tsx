"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { NAV_LINKS, LEGAL_LINKS, GUIDES_LINKS, SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";
import SectionLink from "@/components/SectionLink";

export default function Footer() {
  return (
    <footer className="relative border-t border-violet-100/50 bg-gradient-to-b from-[#fafbff] to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 py-10 sm:py-14 lg:py-16 lg:max-w-6xl lg:mx-auto">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/fast-iptv.webp"
                  alt="Fast IPTV logo"
                  fill
                  sizes="48px"
                  loading="lazy"
                  className="object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                />
              </div>
              <span className="text-lg font-bold text-foreground">
                Fast<span className="gradient-text"> IPTV </span>
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-6">
              The fast IPTV service 50,000 UK homes trust. 60-second activation, zero-buffer 4K streaming, 37,000 channels and a secure proxy option — from £25.99.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted">
                <Mail className="h-4 w-4 text-violet-500/60" />
                <span>{CONTACT_EMAIL}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:justify-self-center">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <SectionLink
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-violet-600"
                  >
                    {link.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div className="lg:justify-self-center">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Guides
            </h3>
            <ul className="space-y-3">
              {GUIDES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-violet-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:justify-self-start">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-violet-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-violet-100/50 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted text-center sm:text-left">
              © {new Date().getFullYear()} Fast IPTV UK. All rights reserved. | Best Fast IPTV Service | #1 IPTV Subscription UK
            </p>
            <p className="text-xs text-gray-500 text-center sm:text-right max-w-md">
              {SITE_NAME} is not affiliated with any television networks or content providers.
              All trademarks are property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
