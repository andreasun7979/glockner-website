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
 * Landingpage „Weg I — Training" (Teach to fish).
 * AI-OS Setup + Claude Code + Agenten-System + Schulung + 3 Monate Begleitung.
 * Eigene Route /ki-schulungen, in der Middleware als Passthrough freigegeben.
 */
export const metadata: Metadata = {
  title: { absolute: "KI-Training & AI-OS Setup — Ihr Team baut selbst | Glockner AI" },
  description:
    "KI-Schulung für Ihr Team: Wir richten Ihr KI-Betriebssystem & Agenten-System ein und schulen die Workflows — inkl. 3 Monate Begleitung.",
  alternates: { canonical: "/ki-schulungen" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "KI-Training & AI-OS Setup — Ihr Team baut selbst",
    description:
      "AI-OS Setup, Claude Code, Agenten-System + Schulung. Inkl. 3 Monate Begleitung.",
    url: "/ki-schulungen",
  },
};

export default function TrainingPage() {
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
              Weg I &middot; Training
            </span>
          </div>

          <h1 className="font-serif-display font-medium text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.04] tracking-[-0.025em] m-0">
            Wir bringen Ihnen{" "}
            <em className="aurum-text not-italic font-medium">Agentic AI</em> bei
            <span className="text-aurum">.</span>
          </h1>

          <div className="mt-9 mb-8">
            <GoldDivider width="wide" />
          </div>

          <p className="text-slate-200 text-lg md:text-2xl leading-snug max-w-3xl mx-auto m-0 font-serif-display italic">
            Ihr eigenes KI-Betriebssystem &mdash; aufgesetzt, eingerichtet und{" "}
            <span className="aurum-text not-italic font-semibold">
              an Sie übergeben
            </span>
            .
          </p>

          <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Wir installieren Claude Code, bauen Ihr Agenten-System und schulen Sie
            auf die Workflows. Danach bauen Sie selbst &mdash; in Tagen, nicht
            Monaten. Inklusive 3 Monate Begleitung (oder länger), damit Sie nie
            feststecken.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#termin" className={`${goldBtn} px-9 py-4 text-base`}>
              <span>Kostenloses Erstgespräch</span>
              <ArrowRight />
            </Link>
            <a href="#paket" className={`${ghostBtn} px-7 py-4`}>
              <span>Paket ansehen</span>
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-slate-400">
            {["Setup vor Ort oder remote", "3 Monate Begleitung", "30 % Glockner-AI-Förderung"].map((t) => (
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
            Für Unternehmer und Gründer, die{" "}
            <em className="aurum-text not-italic font-medium">selbst die Hand</em>{" "}
            am Steuer wollen.
          </h2>
          <p className="mt-7 text-slate-300 text-base md:text-lg leading-relaxed">
            Sie sind technisch neugierig, wollen unabhängig sein und das volle
            Potenzial selbst heben? Dann geben wir Ihnen die Plattform, die
            Werkzeuge und das Wissen an die Hand &mdash; damit Sie eigenständig
            bauen und Ihr KI-System jederzeit selbst weiterentwickeln können.
          </p>
        </div>
      </section>

      {/* ───────── WAS WIR EINRICHTEN ───────── */}
      <section className="relative py-20 md:py-28 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <div className="flex justify-center mb-6">
              <VesicaSeal size={28} />
            </div>
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              Was wir für Sie{" "}
              <em className="aurum-text not-italic font-medium">aufsetzen</em>
              <span className="text-aurum">.</span>
            </h2>
          </header>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 list-none m-0 p-0">
            {[
              {
                n: "01",
                t: "KI-Betriebssystem",
                d: "Ihre kontextualisierte Basis (Context OS): Wissen, Struktur, Historie — alles an einem Ort.",
              },
              {
                n: "02",
                t: "Claude Code & Agents",
                d: "Installation und Konfiguration Ihrer KI-Entwicklungs-Engine inkl. Agenten-System.",
              },
              {
                n: "03",
                t: "Integrationen",
                d: "Anbindung Ihrer Systeme — Website, Warenwirtschaft, Buchhaltung, Marketing & Verkauf.",
              },
              {
                n: "04",
                t: "Workflow-Schulung",
                d: "Wir bringen Ihnen die Befehle & Abläufe bei — von der Idee zum getesteten System.",
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
                  {s.t}
                </h3>
                <p className="text-slate-300 text-[14px] leading-relaxed m-0">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── SCHULUNGEN ───────── */}
      <section
        id="schulungen"
        className="relative py-20 md:py-28 overflow-hidden border-t border-white/5 scroll-mt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#050d1f] to-brand-dark" />
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 50% 20%, rgba(201,168,106,0.10), transparent 55%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="grid lg:grid-cols-12 gap-x-8 gap-y-6 items-end mb-12 md:mb-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="block w-10 aurum-rule" />
                <span className="font-mono text-[10.5px] md:text-[11px] tracking-[0.28em] uppercase text-aurum/85 font-semibold">
                  § Wissenstransfer
                </span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <h2 className="font-serif-display font-medium text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] m-0">
                Schulungen, die Ihr Team{" "}
                <em className="aurum-text not-italic font-medium">KI-fähig</em>{" "}
                machen
                <span className="text-aurum">.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed">
                Vom Basis-Einsatz in Marketing &amp; Sales bis zum Deep-Dive in
                Agentic AI. Wir zeigen die richtigen Tools &mdash; und wie Ihr
                Team{" "}
                <em className="aurum-text not-italic font-semibold">
                  eigene KI-Assistenten
                </em>{" "}
                baut.
              </p>
            </div>
          </header>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 list-none m-0 p-0">
            {[
              {
                roman: "I",
                tag: "Strategie · Workshop",
                title: "Agentic AI",
                body: (
                  <>
                    Wie autonome KI-Agents in Ihrem Unternehmen{" "}
                    <em className="not-italic text-aurum font-bold">
                      Prozesse selbst übernehmen
                    </em>{" "}
                    &mdash; vom Sales-Outreach bis zum Customer Service.
                    Architektur, Use-Cases, Risiken, Roadmap.
                  </>
                ),
                meta: "Tagesworkshop · in-house oder remote",
              },
              {
                roman: "II",
                tag: "Hands-on · Tech",
                title: "Claude Code",
                body: (
                  <>
                    Praxis-Training für Entwickler &amp; technisch affine Teams:
                    Wie Sie mit{" "}
                    <em className="not-italic text-aurum font-bold">
                      Claude Code
                    </em>{" "}
                    in Stunden bauen, wofür Sie früher Wochen gebraucht haben
                    &mdash; von Scripts bis zu kompletten Agents.
                  </>
                ),
                meta: "1&ndash;2 Tage · Hands-on Sprint",
              },
              {
                roman: "III",
                tag: "Praxis · Marketing & Sales",
                title: "AI im Unternehmen",
                body: (
                  <>
                    KI im Daily Doing: Content-Generierung, Lead-Qualifizierung,
                    E-Mail-Sequenzen, Sales-Calls, Reports. Ihr Team verlässt den
                    Workshop mit{" "}
                    <em className="not-italic text-aurum font-bold">
                      sofort einsetzbaren Workflows
                    </em>
                    .
                  </>
                ),
                meta: "Halbtags oder ganztags · Praxis-Sprint",
              },
            ].map((s) => (
              <li
                key={s.roman}
                className="relative flex flex-col gap-3 p-5 md:p-6 rounded-lg border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 hover:shadow-[0_18px_60px_-22px_rgba(201,168,106,0.45)] transition-all duration-500 overflow-hidden"
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
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-aurum/85 font-semibold">
                      {s.tag}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500">
                      Schulung {s.roman}
                    </span>
                  </div>
                  <h3 className="font-serif-display font-medium text-white text-2xl md:text-3xl tracking-[-0.02em] m-0 mt-3">
                    {s.title}
                    <span className="text-aurum">.</span>
                  </h3>
                  <p className="text-slate-300 text-[14px] leading-snug font-medium m-0 mt-3">
                    {s.body}
                  </p>
                  <div
                    className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500 mt-4 pt-3 border-t border-white/10"
                    dangerouslySetInnerHTML={{ __html: s.meta }}
                  />
                </div>
              </li>
            ))}
          </ol>

          <div className="flex justify-center md:justify-start mt-8">
            <Link href="#termin" className={`${goldBtn} px-6 py-3`}>
              <span>Schulung anfragen</span>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── DAS PAKET ───────── */}
      <section
        id="paket"
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
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex justify-center mb-6">
              <Triquetra size={32} />
            </div>
            <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-5">
              Das Paket
            </div>
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              Setup &amp; 3 Monate Begleitung.
            </h2>
          </header>

          <div className="relative rounded-3xl border border-aurum/35 bg-brand-card overflow-hidden">
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-70"
            />
            <div className="relative p-8 md:p-12">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                <div>
                  <h3 className="font-serif-display font-medium text-white text-2xl md:text-3xl m-0">
                    KI-Enablement-Paket
                  </h3>
                  <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-aurum/85 font-semibold mt-2">
                    Setup + Schulung + Begleitung
                  </p>
                </div>
                <span className="inline-flex items-center font-mono text-[10.5px] tracking-[0.18em] uppercase font-semibold text-aurum bg-aurum/10 border border-aurum/30 px-3 py-1.5 rounded-full">
                  3-Monats-Paket
                </span>
              </div>

              <ul className="space-y-4 m-0 p-0 list-none mb-9">
                {[
                  { t: "Komplettes AI-OS Setup", d: "Context OS, Claude Code, Agenten-System — einsatzbereit" },
                  { t: "Vor-Ort- oder Remote-Installation", d: "Wir lösen direkt ein dringendes Problem mit — sofortiger ROI" },
                  { t: "System-Integrationen", d: "Website, Warenwirtschaft, Buchhaltung, Marketing & Verkauf angebunden" },
                  { t: "Workflow-Schulung für Ihr Team", d: "Von der Idee zum getesteten System — selbst gebaut" },
                  { t: "3 Monate Begleitung (oder länger)", d: "Fragen, Reviews, Optimierung — Sie stecken nie fest" },
                ].map((row) => (
                  <li key={row.t} className="flex items-start gap-4 pb-4 border-b border-white/8 last:border-0">
                    <Check />
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold text-[15px] md:text-base leading-snug">
                        {row.t}
                      </div>
                      <div className="text-slate-400 text-[13px] mt-0.5">{row.d}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 text-center">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500">
                  Investition
                </span>
                <div className="flex items-baseline justify-center gap-2 mt-1">
                  <span className="font-mono text-sm text-slate-400">ab</span>
                  <span className="font-serif-display aurum-text text-5xl md:text-6xl font-medium leading-none">
                    € 1.500
                  </span>
                  <span className="font-mono text-sm text-slate-400">/ Monat</span>
                </div>
                <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-slate-500 mt-3">
                  Setupkosten extra · zzgl. USt.
                </p>
                <Link href="#termin" className={`${goldBtn} px-9 py-4 text-base mt-7 w-full sm:w-auto`}>
                  <span>Erstgespräch buchen</span>
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>

          <p className="text-center font-serif-display italic text-slate-400 text-sm md:text-base mt-7 max-w-xl mx-auto">
            Lieber bauen lassen statt selbst bauen? Dann ist der{" "}
            <Link href="/ki-automatisierung" className="text-aurum underline decoration-aurum/40 underline-offset-4 hover:decoration-aurum">
              Service-Retainer
            </Link>{" "}
            der richtige Weg für Sie.
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
            eyebrow="Training-Erstgespräch"
            hostName="Glockner AI"
            promise="Wir klären in 30 Minuten, wie Ihr KI-Betriebssystem aussehen sollte und welches dringende Problem wir beim Setup gleich mitlösen."
          />
        </div>
      </section>
      <ScrollReveal />
    </div>
  );
}
