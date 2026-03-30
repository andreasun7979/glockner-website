import type { Metadata } from "next";
import Link from "next/link";
import { getServicePageById } from "../../../../sanity/lib/queries";

export const metadata: Metadata = {
  title: "Beratung Ärzte & Gesundheit",
  description:
    "KI- & Digital-Beratung für Ärzte, Praxen und Gesundheitswesen. DSGVO-konform, bis zu 80% WKO-Förderung.",
};

const challenges = [
  { title: "Administrativer Overload", desc: "Terminverwaltung, Dokumentation und Patientenkommunikation fressen wertvolle Zeit, die für Patienten fehlt." },
  { title: "Fachkräftemangel", desc: "Qualifiziertes Personal ist schwer zu finden — KI und Automatisierung können Engpässe kompensieren." },
  { title: "Digitalisierungsdruck", desc: "Patienten erwarten digitale Services — von Online-Terminbuchung bis zur digitalen Kommunikation." },
  { title: "Datenschutz-Anforderungen", desc: "DSGVO und Patientendatenschutz erfordern sichere, konforme Lösungen ohne Kompromisse." },
];

const solutions = [
  {
    title: "Automatisiertes Patientenmanagement",
    desc: "KI-gestützte Terminvergabe, automatische Erinnerungen und intelligente Wartezeitoptimierung.",
    features: ["Online-Terminbuchung 24/7", "Automatische SMS/E-Mail Erinnerungen", "Intelligente Wartezeitoptimierung", "Digitale Patientenaufnahme"],
  },
  {
    title: "KI-Assistenz im Praxisalltag",
    desc: "Entlasten Sie Ihr Team mit intelligenter Dokumentation, automatischer E-Mail-Bearbeitung und Sprachassistenten.",
    features: ["Intelligente Dokumentation", "Automatische E-Mail-Bearbeitung", "KI-Telefonassistent", "Digitales Wissensmanagement"],
  },
  {
    title: "Patienten-Kommunikation",
    desc: "Moderne, DSGVO-konforme Kommunikationskanäle für zufriedenere Patienten und weniger Verwaltungsaufwand.",
    features: ["Chatbot für häufige Fragen", "Automatisierte Befundbenachrichtigung", "Digitale Rezeptanfragen", "Feedback-Management"],
  },
];

const packages = [
  {
    badge: "80% WKO-Förderung",
    title: "Praxis-Digitalcheck",
    subtitle: "Status- & Potentialanalyse",
    price: "100",
    originalPrice: "500",
    features: [
      "Analyse Ihrer digitalen Praxis-Prozesse",
      "Identifikation von Automatisierungspotenzial",
      "Handlungsempfehlungen & Roadmap",
      "2 Stunden persönliches Beratungsgespräch",
      "Komplette Förderabwicklung inklusive",
    ],
  },
  {
    badge: "50% WKO-Förderung",
    title: "Digital-Strategie Gesundheit",
    subtitle: "Individuelle Praxis-Optimierung",
    price: "1.000",
    originalPrice: "2.000",
    popular: true,
    features: [
      "Maßgeschneiderte Digitalisierungs-Roadmap",
      "KI-Tool Auswahl für Ihre Praxis",
      "DSGVO-konforme Lösungsarchitektur",
      "Workflow-Optimierung Praxisalltag",
      "Full-Service Förderabwicklung",
    ],
  },
  {
    badge: "30% WKO-Förderung",
    title: "Praxis-Digitalisierung",
    subtitle: "Bis zu 6.000 EUR Förderung",
    price: "ab 4.200",
    originalPrice: "bis 6.000",
    features: [
      "Technische Implementierung",
      "Anbindung an Praxissoftware",
      "KI-Assistenten & Chatbot Setup",
      "Team-Schulung & Onboarding",
    ],
  },
];

const roadmap = [
  { step: "01", title: "Kostenloses Erstgespräch", desc: "Wir analysieren Ihre Praxis-Prozesse und zeigen KI- & Digitalisierungspotenziale auf." },
  { step: "02", title: "Praxis-Digitalcheck", desc: "Umfassende Analyse Ihres digitalen Status quo — 80% WKO-gefördert." },
  { step: "03", title: "Strategieentwicklung", desc: "DSGVO-konforme Digitalisierungsstrategie für Ihre Praxis — 50% WKO-gefördert." },
  { step: "04", title: "Umsetzung & Schulung", desc: "Implementierung und Team-Onboarding für maximale Akzeptanz — 30% WKO-gefördert." },
];

export default async function GesundheitPage() {
  const cms = await getServicePageById("service-gesundheit").catch(() => null);

  const heroData = {
    badge: cms?.heroBadge || "Beratung Ärzte & Gesundheit",
    heading: cms?.heroHeading || "Mehr Zeit für Patienten.",
    accent: cms?.heroHeadingAccent || "Weniger Verwaltung.",
    desc: cms?.heroDescription || "DSGVO-konforme KI- und Digitalisierungslösungen für Ärzte, Praxen und Gesundheitseinrichtungen. Bis zu 80% WKO-Förderung möglich.",
    cta: cms?.heroCtaText || "Jetzt kostenlose Beratung anfordern",
  };
  const ctaData = {
    heading: cms?.ctaHeading || "Bereit für die",
    headingAccent: "digitale Praxis?",
    desc: cms?.ctaDescription || "DSGVO-konform, bis zu 80% WKO-gefördert. Vereinbaren Sie Ihr kostenloses Erstgespräch.",
    button: cms?.ctaButtonText || "Kostenloses Erstgespräch vereinbaren",
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-cyan/15 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-brand-blue/10 rounded-full blur-[128px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-brand-cyan mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              {heroData.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              {heroData.heading}{" "}
              <span className="gradient-text">{heroData.accent}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              {heroData.desc}
            </p>
            <Link href="/kontakt" className="inline-block bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-brand-cyan/25 transition-all">
              {heroData.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Herausforderungen im <span className="gradient-text">Gesundheitswesen</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Kennen Sie diese Probleme? Wir haben die Lösung.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((c) => (
              <div key={c.title} className="glass glass-hover rounded-2xl p-6 transition-all duration-300">
                <h3 className="text-base font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unsere <span className="gradient-text">Lösungen</span>
            </h2>
          </div>
          <div className="space-y-8">
            {solutions.map((s) => (
              <div key={s.title} className="glass glass-hover rounded-2xl p-8 md:p-10 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="md:w-1/2">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <svg className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Beratungspakete für Gesundheit</h2>
            <p className="text-slate-400">Bis zu 80% staatliche Förderung möglich.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.title} className={`glass rounded-2xl p-8 transition-all duration-300 relative ${pkg.popular ? "border-brand-cyan/30 shadow-lg shadow-brand-cyan/5" : "glass-hover"}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-semibold px-4 py-1 rounded-full">Beliebt</span>
                  </div>
                )}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand-cyan/10 text-brand-cyan mb-4">{pkg.badge}</span>
                <p className="text-slate-400 text-sm mb-1">{pkg.subtitle}</p>
                <h3 className="text-xl font-bold text-white mb-3">{pkg.title}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">&euro;{pkg.price}</span>
                  <span className="text-slate-500 text-sm ml-2 line-through">&euro;{pkg.originalPrice}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt" className={`block text-center py-3 rounded-xl font-medium transition-all ${pkg.popular ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white hover:shadow-lg hover:shadow-brand-cyan/25" : "border border-white/10 text-white hover:bg-white/5"}`}>
                  Jetzt kontaktieren
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Ihr Weg zur <span className="gradient-text">digitalen Praxis</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((r) => (
              <div key={r.step} className="glass glass-hover rounded-2xl p-6 relative transition-all duration-300">
                <span className="text-4xl font-extrabold text-white/5 absolute top-4 right-4">{r.step}</span>
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                  <span className="text-brand-blue font-bold text-sm">{r.step}</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{r.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-brand-dark to-brand-cyan/5" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {ctaData.heading} <span className="gradient-text">{ctaData.headingAccent}</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            {ctaData.desc}
          </p>
          <Link href="/kontakt" className="inline-block bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-brand-cyan/25 transition-all">
            {ctaData.button}
          </Link>
        </div>
      </section>
    </>
  );
}
