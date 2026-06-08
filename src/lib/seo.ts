/**
 * Zentrale SEO-Konfiguration — eine Quelle der Wahrheit.
 *
 * LAUNCH-CHECKLISTE (wenn die Seite öffentlich gehen soll):
 *   1. `SITE_LIVE` unten auf `true` setzen.
 *      → Das entfernt site-weit `noindex` (layout.tsx) und schaltet robots.txt
 *        von „Disallow: /" auf „Allow: /" inkl. Sitemap-Verweis (robots.ts).
 *   2. Falls die finale Domain abweicht (z. B. www.glockner.ai): nur `SITE_URL` ändern —
 *      metadataBase, Canonical-Tags und Sitemap ziehen automatisch nach.
 *   3. Sitemap unter https://glockner.ai/sitemap.xml in der Google Search Console einreichen.
 *
 * Die Alternativ-Designs (/leistungen, /leistungen-lux, /leistungen-lux2,
 * /leistungen/*) tragen ein EIGENES `robots: { index: false }` und bleiben daher
 * auch nach dem Launch aus dem Index (Duplicate-Content-Vermeidung).
 */

/** Master-Schalter. Solange `false`: gesamte Seite noindex + robots.txt Disallow. */
export const SITE_LIVE = true;

/** Kanonische, finale öffentliche Domain (ohne abschließenden Slash). */
export const SITE_URL = "https://glockner.ai";

export const SITE_NAME = "Glockner AI";
export const SITE_NAME_DIGITAL = "Glockner Digital";

/** Default-Sharing-Bild (relativ zu metadataBase). Bis ein dediziertes 1200×630-OG-Bild existiert: Logo. */
export const DEFAULT_OG_IMAGE = "/logo@2x.webp";

/**
 * Organization + WebSite als JSON-LD (schema.org).
 * Zwei Standorte (Wien = Firmensitz lt. Impressum, Klagenfurt = Kärnten-Büro).
 * Beide Adressen vom Nutzer bestätigt (Stand 2026-05-31).
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: "Glockner Digital — eCommerce Consulting Mag. Andreas Unterkofler",
        url: SITE_URL,
        logo: `${SITE_URL}/logo@2x.webp`,
        image: `${SITE_URL}/logo@2x.webp`,
        description:
          "KI-Beratung & Implementierung für KMU in Österreich. Bis zu 80 % WKO-Förderung möglich.",
        email: "support@glocknerdigital.at",
        telephone: "+436506605000",
        address: [
          {
            "@type": "PostalAddress",
            streetAddress: "Blumauergasse 23/12",
            postalCode: "1020",
            addressLocality: "Wien",
            addressCountry: "AT",
          },
          {
            "@type": "PostalAddress",
            streetAddress: "Sankt Ruprechter Straße 90",
            postalCode: "9020",
            addressLocality: "Klagenfurt",
            addressRegion: "Kärnten",
            addressCountry: "AT",
          },
        ],
        founder: {
          "@type": "Person",
          name: "Mag. Andreas Unterkofler",
        },
        areaServed: {
          "@type": "Country",
          name: "Österreich",
        },
        sameAs: ["https://glockner.ai", "https://glocknerdigital.at"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "de-AT",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}
