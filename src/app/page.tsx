import Link from "next/link";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";
import { getHomepage } from "../../sanity/lib/queries";

type Item = { title: string; desc: string };
type Benefit = Item & { icon: React.ReactNode };
type Pillar = Item & { color: string };
type Pkg = { badge?: string; badgeColor?: string; title: string; subtitle?: string; price: string; originalPrice?: string; popular?: boolean; features?: string[] };
type Step = Item & { step: string };

const defaultWithoutKI = [
  {
    title: "Geringe Automatisierung",
    desc: "Ihr Team ertrinkt in manuellen Routineaufgaben und bremst das Wachstum.",
  },
  {
    title: "Ressourcenverschwendung",
    desc: "Veraltete Workflows verschwenden Zeit und Kapital.",
  },
  {
    title: "Umsatzpotenziale bleiben liegen",
    desc: "Leads werden nicht nachverfolgt, Cross-Selling verpasst.",
  },
  {
    title: "Anschluss verlieren",
    desc: "Technologisch von der Konkurrenz überholt werden.",
  },
];

const defaultWithKI = [
  {
    title: "Smart Automation",
    desc: "Intelligente Workflows befreien Ihr Team für wertschöpfende Arbeit.",
  },
  {
    title: "Maximale Effizienz & Qualität",
    desc: "Fehler eliminieren und Kosten reduzieren — automatisch.",
  },
  {
    title: "Umsatz-Boost durch KI",
    desc: "Automatisiertes Lead-Nurturing erschließt neue Umsatzquellen.",
  },
  {
    title: "Zukunftssicherheit",
    desc: "Technologischer Wettbewerbsvorteil durch KI-First Strategie.",
  },
];

const defaultBenefits = [
  { title: "Mehr Umsatz", desc: "KI identifiziert verborgene Cross-Selling-Chancen und schließt Leads präzise ab." },
  { title: "Mehr Zeit", desc: "Ihr Team wird von repetitiven Aufgaben befreit und kann sich auf strategische Arbeit konzentrieren." },
  { title: "Weniger Fehler", desc: "Mathematische Präzision eliminiert menschliche Fehler — 24/7, ohne Pause." },
  { title: "Der Konkurrenz voraus", desc: "Predictive Analytics ermöglicht es, Markttrends vorherzusehen statt hinterherzulaufen." },
  { title: "Höhere Produktivität", desc: "KI-Agenten beschleunigen Ihre Workflows um ein Vielfaches." },
  { title: "Weniger Kosten", desc: "Operative Kostenreduktion durch automatisierte Prozesse und weniger Overhead." },
];

const defaultPillars = [
  { title: "KI im Sales & Funnels", desc: "Bringen Sie Ihren Vertrieb durch Automatisierung & KI auf ein neues Level. Steigern Sie Umsatz und Lead-Qualität nachhaltig.", color: "brand-cyan" },
  { title: "KI im Marketing", desc: "Das Web wandelt sich — bleiben Sie sichtbar. Mit den richtigen KI-Strategien erstellen Sie herausragenden Content effizient.", color: "brand-cyan" },
  { title: "KI in der Organisation", desc: "Maximale Effizienz durch intelligente Agenten. Eliminieren Sie Routineaufgaben und Fehlerquellen in Ihrem Unternehmen.", color: "brand-blue" },
  { title: "Datenschutz & Security", desc: "KI, die sich Ihren Sicherheitsbedürfnissen anpasst. Ob DSGVO-konform oder On-Premise — wir finden die richtige Lösung.", color: "brand-cyan" },
  { title: "KI-Schulung & Enablement", desc: "Befähigen Sie Ihre Mitarbeiter, KI-Lösungen mit enormem Nutzen selbst zu gestalten und einzusetzen.", color: "brand-blue" },
];

const defaultPackages = [
  {
    badge: "80% WKO-Förderung",
    badgeColor: "bg-brand-cyan/10 text-brand-cyan",
    title: "KI-Potentialanalyse",
    subtitle: "Analyse-Modul",
    price: "100",
    originalPrice: "500",
    features: ["KI-Use-Case Identifikation", "Datenverfügbarkeits-Assessment", "Implementierungs-Roadmap", "90-minütige Strategie-Session"],
  },
  {
    badge: "50% WKO-Förderung",
    badgeColor: "bg-brand-blue/10 text-brand-blue",
    title: "KI-Strategie Beratung",
    subtitle: "Strategie-Modul",
    price: "1.000",
    originalPrice: "2.000",
    popular: true,
    features: ["Individuelle KI-Roadmap", "Sales & Marketing Tool-Workshop", "KI-Assistenten Konzeption", "ROI-Analyse Dokument"],
  },
  {
    badge: "30% WKO-Förderung",
    badgeColor: "bg-brand-blue/10 text-brand-blue",
    title: "KI-Strategie Umsetzung",
    subtitle: "Umsetzungs-Modul",
    price: "ab 4.200",
    originalPrice: "bis 6.000",
    features: ["Technische Implementierung", "CRM/ERP/Marketing Integration", "Workflow-Automatisierung", "Sales & Operations Setup"],
  },
];

const defaultUseCases = [
  "KI Chatbot", "Video Erstellung AI", "Automatisierungen mit AI",
  "AI Terminbuchungen", "Autom. E-Mail Bearbeitung", "Bilder Erstellung AI",
  "KI SEO Agent", "Support Voice Agent", "Social Media KI Agent",
  "Blogartikel AI", "AI Feedback Generator", "Voice Agents Leads",
  "Wissenstransfer mit AI",
];

const defaultRoadmap = [
  { step: "01", title: "Kostenloses Erstgespräch", desc: "Wir analysieren gemeinsam Ihre Prozesse und identifizieren KI-Potenziale in Ihrem Unternehmen." },
  { step: "02", title: "Strategieentwicklung", desc: "Individuelle KI-Roadmap inkl. Tool-Auswahl und Workflow-Optimierung. Bis zu 50% WKO-Förderung." },
  { step: "03", title: "Technische Umsetzung", desc: "Implementierung, Integration in bestehende Systeme und Automatisierung. Bis zu 30% WKO-Förderung." },
  { step: "04", title: "Schulung & Onboarding", desc: "Ihr Team wird eingeschult und kann die neuen KI-Tools eigenständig nutzen und weiterentwickeln." },
];

// SVG icons for benefits (can't be stored in Sanity)
const benefitIcons = [
  <svg key="0" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  <svg key="1" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="2" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="3" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  <svg key="4" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="5" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
];

export default async function Home() {
  const cms = await getHomepage().catch(() => null);

  const withoutKI = cms?.withoutKI?.length ? cms.withoutKI : defaultWithoutKI;
  const withKI = cms?.withKI?.length ? cms.withKI : defaultWithKI;
  const benefits = (cms?.benefits?.length ? cms.benefits : defaultBenefits).map((b: { title: string; desc: string }, i: number) => ({ ...b, icon: benefitIcons[i] || benefitIcons[0] }));
  const pillars = (cms?.pillars?.length ? cms.pillars : defaultPillars).map((p: { title: string; desc: string }, i: number) => ({ ...p, color: ["brand-cyan", "brand-cyan", "brand-blue", "brand-cyan", "brand-blue"][i] || "brand-cyan" }));
  const packages = (cms?.packages?.length ? cms.packages : defaultPackages).map((pkg: { badge?: string; title: string; subtitle?: string; price: string; originalPrice?: string; popular?: boolean; features?: string[] }, i: number) => ({
    ...pkg,
    badgeColor: ["bg-brand-cyan/10 text-brand-cyan", "bg-brand-blue/10 text-brand-blue", "bg-brand-blue/10 text-brand-blue"][i] || "bg-brand-cyan/10 text-brand-cyan",
  }));
  const useCases = cms?.useCases?.length ? cms.useCases : defaultUseCases;
  const roadmap = (cms?.roadmapSteps?.length ? cms.roadmapSteps : defaultRoadmap).map((r: { title: string; desc: string }, i: number) => ({ ...r, step: String(i + 1).padStart(2, "0") }));

  return (
    <>
      <Hero />

      {/* Comparison Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/50 to-brand-dark" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {cms?.comparisonHeading || "Warum jetzt auf KI setzen?"}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {cms?.comparisonDescription || "Der Unterschied zwischen stehenbleiben und wachsen."}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <FadeIn delay={100}>
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-red-400">Ohne KI-Strategie</h3>
                </div>
                <div className="space-y-4">
                  {withoutKI.map((item: Item) => (
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
            </FadeIn>

            <FadeIn delay={250}>
              <div className="glass rounded-2xl p-8 border-brand-cyan/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-brand-cyan">Mit Glockner AI</h3>
                </div>
                <div className="space-y-4">
                  {withKI.map((item: Item) => (
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
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="section-line" />

      {/* Benefits Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {cms?.benefitsHeading || <>Ihr Vorteil durch{" "}<span className="gradient-text">Glockner AI</span></>}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {cms?.benefitsDescription || "Messbare Ergebnisse statt leerer Versprechen."}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b: Benefit, i: number) => (
              <FadeIn key={b.title} delay={i * 100}>
                <div className="glass glass-hover rounded-2xl p-6 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-4">
                    {b.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Pillars */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unser Konzept macht Sie{" "}
              <span className="gradient-text">zukunftsfähig</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Fünf Säulen für eine ganzheitliche KI-Transformation.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p: Pillar, i: number) => (
              <FadeIn key={p.title} delay={i * 100} className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
                <div className="glass glass-hover rounded-2xl p-6 transition-all duration-300 h-full">
                  <div className={`w-10 h-10 rounded-lg bg-${p.color}/10 flex items-center justify-center mb-4`}>
                    <span className={`text-${p.color} font-bold text-sm`}>0{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {cms?.packagesHeading || "Unsere Beratungspakete"}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {cms?.packagesDescription || "Profitieren Sie von bis zu 80% WKO-Förderung auf unsere Beratungsleistungen."}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg: Pkg, i: number) => (
              <FadeIn key={pkg.title} delay={i * 150}>
                <div className={`glass rounded-2xl p-8 transition-all duration-300 relative h-full ${pkg.popular ? "border-brand-cyan/30 shadow-lg shadow-brand-cyan/5" : "glass-hover"}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-semibold px-4 py-1 rounded-full">Beliebt</span>
                    </div>
                  )}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${pkg.badgeColor} mb-4`}>{pkg.badge}</span>
                  <p className="text-slate-400 text-sm mb-1">{pkg.subtitle}</p>
                  <h3 className="text-xl font-bold text-white mb-3">{pkg.title}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">&euro;{pkg.price}</span>
                    <span className="text-slate-500 text-sm ml-2 line-through">&euro;{pkg.originalPrice}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features?.map((f: string) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <svg className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/kontakt" className={`block text-center py-3 rounded-xl font-medium transition-all ${pkg.popular ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white hover:shadow-lg hover:shadow-brand-cyan/20" : "border border-white/10 text-white hover:bg-white/5"}`}>
                    Jetzt anfragen
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Slider */}
      <section className="py-20 md:py-24 overflow-hidden">
        <FadeIn className="text-center max-w-3xl mx-auto mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            <span className="gradient-text">{cms?.useCasesHeading || "Use Cases AI"}</span><br />
            Strategisch erstellt und kombiniert,<br />
            werden Sie der Konkurrenz weit voraus sein.
          </h2>
        </FadeIn>
        <div className="use-case-slider">
          <div className="slider-row slider-row-1">
            {[...useCases, ...useCases].map((uc: string, i: number) => (
              <div key={`r1-${uc}-${i}`} className="slide-card">{uc}</div>
            ))}
          </div>
          <div className="slider-row slider-row-2">
            {[...useCases].reverse().concat([...useCases].reverse()).map((uc: string, i: number) => (
              <div key={`r2-${uc}-${i}`} className="slide-card">{uc}</div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-line" />

      {/* Roadmap Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Der Weg zum{" "}
              <span className="gradient-text">Erfolg</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              In vier Schritten zur KI-Transformation Ihres Unternehmens.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((r: Step, i: number) => (
              <FadeIn key={r.step} delay={i * 120}>
                <div className="relative">
                  {i < roadmap.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
                  )}
                  <div className="glass glass-hover rounded-2xl p-6 relative z-10 transition-all duration-300">
                    <span className="text-4xl font-extrabold text-white/5 absolute top-4 right-4">{r.step}</span>
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                      <span className="text-brand-blue font-bold text-sm">{r.step}</span>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">{r.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-brand-dark to-brand-cyan/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[150px]" />
        <FadeIn className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {cms?.ctaHeading || <>Bereit für die{" "}<span className="gradient-text">KI-Transformation?</span></>}
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            {cms?.ctaDescription || "Bis zu 80% WKO-Förderung möglich. Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch und entdecken Sie das KI-Potenzial Ihres Unternehmens."}
          </p>
          <Link
            href="/kontakt"
            className="cta-glow inline-block bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-10 py-4 rounded-xl font-semibold text-lg"
          >
            Kostenloses Erstgespräch vereinbaren
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
