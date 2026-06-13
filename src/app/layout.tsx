import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { SITE_URL, SITE_NAME, SITE_LIVE, organizationJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KI-Beratung & Implementierung für KMU in Österreich | Glockner AI",
    template: "%s | Glockner AI",
  },
  description:
    "Glockner AI macht Ihr Unternehmen mit Agentic AI zukunftsfähig: KI-Beratung, Implementierung & Schulung für KMU in Österreich. Bis zu 80 % WKO-Förderung.",
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: SITE_NAME,
    url: "/",
    // Dynamisch generiert via app/opengraph-image.tsx (1200×630, im Glockner-CD).
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
  // Master-Schalter in src/lib/seo.ts. Solange SITE_LIVE === false bleibt die
  // gesamte Seite auf noindex (Preview/Staging-Schutz). Beim Launch: SITE_LIVE = true.
  robots: SITE_LIVE
    ? undefined
    : {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
        },
      },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const isLuxOnly = h.get("x-lux-only") === "1";

  return (
    <html lang="de-AT" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500;1,9..144,600&family=Montserrat:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Cookiebot consent (auto-blocking) MUST load before any tracker.
            beforeInteractive → injected into initial HTML, executed in order. */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="6096c68d-3c0a-4690-8049-5b49f7f23465"
          data-blockingmode="manual"
          strategy="beforeInteractive"
        />
        {/* Google Analytics 4 — loaded by <Analytics/> ONLY after Cookiebot
            reports `statistics` consent (consent-first, fail-safe). */}
        <Analytics />
        <Header isLuxOnly={isLuxOnly} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
