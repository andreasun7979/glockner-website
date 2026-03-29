import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "KI-Beratung, Automatisierung, Sales & Marketing, Datenschutz, Schulung und Branchenlösungen.",
};

const services = [
  {
    icon: "🤖",
    title: "KI-Beratung",
    description:
      "Wir analysieren Ihre Geschäftsprozesse und identifizieren Potenziale für KI-Integration. Von der ersten Idee bis zur fertigen Strategie begleiten wir Sie auf dem Weg in die KI-Zukunft.",
    features: [
      "Ist-Analyse & Potenzialidentifikation",
      "KI-Strategie & Roadmap",
      "Tool-Auswahl & Implementierungsplan",
      "ROI-Berechnung",
    ],
  },
  {
    icon: "⚡",
    title: "Automatisierung",
    description:
      "Repetitive Aufgaben automatisieren, Workflows optimieren und Agentic AI einsetzen — für mehr Effizienz im Tagesgeschäft.",
    features: [
      "Workflow-Automatisierung",
      "Agentic AI Systeme",
      "API-Integrationen",
      "Prozessoptimierung",
    ],
  },
  {
    icon: "📊",
    title: "KI im Sales & Marketing",
    description:
      "Lead-Generierung, Content-Erstellung und Vertriebsoptimierung mit KI — messbar mehr Ergebnisse bei weniger Aufwand.",
    features: [
      "KI-gestützte Lead-Generierung",
      "Automatisierte Content-Erstellung",
      "Personalisierung & Segmentierung",
      "Performance-Analyse",
    ],
  },
  {
    icon: "🔒",
    title: "Datenschutz & Security",
    description:
      "DSGVO-konforme KI-Lösungen mit höchsten Sicherheitsstandards. Wir sorgen dafür, dass Ihre Daten sicher bleiben.",
    features: [
      "DSGVO-konforme KI-Implementierung",
      "Datenschutz-Audits",
      "Security-Konzepte",
      "Mitarbeiter-Schulung",
    ],
  },
  {
    icon: "🎓",
    title: "KI-Schulung & Enablement",
    description:
      "Ihr Team fit für KI machen — mit praxisnahen Workshops und Enablement-Programmen.",
    features: [
      "KI-Grundlagen Workshops",
      "Tool-spezifische Trainings",
      "Prompt Engineering",
      "Individuelles Coaching",
    ],
  },
  {
    icon: "🏥",
    title: "Branchenlösungen",
    description:
      "Spezialisierte KI-Lösungen für Gewerbe, eCommerce, Ärzte und Gesundheitswesen.",
    features: [
      "eCommerce-Optimierung",
      "Gewerbe & Handwerk",
      "Ärzte & Gesundheit",
      "Individuelle Branchenlösungen",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Unsere Leistungen
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Ganzheitliche KI-Beratung und Umsetzung — maßgeschneidert für Ihr
            Unternehmen.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl ${
                i % 2 === 0 ? "bg-white border border-gray-200" : "bg-gray-50"
              }`}
            >
              <span className="text-5xl shrink-0">{service.icon}</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span className="text-blue-600">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interesse geweckt?</h2>
          <p className="text-blue-100 mb-8">
            Bis zu 80% WKO-Förderung möglich. Lassen Sie sich jetzt beraten.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Kostenlose Beratung anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
