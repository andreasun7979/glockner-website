import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import type { ReactNode } from "react";

// Calendly-URL — durch die echte Glockner-AI-Buchungs-URL ersetzen
const CALENDLY_URL = "https://calendly.com/glockner-ai/analyse-30min";

export const metadata: Metadata = {
  // Design-Alternative, durch /leistungen-lux3 abgelöst — aus dem Index halten (Duplicate Content).
  robots: { index: false, follow: true },
  title: "Leistungen · Lux Edition — Money Making KI",
  description:
    "Lux Edition. Drei Säulen, die Geld machen: Fundament, Grow Design, Grow Marketing & Sales. Wie Künstliche Intelligenz zum Umsatzmotor Ihres Unternehmens wird.",
};

/* ─────────────────────────────────────────────────────────
   DATA — copy verbatim from brief, do not modify
   ───────────────────────────────────────────────────────── */

type Card = {
  id: string;
  tag: string;
  name: string;
  what: ReactNode;
  result: ReactNode;
  soon?: boolean;
};

const fundament: Card[] = [
  {
    id: "F.01",
    tag: "Audit",
    name: "AI Consulting Audit & Strategie",
    what: (
      <>
        Umsatz finden, der im Geschäft{" "}
        <em className="not-italic gradient-text font-bold">liegen bleibt</em>.
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan font-bold">
          12&ndash;30&thinsp;%
        </span>{" "}
        mehr
      </>
    ),
  },
  {
    id: "F.02",
    tag: "Knowledge",
    name: "Knowledge Base",
    what: (
      <>
        Die Wissensdatenbank &mdash; das{" "}
        <em className="not-italic gradient-text font-bold">Herzstück</em> Ihres
        Unternehmens. Ihr Wissen, strukturiert für KI &mdash; die Grundlage
        aller KI-Agents.
      </>
    ),
    result: (
      <>
        Erst durch die Wissensdatenbank ist{" "}
        <span className="font-mono text-brand-cyan font-bold">sinnvolle</span>{" "}
        Automatisierung im KI-Zeitalter möglich.
      </>
    ),
  },
  {
    id: "F.03",
    tag: "Brand",
    name: "Brand Voice Magic",
    what: (
      <>
        Niemand baut eine Beziehung zu einem Unternehmen auf &mdash; sondern zu
        einer Person oder dem{" "}
        <em className="not-italic gradient-text font-bold">
          attraktiven Charakter
        </em>{" "}
        einer Marke.
      </>
    ),
    result: (
      <>
        Wir geben Ihrer KI eine individuelle Stimme &mdash; jene Ihrer{" "}
        <span className="font-mono text-brand-cyan font-bold">
          attraktiven Marke
        </span>
        .
      </>
    ),
  },
];

const design: Card[] = [
  {
    id: "D.01",
    tag: "Website",
    name: "Converting Website",
    what: (
      <>
        Eine schöne Website reicht nicht. Sie muss{" "}
        <em className="not-italic gradient-text font-bold">führen</em>: vom
        ersten Klick bis zur Anfrage. Wir bauen genau das &mdash; schnell,
        mobil, SEO-fertig.
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan font-bold">
          Mehr Geld mit KI
        </span>{" "}
        &mdash; qualifizierte Anfragen statt schöner Statistik.
      </>
    ),
  },
  {
    id: "D.02",
    tag: "Webshop",
    name: "Converting Webshop",
    what: (
      <>
        Die meisten Webshops sind digitale Kataloge. Wir bauen{" "}
        <em className="not-italic gradient-text font-bold">
          Funnels, die verkaufen
        </em>{" "}
        &mdash; vom ersten Hook bis zum Upsell. Jeder Schritt auf maximalen
        Warenkorbwert getrimmt.
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan font-bold">
          Mehr Geld mit KI
        </span>{" "}
        &mdash; höherer Warenkorb, weniger Abbruch, mehr Wiederkäufe.
      </>
    ),
  },
  {
    id: "D.03",
    tag: "Multi-Screen",
    name: "Multiple Screens Magic",
    what: (
      <>
        Eine Seite kann nicht für jeden passen. Wir bauen{" "}
        <em className="not-italic gradient-text font-bold">
          mehrere Versionen
        </em>{" "}
        &mdash; für Mobile, für Werbeklicks, für Stammkunden. Jeder Besucher
        sieht den Screen, der ihn abholt.
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan font-bold">
          Mehr Geld mit KI
        </span>{" "}
        &mdash; höhere Conversion, weil jede Zielgruppe ihre eigene Version
        bekommt.
      </>
    ),
  },
  {
    id: "D.04",
    tag: "A/B Testing",
    name: "Split Testing Magic",
    what: (
      <>
        Hören Sie auf zu raten, was funktioniert.{" "}
        <em className="not-italic gradient-text font-bold">
          Wir lassen zwei Versionen gegeneinander antreten
        </em>{" "}
        &mdash; der Markt entscheidet, welche gewinnt.
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan font-bold">
          Mehr Geld mit KI
        </span>{" "}
        &mdash; gleicher Traffic, mehr Verkäufe.
      </>
    ),
  },
];

const marketing: Card[] = [
  {
    id: "M.01",
    tag: "Bauen",
    name: "Custom Software Magic",
    what: (
      <>
        Keine Software &mdash; oder Standard-Tools, die nicht passen? Wir bauen
        die KI-Software{" "}
        <em className="not-italic gradient-text font-bold">
          für Ihre Prozesse
        </em>
        .
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan font-bold">
          Mehr Geld mit KI
        </span>{" "}
        &mdash; Prozesse laufen von selbst, ohne mehr Personal.
      </>
    ),
  },
  {
    id: "M.02",
    tag: "Reaktivieren",
    name: "E-Mail Magic",
    what: (
      <>
        Alte Kunden kaufen wieder. Vergessene Leads springen endlich an. Ihre
        Liste hat{" "}
        <em className="not-italic gradient-text font-bold">
          mehr Umsatz, als Sie denken
        </em>
        .
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan font-bold">
          Mehr Geld mit KI
        </span>{" "}
        &mdash; fünfstelliger Mehrumsatz, in 4&ndash;6 Wochen.
      </>
    ),
  },
  {
    id: "M.03",
    tag: "Vertrieb",
    name: "Dream 100 Magic",
    what: (
      <>
        50&ndash;100 Partner mit Ihrer exakten Zielgruppe.{" "}
        <em className="not-italic gradient-text font-bold">
          Recherchiert von KI, angeschrieben von KI
        </em>
        . Sie übernehmen erst beim qualifizierten Gespräch.
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan font-bold">
          Mehr Geld mit KI
        </span>{" "}
        &mdash; qualifizierte Leads, ohne Ad-Budget.
      </>
    ),
  },
  {
    id: "M.04",
    tag: "Sales · Voice",
    name: "Voice Agents Magic",
    what: (
      <>
        Drei Anrufe, die Sie ungern selbst machen: nach Bewertungen fragen,
        alte Kunden zurückholen, neue Leads qualifizieren.{" "}
        <em className="not-italic gradient-text font-bold">
          Übernimmt jetzt die KI &mdash; in Ihrer Stimme
        </em>
        .
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan font-bold">
          Mehr Geld mit KI
        </span>{" "}
        &mdash; mehr Reviews, mehr Wiederkäufe, mehr Verkäufe.
      </>
    ),
  },
  {
    id: "M.05",
    tag: "Sichtbarkeit",
    name: "SEO & GEO Magic",
    what: (
      <>
        Ihre Kunden fragen nicht mehr nur Google. Sie fragen ChatGPT,
        Perplexity, Claude.{" "}
        <em className="not-italic gradient-text font-bold">
          Wir sorgen dafür, dass überall Sie die Antwort sind
        </em>
        .
      </>
    ),
    result: (
      <>
        <span className="font-mono text-brand-cyan font-bold">
          Mehr Geld mit KI
        </span>{" "}
        &mdash; gefunden werden, ohne Ad-Budget.
      </>
    ),
  },
  {
    id: "M.06",
    tag: "Content · Demnächst",
    name: "Social Magic",
    what: (
      <>
        Voller Content-Kalender &mdash;{" "}
        <em className="not-italic font-bold">
          Skripte, Captions, Hooks, Posts
        </em>
        .
      </>
    ),
    result: <>In Vorbereitung</>,
    soon: true,
  },
];

/* ─────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────── */

export default function LeistungenLuxPage() {
  return (
    <>
      {/* ════════ HERO — Magazine cover ════════════════════════ */}
      {/*
        NANO_BANANA_PROMPT (hero background — optional enhancement):
        "Abstract editorial dataviz: a thin, luminous gradient line rising
        from bottom-left to top-right across a dark navy canvas, intersecting
        with a sparse grid of small geometric data nodes (filled circles,
        outlined squares). On the right edge the line dissolves into a small
        network of connected nodes glowing in electric blue and cyan. Style:
        sophisticated financial-terminal-meets-quarterly-report, NO neon, NO
        glow orbs, NO cartoon AI imagery, restrained premium consultancy
        feel. Background: deep near-black #06080F with subtle dark navy
        gradients. Accent colors: electric blue #3B82F6 and cyan #22D3EE
        only. Aspect ratio: 16:9."
      */}
      <section className="relative overflow-hidden">
        {/* Ambient background layers */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 80% 20%, rgba(34,211,238,0.10), transparent 60%), radial-gradient(ellipse 60% 70% at 10% 100%, rgba(59,130,246,0.12), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 dot-grid opacity-30 pointer-events-none"
          aria-hidden="true"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 70% at 60% 30%, #000 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 60% 30%, #000 30%, transparent 80%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
          {/* Edition strip */}
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-slate-400 mb-12 md:mb-16">
            <span className="text-brand-cyan font-semibold">Lux Edition</span>
            <span className="block w-9 h-px bg-gradient-to-r from-brand-cyan to-transparent" />
            <span>Glockner&nbsp;AI · Frühjahr 2026</span>
          </div>

          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
            {/* Left: claim stack */}
            <div>
              <h1 className="flex flex-col gap-2 leading-[0.95] tracking-tight m-0">
                <span className="font-extrabold tracking-[0.14em] uppercase text-xs md:text-sm gradient-text inline-block self-start pb-2">
                  Glockner&nbsp;AI.
                </span>
                <span className="text-white font-black text-6xl md:text-8xl lg:text-9xl leading-[0.96]">
                  Money Making&nbsp;KI
                  <span className="text-brand-cyan">.</span>
                </span>
                <span className="text-slate-300 font-semibold text-xl md:text-3xl leading-snug tracking-tight mt-4 md:mt-6 max-w-2xl">
                  Wie Künstliche Intelligenz zum{" "}
                  <em className="not-italic gradient-text font-extrabold">
                    Umsatzmotor
                  </em>{" "}
                  Ihres Unternehmens wird.
                </span>
              </h1>

              <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-4 md:gap-6">
                <Link
                  href="#termin"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] cta-glow transition-all hover:-translate-y-0.5"
                >
                  Analyse sichern
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 18 14"
                    aria-hidden="true"
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
                <a
                  href="#fundament"
                  className="inline-flex items-center gap-1.5 font-mono text-[12px] tracking-[0.16em] uppercase text-slate-400 hover:text-brand-cyan transition-colors"
                >
                  Drei Säulen erkunden
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 1v12m0 0L1 7m6 6l6-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: editorial dataviz */}
            <HeroDataviz />
          </div>
        </div>

        {/* Hairline gradient end-rule */}
        <div
          className="relative h-px max-w-7xl mx-auto"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 18%, rgba(34,211,238,0.45) 50%, rgba(255,255,255,0.18) 82%, transparent 100%)",
          }}
        />
      </section>

      {/* ════════ KPI BAND ═════════════════════════════════════ */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="grid grid-cols-2 md:grid-cols-4 border-y border-white/8 divide-y md:divide-y-0 md:divide-x divide-white/8">
            <KPI
              num="12"
              suf=" Mrd. €"
              label="Marketing-DNA validiert"
            />
            <KPI
              num="80"
              suf=" %"
              label="WKO-Förderung möglich"
            />
            <KPI num="2" suf="" label="Standorte · Wien · Klagenfurt" />
            <KPI num=">5" suf=" Jahre" label="Praxis im KMU-Markt" />
          </ol>
        </div>
      </section>

      {/* ════════ DREI SÄULEN — Statement ═══════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/40 to-brand-dark pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-70"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 30% 0%, rgba(59,130,246,0.16), transparent 60%), radial-gradient(ellipse 50% 60% at 70% 100%, rgba(34,211,238,0.14), transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-brand-cyan font-semibold mb-8">
            Was wir konkret für Sie tun
          </div>
          <h2 className="font-black text-white text-6xl md:text-8xl lg:text-9xl leading-[0.96] tracking-tight max-w-6xl">
            Drei Säulen,{" "}
            <em className="not-italic gradient-text font-black">
              die Geld machen
            </em>
            <span className="text-brand-cyan">.</span>
          </h2>
          <p className="mt-10 max-w-3xl text-xl md:text-2xl text-slate-300 leading-relaxed font-medium">
            Jede Säule für sich rechnet sich. Zusammen ersetzen sie Ihr
            klassisches Marketing-Team und werden zum{" "}
            <em className="not-italic gradient-text font-bold">
              eigenständigen Asset
            </em>{" "}
            Ihres Unternehmens.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <SaeuleTeaser
              num="N° 02"
              name="Fundament"
              accent="blue"
              sub="Audit, Knowledge Base, Markenstimme."
              href="#fundament"
            />
            <SaeuleTeaser
              num="N° 03"
              name="Grow Design"
              accent="cyan"
              sub="Website, Webshop, Multi-Screen, Split Testing."
              href="#grow-design"
            />
            <SaeuleTeaser
              num="N° 04"
              name="Grow M&S"
              accent="cyan"
              sub="Software, E-Mail, Dream 100, Voice, SEO & GEO."
              href="#grow-ms"
            />
          </div>
        </div>
      </section>

      {/* ════════ PILLAR 1 — FUNDAMENT ═════════════════════════ */}
      <PillarRow
        anchor="fundament"
        num="N° 02"
        section={<>Funda<br />Ment</>}
        accent="blue"
        sub={
          <>
            Audit, Knowledge Base, Markenstimme. Alles, worauf Ihre KI{" "}
            <em className="not-italic gradient-text font-bold">aufsetzt</em>.
          </>
        }
        cards={fundament}
        gridCols="md:grid-cols-2 lg:grid-cols-3"
        backdrop="/lux/fundament-bg.webp"
      />

      {/* ════════ PILLAR 2 — GROW DESIGN ═══════════════════════ */}
      <PillarRow
        anchor="grow-design"
        num="N° 03"
        section="Grow Design"
        accent="cyan"
        sub={
          <>
            Die Verkaufsfläche. Bauen, ausspielen, testen &mdash; alles mit KI
            auf{" "}
            <em className="not-italic gradient-text font-bold">
              maximale Conversion
            </em>{" "}
            getrimmt.
          </>
        }
        cards={design}
        gridCols="md:grid-cols-2 xl:grid-cols-4"
        backdrop="/lux/grow-design-bg.webp"
      />

      {/* ════════ PILLAR 3 — GROW M&S ══════════════════════════ */}
      <PillarRow
        anchor="grow-ms"
        num="N° 04"
        section={<>Grow<br />M&amp;S</>}
        accent="cyan"
        sub={
          <>
            Marketing &amp; Sales aus der Zukunft. Sechs Hebel &mdash; einzeln
            buchbar, in Kombination{" "}
            <em className="not-italic gradient-text font-bold">wirksam</em>.
          </>
        }
        cards={marketing}
        gridCols="md:grid-cols-2 lg:grid-cols-3"
        backdrop="/lux/grow-ms-bg.webp"
      />

      {/* ════════ MANIFESTO PULL-QUOTE ═════════════════════════ */}
      {/*
        NANO_BANANA_PROMPT (subtle backdrop, optional):
        "Extremely subtle abstract texture: faint geometric grid lines fading
        to dark navy, with a soft cyan-to-blue gradient haze in upper-right.
        Style: editorial magazine spread backdrop, restrained, atmospheric,
        NO subjects, NO icons, NO neon. Color palette: deep navy #06080F base
        with rgba(59,130,246,0.06) and rgba(34,211,238,0.04) accents. Aspect
        ratio: 21:9, ultra-wide."
      */}
      <section className="relative py-24 md:py-32 overflow-hidden border-y border-white/5">
        <img
          src="/lux/manifesto-bg.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,6,23,0.75) 0%, rgba(2,6,23,0.5) 50%, rgba(2,6,23,0.85) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(34,211,238,0.10), transparent 60%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            aria-hidden="true"
            className="block w-px h-14 mx-auto bg-gradient-to-b from-transparent via-brand-cyan/60 to-transparent mb-10"
          />
          <p className="font-display font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-[1.18] tracking-tight">
            Wir bauen keine{" "}
            <span className="text-slate-500 line-through decoration-brand-blue decoration-[3px]">
              Pilotprojekte
            </span>
            .{" "}
            <em className="not-italic gradient-text font-extrabold">
              Wir bauen Umsatz
            </em>
            .
          </p>
          <div className="mt-10 flex items-center justify-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-slate-500">
            <span className="block w-9 h-px bg-gradient-to-r from-transparent to-brand-cyan/60" />
            <span>Mag. Andreas Unterkofler · Glockner&nbsp;AI</span>
            <span className="block w-9 h-px bg-gradient-to-l from-transparent to-brand-cyan/60" />
          </div>
        </div>
      </section>

      {/* ════════ FÖRDERUNG — 90-Day Timeline ══════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden" id="foerderung">
        <div
          className="absolute inset-0 pointer-events-none opacity-70"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 90% 0%, rgba(34,211,238,0.10), transparent 55%), radial-gradient(ellipse 60% 70% at 10% 100%, rgba(59,130,246,0.16), transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 md:mb-20">
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-brand-cyan font-semibold mb-5">
              N° 05 · WKO-Förderung
            </div>
            <h2 className="font-black text-white text-4xl md:text-6xl leading-[1.04] tracking-tight">
              Bis zu{" "}
              <em className="not-italic gradient-text font-black">80&thinsp;%</em>{" "}
              Förderung. <br />
              Drei Stufen, ein Pfad.
            </h2>
            <p className="mt-6 text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              Wir begleiten Sie durch das Förderprogramm „KMU.DIGITAL" der
              Wirtschaftskammer. Sie zahlen nur den Eigenanteil &mdash; den Rest
              übernimmt die Förderung.
            </p>
          </div>

          {/* Connecting dashed path (desktop only) */}
          <div className="relative">
            <span
              className="hidden md:block absolute top-7 left-[8%] right-[8%] h-px pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0 8px, transparent 8px 16px)",
              }}
            />
            <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              <FoerderungStep
                pin="01"
                name="Status-Analyse"
                original="€ 500"
                price="€ 100"
                savings="€ 400"
                cover={80}
                desc="Strukturiertes Erstgespräch und schriftliche Bestandsaufnahme: wo Ihr Betrieb digital steht, wo die größten Hebel liegen."
              />
              <FoerderungStep
                pin="02"
                name="Strategie"
                original="€ 2.000"
                price="€ 1.000"
                savings="€ 1.000"
                cover={50}
                desc="Maßgeschneiderter Strategieplan: welche Hebel wir wann und in welcher Reihenfolge ziehen, mit erwartetem Mehrumsatz."
              />
              <FoerderungStep
                pin="03"
                name="Umsetzung"
                original="bis € 20.000"
                price="bis € 14.000"
                savings="bis € 6.000"
                cover={30}
                desc="Wir bauen, integrieren und übergeben &mdash; sauber dokumentiert, inklusive Schulung Ihres Teams."
              />
            </ol>
          </div>

          <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-4">
            <Link
              href="#termin"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] cta-glow transition-all hover:-translate-y-0.5"
            >
              Mit Status-Analyse starten
            </Link>
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-slate-500">
              Antwort innerhalb eines Werktages.
            </span>
          </div>
        </div>
      </section>

      {/* ════════ WAS BEI UNS IMMER MIT DABEI IST ══════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden border-t border-white/5">
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(34,211,238,0.08), transparent 60%), radial-gradient(ellipse 60% 60% at 80% 100%, rgba(59,130,246,0.10), transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mb-12 md:mb-16">
            <span className="block font-mono text-[11px] tracking-[0.22em] uppercase text-brand-cyan font-semibold mb-5">
              Was uns ausmacht
            </span>
            <h2 className="text-white font-black text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Was bei uns{" "}
              <em className="not-italic gradient-text font-extrabold">
                immer
              </em>{" "}
              mit dabei ist.
            </h2>
          </header>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <FeatureCard
              tag="Compliance"
              name="100 % DSGVO-konform."
              body="Alle sensiblen Daten laufen ausschließlich auf europäischen Servern. KI-Lösungen, die in Österreich und der EU rechtlich sauber bestehen — heute und nach den nächsten Verschärfungen."
              chip="EU-Server only"
              image="/lux/compliance.webp"
            />
            <FeatureCard
              tag="Know-how"
              name="12 Mrd. € Marketing-DNA."
              body="Wir bauen nicht nur. Wir bauen mit Marketing- und Sales-Frameworks, die nachweislich über 12 Milliarden € Umsatz generiert haben — eingebaut in jede Website, jeden Funnel, jede Sequenz."
              chip="12 Mrd. € validiert"
              image="/lux/know-how.webp"
            />
          </ol>
        </div>
      </section>

      {/* ════════ B2B / B2C ═══════════════════════════════════ */}
      <section className="py-20 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
            <header className="space-y-4">
              <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-brand-cyan font-semibold">
                Zielmarkt
              </div>
              <h2 className="font-black text-white text-3xl md:text-4xl leading-[1.05] tracking-tight">
                Egal ob Ihre Kunden{" "}
                <em className="not-italic gradient-text font-extrabold">
                  B2B oder B2C
                </em>{" "}
                sind.
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                Unsere Leistungen funktionieren für beide Geschäftsmodelle.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <ZielmarktCard
                tag="B2B"
                accent="blue"
                heading="Sie verkaufen an Unternehmen."
                body="Lead-Pipelines, Partner-Outreach, qualifizierte Sales-Gespräche — KI baut den Vertriebskanal, den Ihre Branche braucht."
              />
              <ZielmarktCard
                tag="B2C"
                accent="cyan"
                heading="Sie verkaufen an Endkunden."
                body="Webshops, E-Mail-Reaktivierung, Markenstimme, Bewertungs-Outreach — KI macht aus Besuchern Kunden und aus Kunden Wiederkäufer."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CALENDLY · Kostenloses Analysegespräch ════════ */}
      <section
        id="termin"
        className="relative py-20 md:py-28 border-t border-white/5 overflow-hidden scroll-mt-24"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 0% 0%, rgba(34,211,238,0.08), transparent 55%), radial-gradient(ellipse 50% 60% at 100% 100%, rgba(59,130,246,0.10), transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[minmax(0,420px)_1fr] gap-10 lg:gap-16 items-start">
            <header className="space-y-5 lg:sticky lg:top-24">
              <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-brand-cyan font-semibold">
                <span className="inline-flex items-center gap-2">
                  <span className="block w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                  Kostenlos
                </span>
                <span className="block w-9 h-px bg-gradient-to-r from-brand-cyan to-transparent" />
                <span className="text-slate-500">30&nbsp;Minuten</span>
              </div>
              <h2 className="font-black text-white text-4xl md:text-5xl lg:text-6xl leading-[1.04] tracking-tight">
                Buchen Sie Ihr{" "}
                <em className="not-italic gradient-text font-extrabold">
                  Analysegespräch
                </em>
                .
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-md">
                30 Minuten. Persönlich, vertraulich, ohne Verpflichtung. Wir
                hören zu, sortieren Ihre Lage und sagen offen, welcher{" "}
                <em className="not-italic text-brand-cyan font-semibold">
                  Pile
                </em>{" "}
                bei Ihnen zuerst dran ist.
              </p>
              <ul className="space-y-2.5 pt-3">
                {[
                  "Ihre konkrete Situation, kein Standard-Pitch",
                  "Welche Hebel bei Ihnen den größten Effekt haben",
                  "Realistische Einschätzung zu WKO-Förderung & Eigenanteil",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-2.5 text-slate-300 text-[14px] leading-snug"
                  >
                    <svg
                      className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {line}
                  </li>
                ))}
              </ul>
              <div className="pt-4 flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.16em] uppercase text-slate-500">
                <span>Wien</span>
                <span className="text-slate-600">·</span>
                <span>Klagenfurt</span>
                <span className="text-slate-600">·</span>
                <span className="text-brand-cyan">Online</span>
              </div>
            </header>

            {/* Calendly inline embed */}
            <div className="relative rounded-2xl border border-white/10 bg-brand-card overflow-hidden shadow-[0_24px_80px_-32px_rgba(34,211,238,0.25)]">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50 z-10"
              />
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 font-mono text-[11px] tracking-[0.16em] uppercase text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="block w-2 h-2 rounded-full bg-brand-cyan" />
                  Live verfügbar
                </span>
                <span className="text-slate-500">
                  Powered by Calendly
                </span>
              </div>
              <div
                className="calendly-inline-widget"
                data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=0e172a&text_color=ffffff&primary_color=22d3ee`}
                style={{ minWidth: "320px", height: "720px" }}
              />
              <noscript className="block px-5 py-8 text-slate-300 text-sm">
                Bitte JavaScript aktivieren, um den Buchungskalender
                anzuzeigen, oder direkt zu{" "}
                <a
                  href={CALENDLY_URL}
                  className="text-brand-cyan underline"
                >
                  calendly.com
                </a>{" "}
                wechseln.
              </noscript>
            </div>
          </div>
        </div>

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </section>

      {/* ════════ CTA — Closing ═══════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
        <img
          src="/lux/cta-bg.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,6,23,0.7) 0%, rgba(2,6,23,0.4) 50%, rgba(2,6,23,0.85) 100%)",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-cyan/5 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.10), transparent 60%)",
            filter: "blur(120px)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="block font-mono text-[11px] tracking-[0.22em] uppercase text-brand-cyan font-semibold mb-6">
            Schluss
          </span>
          <h2 className="font-black text-white text-3xl md:text-5xl leading-[1.18] tracking-tight">
            Eine Stunde reicht, um zu sehen,{" "}
            <em className="not-italic gradient-text font-extrabold">
              welcher Pile
            </em>{" "}
            bei Ihnen zuerst dran ist.
          </h2>
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link
              href="#termin"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-9 py-4 rounded-xl font-semibold text-base cta-glow transition-all hover:-translate-y-0.5"
            >
              Status-Analyse buchen · €&thinsp;100
            </Link>
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-slate-500">
              Bis zu 80&nbsp;% WKO-Förderung · Antwort innerhalb eines Werktages
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────────────────
   COMPONENTS
   ───────────────────────────────────────────────────────── */

function HeroDataviz() {
  return (
    <div
      className="relative aspect-[4/5] w-full max-w-md ml-auto rounded-2xl border border-white/8 overflow-hidden"
      aria-hidden="true"
    >
      <img
        src="/lux/hero.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,6,23,0.45) 0%, transparent 30%, transparent 65%, rgba(2,6,23,0.65) 100%)",
        }}
      />

      {/* meta strip top */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase">
        <span className="text-brand-cyan font-semibold">Q.01 / Index</span>
        <span className="border border-white/15 bg-black/30 backdrop-blur-sm rounded-full px-2 py-0.5 text-[9px] text-slate-200">
          Live · 2026
        </span>
      </div>

      {/* meta footer */}
      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3 pt-4 border-t border-white/15 font-mono text-[10px] tracking-[0.14em] uppercase">
        <div>
          <div className="text-slate-300 mb-1">Branche</div>
          <div className="text-white font-semibold normal-case tracking-tight text-[12px]">
            B2C eCommerce
          </div>
        </div>
        <div>
          <div className="text-slate-300 mb-1">Setup</div>
          <div className="text-white font-semibold normal-case tracking-tight text-[12px]">
            6&nbsp;Wochen
          </div>
        </div>
        <div>
          <div className="text-slate-300 mb-1">Förderung</div>
          <div className="text-white font-semibold normal-case tracking-tight text-[12px]">
            50&thinsp;%
          </div>
        </div>
      </div>
    </div>
  );
}

function KPI({
  num,
  suf,
  label,
}: {
  num: string;
  suf: string;
  label: string;
}) {
  return (
    <li className="px-5 py-7 md:py-9 flex flex-col gap-2">
      <span className="font-display font-black text-4xl md:text-5xl text-white leading-none tracking-tight">
        <span className="font-mono">{num}</span>
        {suf && (
          <span className="text-brand-cyan font-mono text-2xl md:text-3xl ml-1">
            {suf}
          </span>
        )}
      </span>
      <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-slate-400 font-medium leading-snug">
        {label}
      </span>
    </li>
  );
}

function SaeuleTeaser({
  num,
  name,
  accent,
  sub,
  href,
}: {
  num: string;
  name: string;
  accent: "blue" | "cyan";
  sub: string;
  href: string;
}) {
  const accentNum =
    accent === "blue" ? "text-brand-blue" : "text-brand-cyan";
  const accentDot = accent === "blue" ? "text-brand-blue" : "text-brand-cyan";
  const accentHover =
    accent === "blue"
      ? "hover:border-brand-blue/40"
      : "hover:border-brand-cyan/40";
  const stripVia = accent === "blue" ? "via-brand-blue" : "via-brand-cyan";

  return (
    <Link
      href={href}
      className={`group relative flex flex-col gap-2 p-6 md:p-7 rounded-xl border border-white/10 bg-brand-card transition-all duration-300 ${accentHover} hover:-translate-y-1`}
    >
      <span
        aria-hidden="true"
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${stripVia} to-transparent opacity-50`}
      />
      <span
        className={`font-mono text-[11px] tracking-[0.18em] uppercase ${accentNum} font-semibold`}
      >
        {num}
      </span>
      <h3 className="font-black text-white text-2xl md:text-3xl tracking-tight m-0 leading-tight">
        {name}
        <span className={accentDot}>.</span>
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed m-0 mt-1">{sub}</p>
      <span
        aria-hidden="true"
        className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500 group-hover:text-brand-cyan transition-colors"
      >
        <span className="block w-6 h-px bg-current" />
        Erkunden
      </span>
    </Link>
  );
}

function PillarRow({
  anchor,
  num,
  section,
  accent,
  sub,
  cards,
  gridCols,
  backdrop,
}: {
  anchor: string;
  num: string;
  section: ReactNode;
  accent: "blue" | "cyan";
  sub: ReactNode;
  cards: Card[];
  gridCols: string;
  backdrop?: string;
}) {
  const dotColor = accent === "blue" ? "text-brand-blue" : "text-brand-cyan";
  const numColor = accent === "blue" ? "text-brand-blue" : "text-brand-cyan";

  return (
    <section
      id={anchor}
      className="relative py-20 md:py-28 border-t border-white/5 scroll-mt-24 overflow-hidden"
    >
      {backdrop && (
        <>
          <img
            src={backdrop}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(180deg, rgba(2,6,23,0.7) 0%, rgba(2,6,23,0.5) 30%, rgba(2,6,23,0.5) 70%, rgba(2,6,23,0.85) 100%)",
            }}
          />
        </>
      )}
      {accent === "blue" && (
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 0% 30%, rgba(59,130,246,0.10), transparent 55%)",
          }}
        />
      )}
      {accent === "cyan" && (
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 100% 30%, rgba(34,211,238,0.10), transparent 55%)",
          }}
        />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,360px)_1fr] gap-10 lg:gap-14 items-start">
          {/* sticky pillar header */}
          <header className="lg:sticky lg:top-24 space-y-5 min-w-0">
            <div
              className={`font-mono text-[11px] tracking-[0.22em] uppercase ${numColor} font-semibold`}
            >
              {num}
            </div>
            <h2 className="font-black text-white text-5xl md:text-6xl tracking-tight leading-[0.95] break-words">
              {section}
              <span className={dotColor}>.</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed max-w-[28ch]">
              {sub}
            </p>
          </header>

          {/* card grid */}
          <ol
            className={`grid grid-cols-1 ${gridCols} gap-3 md:gap-4 list-none m-0 p-0`}
          >
            {cards.map((card) => (
              <ServiceCard key={card.id} card={card} accent={accent} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  card,
  accent,
}: {
  card: Card;
  accent: "blue" | "cyan";
}) {
  if (card.soon) {
    return (
      <li className="relative flex flex-col gap-2 p-5 md:p-6 rounded-xl border border-dashed border-white/12 bg-transparent opacity-60 cursor-default">
        <div className="flex items-center justify-between font-mono text-[10.5px] tracking-[0.16em] uppercase text-slate-500">
          <span className="font-semibold">{card.id}</span>
          <span className="border border-white/10 px-2 py-0.5 rounded-full text-[9.5px]">
            {card.tag}
          </span>
        </div>
        <h3 className="font-bold text-slate-300 text-base md:text-lg tracking-tight m-0 leading-tight">
          {card.name}
        </h3>
        <p className="text-slate-400 text-[14px] leading-snug font-medium m-0">
          {card.what}
        </p>
        <div className="flex items-center justify-between gap-2 pt-3 mt-auto border-t border-white/8 flex-wrap">
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500">
              Status
            </span>
            <span className="font-bold text-slate-300 text-[13px]">
              {card.result}
            </span>
          </div>
          <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase font-semibold text-slate-500 px-2.5 py-1.5 border border-dashed border-white/15 rounded-full">
            Bald verfügbar
          </span>
        </div>
      </li>
    );
  }

  const isBlue = accent === "blue";
  const stripVia = isBlue ? "via-brand-blue" : "via-brand-cyan";
  const tagColor = isBlue ? "text-brand-blue" : "text-brand-cyan";
  const hoverBorder = isBlue
    ? "hover:border-brand-blue/40"
    : "hover:border-brand-cyan/40";
  const hoverShadow = isBlue
    ? "hover:shadow-[0_18px_60px_-22px_rgba(59,130,246,0.4)]"
    : "hover:shadow-[0_18px_60px_-22px_rgba(34,211,238,0.4)]";

  return (
    <li
      className={`relative flex flex-col gap-2.5 p-5 md:p-6 rounded-xl border border-white/10 bg-brand-card transition-all duration-300 ${hoverBorder} ${hoverShadow} hover:-translate-y-1 overflow-hidden`}
    >
      <span
        aria-hidden="true"
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${stripVia} to-transparent opacity-50`}
      />
      <div className="flex items-center justify-between font-mono text-[10.5px] tracking-[0.16em] uppercase text-slate-500">
        <span className={`font-semibold ${tagColor}`}>{card.id}</span>
        <span className="border border-white/10 px-2 py-0.5 rounded-full text-[9.5px]">
          {card.tag}
        </span>
      </div>
      <h3 className="font-black text-white text-lg md:text-xl tracking-tight m-0 leading-[1.18]">
        {card.name}
      </h3>
      <p className="text-slate-300 text-[14px] leading-relaxed font-medium m-0">
        {card.what}
      </p>
      <div className="flex items-center justify-between gap-2 pt-3 mt-auto border-t border-white/8 flex-wrap">
        <div className="flex flex-col gap-0.5 max-w-full">
          <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500 font-medium">
            Ergebnis
          </span>
          <span className="font-bold text-white text-[13px] leading-snug">
            {card.result}
          </span>
        </div>
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] uppercase font-semibold text-white border-b border-white/20 hover:border-brand-cyan hover:text-brand-cyan transition-all pb-0.5"
        >
          Anfragen
          <svg
            width="11"
            height="9"
            viewBox="0 0 18 14"
            aria-hidden="true"
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
      </div>
    </li>
  );
}

function FoerderungStep({
  pin,
  name,
  original,
  price,
  savings,
  cover,
  desc,
}: {
  pin: string;
  name: string;
  original: string;
  price: string;
  savings: string;
  cover: number;
  desc: string;
}) {
  return (
    <li className="relative p-7 md:p-8 rounded-xl border border-white/10 bg-brand-card flex flex-col gap-4 transition-all duration-300 hover:border-brand-cyan/40 hover:-translate-y-1 hover:shadow-[0_24px_80px_-32px_rgba(34,211,238,0.45)]">
      <div className="flex items-center gap-3">
        <span className="relative z-10 inline-grid place-items-center w-9 h-9 rounded-full border border-brand-cyan/60 bg-brand-dark font-mono text-[12px] tracking-[0.1em] font-semibold text-brand-cyan">
          {pin}
        </span>
        <span className="font-display font-black text-white text-xl md:text-2xl tracking-tight">
          {name}
        </span>
      </div>

      <div className="flex flex-col gap-2 pb-5 border-b border-white/10">
        <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-slate-500 font-medium">
          regulär{" "}
          <span className="line-through decoration-slate-500 decoration-1.5 normal-case tracking-normal text-[13px] text-slate-400 ml-1">
            {original}
          </span>
        </span>
        <span className="font-display font-black text-3xl md:text-4xl gradient-text leading-none">
          {price}
        </span>
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-slate-400 font-medium">
          Eigenanteil <span className="text-slate-600 normal-case tracking-normal">·</span>{" "}
          <span className="text-slate-300 normal-case tracking-normal">
            nach Förderung
          </span>
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-1 rounded-full bg-white/8 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan"
            style={{ width: `${cover}%` }}
          />
        </div>
        <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-slate-400 font-medium">
          <em className="not-italic text-brand-cyan font-bold">{cover}&thinsp;%</em>{" "}
          gefördert &middot; Sie sparen{" "}
          <em className="not-italic text-brand-cyan font-bold">{savings}</em>
        </span>
      </div>

      <p className="text-slate-300 text-sm leading-relaxed m-0">{desc}</p>
    </li>
  );
}

function FeatureCard({
  tag,
  name,
  body,
  chip,
  image,
}: {
  tag: string;
  name: string;
  body: string;
  chip: string;
  image?: string;
}) {
  return (
    <li className="relative p-7 md:p-9 rounded-xl border border-white/10 bg-brand-card hover:border-brand-cyan/40 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 overflow-hidden hover:shadow-[0_24px_80px_-32px_rgba(34,211,238,0.4)]">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(2,6,23,0.55) 60%, rgba(2,6,23,0.7) 100%)",
            }}
          />
        </>
      )}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-40"
      />
      <span className="relative font-mono text-[11px] tracking-[0.18em] uppercase text-brand-cyan font-semibold">
        {tag}
      </span>
      <h3 className="relative font-black text-white text-2xl md:text-3xl tracking-tight m-0 leading-tight">
        {name}
      </h3>
      <p className="relative text-slate-300 text-[15px] leading-relaxed m-0">
        {body}
      </p>
      <span className="relative self-start mt-2 font-mono text-[10.5px] tracking-[0.16em] uppercase font-semibold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/30 px-3 py-1.5 rounded-full">
        {chip}
      </span>
    </li>
  );
}

function ZielmarktCard({
  tag,
  accent,
  heading,
  body,
}: {
  tag: string;
  accent: "blue" | "cyan";
  heading: string;
  body: string;
}) {
  const accentColor =
    accent === "blue" ? "text-brand-blue" : "text-brand-cyan";
  const stripVia = accent === "blue" ? "via-brand-blue" : "via-brand-cyan";
  return (
    <div className="relative p-6 md:p-7 rounded-xl border border-white/10 bg-brand-card flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 overflow-hidden">
      <span
        aria-hidden="true"
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${stripVia} to-transparent opacity-50`}
      />
      <span
        className={`font-mono text-[11px] tracking-[0.18em] uppercase ${accentColor} font-semibold`}
      >
        {tag}
      </span>
      <h3 className="font-black text-white text-lg md:text-xl tracking-tight m-0 leading-tight">
        {heading}
      </h3>
      <p className="text-slate-300 text-[14px] leading-relaxed m-0">{body}</p>
    </div>
  );
}
