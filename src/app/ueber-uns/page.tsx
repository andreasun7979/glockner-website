import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Glockner AI — KI-Beratung & Automatisierung für KMU in Österreich. Standorte in Wien und Klagenfurt.",
};

const values = [
  {
    title: "Praxisnah",
    desc: "Keine theoretischen Konzepte — wir liefern KI-Lösungen, die ab Tag eins Mehrwert bringen.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Sicher",
    desc: "DSGVO-Konformität und Datenschutz sind bei uns keine Nebensache, sondern Grundvoraussetzung.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Gefördert",
    desc: "Bis zu 80% WKO-Förderung — wir helfen beim Antrag und machen KI-Beratung leistbar.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Ganzheitlich",
    desc: "Von der Strategie über die Implementierung bis zur Schulung — alles aus einer Hand.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const locations = [
  {
    city: "Wien",
    address: "Blumauergasse 23/12, 1020 Wien",
    desc: "Unser Standort im Herzen Wiens — für Kunden in der Bundeshauptstadt und Umgebung.",
  },
  {
    city: "Kärnten",
    address: "Haraldweg 26/10, 9020 Klagenfurt",
    desc: "Unser Standort in Klagenfurt — für Kunden im Süden Österreichs.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/5 to-brand-dark" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-brand-cyan mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            Über uns
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
                     >
            Wir machen KMU{" "}
            <span className="gradient-text">zukunftsfähig</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Glockner AI ist spezialisiert auf KI-Beratung und Automatisierung
            für kleine und mittlere Unternehmen in Österreich.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg text-white font-medium">
                Die Ära der Agentic AI ist da — und wir helfen Ihrem
                Unternehmen, diese Chance zu nutzen.
              </p>
              <p>
                Von der strategischen Beratung über die Tool-Auswahl bis zur
                konkreten Umsetzung und Schulung Ihrer Mitarbeiter — wir
                begleiten Sie auf dem gesamten Weg der KI-Transformation.
              </p>
              <p>
                Unser Schwerpunkt liegt auf praxisnahen Lösungen, die sofort
                Mehrwert bringen: in Sales, Marketing, Organisation und darüber
                hinaus. Dabei legen wir höchsten Wert auf Datenschutz und
                Sicherheit.
              </p>
              <p>
                Dank der WKO-Förderung können bis zu{" "}
                <span className="text-brand-cyan font-semibold">80% der Kosten</span>{" "}
                für KI-Beratung gefördert werden — wir unterstützen Sie auch
                beim Förderantrag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                     >
            Was uns ausmacht
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass glass-hover rounded-2xl p-6 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-4">
                  {v.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
                     >
            Unser Team
          </h2>
          <p className="text-slate-400 mb-8">
            Team-Mitglieder werden über das CMS verwaltet.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/20 to-brand-dark" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                     >
            Unsere Standorte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((loc) => (
              <div key={loc.city} className="glass glass-hover rounded-2xl p-8 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white">{loc.city}</h3>
                </div>
                <p className="text-brand-cyan text-sm mb-2">{loc.address}</p>
                <p className="text-slate-400 text-sm">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-brand-dark to-brand-cyan/5" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
                     >
            Lassen Sie uns{" "}
            <span className="gradient-text-orange">zusammenarbeiten</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-10 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-brand-cyan/25 transition-all"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
