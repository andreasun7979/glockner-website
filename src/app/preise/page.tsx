import type { Metadata } from "next";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";
import {
  Triquetra,
  VesicaSeal,
  GoldDivider,
  FlowerOfLifeBackdrop,
  ArrowRight,
  Check,
  goldBtn,
  ghostBtn,
} from "@/components/aurum/Ornaments";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: { absolute: "Preise — Training, Service & Produkt | Glockner AI" },
  description:
    "Transparente Preise für KI mit Glockner AI: Training (ab € 1.500/Monat), Service-Retainer (€ 2.500/Monat) oder Produkt (individueller Festpreis). Alles drin, eine Pauschale.",
  alternates: { canonical: "/preise" },
  openGraph: {
    title: "Preise — Training, Service & Produkt | Glockner AI",
    description:
      "Training, Service-Retainer oder Produkt — transparente Preise. Sie wählen, wie wir zusammenarbeiten.",
    url: "/preise",
  },
};

/* Drei Wege — identisch zur /v2-Auswahl gehalten. */
const wege = [
  {
    badge: "Weg I",
    name: "Training",
    tagline: "Wir bringen Ihnen Agentic AI bei.",
    body: "AI-OS Setup, Claude Code & Agenten-System eingerichtet, plus Schulung — inkl. 3 Monate Begleitung (oder länger).",
    price: "ab € 1.500",
    priceNote: "pro Monat · Setup extra",
    href: "/ki-schulungen",
    cta: "Training ansehen",
    featured: false,
  },
  {
    badge: "Weg II",
    name: "Service",
    tagline: "Ihr AI-Team im Abo.",
    body: "Jeden Monat 1–2 neue Automatisierungen — gebaut, getestet, betreut und optimiert. Monatlich kündbar.",
    price: "€ 2.500",
    priceNote: "pro Monat",
    href: "/ki-automatisierung",
    cta: "Retainer ansehen",
    featured: true,
  },
  {
    badge: "Weg III",
    name: "Produkt",
    tagline: "Sie bekommen das fertige System.",
    body: "Maßgeschneiderte KI-Software & Apps — von Dashboards bis zur kompletten internen Anwendung. Custom Coding, fertig geliefert.",
    price: "Individuell",
    priceNote: "Festpreis pro Projekt",
    href: "/ki-software",
    cta: "Produkt ansehen",
    featured: false,
  },
];

/* Retainer-Offer-Stack — gespiegelt von /ki-automatisierung. */
const offer = [
  { t: "KI-Audit & Opportunity-Mapping", d: "Laufende Analyse, wo der nächste Hebel liegt", v: "€ 2.500" },
  { t: "1–2 neue Automatisierungen / Agents pro Monat", d: "Gebaut, getestet, produktiv bei Ihnen im Einsatz", v: "€ 6.000+" },
  { t: "Laufendes Management & Monitoring", d: "Alles, was läuft, bleibt stabil und im Blick", v: "€ 1.500" },
  { t: "Kontinuierliche Optimierung", d: "Ihre Systeme werden Monat für Monat besser", v: "€ 1.000" },
  { t: "Direkter Draht zu Ihrem KI-Sparringspartner", d: "Fragen stellen, Ideen klären — jederzeit", v: "unbezahlbar" },
];

export default function PreisePage() {
  return (
    <div className="reveal-scope">
      {/* ───────── HERO (kompakt) ───────── */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#040b1a] to-brand-dark" />
        <div
          className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[900px] aspect-square rounded-full opacity-70 aurum-breathe"
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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-7">
            <Triquetra size={42} glowing />
          </div>
          <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-5">
            Preise
          </div>
          <h1 className="font-serif-display font-medium text-white text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.025em] m-0">
            Transparente Preise.{" "}
            <em className="aurum-text not-italic font-medium">Drei Wege.</em>
          </h1>
          <div className="mt-8 mb-7">
            <GoldDivider width="wide" />
          </div>
          <p className="font-serif-display italic text-slate-200 text-lg md:text-xl max-w-2xl mx-auto m-0">
            Training, Service oder Produkt &mdash; Sie wählen, wie wir
            zusammenarbeiten.
          </p>
        </div>
      </section>

      {/* ───────── DREI WEGE — PREISE ───────── */}
      <section className="relative py-16 md:py-20 overflow-hidden border-t border-white/5">
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
          <ol className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 list-none m-0 p-0">
            {wege.map((w) => (
              <li
                key={w.name}
                className={[
                  "relative flex flex-col p-7 md:p-8 rounded-2xl overflow-hidden transition-all duration-500",
                  w.featured
                    ? "border border-aurum/50 bg-brand-card lg:-translate-y-3 shadow-[0_18px_60px_-22px_rgba(201,168,106,0.5)]"
                    : "border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1",
                ].join(" ")}
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent ${
                    w.featured ? "opacity-80" : "opacity-50"
                  }`}
                />
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-aurum/85 font-semibold">
                    {w.badge}
                  </span>
                  {w.featured && (
                    <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-aurum bg-aurum/10 border border-aurum/30 px-2.5 py-1 rounded-full">
                      Beliebteste Wahl
                    </span>
                  )}
                </div>

                <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl tracking-[-0.02em] m-0">
                  {w.name}
                  <span className="text-aurum">.</span>
                </h2>
                <p className="font-serif-display italic text-aurum/90 text-base mt-2">
                  {w.tagline}
                </p>
                <p className="text-slate-300 text-[14.5px] leading-relaxed mt-5">
                  {w.body}
                </p>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-baseline gap-2">
                  <span className="font-serif-display aurum-text text-3xl md:text-4xl font-medium leading-none">
                    {w.price}
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">{w.priceNote}</span>
                </div>

                <Link
                  href={w.href}
                  className={`${w.featured ? goldBtn : ghostBtn} w-full mt-6 py-3.5`}
                >
                  <span>{w.cta}</span>
                  <ArrowRight />
                </Link>
              </li>
            ))}
          </ol>

          <p className="text-center font-serif-display italic text-slate-400 text-sm md:text-base mt-10 max-w-2xl mx-auto">
            Alle Preise zzgl. USt. Setup-, Strategie- &amp; Umsetzungs-Anteile
            sind über die WKO förderfähig &mdash; wir prüfen das mit Ihnen.
          </p>
        </div>
      </section>

      {/* ───────── RETAINER OFFER STACK ───────── */}
      <section className="relative py-20 md:py-28 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
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
              <VesicaSeal size={28} />
            </div>
            <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-5">
              Im Service-Retainer enthalten
            </div>
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              <em className="aurum-text not-italic font-medium">Service.</em>{" "}
              Alles drin. Eine Pauschale.
            </h2>
          </header>

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
                {offer.map((row) => (
                  <li key={row.t} className="flex items-start gap-4 pb-4 border-b border-white/8 last:border-0">
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
            Lieber selbst bauen oder ein fertiges Produkt? Vergleichen Sie oben
            die drei Wege &mdash;{" "}
            <Link href="/ki-automatisierung" className="text-aurum underline decoration-aurum/40 underline-offset-4 hover:decoration-aurum">
              Details zum Retainer
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ───────── VERGLEICH / PREIS-ANKER ───────── */}
      <section className="relative py-20 md:py-28 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#050d1f] to-brand-dark" />
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
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
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

      {/* ───────── BOOKING ───────── */}
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
            eyebrow="Preis- & Strategie-Gespräch"
            hostName="Glockner AI"
            promise="Wir finden in 30 Minuten heraus, welcher Weg (Training, Service oder Produkt) bei Ihnen den größten Hebel hat — und was er konkret kostet."
          />
        </div>
      </section>
      <ScrollReveal />
    </div>
  );
}
