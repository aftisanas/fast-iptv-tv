import { LAST_UPDATED, LAST_UPDATED_DISPLAY } from "@/lib/constants";

export default function DefinitionSection() {
  return (
    <section
      id="what-is-fast-iptv"
      className="relative py-12 lg:py-16 bg-white"
      aria-labelledby="what-is-fast-iptv-heading"
    >
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-sm text-muted">
          <span>Reviewed by <span className="font-medium text-foreground">Fast IPTV Editorial Team</span></span>
          <span aria-hidden="true">·</span>
          <span>
            Updated <time dateTime={LAST_UPDATED}>{LAST_UPDATED_DISPLAY}</time>
          </span>
        </div>

        <h2
          id="what-is-fast-iptv-heading"
          className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
        >
          What is Fast IPTV?
        </h2>

        <div className="space-y-4 text-base text-muted leading-relaxed">
          <p>
            Fast IPTV is a UK-focused IPTV (Internet Protocol Television) subscription that streams 37,000+ live channels and 198,000+ films and series over standard home broadband. The service replaces traditional satellite or cable TV with an internet-delivered stream, requires no dish or engineer visit, and works on devices most UK households already own — Amazon Fire TV Stick, Apple TV, Android TV, Samsung Tizen and LG webOS smart TVs, iPhone, iPad, Windows, macOS, MAG and Formuler boxes.
          </p>
          <p>
            Activation runs automatically after payment: login credentials arrive by email within roughly 60 seconds of checkout, and configuration in a player app like IPTV Smarters Pro or TiViMate typically takes under five minutes. Plans range from a 3-month entry tier at £25.99 to a 24-month plan at £79.99 (effective £3.33 per month), and every plan includes 4K UHD streaming, an optional secure proxy layer, and 24/7 UK-based customer support. The service is backed by a 30-day money-back.
          </p>
        </div>
      </div>
    </section>
  );
}
