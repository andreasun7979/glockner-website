"use client";

import { useEffect } from "react";

/**
 * Blendet alle direkten <section>-Kinder eines `.reveal-scope`-Containers
 * beim Reinscrollen ein. Das Verstecken passiert per CSS (siehe globals.css),
 * daher kein Flash beim Laden. Respektiert prefers-reduced-motion (dann sind
 * die Sections per CSS gar nicht versteckt).
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-scope > section"),
    );
    if (els.length === 0) return;

    // Fallback: kein IntersectionObserver → alles sofort sichtbar.
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
