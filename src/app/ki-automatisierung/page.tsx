import type { Metadata } from "next";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Eigenständige Russell-Brunson-Stil Sales-Landingpage für das
 * Glockner-AI-Retainer-Modell (€ 2.500 / Monat). Eigene Route /ki-automatisierung,
 * Aurum-Design wie Lux3. In der Middleware als Passthrough freigegeben.
 *
 * Bewusst noindex (Direct-/Ad-Traffic-Seite), damit sie nicht mit der
 * Startseite konkurriert — bei Bedarf in der Metadata umschalten.
 */
export const metadata: Metadata = {
  title: { absolute: "Ihr AI-Team für € 2.500/Monat — der Glockner AI Retainer" },
  description:
    "KI-Automatisierung für KMU mit dem Glockner-AI-Retainer: jeden Monat neue Automatisierungen, ohne Großprojekt. Ab € 2.500/Monat, monatlich kündbar.",
  alternates: { canonical: "/ki-automatisierung" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Ihr AI-Team für € 2.500/Monat — der Glockner AI Retainer",
    description:
      "Jeden Monat neue KI-Automatisierungen, die in Ihrem Unternehmen arbeiten. Mehr Effizienz & Effektivität, weniger Kosten. Ab € 2.500/Monat.",
    url: "/ki-automatisierung",
  },
};

/* ============================================================
   Sacred-geometry Ornamente (inline, identisch zum Lux3-Stil)
   ============================================================ */

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
        <linearGradient id="rt-grad" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#d8bd8a" />
          <stop offset="55%" stopColor="#c9a86a" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        {glowing && (
          <radialGradient id="rt-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0e0b8" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#d8bd8a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#c9a86a" stopOpacity="0" />
          </radialGradient>
        )}
      </defs>
      <circle cx="50" cy="38" r="22" stroke="url(#rt-grad)" strokeWidth="0.9" opacity="0.85" />
      <circle cx="34" cy="62" r="22" stroke="url(#rt-grad)" strokeWidth="0.9" opacity="0.85" />
      <circle cx="66" cy="62" r="22" stroke="url(#rt-grad)" strokeWidth="0.9" opacity="0.85" />
      {glowing && (
        <>
          <circle cx="50" cy="50" r="14" fill="url(#rt-core)" className="aurum-pulse-halo" />
          <circle cx="50" cy="50" r="2.5" fill="#f0e0b8" className="aurum-pulse-core" />
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
  const w = width === "wide" ? "w-24 md:w-40" : "w-12 md:w-20";
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className={`block ${w} h-px bg-gradient-to-r from-transparent to-aurum/55`} />
      <span className="block w-1.5 h-1.5 rounded-full bg-aurum shadow-[0_0_12px_rgba(201,168,106,0.6)]" />
      <span className={`block ${w} h-px bg-gradient-to-l from-transparent to-aurum/55`} />
    </div>
  );
}

function FlowerOfLifeBackdrop({ className = "" }: { className?: string }) {
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
          return circles.map((c, i) => <circle key={i} cx={c.cx} cy={c.cy} r={r} />);
        })()}
      </g>
    </svg>
  );
}

/* Pfeil-Icon für Buttons */
function ArrowRight() {
  return (
    <svg width="14" height="10" viewBox="0 0 18 14" aria-hidden="true">
      <path
        d="M1 7h15m0 0L10 1m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Check({ className = "text-aurum" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`flex-shrink-0 mt-0.5 ${className}`}
    >
      <path d="M5 12.5l4 4L19 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const goldBtn =
  "inline-flex items-center justify-center gap-2.5 rounded-xl font-bold text-brand-dark bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border border-aurum/60 hover:from-aurum hover:via-aurum-soft hover:to-aurum hover:border-aurum-soft hover:-translate-y-0.5 transition-all duration-500 shadow-[0_8px_28px_-8px_rgba(201,168,106,0.55)] hover:shadow-[0_14px_40px_-10px_rgba(201,168,106,0.7)]";

/* ============================================================
   PAGE
   ============================================================ */

export default function RetainerPage() {
  return (
    <div className="reveal-scope">
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#040b1a] to-brand-dark" />
        <div
          className="absolute top-[14%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[900px] aspect-square rounded-full opacity-70 aurum-breathe"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,106,0.16) 0%, rgba(6,182,212,0.10) 35%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <FlowerOfLifeBackdrop className="w-[800px] max-w-[110vw] aurum-rotate-slow opacity-60" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-7">
            <Triquetra size={42} glowing />
          </div>

          <div className="inline-flex items-center gap-2.5 rounded-full border border-aurum/30 bg-aurum/10 px-4 py-1.5 mb-7">
            <span className="block w-1.5 h-1.5 rounded-full bg-aurum animate-pulse" />
            <span className="font-mono text-[10.5px] md:text-[11px] tracking-[0.22em] uppercase text-aurum/90 font-semibold">
              Der KI-Retainer für KMU
            </span>
          </div>

          <h1 className="font-serif-display font-medium text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.04] tracking-[-0.025em] m-0">
            Mehr Effizienz. Mehr Effektivität.{" "}
            <em className="aurum-text not-italic font-medium">
              Spürbar weniger Kosten.
            </em>
          </h1>

          <div className="mt-9 mb-8">
            <GoldDivider width="wide" />
          </div>

          <p className="text-slate-200 text-lg md:text-2xl leading-snug max-w-3xl mx-auto m-0 font-serif-display italic">
            Ihr komplettes{" "}
            <span className="aurum-text not-italic font-semibold">AI-Team</span>.
            Für{" "}
            <span className="aurum-text not-italic font-semibold">
              €&thinsp;2.500
            </span>{" "}
            im Monat.
          </p>

          <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Jeden Monat neue KI-Automatisierungen, die in Ihrem Unternehmen
            arbeiten &mdash; ohne ein einziges Großprojekt, ohne Personal
            aufzubauen. Sie sagen, was Sie brauchen. Wir bauen es.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#termin" className={`${goldBtn} px-9 py-4 text-base`}>
              <span>Kostenloses Strategie-Gespräch</span>
              <ArrowRight />
            </Link>
            <a
              href="#ablauf"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-slate-200 border border-white/15 hover:border-aurum/45 hover:text-aurum transition-all"
            >
              <span>So funktioniert&rsquo;s</span>
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-slate-400">
            {[
              "Kein 30.000-€-Projekt",
              "Keine Festanstellung",
              "Monatlich kündbar",
            ].map((t) => (
              <span key={t} className="inline-flex items-center gap-2 text-[13px] font-medium">
                <Check className="text-aurum/80" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── TRUST / STAT-STRIP ───────── */}
      <section className="relative border-y border-white/5 bg-[#050d1f]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-center">
            {[
              { n: "Tage", l: "von der Idee zur fertigen Automatisierung — nicht Monate" },
              { n: "1–2", l: "neue KI-Systeme jeden einzelnen Monat" },
              { n: "24/7", l: "Ihre stille Armee aus KI-Agents im Einsatz" },
              { n: "100 %", l: "DSGVO-konform, EU-Server only" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif-display aurum-text text-3xl md:text-4xl font-medium leading-none">
                  {s.n}
                </div>
                <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-slate-500 mt-2.5 leading-snug max-w-[200px] mx-auto">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── DER WANDEL / PROBLEM ───────── */}
      <section className="relative py-20 md:py-28 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#050d1f] to-brand-dark" />
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 75% 30%, rgba(201,168,106,0.10), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mb-12 md:mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span aria-hidden="true" className="block w-10 aurum-rule" />
              <span className="font-mono text-[10.5px] tracking-[0.28em] uppercase text-aurum/85 font-semibold">
                Etwas hat sich verändert
              </span>
            </div>
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              Die alte Welt der KI-Projekte ist{" "}
              <em className="aurum-text not-italic font-medium">vorbei</em>.
            </h2>
            <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed">
              Bis vor Kurzem hieß &bdquo;KI im Unternehmen&ldquo;: ein
              Großprojekt für 20.000, 30.000 oder 40.000&thinsp;&euro;.
              Monatelange Entwicklung. Hohes Risiko. Und am Ende eine starre
              Lösung, die niemand mehr anfasst. Genau das hat die meisten KMU
              abgeschreckt &mdash; <em>zu Recht</em>.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {/* alt */}
            <div className="relative p-7 md:p-8 rounded-2xl border border-white/10 bg-brand-card overflow-hidden">
              <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-slate-500 font-semibold">
                Der alte Weg
              </span>
              <h3 className="font-serif-display font-medium text-slate-200 text-2xl mt-3 mb-5">
                Das Einmal-Großprojekt
              </h3>
              <ul className="space-y-3 m-0 p-0 list-none">
                {[
                  "20.000–40.000 € auf den Tisch, bevor irgendetwas läuft",
                  "Monate bis zum ersten Ergebnis",
                  "Hohes Risiko: zahlt sich das jemals aus?",
                  "Starre Lösung — Änderungen kosten extra",
                  "Danach allein gelassen mit der Technik",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-slate-400 text-[15px] leading-snug">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0 mt-0.5 text-slate-600">
                      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* neu */}
            <div className="relative p-7 md:p-8 rounded-2xl border border-aurum/35 bg-brand-card overflow-hidden hover:-translate-y-1 transition-all duration-500">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-60"
              />
              <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-aurum/85 font-semibold">
                Der neue Weg
              </span>
              <h3 className="font-serif-display font-medium text-white text-2xl mt-3 mb-5">
                Der KI-Retainer
              </h3>
              <ul className="space-y-3 m-0 p-0 list-none">
                {[
                  "Eine planbare Monatspauschale statt großer Vorabsumme",
                  "Erstes System oft in Tagen — nicht Monaten",
                  "Geringes Risiko: monatlich kündbar",
                  "Wächst mit: jeden Monat kommt etwas dazu",
                  "Ein KI-Partner an Ihrer Seite — dauerhaft",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-slate-200 text-[15px] leading-snug">
                    <Check />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-10 text-center font-serif-display italic text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            Dank der neuen KI-Werkzeuge sinken die Entwicklungskosten dramatisch.
            Wir geben diesen Vorsprung an Sie weiter &mdash; als{" "}
            <span className="aurum-text not-italic font-semibold">
              laufenden Hebel auf Ihr Geschäft
            </span>
            .
          </p>
        </div>
      </section>

      {/* ───────── WAS SIE BEKOMMEN — Das Modell ───────── */}
      <section className="relative py-20 md:py-28 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-7">
            <VesicaSeal size={30} />
          </div>
          <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-5">
            Die Idee in einem Satz
          </div>
          <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.02em] m-0">
            Ein{" "}
            <em className="aurum-text not-italic font-medium">KI-Profi</em>{" "}
            an Ihrer Seite &mdash; der jeden Monat baut, wartet und optimiert,
            was Ihr Unternehmen voranbringt.
          </h2>
          <p className="mt-8 text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Sie haben eine neue Anforderung? Sie sagen Bescheid, sie kommt in die
            Warteschlange &mdash; und wir liefern. Genau wie ein abonniertes
            Design-Studio, nur für KI-Automatisierungen und Agents, die echtes
            Geld verdienen und Zeit sparen.
          </p>
        </div>
      </section>

      {/* ───────── DREI HEBEL: Effizienz · Effektivität · Kosten ───────── */}
      <section className="relative py-20 md:py-28 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#050d1f] to-brand-dark" />
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(201,168,106,0.10), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              Drei Hebel, die wir jeden Monat für Sie{" "}
              <em className="aurum-text not-italic font-medium">bewegen</em>.
            </h2>
            <div className="mt-8">
              <GoldDivider />
            </div>
          </header>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 list-none m-0 p-0">
            {[
              {
                roman: "I",
                tag: "Effizienz",
                title: "Mehr schaffen mit weniger",
                body: "Wiederkehrende Aufgaben übernehmen KI-Agents — Angebote, Follow-ups, Reports, Dateneingabe, Recherche. Ihr Team gewinnt Stunden zurück, jede Woche.",
                foot: "Zeit zurück fürs Wesentliche",
              },
              {
                roman: "II",
                tag: "Effektivität",
                title: "Bessere Ergebnisse erzielen",
                body: "Schnellere Reaktionszeiten, kein Lead bleibt liegen, konsistente Qualität rund um die Uhr. KI hebt das Niveau jedes Prozesses — messbar.",
                foot: "Mehr Output, höhere Qualität",
              },
              {
                roman: "III",
                tag: "Kostensenkung",
                title: "Ausgaben spürbar drücken",
                body: "Statt Personal aufzubauen oder teure Tools zu stapeln: eine planbare Pauschale, die mehrere Rollen ersetzt — und mit jeder Automatisierung günstiger pro Ergebnis wird.",
                foot: "Planbar statt explodierend",
              },
            ].map((s) => (
              <li
                key={s.roman}
                className="relative flex flex-col gap-3 p-6 md:p-7 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 hover:shadow-[0_18px_60px_-22px_rgba(201,168,106,0.45)] transition-all duration-500 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum/60 to-transparent opacity-50"
                />
                <span
                  aria-hidden="true"
                  className="font-serif-display absolute right-4 -top-3 text-aurum/[0.10] text-[100px] font-medium leading-none select-none pointer-events-none italic"
                >
                  {s.roman}
                </span>
                <div className="relative">
                  <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-aurum/85 font-semibold">
                    {s.tag}
                  </span>
                  <h3 className="font-serif-display font-medium text-white text-2xl md:text-[27px] tracking-[-0.02em] m-0 mt-3 leading-tight">
                    {s.title}
                    <span className="text-aurum">.</span>
                  </h3>
                  <p className="text-slate-300 text-[15px] leading-relaxed m-0 mt-3">
                    {s.body}
                  </p>
                  <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-slate-500 mt-5 pt-4 border-t border-white/10">
                    {s.foot}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── ABLAUF / SO FUNKTIONIERT'S ───────── */}
      <section
        id="ablauf"
        className="relative py-20 md:py-28 overflow-hidden border-t border-white/5 scroll-mt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#08050f] to-brand-dark" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="grid lg:grid-cols-12 gap-x-8 gap-y-6 items-end mb-14 md:mb-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="block w-10 aurum-rule" />
                <span className="font-mono text-[10.5px] tracking-[0.28em] uppercase text-aurum/85 font-semibold">
                  So läuft es ab
                </span>
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.06] tracking-[-0.02em] m-0">
                In vier Schritten zu Ihrem ersten{" "}
                <em className="aurum-text not-italic font-medium">
                  arbeitenden KI-System
                </em>
                <span className="text-aurum">.</span>
              </h2>
            </div>
          </header>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 list-none m-0 p-0">
            {[
              {
                n: "01",
                title: "Audit & Mapping",
                body: "Wir durchleuchten Ihr Unternehmen und finden die Stellen, an denen KI am schnellsten Zeit, Geld oder Nerven spart.",
              },
              {
                n: "02",
                title: "Erstes System — garantiert",
                body: "Wir bauen die eine Automatisierung, die den Retainer sofort lohnenswert macht. Sie sehen den Wert, bevor Sie sich festlegen.",
              },
              {
                n: "03",
                title: "Ihre Warteschlange",
                body: "Neue Anforderung? Rein in die Queue. Wir priorisieren, bauen, testen — und liefern Monat für Monat das Nächste.",
              },
              {
                n: "04",
                title: "Management & Optimierung",
                body: "Alles, was läuft, wird überwacht und kontinuierlich besser. Erkenntnisse von einem System fließen direkt ins nächste.",
              },
            ].map((s) => (
              <li
                key={s.n}
                className="relative flex flex-col gap-3 p-6 md:p-7 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum/60 to-transparent opacity-50"
                />
                <span className="font-serif-display aurum-text text-4xl md:text-5xl font-medium leading-none">
                  {s.n}
                </span>
                <h3 className="font-serif-display font-medium text-white text-xl md:text-2xl tracking-[-0.02em] m-0 leading-tight">
                  {s.title}
                </h3>
                <p className="text-slate-300 text-[14px] leading-relaxed m-0">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="flex justify-center mt-12">
            <Link href="#termin" className={`${goldBtn} px-8 py-3.5`}>
              <span>Schritt 1 starten — Gespräch buchen</span>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── DAS ANGEBOT / VALUE STACK ───────── */}
      <section
        id="angebot"
        className="relative py-20 md:py-28 overflow-hidden border-t border-white/5 scroll-mt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#050d1f] to-brand-dark" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-[95vw] aspect-square rounded-full aurum-breathe pointer-events-none opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,106,0.18) 0%, rgba(6,182,212,0.08) 35%, transparent 70%)",
            filter: "blur(55px)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex justify-center mb-6">
              <Triquetra size={32} />
            </div>
            <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-5">
              Was Sie jeden Monat bekommen
            </div>
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              <em className="aurum-text not-italic font-medium">Service.</em>{" "}
              Alles drin. Eine Pauschale.
            </h2>
          </header>

          {/* Offer Box */}
          <div className="relative rounded-3xl border border-aurum/35 bg-brand-card overflow-hidden">
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-70"
            />
            <div
              aria-hidden="true"
              className="absolute -top-24 right-0 w-72 h-72 rounded-full pointer-events-none opacity-50 aurum-breathe"
              style={{ background: "radial-gradient(circle, rgba(201,168,106,0.2), transparent 65%)" }}
            />

            <div className="relative p-8 md:p-12">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                <div>
                  <h3 className="font-serif-display font-medium text-white text-2xl md:text-3xl m-0">
                    Glockner AI Retainer
                  </h3>
                  <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-aurum/85 font-semibold mt-2">
                    Ihr AI-Team im Abo
                  </p>
                </div>
                <span className="inline-flex items-center font-mono text-[10.5px] tracking-[0.18em] uppercase font-semibold text-aurum bg-aurum/10 border border-aurum/30 px-3 py-1.5 rounded-full">
                  Monatlich kündbar
                </span>
              </div>

              <ul className="space-y-4 m-0 p-0 list-none mb-9">
                {[
                  {
                    t: "KI-Audit & Opportunity-Mapping",
                    d: "Laufende Analyse, wo der nächste Hebel liegt",
                    v: "€ 2.500",
                  },
                  {
                    t: "1–2 neue Automatisierungen / Agents pro Monat",
                    d: "Gebaut, getestet, produktiv bei Ihnen im Einsatz",
                    v: "€ 6.000+",
                  },
                  {
                    t: "Laufendes Management & Monitoring",
                    d: "Alles, was läuft, bleibt stabil und im Blick",
                    v: "€ 1.500",
                  },
                  {
                    t: "Kontinuierliche Optimierung",
                    d: "Ihre Systeme werden Monat für Monat besser",
                    v: "€ 1.000",
                  },
                  {
                    t: "Direkter Draht zu Ihrem KI-Sparringspartner",
                    d: "Fragen stellen, Ideen klären — jederzeit",
                    v: "unbezahlbar",
                  },
                ].map((row) => (
                  <li
                    key={row.t}
                    className="flex items-start gap-4 pb-4 border-b border-white/8 last:border-0"
                  >
                    <Check />
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold text-[15px] md:text-base leading-snug">
                        {row.t}
                      </div>
                      <div className="text-slate-400 text-[13px] mt-0.5">{row.d}</div>
                    </div>
                    <div className="font-mono text-[12px] text-slate-500 whitespace-nowrap pt-0.5">
                      {row.v}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Preis */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-slate-500">
                    Gegenwert über
                  </span>
                  <span className="text-slate-500 line-through font-mono text-lg">
                    € 11.000+ / Monat
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-serif-display aurum-text text-6xl md:text-7xl font-medium leading-none">
                    € 2.500
                  </span>
                  <span className="font-mono text-sm text-slate-400">/ Monat</span>
                </div>
                <p className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-slate-500 mt-4">
                  zzgl. USt. · monatlich kündbar
                </p>

                <Link href="#termin" className={`${goldBtn} px-9 py-4 text-base mt-7 w-full sm:w-auto`}>
                  <span>Platz sichern — Gespräch buchen</span>
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>

          <p className="text-center font-serif-display italic text-slate-400 text-sm md:text-base mt-7 max-w-xl mx-auto">
            Größere Systeme können einen zusätzlichen Festpreis haben &mdash; Sie
            entscheiden vorher per Klick, wir bauen erst danach. Keine
            Überraschungen.
          </p>
        </div>
      </section>

      {/* ───────── VERGLEICH / PREIS-ANKER ───────── */}
      <section
        id="vergleich"
        className="relative py-20 md:py-28 overflow-hidden border-t border-white/5 scroll-mt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-5">
              Der ehrliche Vergleich
            </div>
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              Rechnen Sie selbst nach<span className="text-aurum">.</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              {
                label: "Eigener Mitarbeiter",
                price: "€ 4.500+",
                unit: "/ Monat",
                points: ["+ Lohnnebenkosten", "Einarbeitung nötig", "Urlaub & Krankheit", "Eine Person, ein Tempo"],
                highlight: false,
              },
              {
                label: "Marketing-Agentur",
                price: "€ 3.000–4.000",
                unit: "/ Monat",
                points: ["Oft nur Reporting", "Wenig Automatisierung", "Kein KI-Fokus", "Lange Vertragsbindung"],
                highlight: false,
              },
              {
                label: "KI-Einmalprojekt",
                price: "€ 20–40k",
                unit: "vorab",
                points: ["Hohe Vorabsumme", "Monate Wartezeit", "Starre Lösung", "Danach allein"],
                highlight: false,
              },
              {
                label: "Glockner AI Retainer",
                price: "€ 2.500",
                unit: "/ Monat",
                points: ["1–2 Systeme / Monat", "Start in Tagen", "Wächst & optimiert", "Monatlich kündbar"],
                highlight: true,
              },
            ].map((c) => (
              <div
                key={c.label}
                className={[
                  "relative flex flex-col rounded-2xl p-6 overflow-hidden transition-all duration-500",
                  c.highlight
                    ? "border border-aurum/45 bg-brand-card lg:-translate-y-3 shadow-[0_18px_60px_-22px_rgba(201,168,106,0.5)]"
                    : "border border-white/10 bg-brand-card/60",
                ].join(" ")}
              >
                {c.highlight && (
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-70"
                  />
                )}
                {c.highlight && (
                  <span className="inline-flex self-start mb-3 font-mono text-[9px] tracking-[0.16em] uppercase text-aurum bg-aurum/10 border border-aurum/30 px-2.5 py-1 rounded-full">
                    Beste Wahl
                  </span>
                )}
                <span
                  className={`font-mono text-[10px] tracking-[0.14em] uppercase font-semibold ${
                    c.highlight ? "text-aurum/85" : "text-slate-500"
                  }`}
                >
                  {c.label}
                </span>
                <div className="mt-3 mb-5">
                  <span
                    className={`font-serif-display font-medium text-2xl md:text-[28px] leading-none ${
                      c.highlight ? "aurum-text" : "text-slate-300"
                    }`}
                  >
                    {c.price}
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 ml-1.5">{c.unit}</span>
                </div>
                <ul className="space-y-2 m-0 p-0 list-none mt-auto">
                  {c.points.map((p) => (
                    <li
                      key={p}
                      className={`flex items-start gap-2 text-[13px] leading-snug ${
                        c.highlight ? "text-slate-200" : "text-slate-400"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`block w-1 h-1 rounded-full mt-[7px] flex-shrink-0 ${
                          c.highlight ? "bg-aurum" : "bg-slate-600"
                        }`}
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center font-serif-display italic text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            Sie zahlen vielleicht heute schon 3&ndash;4&thinsp;Tsd. an eine
            Agentur. Für etwa dasselbe Budget bekommen Sie einen{" "}
            <span className="aurum-text not-italic font-semibold">
              KI-Profi, der tatsächlich baut
            </span>{" "}
            &mdash; Monat für Monat.
          </p>
        </div>
      </section>

      {/* ───────── GARANTIE / RISK REVERSAL ───────── */}
      <section className="relative py-20 md:py-28 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#050d1f] to-brand-dark" />
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(201,168,106,0.10), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl border border-aurum/30 bg-brand-card p-8 md:p-12 overflow-hidden">
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-60"
            />
            <div className="grid md:grid-cols-[auto_1fr] gap-7 md:gap-10 items-center">
              <div className="flex justify-center">
                <div className="relative w-28 h-28 md:w-32 md:h-32">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full aurum-rotate-slow"
                    style={{
                      background:
                        "conic-gradient(from 0deg, rgba(201,168,106,0.35), rgba(201,168,106,0.9), rgba(6,182,212,0.6), rgba(201,168,106,0.35))",
                      padding: "1px",
                      WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                  <div className="absolute inset-2 rounded-full bg-brand-dark flex items-center justify-center">
                    <Triquetra size={48} glowing />
                  </div>
                </div>
              </div>
              <div>
                <div className="font-mono text-[10.5px] tracking-[0.28em] uppercase text-aurum/85 font-semibold mb-4">
                  Unser Versprechen
                </div>
                <h2 className="font-serif-display font-medium text-white text-2xl md:text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em] m-0">
                  Das erste System beweist seinen Wert &mdash;{" "}
                  <em className="aurum-text not-italic font-medium">
                    bevor Sie sich binden
                  </em>
                  .
                </h2>
                <p className="mt-5 text-slate-300 text-base md:text-lg leading-relaxed">
                  Wir starten mit der einen Automatisierung, die sich für Sie
                  sofort rechnet. Sie sehen das Ergebnis live. Überzeugt es nicht,
                  sind Sie nicht gebunden &mdash; der Retainer ist{" "}
                  <em className="aurum-text not-italic font-semibold">
                    monatlich kündbar
                  </em>
                  . Kein Risiko, das in einem Großprojekt schlummert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FÜR WEN / SCARCITY ───────── */}
      <section className="relative py-20 md:py-24 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <VesicaSeal size={22} />
                <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-aurum/85 font-semibold">
                  Für wen das ist
                </span>
              </div>
              <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl leading-[1.1] tracking-[-0.02em] m-0">
                Gemacht für kleine &amp; mittlere{" "}
                <em className="aurum-text not-italic font-medium">Unternehmen</em>
                .
              </h2>
              <ul className="mt-7 space-y-3.5 m-0 p-0 list-none">
                {[
                  "Sie führen ein KMU und wollen KI nutzen — ohne IT-Abteilung",
                  "Sie haben wiederkehrende Abläufe, die Zeit & Geld fressen",
                  "Sie wollen Ergebnisse, keine monatelangen Projekte",
                  "Sie schätzen einen festen Ansprechpartner statt Ticket-Systemen",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-slate-200 text-[15px] leading-snug">
                    <Check />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-2xl border border-aurum/30 bg-brand-card p-7 md:p-9 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-60"
              />
              <div className="font-mono text-[10.5px] tracking-[0.24em] uppercase text-aurum/85 font-semibold mb-4">
                Bewusst limitiert
              </div>
              <h3 className="font-serif-display font-medium text-white text-2xl md:text-3xl leading-tight m-0">
                Wir nehmen nur eine Handvoll Kunden.
              </h3>
              <p className="mt-5 text-slate-300 text-[15px] leading-relaxed">
                Damit jedes Unternehmen die Tiefe bekommt, die ein Retainer
                braucht, arbeiten wir bewusst mit wenigen Kunden gleichzeitig.
                So liefern wir jeden Monat echte Ergebnisse statt
                Standard-Templates.
              </p>
              <div className="mt-7 pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="font-serif-display aurum-text text-4xl md:text-5xl font-medium leading-none">
                  4
                </div>
                <div className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-slate-400 leading-snug">
                  Neukunden pro Quartal &mdash;<br />sichern Sie sich Ihren Platz
                </div>
              </div>
              <Link href="#termin" className={`${goldBtn} px-7 py-3.5 mt-7 w-full`}>
                <span>Verfügbarkeit prüfen</span>
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section
        id="faq"
        className="relative py-20 md:py-28 overflow-hidden border-t border-white/5 scroll-mt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#050d1f] to-brand-dark" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12 md:mb-14">
            <div className="flex justify-center mb-6">
              <VesicaSeal size={26} />
            </div>
            <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-5">
              Häufige Fragen
            </div>
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              Was Sie noch wissen wollen.
            </h2>
          </header>

          <div className="space-y-3">
            {[
              {
                q: "Was ist eine „Automatisierung“ überhaupt?",
                a: "Jeder wiederkehrende Ablauf, der heute Hände kostet: automatische Angebotserstellung, Lead-Qualifizierung, E-Mail-Sequenzen, Reports, Daten zwischen Tools synchronisieren, ein KI-Chatbot oder Voice-Agent. Im Erstgespräch finden wir genau die, die bei Ihnen am meisten bringt.",
              },
              {
                q: "Wie schnell sehe ich das erste Ergebnis?",
                a: "Dank moderner KI-Werkzeuge geht es heute in Tagen statt Monaten. Das erste System bauen wir gleich zu Beginn — damit sich der Retainer für Sie sofort lohnt.",
              },
              {
                q: "Bin ich langfristig gebunden?",
                a: "Nein. Der Retainer ist monatlich kündbar. Wir wollen Sie mit Ergebnissen halten, nicht mit Verträgen.",
              },
              {
                q: "Brauche ich technisches Wissen?",
                a: "Nein. Sie sagen uns, was Sie brauchen — wir kümmern uns um Aufbau, Tests, Betrieb und Optimierung. Sie bleiben im Fachlichen, wir im Technischen.",
              },
              {
                q: "Sind meine Daten sicher?",
                a: "Ja. Wir arbeiten 100 % DSGVO-konform, ausschließlich auf europäischen Servern. Datenschutz & Security sind Teil jeder Lösung, nicht ein Nachgedanke.",
              },
              {
                q: "Was, wenn ich in einem Monat nichts brauche?",
                a: "Dann fließt die Kapazität in Optimierung und Wartung Ihrer bestehenden Systeme — oder wir bringen proaktiv neue Ideen ein. Ihr Budget arbeitet immer für Sie.",
              },
              {
                q: "Gibt es eine Förderung?",
                a: "Ja — über die Glockner-AI-Förderung erhalten Sie 30 % auf Ihr KI-Projekt. Die staatliche KMU.DIGITAL-Förderung ist für 2026 ausgeschöpft. Details klären wir gemeinsam.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-white/10 bg-brand-card overflow-hidden transition-colors open:border-aurum/35"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 select-none">
                  <span className="font-serif-display font-medium text-white text-lg md:text-xl tracking-tight">
                    {f.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-aurum transition-transform duration-300 group-open:rotate-45"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 -mt-1 text-slate-300 text-[15px] leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FINAL CTA ───────── */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#070f23] to-brand-dark" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-[95vw] aspect-square rounded-full aurum-breathe pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,106,0.22) 0%, rgba(6,182,212,0.10) 35%, transparent 70%)",
            filter: "blur(50px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-7">
            <Triquetra size={36} glowing />
          </div>
          <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
            Holen Sie sich den{" "}
            <em className="aurum-text not-italic font-medium">unfairen Vorteil</em>{" "}
            &mdash; bevor es Ihre Konkurrenz tut.
          </h2>
          <div className="mt-10 mb-8">
            <GoldDivider width="wide" />
          </div>
          <p className="font-serif-display italic text-slate-300 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            30 Minuten. Wir zeigen Ihnen die 1&ndash;2 Automatisierungen, die bei
            Ihnen sofort Wirkung zeigen.
          </p>
          <Link href="#termin" className={`${goldBtn} px-10 py-4 text-base`}>
            <span>Kostenloses Strategie-Gespräch sichern</span>
            <ArrowRight />
          </Link>
        </div>
      </section>

      {/* ───────── TERMINBUCHUNG ───────── */}
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
              <em className="aurum-text not-italic font-medium">Klarheit.</em>
            </h2>
            <div className="mt-7">
              <GoldDivider />
            </div>
            <p className="font-serif-display italic text-slate-300 text-lg md:text-xl mt-7 leading-relaxed">
              Wählen Sie ein Datum und eine Uhrzeit &mdash; kostenlos und
              unverbindlich.
            </p>
          </header>

          <BookingWidget
            eyebrow="Retainer-Erstgespräch"
            hostName="Glockner AI"
            promise="Wir zeigen Ihnen in 30 Minuten, welche 1–2 Automatisierungen bei Ihnen sofort Zeit und Kosten sparen — und wie der Retainer für Sie konkret aussieht."
          />
        </div>
      </section>

      {/* ───────── STICKY MOBILE CTA ───────── */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden">
        <div className="bg-brand-dark/90 backdrop-blur-md border-t border-aurum/25 px-4 py-3">
          <Link href="#termin" className={`${goldBtn} w-full py-3.5 text-[15px]`}>
            <span>€ 2.500/Monat — Gespräch buchen</span>
            <ArrowRight />
          </Link>
        </div>
      </div>
      <ScrollReveal />
    </div>
  );
}
