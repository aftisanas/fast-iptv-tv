/**
 * Trust panels, not testimonials.
 *
 * These are real WhatsApp support threads, published as evidence of what
 * happens after you pay. We make no rating, score, or review-count claim
 * anywhere — the UK DMCC Act 2024 treats fabricated or unverifiable review
 * signals as a consumer-protection matter, and an `aggregateRating` we cannot
 * substantiate is exactly the thing it targets. (One was previously hardcoded
 * into the homepage schema at 3.9/12; it has been removed.)
 *
 * Every screenshot has had the contact header cropped off and operational
 * detail blurred before export. Four further screenshots from the same set
 * were rejected rather than published:
 *   - three showed peer-to-peer transfers (PayPal / Skrill / personal account),
 *     which contradict the card-checkout flow this page now describes;
 *   - one contained instructions to a customer about wording a payment
 *     reference, which is not something to put on a public page.
 */
export type TrustPanel = {
  id: string;
  /** Path under /public/reviews. */
  image: string;
  /** Intrinsic size of the exported file, so the grid reserves the space. */
  w: number;
  h: number;
  /** Micro-label above the screenshot. */
  label: string;
  /** One line of context beneath it. */
  caption: string;
};

export const TRUST_PANELS_CONTENT = {
  eyebrow: "Before you buy",
  headline: "What actually happens after you pay",
  lede:
    "We have not collected published reviews, so we are not going to show you a star rating. What we can show you is real support threads with real customers — set-up help, a next-day check-in, and someone coming back to buy a second subscription.",
  note:
    "Contact details and set-up codes are blurred. Questions before you pay are welcome — WhatsApp reaches a person, not a ticket queue.",
} as const;

export const TRUST_PANELS: TrustPanel[] = [
  {
    id: "setup",
    image: "/reviews/trust-setup.webp",
    w: 760,
    h: 809,
    label: "Set-up, walked through step by step",
    caption:
      "A Firestick install guided over WhatsApp until the picture was on. “That was easier then I thought.”",
  },
  {
    id: "order",
    image: "/reviews/trust-order.webp",
    w: 760,
    h: 809,
    label: "We check in after the order",
    caption:
      "Access details go out by email, then we follow up to confirm everything is working before we leave you alone.",
  },
  {
    id: "referral",
    image: "/reviews/trust-referral.webp",
    w: 760,
    h: 809,
    label: "Bought once, came back for a second",
    caption:
      "A customer who first bought the service for a friend, returning to buy his own — on a Samsung TV rather than a Firestick.",
  },
];
