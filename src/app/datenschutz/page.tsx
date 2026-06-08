import type { Metadata } from "next";
import CookieDeclaration from "@/components/CookieDeclaration";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung gemäß DSGVO der Glockner Digital — eCommerce Consulting Mag. Andreas Unterkofler.",
};

export default function DatenschutzPage() {
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
            Datenschutz<span className="text-aurum">.</span>
          </h1>
          <div className="aurum-rule mt-8" />
          <p className="mt-6 text-slate-400 text-sm italic">
            Stand: Juni 2026
          </p>
        </header>

        <div className="space-y-12 text-slate-300 leading-relaxed text-[15px]">
          <Section title="1. Einleitung & Verantwortlicher">
            <p>
              Mit diesen Datenschutzhinweisen informieren wir Sie darüber, welche
              personenbezogenen Daten wir bei einem Besuch unserer Website,
              einer Kontaktaufnahme oder einer Buchung verarbeiten, auf welcher
              Rechtsgrundlage dies geschieht und welche Rechte Ihnen daraus
              zustehen.
            </p>
            <p className="text-white font-medium pt-2">Verantwortlicher i.S.d. DSGVO:</p>
            <p>
              Glockner Digital — eCommerce Consulting<br />
              Mag. Andreas Unterkofler<br />
              Blumauergasse 23/12<br />
              1020 Wien<br />
              Österreich
            </p>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:support@glocknerdigital.at"
                className="text-aurum hover:text-aurum-soft transition-colors"
              >
                support@glocknerdigital.at
              </a>
              <br />
              Telefon:{" "}
              <a
                href="tel:+436506605000"
                className="text-aurum hover:text-aurum-soft transition-colors"
              >
                +43 650 660 5000
              </a>
            </p>
          </Section>

          <Section title="2. Datenerfassung beim Besuch dieser Website">
            <p>
              Beim rein informatorischen Aufruf unserer Website erheben wir
              technisch notwendige Server-Logfile-Daten, die Ihr Browser
              automatisch übermittelt:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>aufgerufene Seite</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>übertragene Datenmenge</li>
              <li>Referrer</li>
              <li>Browser-Typ und -Version</li>
              <li>Betriebssystem</li>
              <li>IP-Adresse (gekürzt)</li>
            </ul>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an Stabilität und Sicherheit der Website). Die Daten werden nach
              maximal 30 Tagen gelöscht, sofern keine sicherheitsrelevanten
              Ereignisse eine längere Speicherung erfordern.
            </p>
            <p>
              Die Übertragung erfolgt verschlüsselt (TLS), erkennbar an{" "}
              <code className="text-aurum">https://</code> in der Adresszeile.
            </p>
          </Section>

          <Section title="3. Hosting (Vercel)">
            <p>
              Unsere Website wird bei Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, USA gehostet. Vercel verarbeitet in unserem
              Auftrag die unter Punkt 2 genannten technischen Daten. Es besteht
              ein Auftragsverarbeitungsvertrag (Data Processing Agreement) gemäß
              Art. 28 DSGVO. Vercel ist nach dem EU-US Data Privacy Framework
              zertifiziert.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an einer leistungsfähigen, sicheren Bereitstellung der Website).
            </p>
          </Section>

          <Section title="4. Kontaktaufnahme & Lead-Erfassung">
            <p>
              Über das Kontaktformular und das Buchungs-Widget für ein
              kostenloses Klarheitsgespräch verarbeiten wir die von Ihnen
              eingegebenen Daten (Name, E-Mail-Adresse, optional Telefon,
              Nachricht/Anliegen, gewünschter Termin) zum Zweck der
              Anfragebearbeitung und Terminbestätigung.
            </p>
            <p>
              <span className="text-white font-medium">Lead-Speicherung:</span>{" "}
              Die übermittelten Daten werden in unserer Lead-Datenbank bei der
              Supabase Inc., 970 Toa Payoh North #07-04, Singapore 318992,
              gespeichert. Es besteht ein Auftragsverarbeitungsvertrag.
              Speicherung der Server-Region: EU (Frankfurt).
            </p>
            <p>
              <span className="text-white font-medium">Transaktions-E-Mail:</span>{" "}
              Bestätigungen und interne Benachrichtigungen versenden wir über
              Resend, Inc., 2261 Market Street #5039, San Francisco, CA 94114,
              USA. Es besteht ein Auftragsverarbeitungsvertrag; der Anbieter ist
              EU-US-DPF-zertifiziert.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Durchführung
              vorvertraglicher Maßnahmen auf Ihre Anfrage) sowie Art. 6 Abs. 1
              lit. f DSGVO (berechtigtes Interesse an einer effizienten
              Bearbeitung Ihrer Anfrage).
            </p>
            <p>
              Speicherdauer: bis zum endgültigen Abschluss Ihrer Anfrage,
              längstens jedoch bis zum Ablauf gesetzlicher Aufbewahrungs-
              pflichten (in der Regel 7 Jahre nach BAO).
            </p>
          </Section>

          <Section title="5. Cookies, Einwilligung & Webanalyse">
            <p>
              Beim ersten Besuch erscheint ein Cookie-Banner. Das
              Consent-Management erfolgt über <span className="text-white font-medium">Cookiebot</span>{" "}
              (Cybot A/S, Havnegade 39, 1058 Kopenhagen, Dänemark). Technisch
              notwendige Cookies sowie die Speicherung Ihrer Cookie-Entscheidung
              selbst sind einwilligungsfrei (Art. 6 Abs. 1 lit. f DSGVO bzw.
              § 165 Abs. 3 TKG 2021).
            </p>
            <p>
              <span className="text-white font-medium">Google Analytics 4:</span>{" "}
              Nur wenn Sie im Banner aktiv „Akzeptieren" wählen, laden wir Google
              Analytics 4 — einen Dienst der Google Ireland Limited, Gordon
              House, Barrow Street, Dublin 4, Irland (Mess-ID{" "}
              <code className="text-aurum">G-LJ8G8DE1F0</code>). GA4 setzt Cookies
              (u. a. <code className="text-aurum">_ga</code>,{" "}
              <code className="text-aurum">_ga_*</code>) und wertet die Nutzung
              pseudonym aus (aufgerufene Seiten, Verweildauer, ungefähre Herkunft,
              Gerätetyp); IP-Adressen werden dabei gekürzt/pseudonymisiert
              verarbeitet. <span className="text-white font-medium">Vor</span> einer
              Einwilligung wird kein Analyse-Skript geladen (Cookiebot
              Auto-Blocking).
            </p>
            <p>
              Rechtsgrundlage: Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO),
              die Sie jederzeit mit Wirkung für die Zukunft widerrufen können —
              über das Cookiebot-Symbol bzw. den Link „Cookie-Einstellungen" oder
              durch Löschen der Cookies in Ihrem Browser. Google ist nach dem
              EU-US Data Privacy Framework zertifiziert; eine Übermittlung in die
              USA kann stattfinden. Speicherdauer der GA-Cookies: bis zu 2 Jahre.
              Mit Google und Cookiebot bestehen Auftragsverarbeitungsverträge.
            </p>
            <p>
              Browser-seitig können Sie die Speicherung von Cookies generell
              unterbinden; einzelne Funktionen der Website können dann
              eingeschränkt sein. Eine Übersicht der aktuell gesetzten Cookies:
            </p>
            <CookieDeclaration />
          </Section>

          <Section title="6. Content-Management (Sanity)">
            <p>
              Die redaktionellen Inhalte dieser Website werden mit Sanity
              (Sanity.io, c/o Sanity AS, Henrik Ibsens gate 100, 0255 Oslo,
              Norwegen) verwaltet. Sanity verarbeitet beim normalen Besuch
              unserer Website keine personenbezogenen Daten von Ihnen — die
              Inhalte werden serverseitig in unsere Website integriert
              ausgeliefert.
            </p>
          </Section>

          <Section title="7. Empfänger / Weitergabe an Dritte">
            <p>
              Eine Weitergabe Ihrer personenbezogenen Daten erfolgt
              ausschließlich an die genannten Auftragsverarbeiter (Vercel,
              Supabase, Resend, Cookiebot/Cybot sowie — nach Ihrer Einwilligung —
              Google) sowie an Behörden, soweit wir dazu gesetzlich verpflichtet
              sind. Ein Verkauf Ihrer Daten findet nicht statt.
            </p>
          </Section>

          <Section title="8. Übermittlung in Drittländer">
            <p>
              Soweit Daten in Länder außerhalb des EWR übermittelt werden (USA),
              geschieht dies auf Basis von Angemessenheitsbeschlüssen der
              Europäischen Kommission (EU-US Data Privacy Framework) bzw. auf
              Basis von Standardvertragsklauseln nach Art. 46 Abs. 2 lit. c
              DSGVO.
            </p>
          </Section>

          <Section title="9. Ihre Rechte als betroffene Person">
            <p>Ihnen stehen folgende Rechte zu:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
              <li>
                Widerspruch gegen Verarbeitungen auf Grundlage berechtigter
                Interessen (Art. 21 DSGVO)
              </li>
              <li>
                Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO) — in
                Österreich: Österreichische Datenschutzbehörde, Barichgasse 40
                – 42, 1030 Wien,{" "}
                <a
                  href="https://www.dsb.gv.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aurum hover:text-aurum-soft transition-colors"
                >
                  www.dsb.gv.at
                </a>
              </li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte formlos per E-Mail
              an{" "}
              <a
                href="mailto:support@glocknerdigital.at"
                className="text-aurum hover:text-aurum-soft transition-colors"
              >
                support@glocknerdigital.at
              </a>
              .
            </p>
          </Section>

          <Section title="10. Speicherdauer">
            <p>
              Wir speichern personenbezogene Daten nur so lange, wie es für den
              jeweiligen Zweck erforderlich ist bzw. eine gesetzliche
              Aufbewahrungsfrist (z. B. § 132 BAO: 7 Jahre für steuerlich
              relevante Unterlagen) besteht. Danach werden die Daten gelöscht
              oder anonymisiert.
            </p>
          </Section>

          <Section title="11. Änderungen dieser Datenschutzerklärung">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn
              sich die Rechtslage, unsere Dienste oder die Datenverarbeitung
              ändern. Die jeweils aktuelle Fassung finden Sie auf dieser Seite.
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
      <h2 className="font-serif-display font-medium text-white text-xl md:text-2xl tracking-[-0.01em] mb-4">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
