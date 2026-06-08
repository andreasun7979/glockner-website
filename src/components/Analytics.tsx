"use client";

import { useEffect } from "react";

/**
 * Loads Google Analytics 4 ONLY after Cookiebot reports `statistics` consent.
 * This is consent-first and fail-safe: if Cookiebot can't load its config
 * (e.g. domain not registered), no consent event fires → GA never loads.
 */

const GA_ID = "G-LJ8G8DE1F0";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __gaLoaded?: boolean;
    Cookiebot?: { consent?: { statistics?: boolean } };
  }
}

function loadGA() {
  if (typeof window === "undefined" || window.__gaLoaded) return;
  window.__gaLoaded = true;

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  // GA4 only recognises commands pushed as the `arguments` object — NOT a
  // plain array. Hence a classic function expression (not an arrow).
  const gtag: (...args: unknown[]) => void = function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);
}

export default function Analytics() {
  useEffect(() => {
    const maybeLoad = () => {
      if (window.Cookiebot?.consent?.statistics) loadGA();
    };
    maybeLoad(); // returning visitor who already consented
    window.addEventListener("CookiebotOnAccept", maybeLoad);
    window.addEventListener("CookiebotOnConsentReady", maybeLoad);
    return () => {
      window.removeEventListener("CookiebotOnAccept", maybeLoad);
      window.removeEventListener("CookiebotOnConsentReady", maybeLoad);
    };
  }, []);

  return null;
}
