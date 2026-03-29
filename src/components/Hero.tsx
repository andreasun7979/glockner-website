import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-blue-400 font-medium mb-4">
            KI-Beratung &amp; Automatisierung
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Die Ära der Agentic AI ist da.{" "}
            <span className="text-blue-400">
              Wir machen Ihr Unternehmen zukunftsfähig.
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Glockner AI unterstützt KMU in Österreich bei der Integration
            von künstlicher Intelligenz — von der Strategie bis zur
            Umsetzung. Bis zu 80% WKO-Förderung möglich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakt"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
            >
              Kostenlose Beratung anfragen
            </Link>
            <Link
              href="/leistungen"
              className="border border-gray-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors text-center"
            >
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
