import type { MetadataRoute } from "next";
import { SITE_URL, SITE_LIVE } from "@/lib/seo";

/**
 * Generiert /robots.txt.
 * Solange SITE_LIVE === false (src/lib/seo.ts): komplette Sperre für alle Bots.
 * Beim Launch SITE_LIVE = true setzen → Allow inkl. Sitemap-Verweis.
 */
export default function robots(): MetadataRoute.Robots {
  if (!SITE_LIVE) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // KEIN Disallow für /studio, /leistungen-lux, /leistungen-lux2:
      // diese Pfade leiten per 301/302 weiter bzw. tragen noindex. Ein
      // robots.txt-Disallow würde Google daran hindern, Redirect/Noindex zu
      // sehen → GSC-Fehler „Indexiert, obwohl durch robots.txt blockiert".
      // Offen lassen, damit Google sie crawlen und sauber fallen lassen kann.
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
