import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "KI-Förderung für KMU in Österreich | Glockner AI" },
  description:
    "KI-Förderung für KMU in Österreich: So funktioniert KMU.DIGITAL — und warum die Glockner-AI-Förderung von 30 % jetzt der bessere Hebel ist.",
  alternates: { canonical: "/foerderung" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "KI-Förderung für KMU in Österreich — KMU.DIGITAL & Glockner-AI-Förderung",
    description:
      "Wie KMU in Österreich ihr KI-Projekt fördern: KMU.DIGITAL erklärt — plus die Glockner-AI-Förderung von 30 %.",
    url: "/foerderung",
  },
};

/** FAQ — wird sichtbar gerendert UND als FAQPage-Schema (GEO / Rich Results). */
const faqs = [
  {
    q: "Was ist die KMU.DIGITAL-Förderung?",
    a: "KMU.DIGITAL ist die Digitalisierungs-Förderinitiative des Bundes (BMAW & WKÖ, abgewickelt über die aws – Austria Wirtschaftsservice). Sie besteht aus zwei Bausteinen: der geförderten Beratung — mit zwei Modulen, der Status- und Potenzialanalyse und der Strategieberatung — sowie einem Investitionszuschuss für die Umsetzung konkreter Digitalisierungs-, E-Commerce- und KI-Projekte. Zielgruppe sind kleine und mittlere Unternehmen in Österreich.",
  },
  {
    q: "Wie hoch ist die KMU.DIGITAL-Förderung?",
    a: "Der Beratungs-Baustein deckt einen Großteil der Beratungskosten ab, der Umsetzungs-Baustein bezuschusst Investitionen mit rund 30 % (je nach Aufruf und gedeckelt auf einen Höchstbetrag). Die genauen Sätze und Obergrenzen legt die aws je Förder-Call fest.",
  },
  {
    q: "Ist KMU.DIGITAL 2026 noch verfügbar?",
    a: "Nein. Das Budget für 2026 ist bereits ausgeschöpft — aktuell sind keine neuen Anträge möglich. Wer jetzt ein KI-Projekt starten möchte, muss also nicht warten, bis ein neuer Call öffnet: Über die Glockner-AI-Förderung von 30 % gibt es einen sofort wirksamen Hebel.",
  },
  {
    q: "Was ist die Glockner-AI-Förderung von 30 %?",
    a: "Die Glockner-AI-Förderung ist unser eigener Förder-Hebel: 30 % auf Ihr KI-Projekt mit Glockner AI — unabhängig von staatlichen Töpfen und sofort verfügbar. So bleibt Ihr KI-Vorhaben auch 2026 leistbar, obwohl KMU.DIGITAL ausgeschöpft ist. Sprechen Sie uns für die Konditionen an.",
  },
  {
    q: "Für wen gilt die Glockner-AI-Förderung?",
    a: "Für KMU in Österreich, die mit Glockner AI ein KI-Projekt umsetzen — ob Training, Service-Retainer oder fertiges Produkt. Am einfachsten klären wir Ihren Fall in einem kostenlosen Erstgespräch.",
  },
];

export default function FoerderungPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="reveal-scope">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* ───────── HERO ───────── */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#040b1a] to-brand-dark" />
        <div
          className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70vw] max-w-[800px] aspect-square rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,106,0.16) 0%, rgba(6,182,212,0.08) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-aurum font-bold mb-6">
            Förderung
          </div>
          <h1 className="font-serif-display font-medium text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] m-0">
            KI-Förderung für KMU<br />
            <span className="aurum-text">in Österreich</span>
          </h1>
          <p className="mt-6 text-slate-300 text-lg md:text-xl leading-relaxed">
            Wie Sie Ihr KI-Projekt in Österreich fördern lassen — was die
            staatliche KMU.DIGITAL-Förderung leistet, warum sie 2026 nicht mehr
            zur Verfügung steht, und welcher Hebel jetzt zählt.
          </p>
        </div>
      </section>

      {/* ───────── KMU.DIGITAL ───────── */}
      <section className="relative py-16 md:py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl tracking-[-0.02em] m-0">
            Das Förderprogramm <span className="aurum-text">KMU.DIGITAL</span>
          </h2>
          <p className="mt-5 text-slate-300 text-base md:text-lg leading-relaxed">
            KMU.DIGITAL ist die Digitalisierungs-Förderinitiative des Bundes
            (BMAW &amp; Wirtschaftskammer Österreich), abgewickelt über die{" "}
            <span className="text-white">aws – Austria Wirtschaftsservice</span>.
            Sie unterstützt kleine und mittlere Unternehmen dabei, digitaler —
            und damit wettbewerbsfähiger — zu werden. Das Programm steht auf zwei
            Säulen:
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            <div className="rounded-2xl border border-aurum/25 bg-brand-card/70 p-6">
              <div className="font-mono text-[10.5px] tracking-[0.24em] uppercase text-aurum/85 font-semibold mb-3">
                Baustein 1
              </div>
              <h3 className="font-serif-display text-white text-xl m-0">Beratung — 2 Module</h3>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                Zwei geförderte Beratungs-Module durch zertifizierte Beraterinnen
                und Berater: die <span className="text-white">Status- und
                Potenzialanalyse</span> (Standortbestimmung) und die{" "}
                <span className="text-white">Strategieberatung</span> (konkreter
                Umsetzungs-Fahrplan).
              </p>
            </div>
            <div className="rounded-2xl border border-aurum/25 bg-brand-card/70 p-6">
              <div className="font-mono text-[10.5px] tracking-[0.24em] uppercase text-aurum/85 font-semibold mb-3">
                Baustein 2
              </div>
              <h3 className="font-serif-display text-white text-xl m-0">Umsetzung</h3>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                Investitionszuschuss von rund <span className="text-white">30 %</span>{" "}
                für konkrete Digitalisierungs-, E-Commerce- und KI-Projekte
                (gedeckelt je Förder-Call). Aus der Analyse wird geförderte
                Umsetzung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── STATUS 2026 ───────── */}
      <section className="relative py-16 md:py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-rose-400/25 bg-rose-400/5 p-7 md:p-8">
            <div className="font-mono text-[10.5px] tracking-[0.24em] uppercase text-rose-300/90 font-semibold mb-3">
              Status 2026
            </div>
            <h2 className="font-serif-display font-medium text-white text-2xl md:text-3xl m-0">
              Das Budget für 2026 ist leider ausgeschöpft
            </h2>
            <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">
              So gut die KMU.DIGITAL-Förderung ist — der Fördertopf für 2026 ist
              bereits aufgebraucht, aktuell sind keine neuen Anträge möglich. Für
              alle, die jetzt mit KI starten wollen, heißt das: nicht auf den
              nächsten Call warten müssen.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── GLOCKNER AI FÖRDERUNG ───────── */}
      <section className="relative py-20 md:py-28 border-t border-white/5 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(201,168,106,0.14), transparent 60%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-aurum font-bold mb-6">
            Der bessere Hebel
          </div>
          <h2 className="font-serif-display font-medium text-white text-3xl md:text-5xl leading-[1.06] tracking-[-0.02em] m-0">
            Die Glockner-AI-Förderung:<br />
            <span className="aurum-text">30 %</span>
          </h2>
          <p className="mt-6 text-slate-300 text-lg md:text-xl leading-relaxed">
            Damit Ihr KI-Projekt auch 2026 leistbar bleibt, geben wir Ihnen{" "}
            <span className="text-white font-semibold">unsere eigene Förderung von 30 %</span>{" "}
            auf Ihr Projekt mit Glockner AI — unabhängig von staatlichen Töpfen
            und sofort verfügbar. Kein Antragsmarathon, kein Warten auf den
            nächsten Call: einfach starten.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-aurum text-brand-dark font-semibold px-8 py-4 hover:bg-aurum-soft transition-colors"
            >
              Förderung sichern
            </Link>
            <Link
              href="/preise"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 text-white px-7 py-4 hover:border-aurum/60 transition-colors"
            >
              Preise ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="relative py-16 md:py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl tracking-[-0.02em] m-0 mb-8">
            Häufige Fragen zur KI-Förderung
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-white/10 bg-brand-card/60 p-5 open:border-aurum/40 transition-colors"
              >
                <summary className="cursor-pointer list-none font-serif-display text-white text-lg flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-aurum transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-slate-400 text-[15px] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
