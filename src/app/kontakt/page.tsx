import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt & kostenloses KI-Erstgespräch",
  description:
    "Vereinbaren Sie Ihr kostenloses KI-Erstgespräch mit Glockner AI. KI-Beratung & Implementierung für KMU in Österreich — mit 30 % Glockner-AI-Förderung.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Kontakt & kostenloses KI-Erstgespräch | Glockner AI",
    description:
      "Vereinbaren Sie Ihr kostenloses KI-Erstgespräch mit Glockner AI. KI-Beratung & Implementierung für KMU in Österreich — mit 30 % Glockner-AI-Förderung.",
    url: "/kontakt",
  },
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
            Stunden bei Ihnen — Formular und direkter Draht finden Sie gleich
            hier unten.
          </p>
        </div>
      </section>
      {/* Das Kontaktformular + Direkter Draht + Standorte liefert die globale
          Footer-Sektion (id="kontakt"). Früher renderte diese Seite zusätzlich
          ein eigenes Formular → doppelte Formulare/Standorte. Bewusst entfernt. */}
    </>
  );
}
