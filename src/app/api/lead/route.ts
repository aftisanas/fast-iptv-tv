import { NextResponse } from "next/server";
import { CHECKOUT_HUB_URL } from "@/lib/constants";

/**
 * First-party relay for lead capture.
 *
 * `logDiversion` posts straight to the hub, which works whenever the hub is
 * reachable from the browser. It is not always reachable: ad blockers and
 * privacy extensions block requests to `checkout.british-iptv-4k.com` because
 * it is a third-party domain unrelated to the site the visitor is on. When
 * that happens the buyer's details are lost — and those are the buyers we most
 * need to know about, because they are the ones whose card checkout failed.
 *
 * This route is same-origin, so it is not blocked, and the hop to the hub then
 * happens server-side where no extension can interfere.
 */

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  try {
    const upstream = await fetch(`${CHECKOUT_HUB_URL}/api/diversion`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // The buyer is waiting on a UI switch, not on this call. Don't let a
      // slow hub hold the response open.
      signal: AbortSignal.timeout(8000),
    });

    if (!upstream.ok) {
      // Log the whole payload so the lead survives in the server logs even if
      // the hub itself rejected it.
      console.error("[lead] hub rejected diversion", upstream.status, JSON.stringify(payload));
      return NextResponse.json({ ok: false, status: upstream.status }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] relay to hub failed", err, JSON.stringify(payload));
    return NextResponse.json({ ok: false, error: "relay failed" }, { status: 502 });
  }
}
