"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CurrencyCode, PricingTable } from "@/lib/pricing";

/**
 * Resolves which currency this visitor sees, and keeps every part of the page
 * agreeing on the answer.
 *
 * Country comes from `/cdn-cgi/trace`, which Cloudflare already serves on this
 * domain — same-origin, uncached, no configuration and no third-party. The
 * answer is remembered in localStorage so only the first visit of a session
 * shows the default currency before resolving.
 *
 * 55% of this site's traffic is outside the UK, and until now all of it was
 * quoted in pounds.
 */

const STORAGE_KEY = "fi.country";

type CurrencyState = {
  currency: CurrencyCode;
  country: string | null;
  /** False until the visitor's country is known. */
  resolved: boolean;
  table: PricingTable;
  /** Lets the buyer override detection; persists like a detected country. */
  setCountry: (country: string) => void;
};

const CurrencyContext = createContext<CurrencyState | null>(null);

function currencyFor(table: PricingTable, country: string | null): CurrencyCode {
  if (!country) return table.defaultCurrency;
  const mapped = table.countryToCurrency[country.toUpperCase()];
  return mapped ?? table.countryToCurrency["*"] ?? table.defaultCurrency;
}

function readStoredCountry(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // Private mode, or storage blocked. Detection still runs.
    return null;
  }
}

export function CurrencyProvider({
  table,
  children,
}: {
  table: PricingTable;
  children: React.ReactNode;
}) {
  // Server render and first paint use the default, so the markup Google sees
  // is stable and matches the JSON-LD.
  const [country, setCountryState] = useState<string | null>(null);
  const [resolved, setResolved] = useState(false);

  const persist = useCallback((next: string) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Not being able to remember it is survivable.
    }
  }, []);

  useEffect(() => {
    // Reading a client-only store on mount and committing it is exactly what
    // this effect is for; the lint rule cannot tell that apart from a
    // render-loop. One update, no cascade.
    const stored = readStoredCountry();
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCountryState(stored);
      setResolved(true);
      return;
    }

    let cancelled = false;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);

    fetch("/cdn-cgi/trace", { signal: controller.signal })
      .then((res) => (res.ok ? res.text() : Promise.reject(res.status)))
      .then((text) => {
        if (cancelled) return;
        const match = text.match(/^loc=([A-Z]{2})$/m);
        if (match) {
          setCountryState(match[1]);
          persist(match[1]);
        }
        setResolved(true);
      })
      .catch(() => {
        // No detection: the default currency stands. Showing GBP to a French
        // visitor is a worse price, not a wrong one.
        if (!cancelled) setResolved(true);
      })
      .finally(() => clearTimeout(timer));

    return () => {
      cancelled = true;
      clearTimeout(timer);
      controller.abort();
    };
  }, [persist]);

  const setCountry = useCallback(
    (next: string) => {
      const upper = next.toUpperCase();
      setCountryState(upper);
      setResolved(true);
      persist(upper);
    },
    [persist]
  );

  const value = useMemo<CurrencyState>(
    () => ({
      currency: currencyFor(table, country),
      country,
      resolved,
      table,
      setCountry,
    }),
    [table, country, resolved, setCountry]
  );

  return (
    <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyState {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used inside a CurrencyProvider");
  }
  return ctx;
}
