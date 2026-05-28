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
    default: "Fast IPTV UK 2026 | #1 Fastest IPTV Subscription — 60s Activation",
    template: "%s | Fast IPTV",
  },
  description:
    "Fast IPTV UK 2026: the fastest IPTV subscription in Britain. 37,000 channels, 4K UHD, sub-3s sport delay, 60-second activation. Live in two minutes — from £25.99.",
  authors: [{ name: "Fast IPTV" }],
  creator: "Fast IPTV",
  applicationName: "Fast IPTV",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-GB": SITE_URL,
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
    siteName: "Fast IPTV",
    url: SITE_URL,
    title: "Fast IPTV UK 2026 | #1 Fastest IPTV Subscription — 60s Activation",
    description:
      "Fast IPTV UK 2026: the fastest IPTV subscription in Britain. 37,000 channels, 4K UHD, sub-3s sport delay, 60-second activation. Live in two minutes — from £25.99.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast IPTV UK 2026 | #1 Fastest IPTV Subscription — 60s Activation",
    description:
      "Fast IPTV UK 2026: the fastest IPTV subscription in Britain. 37,000 channels, 4K UHD, sub-3s sport delay, 60-second activation. Live in two minutes — from £25.99.",
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
