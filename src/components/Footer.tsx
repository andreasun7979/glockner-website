import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-semibold text-lg text-white">
                Glockner AI
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              KI-Beratung &amp; Automatisierung für KMU in Österreich.
              <br />
              Bis zu 80% WKO-Förderung möglich.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Standorte</h3>
            <div className="text-sm space-y-2">
              <p>
                <strong className="text-gray-100">Wien:</strong>
                <br />
                Blumauergasse 23/12, 1020 Wien
              </p>
              <p>
                <strong className="text-gray-100">Kärnten:</strong>
                <br />
                Haraldweg 26/10, 9020 Klagenfurt
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Kontakt</h3>
            <div className="text-sm space-y-2">
              <p>
                <a
                  href="mailto:support@glocknerdigital.at"
                  className="hover:text-blue-400 transition-colors"
                >
                  support@glocknerdigital.at
                </a>
              </p>
              <p>
                <a
                  href="tel:+436506605000"
                  className="hover:text-blue-400 transition-colors"
                >
                  +43 650 660 5000
                </a>
              </p>
              <p>
                <a
                  href="https://glockner.ai"
                  className="hover:text-blue-400 transition-colors"
                >
                  glockner.ai
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Glockner Digital. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-blue-400 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-blue-400 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
