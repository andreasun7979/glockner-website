import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: { absolute: "E-Commerce-Beratung & Webshop-Marketing | Glockner Digital" },
  description:
    "Strategische E-Commerce-Beratung für Webshops, Marken & Händler: AI-Performance-Marketing, Conversion-Webshops, 15 Jahre Praxis. Bis zu 80 % WKO-Förderung.",
  alternates: { canonical: "/digital/ecommerce" },
  openGraph: {
    title: "E-Commerce-Beratung & Webshop-Marketing | Glockner Digital",
    description:
      "Strategische E-Commerce-Beratung für Webshops, Marken & Händler: AI-Performance-Marketing, Conversion-Webshops, 15 Jahre Praxis. Bis zu 80 % WKO-Förderung.",
    url: "/digital/ecommerce",
    siteName: "Glockner Digital",
  },
};

/* ---------- Ornaments (Granat-themed inline SVG) ---------- */

function AurumSeal({ size = 36, className = "" }: { size?: number; className?: string }) {
  // Two interlocking circles in a granat gradient — like a sealed apothecary stamp
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 100 70"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="38" cy="35" r="24" stroke="url(#g1)" strokeWidth="1" opacity="0.85" />
      <circle cx="62" cy="35" r="24" stroke="url(#g1)" strokeWidth="1" opacity="0.85" />
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="100" y2="70">
          <stop offset="0%" stopColor="#d8bd8a" />
          <stop offset="55%" stopColor="#c9a86a" />
          <stop offset="100%" stopColor="#a88845" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AurumFlower({ size = 36, className = "" }: { size?: number; className?: string }) {
  // Flower of Life — seven interlocking circles, sacred-geometry motif
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g stroke="url(#g2)" strokeWidth="0.9" opacity="0.85">
        <circle cx="50" cy="50" r="24" />
        <circle cx="74" cy="50" r="24" />
        <circle cx="62" cy="29.2" r="24" />
        <circle cx="38" cy="29.2" r="24" />
        <circle cx="26" cy="50" r="24" />
        <circle cx="38" cy="70.8" r="24" />
        <circle cx="62" cy="70.8" r="24" />
        <circle cx="50" cy="50" r="49" opacity="0.55" />
      </g>
      <defs>
        <linearGradient id="g2" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#d8bd8a" />
          <stop offset="55%" stopColor="#c9a86a" />
          <stop offset="100%" stopColor="#a88845" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AurumDivider({ width = "narrow" }: { width?: "narrow" | "wide" }) {
  const w = width === "wide" ? "w-24 md:w-40" : "w-12 md:w-20";
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className={`block ${w} h-px bg-gradient-to-r from-transparent to-aurum/60`} />
      <span className="block w-1.5 h-1.5 rounded-full bg-aurum shadow-[0_0_12px_rgba(201,168,106,0.6)]" />
      <span className={`block ${w} h-px bg-gradient-to-l from-transparent to-aurum/60`} />
    </div>
  );
}

/* ---------- WaxSeal — premium credential ornament ---------- */

function WaxSeal({
  topText,
  centerLabel,
  size = 110,
}: {
  topText: string;
  centerLabel: string;
  size?: number;
}) {
  const id = `wax-${centerLabel}-${topText.slice(0, 4)}`.replace(/[^a-z0-9]/gi, "");
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-ring`} x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#e8d4a8" />
          <stop offset="50%" stopColor="#c9a86a" />
          <stop offset="100%" stopColor="#7d6432" />
        </linearGradient>
        <radialGradient id={`${id}-fill`} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="rgba(216,189,138,0.20)" />
          <stop offset="100%" stopColor="rgba(125,100,50,0.05)" />
        </radialGradient>
        <path id={`${id}-arc`} d="M 22 50 A 28 28 0 0 1 78 50" fill="none" />
      </defs>

      {/* Soft inner glow */}
      <circle cx="50" cy="50" r="44" fill={`url(#${id}-fill)`} />
      {/* Outer ring */}
      <circle cx="50" cy="50" r="44" stroke={`url(#${id}-ring)`} strokeWidth="0.9" />
      {/* Decorative dashed ring */}
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke={`url(#${id}-ring)`}
        strokeWidth="0.4"
        strokeDasharray="0.6 1.3"
        opacity="0.65"
      />
      {/* Inner ring (center field) */}
      <circle
        cx="50"
        cy="50"
        r="22"
        stroke={`url(#${id}-ring)`}
        strokeWidth="0.5"
        opacity="0.7"
      />

      {/* Top inscription along arc */}
      <text
        fontFamily="'Fraunces', Georgia, serif"
        fontSize="5"
        fill="#c9a86a"
        letterSpacing="2.5"
      >
        <textPath href={`#${id}-arc`} startOffset="50%" textAnchor="middle">
          {topText}
        </textPath>
      </text>

      {/* Center Roman numeral */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontFamily="'Fraunces', Georgia, serif"
        fontSize="22"
        fontWeight="500"
        fontStyle="italic"
        fill="#d8bd8a"
      >
        {centerLabel}
      </text>

      {/* Compass marks at cardinal points */}
      {[0, 90, 180, 270].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 50 50)`}>
          <circle cx="50" cy="11" r="0.9" fill="#c9a86a" opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}

/* ---------- Reusable star rating ---------- */

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${n} von 5 Sternen`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-aurum"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */

export default function DigitalEcommercePage() {
  return (
    <>
      {/* HERO ─────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#0a0512] to-brand-dark" />
        <div
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[900px] aspect-square rounded-full opacity-70 aurum-breathe"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,106,0.18) 0%, rgba(168,136,69,0.08) 35%, transparent 70%)",
            filter: "blur(70px)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-7 md:mb-9">
            <AurumFlower size={42} />
          </div>

          <div className="font-mono text-[10.5px] md:text-[11px] tracking-[0.42em] uppercase text-aurum/90 font-semibold mb-6">
            Glockner Digital
          </div>

          <div className="font-mono text-[12px] md:text-[13px] tracking-[0.18em] uppercase text-slate-300 font-bold mb-3">
            Beratung &nbsp;<span className="text-aurum">·</span>&nbsp; E-Commerce
          </div>

          <h1 className="font-serif-display font-medium text-white text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-[-0.025em] m-0">
            Für Webshops, die{" "}
            <em className="aurum-text not-italic font-medium">verkaufen</em>
            <span className="text-aurum">.</span>
          </h1>

          <div className="mt-10 mb-8">
            <AurumDivider width="wide" />
          </div>

          <p className="font-serif-display italic text-slate-200 text-xl md:text-2xl leading-snug tracking-tight max-w-3xl mx-auto m-0">
            Strategische E-Commerce-Beratung für{" "}
            <span className="aurum-text not-italic font-semibold">
              Webshops, Marken &amp; Händler
            </span>{" "}
            &mdash; 15 Jahre hands-on Erfahrung von einem Operator, der selbst
            ein Multi-Millionen-Geschäft aufgebaut hat.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-5 text-[11px] tracking-[0.16em] uppercase font-mono font-semibold text-slate-400">
            <span className="px-3 py-1.5 border border-aurum/30 rounded-full bg-aurum/5">
              WKO eCommerce Consultant
            </span>
            <span className="px-3 py-1.5 border border-aurum/30 rounded-full bg-aurum/5">
              CeCC Certified
            </span>
            <span className="px-3 py-1.5 border border-aurum/30 rounded-full bg-aurum/5">
              KMU-Digital Partner
            </span>
          </div>
        </div>
      </section>

      {/* ANDREAS UNTERKOFLER ─── Founder Bio ─── */}
      <section
        id="andreas"
        className="relative py-20 md:py-28 overflow-hidden border-t border-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#08050f] to-brand-dark" />
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 25% 50%, rgba(201,168,106,0.10), transparent 50%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[400px_1fr] gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-aurum/20 bg-brand-card">
              {/* Gold circle backdrop — replaces the brand-orange disc that came with the original photo */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="aspect-square w-[88%] rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 38%, #d8bd8a 0%, #c9a86a 55%, #a88845 100%)",
                  }}
                />
              </div>
              <Image
                src="/team/andreas-unterkofler.webp"
                alt="Andreas Unterkofler — Gründer Glockner Digital"
                width={960}
                height={1200}
                priority
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              />
              {/* Subtle dark gradient at bottom for caption legibility */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-dark/80 via-brand-dark/30 to-transparent"
              />
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum/60 to-transparent opacity-60"
              />
              <div className="absolute bottom-5 left-5 right-5 text-left">
                <div className="font-serif-display text-white text-lg font-medium tracking-tight">
                  Andreas Unterkofler
                </div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-aurum/85 font-semibold mt-1">
                  Gründer &middot; Glockner Digital
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <AurumSeal size={22} />
                <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-aurum/85 font-semibold">
                  Wer hinter Glockner Digital steht
                </span>
              </div>

              <h2 className="font-serif-display font-medium text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.05] m-0">
                Andreas Unterkofler<span className="text-aurum">.</span>
              </h2>

              <p className="font-serif-display italic text-aurum/90 text-lg md:text-xl mt-4 leading-snug">
                Gründer &middot; WKO-Berater &middot; E-Commerce-Operator
              </p>

              <p className="mt-7 text-slate-300 text-[16px] md:text-[17px] leading-relaxed">
                15 Jahre lang habe ich selbst E-Commerce gemacht &mdash; vom
                ersten Shopify-Shop bis zum{" "}
                <em className="aurum-text not-italic font-semibold">
                  Multi-Millionen-Multi-Channel-Geschäft
                </em>
                . Heute gebe ich genau dieses Operator-Wissen als zertifizierter
                WKO-Berater an Marken weiter, die jetzt skalieren wollen.
              </p>

              <p className="mt-4 text-slate-400 text-[15px] leading-relaxed">
                Mein Versprechen: Sie bekommen keine Theorie aus der Beraterbubble
                &mdash; sondern Empfehlungen, die ich mit eigenem Geld validiert
                habe. Hinter mir steht ein 30-köpfiges Spezialisten-Team für
                Umsetzung, Tech und Performance.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-9 pt-8 border-t border-white/10">
                <div>
                  <div className="font-serif-display aurum-text text-3xl md:text-4xl font-medium leading-none">
                    15+
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500 mt-2 leading-tight">
                    Jahre Operator
                  </div>
                </div>
                <div>
                  <div className="font-serif-display aurum-text text-3xl md:text-4xl font-medium leading-none">
                    7-stellig
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500 mt-2 leading-tight">
                    Eigener Umsatz
                  </div>
                </div>
                <div>
                  <div className="font-serif-display aurum-text text-3xl md:text-4xl font-medium leading-none">
                    30
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500 mt-2 leading-tight">
                    Team-Experten
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDO ──────────────────────────────────────── */}
      <section className="relative py-20 md:py-24 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#0a0512] to-brand-dark" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
          <div
            className="w-[600px] max-w-[90vw] aspect-square rounded-full aurum-breathe"
            style={{
              background:
                "radial-gradient(circle, rgba(201,168,106,0.20) 0%, rgba(201,168,106,0.07) 35%, transparent 65%)",
              filter: "blur(50px)",
            }}
            aria-hidden="true"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-7">
            <AurumSeal size={36} />
          </div>

          <div className="font-mono text-[10.5px] tracking-[0.36em] uppercase text-aurum/85 font-semibold mb-6">
            Unser Versprechen
          </div>

          <blockquote className="font-serif-display text-white text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-[-0.01em] m-0">
            <span className="text-aurum/70 font-serif-display text-4xl md:text-6xl leading-none">&ldquo;</span>
            Wir setzen auf nachhaltige Strategien, die{" "}
            <em className="aurum-text not-italic">neue Kunden</em> bringen,{" "}
            <em className="aurum-text not-italic">Umsätze steigern</em> und
            Beziehungen zu Stammkunden{" "}
            <em className="not-italic gradient-text">vertiefen</em>.
            <span className="text-aurum/70 font-serif-display text-4xl md:text-6xl leading-none align-top">&rdquo;</span>
          </blockquote>
        </div>
      </section>

      {/* DREI PAKETE ────────────────────────────────── */}
      <section
        id="pakete"
        className="relative py-20 md:py-28 overflow-hidden border-t border-white/5 scroll-mt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#08050f] to-brand-dark" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <div className="flex justify-center mb-6">
              <AurumSeal size={28} />
            </div>
            <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-5">
              Drei Stufen
            </div>
            <h2 className="font-serif-display font-medium text-white text-4xl md:text-5xl lg:text-6xl leading-[1.06] tracking-[-0.02em] m-0">
              Bis zu{" "}
              <em className="aurum-text not-italic font-medium">80&thinsp;%</em>{" "}
              WKO-Förderung
              <span className="text-aurum">.</span>
            </h2>
            <div className="mt-8">
              <AurumDivider />
            </div>
            <p className="font-serif-display italic text-slate-300 text-lg md:text-xl mt-8 leading-relaxed">
              Vom Status-Audit bis zur Umsetzungs-Begleitung &mdash; geförderte
              Beratung von einem zertifizierten WKO-Berater.
            </p>
          </header>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 list-none m-0 p-0">
            {/* Tile 1 */}
            <li className="relative p-7 md:p-8 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 flex flex-col gap-5 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-50"
              />
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center font-mono text-[10.5px] tracking-[0.20em] uppercase font-semibold text-aurum bg-aurum/15 border border-aurum/40 px-3 py-1.5 rounded-full">
                  80&thinsp;% WKO-Förderung
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500">
                  I
                </span>
              </div>
              <div>
                <h3 className="font-serif-display font-medium text-white text-3xl md:text-4xl tracking-[-0.02em] m-0">
                  Status &amp; Potenzial<span className="text-aurum">.</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-2 m-0">
                  Website-Audit mit Optimierungs-Roadmap. 2-stündige Beratung.
                </p>
              </div>
              <div className="flex flex-col gap-1 pt-2 border-t border-white/10">
                <span aria-hidden="true" className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500 invisible select-none">
                  bis zu
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-slate-500 line-through text-base font-mono">
                    €&thinsp;500
                  </span>
                  <span className="font-serif-display aurum-text text-5xl md:text-6xl font-medium leading-none">
                    €&thinsp;100
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500">
                  nach Förderung
                </span>
              </div>
              <ul className="text-slate-300 text-[14px] leading-relaxed list-none m-0 p-0 space-y-1.5 flex-grow">
                {[
                  "Website- &amp; Shop-Audit",
                  "Optimierungs-Empfehlungen",
                  "Conversion-Hebel identifizieren",
                  "2-stündige Strategie-Session",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="block w-1 h-1 rounded-full bg-aurum-soft mt-[8px] flex-shrink-0"
                    />
                    <span dangerouslySetInnerHTML={{ __html: f }} />
                  </li>
                ))}
              </ul>
              <Link
                href="#termin"
                className="inline-flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-lg font-bold text-brand-dark bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border border-aurum/60 hover:from-aurum hover:via-aurum-soft hover:to-aurum hover:border-aurum-soft transition-all shadow-[0_6px_20px_-8px_rgba(201,168,106,0.55)] hover:shadow-[0_10px_28px_-8px_rgba(201,168,106,0.7)]"
              >
                <span>Anfragen</span>
                <svg width="14" height="10" viewBox="0 0 18 14" aria-hidden="true">
                  <path
                    d="M1 7h15m0 0L10 1m6 6l-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </li>

            {/* Tile 2 */}
            <li className="relative p-7 md:p-8 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 flex flex-col gap-5 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-50"
              />
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center font-mono text-[10.5px] tracking-[0.20em] uppercase font-semibold text-aurum bg-aurum/15 border border-aurum/40 px-3 py-1.5 rounded-full">
                  50&thinsp;% WKO-Förderung
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500">
                  II
                </span>
              </div>
              <div>
                <h3 className="font-serif-display font-medium text-white text-3xl md:text-4xl tracking-[-0.02em] m-0">
                  Online-Strategie<span className="text-aurum">.</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-2 m-0">
                  Tagesworkshop oder zwei 4-Stunden-Sessions. Strategie-Dokument
                  inkl.
                </p>
              </div>
              <div className="flex flex-col gap-1 pt-2 border-t border-white/10">
                <span aria-hidden="true" className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500 invisible select-none">
                  bis zu
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-slate-500 line-through text-base font-mono">
                    €&thinsp;2.000
                  </span>
                  <span className="font-serif-display aurum-text text-5xl md:text-6xl font-medium leading-none">
                    €&thinsp;1.000
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500">
                  nach Förderung
                </span>
              </div>
              <ul className="text-slate-300 text-[14px] leading-relaxed list-none m-0 p-0 space-y-1.5 flex-grow">
                {[
                  "Individuelle Online-Roadmap",
                  "Channel- &amp; Funnel-Konzept",
                  "Marketing- &amp; Sales-Setup",
                  "Schriftliche Strategie-Dokumentation",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="block w-1 h-1 rounded-full bg-aurum-soft mt-[8px] flex-shrink-0"
                    />
                    <span dangerouslySetInnerHTML={{ __html: f }} />
                  </li>
                ))}
              </ul>
              <Link
                href="#termin"
                className="inline-flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-lg font-bold text-brand-dark bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border border-aurum/60 hover:from-aurum hover:via-aurum-soft hover:to-aurum hover:border-aurum-soft transition-all shadow-[0_6px_20px_-8px_rgba(201,168,106,0.55)] hover:shadow-[0_10px_28px_-8px_rgba(201,168,106,0.7)]"
              >
                <span>Anfragen</span>
                <svg width="14" height="10" viewBox="0 0 18 14" aria-hidden="true">
                  <path
                    d="M1 7h15m0 0L10 1m6 6l-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </li>

            {/* Tile 3 */}
            <li className="relative p-7 md:p-8 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 flex flex-col gap-5 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-50"
              />
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center font-mono text-[10.5px] tracking-[0.20em] uppercase font-semibold text-aurum bg-aurum/15 border border-aurum/40 px-3 py-1.5 rounded-full">
                  WKO-Förderung
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500">
                  III
                </span>
              </div>
              <div>
                <h3 className="font-serif-display font-medium text-white text-3xl md:text-4xl tracking-[-0.02em] m-0">
                  Umsetzung<span className="text-aurum">.</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-2 m-0">
                  Begleitete Strategie-Umsetzung &mdash; mit unserem Team oder
                  Ihrem Wunsch-Partner.
                </p>
              </div>
              <div className="flex flex-col gap-1 pt-2 border-t border-white/10">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500">
                  bis zu
                </span>
                <span className="font-serif-display aurum-text text-5xl md:text-6xl font-medium leading-none">
                  €&thinsp;6.000
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500">
                  Förderung möglich
                </span>
              </div>
              <ul className="text-slate-300 text-[14px] leading-relaxed list-none m-0 p-0 space-y-1.5 flex-grow">
                {[
                  "Technische Umsetzung",
                  "Shop- &amp; CMS-Integration",
                  "Conversion-Optimierung",
                  "Marketing- &amp; Sales-Aktivierung",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="block w-1 h-1 rounded-full bg-aurum-soft mt-[8px] flex-shrink-0"
                    />
                    <span dangerouslySetInnerHTML={{ __html: f }} />
                  </li>
                ))}
              </ul>
              <Link
                href="#termin"
                className="inline-flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-lg font-bold text-brand-dark bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border border-aurum/60 hover:from-aurum hover:via-aurum-soft hover:to-aurum hover:border-aurum-soft transition-all shadow-[0_6px_20px_-8px_rgba(201,168,106,0.55)] hover:shadow-[0_10px_28px_-8px_rgba(201,168,106,0.7)]"
              >
                <span>Anfragen</span>
                <svg width="14" height="10" viewBox="0 0 18 14" aria-hidden="true">
                  <path
                    d="M1 7h15m0 0L10 1m6 6l-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </li>
          </ol>
        </div>
      </section>

      {/* WAS SIE DAVON HABEN ────────────────────── */}
      <section className="relative py-20 md:py-24 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#08050f] to-brand-dark" />
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(201,168,106,0.10), transparent 55%), radial-gradient(ellipse at 80% 100%, rgba(168,136,69,0.08), transparent 55%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-5">
              <AurumSeal size={22} />
              <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-aurum/85 font-semibold">
                Was Sie davon haben
              </span>
            </div>
            <h2 className="font-serif-display font-medium text-white text-4xl md:text-5xl lg:text-6xl leading-[1.06] tracking-[-0.02em] m-0">
              Drei Hebel,{" "}
              <em className="aurum-text not-italic font-medium">die ziehen</em>.
            </h2>
          </header>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 list-none m-0 p-0">
            {[
              {
                num: "01",
                title: "Neue Kunden, planbar.",
                body: "Wir bauen den Funnel, der konstant qualifizierte Neukunden generiert — statt Glücks-Kampagnen.",
              },
              {
                num: "02",
                title: "Höhere Umsätze pro Besucher.",
                body: "Jeder Klick aufs Maximum ausgereizt: Conversion, Warenkorbwert, Wiederkäufe.",
              },
              {
                num: "03",
                title: "Bestandskunden, die bleiben.",
                body: "Funnel-Logik nach dem Kauf: Reaktivierung, Bewertungen, Cross-Sell — automatisiert.",
              },
            ].map((b) => (
              <li
                key={b.num}
                className="relative p-7 md:p-8 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 flex flex-col gap-3 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-40"
                />
                <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-aurum/85 font-semibold">
                  N° {b.num}
                </span>
                <h3 className="font-serif-display font-medium text-white text-2xl md:text-3xl tracking-[-0.02em] m-0">
                  {b.title}
                </h3>
                <p className="text-slate-300 text-[15px] leading-relaxed m-0">
                  {b.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* AI-EDGE ──── Was uns unterscheidet ─── */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#08050f] to-brand-dark" />
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 50% 25%, rgba(201,168,106,0.10), transparent 55%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-4xl mx-auto mb-14 md:mb-16">
            <div className="flex justify-center mb-6">
              <AurumFlower size={28} />
            </div>
            <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-6">
              Was uns unterscheidet
            </div>
            <h2 className="font-serif-display font-medium text-white text-4xl md:text-5xl lg:text-6xl leading-[1.06] tracking-[-0.02em] m-0">
              Wir sind keine reine E-Commerce-Agentur. Wir sind eine{" "}
              <em className="aurum-text not-italic font-medium">AI-Agentur</em>,
              die E-Commerce baut
              <span className="text-aurum">.</span>
            </h2>
            <div className="mt-8">
              <AurumDivider />
            </div>
            <p className="mt-7 font-serif-display italic text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Unsere Schwester-Marke{" "}
              <em className="aurum-text not-italic font-semibold">
                Glockner&nbsp;AI
              </em>{" "}
              baut KI-Software, KI-Agents und Marketing-Maschinen für KMU. Dieser
              Stack fließt direkt in Ihren Webshop &mdash; vom ersten Visual bis
              zum letzten Verkaufs-Funnel.
            </p>
          </header>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 list-none m-0 p-0">
            {[
              {
                num: "01",
                tag: "Stack",
                title: "AI-Agentur als DNA",
                body:
                  "Glockner AI ist unsere Schwester-Marke. Wir bauen täglich KI-Software, Agents und Automationen — und bringen genau dieses Wissen in Ihren Shop.",
              },
              {
                num: "02",
                tag: "Design",
                title: "Webshop-Design mit AI",
                body:
                  "Konzept, Visuals, UX-Iterationen mit KI-Tools entwickelt. Schneller, datengetrieben, getestet bevor es online geht.",
              },
              {
                num: "03",
                tag: "Marketing",
                title: "AI-Performance Marketing",
                body:
                  "Kampagnen, Creatives, Copy und Audiences mit AI-Pipelines. Was Mitbewerber in 2 Wochen testen, drehen wir an einem Tag.",
              },
              {
                num: "04",
                tag: "Tech",
                title: "Modernste Technologie",
                body:
                  "Plenty One Multi-Channel, Headless Shopify, AI-Customer-Service-Agents — Stand 2026, nicht 2018.",
              },
            ].map((p) => (
              <li
                key={p.num}
                className="relative p-6 md:p-7 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 flex flex-col gap-3 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-40"
                />
                <div className="flex items-center justify-between">
                  <span className="font-serif-display aurum-text text-3xl md:text-4xl font-medium leading-none">
                    {p.num}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.20em] uppercase text-slate-500 font-semibold">
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-serif-display font-medium text-white text-xl md:text-2xl tracking-[-0.02em] m-0 mt-2">
                  {p.title}
                </h3>
                <p className="text-slate-300 text-[14px] leading-relaxed m-0">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SALES-CHANNELS & PLATTFORMEN ──────────────── */}
      <section className="relative py-20 md:py-24 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#08050f] to-brand-dark" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
            <div className="flex justify-center mb-5">
              <AurumFlower size={26} />
            </div>
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-aurum/85 font-semibold mb-5">
              Sales-Channels &amp; Plattformen
            </div>
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              Verkaufen, wo Ihre Kunden{" "}
              <em className="aurum-text not-italic font-medium">wirklich kaufen</em>.
            </h2>
            <div className="mt-7">
              <AurumDivider />
            </div>
            <p className="font-serif-display italic text-slate-300 text-lg md:text-xl mt-7 leading-relaxed">
              Ein zentrales System &mdash; alle Kanäle. Inventar, Preise,
              Bestellungen synchron.
            </p>
          </header>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 list-none m-0 p-0">
            {/* Shopify */}
            <li className="relative p-7 md:p-8 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 flex flex-col gap-4 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-50"
              />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-aurum/85 font-semibold">
                  Eigener Shop
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500">
                  I
                </span>
              </div>
              <h3 className="font-serif-display font-medium text-white text-3xl md:text-4xl tracking-[-0.02em] m-0">
                Shopify<span className="text-aurum">.</span>
              </h3>
              <p className="text-slate-300 text-[15px] leading-relaxed m-0">
                Ihr eigener Webshop &mdash; eigene Marke, eigener Checkout, eigene
                Kundendaten. Volle Kontrolle, kein Marktplatz-Mittelsmann.
              </p>
              <ul className="text-slate-400 text-[14px] leading-relaxed list-none m-0 p-0 space-y-1.5 mt-2">
                {[
                  "Theme-Setup & Conversion-Tuning",
                  "App- & Payment-Integration",
                  "Internationaler Multi-Store-Aufbau",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="block w-1 h-1 rounded-full bg-aurum-soft mt-[8px] flex-shrink-0"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </li>

            {/* Amazon */}
            <li className="relative p-7 md:p-8 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 flex flex-col gap-4 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-50"
              />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-aurum/85 font-semibold">
                  Marktplatz
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500">
                  II
                </span>
              </div>
              <h3 className="font-serif-display font-medium text-white text-3xl md:text-4xl tracking-[-0.02em] m-0">
                Amazon<span className="text-aurum">.</span>
              </h3>
              <p className="text-slate-300 text-[15px] leading-relaxed m-0">
                Der größte Marktplatz Europas &mdash; täglich Millionen Such&shy;anfragen
                mit Kaufabsicht. Wir bringen Ihre Produkte sichtbar nach oben.
              </p>
              <ul className="text-slate-400 text-[14px] leading-relaxed list-none m-0 p-0 space-y-1.5 mt-2">
                {[
                  "Listing-Optimierung & A+ Content",
                  "PPC-Kampagnen & ACoS-Tuning",
                  "FBA- & Logistik-Setup",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="block w-1 h-1 rounded-full bg-aurum-soft mt-[8px] flex-shrink-0"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </li>

            {/* Plenty One — central */}
            <li className="relative mt-3 p-7 md:p-8 rounded-2xl border-2 border-aurum/40 bg-gradient-to-b from-aurum/[0.05] via-brand-card to-brand-card hover:border-aurum/60 hover:-translate-y-1 transition-all duration-500 flex flex-col gap-4 shadow-[0_0_40px_-20px_rgba(201,168,106,0.4)]">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center whitespace-nowrap font-mono text-[10px] tracking-[0.22em] uppercase font-bold text-brand-dark bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border border-aurum/60 px-3 py-1 rounded-full shadow-[0_4px_20px_-4px_rgba(201,168,106,0.5)]"
              >
                Zentrale Steuerung
              </span>
              <div className="flex items-center justify-between mt-2">
                <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-aurum/85 font-semibold">
                  Multi-Channel-System
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500">
                  III
                </span>
              </div>
              <h3 className="font-serif-display font-medium text-white text-3xl md:text-4xl tracking-[-0.02em] m-0">
                Plenty One<span className="text-aurum">.</span>
              </h3>
              <p className="text-slate-300 text-[15px] leading-relaxed m-0">
                Wir managen Ihren E-Commerce <em>zentral</em> mit Plenty One
                &mdash; ein System für alle Kanäle: Inventar, Preise,
                Bestellungen, Versand &mdash; vollständig synchronisiert.
              </p>
              <ul className="text-slate-400 text-[14px] leading-relaxed list-none m-0 p-0 space-y-1.5 mt-2">
                {[
                  "Multi-Channel-Sync (Shop + Marktplätze)",
                  "Echtzeit-Bestand über alle Kanäle",
                  "Automatisierte Auftrags- & Versand-Workflows",
                  "Buchhaltungs- & DATEV-Integration",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="block w-1 h-1 rounded-full bg-aurum-soft mt-[8px] flex-shrink-0"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* ZERTIFIZIERUNGEN ──── editorial spread + wax-seal cards ──── */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#08050f] to-brand-dark" />
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 50% 25%, rgba(201,168,106,0.10), transparent 55%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Editorial header — asymmetric 12-col grid */}
          <header className="grid lg:grid-cols-12 gap-x-8 gap-y-6 items-end mb-16 md:mb-20">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="block w-10 h-px bg-gradient-to-r from-transparent to-aurum/60"
                />
                <span className="font-mono text-[10.5px] tracking-[0.28em] uppercase text-aurum/85 font-semibold">
                  § Zertifizierungen
                </span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <h2 className="font-serif-display font-medium text-white text-4xl md:text-5xl lg:text-6xl leading-[1.04] tracking-[-0.02em] m-0">
                Geprüfte{" "}
                <em className="aurum-text not-italic font-medium">Expertise</em>{" "}
                &mdash; geförderte Beratung
                <span className="text-aurum">.</span>
              </h2>
              <p className="mt-6 font-serif-display italic text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
                Akkreditierungen, die nicht nur an der Wand hängen &mdash; sondern
                Ihre Investition direkt um bis zu{" "}
                <em className="aurum-text not-italic font-semibold">
                  80&thinsp;%
                </em>{" "}
                kleiner machen.
              </p>
            </div>
          </header>

          {/* Trust strip — official cert logos, monochrome white-on-transparent */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 justify-center mb-7">
              <span aria-hidden="true" className="block w-12 h-px bg-gradient-to-r from-transparent to-aurum/50" />
              <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-aurum/80 font-semibold">
                Offiziell akkreditiert
              </span>
              <span aria-hidden="true" className="block w-12 h-px bg-gradient-to-l from-transparent to-aurum/50" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20 opacity-70 hover:opacity-95 transition-opacity duration-500">
              <Image
                src="/cert/wko-kmu-bundesministerium.webp"
                alt="WKO · KMU.DIGITAL · Bundesministerium für Arbeit und Wirtschaft"
                width={480}
                height={125}
                className="h-12 md:h-14 w-auto"
                sizes="(min-width: 768px) 320px, 240px"
              />
              <span aria-hidden="true" className="hidden md:block w-px h-10 bg-gradient-to-b from-transparent via-aurum/30 to-transparent" />
              <Image
                src="/cert/cecc.webp"
                alt="CeCC — Certified eCommerce & Social Media Consultant"
                width={360}
                height={147}
                className="h-12 md:h-14 w-auto"
                sizes="(min-width: 768px) 200px, 160px"
              />
            </div>
          </div>

          {/* Two large credential cards */}
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 list-none m-0 p-0">
            {[
              {
                roman: "I",
                topInscription: "WKO AUSTRIA",
                bottomInscription: "ZERTIFIZIERT",
                tag: "WKO Austria",
                title: "Certified eCommerce Consultant",
                body:
                  "Akkreditierter Berater der Wirtschaftskammer Österreich für E-Commerce-Strategie und Online-Handel &mdash; geprüft nach dem WIFI-Curriculum.",
                footer: "Direkt-Verzeichnis",
                footerValue: "wko.at",
              },
              {
                roman: "II",
                topInscription: "KMU DIGITAL",
                bottomInscription: "FÖRDERPARTNER",
                tag: "KMU-Digital",
                title: "Offizieller Förderpartner",
                body:
                  "Anerkannter Partner für die KMU-Digital-Förderung der WKO &mdash; bis zu 80&thinsp;% Beratungs-Förderung, bis zu €&thinsp;6.000 Umsetzungs-Förderung.",
                footer: "Förderprogramm",
                footerValue: "kmudigital.at",
              },
            ].map((c, i) => (
              <li
                key={i}
                className="group relative rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/50 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                {/* Aurum corner glow */}
                <div
                  aria-hidden="true"
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-aurum/10 blur-3xl opacity-50 group-hover:opacity-90 transition-opacity duration-700"
                />
                {/* Top gold rule */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-50"
                />
                {/* Floating Roman numeral watermark */}
                <span
                  aria-hidden="true"
                  className="font-serif-display absolute right-7 -bottom-6 text-aurum/[0.08] text-[160px] font-medium leading-none select-none pointer-events-none italic"
                >
                  {c.roman}
                </span>

                <div className="relative p-8 md:p-10 flex flex-col items-center text-center gap-6">
                  {/* Wax seal */}
                  <WaxSeal
                    centerLabel={c.roman}
                    topText={c.topInscription}
                    size={120}
                  />

                  {/* Tag */}
                  <span className="font-mono text-[10.5px] tracking-[0.24em] uppercase text-aurum/85 font-semibold">
                    {c.tag}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif-display font-medium text-white text-2xl md:text-3xl tracking-[-0.02em] leading-[1.15] m-0 max-w-sm">
                    {c.title}
                  </h3>

                  {/* Body */}
                  <p
                    className="text-slate-300 text-[15px] leading-relaxed m-0 max-w-md"
                    dangerouslySetInnerHTML={{ __html: c.body }}
                  />

                  {/* Footer rule */}
                  <div className="w-full pt-5 mt-2 border-t border-white/10 flex items-center justify-between font-mono text-[10.5px] tracking-[0.18em] uppercase font-semibold">
                    <span className="text-slate-500">{c.footer}</span>
                    <span className="text-aurum">{c.footerValue}</span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS ──────────────────────────── */}
      <section className="relative py-20 md:py-24 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#08050f] to-brand-dark" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex justify-center mb-5">
              <AurumFlower size={26} />
            </div>
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-aurum/85 font-semibold mb-5">
              Kundenstimmen
            </div>
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              Was unsere Kunden{" "}
              <em className="aurum-text not-italic font-medium">sagen</em>.
            </h2>
          </header>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 list-none m-0 p-0">
            {[
              {
                quote:
                  "Ein besonderes Dankeschön für deine wertvolle und geschätzte Unterstützung bei der Strategie-Ausarbeitung.",
                name: "Katharina",
                role: "Steuerberaterin · Klagenfurt",
              },
              {
                quote:
                  "Professionell organisierter Workshop, immer erreichbar — fundierte Einschätzungen, die wir sofort umsetzen konnten.",
                name: "Dana",
                role: "Social-Media-Agentur · Wien",
              },
              {
                quote:
                  "Sehr hochwertige Inhalte, die wirklich auf unsere Webshop-Realität zugeschnitten waren. Klarer Mehrwert.",
                name: "Kirsten",
                role: "Webshop-Betreiberin · Wien",
              },
            ].map((t, i) => (
              <li
                key={i}
                className="relative p-7 md:p-8 rounded-2xl border border-white/10 bg-brand-card flex flex-col gap-4 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-40"
                />
                <Stars />
                <blockquote className="font-serif-display italic text-slate-200 text-[17px] leading-relaxed m-0">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-auto pt-3 border-t border-white/10">
                  <div className="font-serif-display text-white font-semibold text-[15px]">
                    {t.name}
                  </div>
                  <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-slate-500 mt-1">
                    {t.role}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TERMIN ─────────────────────────────────── */}
      <section
        id="termin"
        className="relative py-20 md:py-28 overflow-hidden border-t border-white/5 scroll-mt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#08050f] to-brand-dark" />
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(201,168,106,0.12), transparent 55%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
            <div className="flex justify-center mb-6">
              <AurumFlower size={32} />
            </div>
            <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-5">
              Erstberatung sichern
            </div>
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              30 Minuten reichen, um zu sehen, wo bei Ihnen der{" "}
              <em className="aurum-text not-italic font-medium">
                größte Hebel
              </em>{" "}
              liegt.
            </h2>
            <div className="mt-7">
              <AurumDivider />
            </div>
            <p className="font-serif-display italic text-slate-300 text-lg md:text-xl mt-7 leading-relaxed">
              Kostenlos und unverbindlich. WKO-zertifiziert, KMU-Digital-Partner.
            </p>
          </header>

          <div>
            <BookingWidget
              eyebrow="Erstberatung"
              hostName="Glockner Digital"
              promise="Wir analysieren in 30 Minuten, welcher Hebel in Ihrem Online-Geschäft am schnellsten Umsatz bringt."
            />


          </div>
        </div>
      </section>
    </>
  );
}
