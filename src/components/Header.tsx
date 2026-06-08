"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const serviceLinks = [
  {
    group: "Glockner AI",
    items: [
      { href: "/ki-marketing-vertrieb", label: "Money Making AI" },
      { href: "/ki-automatisierung", label: "Kosten-Killing AI" },
      { href: "/ki-schulungen", label: "Training" },
    ],
  },
  {
    group: "Glockner Digital",
    items: [
      { href: "/digital/ecommerce", label: "E-Commerce" },
      { href: "/digital/gewerbe", label: "Gewerbebetrieb" },
      { href: "/digital/gesundheit", label: "Ärzte, Kliniken & Apotheken" },
    ],
  },
];

const navLinks = [
  { href: "/preise", label: "Preise" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header({ isLuxOnly = false }: { isLuxOnly?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const isDigital = pathname?.startsWith("/digital") ?? false;

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.04]" style={{ background: "rgba(2, 6, 23, 0.8)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href={isDigital ? "/digital/ecommerce" : "/"}
            className="flex items-center group"
            aria-label={isDigital ? "Glockner Digital — Startseite" : "Glockner.ai — Startseite"}
          >
            {isDigital ? (
              <Image
                src="/logo-digital.webp"
                alt="Glockner Digital"
                width={480}
                height={74}
                priority
                className="h-9 md:h-10 w-auto transition-transform group-hover:scale-[1.03]"
                sizes="(min-width: 768px) 220px, 180px"
              />
            ) : (
              <Image
                src="/logo.webp"
                alt="Glockner.ai"
                width={480}
                height={73}
                priority
                className="h-9 md:h-10 w-auto transition-transform group-hover:scale-[1.03]"
                sizes="(min-width: 768px) 220px, 180px"
              />
            )}
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/ki-marketing-vertrieb"
                className="flex items-center gap-1 px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200"
              >
                Glockner Services
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-1.5 w-80">
                  <div className="rounded-xl p-3 shadow-2xl shadow-black/40 border border-white/[0.06]" style={{ background: "rgba(15, 23, 42, 0.95)", backdropFilter: "blur(24px)" }}>
                    {serviceLinks.map((group, gi) => (
                      <div key={group.group} className={gi > 0 ? "mt-3 pt-3 border-t border-white/[0.06]" : ""}>
                        <div className="px-3 mb-1.5 font-mono text-[10px] tracking-[0.22em] uppercase font-semibold text-aurum/80">
                          {group.group}
                        </div>
                        {group.items.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block px-3.5 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all duration-150"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {!isLuxOnly && navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}

            {isLuxOnly && (
              <>
                <Link
                  href="/preise"
                  className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200"
                >
                  Preise
                </Link>
                <Link
                  href="/ueber-uns"
                  className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200"
                >
                  Über uns
                </Link>
                <Link
                  href="#kontakt"
                  className="px-4 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200"
                >
                  Kontakt
                </Link>
              </>
            )}

            <Link
              href={isLuxOnly ? "#termin" : "/ki-marketing-vertrieb#termin"}
              className="ml-3 inline-flex items-center text-brand-dark text-sm px-5 py-2 rounded-lg font-bold bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border border-aurum/60 hover:from-aurum hover:via-aurum-soft hover:to-aurum hover:border-aurum-soft transition-all shadow-[0_4px_16px_-6px_rgba(201,168,106,0.5)] hover:shadow-[0_6px_22px_-6px_rgba(201,168,106,0.7)]"
            >
              Beratung sichern
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
            <div className="px-3 pt-1 pb-2 font-mono text-[10px] tracking-[0.22em] uppercase font-semibold text-slate-400">
              Glockner Services
            </div>
            {serviceLinks.map((group) => (
              <div key={group.group}>
                <div className="px-3 mt-2 mb-1 font-mono text-[10px] tracking-[0.22em] uppercase font-semibold text-aurum/80">
                  {group.group}
                </div>
                {group.items.map((s) => (
                  <Link key={s.href} href={s.href} className="block py-2 px-6 text-sm text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-lg" onClick={() => setMenuOpen(false)}>
                    {s.label}
                  </Link>
                ))}
              </div>
            ))}
            {!isLuxOnly && navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block py-2.5 px-3 text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-lg" onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            {isLuxOnly && (
              <>
                <Link href="/preise" className="block py-2.5 px-3 text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-lg" onClick={() => setMenuOpen(false)}>
                  Preise
                </Link>
                <Link href="/ueber-uns" className="block py-2.5 px-3 text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-lg" onClick={() => setMenuOpen(false)}>
                  Über uns
                </Link>
                <Link href="#kontakt" className="block py-2.5 px-3 text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-lg" onClick={() => setMenuOpen(false)}>
                  Kontakt
                </Link>
              </>
            )}
            <Link
              href={isLuxOnly ? "#termin" : "/ki-marketing-vertrieb#termin"}
              className="block py-2.5 px-3 mt-2 bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border border-aurum/60 text-brand-dark text-center rounded-lg font-bold shadow-[0_4px_16px_-6px_rgba(201,168,106,0.5)]"
              onClick={() => setMenuOpen(false)}
            >
              Beratung sichern
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
