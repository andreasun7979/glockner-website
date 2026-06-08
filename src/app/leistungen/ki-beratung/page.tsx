import type { Metadata } from "next";
import Link from "next/link";
import { getServicePageById } from "../../../../sanity/lib/queries";

export const metadata: Metadata = {
  // Ältere Service-Seite, durch /leistungen-lux3 abgelöst — aus dem Index halten (Duplicate Content).
  robots: { index: false, follow: true },
  title: "Beratung Künstliche Intelligenz",
  description:
    "KI-Beratung & Implementierung für KMU. Sales, Marketing, Organisation — bis zu 80% WKO-Förderung.",
};

const withoutKI = [
  {
    title: "Geringe Automatisierung",
    desc: "Dein Team ertrinkt in manuellen Routineaufgaben. Dies führt oft zu Fehlern und bremst das Wachstum aus.",
  },
  {
    title: "Ressourcenverschwendung",
    desc: "Du arbeitest noch wie früher? Ein teurer Fehler. Was KI heute schneller, qualitativ hochwertiger und günstiger erledigt, frisst bei dir noch immer unnötig Zeit und Kapital.",
  },
  {
    title: "Umsatzpotenziale bleiben liegen",
    desc: "Leads werden nicht optimal bearbeitet, Cross-Selling Chancen übersehen.",
  },
  {
    title: "Anschluss verlieren",
    desc: "Während die Konkurrenz mit KI skaliert, wirst du technologisch abgehängt.",
  },
];

const withKI = [
  {
    title: "Smart Automation",
    desc: "Intelligente Workflows übernehmen Routineaufgaben. Dein Team gewinnt den Fokus für wertschöpfende Tätigkeiten zurück.",
  },
  {
    title: "Maximale Effizienz & Qualität",
    desc: "KI optimiert Prozesse, eliminiert Fehlerquellen und senkt Kosten spürbar — das ist Qualität auf neuem Niveau.",
  },
  {
    title: "Umsatz-Boost durch KI",
    desc: "Automatisierte Lead-Nurturing & Sales-Systeme heben ungenutzte Potenziale, die früher liegen geblieben sind.",
  },
  {
    title: "Zukunftssicherheit",
    desc: "Wir machen dich zum technologischen Vorreiter. Du sicherst dir Wettbewerbsvorteile, während andere noch den Anschluss suchen.",
  },
];

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Mehr Umsatz",
    desc: "Verwandeln Sie Daten in Deals: KI erkennt verborgene Cross-Selling-Potenziale und hilft Ihnen, Leads präziser abzuschließen.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Mehr Zeit",
    desc: "Befreien Sie Ihr Team von repetitiven Routineaufgaben. Gewinnen Sie wertvolle Stunden für kreative Arbeit und Kundenpflege.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Weniger Fehler",
    desc: "Perfektion auf Autopilot: Eliminieren Sie Fehler. Ihre KI-Systeme arbeiten rund um die Uhr mit mathematischer Präzision.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Der Konkurrenz voraus",
    desc: "Agieren statt reagieren: Nutzen Sie prädiktive Analysen, um Markttrends früher zu erkennen und technologisch vorauszueilen.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Höhere Produktivität",
    desc: "Mehr Output, gleiche Ressourcen: KI-Agenten beschleunigen Ihre Workflows massiv und ermöglichen Rekordzeiten bei Projektabschlüssen.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Weniger Kosten",
    desc: "Maximaler ROI: Senken Sie Ihre operativen Ausgaben drastisch durch Automatisierung und effizientere Ressourcennutzung.",
  },
];

const pillars = [
  {
    title: "KI im Sales & Funnels",
    desc: "Bringen Sie Ihren Vertrieb durch Automatisierung & KI auf ein neues Level. Steigern Sie Umsatz und Lead-Qualität nachhaltig.",
    features: ["KI-gestützte Lead-Generierung", "Automatisiertes Lead-Nurturing", "Intelligente Sales-Funnels", "Conversion-Optimierung"],
  },
  {
    title: "KI im Marketing",
    desc: "Das Web wandelt sich — bleiben Sie sichtbar. Mit den richtigen KI-Strategien und digitalen Mitarbeitern erstellen Sie herausragenden Content.",
    features: ["Automatisierte Content-Erstellung", "SEO-Optimierung mit KI", "Social Media Automation", "Video & Bild Generierung"],
  },
  {
    title: "KI in der Organisation",
    desc: "Maximale Effizienz durch intelligente Agenten. Eliminieren Sie Routineaufgaben und Fehlerquellen.",
    features: ["Workflow-Automatisierung", "E-Mail & Dokumentenverarbeitung", "Intelligentes Wissensmanagement", "Prozessoptimierung"],
  },
  {
    title: "Datenschutz & Security",
    desc: "KI, die sich Ihren Sicherheitsbedürfnissen anpasst. Ob DSGVO-konform oder On-Premise.",
    features: ["DSGVO-konforme Implementierung", "Datenschutz-Audits", "Security-Konzepte für KI", "Mitarbeiter-Sensibilisierung"],
  },
  {
    title: "KI-Schulung & Enablement",
    desc: "Befähigen Sie Ihre Mitarbeiter, KI-Lösungen mit enormem Nutzen selbst zu gestalten.",
    features: ["KI-Grundlagen Workshops", "Prompt Engineering Training", "Tool-spezifische Schulungen", "Individuelles Coaching"],
  },
];

const packages = [
  {
    badge: "80% WKO-Förderung",
    title: "KI-Potentialanalyse",
    subtitle: "Analyse-Modul",
    price: "100",
    originalPrice: "500",
    features: [
      "Identifikation von KI-Anwendungsfällen",
      "Bewertung der Datenverfügbarkeit",
      "Detailliertes Dokument mit Implementierungs-Roadmap",
      "90 Minuten persönliches Strategiegespräch",
      "Komplette Förderabwicklung inklusive",
    ],
  },
  {
    badge: "50% WKO-Förderung",
    title: "KI-Strategie Beratung",
    subtitle: "Strategie-Modul",
    price: "1.000",
    originalPrice: "2.000",
    popular: true,
    features: [
      "Maßgeschneiderte KI-Roadmap",
      "Deep-Dive Workshop: Tool-Auswahl",
      "Konzeption individueller KI-Assistenten & Agenten",
      "Umfangreiches Strategiedokument mit ROI-Analyse",
      "Full-Service Förderabwicklung",
    ],
  },
  {
    badge: "30% WKO-Förderung",
    title: "KI-Strategie Umsetzung",
    subtitle: "Umsetzungs-Modul",
    price: "ab 4.200",
    originalPrice: "bis 6.000",
    features: [
      "Technische Implementierung in bestehende IT",
      "Anbindung von AI-Agenten an CRM, ERP, Marketing-Tools",
      "Automatisierung von Workflows für Sales & Operations",
      "Komplette Förderabwicklung inklusive",
    ],
  },
];

const funnelSteps = ["Traffic", "Bait", "Top of Funnel", "Middle of Funnel", "Bottom of Funnel", "Revenue"];

const customerSteps = [
  {
    title: "Onboarding",
    desc: "AI Kundenonboarding — als solide Basis für eine langfristige Kundenbeziehung.",
  },
  {
    title: "Ausbau / Upselling",
    desc: "AI unterstützt die strategische Entwicklung entlang der Werteleiter.",
  },
  {
    title: "Retention / Halten",
    desc: "AI verhindert Abwanderung durch proaktive Analysen und Betreuung.",
  },
];

const useCases = [
  "KI Chatbot", "Video Erstellung AI", "Automatisierungen mit AI",
  "AI Terminbuchungen", "Autom. E-Mail Bearbeitung", "Bilder Erstellung AI",
  "KI SEO Agent", "Support Voice Agent", "Social Media KI Agent",
  "Blogartikel AI", "AI Feedback Generator", "Voice Agents Leads",
  "Wissenstransfer mit AI",
];

const roadmap = [
  {
    step: "01",
    title: "Kostenloses AI-Potenzialgespräch",
    desc: "Wir analysieren, wo manuelle Prozesse Sie bremsen und wie AI in Marketing & Sales sofort den Umsatz steigert. Wir zeigen Ihnen den direkten Weg, um die träge Konkurrenz abzuhängen.",
  },
  {
    step: "02",
    title: "Strategie: Wachstum & Effizienz",
    desc: "Wir konzipieren Ihre Transformation. Ob Sales-Automatisierung (z.B. Voice Agents) oder interne Prozessoptimierung: Wir liefern den Bauplan, der Verwaltung und Vertrieb zur Hochleistungsmaschine macht. Inkl. 50% WKO-Förderung für die Strategieberatung.",
  },
  {
    step: "03",
    title: "Umsetzung & Technik",
    desc: "Wir setzen die Planung um. Wir implementieren alle KI-Systeme und Automatisierungen nahtlos in Ihre bestehende IT-Landschaft. Wir sorgen dafür, dass Sales und Operations technisch perfekt zusammenspielen. Inkl. 30% WKO-Förderung für die Umsetzung.",
  },
  {
    step: "04",
    title: "Team-Onboarding & Training",
    desc: "Wir machen Ihr Team fit für die Zukunft. Durch gezielte Schulungen lernen Ihre Mitarbeiter den effektiven Umgang mit den neuen AI-Tools — für volle Akzeptanz und maximale Produktivität im Alltag.",
  },
];

export default async function KIBeratungPage() {
  const cms = await getServicePageById("service-ki-beratung").catch(() => null);

  const heroData = {
    badge: cms?.heroBadge || "Beratung Künstliche Intelligenz",
    heading: cms?.heroHeading || "Die Ära der KI ist da.",
    accent: cms?.heroHeadingAccent || "Wir machen Ihr Unternehmen zukunftsfähig.",
    desc: cms?.heroDescription || "Schluss mit veralteten Prozessen. Nutzen Sie die technologische Revolution und erleben Sie, wie Qualität, Produktivität und Umsatz in Ihrem Unternehmen deutlich steigen.",
    cta: cms?.heroCtaText || "Jetzt informieren",
  };
  const pkgs = cms?.packages?.length ? cms.packages : packages;
  const steps = cms?.roadmapSteps?.length ? cms.roadmapSteps.map((r: { title: string; desc: string }, i: number) => ({ ...r, step: String(i + 1).padStart(2, "0") })) : roadmap;
  const ctaData = {
    heading: cms?.ctaHeading || "Bereit für die",
    headingAccent: "KI-Transformation?",
    desc: cms?.ctaDescription || "Bis zu 80% WKO-Förderung möglich. Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch.",
    button: cms?.ctaButtonText || "Kostenloses Erstgespräch vereinbaren",
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[128px]" />
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

      {/* Comparison */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/50 to-brand-dark" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-red-400">Ohne KI-Strategie</h3>
              </div>
              <div className="space-y-5">
                {withoutKI.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 mt-2 shrink-0" />
                    <div>
                      <p className="text-white font-medium text-sm">{item.title}</p>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-8 border-brand-cyan/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-brand-cyan">Mit Glockner AI</h3>
              </div>
              <div className="space-y-5">
                {withKI.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/60 mt-2 shrink-0" />
                    <div>
                      <p className="text-white font-medium text-sm">{item.title}</p>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ihr Vorteil durch <span className="gradient-text">Glockner AI</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="glass glass-hover rounded-2xl p-6 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-4">
                  {b.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{b.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Pillars */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Glockner AI <span className="gradient-text">Strategiekonzept</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Wir implementieren keine einzelnen Tools, sondern eine auf Ihr Unternehmen abgestimmte Strategie.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div key={p.title} className={`glass glass-hover rounded-2xl p-6 transition-all duration-300 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-4">
                  <span className="text-brand-blue font-bold text-sm">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <svg className="w-3.5 h-3.5 text-brand-cyan shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Exklusive Beratungspakete
            </h2>
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
                  Jetzt anfragen
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/50 to-brand-dark" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              KI im Sales — <span className="gradient-text">Fix the Sales, fix the Business.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Wer Sales heute nur manuell macht, riskiert den Anschluss. Sales &amp; KI ist der Vertrieb der Zukunft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass glass-hover rounded-2xl p-8 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lead Generation</h3>
              <p className="text-slate-400 leading-relaxed">KI findet Kunden, bevor sie suchen.</p>
            </div>
            <div className="glass glass-hover rounded-2xl p-8 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lead Nurturing</h3>
              <p className="text-slate-400 leading-relaxed">Automatisierte Qualifizierung rund um die Uhr.</p>
            </div>
          </div>

          {/* Funnel Visualization */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-center text-white font-semibold mb-8">Sales Funnel</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
              {funnelSteps.map((step, i) => (
                <div key={step} className="flex items-center">
                  <div className={`px-4 py-3 rounded-lg text-sm font-medium text-center whitespace-nowrap ${
                    i === funnelSteps.length - 1
                      ? "bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30"
                      : "bg-white/5 text-slate-300 border border-white/10"
                  }`}>
                    {step}
                  </div>
                  {i < funnelSteps.length - 1 && (
                    <svg className="w-5 h-5 text-slate-600 mx-1 shrink-0 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bestandskunden */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bestandskunden
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Der erste Auftrag deckt oft nur die Kosten — der wahre Ertrag liegt in der
              langfristigen Beziehung. Nutzen Sie KI, um Ihre Kunden vollautomatisch zu
              entwickeln und den Kundenwert deutlich zu steigern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {customerSteps.map((c, i) => (
              <div key={c.title} className="glass glass-hover rounded-2xl p-6 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-cyan font-bold">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/40 to-brand-dark" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              KI im Marketing — <span className="gradient-text">Own the Traffic, Own the Market.</span>
            </h2>
            <p className="text-xl text-slate-300 mb-4">
              AI erledigt die Arbeit eines 10-köpfigen Teams in Sekunden.
            </p>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Wir transformieren Ihr klassisches Marketing in ein skalierbares AI-System und
              führen Ihr KMU aus dem Preiskampf direkt in den &ldquo;Blue Ocean&rdquo;.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass glass-hover rounded-2xl p-8 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ihr Vorteil</h3>
              <p className="text-slate-400 leading-relaxed">Maximale Sichtbarkeit und mehr Verkäufe bei minimalem Aufwand.</p>
            </div>
            <div className="glass glass-hover rounded-2xl p-8 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Unser Job</h3>
              <p className="text-slate-400 leading-relaxed">Wir schaffen die strategische und technische Basis dafür.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              KI in der Organisation
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-white mb-4">
              Wir erhöhen die Effizienz &amp; Effektivität{" "}
              <span className="gradient-text">Ihres Unternehmens.</span>
            </p>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
              Manuelle Prozesse sind zu teuer, zu langsam und zu fehleranfällig.
              Mach dein Business mit AI zur Hochleistungsmaschine und hänge die
              träge Konkurrenz ab.
            </p>
            <Link href="/kontakt" className="inline-block bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-brand-cyan/25 transition-all">
              Jetzt informieren
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Slider */}
      <section className="py-20 md:py-24 overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            <span className="gradient-text">Use Cases AI</span><br />
            Strategisch erstellt und kombiniert,<br />
            werden Sie der Konkurrenz weit voraus sein.
          </h2>
        </div>
        <div className="use-case-slider">
          <div className="slider-row slider-row-1">
            {[...useCases, ...useCases].map((uc, i) => (
              <div key={`r1-${uc}-${i}`} className="slide-card">{uc}</div>
            ))}
          </div>
          <div className="slider-row slider-row-2">
            {[...useCases].reverse().concat([...useCases].reverse()).map((uc, i) => (
              <div key={`r2-${uc}-${i}`} className="slide-card">{uc}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Der Weg zum Erfolg — <span className="gradient-text">Deine Roadmap zur KI-Dominanz</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Wir implementieren keine einzelnen Software Tools, sondern eine auf Ihr Unternehmen abgestimmte Strategie.
            </p>
          </div>
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
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
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
