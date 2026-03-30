"use client";

import Link from "next/link";
import { useState } from "react";

const serviceLinks = [
  { href: "/leistungen/ki-beratung", label: "Beratung Künstliche Intelligenz" },
  { href: "/leistungen/ecommerce", label: "Beratung eCommerce" },
  { href: "/leistungen/gewerbe", label: "Beratung Gewerbebetrieb" },
  { href: "/leistungen/gesundheit", label: "Beratung Ärzte & Gesundheit" },
];

const navLinks = [
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.04]" style={{ background: "rgba(2, 6, 23, 0.8)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-base">G</span>
            </div>
            <span className="font-semibold text-lg text-white tracking-tight" style={{ fontFamily: "'Montserrat', system-ui, sans-serif" }}>
              Glockner AI
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/leistungen"
                className="flex items-center gap-1 px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200"
              >
                Dienstleistungen
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-1.5 w-72">
                  <div className="rounded-xl p-1.5 shadow-2xl shadow-black/40 border border-white/[0.06]" style={{ background: "rgba(15, 23, 42, 0.95)", backdropFilter: "blur(24px)" }}>
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-3.5 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all duration-150"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/kontakt"
              className="ml-3 cta-glow bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm px-5 py-2 rounded-lg font-medium"
            >
              Beratung anfragen
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-white/[0.04] pt-4 space-y-1">
            <Link href="/leistungen" className="block py-2.5 px-3 text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-lg font-medium" onClick={() => setMenuOpen(false)}>
              Dienstleistungen
            </Link>
            {serviceLinks.map((s) => (
              <Link key={s.href} href={s.href} className="block py-2 px-6 text-sm text-slate-500 hover:text-white hover:bg-white/[0.04] rounded-lg" onClick={() => setMenuOpen(false)}>
                {s.label}
              </Link>
            ))}
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block py-2.5 px-3 text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-lg" onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="block py-2.5 px-3 mt-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-center rounded-lg font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Beratung anfragen
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
