import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "KI-Beratung, Automatisierung, Sales & Marketing, Datenschutz, Schulung und Branchenlösungen für KMU.",
};

const services = [
  {
    id: "ki-beratung",
    href: "/leistungen/ki-beratung",
    title: "Beratung Künstliche Intelligenz",
    desc: "Wir analysieren Ihre Geschäftsprozesse und identifizieren Potenziale für KI-Integration. Von der ersten Idee bis zur fertigen Strategie begleiten wir Sie auf dem Weg in die KI-Zukunft.",
    features: [
      "Ist-Analyse & Potenzialidentifikation",
      "KI-Strategie & individuelle Roadmap",
      "Tool-Auswahl & Implementierungsplan",
      "ROI-Berechnung & Business Case",
      "Agentic AI Systeme & Automatisierung",
      "Laufende Betreuung & Optimierung",
    ],
    color: "brand-cyan",
  },
  {
    id: "ecommerce",
    href: "/leistungen/ecommerce",
    title: "Beratung eCommerce",
    desc: "KI-gestützte Optimierung Ihres Online-Geschäfts. Von automatisierter Produktbeschreibung über intelligente Preisgestaltung bis zur personalisierten Kundenansprache.",
    features: [
      "KI-gestützte Produktoptimierung",
      "Automatisierte Content-Erstellung",
      "Intelligente Preisgestaltung",
      "Personalisierte Customer Journeys",
      "Conversion-Rate Optimierung",
      "Automatisiertes Bestandsmanagement",
    ],
    color: "brand-orange",
  },
  {
    id: "gewerbe",
    href: "/leistungen/gewerbe",
    title: "Beratung Gewerbebetrieb",
    desc: "Maßgeschneiderte KI-Lösungen für Gewerbe und Handwerk. Prozesse digitalisieren, Aufträge effizienter managen und Ressourcen optimal einsetzen.",
    features: [
      "Digitale Auftragsabwicklung",
      "Automatisierte Angebotserstellung",
      "KI-gestütztes Ressourcenmanagement",
      "Intelligente Terminplanung",
      "Dokumenten-Automatisierung",
      "Qualitätssicherung mit KI",
    ],
    color: "brand-blue",
  },
  {
    id: "gesundheit",
    href: "/leistungen/gesundheit",
    title: "Beratung Ärzte & Gesundheit",
    desc: "DSGVO-konforme KI-Lösungen für das Gesundheitswesen. Patientenmanagement optimieren, Verwaltungsaufwand reduzieren und mehr Zeit für das Wesentliche.",
    features: [
      "Automatisiertes Patientenmanagement",
      "KI-gestützte Terminvergabe",
      "Intelligente Dokumentation",
      "DSGVO-konforme Datenverarbeitung",
      "Workflow-Optimierung Praxisalltag",
      "Patienten-Kommunikationsassistent",
    ],
    color: "brand-cyan",
  },
];

const pillars = [
  {
    title: "KI im Sales & Funnels",
    desc: "Bringen Sie Ihren Vertrieb durch Automatisierung & KI auf ein neues Level. Steigern Sie Umsatz und Lead-Qualität nachhaltig.",
    details: [
      "KI-gestützte Lead-Generierung",
      "Automatisiertes Lead-Nurturing",
      "Intelligente Sales-Funnels",
      "Conversion-Optimierung",
    ],
  },
  {
    title: "KI im Marketing",
    desc: "Das Web wandelt sich — bleiben Sie sichtbar. Mit den richtigen KI-Strategien und digitalen Mitarbeitern erstellen Sie herausragenden Content.",
    details: [
      "Automatisierte Content-Erstellung",
      "SEO-Optimierung mit KI",
      "Social Media Automation",
      "Video & Bild Generierung",
    ],
  },
  {
    title: "KI in der Organisation",
    desc: "Maximale Effizienz durch intelligente Agenten. Eliminieren Sie Routineaufgaben und Fehlerquellen in Ihrem Unternehmen.",
    details: [
      "Workflow-Automatisierung",
      "E-Mail & Dokumentenverarbeitung",
      "Intelligentes Wissensmanagement",
      "Prozessoptimierung",
    ],
  },
  {
    title: "Datenschutz & Security",
    desc: "KI, die sich Ihren Sicherheitsbedürfnissen anpasst. Ob DSGVO-konform oder On-Premise — wir finden die richtige Lösung.",
    details: [
      "DSGVO-konforme Implementierung",
      "Datenschutz-Audits",
      "Security-Konzepte für KI",
      "Mitarbeiter-Sensibilisierung",
    ],
  },
  {
    title: "KI-Schulung & Enablement",
    desc: "Befähigen Sie Ihre Mitarbeiter, KI-Lösungen mit enormem Nutzen selbst zu gestalten und einzusetzen.",
    details: [
      "KI-Grundlagen Workshops",
      "Prompt Engineering Training",
      "Tool-spezifische Schulungen",
      "Individuelles Coaching",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 to-brand-dark" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-brand-cyan mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            Dienstleistungen
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
                     >
            Unsere Leistungen
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Ganzheitliche KI-Beratung und Umsetzung — maßgeschneidert für Ihr
            Unternehmen. Von der Strategie bis zur Implementierung.
          </p>
        </div>
      </section>

      {/* Consulting Verticals */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className="glass glass-hover rounded-2xl p-8 md:p-10 transition-all duration-300 scroll-mt-24"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${service.color}/10 text-${service.color} text-xs font-medium mb-4`}>
                    0{i + 1}
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                                     >
                    {service.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                </div>
                <div className="md:w-1/2">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <svg className={`w-4 h-4 text-${service.color} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                    <Link href={service.href} className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-brand-cyan hover:text-white transition-colors">
                      Mehr erfahren
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategy Pillars */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
                         >
              Unsere fünf{" "}
              <span className="gradient-text">Kompetenzfelder</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Ganzheitlich denken, gezielt umsetzen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`glass glass-hover rounded-2xl p-6 transition-all duration-300 ${i >= 3 ? "lg:col-span-1" : ""}`}
              >
                <h3 className="text-lg font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <ul className="space-y-2">
                  {p.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-slate-300">
                      <svg className="w-3.5 h-3.5 text-brand-cyan shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-brand-dark to-brand-cyan/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
                     >
            Interesse geweckt?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Bis zu 80% WKO-Förderung möglich. Lassen Sie sich jetzt kostenlos beraten.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-10 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-brand-cyan/25 transition-all"
          >
            Kostenlose Beratung anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
