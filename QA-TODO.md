# QA-TODO — glockner.ai Website

**Audit-Datum:** 2026-05-07
**Auditor:** Agent
**Geprüfte Domain:** https://glockner.preview.glockner.ai (Lux-Preview-Subdomain — zeigt /leistungen-lux3 als Root, plus /digital/*)
**Viewports:** Desktop 1440×900, Mobile 390×844 (iPhone 14)

---

## Legende

| Symbol | Severity | Bedeutung |
|---|---|---|
| 🔴 | **Critical** | Inhaltlich falsch, rechtlich/kulturell heikel oder Marken-/Adress-Fehler — VOR jedem weiteren Launch fixen |
| 🟡 | **Important** | Sichtbarer Bug, gebrochener UX-Flow, sichtbare Inkonsistenz |
| 🟢 | **Polish** | Kosmetisch — verbessert Wirkung, blockiert aber nichts |

Jeder Punkt ist mit **Label: Agent**, **Viewport** (Desktop/Mobile/Beide), **URL/Selektor**, **Problem**, **Fix-Vorschlag** und **Datei** versehen.

---

# A · Brand & Inhalt (Critical)

## A1 · Falsche Klagenfurt-Adresse im Footer
**Label:** Agent  ·  **Severity:** 🔴 Critical  ·  **Viewport:** Desktop + Mobile
**URL:** alle Seiten (Footer)  ·  **Selektor:** `footer [data-section="kontakt"]` → "Standorte → Klagenfurt"

**Problem:** Footer zeigt aktuell `Sankt Ruprechter Straße 90, 9020 Klagenfurt`. Laut globaler Brand-Quelle (`~/.claude/CLAUDE.md`, Unternehmen-Block) lautet die korrekte Adresse: **Haraldweg 26/10, 9020 Klagenfurt**.

**Fix:** Adresse in `src/components/Footer.tsx` ersetzen — `Haraldweg 26/10` als Straße, restliche PLZ/Stadt korrekt. Einmal über das gesamte Repo `Sankt Ruprechter` greppen, falls die Adresse noch an anderer Stelle hardcoded ist (Sanity-Seed, Impressum, schema.org).

**Datei:** `src/components/Footer.tsx`

---

## A2 · Brand-Inkonsistenz im Footer (AI-Logo + Digital-Copyright)
**Label:** Agent  ·  **Severity:** 🔴 Critical  ·  **Viewport:** Desktop + Mobile
**URL:** alle Seiten  ·  **Selektor:** Footer-Bottom

**Problem:** Footer-Branding zeigt großes **„GLOCKNER AI"**-Logo, darunter steht jedoch `© 2026 Glockner Digital. Alle Rechte vorbehalten.` — zwei verschiedene Brands im selben Block ohne Erklärung, wirkt wie Copy-Paste-Fehler. Für rechtliche Klarheit (Impressum) ist eine eindeutige Firmierung Pflicht.

**Fix:** Entscheidung treffen — entweder
(a) Logo + Copyright auf **„Glockner Digital"** (= juristische Firma) vereinheitlichen, oder
(b) Logo bleibt „Glockner AI" als Marke und Copyright lautet `© 2026 Glockner Digital — Marken: Glockner AI, Glockner Digital`. Empfehlung: Option (b), weil rechtlich klar bleibt, dass beide Marken zur gleichen GmbH gehören.

**Datei:** `src/components/Footer.tsx`

---

## A3 · Hexagram (Davidstern) als Hero-Ornament auf allen /digital/* Seiten
**Label:** Agent  ·  **Severity:** 🔴 Critical  ·  **Viewport:** Desktop + Mobile
**URL:** `/digital/ecommerce`, `/digital/gewerbe`, `/digital/gesundheit`  ·  **Selektor:** Hero-Ornament über H1

**Problem:** Über jedem Hero auf den drei Digital-Seiten steht ein 6-zackiger Stern (zwei ineinander verschränkte Dreiecke = Davidstern / Hexagramm). Das ist im österreichischen B2B-Kontext **kulturell und religiös vorbelastet** (jüdisches Symbol, in Verbindung mit Apotheken/Gesundheit potenziell heikel). Zusätzlich ist es **kein Element der Glockner-Brand-Sprache** — die AI-Seiten verwenden Triquetra, VesicaSeal, FlowerOfLife.

**Fix:** Hexagram durch ein neutrales Sacred-Geometry-Ornament ersetzen, das sich in die Aurum-Palette einfügt:
- E-Commerce → **VesicaSeal** (zwei Kreise = Synthese, passend zu „Schwester-Marke")
- Gewerbebetrieb → **Triangle/Pyramid** (Stabilität, Handwerk)
- Gesundheit → **FlowerOfLife** (Vertrauen, Heilung — bereits in der Aurum-Bibliothek)

**Datei:** `src/app/digital/ecommerce/page.tsx`, `src/app/digital/gewerbe/page.tsx`, `src/app/digital/gesundheit/page.tsx` — Hero-Ornament-Component-Import austauschen.

---

# B · UX-Funktional (Important)

## B1 · „Beratung sichern" wrapt im Mobile-Header
**Label:** Agent  ·  **Severity:** 🟡 Important  ·  **Viewport:** **Mobile only**
**URL:** alle Seiten  ·  **Selektor:** `header a[href*="termin"]`

**Problem:** Auf 390×844 wickelt der CTA „Beratung sichern" auf zwei Zeilen („Beratung" / „sichern"), Button wirkt zerquetscht zwischen Logo + „Kontakt".

**Fix-Vorschläge** (in Reihenfolge):
1. Auf Mobile Label kürzen → `Termin` oder `Beratung →`.
2. Falls Label bleibt: `whitespace-nowrap` setzen und Padding auf `px-2.5 py-1` reduzieren.
3. Alternativ: „Kontakt"-Link bei <420px ausblenden, Button kann breiter werden.

**Datei:** `src/components/Header.tsx` — Lux-only Branch (`isLuxOnly`-Mobile-Block, ~Zeile 138–152).

---

## B2 · Förderpaket III bricht das Preisschema der Cards I & II
**Label:** Agent  ·  **Severity:** 🟡 Important  ·  **Viewport:** Desktop + Mobile
**URL:** `/leistungen-lux3#foerderung` (Förderpakete-Section)  ·  **Selektor:** dritte Pricing-Card

**Problem:** Pakete I und II zeigen strikethrough-Originalpreis + Endpreis nach Förderung („~~€ 500~~ → € 100 nach Förderung"; „~~€ 2.000~~ → € 1.000 nach Förderung"). Paket III zeigt stattdessen `BIS ZU` + `€ 6.000` + `Förderung möglich` — d. h. die € 6.000 sind hier **nicht** der Endpreis, sondern der Förderbetrag. User vergleicht visuell drei Spalten und denkt, Paket III koste 6.000 €.

**Fix:** Paket III ans Schema der ersten beiden anpassen — z. B.:
- `~~ab € 30.000~~` (Originalprojektpreis)
- große Zahl: **„ab € 6.000"** oder konkreter Endpreis nach Förderung
- Untertext: `nach WKO-Förderung`
Falls Endpreis projektabhängig ist, dann konsistent über alle drei Cards `bis zu`-Logik fahren oder eine vierte Spalte „Custom-Quote" einführen.

**Datei:** `src/app/leistungen-lux3/page.tsx` — Förderpakete-Array.

---

## B3 · Foto-Caption „Andreas Unterkofler" über goldenem Kreis schlecht lesbar
**Label:** Agent  ·  **Severity:** 🟡 Important  ·  **Viewport:** Desktop + Mobile
**URL:** `/leistungen-lux3#andreas`  ·  **Selektor:** `[data-section="andreas"] figcaption`

**Problem:** Weiße Caption sitzt direkt auf dem unteren Rand des goldenen Hintergrundkreises der Andreas-Foto-Komposition. Auf hellem Gold ist Weiß contrast-arm; das `GRÜNDER · GLOCKNER AI`-Eyebrow in Cyan (oder Aurum?) ist auf Gold ebenfalls schwer lesbar.

**Fix:** Bottom-Gradient-Overlay über das untere Drittel des Bilds (von `transparent` zu `rgba(2,6,23,0.9)`), Caption darauf platzieren. Eyebrow auf `text-white/70` (oder Aurum-Soft auf Dark-Plate).

**Datei:** `src/app/leistungen-lux3/page.tsx` — Andreas-Section, Image-Wrapper.

---

## B4 · Header-CTA & Akzent auf /digital/* bleibt Aurum (Gold) — Granat-Theme dormant
**Label:** Agent  ·  **Severity:** 🟡 Important  ·  **Viewport:** Desktop + Mobile
**URL:** alle `/digital/*` Seiten  ·  **Selektor:** Header-Button + alle `aurum-*`-Klassen im Body

**Problem:** Glockner-Digital wurde markenstrategisch mit dem **Granat-Theme** (`#a01629`, Klassen `granat-text`, `granat-rule`, `theme-granat`-Scope in `globals.css` Zeilen 308–314) angelegt. Aktuell ist der Scope nirgends gesetzt — alle Digital-Seiten erscheinen im Aurum-Gold der AI-Brand. Die zwei Marken wirken visuell identisch, der USP der Sub-Brand verpufft.

**Fix:** Auf den Wrapper-Containern in `src/app/digital/{ecommerce,gewerbe,gesundheit}/page.tsx` die Klasse `theme-granat` setzen — die `aurum-*`-Variablen werden dadurch automatisch auf Granat-Werte gemappt (siehe `globals.css:309–313`). Header-CTA-Gradient auf Granat schalten, sobald `pathname?.startsWith('/digital')` — analog zum Logo-Switch in `Header.tsx:36`.

**Datei:** `src/app/digital/*/page.tsx` (Wrapper-Klasse), `src/components/Header.tsx` (CTA-Gradient).

---

# C · Layout & Polish (Polish)

## C1 · Hero-Headline „Money Making AI." stackt auf Mobile sehr aggressiv
**Label:** Agent  ·  **Severity:** 🟢 Polish  ·  **Viewport:** **Mobile only**
**URL:** `/` (= /leistungen-lux3 auf Lux-Subdomain)  ·  **Selektor:** Hero `h1`

**Problem:** Auf 390px-Breite bricht „Money / Making AI." auf 3 Zeilen mit großem `letter-spacing: -0.02em`. Wirkt unruhig, das schließende „AI." steht orphaned.

**Fix:** Auf `<sm` Schriftgröße um ~10 % reduzieren (`text-[3.25rem]` statt `text-[3.75rem]`) oder Headline neu umbrechen mit explizitem `<br>` nach „Money Making" sodass „AI." in eigener Zeile sauber zentriert steht (visuell intentional statt zufällig).

**Datei:** `src/app/leistungen-lux3/page.tsx` — Hero `h1`.

---

## C2 · Hero-Subzeile auf /digital/* — drei Eyebrow-Lines untereinander
**Label:** Agent  ·  **Severity:** 🟢 Polish  ·  **Viewport:** Desktop
**URL:** `/digital/ecommerce`, `/digital/gewerbe`, `/digital/gesundheit`  ·  **Selektor:** Hero-Eyebrow

**Problem:** Reihenfolge: `GLOCKNER DIGITAL` (gold) → leere Zeile → `BERATUNG · E-COMMERCE` (weiß). Das wirkt mit der Lücke wie zwei separate Eyebrows. Auf Desktop ist genug Breite, alles in eine Zeile zu packen.

**Fix:** Zu einer Zeile mergen: `GLOCKNER DIGITAL · BERATUNG · E-COMMERCE` (oder mit dezentem Vertical-Bar-Trenner). Spart vertikalen Raum und ergibt eine klare Hierarchie.

**Datei:** `src/app/digital/*/page.tsx` — Hero-Block.

---

## C3 · Pricing-Card I — Strikethrough „€ 500" optisch zu zart
**Label:** Agent  ·  **Severity:** 🟢 Polish  ·  **Viewport:** Desktop
**URL:** `/leistungen-lux3#foerderung`  ·  **Selektor:** erste Pricing-Card

**Problem:** Der durchgestrichene Originalpreis ist sehr klein und niedrig im Kontrast — bei Fly-by-Lesern geht der „80 % Förderung"-Effekt verloren.

**Fix:** Strikethrough-Preis auf `text-base text-aurum-soft/60` und ein dezentes `rotate-[-4deg]` für „handgezogene Linie"-Wirkung. Optional einen kleinen `−80%`-Pill rechts daneben.

**Datei:** `src/app/leistungen-lux3/page.tsx` — Förderpakete-Card-Rendering.

---

## C4 · Use Cases Slider — pulsierender Kern hat keinen Halo-Bezug zum Triquetra
**Label:** Agent  ·  **Severity:** 🟢 Polish  ·  **Viewport:** Desktop
**URL:** `/` Hero-Bereich  ·  **Selektor:** Triquetra-SVG

**Problem:** Der neu eingebaute pulsierende Kern (`aurum-pulse-core` + `aurum-pulse-halo`) ist sichtbar, aber das Halo (`scale: 1.55`, `opacity: 0.55`) erreicht nicht ganz die Triquetra-Außenringe — Effekt wirkt isoliert in der Mitte statt das ganze Symbol zu „atmen".

**Fix:** Halo-`scale` auf `1.85` erhöhen oder ein zweites Halo mit `scale: 2.4` und `opacity: 0.15` hinzufügen, damit das Pulsieren bis an die Ringkante reicht.

**Datei:** `src/app/globals.css` (Zeilen 260–268, `aurum-pulse-halo`).

---

## C5 · Footer-Links Mobile — keine sichtbare Trennung zwischen „Glockner AI" und „Glockner Digital"
**Label:** Agent  ·  **Severity:** 🟢 Polish  ·  **Viewport:** Mobile
**URL:** alle Seiten  ·  **Selektor:** Footer Link-Listen

**Problem:** Auf Mobile rutschen beide Listen-Gruppen direkt untereinander, ohne Trenner — User sieht eine einzige lange Liste, die Sub-Brand-Architektur geht verloren.

**Fix:** Zwischen den Gruppen ein `aurum-rule` (1 px Gradient-Divider) oder `mt-6 pt-6 border-t border-white/[0.06]`.

**Datei:** `src/components/Footer.tsx`.

---

## C6 · Booking-Calendar — vergangene Tage nicht visuell unterscheidbar
**Label:** Agent  ·  **Severity:** 🟢 Polish  ·  **Viewport:** Desktop + Mobile
**URL:** `/leistungen-lux3#termin`  ·  **Selektor:** Booking-Widget Date-Grid

**Problem:** Die Wochenend-Tage (16, 17, 23, 24, 30, 31) sind dezent ausgegraut — gut. Vergangene Werktage des aktuellen Monats sehen aber genauso klickbar aus wie zukünftige. Bei Klick passiert nichts (server-validated), aber UX-Feedback fehlt.

**Fix:** Vergangene Tage mit `opacity-30 cursor-not-allowed pointer-events-none` rendern, identisch zu Wochenenden.

**Datei:** Booking-Widget-Component (vermutlich `src/components/booking/Calendar.tsx` o. ä.).

---

## C7 · ContactForm Submit-Button — Goldgradient bei Hover schwächer als Idle
**Label:** Agent  ·  **Severity:** 🟢 Polish  ·  **Viewport:** Desktop
**URL:** Footer-Kontakt-Block  ·  **Selektor:** `button[type="submit"]` „Nachricht senden"

**Problem:** Im Idle wirkt der Button durch den dunkleren Aurum-Deep-Stop kontrastreicher als im Hover-State. Hover sollte den Click-Wunsch verstärken, nicht abschwächen.

**Fix:** Hover-Gradient `from-aurum hover:from-aurum-soft via-aurum-soft via-aurum-soft to-aurum` (heller, gleichmäßiger), zusätzlich `shadow-[0_8px_24px_-8px_rgba(201,168,106,0.6)]` für Lift-Effekt.

**Datei:** `src/components/ContactForm.tsx` (oder direkt im Footer-File, falls inline).

---

# D · SEO / Meta (Polish, but worth tracking)

## D1 · `noindex` ist auf Lux-Subdomain korrekt — aber Production-Domain nicht geprüft
**Label:** Agent  ·  **Severity:** 🟢 Polish  ·  **Viewport:** N/A (HTTP)
**URL:** `https://test.glockner.ai` (Production)

**Problem:** Lux-Preview-Subdomain liefert (laut Middleware) `X-Robots-Tag: noindex, nofollow, ...` — gut. Es ist nicht verifiziert, ob die Production-Domain `test.glockner.ai` korrekt **indexierbar** ist (also den Header NICHT setzt).

**Fix:** `curl -I https://test.glockner.ai/` — `X-Robots-Tag` darf NICHT `noindex` enthalten. Falls doch: Middleware-Logik in `src/middleware.ts` (`withNoIndex(NextResponse.next())` als Default) ist zu breit; nur Lux-Host sollte `noindex` bekommen.

**Datei:** `src/middleware.ts`.

---

# Zusammenfassung — Empfohlene Reihenfolge

1. **A1** Klagenfurt-Adresse (rechtliche Korrektheit)
2. **A2** Footer-Brand-Inkonsistenz (rechtliche Klarheit)
3. **A3** Hexagram-Ornament tauschen (kulturelle Sensibilität)
4. **B2** Pricing-Card III ans Schema anpassen (Conversion-Risiko)
5. **B1** Mobile-Header-CTA fixen (Conversion-Risiko Mobile)
6. **B4** Granat-Theme auf /digital/* aktivieren (Brand-Differenzierung)
7. **D1** noindex auf Production-Domain verifizieren (SEO-Risiko)
8. **B3** Andreas-Foto-Caption Lesbarkeit (Vertrauensaufbau)
9. **C1–C7** Polish-Tickets nach Bandbreite

---

**Screenshots-Referenz:** alle Screenshots dieses Audits liegen unter `qa-d-*.png` (Desktop) und `qa-m-*.png` (Mobile) im Repo-Root.
