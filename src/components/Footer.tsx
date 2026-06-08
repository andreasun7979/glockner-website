import Image from "next/image";
import Link from "next/link";
import ContactWidget from "@/components/ContactWidget";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] mt-auto bg-brand-dark relative">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 section-line" />

      {/* ============================================================
          PREMIUM CONTACT SECTION
          ============================================================ */}
      <section id="kontakt" className="relative overflow-hidden scroll-mt-20">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(201,168,106,0.10), transparent 55%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 md:pb-16">
          <header className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
            <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-5">
              Kontakt aufnehmen
            </div>
            <h2 className="font-serif-display font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] m-0">
              Schreiben Sie uns{" "}
              <em className="aurum-text not-italic font-medium">direkt</em>
              <span className="text-aurum">.</span>
            </h2>
            <p className="mt-5 font-serif-display italic text-slate-300 text-base md:text-lg">
              Persönliche Antwort innerhalb eines Werktages.
            </p>
          </header>

          <div className="grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-10 items-start">
            {/* Contact info card */}
            <aside className="relative rounded-2xl border border-white/10 bg-brand-card p-7 md:p-8 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-40"
              />

              <div className="font-mono text-[10.5px] tracking-[0.24em] uppercase text-aurum/85 font-semibold mb-6">
                Direkter Draht
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div>
                  <div className="font-mono text-[10px] tracking-[0.20em] uppercase text-slate-500 font-semibold mb-1.5">
                    E-Mail
                  </div>
                  <a
                    href="mailto:support@glocknerdigital.at"
                    className="font-serif-display text-white text-[17px] hover:text-aurum transition-colors"
                  >
                    support@glocknerdigital.at
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <div className="font-mono text-[10px] tracking-[0.20em] uppercase text-slate-500 font-semibold mb-1.5">
                    Telefon
                  </div>
                  <a
                    href="tel:+436506605000"
                    className="font-serif-display text-white text-[17px] hover:text-aurum transition-colors"
                  >
                    +43 650 660 5000
                  </a>
                </div>

                {/* Locations */}
                <div className="pt-5 mt-1 border-t border-white/10">
                  <div className="font-mono text-[10px] tracking-[0.20em] uppercase text-slate-500 font-semibold mb-3">
                    Standorte
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="font-serif-display text-white text-[15px] font-medium">
                        Wien
                      </div>
                      <div className="text-slate-400 text-[14px] leading-relaxed mt-0.5">
                        Blumauergasse 23/12
                        <br />
                        1020 Wien
                      </div>
                    </div>
                    <div>
                      <div className="font-serif-display text-white text-[15px] font-medium">
                        Klagenfurt
                      </div>
                      <div className="text-slate-400 text-[14px] leading-relaxed mt-0.5">
                        Sankt Ruprechter Straße 90
                        <br />
                        9020 Klagenfurt
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Contact form */}
            <div>
              <ContactWidget />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BRAND + LINKS
          ============================================================ */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            {/* Brand */}
            <div className="md:col-span-4">
              <Link
                href="/"
                className="inline-flex items-center mb-4"
                aria-label="Glockner.ai — Startseite"
              >
                <Image
                  src="/logo.webp"
                  alt="Glockner.ai"
                  width={480}
                  height={111}
                  className="h-9 w-auto"
                  sizes="160px"
                />
              </Link>
              <p className="text-sm text-slate-500 leading-relaxed">
                KI-Beratung &amp; Implementierung
                <br />
                für KMUs in Österreich.
              </p>
            </div>

            {/* Glockner AI services */}
            <div className="md:col-span-4">
              <h3 className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-aurum/85 font-semibold mb-4">
                Glockner AI
              </h3>
              <div className="space-y-2.5 text-sm">
                <Link
                  href="/ki-marketing-vertrieb"
                  className="block text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Money Making AI
                </Link>
                <Link
                  href="/ki-automatisierung"
                  className="block text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Kosten-Killing AI
                </Link>
                <Link
                  href="/ki-schulungen"
                  className="block text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Training
                </Link>
              </div>
            </div>

            {/* Glockner Digital services */}
            <div className="md:col-span-4">
              <h3 className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-aurum/85 font-semibold mb-4">
                Glockner Digital
              </h3>
              <div className="space-y-2.5 text-sm">
                <Link
                  href="/digital/ecommerce"
                  className="block text-slate-400 hover:text-white transition-colors duration-200"
                >
                  E-Commerce
                </Link>
                <Link
                  href="/digital/gewerbe"
                  className="block text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Gewerbebetrieb
                </Link>
                <Link
                  href="/digital/gesundheit"
                  className="block text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Ärzte, Kliniken &amp; Apotheken
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          LEGAL ROW
          ============================================================ */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} Glockner Digital. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="hover:text-slate-400 transition-colors duration-200"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-slate-400 transition-colors duration-200"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
