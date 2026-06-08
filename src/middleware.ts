import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE_LIVE } from "@/lib/seo";

const LUX_HOST = "glockner.preview.glockner.ai";
const LUX_PATH = "/v2";

/**
 * Production hosts where the Lux experience goes PUBLIC. These may be indexed
 * once SITE_LIVE === true. The preview subdomain and all dev hosts stay noindex
 * forever (they're staging mirrors of the same content).
 */
const PUBLIC_LUX_HOSTS = new Set(["glockner.ai", "www.glockner.ai"]);

/** Primary brand domain — everything consolidates here. */
const PRIMARY_HOST = "glockner.ai";

/** Glockner-Digital domains: 308-redirect onto the primary brand domain. */
const REDIRECT_TO_PRIMARY = new Set(["glocknerdigital.at", "www.glocknerdigital.at"]);

const ROBOTS_TAG = "noindex, nofollow, noarchive, nosnippet, noimageindex";

function withNoIndex<T extends NextResponse>(res: T): T {
  res.headers.set("X-Robots-Tag", ROBOTS_TAG);
  return res;
}

function bareHost(host: string) {
  return host.split(":")[0];
}

/**
 * Treat the public production domain, the preview subdomain, and any local dev
 * host as "lux-only" so all of them show the focused Lux experience
 * (minimal menu, /-rewrite, other-path redirect).
 */
function isLuxHost(host: string) {
  const bare = bareHost(host);
  if (bare === LUX_HOST) return true;
  if (PUBLIC_LUX_HOSTS.has(bare)) return true;
  return bare === "localhost" || bare === "127.0.0.1" || bare.startsWith("10.");
}

/** Only the public production hosts may be indexed, and only after launch. */
function mayIndex(host: string) {
  return SITE_LIVE && PUBLIC_LUX_HOSTS.has(bareHost(host));
}

/**
 * On the Lux preview subdomain, the only public-facing experience is the
 * Lux3 page. Anything else is either an asset/API (left alone) or gets
 * redirected/rewritten to /leistungen-lux3.
 */
export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") || "").toLowerCase();

  // Glockner-Digital domains consolidate onto the primary brand domain.
  // 308 keeps method + path/query; glockner.ai then applies the lux logic.
  if (REDIRECT_TO_PRIMARY.has(bareHost(host))) {
    const target = request.nextUrl.clone();
    target.protocol = "https:";
    target.hostname = PRIMARY_HOST;
    target.port = "";
    return NextResponse.redirect(target, 308);
  }

  // The full-site staging host (e.g. test.glockner.ai) is never the public
  // product — keep it noindex always.
  if (!isLuxHost(host)) {
    return withNoIndex(NextResponse.next());
  }

  // On lux hosts, only the public production domain may be indexed, and only
  // after launch (SITE_LIVE). Preview + dev hosts always get the noindex tag.
  const tag = <T extends NextResponse>(res: T): T =>
    mayIndex(host) ? res : withNoIndex(res);

  // Tag every request on a lux host so the layout / header can render a
  // focused, menu-less variant.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-lux-only", "1");

  const url = request.nextUrl;
  const path = url.pathname;

  // Assets / Next.js internals / API: never redirect.
  if (
    path.startsWith("/_next") ||
    path.startsWith("/api/") ||
    /\.[a-zA-Z0-9]+$/.test(path)
  ) {
    return tag(NextResponse.next({ request: { headers: requestHeaders } }));
  }

  // 301: alte URLs → neue „sprechende" SEO-Slugs (Rankings/Links erhalten).
  const REDIRECTS: Record<string, string> = {
    "/leistungen-lux3": "/ki-marketing-vertrieb",
    "/leistungen-lux": "/ki-marketing-vertrieb",
    "/leistungen-lux2": "/ki-marketing-vertrieb",
    "/retainer": "/ki-automatisierung",
    "/produkt": "/ki-software",
    "/training": "/ki-schulungen",
    "/v2": "/",
  };
  if (REDIRECTS[path]) {
    const r = url.clone();
    r.pathname = REDIRECTS[path];
    return tag(NextResponse.redirect(r, 301));
  }

  // Pass through: die öffentlichen Seiten (neue Slugs + unveränderte) +
  // /digital/* + Rechtsseiten.
  if (
    path === "/ki-marketing-vertrieb" ||
    path === "/ki-automatisierung" ||
    path === "/ki-software" ||
    path === "/ki-schulungen" ||
    path === "/preise" ||
    path === "/ueber-uns" ||
    path === "/kontakt" ||
    path === "/impressum" ||
    path === "/datenschutz" ||
    path.startsWith("/digital/")
  ) {
    return tag(NextResponse.next({ request: { headers: requestHeaders } }));
  }

  // Root: rewrite (URL zeigt /, Inhalt ist die Startseite unter LUX_PATH)
  if (path === "/") {
    const rewriteUrl = url.clone();
    rewriteUrl.pathname = LUX_PATH;
    return tag(
      NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } })
    );
  }

  // Alles andere: auf die Startseite leiten.
  const redirectUrl = url.clone();
  redirectUrl.pathname = "/";
  return tag(NextResponse.redirect(redirectUrl, 302));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
