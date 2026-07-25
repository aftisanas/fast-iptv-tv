"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import SectionLink from "@/components/SectionLink";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass shadow-lg shadow-purple-900/5"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="relative h-12 w-12 lg:h-14 lg:w-14 shrink-0">
                <Image
                  src="/iptv-providers-uk.webp"
                  alt="IPTV Providers UK logo"
                  fill
                  sizes="(min-width: 1024px) 56px, 48px"
                  className="object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                  priority
                  fetchPriority="high"
                />
              </div>
              <span className={cn(
                "text-lg font-bold tracking-tight lg:text-xl font-[var(--font-display)] transition-colors duration-500",
                isScrolled ? "text-foreground" : "text-white"
              )}>
                IPTV<span className={isScrolled ? "gradient-text" : "text-cyan-400"}> Providers </span>UK
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <SectionLink
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors group",
                    isScrolled
                      ? "text-muted hover:text-foreground"
                      : "text-gray-300 hover:text-white"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute bottom-0 left-1/2 h-0.5 w-0 transition-all duration-300 group-hover:left-4 group-hover:w-[calc(100%-2rem)]",
                    isScrolled
                      ? "bg-gradient-to-r from-violet-600 to-cyan-500"
                      : "bg-gradient-to-r from-purple-400 to-cyan-400"
                  )} />
                </SectionLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <SectionLink
                href="/#pricing"
                className="relative overflow-hidden rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/20 active:scale-[0.98]"
              >
                <span className="relative z-10">Get Started</span>
              </SectionLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2",
                isScrolled ? "hover:bg-violet-50" : "hover:bg-white/10"
              )}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileOpen ? (
                <X className={cn("h-5 w-5", isScrolled ? "text-foreground" : "text-white")} />
              ) : (
                <Menu className={cn("h-5 w-5", isScrolled ? "text-foreground" : "text-white")} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 bg-white border-l border-violet-100 p-6 shadow-2xl"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-violet-50"
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <SectionLink
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-muted transition-all hover:bg-violet-50 hover:text-foreground"
                    >
                      {link.label}
                    </SectionLink>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-3">
                <SectionLink
                  href="/#pricing"
                  onClick={() => setIsMobileOpen(false)}
                  className="rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Get Started
                </SectionLink>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
