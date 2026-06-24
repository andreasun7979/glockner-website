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

/**
 * NEUE VERSION von glockner.ai (Review-Route /v2).
 * Architektur: Zwei Ziele (Money Making AI · Kosten-Killer AI)
 * × Drei Wege (Training · Service · Produkt).
 * Fundament: das KI-Betriebssystem (AI-OS / Bottom-up).
 *
 * Wenn freigegeben: in src/middleware.ts den Rewrite von /ki-marketing-vertrieb
 * auf /v2 umstellen. Bis dahin noindex.
 */
export const metadata: Metadata = {
  title: { absolute: "KI-Beratung & Implementierung für KMU in Österreich | Glockner AI" },
  description:
    "KI-Beratung & Implementierung für KMU in Österreich: mehr Umsatz und weniger Kosten mit KI — als Training, Service-Retainer oder fertiges Produkt.",
  alternates: { canonical: "/" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Glockner AI — KI für mehr Umsatz & weniger Kosten",
    description:
      "Zwei Ziele, drei Wege. Mehr Umsatz und weniger Kosten mit KI — als Training, Service-Retainer oder fertiges Produkt.",
    url: "/",
  },
};

/* ============================================================
   PAGE
   ============================================================ */

export default function GlocknerV2Page() {
  return (
    <div className="reveal-scope">
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#040b1a] to-brand-dark" />
        <div
          className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[950px] aspect-square rounded-full opacity-70 aurum-breathe"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,106,0.16) 0%, rgba(6,182,212,0.10) 35%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <FlowerOfLifeBackdrop className="w-[820px] max-w-[110vw] aurum-rotate-slow opacity-60" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-7">
            <Triquetra size={44} glowing />
          </div>

          <div className="font-mono text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-slate-300 font-bold mb-7">
            Glockner&nbsp;AI &nbsp;<span className="text-aurum">=</span>
          </div>

          {/* Zwei Säulen */}
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
            <Link href="/ki-marketing-vertrieb" className="group block relative rounded-2xl border border-aurum/30 hover:border-aurum/60 bg-brand-card/70 p-7 md:p-9 overflow-hidden hover:-translate-y-1 transition-all duration-500">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-60"
              />
              <h1 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-[42px] leading-[1.02] tracking-[-0.02em] m-0">
                Money <em className="aurum-text not-italic font-medium">Making</em> AI
              </h1>
              <p className="mt-4 font-serif-display italic text-slate-200 text-lg md:text-xl">
                Mehr Umsatz mit KI.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-aurum text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                Mehr erfahren <ArrowRight />
              </span>
            </Link>

            <Link href="/ki-automatisierung" className="group block relative rounded-2xl border border-aurum/30 hover:border-aurum/60 bg-brand-card/70 p-7 md:p-9 overflow-hidden hover:-translate-y-1 transition-all duration-500">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-60"
              />
              <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-[42px] leading-[1.02] tracking-[-0.02em] m-0">
                <em className="aurum-text not-italic font-medium">Kosten-Killer</em> AI
              </h2>
              <p className="mt-4 font-serif-display italic text-slate-200 text-lg md:text-xl">
                Effizienz rauf. Kosten runter.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-aurum text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                Mehr erfahren <ArrowRight />
              </span>
            </Link>
          </div>

          <div className="mt-10 mb-8">
            <GoldDivider width="wide" />
          </div>

          <h2 className="font-serif-display font-medium text-white text-xl md:text-2xl lg:text-3xl leading-snug max-w-3xl mx-auto mb-5 m-0">
            <span className="aurum-text">KI-Beratung &amp; Automatisierung</span> für KMU in Österreich
          </h2>

          <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-2xl mx-auto m-0">
            Wir machen Ihr Unternehmen zur{" "}
            <span className="aurum-text font-semibold">KI-First-Organisation</span>{" "}
            &mdash; und Sie wählen selbst, wie wir zusammenarbeiten.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#wege" className={`${goldBtn} px-9 py-4 text-base`}>
              <span>Ihren Weg wählen</span>
              <ArrowRight />
            </a>
            <Link href="#termin" className={`${ghostBtn} px-7 py-4`}>
              <span>Kostenloses Gespräch</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── DER WANDEL / AI-OS FUNDAMENT ───────── */}
      <section className="relative py-20 md:py-28 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#050d1f] to-brand-dark" />
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 70% 30%, rgba(201,168,106,0.10), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span aria-hidden="true" className="block w-10 aurum-rule" />
                <span className="font-mono text-[10.5px] tracking-[0.28em] uppercase text-aurum/85 font-semibold">
                  Das Fundament
                </span>
              </div>
              <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
                Erst das{" "}
                <em className="aurum-text not-italic font-medium">
                  KI-Betriebssystem
                </em>
                . Dann die Magie.
              </h2>
              <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed">
                Die alte Welt hat einzelne Prozesse automatisiert &mdash;
                Insellösung für Insellösung. Wir drehen das um: Zuerst bauen wir
                ein <em className="text-aurum not-italic font-semibold">KI-Betriebssystem</em>{" "}
                für Ihr Unternehmen &mdash; eine kontextualisierte Basis, die
                alles über Ihr Business weiß.
              </p>
              <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">
                Darauf docken Ihre Systeme an &mdash; Website,
                Warenwirtschaft, Buchhaltung, Marketing &amp; Verkauf. Aus
                dieser Basis heraus werden neue
                Automatisierungen nicht zum Großprojekt, sondern zur{" "}
                <em className="aurum-text not-italic font-semibold">Sache von Tagen</em>.
              </p>
              <blockquote className="mt-7 pl-5 border-l-2 border-aurum/50">
                <p className="font-serif-display italic text-slate-200 text-lg md:text-xl leading-snug m-0">
                  &bdquo;Bisher haben wir mit dem Teelöffel gegraben. Jetzt holen
                  wir den Bagger.&ldquo;
                </p>
              </blockquote>
            </div>

            {/* AI-OS Schichten */}
            <div className="relative rounded-2xl border border-white/10 bg-brand-card p-7 md:p-8 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum/60 to-transparent opacity-50"
              />
              <div className="font-mono text-[10.5px] tracking-[0.24em] uppercase text-aurum/85 font-semibold mb-5">
                So ist es aufgebaut
              </div>
              <ol className="space-y-3 m-0 p-0 list-none">
                {[
                  { n: "01", t: "Context OS", d: "Ihr gesamtes Wissen & Ihre Historie — strukturiert, an einem Ort." },
                  { n: "02", t: "Integrationen", d: "Website, Warenwirtschaft, Buchhaltung, Marketing & Verkauf — lesend UND schreibend angebunden." },
                  { n: "03", t: "KI-Agents", d: "Ihre stille Belegschaft, die auf dieser Basis arbeitet." },
                  { n: "04", t: "Steuerung", d: "Sie führen alles aus einem zentralen Workspace." },
                ].map((l) => (
                  <li
                    key={l.n}
                    className="flex items-start gap-4 p-3.5 rounded-xl border border-white/8 bg-white/[0.02]"
                  >
                    <span className="font-serif-display aurum-text text-2xl font-medium leading-none w-9 flex-shrink-0">
                      {l.n}
                    </span>
                    <div>
                      <div className="text-white font-semibold text-[15px]">{l.t}</div>
                      <div className="text-slate-400 text-[13px] mt-0.5 leading-snug">{l.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── ZWEI ZIELE ───────── */}
      <section className="relative py-20 md:py-28 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <div className="flex justify-center mb-6">
              <VesicaSeal size={28} />
            </div>
            <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-5">
              Zwei Ziele
            </div>
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              KI verdient Geld &mdash; oder sie{" "}
              <em className="aurum-text not-italic font-medium">spart welches</em>.
              Meistens beides.
            </h2>
          </header>

          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {/* Money Making */}
            <div className="relative p-7 md:p-9 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-50"
              />
              <h3 className="font-serif-display font-medium text-white text-2xl md:text-3xl m-0">
                Money <em className="aurum-text not-italic font-medium">Making</em> AI
                <span className="text-aurum">.</span>
              </h3>
              <p className="font-serif-display italic text-aurum/90 text-base mt-2">
                Mehr Umsatz mit KI.
              </p>
              <ul className="mt-6 space-y-2.5 m-0 p-0 list-none">
                {[
                  "Converting Websites & Webshops, die verkaufen",
                  "KI-Chatbots & Voice-Agents, die Leads qualifizieren",
                  "E-Mail-Reaktivierung & Dream-100-Outreach",
                  "SEO & GEO — gefunden werden bei Google und ChatGPT",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-slate-300 text-[15px] leading-snug">
                    <Check />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link href="/ki-marketing-vertrieb" className={`${goldBtn} w-full mt-7 py-3.5`}>
                <span>Zur Money Making AI</span>
                <ArrowRight />
              </Link>
            </div>

            {/* Kosten-Killer */}
            <div className="relative p-7 md:p-9 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-50"
              />
              <h3 className="font-serif-display font-medium text-white text-2xl md:text-3xl m-0">
                <em className="aurum-text not-italic font-medium">Kosten-Killer</em> AI
                <span className="text-aurum">.</span>
              </h3>
              <p className="font-serif-display italic text-aurum/90 text-base mt-2">
                Effizienz rauf. Kosten runter.
              </p>
              <ul className="mt-6 space-y-2.5 m-0 p-0 list-none">
                {[
                  "Wiederkehrende Aufgaben laufen automatisch — 24/7",
                  "Angebote, Reports, Dateneingabe ohne Handarbeit",
                  "Mehr Output mit demselben Team",
                  "Planbare Pauschale statt teurem Personalaufbau",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-slate-300 text-[15px] leading-snug">
                    <Check />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link href="/ki-automatisierung" className={`${goldBtn} w-full mt-7 py-3.5`}>
                <span>Zur Kosten-Killer AI</span>
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── DREI WEGE / CHOOSER ───────── */}
      <section
        id="wege"
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-5">
              Drei Wege
            </div>
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              Wählen Sie, wie wir{" "}
              <em className="aurum-text not-italic font-medium">
                zusammenarbeiten
              </em>
              <span className="text-aurum">.</span>
            </h2>
            <div className="mt-8">
              <GoldDivider />
            </div>
            <p className="font-serif-display italic text-slate-300 text-lg md:text-xl mt-8 leading-relaxed">
              Dasselbe Ziel &mdash; drei Geschwindigkeiten. Je nachdem, ob Sie
              selbst bauen, bauen lassen oder ein fertiges Produkt wollen.
            </p>
          </header>

          <ol className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 list-none m-0 p-0">
            {[
              {
                badge: "Weg I",
                kicker: "Sie lernen es selbst",
                name: "Training",
                tagline: "Wir bringen Ihnen Agentic AI bei.",
                body: "Wir installieren Ihr KI-Betriebssystem, richten Claude Code & Ihr Agenten-System ein und schulen Sie auf die Workflows. Inklusive 3 Monate Begleitung.",
                price: "ab € 1.900",
                priceNote: "pro Monat · Setup extra",
                href: "/ki-schulungen",
                cta: "Training ansehen",
                featured: false,
              },
              {
                badge: "Weg II",
                kicker: "Wir bauen für Sie — laufend",
                name: "Service",
                tagline: "Ihr AI-Team im Abo.",
                body: "Jeden Monat 1–2 neue Automatisierungen, gebaut, getestet, betreut und optimiert. Ein KI-Profi an Ihrer Seite — monatlich kündbar.",
                price: "€ 2.500",
                priceNote: "pro Monat",
                href: "/ki-automatisierung",
                cta: "Retainer ansehen",
                featured: true,
              },
              {
                badge: "Weg III",
                kicker: "Wir liefern das fertige Produkt",
                name: "Produkt",
                tagline: "Sie bekommen das fertige System.",
                body: "Maßgeschneiderte KI-Software & Apps für Ihr Unternehmen — von Dashboards bis zur kompletten internen Anwendung. Custom Coding, fertig geliefert.",
                price: "Individuell",
                priceNote: "Preis pro Projekt",
                href: "/ki-software",
                cta: "Produkt ansehen",
                featured: false,
              },
            ].map((w) => (
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

                <h3 className="font-serif-display font-medium text-white text-3xl md:text-4xl tracking-[-0.02em] m-0">
                  {w.name}
                  <span className="text-aurum">.</span>
                </h3>
                <p className="font-serif-display italic text-aurum/90 text-base mt-2">
                  {w.tagline}
                </p>
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-slate-500 mt-3">
                  {w.kicker}
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
            Nicht sicher, welcher Weg passt? Im kostenlosen Gespräch finden wir es
            in 30 Minuten heraus.
          </p>
        </div>
      </section>

      {/* ───────── WAS UNS AUSMACHT (kompakt) ───────── */}
      <section className="relative py-18 md:py-24 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mb-12 md:mb-14">
            <div className="flex items-center gap-3 mb-5">
              <VesicaSeal size={22} />
              <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-aurum/85 font-semibold">
                Was bei uns immer mit dabei ist
              </span>
            </div>
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              Warum Glockner AI<span className="text-aurum">.</span>
            </h2>
          </header>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 list-none m-0 p-0">
            {[
              {
                tag: "Sicherheit",
                title: "Bombenfest gebaut.",
                body: "Abgesicherte IT-Architektur: API-Keys und Zugänge bleiben verschlüsselt unter Verschluss — statt ungeschützt in der Cloud zu schwirren. Kein Zugriff von außen, kein Leck.",
                pill: "Security by Design",
              },
              {
                tag: "Compliance",
                title: "100 % DSGVO-konform.",
                body: "Alle sensiblen Daten laufen ausschließlich auf europäischen Servern — heute und nach den nächsten Verschärfungen.",
                pill: "EU-Server only",
              },
              {
                tag: "Know-how",
                title: "12 Mrd. € Marketing-DNA.",
                body: "Wir bauen mit Frameworks, die nachweislich über 12 Mrd. € Umsatz generiert haben — eingebaut in jede Lösung.",
                pill: "12 Mrd. € validiert",
              },
              {
                tag: "Tempo",
                title: "Wochen statt Monate.",
                body: "Eine stille Armee aus KI-Agents arbeitet rund um die Uhr — damit Ihr Projekt nicht in Monaten, sondern in Wochen Realität wird.",
                pill: "24/7 KI-Agents",
              },
            ].map((c) => (
              <li
                key={c.tag}
                className="relative p-7 md:p-9 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 flex flex-col gap-4 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-40"
                />
                <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-aurum/85 font-semibold">
                  {c.tag}
                </span>
                <h3 className="font-serif-display font-medium text-white text-2xl md:text-3xl tracking-[-0.02em] m-0">
                  {c.title}
                </h3>
                <p className="text-slate-300 text-[15px] leading-relaxed m-0">{c.body}</p>
                <span className="self-start mt-2 font-mono text-[10.5px] tracking-[0.16em] uppercase font-semibold text-aurum bg-aurum/10 border border-aurum/30 px-3 py-1.5 rounded-full">
                  {c.pill}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── FÖRDERUNG STRIP ───────── */}
      <section className="relative py-16 md:py-20 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#050d1f] to-brand-dark" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <VesicaSeal size={24} />
          </div>
          <h2 className="font-serif-display font-medium text-white text-2xl md:text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em] m-0">
            <em className="aurum-text not-italic font-medium">30&thinsp;%</em>{" "}
            Glockner-AI-Förderung<span className="text-aurum">.</span>
          </h2>
          <p className="mt-5 text-slate-300 text-base md:text-lg leading-relaxed">
            Die staatliche KMU.DIGITAL-Förderung ist für 2026 ausgeschöpft &mdash;
            dafür gibt es unsere eigene Förderung von 30&thinsp;% auf Ihr
            KI-Projekt.{" "}
            <Link href="/foerderung" className="text-aurum hover:underline">
              Mehr zur Förderung
            </Link>
          </p>
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
            Die Entwicklung wird einfacher. Jetzt beginnt der{" "}
            <em className="aurum-text not-italic font-medium">eigentliche Spaß</em>.
          </h2>
          <div className="mt-10 mb-8">
            <GoldDivider width="wide" />
          </div>
          <p className="font-serif-display italic text-slate-300 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            30 Minuten. Wir zeigen Ihnen den schnellsten Hebel &mdash; und welcher
            Weg zu Ihnen passt.
          </p>
          <Link href="#termin" className={`${goldBtn} px-10 py-4 text-base`}>
            <span>Kostenloses Strategie-Gespräch</span>
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
            eyebrow="Strategie-Gespräch"
            hostName="Glockner AI"
            promise="Wir finden in 30 Minuten heraus, ob Money Making oder Kosten-Killer bei Ihnen den größten Hebel hat — und welcher Weg (Training, Service oder Produkt) zu Ihnen passt."
          />
        </div>
      </section>
      <ScrollReveal />
    </div>
  );
}
