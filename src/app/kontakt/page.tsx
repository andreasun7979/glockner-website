import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie Glockner AI für eine kostenlose KI-Beratung.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kontakt</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Lassen Sie sich kostenlos beraten. Wir melden uns innerhalb von 24
            Stunden bei Ihnen.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Direkter Kontakt
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>E-Mail:</strong>
                    <br />
                    <a
                      href="mailto:support@glocknerdigital.at"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      support@glocknerdigital.at
                    </a>
                  </p>
                  <p>
                    <strong>Telefon:</strong>
                    <br />
                    <a
                      href="tel:+436506605000"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      +43 650 660 5000
                    </a>
                  </p>
                </div>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Standorte</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Wien:</strong>
                    <br />
                    Blumauergasse 23/12, 1020 Wien
                  </p>
                  <p>
                    <strong>Kärnten:</strong>
                    <br />
                    Haraldweg 26/10, 9020 Klagenfurt
                  </p>
                </div>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Bis zu 80% Förderung
                </h3>
                <p className="text-sm text-blue-700">
                  Über die WKO können bis zu 80% der Beratungskosten gefördert
                  werden. Wir unterstützen Sie beim Antrag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
