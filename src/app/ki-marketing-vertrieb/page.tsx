import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";

// "Money Making AI" — Unterseite (im Menü verlinkt). Seit dem v2-Launch ist
// /v2 die Startseite (Rewrite "/"→"/v2"); diese Seite trägt daher einen
// eigenen Canonical auf /ki-marketing-vertrieb.
export const metadata: Metadata = {
  title: { absolute: "Money Making AI — KI für mehr Umsatz | Glockner AI" },
  description:
    "Money Making AI von Glockner AI: Wie Künstliche Intelligenz zum Umsatzmotor Ihres Unternehmens wird — Website, Webshop, Chatbot, Voice & mehr. Für KMU in Österreich, bis zu 80 % WKO-Förderung.",
  alternates: { canonical: "/ki-marketing-vertrieb" },
  openGraph: {
    title: "Money Making AI — KI für mehr Umsatz | Glockner AI",
    description:
      "Wie Künstliche Intelligenz zum Umsatzmotor Ihres Unternehmens wird. Für KMU in Österreich.",
    url: "/ki-marketing-vertrieb",
  },
};

type Card = {
  tag: string;
  kind: string;
  name: string;
  what: React.ReactNode;
  result?: React.ReactNode;
  cta?: string;
  soon?: boolean;
  /** Cross-references to Glockner-Digital sub-brand landing pages. */
  seeAlso?: { href: string; label: string }[];
};

const fundament: Card[] = [
  {
    tag: "F.01",
    kind: "Audit",
    name: "AI Consulting Audit & Strategie",
    what: (
      <>
        Umsatz finden, der im Geschäft <em>liegen bleibt</em>.
      </>
    ),
  },
  {
    tag: "F.02",
    kind: "Knowledge",
    name: "Knowledge Base",
    what: (
      <>
        Die Wissensdatenbank &mdash; das <em>Herzstück</em>{" "}
        Ihres Unternehmens. Ihr Wissen, strukturiert für KI &mdash; die
        Grundlage aller KI-Agents.
      </>
    ),
    result: (
      <>
        Erst durch die Wissensdatenbank ist{" "}
        <span className="font-mono text-brand-cyan">sinnvolle</span>{" "}
        Automatisierung im KI-Zeitalter möglich.
      </>
    ),
  },
  {
    tag: "F.03",
    kind: "Brand",
    name: "Brand Voice Magic",
    what: (
      <>
        Niemand baut eine Beziehung zu einem Unternehmen auf &mdash; sondern zu
        einer Person oder dem <em>attraktiven Charakter</em> einer Marke.
      </>
    ),
    result: (
      <>
        Wir geben Ihrer KI eine individuelle Stimme &mdash; jene Ihrer{" "}
        <span className="font-mono text-brand-cyan">attraktiven Marke</span>.
      </>
    ),
  },
  {
    tag: "F.04",
    kind: "Story",
    name: "Story Extractor",
    what: (
      <>
        Menschen kaufen keine Fakten &mdash; sie kaufen die eine{" "}
        <em>Geschichte</em>, die ihre Zweifel auflöst. Der Story Extractor holt
        aus Interviews, Sprachaufnahmen und Dokumenten Ihre stärksten
        Verkaufs-Geschichten heraus (Epiphany Bridge).
      </>
    ),
    result: (
      <>
        Ein Story-Vault, der in jeder Mail, jedem Reel und jedem Angebot
        denselben{" "}
        <span className="font-mono text-brand-cyan">Aha-Moment</span> auslöst
        &mdash; und Skepsis in Vertrauen verwandelt.
      </>
    ),
  },
];

const design: Card[] = [
  {
    tag: "D.01",
    kind: "Website",
    name: "Converting Website",
    what: (
      <>
        Eine schöne Website reicht nicht. Sie muss <em>führen</em>: vom ersten
        Klick bis zur Anfrage. Wir bauen genau das &mdash; schnell, mobil,
        SEO-fertig.
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan">Mehr Geld mit KI</span>{" "}
        &mdash; qualifizierte Anfragen statt schöner Statistik.
      </>
    ),
    seeAlso: [
      { href: "/digital/gewerbe", label: "Gewerbebetriebe" },
      { href: "/digital/gesundheit", label: "Ärzte, Kliniken & Apotheken" },
    ],
  },
  {
    tag: "D.02",
    kind: "Webshop",
    name: "Converting Webshop",
    what: (
      <>
        Die meisten Webshops sind digitale Kataloge. Wir bauen{" "}
        <em>Funnels, die verkaufen</em> &mdash; vom ersten Hook bis zum Upsell.
        Jeder Schritt auf maximalen Warenkorbwert getrimmt.
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan">Mehr Geld mit KI</span>{" "}
        &mdash; höherer Warenkorb, weniger Abbruch, mehr Wiederkäufe.
      </>
    ),
    seeAlso: [
      { href: "/digital/ecommerce", label: "E-Commerce" },
    ],
  },
  {
    tag: "D.03",
    kind: "Multi-Screen",
    name: "Multiple Screens Magic",
    what: (
      <>
        Eine Seite kann nicht für jeden passen. Wir bauen{" "}
        <em>mehrere Versionen</em> &mdash; für Mobile, für Werbeklicks, für
        Stammkunden. Jeder Besucher sieht den Screen, der ihn abholt.
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan">Mehr Geld mit KI</span>{" "}
        &mdash; höhere Conversion, weil jede Zielgruppe ihre eigene Version
        bekommt.
      </>
    ),
  },
  {
    tag: "D.04",
    kind: "A/B Testing",
    name: "Split Testing Magic",
    what: (
      <>
        Hören Sie auf zu raten, was funktioniert.{" "}
        <em>Wir lassen zwei Versionen gegeneinander antreten</em> &mdash; der
        Markt entscheidet, welche gewinnt.
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan">Mehr Geld mit KI</span>{" "}
        &mdash; gleicher Traffic, mehr Verkäufe.
      </>
    ),
  },
];

const marketing: Card[] = [
  {
    tag: "M.01",
    kind: "Bauen",
    name: "Custom Software Magic",
    what: (
      <>
        Keine Software &mdash; oder Standard-Tools, die nicht passen? Wir bauen
        die KI-Software <em>für Ihre Prozesse</em>.
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan">Mehr Geld mit KI</span>{" "}
        &mdash; Prozesse laufen von selbst, ohne mehr Personal.
      </>
    ),
  },
  {
    tag: "M.02",
    kind: "Reaktivieren",
    name: "E-Mail Magic",
    what: (
      <>
        Alte Kunden kaufen wieder. Vergessene Leads springen endlich an. Ihre
        Liste hat <em>mehr Umsatz, als Sie denken</em>.
      </>
    ),
  },
  {
    tag: "M.03",
    kind: "Vertrieb",
    name: "Dream 100 Magic",
    what: (
      <>
        50&ndash;100 Partner mit Ihrer exakten Zielgruppe.{" "}
        <em>Recherchiert von KI, angeschrieben von KI</em>. Sie übernehmen erst
        beim qualifizierten Gespräch.
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan">Mehr Geld mit KI</span>{" "}
        &mdash; qualifizierte Leads, ohne Ad-Budget.
      </>
    ),
  },
  {
    tag: "M.04",
    kind: "Sichtbarkeit",
    name: "SEO & GEO Magic",
    what: (
      <>
        Ihre Kunden fragen nicht mehr nur Google. Sie fragen ChatGPT,
        Perplexity, Claude.{" "}
        <em>Wir sorgen dafür, dass überall Sie die Antwort sind</em>.
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan">Mehr Geld mit KI</span>{" "}
        &mdash; gefunden werden, ohne Ad-Budget.
      </>
    ),
  },
  {
    tag: "M.05",
    kind: "Service · 24/7",
    name: "AI Chatbot Magic",
    what: (
      <>
        Ihr eigener KI-Chatbot &mdash; gefüttert mit Ihren Files, URLs und{" "}
        <em>Live-Daten aus Datenbanken</em>. Antwortet rund um die Uhr auf
        Ihrer Website, qualifiziert vor &mdash; und übergibt nahtlos an
        echte Menschen, auf Wunsch oder wenn er Fragen nicht mehr
        beantworten kann.
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan">Mehr Geld mit KI</span>{" "}
        &mdash; kein Lead bleibt liegen, keine Frage unbeantwortet.
      </>
    ),
  },
  {
    tag: "M.06",
    kind: "Sales · Voice",
    name: "Voice Agents Magic",
    what: (
      <>
        Drei Anrufe, die Sie ungern selbst machen: nach Bewertungen fragen,
        alte Kunden zurückholen, neue Leads qualifizieren.{" "}
        <em>Übernimmt jetzt die KI &mdash; in Ihrer Stimme</em>.
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan">Mehr Geld mit KI</span>{" "}
        &mdash; mehr Reviews, mehr Wiederkäufe, mehr Verkäufe.
      </>
    ),
  },
  {
    tag: "M.07",
    kind: "Content · Demnächst",
    name: "Social Magic",
    what: (
      <>
        Voller Content-Kalender &mdash;{" "}
        <em>Skripte, Captions, Hooks, Posts</em>.
      </>
    ),
    result: <>In Vorbereitung</>,
    soon: true,
  },
];

/* ---------- Sacred geometry ornaments (inline SVG) ---------- */

function Triquetra({
  size = 36,
  className = "",
  glowing = false,
}: {
  size?: number;
  className?: string;
  glowing?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="triquetra-grad" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#d8bd8a" />
          <stop offset="55%" stopColor="#c9a86a" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        {glowing && (
          <radialGradient id="triquetra-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0e0b8" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#d8bd8a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#c9a86a" stopOpacity="0" />
          </radialGradient>
        )}
      </defs>

      <circle cx="50" cy="38" r="22" stroke="url(#triquetra-grad)" strokeWidth="0.9" opacity="0.85" />
      <circle cx="34" cy="62" r="22" stroke="url(#triquetra-grad)" strokeWidth="0.9" opacity="0.85" />
      <circle cx="66" cy="62" r="22" stroke="url(#triquetra-grad)" strokeWidth="0.9" opacity="0.85" />

      {glowing && (
        <>
          {/* Outer halo — large, soft, slow pulse with offset timing */}
          <circle
            cx="50"
            cy="50"
            r="14"
            fill="url(#triquetra-core-glow)"
            className="aurum-pulse-halo"
          />
          {/* Bright core — small dot, faster pulse */}
          <circle
            cx="50"
            cy="50"
            r="2.5"
            fill="#f0e0b8"
            className="aurum-pulse-core"
          />
        </>
      )}
    </svg>
  );
}

function VesicaSeal({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size * 1.6}
      height={size}
      viewBox="0 0 80 50"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="32" cy="25" r="18" stroke="#c9a86a" strokeWidth="0.7" opacity="0.75" />
      <circle cx="48" cy="25" r="18" stroke="#06b6d4" strokeWidth="0.7" opacity="0.75" />
    </svg>
  );
}

function GoldDivider({ width = "narrow" }: { width?: "narrow" | "wide" }) {
  const w =
    width === "wide"
      ? "w-24 md:w-40"
      : "w-12 md:w-20";
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className={`block ${w} h-px bg-gradient-to-r from-transparent to-aurum/55`} />
      <span className="block w-1.5 h-1.5 rounded-full bg-aurum shadow-[0_0_12px_rgba(201,168,106,0.6)]" />
      <span className={`block ${w} h-px bg-gradient-to-l from-transparent to-aurum/55`} />
    </div>
  );
}

function FlowerOfLifeBackdrop({ className = "" }: { className?: string }) {
  // Background ornament — flower of life partial pattern, very faint
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="#c9a86a" strokeWidth="0.4" opacity="0.18">
        {(() => {
          const r = 60;
          const dx = r * Math.sqrt(3);
          const dy = r * 1.5;
          const circles: { cx: number; cy: number }[] = [];
          for (let row = -3; row <= 3; row++) {
            for (let col = -3; col <= 3; col++) {
              const cx = 300 + col * dx + (row % 2 === 0 ? 0 : dx / 2);
              const cy = 300 + row * dy;
              circles.push({ cx, cy });
            }
          }
          return circles.map((c, i) => (
            <circle key={i} cx={c.cx} cy={c.cy} r={r} />
          ));
        })()}
      </g>
    </svg>
  );
}

/* ---------- Pillar image — circular gold-ring frame ---------- */

type PillarImage = {
  src: string;
  alt: string;
};

function PillarSeal({ image }: { image: PillarImage }) {
  return (
    <div className="relative w-36 md:w-44 aspect-square">
      {/* Outer slow rotating gold ring */}
      <div
        aria-hidden="true"
        className="absolute inset-[-10px] aurum-ring aurum-rotate-slow opacity-80"
      />
      {/* Inner gold ring (static, sharp) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(201,168,106,0.35), rgba(201,168,106,0.9), rgba(6,182,212,0.6), rgba(201,168,106,0.35))",
          padding: "1px",
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {/* Image disc */}
      <div className="absolute inset-1 rounded-full overflow-hidden border border-white/10 bg-brand-card">
        <Image
          src={image.src}
          alt={image.alt}
          width={360}
          height={360}
          className="h-full w-full object-cover"
          sizes="(min-width: 768px) 176px, 144px"
        />
      </div>
      {/* Soft glow under */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full blur-3xl aurum-breathe"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,106,0.25), transparent 65%)",
        }}
      />
    </div>
  );
}

/* ---------- Pillar row ---------- */

function PillarRow({
  id,
  romanNumeral,
  num,
  name,
  sub,
  cards,
  cols,
  image,
}: {
  id?: string;
  romanNumeral: string;
  num: string;
  name: string;
  sub: React.ReactNode;
  cards: Card[];
  cols: 3 | 4 | 6;
  image: PillarImage;
}) {
  const gridClass =
    cols === 6
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : cols === 4
        ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      id={id}
      className="relative py-16 md:py-20 border-t border-white/5 scroll-mt-24"
    >
      {/* Floating roman numeral watermark */}
      <span
        aria-hidden="true"
        className="font-serif-display absolute right-4 top-6 md:right-12 md:top-10 text-aurum/[0.07] text-[120px] md:text-[180px] font-medium leading-none select-none pointer-events-none"
      >
        {romanNumeral}
      </span>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-start">
          <header className="lg:sticky lg:top-24 space-y-5">
            <PillarSeal image={image} />

            <div className="flex items-center gap-3">
              <span className="font-serif-display italic text-aurum text-2xl md:text-3xl leading-none">
                {romanNumeral}
              </span>
              <span className="block w-8 aurum-rule" />
              <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-aurum/80 font-semibold">
                {num.replace(/^N° \d+ · /, "")}
              </span>
            </div>

            <h2 className="font-serif-display font-medium text-4xl md:text-5xl text-white leading-[1.04] tracking-[-0.02em]">
              {name}
              <span className="text-aurum">.</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed max-w-xs">
              {sub}
            </p>
          </header>

          <div>
          <ol className={`grid ${gridClass} gap-3 md:gap-4 list-none m-0 p-0`}>
            {cards.map((c) => (
              <li
                key={c.tag}
                className={`relative flex flex-col gap-2 p-4 md:p-5 rounded-lg border bg-brand-card transition-all duration-500 ${
                  c.soon
                    ? "border-dashed border-white/15 opacity-60"
                    : "border-white/10 hover:border-aurum/40 hover:-translate-y-1 hover:shadow-[0_18px_60px_-22px_rgba(201,168,106,0.45)]"
                }`}
              >
                {!c.soon && (
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum/60 to-transparent opacity-50"
                  />
                )}
                <div className="flex items-center justify-between font-mono text-[10.5px] tracking-[0.14em] uppercase text-slate-500">
                  <span className="text-aurum font-semibold">{c.tag}</span>
                  <span className="border border-white/10 px-2 py-0.5 rounded-full text-[9.5px]">
                    {c.kind}
                  </span>
                </div>
                <h3 className="font-serif-display font-semibold text-white text-lg md:text-xl leading-tight tracking-tight m-0">
                  {c.name}
                </h3>
                <p className="text-slate-300 text-[14px] leading-snug font-medium m-0">
                  {c.what}
                </p>
                {c.seeAlso && c.seeAlso.length > 0 && (
                  <div className="mt-1 pt-2.5 border-t border-aurum/15">
                    <span className="block font-mono text-[9.5px] tracking-[0.20em] uppercase text-aurum/70 font-semibold mb-2">
                      Tieferer Einblick
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {c.seeAlso.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="group/chip inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-aurum/10 border border-aurum/30 text-aurum text-[11px] font-mono uppercase tracking-[0.12em] font-semibold hover:bg-aurum/20 hover:border-aurum/55 hover:text-aurum-soft transition-all"
                        >
                          <span>{s.label}</span>
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 18 14"
                            aria-hidden="true"
                            className="opacity-70 group-hover/chip:opacity-100 group-hover/chip:translate-x-0.5 transition-all"
                          >
                            <path
                              d="M1 7h15m0 0L10 1m6 6l-6 6"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                            />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {(c.result || c.soon) && (
                  <div className="flex items-center gap-3 pt-2 mt-auto border-t border-white/10">
                    {c.result && (
                      <div className="flex flex-col gap-0.5">
                        <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-slate-500 font-medium">
                          {c.soon ? "Status" : "Ergebnis"}
                        </span>
                        <span className="font-bold text-white text-[13px]">
                          {c.result}
                        </span>
                      </div>
                    )}
                    {c.soon && (
                      <span className="ml-auto font-mono text-[10.5px] tracking-[0.16em] uppercase font-semibold text-slate-400 px-2.5 py-1.5 border border-dashed border-white/20 rounded-full">
                        Bald verfügbar
                      </span>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ol>

          {/* One CTA per pillar (instead of per-card buttons) */}
          <div className="flex justify-center md:justify-start mt-5">
            <Link
              href="#termin"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-brand-dark bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border border-aurum/60 hover:from-aurum hover:via-aurum-soft hover:to-aurum hover:border-aurum-soft transition-all shadow-[0_6px_22px_-8px_rgba(201,168,106,0.55)]"
            >
              <span>{name} anfragen</span>
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
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pending image slot — for graphics that user will generate ---------- */

function PendingImageSlot({
  src,
  hint,
  className = "",
  aspect = "aspect-[16/9]",
}: {
  src: string;
  hint: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`relative ${aspect} w-full rounded-2xl border border-dashed border-aurum/30 bg-gradient-to-br from-aurum/[0.04] via-transparent to-brand-cyan/[0.04] flex items-center justify-center overflow-hidden ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,106,0.18), transparent 55%)",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <Triquetra size={28} className="opacity-60" />
        <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-aurum/80 font-semibold">
          Bild folgt
        </span>
        <span className="font-mono text-[10px] tracking-[0.05em] text-slate-400">
          {src}
        </span>
        <span className="font-serif-display italic text-slate-500 text-[12px] mt-1 max-w-md">
          {hint}
        </span>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */

export default function LeistungenLux3Page() {
  return (
    <>
      {/* HERO ─── Sacred Capital ───────────────────────────── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* deep cosmic backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#040b1a] to-brand-dark" />
        {/* central gold halo */}
        <div
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[900px] aspect-square rounded-full opacity-70 aurum-breathe"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,106,0.16) 0%, rgba(6,182,212,0.10) 35%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        {/* flower of life backdrop */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <FlowerOfLifeBackdrop className="w-[800px] max-w-[110vw] aurum-rotate-slow" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Sigil */}
          <div className="flex justify-center mb-7 md:mb-9">
            <Triquetra size={44} glowing />
          </div>

          {/* Equation marker */}
          <div className="font-mono text-[12px] md:text-[13px] tracking-[0.18em] uppercase text-slate-300 font-bold mb-3">
            Glockner&nbsp;AI &nbsp;<span className="text-aurum">=</span>
          </div>

          {/* Hero headline */}
          <h1 className="font-serif-display font-medium text-white text-6xl md:text-8xl lg:text-9xl leading-[0.96] tracking-[-0.025em] m-0">
            Money <em className="aurum-text not-italic font-medium">Making</em> AI
            <span className="text-aurum">.</span>
          </h1>

          {/* Gold divider */}
          <div className="mt-10 mb-8">
            <GoldDivider width="wide" />
          </div>

          {/* Subline */}
          <p className="font-serif-display italic text-slate-200 text-xl md:text-3xl leading-snug tracking-tight max-w-3xl mx-auto m-0">
            Wie Künstliche Intelligenz zum{" "}
            <span className="aurum-text not-italic font-semibold">Umsatzmotor</span>{" "}
            Ihres Unternehmens wird.
          </p>
        </div>
      </section>

      {/* DAS CREDO — meditative manifesto ───────────────────── */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#050d1f] to-brand-dark" />

        {/* Optional generated backdrop — user can drop in /banana/credo-sun.webp */}
        <div className="absolute inset-0 flex items-center justify-center opacity-50 pointer-events-none">
          <div
            className="w-[600px] max-w-[90vw] aspect-square rounded-full aurum-breathe"
            style={{
              background:
                "radial-gradient(circle, rgba(201,168,106,0.22) 0%, rgba(201,168,106,0.08) 35%, transparent 65%)",
              filter: "blur(40px)",
            }}
            aria-hidden="true"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <VesicaSeal size={32} />
          </div>

          <div className="font-mono text-[10.5px] tracking-[0.36em] uppercase text-aurum/80 font-semibold mb-6">
            Das Credo
          </div>

          <blockquote className="font-serif-display text-white text-3xl md:text-5xl lg:text-6xl leading-[1.12] tracking-[-0.01em] m-0">
            <span className="text-aurum/70 font-serif-display text-5xl md:text-7xl leading-none">&ldquo;</span>
            Während Ihre Konkurrenz noch über KI redet,{" "}
            <em className="aurum-text not-italic">verkauft</em>{" "}
            Ihr System bereits &mdash; in Ihrer{" "}
            <em className="aurum-text not-italic">Markenstimme</em>,{" "}
            <em className="not-italic">rund um die Uhr</em>.
            <span className="text-aurum/70 font-serif-display text-5xl md:text-7xl leading-none align-top">&rdquo;</span>
          </blockquote>

          <div className="mt-10">
            <GoldDivider />
          </div>

          <p className="mt-6 font-mono text-[11px] tracking-[0.32em] uppercase text-slate-400">
            &mdash; Glockner Digital, Wien · Klagenfurt
          </p>
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
              {/* Gold circle backdrop */}
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
                alt="Andreas Unterkofler — Gründer Glockner AI"
                width={960}
                height={1200}
                priority
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              />
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
                  Gründer &middot; Glockner AI
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <VesicaSeal size={22} />
                <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-aurum/85 font-semibold">
                  Wer hinter Glockner AI steht
                </span>
              </div>

              <h2 className="font-serif-display font-medium text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.05] m-0">
                Andreas Unterkofler<span className="text-aurum">.</span>
              </h2>

              <p className="font-serif-display italic text-aurum/90 text-lg md:text-xl mt-4 leading-snug">
                Gründer &middot; KI-Berater &middot; E-Commerce-Operator
              </p>

              <p className="mt-7 text-slate-300 text-[16px] md:text-[17px] leading-relaxed">
                Ich bin über E-Commerce in die KI-Welt gekommen. 15 Jahre lang
                habe ich Online-Geschäfte im{" "}
                <em className="aurum-text not-italic font-semibold">
                  Multi-Millionen-Bereich
                </em>{" "}
                aufgebaut &mdash; und früh verstanden, dass Künstliche
                Intelligenz kein Spielzeug ist, sondern der nächste{" "}
                <em className="aurum-text not-italic font-semibold">
                  große Hebel
                </em>{" "}
                &mdash; nach oben beim Umsatz, nach unten bei den Kosten.
              </p>

              <p className="mt-4 text-slate-300 text-[16px] md:text-[17px] leading-relaxed">
                Seit <em className="aurum-text not-italic font-semibold">drei Jahren</em>{" "}
                mache ich praktisch nichts anderes mehr: KI-Strategie,
                KI-Implementierung, KI-Agents. Dutzende Projekte umgesetzt
                &mdash; immer mit derselben Beobachtung: Marketing &amp; Sales
                sind die Bereiche, in denen KI heute am schnellsten zu spürbarem
                Mehrumsatz führt. Und fast nebenbei passiert noch ein Zweites:
                Ist die KI einmal implementiert, steigen{" "}
                <em className="aurum-text not-italic font-semibold">
                  Effizienz und Effektivität
                </em>{" "}
                wie von selbst &mdash; Routineaufgaben erledigen sich, Prozesse
                werden schneller, und die{" "}
                <em className="aurum-text not-italic font-semibold">
                  Kosten sinken
                </em>{" "}
                spürbar. Wachstum auf der einen, Einsparung auf der anderen
                Seite.
              </p>

              <p className="mt-4 text-slate-400 text-[15px] leading-relaxed">
                Mein Versprechen: Was ich Ihnen empfehle, habe ich selbst
                getestet. Hinter mir stehen ein zehnköpfiges Spezialisten-Team
                und eine{" "}
                <em className="aurum-text not-italic font-semibold">
                  stille Armee aus KI-Agents
                </em>
                , die rund um die Uhr arbeiten &mdash; damit Ihr Projekt nicht
                in Monaten, sondern in{" "}
                <em className="aurum-text not-italic font-semibold">Wochen</em>{" "}
                Realität wird.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-9 pt-8 border-t border-white/10">
                <div>
                  <div className="font-serif-display aurum-text text-3xl md:text-4xl font-medium leading-none">
                    3+
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500 mt-2 leading-tight">
                    Jahre AI-Praxis
                  </div>
                </div>
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
                    24/7
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500 mt-2 leading-tight">
                    KI-Agents im Einsatz
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÜBERBLICK — Drei Säulen, refined ───────────────────── */}
      <section
        id="ueberblick"
        className="relative py-16 md:py-24 overflow-hidden border-t border-white/5 scroll-mt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-x-8 gap-y-6 items-end">
            <div className="lg:col-span-12">
              <h2 className="font-serif-display font-medium text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] max-w-3xl m-0">
                Drei Säulen,{" "}
                <em className="aurum-text not-italic font-medium">
                  die Geld machen
                </em>
                <span className="text-aurum">.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed">
                Jede Säule für sich rechnet sich. Zusammen werden sie zum{" "}
                <em className="aurum-text not-italic font-semibold">
                  eigenständigen Asset
                </em>{" "}
                Ihres Unternehmens.
              </p>
            </div>
          </div>

          {/* Three pillar gateways */}
          <ol className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 list-none m-0 p-0">
            {[
              {
                href: "#fundament",
                roman: "I",
                num: "N° 02",
                name: "Fundament",
                desc: "Audit, Knowledge Base, Markenstimme.",
              },
              {
                href: "#grow-design",
                roman: "II",
                num: "N° 03",
                name: "Grow Design",
                desc: "Website, Webshop, Multi-Screen, Split Testing.",
              },
              {
                href: "#grow-ms",
                roman: "III",
                num: "N° 04",
                name: "Grow M&S",
                desc: "Software, E-Mail, Dream 100, SEO & GEO, Chatbot, Voice.",
              },
            ].map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  className="group relative block p-6 md:p-7 rounded-xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-0.5 transition-all duration-500 h-full overflow-hidden"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum/60 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                  <span
                    aria-hidden="true"
                    className="font-serif-display absolute right-4 -top-3 text-aurum/[0.10] text-[100px] font-medium leading-none select-none pointer-events-none italic"
                  >
                    {p.roman}
                  </span>
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-aurum/85 font-semibold">
                        {p.num}
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-slate-500 group-hover:text-aurum transition-colors"
                      >
                        Springen ↓
                      </span>
                    </div>
                    <h3 className="font-serif-display font-medium text-white text-3xl md:text-4xl tracking-[-0.02em] m-0 mt-3">
                      {p.name}
                      <span className="text-aurum">.</span>
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed m-0 mt-2">
                      {p.desc}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PILLAR I: FUNDAMENT ───────────────────── */}
      <PillarRow
        id="fundament"
        romanNumeral="I"
        num="N° 02 · Fundament"
        name="Fundament"
        sub={
          <>
            Audit, Knowledge Base, Markenstimme. Alles, worauf Ihre KI{" "}
            <em className="not-italic text-aurum font-bold">aufsetzt</em>.
          </>
        }
        cards={fundament}
        cols={4}
        image={{
          src: "/banana/fundament.webp",
          alt: "Drei Glas-Säulen mit cyan leuchtendem Kern",
        }}
      />

      {/* PILLAR II: GROW DESIGN ─────────────── */}
      <PillarRow
        id="grow-design"
        romanNumeral="II"
        num="N° 03 · Grow Design"
        name="Grow Design"
        sub={
          <>
            Die Verkaufsfläche. Bauen, ausspielen, testen &mdash; alles mit KI
            auf{" "}
            <em className="not-italic text-aurum font-bold">
              maximale Conversion
            </em>{" "}
            getrimmt.
          </>
        }
        cards={design}
        cols={4}
        image={{
          src: "/banana/grow-design.webp",
          alt: "Gestaffelte transluzente Display-Panels mit cyan leuchtendem Punkt",
        }}
      />

      {/* PILLAR III: GROW MARKETING & SALES ──── */}
      <PillarRow
        id="grow-ms"
        romanNumeral="III"
        num="N° 04 · Grow Marketing & Sales"
        name="Grow M&S"
        sub={
          <>
            Marketing & Sales aus der Zukunft. Sechs Hebel &mdash; einzeln
            buchbar, in Kombination{" "}
            <em className="not-italic text-aurum font-bold">wirksam</em>.
          </>
        }
        cards={marketing}
        cols={6}
        image={{
          src: "/banana/grow-ms.webp",
          alt: "Konstellation aus glühenden Knoten, durch dünne Kurven verbunden",
        }}
      />

      {/* WAS UNS AUSMACHT ─────────────────── */}
      <section className="relative py-20 md:py-24 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#050d1f] to-brand-dark" />
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(201,168,106,0.10), transparent 55%), radial-gradient(ellipse at 80% 100%, rgba(6,182,212,0.10), transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-5">
              <VesicaSeal size={22} />
              <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-aurum/85 font-semibold">
                Was uns ausmacht
              </span>
            </div>
            <h2 className="font-serif-display font-medium text-white text-4xl md:text-5xl lg:text-6xl leading-[1.06] tracking-[-0.02em] m-0">
              Was bei uns{" "}
              <em className="aurum-text not-italic font-medium">immer</em> mit
              dabei ist.
            </h2>
          </header>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 list-none m-0 p-0">
            <li className="relative p-7 md:p-9 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 flex flex-col gap-4 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-40"
              />
              <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-aurum/85 font-semibold">
                Compliance
              </span>
              <h3 className="font-serif-display font-medium text-white text-2xl md:text-3xl tracking-[-0.02em] m-0">
                100&thinsp;% DSGVO-konform.
              </h3>
              <p className="text-slate-300 text-[15px] leading-relaxed m-0">
                Alle sensiblen Daten laufen ausschließlich auf europäischen
                Servern. KI-Lösungen, die in Österreich und der EU rechtlich
                sauber bestehen &mdash; heute und nach den nächsten
                Verschärfungen.
              </p>
              <span className="self-start mt-2 font-mono text-[10.5px] tracking-[0.16em] uppercase font-semibold text-aurum bg-aurum/10 border border-aurum/30 px-3 py-1.5 rounded-full">
                EU-Server only
              </span>
            </li>

            <li className="relative p-7 md:p-9 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 flex flex-col gap-4 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-40"
              />
              <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-aurum/85 font-semibold">
                Know-how
              </span>
              <h3 className="font-serif-display font-medium text-white text-2xl md:text-3xl tracking-[-0.02em] m-0">
                12&nbsp;Mrd.&nbsp;€ Marketing-DNA.
              </h3>
              <p className="text-slate-300 text-[15px] leading-relaxed m-0">
                Wir bauen nicht nur. Wir bauen mit Marketing- und
                Sales-Frameworks, die nachweislich über 12&nbsp;Milliarden&nbsp;€
                Umsatz generiert haben &mdash; eingebaut in jede Website, jeden
                Funnel, jede Sequenz.
              </p>
              <span className="self-start mt-2 font-mono text-[10.5px] tracking-[0.16em] uppercase font-semibold text-aurum bg-aurum/10 border border-aurum/30 px-3 py-1.5 rounded-full">
                12&thinsp;Mrd.&thinsp;€ validiert
              </span>
            </li>

            <li className="relative p-7 md:p-9 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 flex flex-col gap-4 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-40"
              />
              <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-aurum/85 font-semibold">
                Markenstimme
              </span>
              <h3 className="font-serif-display font-medium text-white text-2xl md:text-3xl tracking-[-0.02em] m-0">
                Eine Stimme. Alle Kanäle.
              </h3>
              <p className="text-slate-300 text-[15px] leading-relaxed m-0">
                Mit unserem eigenen, KI-gestützten Tool extrahieren wir den
                Kern Ihrer Marke &mdash; Charakter, Tonalität, Design. Wir
                verankern ihn in jeder KI-Antwort, jedem Funnel, jeder
                Sequenz. Mit jeder Iteration <em>reift</em> Ihre Stimme:
                über alle Kanäle konsistent, mit der Zeit unverwechselbar
                <em> attraktiv</em>.
              </p>
              <span className="self-start mt-2 font-mono text-[10.5px] tracking-[0.16em] uppercase font-semibold text-aurum bg-aurum/10 border border-aurum/30 px-3 py-1.5 rounded-full">
                Eigenes KI-Tool
              </span>
            </li>
          </ol>
        </div>
      </section>

      {/* B2B / B2C ───────────────────────── */}
      <section className="py-14 md:py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-start">
            <header className="space-y-3">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="block w-8 aurum-rule" />
                <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-aurum/85 font-semibold">
                  Zielmarkt
                </span>
              </div>
              <h2 className="font-serif-display font-medium text-3xl md:text-4xl text-white leading-[1.08] tracking-[-0.02em]">
                Egal ob Ihre Kunden{" "}
                <em className="aurum-text not-italic font-medium">
                  B2B oder B2C
                </em>{" "}
                sind.
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Unsere Leistungen funktionieren für beide Geschäftsmodelle.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="relative p-5 md:p-6 rounded-lg border border-white/10 bg-brand-card flex flex-col gap-2">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-aurum font-semibold">
                  B2B
                </span>
                <h3 className="font-serif-display font-medium text-white text-lg md:text-xl tracking-tight m-0">
                  Sie verkaufen an Unternehmen.
                </h3>
                <p className="text-slate-300 text-[14px] leading-relaxed m-0">
                  Lead-Pipelines, Partner-Outreach, qualifizierte
                  Sales-Gespräche &mdash; KI baut den Vertriebskanal, den Ihre
                  Branche braucht.
                </p>
              </div>

              <div className="relative p-5 md:p-6 rounded-lg border border-white/10 bg-brand-card flex flex-col gap-2">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-brand-cyan font-semibold">
                  B2C
                </span>
                <h3 className="font-serif-display font-medium text-white text-lg md:text-xl tracking-tight m-0">
                  Sie verkaufen an Endkunden.
                </h3>
                <p className="text-slate-300 text-[14px] leading-relaxed m-0">
                  Webshops, E-Mail-Reaktivierung, Markenstimme,
                  Bewertungs-Outreach &mdash; KI macht aus Besuchern Kunden und
                  aus Kunden Wiederkäufer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FÖRDERUNG ─── three packages with WKO funding ─── */}
      <section
        id="foerderung"
        className="relative py-20 md:py-28 overflow-hidden border-t border-white/5 scroll-mt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#050d1f] to-brand-dark" />
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(201,168,106,0.10), transparent 55%), radial-gradient(ellipse at 50% 100%, rgba(6,182,212,0.08), transparent 55%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <div className="flex justify-center mb-6">
              <VesicaSeal size={26} />
            </div>
            <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-5">
              Förderung
            </div>
            <h2 className="font-serif-display font-medium text-white text-4xl md:text-5xl lg:text-6xl leading-[1.06] tracking-[-0.02em] m-0">
              Bis zu{" "}
              <em className="aurum-text not-italic font-medium">80&thinsp;%</em>{" "}
              WKO-Förderung<span className="text-aurum">.</span>
            </h2>
            <div className="mt-8">
              <GoldDivider />
            </div>
            <p className="font-serif-display italic text-slate-300 text-lg md:text-xl mt-8 leading-relaxed">
              Drei Stufen &mdash; vom Potenzial-Audit bis zur vollen Umsetzung.
            </p>
          </header>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 list-none m-0 p-0">
            {/* TILE 1 — KI-Potentialanalyse · 80 % */}
            <li className="relative p-7 md:p-8 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 flex flex-col gap-5 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-50"
              />
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center font-mono text-[10.5px] tracking-[0.20em] uppercase font-semibold text-aurum bg-aurum/10 border border-aurum/30 px-3 py-1.5 rounded-full">
                  80&thinsp;% WKO-Förderung
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500">
                  I
                </span>
              </div>
              <div>
                <h3 className="font-serif-display font-medium text-white text-3xl md:text-4xl tracking-[-0.02em] m-0">
                  KI-Potential&shy;analyse<span className="text-aurum">.</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-2 m-0">
                  Analyse-Modul &mdash; 90-minütige Strategie-Session mit
                  Roadmap.
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
                  "KI-Use-Case Identifikation",
                  "Datenverfügbarkeits-Assessment",
                  "Implementierungs-Roadmap",
                  "90-minütige Strategie-Session",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="block w-1 h-1 rounded-full bg-aurum mt-[8px] flex-shrink-0"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#termin"
                className="inline-flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-lg font-bold text-brand-dark bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border border-aurum/60 hover:from-aurum hover:via-aurum-soft hover:to-aurum hover:border-aurum-soft transition-all shadow-[0_6px_20px_-8px_rgba(201,168,106,0.5)] hover:shadow-[0_10px_28px_-8px_rgba(201,168,106,0.65)]"
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

            {/* TILE 2 — KI-Strategie Beratung · 50 % */}
            <li className="relative p-7 md:p-8 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 flex flex-col gap-5 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-50"
              />
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center font-mono text-[10.5px] tracking-[0.20em] uppercase font-semibold text-aurum bg-aurum/10 border border-aurum/30 px-3 py-1.5 rounded-full">
                  50&thinsp;% WKO-Förderung
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500">
                  II
                </span>
              </div>
              <div>
                <h3 className="font-serif-display font-medium text-white text-3xl md:text-4xl tracking-[-0.02em] m-0">
                  KI-Strategie Beratung<span className="text-aurum">.</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-2 m-0">
                  Strategie-Modul &mdash; individuelle KI-Roadmap und
                  Tool-Workshop.
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
                  "Individuelle KI-Roadmap",
                  "Sales & Marketing Tool-Workshop",
                  "KI-Assistenten Konzeption",
                  "ROI-Analyse Dokument",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="block w-1 h-1 rounded-full bg-aurum mt-[8px] flex-shrink-0"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#termin"
                className="inline-flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-lg font-bold text-brand-dark bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border border-aurum/60 hover:from-aurum hover:via-aurum-soft hover:to-aurum hover:border-aurum-soft transition-all shadow-[0_6px_20px_-8px_rgba(201,168,106,0.5)] hover:shadow-[0_10px_28px_-8px_rgba(201,168,106,0.65)]"
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

            {/* TILE 3 — KI-Strategie Umsetzung · bis zu 6.000 € Förderung */}
            <li className="relative p-7 md:p-8 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 flex flex-col gap-5 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-50"
              />
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center font-mono text-[10.5px] tracking-[0.20em] uppercase font-semibold text-aurum bg-aurum/10 border border-aurum/30 px-3 py-1.5 rounded-full">
                  WKO-Förderung
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500">
                  III
                </span>
              </div>
              <div>
                <h3 className="font-serif-display font-medium text-white text-3xl md:text-4xl tracking-[-0.02em] m-0">
                  KI-Strategie Umsetzung<span className="text-aurum">.</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-2 m-0">
                  Umsetzungs-Modul &mdash; technische Implementierung im
                  Unternehmen.
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
                  "Technische Implementierung",
                  "CRM/ERP/Marketing Integration",
                  "Workflow-Automatisierung",
                  "Sales & Operations Setup",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="block w-1 h-1 rounded-full bg-aurum mt-[8px] flex-shrink-0"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#termin"
                className="inline-flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-lg font-bold text-brand-dark bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border border-aurum/60 hover:from-aurum hover:via-aurum-soft hover:to-aurum hover:border-aurum-soft transition-all shadow-[0_6px_20px_-8px_rgba(201,168,106,0.5)] hover:shadow-[0_10px_28px_-8px_rgba(201,168,106,0.65)]"
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

      {/* CTA ─── meditative gold aura ──────── */}
      <section className="relative py-28 md:py-36 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#070f23] to-brand-dark" />

        {/* Gold aura backdrop */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-[95vw] aspect-square rounded-full aurum-breathe pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,106,0.22) 0%, rgba(6,182,212,0.10) 35%, transparent 70%)",
            filter: "blur(50px)",
          }}
          aria-hidden="true"
        />

        {/* Slow rotating gold ring */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] max-w-[80vw] aspect-square rounded-full aurum-rotate-slow opacity-40"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(201,168,106,0), rgba(201,168,106,0.6), rgba(6,182,212,0.4), rgba(201,168,106,0))",
            padding: "1px",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-7">
            <Triquetra size={36} />
          </div>

          <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
            30 Minuten reichen, um zu sehen, wo bei Ihnen der{" "}
            <em className="aurum-text not-italic font-medium">
              größte Hebel
            </em>{" "}
            liegt.
          </h2>

          <div className="mt-10 mb-8">
            <GoldDivider width="wide" />
          </div>

          <p className="font-serif-display italic text-slate-300 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Bis zu 80&thinsp;% WKO-Förderung möglich.
          </p>

          <Link
            href="#termin"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-brand-dark bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border border-aurum/60 hover:from-aurum hover:via-aurum-soft hover:to-aurum hover:border-aurum-soft hover:-translate-y-0.5 transition-all duration-500 shadow-[0_8px_28px_-8px_rgba(201,168,106,0.55)] hover:shadow-[0_14px_40px_-10px_rgba(201,168,106,0.7)]"
          >
            <span>Analyse sichern</span>
            <span
              aria-hidden="true"
              className="block w-1.5 h-1.5 rounded-full bg-brand-dark/70"
            />
          </Link>
        </div>
      </section>

      {/* TERMINBUCHUNG ─── */}
      <section
        id="termin"
        className="relative py-20 md:py-28 overflow-hidden border-t border-white/5 scroll-mt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#050d1f] to-brand-dark" />
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(201,168,106,0.10), transparent 55%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
            <div className="flex justify-center mb-6">
              <Triquetra size={32} />
            </div>
            <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-5">
              Termin sichern
            </div>
            <h2 className="font-serif-display font-medium text-white text-4xl md:text-5xl lg:text-6xl leading-[1.06] tracking-[-0.02em] m-0">
              30 Minuten.{" "}
              <em className="aurum-text not-italic font-medium">
                Klarheit.
              </em>
            </h2>
            <div className="mt-7">
              <GoldDivider />
            </div>
            <p className="font-serif-display italic text-slate-300 text-lg md:text-xl mt-7 leading-relaxed">
              Wählen Sie ein Datum und eine Uhrzeit &mdash; kostenlos und
              unverbindlich.
            </p>
          </header>

          <BookingWidget />

        </div>
      </section>

      {/* OPTIONAL — Banana prompt slots for future graphics */}
      <section className="hidden">
        {/* NANO-BANANA PROMPT (Credo Sun) ↓ — backdrop for the credo block
            Save 1024×1024 to /public/banana/credo-sun.webp

            "Editorial 3D render, ultra-minimal: a single luminous golden orb floating in deep midnight blue void (#020617), the orb glows with warm soft gold light (#c9a86a) at the core fading through a faint cyan halo (#06b6d4) at the outer edge, suggesting alchemical sun or sacred eye, no face, no symbols inside, no text, no logos. Generous negative space, ethereal atmosphere, magazine-quality editorial composition, photorealistic, dark theme, 1:1 square aspect ratio."
        */}
        <PendingImageSlot
          src="/banana/credo-sun.webp"
          hint="Alchemical golden orb — backdrop for the Credo block"
        />

        {/* NANO-BANANA PROMPT (CTA Aura) ↓ — quiet glowing sphere with concentric rings
            Save 1024×1024 to /public/banana/cta-aura.webp

            "Editorial 3D render, ultra-minimal: a single perfectly round luminous sphere centered in deep midnight blue space (#020617), the sphere itself made of soft warm gold light (#c9a86a) with subtle inner glow, surrounded by three thin concentric rings of golden light fading outward, far outer ring touched with a faint cyan accent (#06b6d4). Sacred, meditative, alchemical sun quality, no text, no symbols, no people, generous negative space, magazine-quality editorial composition, 1:1 square."
        */}
        <PendingImageSlot
          src="/banana/cta-aura.webp"
          hint="Single luminous gold sphere with concentric rings — for CTA backdrop"
        />

        {/* NANO-BANANA PROMPT (Hero Sigil) ↓ — optional centerpiece for hero
            Save 1024×1024 to /public/banana/hero-sigil.webp

            "Editorial 3D render, ultra-minimal: a single sacred geometry sigil floating in deep midnight blue space (#020617). The sigil is made of three thin elegant intersecting golden rings (#c9a86a) forming a triquetra, faintly glowing with a soft cyan inner light (#06b6d4) at the center intersection. Refined metallic gold material, single soft volumetric light, generous negative space, no text, no logos, magazine-quality editorial composition, 1:1 square."
        */}
        <PendingImageSlot
          src="/banana/hero-sigil.webp"
          hint="Sacred geometry sigil — replaces inline Triquetra SVG in hero"
        />
      </section>
    </>
  );
}
