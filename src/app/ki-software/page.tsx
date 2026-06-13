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
 * Landingpage „Weg III — Produkt" (Deliver the fish).
 * Custom Coding: maßgeschneiderte KI-Software, Apps, Dashboards, produktisiertes AIOS.
 * Eigene Route /ki-software, in der Middleware als Passthrough freigegeben.
 */
export const metadata: Metadata = {
  title: { absolute: "Custom KI-Software & Apps — fertig geliefert | Glockner AI" },
  description:
    "Maßgeschneiderte KI-Software für Ihr Unternehmen: Dashboards, interne Apps & produktisierte AI-OS-Lösungen. Sie erzählen es uns, wir liefern das Produkt.",
  alternates: { canonical: "/ki-software" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Custom KI-Software & Apps — fertig geliefert",
    description:
      "Maßgeschneiderte KI-Software, Dashboards und interne Apps. Sie erzählen, wir liefern.",
    url: "/ki-software",
  },
};

export default function ProduktPage() {
  return (
    <div className="reveal-scope">
      {/* ───────── HERO ───────── */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
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
            <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-aurum/90 font-semibold">
              Weg III &middot; Produkt
            </span>
          </div>

          <h1 className="font-serif-display font-medium text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.04] tracking-[-0.025em] m-0">
            Sie bekommen das{" "}
            <em className="aurum-text not-italic font-medium">fertige System</em>
            <span className="text-aurum">.</span>
          </h1>

          <div className="mt-9 mb-8">
            <GoldDivider width="wide" />
          </div>

          <p className="text-slate-200 text-lg md:text-2xl leading-snug max-w-3xl mx-auto m-0 font-serif-display italic">
            Maßgeschneiderte KI-Software für Ihr Unternehmen &mdash;{" "}
            <span className="aurum-text not-italic font-semibold">
              fertig programmiert und übergeben
            </span>
            .
          </p>

          <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Kein Werkzeug, das Sie selbst bedienen müssen. Sie erzählen uns von
            Ihrem Business &mdash; wir bauen die App, das Dashboard oder die
            interne Anwendung, die genau zu Ihren Prozessen passt.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#termin" className={`${goldBtn} px-9 py-4 text-base`}>
              <span>Projekt besprechen</span>
              <ArrowRight />
            </Link>
            <a href="#beispiele" className={`${ghostBtn} px-7 py-4`}>
              <span>Was wir bauen</span>
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-slate-400">
            {["Maßgeschneidert", "Fertig geliefert", "30 % Glockner-AI-Förderung"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2 text-[13px] font-medium">
                <Check className="text-aurum/80" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FÜR WEN ───────── */}
      <section className="relative py-20 md:py-24 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#050d1f] to-brand-dark" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-5">
            Für wen das ist
          </div>
          <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.02em] m-0">
            Für Unternehmer, die einfach das{" "}
            <em className="aurum-text not-italic font-medium">Ergebnis</em> wollen.
          </h2>
          <p className="mt-7 text-slate-300 text-base md:text-lg leading-relaxed">
            Sie wollen nicht lernen, wie KI-Entwicklung funktioniert &mdash; und
            das müssen Sie auch nicht. Sie erzählen uns Ihr Geschäft, wir kümmern
            uns um Konzept, Entwicklung, Tests und Übergabe. Am Ende steht ein
            fertiges Produkt, das Zeit und Geld spart.
          </p>
        </div>
      </section>

      {/* ───────── WAS WIR BAUEN ───────── */}
      <section
        id="beispiele"
        className="relative py-20 md:py-28 overflow-hidden border-t border-white/5 scroll-mt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <div className="flex justify-center mb-6">
              <VesicaSeal size={28} />
            </div>
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              Was wir für Sie{" "}
              <em className="aurum-text not-italic font-medium">programmieren</em>
              <span className="text-aurum">.</span>
            </h2>
          </header>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 list-none m-0 p-0">
            {[
              { t: "Interne KI-Apps", d: "Maßgeschneiderte Anwendungen, die Ihre eigenen Prozesse abbilden — kein Standard-Tool, das nie ganz passt." },
              { t: "Dashboards", d: "Live-Übersichten, die Zeit und Geld sparen — Ihre Zahlen, automatisch zusammengeführt." },
              { t: "Produktisiertes AI-OS", d: "Ein komplettes KI-Betriebssystem für Ihre Nische, fertig konfiguriert übergeben." },
              { t: "Automatisierungs-Engines", d: "Workflows, die im Hintergrund laufen und mehrere Tools verbinden." },
              { t: "KI-Agents nach Maß", d: "Spezialisierte Agents für Sales, Service oder Operations — in Ihrer Markenstimme." },
              { t: "Integrationen", d: "Verbindungen zwischen Ihren bestehenden Systemen — Website, Shop, Warenwirtschaft, Buchhaltung." },
            ].map((c) => (
              <li
                key={c.t}
                className="relative flex flex-col gap-3 p-6 md:p-7 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum/60 to-transparent opacity-50"
                />
                <h3 className="font-serif-display font-medium text-white text-xl md:text-2xl tracking-[-0.02em] m-0 leading-tight">
                  {c.t}
                </h3>
                <p className="text-slate-300 text-[14px] leading-relaxed m-0">{c.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── ABLAUF ───────── */}
      <section className="relative py-20 md:py-28 overflow-hidden border-t border-white/5">
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
                Von der Idee zum fertigen{" "}
                <em className="aurum-text not-italic font-medium">Produkt</em>
                <span className="text-aurum">.</span>
              </h2>
            </div>
          </header>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 list-none m-0 p-0">
            {[
              { n: "01", t: "Sie erzählen", d: "Wir hören zu und verstehen Ihr Business, Ihre Prozesse, Ihr Ziel." },
              { n: "02", t: "Wir konzipieren", d: "Technischer Plan & Festpreis. Sie wissen vorab genau, was Sie bekommen." },
              { n: "03", t: "Wir bauen & testen", d: "Entwicklung in der KI-Pipeline — schnell, gründlich getestet." },
              { n: "04", t: "Übergabe", d: "Fertiges Produkt, Einschulung, optional Wartung & Optimierung." },
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
                  {s.t}
                </h3>
                <p className="text-slate-300 text-[14px] leading-relaxed m-0">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── PREIS / INVESTITION ───────── */}
      <section className="relative py-20 md:py-28 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#050d1f] to-brand-dark" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] max-w-[95vw] aspect-square rounded-full aurum-breathe pointer-events-none opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,106,0.18) 0%, rgba(6,182,212,0.08) 35%, transparent 70%)",
            filter: "blur(55px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Triquetra size={32} />
          </div>
          <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-5">
            Investition
          </div>
          <div className="flex items-baseline justify-center gap-2">
            <span className="font-serif-display aurum-text text-4xl md:text-5xl font-medium leading-none">
              Individueller Preis
            </span>
          </div>
          <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-slate-500 mt-4">
            Festpreis pro Projekt · zzgl. USt. · inkl. 30&thinsp;% Glockner-AI-Förderung
          </p>
          <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed">
            Jedes Produkt ist anders &mdash; den genauen Festpreis legen wir nach
            dem Erstgespräch fest. Keine laufende Bindung nötig, optionale Wartung
            auf Wunsch.
          </p>
          <Link href="#termin" className={`${goldBtn} px-9 py-4 text-base mt-8`}>
            <span>Projekt besprechen</span>
            <ArrowRight />
          </Link>

          <p className="font-serif-display italic text-slate-400 text-sm md:text-base mt-8">
            Lieber laufend statt einmalig? Der{" "}
            <Link href="/ki-automatisierung" className="text-aurum underline decoration-aurum/40 underline-offset-4 hover:decoration-aurum">
              Service-Retainer
            </Link>{" "}
            liefert jeden Monat neue Systeme.
          </p>
        </div>
      </section>

      {/* ───────── FINAL CTA + BOOKING ───────── */}
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
            eyebrow="Produkt-Erstgespräch"
            hostName="Glockner AI"
            promise="Erzählen Sie uns von Ihrem Business — wir skizzieren in 30 Minuten, welches Produkt den größten Hebel bringt und was es kostet."
          />
        </div>
      </section>
      <ScrollReveal />
    </div>
  );
}
