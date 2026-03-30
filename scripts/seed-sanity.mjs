import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "pdjtv2pg",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.argv[2],
  useCdn: false,
});

const mutations = [
  {
    createOrReplace: {
      _id: "homepage",
      _type: "homepage",
      heroBadge: "KI-Beratung & Automatisierung",
      heroHeading: "Die Ära der KI ist da.",
      heroHeadingAccent: "Wir machen Ihr Unternehmen zukunftsfähig.",
      heroDescription: "Schluss mit veralteten Prozessen. Nutzen Sie die technologische Revolution und erleben Sie, wie Qualität, Produktivität und Umsatz in Ihrem Unternehmen deutlich steigen.",
      heroCtaText: "Jetzt informieren",
      heroCtaSecondary: "Unsere Leistungen",
      comparisonHeading: "Warum jetzt auf KI setzen?",
      comparisonDescription: "Der Unterschied zwischen stehenbleiben und wachsen.",
      withoutKI: [
        { _key: "w1", title: "Geringe Automatisierung", desc: "Ihr Team ertrinkt in manuellen Routineaufgaben und bremst das Wachstum." },
        { _key: "w2", title: "Ressourcenverschwendung", desc: "Veraltete Workflows verschwenden Zeit und Kapital." },
        { _key: "w3", title: "Umsatzpotenziale bleiben liegen", desc: "Leads werden nicht nachverfolgt, Cross-Selling verpasst." },
        { _key: "w4", title: "Anschluss verlieren", desc: "Technologisch von der Konkurrenz überholt werden." },
      ],
      withKI: [
        { _key: "m1", title: "Smart Automation", desc: "Intelligente Workflows befreien Ihr Team für wertschöpfende Arbeit." },
        { _key: "m2", title: "Maximale Effizienz & Qualität", desc: "Fehler eliminieren und Kosten reduzieren — automatisch." },
        { _key: "m3", title: "Umsatz-Boost durch KI", desc: "Automatisiertes Lead-Nurturing erschließt neue Umsatzquellen." },
        { _key: "m4", title: "Zukunftssicherheit", desc: "Technologischer Wettbewerbsvorteil durch KI-First Strategie." },
      ],
      benefitsHeading: "Ihr Vorteil durch Glockner AI",
      benefitsDescription: "Messbare Ergebnisse statt leerer Versprechen.",
      benefits: [
        { _key: "b1", title: "Mehr Umsatz", desc: "KI identifiziert verborgene Cross-Selling-Chancen und schließt Leads präzise ab." },
        { _key: "b2", title: "Mehr Zeit", desc: "Ihr Team wird von repetitiven Aufgaben befreit und kann sich auf strategische Arbeit konzentrieren." },
        { _key: "b3", title: "Weniger Fehler", desc: "Mathematische Präzision eliminiert menschliche Fehler — 24/7, ohne Pause." },
        { _key: "b4", title: "Der Konkurrenz voraus", desc: "Predictive Analytics ermöglicht es, Markttrends vorherzusehen statt hinterherzulaufen." },
        { _key: "b5", title: "Höhere Produktivität", desc: "KI-Agenten beschleunigen Ihre Workflows um ein Vielfaches." },
        { _key: "b6", title: "Weniger Kosten", desc: "Operative Kostenreduktion durch automatisierte Prozesse und weniger Overhead." },
      ],
      pillarsHeading: "Unser Konzept macht Sie zukunftsfähig",
      pillarsDescription: "Fünf Säulen für eine ganzheitliche KI-Transformation.",
      pillars: [
        { _key: "p1", title: "KI im Sales & Funnels", desc: "Bringen Sie Ihren Vertrieb durch Automatisierung & KI auf ein neues Level." },
        { _key: "p2", title: "KI im Marketing", desc: "Das Web wandelt sich — bleiben Sie sichtbar. Mit den richtigen KI-Strategien erstellen Sie herausragenden Content effizient." },
        { _key: "p3", title: "KI in der Organisation", desc: "Maximale Effizienz durch intelligente Agenten. Eliminieren Sie Routineaufgaben und Fehlerquellen." },
        { _key: "p4", title: "Datenschutz & Security", desc: "KI, die sich Ihren Sicherheitsbedürfnissen anpasst. Ob DSGVO-konform oder On-Premise." },
        { _key: "p5", title: "KI-Schulung & Enablement", desc: "Befähigen Sie Ihre Mitarbeiter, KI-Lösungen mit enormem Nutzen selbst zu gestalten." },
      ],
      packagesHeading: "Unsere Beratungspakete",
      packagesDescription: "Profitieren Sie von bis zu 80% WKO-Förderung auf unsere Beratungsleistungen.",
      packages: [
        { _key: "pkg1", badge: "80% WKO-Förderung", title: "KI-Potentialanalyse", subtitle: "Analyse-Modul", price: "100", originalPrice: "500", popular: false, features: ["KI-Use-Case Identifikation", "Datenverfügbarkeits-Assessment", "Implementierungs-Roadmap", "90-minütige Strategie-Session"] },
        { _key: "pkg2", badge: "50% WKO-Förderung", title: "KI-Strategie Beratung", subtitle: "Strategie-Modul", price: "1.000", originalPrice: "2.000", popular: true, features: ["Individuelle KI-Roadmap", "Sales & Marketing Tool-Workshop", "KI-Assistenten Konzeption", "ROI-Analyse Dokument"] },
        { _key: "pkg3", badge: "30% WKO-Förderung", title: "KI-Strategie Umsetzung", subtitle: "Umsetzungs-Modul", price: "ab 4.200", originalPrice: "bis 6.000", popular: false, features: ["Technische Implementierung", "CRM/ERP/Marketing Integration", "Workflow-Automatisierung", "Sales & Operations Setup"] },
      ],
      useCasesHeading: "Unsere KI Use Cases",
      useCases: ["KI Chatbot", "Video Erstellung AI", "Automatisierungen mit AI", "AI Terminbuchungen", "Autom. E-Mail Bearbeitung", "Bilder Erstellung AI", "KI SEO Agent", "Support Voice Agent", "Social Media KI Agent", "Blogartikel AI", "AI Feedback Generator", "Voice Agents Leads", "Wissenstransfer mit AI"],
      roadmapHeading: "Der Weg zum Erfolg",
      roadmapDescription: "In vier Schritten zur KI-Transformation Ihres Unternehmens.",
      roadmapSteps: [
        { _key: "r1", title: "Kostenloses Erstgespräch", desc: "Wir analysieren gemeinsam Ihre Prozesse und identifizieren KI-Potenziale in Ihrem Unternehmen." },
        { _key: "r2", title: "Strategieentwicklung", desc: "Individuelle KI-Roadmap inkl. Tool-Auswahl und Workflow-Optimierung. Bis zu 50% WKO-Förderung." },
        { _key: "r3", title: "Technische Umsetzung", desc: "Implementierung, Integration in bestehende Systeme und Automatisierung. Bis zu 30% WKO-Förderung." },
        { _key: "r4", title: "Schulung & Onboarding", desc: "Ihr Team wird eingeschult und kann die neuen KI-Tools eigenständig nutzen und weiterentwickeln." },
      ],
      ctaHeading: "Bereit für die KI-Transformation?",
      ctaDescription: "Bis zu 80% WKO-Förderung möglich. Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch und entdecken Sie das KI-Potenzial Ihres Unternehmens.",
      ctaButtonText: "Kostenloses Erstgespräch vereinbaren",
    },
  },
  {
    createOrReplace: {
      _id: "service-ki-beratung",
      _type: "servicePage",
      title: "Beratung Künstliche Intelligenz",
      slug: { _type: "slug", current: "ki-beratung" },
      heroBadge: "Beratung Künstliche Intelligenz",
      heroHeading: "Die Ära der KI ist da.",
      heroHeadingAccent: "Wir machen Ihr Unternehmen zukunftsfähig.",
      heroDescription: "Schluss mit veralteten Prozessen. Nutzen Sie die technologische Revolution und erleben Sie, wie Qualität, Produktivität und Umsatz in Ihrem Unternehmen deutlich steigen.",
      heroCtaText: "Jetzt informieren",
      packagesHeading: "Exklusive Beratungspakete",
      packagesDescription: "Bis zu 80% staatliche Förderung möglich.",
      packages: [
        { _key: "kp1", badge: "80% WKO-Förderung", title: "KI-Potentialanalyse", subtitle: "Analyse-Modul", price: "100", originalPrice: "500", popular: false, features: ["Identifikation von KI-Anwendungsfällen", "Bewertung der Datenverfügbarkeit", "Detailliertes Dokument mit Implementierungs-Roadmap", "90 Minuten persönliches Strategiegespräch", "Komplette Förderabwicklung inklusive"] },
        { _key: "kp2", badge: "50% WKO-Förderung", title: "KI-Strategie Beratung", subtitle: "Strategie-Modul", price: "1.000", originalPrice: "2.000", popular: true, features: ["Maßgeschneiderte KI-Roadmap", "Deep-Dive Workshop: Tool-Auswahl", "Konzeption individueller KI-Assistenten & Agenten", "Umfangreiches Strategiedokument mit ROI-Analyse", "Full-Service Förderabwicklung"] },
        { _key: "kp3", badge: "30% WKO-Förderung", title: "KI-Strategie Umsetzung", subtitle: "Umsetzungs-Modul", price: "ab 4.200", originalPrice: "bis 6.000", popular: false, features: ["Technische Implementierung in bestehende IT", "Anbindung von AI-Agenten an CRM, ERP, Marketing-Tools", "Automatisierung von Workflows für Sales & Operations", "Komplette Förderabwicklung inklusive"] },
      ],
      roadmapHeading: "Der Weg zum Erfolg — Deine Roadmap zur KI-Dominanz",
      roadmapSteps: [
        { _key: "kr1", title: "Kostenloses AI-Potenzialgespräch", desc: "Wir analysieren, wo manuelle Prozesse Sie bremsen und wie AI in Marketing & Sales sofort den Umsatz steigert." },
        { _key: "kr2", title: "Strategie: Wachstum & Effizienz", desc: "Wir konzipieren Ihre Transformation. Ob Sales-Automatisierung oder interne Prozessoptimierung. Inkl. 50% WKO-Förderung." },
        { _key: "kr3", title: "Umsetzung & Technik", desc: "Implementierung aller KI-Systeme nahtlos in Ihre bestehende IT-Landschaft. Inkl. 30% WKO-Förderung." },
        { _key: "kr4", title: "Team-Onboarding & Training", desc: "Gezielte Schulungen für den effektiven Umgang mit den neuen AI-Tools." },
      ],
      ctaHeading: "Bereit für die KI-Transformation?",
      ctaDescription: "Bis zu 80% WKO-Förderung möglich. Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch.",
      ctaButtonText: "Kostenloses Erstgespräch vereinbaren",
    },
  },
  {
    createOrReplace: {
      _id: "service-ecommerce",
      _type: "servicePage",
      title: "Beratung eCommerce",
      slug: { _type: "slug", current: "ecommerce" },
      heroBadge: "Beratung eCommerce",
      heroHeading: "Erfolgreichen Webshop starten und",
      heroHeadingAccent: "Umsätze pushen!",
      heroDescription: "Erfahren Sie, wie Sie ein erfolgreiches Online-Business entwickeln und bis zu 7.400 EUR WKO-Förderung sichern!",
      heroCtaText: "Jetzt kostenloses Beratungsgespräch sichern",
      packagesHeading: "Beratungspakete",
      packagesDescription: "Bis zu 80% staatliche Förderung erhalten.",
      packages: [
        { _key: "ep1", badge: "80% WKO-Förderung", title: "Status- & Potentialanalyse", subtitle: "Ihr Webshop im Check", price: "100", originalPrice: "500", popular: false, features: ["Optimierungspotenziale identifiziert", "Handlungsempfehlungen", "2h Beratungsgespräch", "SEO & Performance Check", "Förderabwicklung inklusive"] },
        { _key: "ep2", badge: "50% WKO-Förderung", title: "Selling Online — Strategie", subtitle: "Webshop starten & Umsatz steigern", price: "1.000", originalPrice: "2.000", popular: true, features: ["8h Intensiv-Workshop", "Strategie-Blueprint", "Best-of-AI-Tools für eCommerce", "2h Social Media Training", "1 Monat WhatsApp Support"] },
        { _key: "ep3", badge: "30% WKO-Förderung", title: "Strategie Umsetzung", subtitle: "Bis zu 6.000 EUR Förderung", price: "ab 4.200", originalPrice: "bis 6.000", popular: false, features: ["Webshop-Erstellung & Optimierung", "Marktplatz-Anbindung", "Förderabwicklung inklusive"] },
      ],
      roadmapHeading: "Ihre Roadmap zu mehr Kunden und Umsatz",
      roadmapSteps: [
        { _key: "er1", title: "Kostenloses Beratungsgespräch", desc: "Förderungen von bis zu 7.400 EUR sichern." },
        { _key: "er2", title: "Check-Up: Online-Fitness", desc: "Online-Auftritt prüfen. 80% WKO-gefördert." },
        { _key: "er3", title: "Online Strategie Beratung", desc: "Nachhaltige Strategie. 50% WKO-gefördert." },
        { _key: "er4", title: "Umsetzung", desc: "30% WKO-Förderung — direkt durchstarten." },
      ],
      ctaHeading: "Bereit für Ihren Online-Erfolg?",
      ctaDescription: "Bis zu 7.400 EUR WKO-Förderung für Ihre digitale Transformation.",
      ctaButtonText: "Kostenloses Beratungsgespräch buchen",
    },
  },
  {
    createOrReplace: {
      _id: "service-gewerbe",
      _type: "servicePage",
      title: "Beratung Gewerbebetrieb",
      slug: { _type: "slug", current: "gewerbe" },
      heroBadge: "Beratung Gewerbebetrieb",
      heroHeading: "Ihre Website als",
      heroHeadingAccent: "Money Maker",
      heroDescription: "Wir bringen Ihnen mit nachhaltigen Digital-Strategien mehr Neukunden und erhöhen Ihre Umsätze! Bis zu 7.400 EUR WKO-Förderung.",
      heroCtaText: "Jetzt kostenlose Beratung anfordern",
      packagesHeading: "Beratungspakete",
      packagesDescription: "Bis zu 80% staatliche Förderung erhalten.",
      packages: [
        { _key: "gp1", badge: "80% WKO-Förderung", title: "Status- & Potentialanalyse", subtitle: "Ihre Website im Check", price: "100", originalPrice: "500", popular: false, features: ["Optimierungspotenziale identifiziert", "Handlungsempfehlungen", "2h Beratungsgespräch", "SEO & Performance Check", "Förderabwicklung inklusive"] },
        { _key: "gp2", badge: "50% WKO-Förderung", title: "Online Strategie Beratung", subtitle: "Neukunden & Umsatz steigern", price: "1.000", originalPrice: "2.000", popular: true, features: ["Maßgeschneiderte Online-Strategie", "Ganztags-Workshop", "Individuelle Beratung", "Strategiedokument", "Förderabwicklung inklusive"] },
        { _key: "gp3", badge: "30% WKO-Förderung", title: "Strategie Umsetzung", subtitle: "Bis zu 6.000 EUR Förderung", price: "ab 4.200", originalPrice: "bis 6.000", popular: false, features: ["Website-Erstellung & Optimierung", "Funnel- & Lead-Generierung", "Förderabwicklung inklusive"] },
      ],
      roadmapHeading: "Ihre Roadmap zu mehr Kunden und Umsatz",
      roadmapSteps: [
        { _key: "gr1", title: "Kostenloses Beratungsgespräch", desc: "Bis zu 7.400 EUR Förderung sichern." },
        { _key: "gr2", title: "Check-Up: Online-Fitness", desc: "Online-Auftritt prüfen. 80% WKO-gefördert." },
        { _key: "gr3", title: "Online Strategie Beratung", desc: "Nachhaltige Strategie. 50% WKO-gefördert." },
        { _key: "gr4", title: "Umsetzung", desc: "30% WKO-Förderung — direkt durchstarten." },
      ],
      ctaHeading: "Bereit für mehr Neukunden?",
      ctaDescription: "Bis zu 7.400 EUR WKO-Förderung für Ihre digitale Transformation.",
      ctaButtonText: "Kostenloses Beratungsgespräch buchen",
    },
  },
  {
    createOrReplace: {
      _id: "service-gesundheit",
      _type: "servicePage",
      title: "Beratung Ärzte & Gesundheit",
      slug: { _type: "slug", current: "gesundheit" },
      heroBadge: "Beratung Ärzte & Gesundheit",
      heroHeading: "Mehr Zeit für Patienten.",
      heroHeadingAccent: "Weniger Verwaltung.",
      heroDescription: "DSGVO-konforme KI- und Digitalisierungslösungen für Ärzte, Praxen und Gesundheitseinrichtungen. Bis zu 80% WKO-Förderung möglich.",
      heroCtaText: "Jetzt kostenlose Beratung anfordern",
      packagesHeading: "Beratungspakete für Gesundheit",
      packagesDescription: "Bis zu 80% staatliche Förderung möglich.",
      packages: [
        { _key: "hp1", badge: "80% WKO-Förderung", title: "Praxis-Digitalcheck", subtitle: "Status- & Potentialanalyse", price: "100", originalPrice: "500", popular: false, features: ["Digitale Praxis-Prozesse analysiert", "Automatisierungspotenzial identifiziert", "Roadmap & Empfehlungen", "2h Beratungsgespräch", "Förderabwicklung inklusive"] },
        { _key: "hp2", badge: "50% WKO-Förderung", title: "Digital-Strategie Gesundheit", subtitle: "Praxis-Optimierung", price: "1.000", originalPrice: "2.000", popular: true, features: ["Digitalisierungs-Roadmap", "KI-Tool Auswahl", "DSGVO-konforme Architektur", "Workflow-Optimierung", "Förderabwicklung inklusive"] },
        { _key: "hp3", badge: "30% WKO-Förderung", title: "Praxis-Digitalisierung", subtitle: "Bis zu 6.000 EUR Förderung", price: "ab 4.200", originalPrice: "bis 6.000", popular: false, features: ["Technische Implementierung", "Praxissoftware-Anbindung", "KI-Assistenten Setup", "Team-Schulung"] },
      ],
      roadmapHeading: "Ihr Weg zur digitalen Praxis",
      roadmapSteps: [
        { _key: "hr1", title: "Kostenloses Erstgespräch", desc: "KI- & Digitalisierungspotenziale aufzeigen." },
        { _key: "hr2", title: "Praxis-Digitalcheck", desc: "Status quo analysieren. 80% WKO-gefördert." },
        { _key: "hr3", title: "Strategieentwicklung", desc: "DSGVO-konforme Strategie. 50% WKO-gefördert." },
        { _key: "hr4", title: "Umsetzung & Schulung", desc: "Implementierung + Onboarding. 30% WKO-gefördert." },
      ],
      ctaHeading: "Bereit für die digitale Praxis?",
      ctaDescription: "DSGVO-konform, bis zu 80% WKO-gefördert. Vereinbaren Sie Ihr kostenloses Erstgespräch.",
      ctaButtonText: "Kostenloses Erstgespräch vereinbaren",
    },
  },
];

async function seed() {
  console.log("Seeding Sanity with all content...\n");
  for (const mutation of mutations) {
    const doc = mutation.createOrReplace;
    const label = doc.title || doc._id;
    try {
      await client.mutate([mutation]);
      console.log("  OK  " + label);
    } catch (err) {
      console.error("  FAIL  " + label + ": " + err.message);
    }
  }
  console.log("\nDone! All pages are now filled in Sanity Studio.");
}

seed();
