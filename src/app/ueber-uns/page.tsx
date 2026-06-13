import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Triquetra,
  VesicaSeal,
  GoldDivider,
  FlowerOfLifeBackdrop,
  ArrowRight,
  goldBtn,
} from "@/components/aurum/Ornaments";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: { absolute: "Über uns — Andreas Unterkofler & Glockner AI" },
  description:
    "Hinter Glockner AI steht Andreas Unterkofler — KI-Berater & E-Commerce-Operator aus Wien und Klagenfurt. KI, die Umsatz bringt und Kosten senkt.",
  alternates: { canonical: "/ueber-uns" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Über uns — Andreas Unterkofler & Glockner AI",
    description:
      "Wer hinter Glockner AI steht: Andreas Unterkofler, KI-Berater & E-Commerce-Operator aus Wien und Klagenfurt.",
    url: "/ueber-uns",
  },
};

const values = [
  {
    tag: "Praxisnah",
    title: "Selbst getestet.",
    desc: "Keine theoretischen Konzepte — wir liefern KI-Lösungen, die ab Tag eins messbaren Mehrwert bringen.",
  },
  {
    tag: "Sicher",
    title: "100 % DSGVO-konform.",
    desc: "Datenschutz und Security sind keine Nebensache, sondern Grundvoraussetzung. Alle Daten auf EU-Servern.",
  },
  {
    tag: "Gefördert",
    title: "30 % Förderung.",
    desc: "Über die Glockner-AI-Förderung bekommen Sie 30 % auf Ihr KI-Projekt — sofort, ohne Antragsmarathon.",
  },
  {
    tag: "Ganzheitlich",
    title: "Alles aus einer Hand.",
    desc: "Von der Strategie über die Implementierung bis zur Schulung — ein Ansprechpartner, ein Team.",
  },
];

const locations = [
  {
    city: "Wien",
    address: "Blumauergasse 23/12, 1020 Wien",
    desc: "Unser Standort im Herzen Wiens — für Kunden in der Bundeshauptstadt und Umgebung.",
  },
  {
    city: "Klagenfurt",
    address: "Sankt Ruprechter Straße 90, 9020 Klagenfurt",
    desc: "Unser Standort in Kärnten — für Kunden im Süden Österreichs.",
  },
];

export default function UeberUnsPage() {
  return (
    <div className="reveal-scope">
      {/* ───────── HERO ───────── */}
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
            Über uns
          </div>
          <h1 className="font-serif-display font-medium text-white text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.025em] m-0">
            Wer hinter{" "}
            <em className="aurum-text not-italic font-medium">Glockner AI</em>{" "}
            steht.
          </h1>
          <div className="mt-8 mb-7">
            <GoldDivider width="wide" />
          </div>
          <p className="font-serif-display italic text-slate-200 text-lg md:text-xl max-w-2xl mx-auto m-0">
            KI, die Umsatz bringt &mdash; und gleichzeitig Effizienz steigert
            und Kosten senkt.
          </p>
        </div>
      </section>

      {/* ───────── ANDREAS — FOUNDER BIO ───────── */}
      <section
        id="andreas"
        className="relative py-16 md:py-24 overflow-hidden border-t border-white/5"
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
              <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
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
                Seit{" "}
                <em className="aurum-text not-italic font-semibold">drei Jahren</em>{" "}
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

      {/* ───────── WAS UNS AUSMACHT ───────── */}
      <section className="relative py-16 md:py-24 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
            <div className="flex justify-center mb-6">
              <VesicaSeal size={26} />
            </div>
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              Was uns ausmacht<span className="text-aurum">.</span>
            </h2>
          </header>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 list-none m-0 p-0">
            {values.map((v) => (
              <li
                key={v.tag}
                className="relative flex flex-col gap-3 p-6 md:p-7 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum/60 to-transparent opacity-50"
                />
                <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-aurum/85 font-semibold">
                  {v.tag}
                </span>
                <h3 className="font-serif-display font-medium text-white text-xl md:text-2xl tracking-[-0.02em] m-0 leading-tight">
                  {v.title}
                </h3>
                <p className="text-slate-300 text-[14px] leading-relaxed m-0">{v.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── STANDORTE ───────── */}
      <section className="relative py-16 md:py-24 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#050d1f] to-brand-dark" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-12">
            <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-5">
              Standorte
            </div>
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              Wien &amp; Klagenfurt<span className="text-aurum">.</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="relative p-7 md:p-8 rounded-2xl border border-white/10 bg-brand-card hover:border-aurum/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum/60 to-transparent opacity-50"
                />
                <h3 className="font-serif-display font-medium text-white text-2xl md:text-3xl tracking-[-0.02em] m-0">
                  {loc.city}
                </h3>
                <p className="font-mono text-[11px] tracking-[0.08em] text-aurum/85 mt-3">
                  {loc.address}
                </p>
                <p className="text-slate-400 text-[14px] leading-relaxed mt-3">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
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
            Lassen Sie uns{" "}
            <em className="aurum-text not-italic font-medium">zusammenarbeiten</em>.
          </h2>
          <div className="mt-10 mb-8">
            <GoldDivider width="wide" />
          </div>
          <p className="font-serif-display italic text-slate-300 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            30 Minuten, kostenlos &mdash; wir zeigen Ihnen den schnellsten Hebel.
          </p>
          <Link href="/preise#termin" className={`${goldBtn} px-10 py-4 text-base`}>
            <span>Kostenloses Strategie-Gespräch</span>
            <ArrowRight />
          </Link>
        </div>
      </section>
      <ScrollReveal />
    </div>
  );
}
