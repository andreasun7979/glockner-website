import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  // Design-Alternative, durch /leistungen-lux3 abgelöst — aus dem Index halten (Duplicate Content).
  robots: { index: false, follow: true },
  title: "Leistungen · Lux 2 — Money Making AI",
  description:
    "Drei Säulen, die Geld machen: Fundament, Grow Design, Grow Marketing & Sales. Wie Künstliche Intelligenz zum Umsatzmotor Ihres Unternehmens wird.",
};

type Card = {
  tag: string;
  kind: string;
  name: string;
  what: React.ReactNode;
  result: React.ReactNode;
  cta?: string;
  soon?: boolean;
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
    result: (
      <>
        <span className="font-mono text-brand-cyan">12&ndash;30&thinsp;%</span>{" "}
        mehr
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
    result: (
      <>
        <span className="font-mono text-brand-cyan">Mehr Geld mit KI</span>{" "}
        &mdash; fünfstelliger Mehrumsatz, in 4&ndash;6 Wochen.
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
    tag: "M.05",
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
    tag: "M.06",
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

type PillarImage = {
  src: string;
  alt: string;
  prompt: string;
};

function ImageSlot({ image }: { image: PillarImage }) {
  return (
    <div className="relative aspect-square w-32 md:w-40 rounded-xl overflow-hidden border border-white/10 bg-brand-card">
      <Image
        src={image.src}
        alt={image.alt}
        width={320}
        height={320}
        className="h-full w-full object-cover"
        sizes="(min-width: 768px) 160px, 128px"
      />
    </div>
  );
}

function PillarRow({
  id,
  num,
  name,
  sub,
  cards,
  cols,
  image,
}: {
  id?: string;
  num: string;
  name: string;
  sub: React.ReactNode;
  cards: Card[];
  cols: 3 | 4 | 6;
  image?: PillarImage;
}) {
  const gridClass =
    cols === 6
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : cols === 4
        ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section id={id} className="py-12 md:py-16 border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
          <header className="lg:sticky lg:top-24 space-y-4">
            {image && <ImageSlot image={image} />}
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-cyan font-semibold">
              {num}
            </div>
            <h2 className="font-bold text-4xl md:text-5xl text-white leading-[1.06] tracking-tight">
              {name}
              <span className="text-brand-cyan">.</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed max-w-xs">
              {sub}
            </p>
          </header>

          <ol className={`grid ${gridClass} gap-3 md:gap-4 list-none m-0 p-0`}>
            {cards.map((c) => (
              <li
                key={c.tag}
                className={`relative flex flex-col gap-2 p-4 md:p-5 rounded-lg border bg-brand-card transition-all duration-300 ${
                  c.soon
                    ? "border-dashed border-white/15 opacity-60"
                    : "border-white/10 hover:border-brand-cyan/40 hover:-translate-y-1 hover:shadow-[0_18px_60px_-22px_rgba(34,211,238,0.45)]"
                }`}
              >
                {!c.soon && (
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/60 to-transparent opacity-50"
                  />
                )}
                <div className="flex items-center justify-between font-mono text-[10.5px] tracking-[0.14em] uppercase text-slate-500">
                  <span className="text-brand-cyan font-semibold">{c.tag}</span>
                  <span className="border border-white/10 px-2 py-0.5 rounded-full text-[9.5px]">
                    {c.kind}
                  </span>
                </div>
                <h3 className="font-bold text-white text-base md:text-lg leading-tight tracking-tight m-0">
                  {c.name}
                </h3>
                <p className="text-slate-300 text-[14px] leading-snug font-semibold m-0">
                  {c.what}
                </p>
                <div className="flex items-center justify-between gap-2 pt-2 mt-auto border-t border-white/10 flex-wrap">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-slate-500 font-medium">
                      {c.soon ? "Status" : "Ergebnis"}
                    </span>
                    <span className="font-bold text-white text-[13px]">
                      {c.result}
                    </span>
                  </div>
                  {c.soon ? (
                    <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase font-semibold text-slate-400 px-2.5 py-1.5 border border-dashed border-white/20 rounded-full">
                      Bald verfügbar
                    </span>
                  ) : (
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-1.5 text-[12px] font-bold text-white hover:text-brand-cyan border-b border-white/20 hover:border-brand-cyan transition-all"
                    >
                      Anfragen
                      <svg
                        width="12"
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
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default function LeistungenLux2Page() {
  return (
    <>
      {/* HERO ───────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 to-brand-dark" />
        <div
          className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vw] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.18), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(34,211,238,0.14), transparent 60%)",
            filter: "blur(90px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="flex flex-col gap-1 leading-tight tracking-tight m-0">
            <span className="text-sm md:text-base font-extrabold tracking-[0.04em] uppercase gradient-text inline-block self-start pb-2">
              Glockner&nbsp;AI =
            </span>
            <span className="text-white font-black text-5xl md:text-7xl lg:text-8xl leading-[1.02]">
              Money Making&nbsp;AI<span className="text-brand-cyan">.</span>
            </span>
            <span className="text-slate-300 font-bold text-xl md:text-3xl leading-snug tracking-tight mt-3">
              Wie Künstliche Intelligenz zum{" "}
              <em className="not-italic gradient-text font-extrabold">
                Umsatzmotor
              </em>{" "}
              Ihres Unternehmens wird.
            </span>
          </h1>

        </div>
      </section>

      {/* ÜBERBLICK — editorial section header (NICHT zweite Hero) ───────── */}
      <section
        id="ueberblick"
        className="py-14 md:py-20 relative overflow-hidden border-t border-white/5 scroll-mt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Asymmetric 12-col header */}
          <div className="grid lg:grid-cols-12 gap-x-8 gap-y-5 items-end">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="block w-8 h-px bg-brand-cyan/60"
                />
                <span className="font-mono text-[10.5px] md:text-[11px] tracking-[0.24em] uppercase text-brand-cyan font-semibold">
                  § Was wir konkret für Sie tun
                </span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <h2 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-3xl m-0">
                Drei Säulen,{" "}
                <em className="not-italic gradient-text font-bold">
                  die Geld machen
                </em>
                <span className="text-brand-cyan">.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed">
                Jede Säule für sich rechnet sich. Zusammen ersetzen sie Ihr
                klassisches Marketing-Team und werden zum{" "}
                <em className="not-italic gradient-text font-semibold">
                  eigenständigen Asset
                </em>{" "}
                Ihres Unternehmens.
              </p>
            </div>
          </div>

          {/* Anchor-linked pillar overview */}
          <ol className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 list-none m-0 p-0">
            <li>
              <a
                href="#fundament"
                className="group relative block p-5 md:p-6 rounded-lg border border-white/10 bg-brand-card hover:border-brand-blue/40 hover:-translate-y-0.5 transition-all duration-300 h-full"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-50 group-hover:opacity-100 transition-opacity"
                />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-blue font-semibold">
                    N° 02
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-[11px] tracking-[0.18em] uppercase text-slate-500 group-hover:text-brand-blue transition-colors"
                  >
                    Springen ↓
                  </span>
                </div>
                <h3 className="font-black text-white text-2xl md:text-3xl tracking-tight m-0 mt-2">
                  Fundament<span className="text-brand-blue">.</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed m-0 mt-1.5">
                  Audit, Knowledge Base, Markenstimme.
                </p>
              </a>
            </li>
            <li>
              <a
                href="#grow-design"
                className="group relative block p-5 md:p-6 rounded-lg border border-white/10 bg-brand-card hover:border-brand-cyan/40 hover:-translate-y-0.5 transition-all duration-300 h-full"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50 group-hover:opacity-100 transition-opacity"
                />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-cyan font-semibold">
                    N° 03
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-[11px] tracking-[0.18em] uppercase text-slate-500 group-hover:text-brand-cyan transition-colors"
                  >
                    Springen ↓
                  </span>
                </div>
                <h3 className="font-black text-white text-2xl md:text-3xl tracking-tight m-0 mt-2">
                  Grow Design<span className="text-brand-cyan">.</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed m-0 mt-1.5">
                  Website, Webshop, Multi-Screen, Split Testing.
                </p>
              </a>
            </li>
            <li>
              <a
                href="#grow-ms"
                className="group relative block p-5 md:p-6 rounded-lg border border-white/10 bg-brand-card hover:border-brand-cyan/40 hover:-translate-y-0.5 transition-all duration-300 h-full"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50 group-hover:opacity-100 transition-opacity"
                />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-cyan font-semibold">
                    N° 04
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-[11px] tracking-[0.18em] uppercase text-slate-500 group-hover:text-brand-cyan transition-colors"
                  >
                    Springen ↓
                  </span>
                </div>
                <h3 className="font-black text-white text-2xl md:text-3xl tracking-tight m-0 mt-2">
                  Grow M&amp;S<span className="text-brand-cyan">.</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed m-0 mt-1.5">
                  Software, E-Mail, Dream 100, Voice, SEO &amp; GEO.
                </p>
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* PILLAR 1: FUNDAMENT ───────────── */}
      {/* NANO-BANANA PROMPT (Fundament) ↓
          Generate as 1024x1024, save to /public/banana/fundament.webp */}
      <PillarRow
        id="fundament"
        num="N° 02 · Fundament"
        name="Fundament"
        sub={
          <>
            Audit, Knowledge Base, Markenstimme. Alles, worauf Ihre KI{" "}
            <em className="not-italic text-brand-blue font-bold">aufsetzt</em>.
          </>
        }
        cards={fundament}
        cols={3}
        image={{
          src: "/banana/fundament.webp",
          alt: "Drei Glas-Säulen mit cyan leuchtendem Kern auf einem leuchtenden Raster",
          prompt:
            "Editorial 3D render, ultra-minimal: three transparent glass cylindrical pillars of slightly different heights, standing on a faintly glowing thin-line grid floor that fades into deep midnight blue space (#020617). The center pillar emits a soft volumetric glow from within in electric cyan (#06b6d4). The outer pillars carry a subtle inner blue gradient (#3b82f6). Single soft directional light from above-left, refined glass and matte materials, magazine-quality editorial composition with generous negative space, no text, no logos, no UI, no people. Square 1:1 aspect ratio, photorealistic, dark theme.",
        }}
      />

      {/* PILLAR 2: GROW DESIGN ─────────── */}
      {/* NANO-BANANA PROMPT (Grow Design) ↓
          Generate as 1024x1024, save to /public/banana/grow-design.webp */}
      <PillarRow
        id="grow-design"
        num="N° 03 · Grow Design"
        name="Grow Design"
        sub={
          <>
            Die Verkaufsfläche. Bauen, ausspielen, testen &mdash; alles mit KI
            auf{" "}
            <em className="not-italic text-brand-cyan font-bold">
              maximale Conversion
            </em>{" "}
            getrimmt.
          </>
        }
        cards={design}
        cols={4}
        image={{
          src: "/banana/grow-design.webp",
          alt: "Gestaffelte transluzente Display-Panels mit cyan leuchtendem Punkt vorne",
          prompt:
            "Editorial 3D render, ultra-minimal: three layered translucent rectangular glass panels floating diagonally in deep midnight blue space (#020617), each panel slightly offset behind the previous like a perspective stack, each panel carrying only abstract wireframe geometry (thin lines, dots, soft squares — absolutely no readable UI, no text, no icons, no buttons). The frontmost panel features a single bright cyan dot (#06b6d4) glowing softly. Rear panels fade into a deep blue gradient (#3b82f6). Single soft volumetric light from upper-right, refined glass and frosted materials, generous negative space, magazine-quality editorial composition. Square 1:1 aspect ratio, dark theme, photorealistic.",
        }}
      />

      {/* PILLAR 3: GROW MARKETING & SALES */}
      {/* NANO-BANANA PROMPT (Grow M&S) ↓
          Generate as 1024x1024, save to /public/banana/grow-ms.webp */}
      <PillarRow
        id="grow-ms"
        num="N° 04 · Grow Marketing & Sales"
        name="Grow M&S"
        sub={
          <>
            Marketing & Sales aus der Zukunft. Sechs Hebel &mdash; einzeln
            buchbar, in Kombination{" "}
            <em className="not-italic text-brand-cyan font-bold">wirksam</em>.
          </>
        }
        cards={marketing}
        cols={6}
        image={{
          src: "/banana/grow-ms.webp",
          alt: "Konstellation aus glühenden Knoten, durch dünne Kurven verbunden",
          prompt:
            "Editorial 3D render, ultra-minimal: a constellation of six small glowing nodes floating in deep midnight blue space (#020617), connected by thin elegant curving lines like a graph or relationship map. The central node glows brightest in electric cyan (#06b6d4) with a subtle volumetric halo. Surrounding nodes fade through deep blue (#3b82f6) tones. Lines have a faint cyan-to-blue gradient and feel hand-drawn but precise. Single soft volumetric light, generous negative space, magazine-quality editorial composition, no text, no logos, no UI. Square 1:1 aspect ratio, dark theme, photorealistic.",
        }}
      />

      {/* WAS UNS AUSMACHT ──────────────── */}
      <section className="py-16 md:py-20 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.08), transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(59,130,246,0.08), transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mb-10 md:mb-14">
            <span className="block font-mono text-[11px] tracking-[0.18em] uppercase text-brand-cyan font-semibold mb-4">
              Was uns ausmacht
            </span>
            <h2 className="text-white font-black text-3xl md:text-5xl leading-[1.08] tracking-tight m-0">
              Was bei uns{" "}
              <em className="not-italic gradient-text font-extrabold">
                immer
              </em>{" "}
              mit dabei ist.
            </h2>
          </header>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 list-none m-0 p-0">
            <li className="relative p-6 md:p-8 rounded-xl border border-white/10 bg-brand-card hover:border-brand-cyan/40 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-40"
              />
              <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-brand-cyan font-semibold">
                Compliance
              </span>
              <h3 className="font-bold text-white text-xl md:text-2xl tracking-tight m-0">
                100&thinsp;% DSGVO-konform.
              </h3>
              <p className="text-slate-300 text-[15px] leading-relaxed m-0">
                Alle sensiblen Daten laufen ausschließlich auf europäischen
                Servern. KI-Lösungen, die in Österreich und der EU rechtlich
                sauber bestehen &mdash; heute und nach den nächsten
                Verschärfungen.
              </p>
              <span className="self-start mt-2 font-mono text-[10.5px] tracking-[0.14em] uppercase font-semibold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/30 px-2.5 py-1.5 rounded-full">
                EU-Server only
              </span>
            </li>

            <li className="relative p-6 md:p-8 rounded-xl border border-white/10 bg-brand-card hover:border-brand-cyan/40 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-40"
              />
              <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-brand-cyan font-semibold">
                Know-how
              </span>
              <h3 className="font-bold text-white text-xl md:text-2xl tracking-tight m-0">
                12&nbsp;Mrd.&nbsp;€ Marketing-DNA.
              </h3>
              <p className="text-slate-300 text-[15px] leading-relaxed m-0">
                Wir bauen nicht nur. Wir bauen mit Marketing- und
                Sales-Frameworks, die nachweislich über 12&nbsp;Milliarden&nbsp;€
                Umsatz generiert haben &mdash; eingebaut in jede Website, jeden
                Funnel, jede Sequenz.
              </p>
              <span className="self-start mt-2 font-mono text-[10.5px] tracking-[0.14em] uppercase font-semibold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/30 px-2.5 py-1.5 rounded-full">
                12&thinsp;Mrd.&thinsp;€ validiert
              </span>
            </li>
          </ol>
        </div>
      </section>

      {/* B2B / B2C ────────────────────── */}
      <section className="py-12 md:py-14 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
            <header className="space-y-3">
              <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-cyan font-semibold">
                Zielmarkt
              </div>
              <h2 className="font-bold text-2xl md:text-3xl text-white leading-tight tracking-tight">
                Egal ob Ihre Kunden{" "}
                <em className="not-italic gradient-text font-extrabold">
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
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-brand-blue font-semibold">
                  B2B
                </span>
                <h3 className="font-bold text-white text-base md:text-lg tracking-tight m-0">
                  Sie verkaufen an Unternehmen.
                </h3>
                <p className="text-slate-300 text-[14px] leading-relaxed m-0">
                  Lead-Pipelines, Partner-Outreach, qualifizierte Sales-Gespräche &mdash; KI baut den Vertriebskanal, den Ihre Branche braucht.
                </p>
              </div>

              <div className="relative p-5 md:p-6 rounded-lg border border-white/10 bg-brand-card flex flex-col gap-2">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-brand-cyan font-semibold">
                  B2C
                </span>
                <h3 className="font-bold text-white text-base md:text-lg tracking-tight m-0">
                  Sie verkaufen an Endkunden.
                </h3>
                <p className="text-slate-300 text-[14px] leading-relaxed m-0">
                  Webshops, E-Mail-Reaktivierung, Markenstimme, Bewertungs-Outreach &mdash; KI macht aus Besuchern Kunden und aus Kunden Wiederkäufer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA ────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-brand-dark to-brand-cyan/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Eine Stunde reicht, um zu sehen, <em className="not-italic gradient-text">welcher Pile</em> bei Ihnen zuerst dran ist.
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Bis zu 80&nbsp;% WKO-Förderung möglich. Antwort innerhalb eines
            Werktages.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-10 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-brand-cyan/25 transition-all"
          >
            Analyse sichern
          </Link>
        </div>
      </section>
    </>
  );
}
