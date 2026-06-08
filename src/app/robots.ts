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
      // Alternativ-Designs & Studio nicht crawlen (Duplicate Content / Backend).
      disallow: ["/studio", "/leistungen-lux", "/leistungen-lux2"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
