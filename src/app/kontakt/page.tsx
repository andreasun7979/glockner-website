import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie Glockner AI für eine kostenlose KI-Beratung.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 to-brand-dark" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-brand-cyan mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            Kontakt
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
                     >
            Sprechen Sie mit uns
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Lassen Sie sich kostenlos beraten. Wir melden uns innerhalb von 24
            Stunden bei Ihnen.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-white mb-6">Nachricht senden</h2>
                <ContactForm />
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-4">Direkter Kontakt</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-slate-400 text-xs mb-0.5">E-Mail</p>
                      <a href="mailto:support@glocknerdigital.at" className="text-brand-cyan hover:text-brand-cyan/80 transition-colors">
                        support@glocknerdigital.at
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-slate-400 text-xs mb-0.5">Telefon</p>
                      <a href="tel:+436506605000" className="text-brand-cyan hover:text-brand-cyan/80 transition-colors">
                        +43 650 660 5000
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-4">Standorte</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">Wien</p>
                      <p className="text-slate-400">Blumauergasse 23/12, 1020 Wien</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">Kärnten</p>
                      <p className="text-slate-400">Haraldweg 26/10, 9020 Klagenfurt</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-6 bg-gradient-to-br from-brand-cyan/10 to-brand-cyan/5 border border-brand-cyan/10">
                <h3 className="font-semibold text-brand-cyan mb-2">
                  Bis zu 80% Förderung
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
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
