import Link from "next/link";
import Hero from "@/components/Hero";

const services = [
  {
    icon: "🤖",
    title: "KI-Beratung",
    description:
      "Strategische Beratung zur Integration von KI in Ihre Geschäftsprozesse.",
  },
  {
    icon: "⚡",
    title: "Automatisierung",
    description:
      "Workflows automatisieren mit modernsten KI-Tools und Agentic AI.",
  },
  {
    icon: "📊",
    title: "Sales & Marketing",
    description:
      "KI-gestützte Lead-Generierung, Content-Erstellung und Vertriebsoptimierung.",
  },
  {
    icon: "🔒",
    title: "Datenschutz & Security",
    description:
      "DSGVO-konforme KI-Lösungen mit höchsten Sicherheitsstandards.",
  },
  {
    icon: "🎓",
    title: "KI-Schulung",
    description:
      "Workshops und Enablement für Ihr Team — vom Einstieg bis zum Power-User.",
  },
  {
    icon: "🏥",
    title: "Branchenlösungen",
    description:
      "Spezialisierte KI-Lösungen für Gewerbe, eCommerce, Ärzte & Gesundheit.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Von der Strategie bis zur Umsetzung — wir begleiten Sie auf dem
              Weg in die KI-Zukunft.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/leistungen"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              Alle Leistungen ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bereit für die KI-Transformation?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Lassen Sie sich kostenlos beraten. Wir zeigen Ihnen, wie KI Ihr
            Unternehmen voranbringt — mit bis zu 80% WKO-Förderung.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Jetzt Beratungsgespräch vereinbaren
          </Link>
        </div>
      </section>
    </>
  );
}
