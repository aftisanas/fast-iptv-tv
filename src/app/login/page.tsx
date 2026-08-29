import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Tv } from "lucide-react";
import {
  CONTACT_EMAIL,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

/**
 * "fast iptv login" ranks at position 1.2 and sends ~9 clicks a week, with
 * "fastiptv" and "fastip.tv" behind it — roughly 47 navigational clicks a week
 * in total. Every one of them landed on a homepage that does not answer the
 * question, and /login itself returned a 404.
 *
 * There is no web login to offer: credentials go into a player app, not into a
 * form on this site. So the page's job is to say that plainly, get an existing
 * customer moving, and give someone who is not a customer somewhere to go.
 */
export const metadata: Metadata = {
  title: "Fast IPTV Login — Where To Enter Your Details",
  description:
    "Fast IPTV has no website login. Your username, password and portal URL go into your player app — IPTV Smarters Pro, TiViMate or X-OTT. Here is where to put them, and how to get them resent.",
  alternates: { canonical: "/login" },
};

const PLAYERS = [
  {
    name: "IPTV Smarters Pro",
    where: "Choose “Login with Xtream Codes API”, then enter your username, password and the portal URL from your email.",
  },
  {
    name: "TiViMate",
    where: "Add playlist → Xtream Codes, then enter the same three details.",
  },
  {
    name: "X-OTT",
    where: "On Samsung and LG TVs, add your playlist and enter the details from your email.",
  },
];

export default function LoginPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi, I've lost my Fast IPTV login details — can you resend them?"
  )}`;

  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Signing in to {SITE_NAME}
        </h1>

        <p className="text-lg text-muted leading-relaxed mb-8">
          There is no login form on this website — and there is nothing wrong
          with your account if you were looking for one. Your details go into
          the player app on your TV, phone or Fire Stick instead.
        </p>

        <div className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm mb-10">
          <div className="flex items-start gap-3">
            <Tv className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" aria-hidden="true" />
            <div>
              <h2 className="text-base font-semibold text-foreground mb-2">
                What you were sent
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                After payment we email a <strong className="text-foreground">username</strong>,{" "}
                <strong className="text-foreground">password</strong> and{" "}
                <strong className="text-foreground">portal URL</strong>, usually
                within about a minute. Those three things go into your player
                app. Keep the email — it is the only copy you need.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-foreground mb-4">
          Where to enter them
        </h2>
        <ul className="space-y-3 mb-10">
          {PLAYERS.map((p) => (
            <li
              key={p.name}
              className="rounded-xl border border-gray-100 bg-gray-50/70 px-5 py-4"
            >
              <p className="text-sm font-semibold text-foreground">{p.name}</p>
              <p className="mt-1 text-sm text-muted leading-relaxed">{p.where}</p>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold text-foreground mb-4">
          Lost your details?
        </h2>
        <p className="text-sm text-muted leading-relaxed mb-5">
          We can resend them. Message us with the email address you ordered
          with and we will look the order up — there is a person on the other
          end, not a ticket queue.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row mb-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-green-700 focus-visible:outline-offset-2"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {CONTACT_EMAIL}
          </a>
        </div>

        {/* Not everyone who searches "fast iptv login" is a customer — the
            phrase is generic enough to catch people looking for a service they
            have not bought yet. Give them somewhere to go rather than a dead
            end. */}
        <div className="rounded-2xl border border-violet-100 bg-violet-50/40 p-6">
          <h2 className="text-base font-semibold text-foreground mb-2">
            Not a customer yet?
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            {SITE_NAME} is a UK IPTV subscription — 37,000+ live channels and
            198,000+ films and series in 4K, on the devices you already own.
            Plans start at £25.99 with a 30-day money-back guarantee.
          </p>
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-violet-700 focus-visible:outline-offset-2"
          >
            See plans &amp; pricing
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I log in to Fast IPTV?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fast IPTV has no website login. The username, password and portal URL emailed to you after payment are entered into a player app such as IPTV Smarters Pro, TiViMate or X-OTT, not into this site.",
                },
              },
              {
                "@type": "Question",
                name: "I have lost my Fast IPTV login details. What do I do?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Message Fast IPTV on WhatsApp at ${WHATSAPP_DISPLAY} or email ${CONTACT_EMAIL} with the email address used to order, and the details will be resent.`,
                },
              },
            ],
            url: `${SITE_URL}/login`,
          }),
        }}
      />
    </div>
  );
}
