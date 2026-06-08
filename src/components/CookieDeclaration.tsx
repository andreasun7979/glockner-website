"use client";

import { useEffect, useRef } from "react";

const CBID = "6096c68d-3c0a-4690-8049-5b49f7f23465";

/**
 * Renders the auto-generated Cookiebot cookie declaration (cd.js) in place.
 * Injected client-side so React 19 script-hoisting doesn't move the table
 * out of this container.
 */
export default function CookieDeclaration() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.querySelector("script")) return;
    const s = document.createElement("script");
    s.id = "CookieDeclaration";
    s.src = `https://consent.cookiebot.com/${CBID}/cd.js`;
    s.async = true;
    el.appendChild(s);
  }, []);

  return <div ref={ref} className="mt-4" />;
}
