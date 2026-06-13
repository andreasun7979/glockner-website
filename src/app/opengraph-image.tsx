import { ImageResponse } from "next/og";

/**
 * Dynamisches Open-Graph-/Twitter-Sharing-Bild (1200×630) im Glockner-CD.
 * Wird von Next.js automatisch als og:image + twitter:image verdrahtet und
 * gilt site-weit (alle Routen erben es, sofern sie kein eigenes definieren).
 * Ersetzt das bisherige Logo-only-Sharing-Bild.
 */
export const alt = "Glockner AI — KI für mehr Umsatz & weniger Kosten";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const DARK = "#020617";
const GOLD = "#c9a86a";
const CYAN = "#06b6d4";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: `linear-gradient(135deg, ${DARK} 0%, #040b1a 55%, ${DARK} 100%)`,
          color: "#ffffff",
          padding: "76px 84px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Kopf: Wortmarke */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: 8,
              color: GOLD,
              textTransform: "uppercase",
            }}
          >
            Glockner AI
          </div>
        </div>

        {/* Mitte: Headline + Subline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: 96, height: 5, background: GOLD, marginBottom: 34 }} />
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1,
              maxWidth: 980,
            }}
          >
            KI für mehr Umsatz & weniger Kosten
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#94a3b8",
              marginTop: 30,
              maxWidth: 920,
              lineHeight: 1.3,
            }}
          >
            KI-Beratung, Implementierung & Schulung für KMU in Österreich
          </div>
        </div>

        {/* Fuß: USP links, Domain rechts */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(201,168,106,0.30)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", fontSize: 28, color: "#e2e8f0" }}>
            <div style={{ display: "flex", width: 14, height: 14, borderRadius: 14, background: CYAN, marginRight: 16 }} />
            30 % Glockner-AI-Förderung
          </div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: GOLD }}>glockner.ai</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
