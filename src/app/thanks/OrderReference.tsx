"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function OrderReference({
  reference,
  label,
}: {
  reference: string;
  label: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(reference);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (older browsers, insecure context) — silently
      // no-op so the reference stays visible for manual selection.
    }
  };

  return (
    <div className="mb-6 rounded-xl border border-gray-100 bg-gray-50/80 px-5 py-4">
      <div className="text-[10px] font-semibold tracking-[0.15em] text-muted">
        {label}
      </div>
      <div className="mt-1 flex items-start gap-2">
        <div className="min-w-0 flex-1 font-mono text-xs text-foreground break-all">
          {reference}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Reference copied" : "Copy reference to clipboard"}
          className="shrink-0 rounded-md border border-gray-200 bg-white p-1.5 text-muted transition-colors hover:bg-gray-50 hover:text-foreground focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
          ) : (
            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
