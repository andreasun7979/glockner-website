import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Glockner AI — KI-Beratung & Automatisierung für KMU in Österreich. Standorte in Wien und Klagenfurt.",
};

const locations = [
  {
    city: "Wien",
    address: "Blumauergasse 23/12, 1020 Wien",
  },
  {
    city: "Kärnten",
    address: "Haraldweg 26/10, 9020 Klagenfurt",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Über uns</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Wir machen KMU in Österreich fit für die KI-Zukunft.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              <strong className="text-gray-900">Glockner AI</strong> (Glockner
              Digital) ist spezialisiert auf KI-Beratung und Automatisierung für
              kleine und mittlere Unternehmen in Österreich.
            </p>
            <p>
              Die Ära der Agentic AI ist da — und wir helfen Ihrem Unternehmen,
              diese Chance zu nutzen. Von der strategischen Beratung über die
              Tool-Auswahl bis zur konkreten Umsetzung und Schulung Ihrer
              Mitarbeiter.
            </p>
            <p>
              Unser Schwerpunkt liegt auf praxisnahen Lösungen, die sofort
              Mehrwert bringen: in Sales, Marketing, Organisation und darüber
              hinaus. Dabei legen wir höchsten Wert auf Datenschutz und
              Sicherheit.
            </p>
            <p>
              Dank der WKO-Förderung können bis zu{" "}
              <strong className="text-blue-600">80% der Kosten</strong> für
              KI-Beratung gefördert werden — wir unterstützen Sie auch beim
              Förderantrag.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section - Placeholder for Sanity data */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Unser Team</h2>
          <p className="text-gray-600 mb-8">
            Team-Mitglieder werden über das CMS (Sanity Studio) verwaltet.
          </p>
          {/* TODO: Fetch from Sanity when connected */}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Unsere Standorte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="p-6 rounded-xl border border-gray-200 bg-white"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {loc.city}
                </h3>
                <p className="text-gray-600">{loc.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
