import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Sitemap der öffentlich indexierbaren Seiten.
 * Seit dem v2-Launch zeigt "/" die neue Startseite (Rewrite "/"→"/v2").
 * Die Kern-Angebotsseiten (Preise, Retainer, Training, Produkt) und Über uns
 * sowie die Money-Making-Seite (/leistungen-lux3, eigener Canonical) sind
 * gelistet. Bewusst NICHT enthalten: /v2 (= "/"), Alternativ-Designs,
 * Rechtsseiten, /studio.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/preise", priority: 0.9, changeFrequency: "monthly" },
    { path: "/foerderung", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ki-marketing-vertrieb", priority: 0.8, changeFrequency: "monthly" },
    { path: "/ki-automatisierung", priority: 0.8, changeFrequency: "monthly" },
    { path: "/ki-schulungen", priority: 0.8, changeFrequency: "monthly" },
    { path: "/ki-software", priority: 0.8, changeFrequency: "monthly" },
    { path: "/ueber-uns", priority: 0.6, changeFrequency: "yearly" },
    { path: "/digital/ecommerce", priority: 0.7, changeFrequency: "monthly" },
    { path: "/digital/gewerbe", priority: 0.7, changeFrequency: "monthly" },
    { path: "/digital/gesundheit", priority: 0.7, changeFrequency: "monthly" },
    { path: "/kontakt", priority: 0.6, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    // Root ohne abschließenden Slash, damit er exakt dem Canonical (SITE_URL) entspricht.
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
