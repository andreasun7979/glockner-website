import type { Metadata } from "next";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: { absolute: "Digital-Marketing für Ärzte & Gesundheit | Glockner Digital" },
  description:
    "Digital-Marketing für Ärzte, Praxen & Gesundheitsbetriebe: regional sichtbar werden, Vertrauen aufbauen, Telefonarbeit reduzieren. DSGVO-konform.",
  alternates: { canonical: "/digital/gesundheit" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Digital-Marketing für Ärzte & Gesundheit | Glockner Digital",
    description:
      "Digital-Marketing für Ärzte, Praxen & Gesundheitsbetriebe: Vertrauen aufbauen, regional sichtbar werden, Telefonarbeit reduzieren. DSGVO-konform, WKO-gefördert.",
    url: "/digital/gesundheit",
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

export default function DigitalGesundheitPage() {
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
            Beratung &nbsp;<span className="text-aurum">·</span>&nbsp; Gesundheit
          </div>

          <h1 className="font-serif-display font-medium text-white text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-[-0.025em] m-0">
            Für Patienten, die{" "}
            <em className="aurum-text not-italic font-medium">vertrauen</em>
            <span className="text-aurum">.</span>
          </h1>

          <div className="mt-10 mb-8">
            <AurumDivider width="wide" />
          </div>

          <p className="font-serif-display italic text-slate-200 text-xl md:text-2xl leading-snug tracking-tight max-w-3xl mx-auto m-0">
            Digitale Strategie für Ärzte, Kliniken &amp; Apotheken &mdash;{" "}
            <span className="aurum-text not-italic font-semibold">
              DSGVO-konform, vertrauensbildend, regional sichtbar
            </span>
            .
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-5 text-[11px] tracking-[0.16em] uppercase font-mono font-semibold text-slate-400">
            <span className="px-3 py-1.5 border border-aurum/30 rounded-full bg-aurum/5">
              DSGVO-konform
            </span>
            <span className="px-3 py-1.5 border border-aurum/30 rounded-full bg-aurum/5">
              EU-Server only
            </span>
            <span className="px-3 py-1.5 border border-aurum/30 rounded-full bg-aurum/5">
              KMU-Digital Partner
            </span>
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
            Gesundheit ist{" "}
            <em className="aurum-text not-italic">Vertrauenssache</em>. Wir
            machen Sie online so{" "}
            <em className="aurum-text not-italic">vertrauenswürdig</em>, wie
            Sie es{" "}
            <em className="not-italic gradient-text">in der Praxis schon sind</em>.
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
              <em className="aurum-text not-italic font-medium">30&thinsp;%</em>{" "}
              Glockner Förderrabatt
              <span className="text-aurum">.</span>
            </h2>
            <div className="mt-8">
              <AurumDivider />
            </div>
            <p className="font-serif-display italic text-slate-300 text-lg md:text-xl mt-8 leading-relaxed">
              Vom Status-Audit bis zur Umsetzungs-Begleitung &mdash; mit 30 %
              Glockner Förderrabatt auf jedes Modul.
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
                  30&thinsp;% Glockner Förderrabatt
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
                  Website- &amp; Praxis-Sichtbarkeits-Check. DSGVO-Audit
                  inklusive.
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
                    €&thinsp;350
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500">
                  nach Rabatt
                </span>
              </div>
              <ul className="text-slate-300 text-[14px] leading-relaxed list-none m-0 p-0 space-y-1.5 flex-grow">
                {[
                  "Website- &amp; SEO-Audit",
                  "DSGVO-Compliance-Check",
                  "Patienten-Pfad analysieren",
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
                  30&thinsp;% Glockner Förderrabatt
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
                  Sichtbarkeits- &amp; Vertrauens-Roadmap, Patienten-Funnel,
                  Bewertungs-Strategie.
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
                    €&thinsp;1.400
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500">
                  nach Rabatt
                </span>
              </div>
              <ul className="text-slate-300 text-[14px] leading-relaxed list-none m-0 p-0 space-y-1.5 flex-grow">
                {[
                  "Patienten-Sichtbarkeits-Roadmap",
                  "Bewertungs- &amp; Empfehlungs-System",
                  "DSGVO-konforme Online-Kommunikation",
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
                  30&thinsp;% Glockner Förderrabatt
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
                  Praxis-Website, Buchungssystem, Bewertungen &mdash;
                  begleitete Implementierung.
                </p>
              </div>
              <div className="flex flex-col gap-1 pt-2 border-t border-white/10">
                <span aria-hidden="true" className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500 invisible select-none">
                  Rabatt
                </span>
                <span className="font-serif-display aurum-text text-5xl md:text-6xl font-medium leading-none">
                  30&thinsp;%
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500">
                  Glockner Förderrabatt
                </span>
              </div>
              <ul className="text-slate-300 text-[14px] leading-relaxed list-none m-0 p-0 space-y-1.5 flex-grow">
                {[
                  "Praxis-Website neu",
                  "Online-Termin-Buchung",
                  "Patienten-Bewertungs-Outreach",
                  "DSGVO-konforme Integration",
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
                title: "Vertrauen vor dem ersten Termin.",
                body: "Eine Online-Präsenz, die Patienten überzeugt, bevor sie das Wartezimmer betreten — Bewertungen, Kompetenz, Klarheit.",
              },
              {
                num: "02",
                title: "Sichtbar in der Region.",
                body: "Wenn jemand in Ihrer Stadt nach Hausarzt, Apotheke oder Ihrem Fachgebiet sucht — werden Sie zuerst gefunden.",
              },
              {
                num: "03",
                title: "Weniger Telefonarbeit, mehr Patientenzeit.",
                body: "Online-Buchung, automatische Erinnerungen, Bewertungs-Outreach &mdash; Ihr Team kann sich auf das konzentrieren, was zählt.",
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
        className="relative pt-20 md:pt-24 pb-12 md:pb-16 overflow-hidden border-t border-white/5 scroll-mt-24"
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
              Kostenlos und unverbindlich · 30 % Glockner Förderrabatt.
            </p>
          </header>

          <div>
            <BookingWidget
              eyebrow="Erstberatung"
              hostName="Glockner Digital"
              promise="Wir analysieren in 30 Minuten, wie Ihre Praxis online so vertrauenswürdig wird, wie Sie es vor Ort schon sind."
            />

          </div>
        </div>
      </section>
    </>
  );
}
