import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum & Offenlegung gemäß §§ 24, 25 MedienG der Glockner Digital — eCommerce Consulting Mag. Andreas Unterkofler.",
};

export default function ImpressumPage() {
  return (
    <article className="relative min-h-screen bg-brand-dark">
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-50"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
        <header className="mb-12">
          <div className="font-mono text-[10.5px] tracking-[0.32em] uppercase text-aurum/85 font-semibold mb-4">
            Rechtliches
          </div>
          <h1 className="font-serif-display font-medium text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] m-0">
            Impressum<span className="text-aurum">.</span>
          </h1>
          <div className="aurum-rule mt-8" />
        </header>

        <div className="prose-legal space-y-10 text-slate-300 leading-relaxed text-[15px]">
          <Section title="Medieninhaber, Herausgeber & Verantwortlich für den Inhalt">
            <p className="text-white font-medium">
              Glockner Digital — eCommerce Consulting<br />
              Mag. Andreas Unterkofler
            </p>
            <p>
              Blumauergasse 23/12<br />
              1020 Wien<br />
              Österreich
            </p>
          </Section>

          <Section title="Kontakt">
            <ul className="list-none p-0 m-0 space-y-1.5">
              <li>
                E-Mail:{" "}
                <a
                  href="mailto:support@glocknerdigital.at"
                  className="text-aurum hover:text-aurum-soft transition-colors"
                >
                  support@glocknerdigital.at
                </a>
              </li>
              <li>
                Telefon:{" "}
                <a
                  href="tel:+436506605000"
                  className="text-aurum hover:text-aurum-soft transition-colors"
                >
                  +43 650 660 5000
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a
                  href="tel:+436763695642"
                  className="text-aurum hover:text-aurum-soft transition-colors"
                >
                  +43 676 369 5642
                </a>
              </li>
            </ul>
          </Section>

          <Section title="Unternehmensgegenstand">
            <p>
              Unternehmensberatung mit Schwerpunkt KI-Beratung, eCommerce-
              Consulting sowie digitale Vermarktung für Klein- und
              Mittelbetriebe in Österreich.
            </p>
          </Section>

          <Section title="Rechtsform & Mitgliedschaften">
            <p>Rechtsform: Einzelunternehmen</p>
            <p>Mitglied der Wirtschaftskammer Österreich (WKO)</p>
          </Section>

          <Section title="Anwendbares Recht & Gerichtsstand">
            <p>
              Es gilt österreichisches Recht unter Ausschluss aller Verweisungs-
              normen. Erfüllungsort und ausschließlicher Gerichtsstand für alle
              Streitigkeiten ist Wien.
            </p>
          </Section>

          <Section title="Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO">
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-
              Streitbeilegung (OS) bereit, die Sie hier finden:{" "}
              <a
                href="https://ec.europa.eu/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aurum hover:text-aurum-soft transition-colors"
              >
                https://ec.europa.eu/odr
              </a>
              .
            </p>
            <p>
              Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungs-
              verfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </Section>

          <Section title="Haftung für Inhalte dieser Website">
            <p>
              Wir entwickeln die Inhalte dieser Website mit größter Sorgfalt und
              bemühen uns um die Bereitstellung zutreffender und aktueller
              Informationen. Für Schäden, die im Zusammenhang mit der Nutzung
              der Informationen auf dieser Website entstehen, übernehmen wir
              keine Haftung, sofern diese nicht auf grob fahrlässigem oder
              vorsätzlichem Verhalten beruhen.
            </p>
          </Section>

          <Section title="Haftung für Links auf dieser Website">
            <p>
              Unsere Website enthält Links zu anderen Websites, für deren
              Inhalt wir nicht verantwortlich sind. Sollten Ihnen rechtswidrige
              Links auf unserer Website auffallen, ersuchen wir um Hinweis;
              diese werden umgehend entfernt.
            </p>
          </Section>

          <Section title="Urheberrechtshinweis">
            <p>
              Alle Inhalte dieser Website (Texte, Bilder, Grafiken, Layout)
              unterliegen, soweit nicht anders gekennzeichnet, dem
              österreichischen Urheberrecht. Eine Verwertung außerhalb der
              Grenzen des Urheberrechtsgesetzes bedarf der vorherigen
              schriftlichen Zustimmung.
            </p>
          </Section>
        </div>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif-display font-medium text-white text-xl md:text-2xl tracking-[-0.01em] mb-3">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
