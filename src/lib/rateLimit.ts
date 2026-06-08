/**
 * Leichtgewichtiges In-Memory-Rate-Limiting + Client-IP-Helfer für die
 * öffentlichen POST-Endpunkte (/api/contact, /api/booking).
 *
 * HINWEIS: Auf Vercel Fluid Compute laufen mehrere Function-Instanzen; dieser
 * Speicher ist PRO Instanz, nicht global geteilt. Das bremst Burst-Spam von
 * einer IP wirksam aus, ist aber kein vollständiger Schutz. Für robustes
 * Limiting/Bot-Abwehr zusätzlich Vercel WAF / BotID auf Plattformebene nutzen.
 */

type Hit = { count: number; reset: number };

const buckets = new Map<string, Hit>();

/** Returns true if the request is allowed, false if the limit is exceeded. */
export function rateLimit(key: string, limit = 5, windowMs = 10 * 60_000): boolean {
  const now = Date.now();

  // Occasional prune so the map can't grow unbounded under sustained traffic.
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) {
      if (now > v.reset) buckets.delete(k);
    }
  }

  const hit = buckets.get(key);
  if (!hit || now > hit.reset) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return true;
  }
  if (hit.count >= limit) return false;
  hit.count++;
  return true;
}

/** Best-effort client IP from proxy headers (Vercel sets x-forwarded-for). */
export function clientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}
