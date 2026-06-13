import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog: KI, Automatisierung & digitale Transformation",
  description:
    "Einblicke und Neuigkeiten rund um Künstliche Intelligenz, Automatisierung und digitale Transformation für KMU in Österreich.",
  alternates: { canonical: "/blog" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Blog: KI, Automatisierung & digitale Transformation | Glockner AI",
    description:
      "Einblicke und Neuigkeiten rund um Künstliche Intelligenz, Automatisierung und digitale Transformation für KMU in Österreich.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 to-brand-dark" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-brand-cyan mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            Blog
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
                     >
            Insights &amp; News
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Neuigkeiten und Einblicke rund um KI, Automatisierung und digitale
            Transformation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <p className="text-slate-300 text-lg mb-2">
              Hier erscheinen bald Blog-Beiträge.
            </p>
            <p className="text-slate-500 text-sm">
              Beiträge werden über Sanity Studio verwaltet — unter{" "}
              <code className="bg-white/5 px-2 py-0.5 rounded text-brand-cyan">/studio</code>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
