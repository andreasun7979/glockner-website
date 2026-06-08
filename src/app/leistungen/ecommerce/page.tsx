import type { Metadata } from "next";
import Link from "next/link";
import { getServicePageById } from "../../../../sanity/lib/queries";

export const metadata: Metadata = {
  // Ältere Service-Seite, durch /digital/ecommerce abgelöst — aus dem Index halten (Duplicate Content).
  robots: { index: false, follow: true },
  title: "Beratung eCommerce",
  description:
    "eCommerce Beratung & Webshop Optimierung. Bis zu 7.400 EUR WKO-Förderung. Shopify, Amazon & mehr.",
};

const testimonials = [
  { quote: "Ein besonderes Dankeschön für deine wertvolle und geschätzte Unterstützung bei der Strategie-Ausarbeitung.", name: "Katharina", role: "Steuerberaterin, Klagenfurt" },
  { quote: "Professionell organisierter Workshop, tolle Location, Berater hat viel Zeit aufgewandt, immer erreichbar.", name: "Dana", role: "Social Media Growth Company, Wien" },
  { quote: "Der Berater war sehr engagiert und ging auf meine Anliegen ein. Die Informationen waren für mich von hohem Nutzen.", name: "Kirsten", role: "Webshop-Betreiberin, Wien" },
];

const stats = [
  { value: "53", label: "Länder done business with" },
  { value: "8-stellig", label: "Umsatz durch eCommerce" },
  { value: "50.241", label: "Artikel gelistet" },
];

const topics = [
  { title: "Verkaufen über Webshop & Marktplätze", desc: "Verkaufen Sie dort, wo Ihre Kunden sind: Webshop, Amazon, eBay, Galaxus und weitere Marktplätze." },
  { title: "Social Media Reels für Sales & Branding", desc: "Mit professionellen, kurzweiligen Videos erreichen Sie Ihre Zielgruppe direkt und steigern Reichweite und Interaktion." },
  { title: "Digitalmarketing", desc: "Social Media, SEO, SEA und E-Mail-Marketing — personalisierte Werbung und datenbasierte Entscheidungen für mehr Umsatz." },
  { title: "E-Commerce Infrastruktur", desc: "Welches Shopsystem, Tools und Software benötige ich für ein erfolgreiches E-Commerce Unternehmen?" },
  { title: "Internationalisierungsstrategie", desc: "Neue Märkte erschließen und den Umsatz steigern — mit der richtigen Anpassung an lokale Gegebenheiten." },
];

const packages = [
  {
    badge: "80% WKO-Förderung",
    title: "Status- & Potentialanalyse",
    subtitle: "Ihr Webshop im Check",
    price: "100",
    originalPrice: "500",
    features: [
      "Optimierungspotenziale Ihres Webshops identifiziert",
      "Dokument mit Handlungsempfehlungen",
      "2 Stunden persönliches Beratungsgespräch",
      "Rechtstexte, SEO & technische Performance Check",
      "Komplette Förderabwicklung inklusive",
    ],
  },
  {
    badge: "50% WKO-Förderung",
    title: "Selling Online — Strategie Beratung",
    subtitle: "Webshop starten & Umsatz steigern",
    price: "1.000",
    originalPrice: "2.000",
    popular: true,
    features: [
      "8h Intensiv-Workshop \u201ESelling Online\u201C",
      "Strategie-Blueprint für sofortige Umsetzung",
      "Best-of-AI-Tools für eCommerce",
      "2h Social Media Training — Reels, die wirken",
      "1 Monat WhatsApp Support",
      "Full-Service Förderabwicklung",
    ],
  },
  {
    badge: "30% WKO-Förderung",
    title: "Strategie Umsetzung",
    subtitle: "Bis zu 6.000 EUR Förderung",
    price: "ab 4.200",
    originalPrice: "bis 6.000",
    features: [
      "Umsetzung mit uns oder Ihrer Agentur",
      "Webshop-Erstellung & Optimierung",
      "Marktplatz-Anbindung",
      "Komplette Förderabwicklung inklusive",
    ],
  },
];

const roadmap = [
  { step: "01", title: "Kostenloses Beratungsgespräch", desc: "Wir zeigen Ihnen, wie Sie Förderungen von bis zu 7.400 EUR für Ihre digitale Transformation sichern." },
  { step: "02", title: "Check-Up: Online-Fitness", desc: "Wir prüfen Ihren Online-Auftritt auf Herz und Nieren. 80% WKO-gefördert." },
  { step: "03", title: "Online Strategie Beratung", desc: "Nachhaltige Online-Strategie für Neukundenanfragen und Verkäufe. 50% WKO-gefördert." },
  { step: "04", title: "Umsetzung", desc: "Gezielte Umsetzung Ihrer Strategie. 30% WKO-Förderung — starten Sie direkt durch." },
];

export default async function EcommercePage() {
  const cms = await getServicePageById("service-ecommerce").catch(() => null);

  const heroData = {
    badge: cms?.heroBadge || "Beratung eCommerce",
    heading: cms?.heroHeading || "Erfolgreichen Webshop starten und",
    accent: cms?.heroHeadingAccent || "Umsätze pushen!",
    desc: cms?.heroDescription || "Erfahren Sie, wie Sie ein erfolgreiches Online-Business entwickeln und bis zu 7.400 EUR WKO-Förderung sichern!",
    cta: cms?.heroCtaText || "Jetzt kostenloses Beratungsgespräch sichern",
  };
  const ctaData = {
    heading: cms?.ctaHeading || "Bereit für Ihren",
    headingAccent: "Online-Erfolg?",
    desc: cms?.ctaDescription || "Sichern Sie sich bis zu 7.400 EUR WKO-Förderung für Ihre digitale Transformation.",
    button: cms?.ctaButtonText || "Kostenloses Beratungsgespräch buchen",
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[128px]" />
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

      {/* Testimonials */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-brand-cyan" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-slate-300 text-sm mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-white text-sm font-medium">{t.name}</p>
                <p className="text-slate-500 text-xs">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Stats */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">15 Jahre eCommerce Erfahrung</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Wir haben selbst ein Online-Unternehmen aufgebaut, das mit Hersteller- und
                Eigenmarken jährlich Millionen umsetzte — über Webshop sowie Plattformen wie
                Amazon und eBay.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Heute teilen wir unser Wissen mit Unternehmen, Freiberuflern, Handwerksbetrieben
                und Webshopbetreibern. Als WKO-zertifizierte eCommerce Consultants haben Sie
                Anspruch auf die KMU DIGITAL Förderung.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4 text-center">
                  <p className="text-2xl md:text-3xl font-bold gradient-text mb-1">{s.value}</p>
                  <p className="text-slate-400 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Beratungspakete</h2>
            <p className="text-slate-400">Bis zu 80% staatliche Förderung erhalten.</p>
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

      {/* Popular Topics */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-slate-900/30 to-brand-dark" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Beliebte <span className="gradient-text">Themen</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t, i) => (
              <div key={t.title} className={`glass glass-hover rounded-2xl p-6 transition-all duration-300 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                <h3 className="text-base font-semibold text-white mb-2">{t.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Ihre Roadmap zu mehr <span className="gradient-text">Kunden und Umsatz</span>
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
