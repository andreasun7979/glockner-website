import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] mt-auto bg-brand-dark relative">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 section-line" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center">
                <span className="text-white font-bold text-base">G</span>
              </div>
              <span className="font-semibold text-lg text-white tracking-tight" style={{ fontFamily: "'Montserrat', system-ui, sans-serif" }}>
                Glockner AI
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              KI-Beratung &amp; Automatisierung
              <br />
              für KMU in Österreich.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-300 mb-4 text-xs uppercase tracking-widest">Dienstleistungen</h3>
            <div className="space-y-2.5 text-sm">
              <Link href="/leistungen/ki-beratung" className="block text-slate-500 hover:text-brand-cyan transition-colors duration-200">
                KI-Beratung
              </Link>
              <Link href="/leistungen/ecommerce" className="block text-slate-500 hover:text-brand-cyan transition-colors duration-200">
                eCommerce
              </Link>
              <Link href="/leistungen/gewerbe" className="block text-slate-500 hover:text-brand-cyan transition-colors duration-200">
                Gewerbebetrieb
              </Link>
              <Link href="/leistungen/gesundheit" className="block text-slate-500 hover:text-brand-cyan transition-colors duration-200">
                Ärzte &amp; Gesundheit
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-300 mb-4 text-xs uppercase tracking-widest">Standorte</h3>
            <div className="text-sm space-y-4 text-slate-500">
              <div>
                <p className="text-slate-400 font-medium">Wien</p>
                <p>Blumauergasse 23/12, 1020 Wien</p>
              </div>
              <div>
                <p className="text-slate-400 font-medium">Kärnten</p>
                <p>Haraldweg 26/10, 9020 Klagenfurt</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-300 mb-4 text-xs uppercase tracking-widest">Kontakt</h3>
            <div className="text-sm space-y-2.5">
              <a href="mailto:support@glocknerdigital.at" className="block text-slate-500 hover:text-brand-cyan transition-colors duration-200">
                support@glocknerdigital.at
              </a>
              <a href="tel:+436506605000" className="block text-slate-500 hover:text-brand-cyan transition-colors duration-200">
                +43 650 660 5000
              </a>
              <a href="https://glockner.ai" className="block text-slate-500 hover:text-brand-cyan transition-colors duration-200">
                glockner.ai
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04] mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Glockner Digital. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-slate-400 transition-colors duration-200">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-slate-400 transition-colors duration-200">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
