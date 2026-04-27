import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "IPTV Subscription UK | 37,000 Channels in 4K UHD",
    template: "%s | IPTV Subscription UK 4K",
  },
  description:
    "Get the best IPTV subscription in the UK. 37,000 channels, 198,000 films in 4K, built-in VPN, 99.9% uptime. 30-day money-back.",
  keywords: [
    "iptv subscription",
    "iptv uk",
    "best iptv uk",
    "iptv providers",
    "iptv service",
    "iptv reviews",
    "buy iptv",
    "british iptv",
    "strong iptv",
    "fast iptv",
    "premium iptv",
    "cheap iptv subscription",
    "iptv subscription uk",
    "iptv uk 4k",
    "uk iptv subscription",
  ],
  authors: [{ name: "IPTV Subscription UK 4K" }],
  creator: "IPTV Subscription UK 4K",
  applicationName: "IPTV Subscription UK 4K",
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
    },
  },
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico", sizes: "any" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "IPTV Subscription UK 4K",
    url: SITE_URL,
    title: "IPTV Subscription UK — 4K British IPTV from 12.99",
    description:
      "Premium IPTV subscription for UK homes. 37,000 live channels, 198,000 VOD, 4K UHD, instant activation and 24/7 UK support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Subscription UK — 4K British IPTV from 12.99",
    description:
      "Premium IPTV subscription for UK homes. 37,000 live channels, 198,000 VOD, 4K UHD, instant activation and 24/7 UK support.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-(--font-sans)">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg focus:outline-2 focus:outline-violet-600"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
