import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Layered background */}
      <div className="absolute inset-0 bg-brand-dark" />
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-[15%] w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-1/4 right-[20%] w-[400px] h-[400px] bg-brand-cyan/15 rounded-full blur-[140px]" />
      <div className="absolute top-[60%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] bg-brand-orange/5 rounded-full blur-[120px]" />

      {/* Decorative top-right line accent */}
      <div className="absolute top-0 right-0 w-px h-64 bg-gradient-to-b from-brand-cyan/20 to-transparent" />
      <div className="absolute top-0 right-0 w-64 h-px bg-gradient-to-l from-brand-cyan/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass text-sm text-brand-cyan mb-10 border border-brand-cyan/10">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            KI-Beratung &amp; Implementierung
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] mb-7 tracking-tight text-white">
            Die Ära der KI ist da.
            <br />
            <span className="gradient-text">
              Wir machen Ihr Unternehmen zukunftsfähig.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
            Schluss mit veralteten Prozessen. Nutzen Sie die technologische
            Revolution und erleben Sie, wie Qualität, Produktivität und
            Umsatz in Ihrem Unternehmen deutlich steigen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakt"
              className="cta-glow bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-8 py-4 rounded-xl font-semibold text-center"
            >
              Jetzt informieren
            </Link>
            <Link
              href="/leistungen"
              className="border border-white/10 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/5 hover:border-white/20 transition-all text-center"
            >
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-line" />
    </section>
  );
}
