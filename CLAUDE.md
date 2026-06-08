# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build (uses Turbopack)
npm run start     # Serve production build
npm run lint      # ESLint (next/core-web-vitals + typescript)
npx vercel --prod # Deploy to Vercel production (LIVE public domain: glockner.ai)
```

## Architecture

**Next.js 16.2.1 App Router** marketing site for two sub-brands of the same company:

- **Glockner AI** — KI-Beratung & Implementierung. Aurum (gold) theme. Reference: https://glockner.ai
- **Glockner Digital** — eCommerce / Gewerbe / Gesundheit digital marketing. **Currently also Aurum (gold)** — earlier iterations used a Granat (red) theme; the granat CSS tokens and `.theme-granat` scope class still live in `globals.css` but no page uses them anymore. Reference: https://glocknerdigital.at

Both brands live in the same Next.js app and are distinguished by route prefix and (small) header logo swap. All content is in German.

### Key integrations
- **Sanity CMS** (v5) at `/studio` — homepage, service pages, blog, team, settings. Config in `sanity.config.ts` (hardcoded projectId `pdjtv2pg`, basePath `/studio`), schemas in `sanity/schemas/`. Sanity client in `sanity/lib/client.ts` returns `null` when projectId is missing (defensive for builds). Queries in `sanity/lib/queries.ts`.
- **Supabase** — contact form submissions stored in `leads` table via `/api/contact` POST endpoint. Client in `src/lib/supabase.ts` — **returns `null` when the env vars are missing** (defensive, mirroring the Sanity client; `/api/contact` already guards with `if (supabase)`), so env-less preview/CI builds don't crash at module load. **The website's Supabase project is `kjschlicrafsdwwkxecm`** (name `glockner-website`, region `eu-central-1` Frankfurt) — this is a *different* project from `mhybegxcwoasofseeoza`, which belongs to the separate QA-board app (see Companion artifacts). Do not confuse the two. The free-tier project auto-pauses after inactivity (`status: INACTIVE`); when that happens the live contact form silently fails to persist leads until the project is woken in the Supabase dashboard. The `leads` table (created 2026-05-31) has **RLS enabled with an INSERT-only policy for `anon`/`authenticated`** — the public anon key can write leads but cannot read them; reads happen via the dashboard / service role. Do not add a SELECT policy for anon.

### CMS content pattern
Pages fetch from Sanity with hardcoded fallbacks. Example:
```tsx
const cms = await getHomepage().catch(() => null);
const heading = cms?.heroHeading || "Fallback text";
```
Singleton document IDs: `homepage`, `service-ki-beratung`, `service-ecommerce`, `service-gewerbe`, `service-gesundheit`.

### Styling
- **Tailwind CSS 4** with `@tailwindcss/postcss` — no `tailwind.config` file; custom colors defined via `@theme` in `globals.css`. **Important: `@theme` is used without the `inline` modifier** so generated utilities resolve to `var(--color-…)` at runtime instead of inlining the value at build time. This is what makes the granat-theme scope (below) work — do not switch back to `@theme inline`.
- Brand colors: `brand-blue` (#3b82f6), `brand-cyan` (#06b6d4), `brand-dark` (#020617), `brand-orange` (#f0a173, background accent only — never for buttons or interactive elements), `brand-card` (#0f172ae6).
- **Aurum (gold) system** for Glockner AI / Lux3: `aurum` (#c9a86a), `aurum-soft` (#d8bd8a), `aurum-deep` (#a88845). Used sparsely for ornaments, primary buttons, and selected states — never as a large fill. Helper classes in `globals.css`: `.font-serif-display`, `.aurum-text` (gold gradient text via `var(--color-aurum-*)`), `.aurum-rule` (gold horizontal rule), `.aurum-breathe` (slow 6.5s opacity/scale loop), `.aurum-rotate-slow` (60s linear rotation), `.aurum-ring` (radial ring backdrop), `.aurum-pulse-core` (2.4s heartbeat scale 0.9→1.25 / opacity 0.6→1) + `.aurum-pulse-halo` (same period offset −0.6s, scale 0.85→1.55 / opacity 0.18→0.55) — applied to the Triquetra in the Lux3 hero so its center "breathes". Both pulse classes need `transform-origin: 50% 50%; transform-box: fill-box;` (already in the rule) to keep SVG elements centered while scaling.
- **Granat (red) system — currently dormant** but still in `globals.css`: `granat` (#a01629), `granat-soft` (#c63550), `granat-deep` (#6e0e1c) plus `.granat-text`, `.granat-rule`, `.granat-breathe`, and the `.theme-granat` scope class that overrides `--color-aurum*` for any descendant. The granat tokens are kept in CSS in case the second brand wants to differentiate again; if you re-introduce them, wrap a component in `<div className="theme-granat">` to flip the entire aurum palette to red without touching the component code.
- CTA buttons (default theme) use blue-to-cyan gradient with `.cta-glow` class. **Aurum buttons use** `bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep` + `text-brand-dark` + Aurum shadow — not the cyan gradient. Aurum is light, so button labels MUST be `text-brand-dark`, never `text-white` (low contrast). Header "Beratung sichern" is gold globally and links to `/ki-marketing-vertrieb#termin`.
- Custom utility classes: `.glass` (glassmorphism), `.glass-hover` (cyan border on hover + lift), `.gradient-text` (blue→cyan), `.cta-glow` (hover glow effect), `.section-line` (gradient divider), `.dot-grid` (background pattern), `.accent-bar` (left border accent).
- Use Cases slider: `.use-case-slider` container (edge-fade pseudo-elements), `.slider-row` / `.slider-row-1` / `.slider-row-2` (two rows at 45s/55s speeds), `.slide-card` (230x85px glassmorphism card with hover glow). Duplicated items for seamless loop.
- Fonts: Montserrat (headings via CSS rule), DM Sans (body), **Fraunces** (Lux3 serif display, used via `.font-serif-display`) — all loaded via Google Fonts CDN `<link>` in `layout.tsx`, not `next/font/google` (http2 build issue on Windows). When adding more weights/fonts, edit the single combined URL in `layout.tsx`.
- Scroll animations: **two systems.** Legacy `FadeIn` (wraps each element with IntersectionObserver + staggered delays; used by the old `/` `page.tsx`). Newer **`ScrollReveal`** (`src/components/ScrollReveal.tsx`) for the v2 ecosystem: each page wraps its content in `<div className="reveal-scope">…<ScrollReveal/></div>`, and `ScrollReveal` fades in every direct `.reveal-scope > section` on scroll. CSS in `globals.css` hides those sections initially (so **no flash**) and is gated on `@media (prefers-reduced-motion: no-preference)`.

### Site architecture — the v2 relaunch (current, since 2026-06-05)
The public homepage is now **`/v2`** (`src/app/v2/page.tsx`), reached via the middleware rewrite `/`→`/v2`. The site is framed as **two goals × three engagement models**, all in the Aurum design:
- **Two goals (outcomes):** *Money Making AI* (revenue — page `/ki-marketing-vertrieb`) and *Kosten-Killer AI* (efficiency up / cost down — page `/ki-automatisierung`). The header menu labels them "Money Making AI" / **"Kosten-Killing AI"** — the `-ing` form is **only** in the header `serviceLinks`; the on-page hero hooks still read "Kosten-Killer AI". (If asked to unify, change the page hooks too.)
- **Three engagement models:** **Training** (`/ki-schulungen`), **Service** (`/ki-automatisierung`), **Produkt** (`/ki-software`) — the "Wählen Sie Ihren Weg" chooser on `/v2`.
- The v2 ecosystem (`/v2`, `/ki-automatisierung`, `/ki-schulungen`, `/ki-software`, `/preise`, and the Aurum-redesigned `/ueber-uns`) shares **`src/components/aurum/Ornaments.tsx`** (Triquetra, VesicaSeal, GoldDivider, FlowerOfLifeBackdrop, Check, ArrowRight, PillarSeal + the `goldBtn`/`ghostBtn` class strings) and the `ScrollReveal` pattern (see Styling). The older lux alternatives keep their **own inline** ornaments and are NOT part of this shared subsystem.
- **Prices on `/ki-schulungen` & `/ki-software` are placeholder "ab" starting values** derived from source videos — confirm with the user before treating as final.

### Routing

**Glockner AI**
- `/v2` — **the public homepage** (served at `/` via rewrite). Two-pillar hero (Money Making AI / Kosten-Killer AI — **beide Säulen sind klickbare Links** → `/ki-marketing-vertrieb` bzw. `/ki-automatisierung`, mit „Mehr erfahren →"-Hinweis) → AI-OS "Fundament" → two goals (each with a CTA to `/ki-marketing-vertrieb` resp. `/ki-automatisierung`) → three-ways chooser → "Warum Glockner AI" (4 USP cards incl. **Sicherheit**) → WKO strip → CTA → Booking.
- `/ki-automatisierung` — **Service / Kosten-Killer AI** landing page (Russell-Brunson long-form). €2.500/Mo retainer, value-stack ("Service. Alles drin. Eine Pauschale."), comparison table ("Rechnen Sie selbst nach."), risk-reversal ("Unser Versprechen"), scarcity ("4 Neukunden pro Quartal"), FAQ, booking. Has a `sm:hidden` fixed bottom CTA bar.
- `/ki-schulungen` — **Training** landing page: AI-OS setup + Claude Code + agent system + the **Schulungen** block (moved here from lux3: Agentic AI / Claude Code / AI im Unternehmen) + package "ab €1.500/Mo + Setup".
- `/ki-software` — **Produkt** landing page: custom KI-software/apps, "individueller Preis".
- `/preise` — pricing page: three-ways cards + the Service offer-stack + comparison/Versprechen/Für-wen blocks (mirrored from `/ki-automatisierung`).
- `/ki-marketing-vertrieb` — **"Money Making AI"** page (was the homepage pre-v2; now a menu subpage with its own `canonical: "/ki-marketing-vertrieb"`). Aurum "Sacred Capital" design (Fraunces, sacred-geometry ornaments): Hero → Credo → Andreas bio → Drei Säulen → 3× Pillar rows → Was uns ausmacht → B2B/B2C → Förderung → CTA → Booking. **The Schulungen section was removed** (moved to `/ki-schulungen`). Duplicates the `fundament`/`design`/`marketing` Card arrays **inline** (shared with lux/lux2) — sync if copy changes. `Card.result` is optional (footer rendered conditionally). **Fundament hat 4 Karten** (`cols={4}`): F.01 Audit · F.02 Knowledge Base · F.03 Brand Voice Magic · **F.04 Story Extractor** (Story-Magic/Epiphany-Bridge, ergänzt 2026-06-07).
- `/` (`src/app/page.tsx`) — the **old** homepage (hero/comparison/packages/slider). Only served on the full-site staging host now; on lux hosts `/` rewrites to `/v2`. Uses the legacy `FadeIn` wrapper.
- `/leistungen`, `/leistungen-lux`, `/leistungen-lux2` — older/alternative designs, kept for reference (`robots: index:false`).
- `/leistungen/{ki-beratung,ecommerce,gewerbe,gesundheit}` — older blue/cyan service subpages (CMS-connected). Likely to be retired.

**Glockner Digital**
- `/digital/ecommerce`, `/digital/gewerbe`, `/digital/gesundheit` — premium audience-specific landing pages, all **gold-themed** like Lux3. The three are **near-literal copies of each other** with audience-specific hero copy. When shared structure (packages, sections) changes, sync all three. eCommerce additionally has a deeper content stack: Andreas-Unterkofler founder bio (chroma-keyed photo on a CSS-rendered gold circle — see image pipeline below), AI-Edge differentiator section, Sales-Channels (Shopify / Amazon / Plenty One), and a redesigned Cert section with `WaxSeal` SVG ornaments + a monochrome cert-logo trust strip.
- **Hero headline sizing is copy-length dependent.** The default `text-5xl md:text-7xl lg:text-8xl` only works for a *short* poetic hero line (e.g. „Wo Sie Ihre Arbeit anbieten, findet man Sie."). Longer benefit-driven copy (e.g. Gewerbe currently: „Wir bringen Ihnen mit nachhaltigen Digital-Strategien mehr Neukunden …!") needs to drop to `text-3xl md:text-5xl lg:text-6xl` with `leading-[1.08]` or it visually crashes into the next section on mobile. When you change hero text, also revisit the heading size class.
- **Andreas-Unterkofler bio is also on `/ki-marketing-vertrieb`** (between Credo and the Drei-Säulen overview), with AI-focused copy: "stille Armee aus KI-Agents", three stats (`3+ Jahre AI-Praxis` · `15+ Jahre Operator` · `24/7 KI-Agents im Einsatz` — note the third stat is intentionally *not* a team count). When the founder copy or stats change, sync both pages by hand — the section is duplicated, not shared.
- All three Digital pages share the three-tier WKO-Förderpakete (€100 / €1.000 / bis €6.000) — **all three price tiles use an identical 3-row layout** (pre-label slot / price row / post-label) with an *invisible* "bis zu" placeholder span on tiles 1 & 2 so the big prices line up horizontally with tile 3's "BIS ZU"-prefixed €6.000. If you change the price block in one page, replicate the same trick across all three.

**Cross-linking pattern (Lux3 → /digital/*)**
- `Card.seeAlso?: { href: string; label: string }[]` on the Lux3 service-card data array. Currently set on `D.01 Converting Website` (links to `/digital/gewerbe`, `/digital/gesundheit`) and `D.02 Converting Webshop` (links to `/digital/ecommerce`). Renders inside the card as a small "TIEFERER EINBLICK" eyebrow + chip-style links in aurum.

**Shared**
- `/kontakt` — **hero only**. The contact form + „Direkter Draht"/Standorte come from the global `Footer.tsx` (which renders `ContactWidget` site-wide under `#kontakt`). The page used to *also* render its own `ContactForm`, producing a duplicate form on this route — that was removed. `src/components/ContactForm.tsx` is now unused (kept in the tree).
- `/ueber-uns` — **Aurum-redesigned** about page (replaced the old blue/cyan version): hero → Andreas founder bio (extended to cover **both** the revenue *and* the efficiency/cost-saving angle) → "Was uns ausmacht" → Standorte (Wien + Klagenfurt) → CTA. Note: this page has **no `#termin`** block (its CTA links to `/preise#termin`), so the header's `#termin` CTA does nothing here.
- `/blog` — placeholder (content via Sanity when connected)
- `/impressum`, `/datenschutz` — legal pages, plain server components (no CMS, no client JS). Both use a local `Section` helper for headings. The legal entity is **„Glockner Digital — eCommerce Consulting Mag. Andreas Unterkofler", Blumauergasse 23/12, 1020 Wien** (Einzelunternehmen). The Datenschutz text reflects the *actual* data flow (Vercel hosting · Supabase lead storage · Resend mail · Sanity CMS · **Cookiebot consent banner + Google Analytics 4, consent-gated** — see "Analytics & cookie consent" below). Still do NOT claim processors that are NOT used: **GTM / Google Maps / reCAPTCHA / Calendly / Hotjar / Intercom were all deliberately left out** — listing unused tools violates Art. 13 DSGVO just as much as omitting used ones. The `/datenschutz` page also embeds `<CookieDeclaration/>` (the live Cookiebot cookie list). Both routes are in the middleware passthrough list.
- `/studio/[[...tool]]` — Sanity Studio (uses `NextStudioLayout` from next-sanity)
- `Header.tsx` exposes a **„Glockner Services"** dropdown (always rendered, also in lux-only mode), defined by `serviceLinks`, split into **Glockner AI** (Money Making AI → `/ki-marketing-vertrieb`, **Kosten-Killing AI** → `/ki-automatisierung`, Training → `/ki-schulungen`) and **Glockner Digital** (E-Commerce / Gewerbe / Gesundheit). Standalone nav (`navLinks`): **Preise** → `/preise`, **Über uns** → `/ueber-uns`, **Kontakt** → `#kontakt` (same-page anchor to the Footer's `<section id="kontakt">`, present on every page). The **logo links to `/`**. „Beratung sichern" CTA → `#termin` in lux mode / `/ki-marketing-vertrieb#termin` otherwise. Logo swaps `/logo.webp` ↔ `/logo-digital@2x.webp` for `/digital/*` (via `usePathname()`). The `isLuxOnly` flag now still shows Services + Preise + Über uns + Kontakt + CTA (it only drops the legacy standalone Blog link). Mobile burger mirrors the same structure.
- **In-page anchors on `/ki-marketing-vertrieb`**: `#andreas`, `#ueberblick`, `#fundament`, `#grow-design`, `#grow-ms`, `#foerderung`, `#termin` — the **`#schulungen` section moved to `/ki-schulungen`**, which now owns that anchor. The Footer's „Glockner AI" column links Money Making AI / Kosten-Killing AI (`/ki-automatisierung`) / Training (`/ki-schulungen`).

### Host-aware routing — the public site IS the Lux experience (`src/middleware.ts`)
**Went live on glockner.ai 2026-05-31.** The marketing public is served the focused **Lux-only** experience; the full multi-page site only exists on the staging host.
- `isLuxHost()` matches four kinds of host, all of which get the lux-only treatment (set `x-lux-only` header, rewrite `/`→`/v2` via the `LUX_PATH` constant, 301-redirect the renamed old slugs to their new SEO URLs via the `REDIRECTS` map, and 302-redirect any other non-passthrough path to `/`):
  - **`glockner.ai` / `www.glockner.ai`** — the PUBLIC production hosts (`PUBLIC_LUX_HOSTS`). Indexable, but only when `SITE_LIVE === true` (see SEO section).
  - **`glockner.preview.glockner.ai`** (`LUX_HOST`) — staging preview, **always noindex**.
  - **localhost / 127.0.0.1 / 10.x** — dev; local `npm run dev` mirrors the lux behaviour 1:1, **always noindex**. To develop the *full* site locally (`/leistungen`, `/ueber-uns`, `/blog`), temporarily remove the localhost branch from `isLuxHost`.
- **`glocknerdigital.at` / `www.glocknerdigital.at`** → **308-redirect to `glockner.ai`** (same path), handled at the very top of the middleware before the lux logic. Their email DNS (Google MX, MailerLite SPF/DKIM) is untouched — this is web-only.
- **`test.glockner.ai`** (any other non-lux host) → serves the **full** site, **always noindex** (staging).
- **SEO-Slugs (umbenannt 2026-06-08):** sprechende URLs statt Codenamen — `/ki-marketing-vertrieb` (war `/leistungen-lux3`), `/ki-automatisierung` (war `/retainer`), `/ki-software` (war `/produkt`), `/ki-schulungen` (war `/training`). Die Middleware hat eine **301-`REDIRECTS`-Map** alt→neu (inkl. `/leistungen-lux`(2) → `/ki-marketing-vertrieb` und `/v2` → `/`); interne Links, Canonicals & `sitemap.ts` zeigen auf die neuen Slugs.
- Lux-host passthroughs (served as-is, `x-lux-only` still set): `/_next/*`, `/api/*`, any path with a file extension (so `/robots.txt` + `/sitemap.xml` resolve), **`/ki-marketing-vertrieb`, `/ki-automatisierung`, `/ki-schulungen`, `/ki-software`, `/preise`, `/ueber-uns`**, `/kontakt`, `/impressum`, `/datenschutz`, `/digital/*` (NICHT mehr `/v2` — das 301-redirectet auf `/`). **Any new top-level page must be added here** or it 302-redirects to `/`. `/studio/*` is NOT a passthrough — hit it directly after toggling `isLuxHost` to use Studio locally.
  - `src/app/layout.tsx` is an `async` server component that reads `x-lux-only` via `await headers()` and passes `isLuxOnly` to `<Header>`. The flag now only hides the standalone „Über uns / Blog" nav items (Kontakt link + „Beratung sichern" CTA + the always-visible Services dropdown stay). Without this the Über uns / Blog links would appear broken because every non-lux path redirects back to Lux3.
  - Reading `headers()` in the root layout makes every page dynamic (`ƒ` in the build output). Acceptable trade-off for this site; do not move the headers read into a deeper-nested layout unless the marketing pages need to be statically prerendered again.
- **Next.js 16 deprecation:** the dev server logs `The "middleware" file convention is deprecated. Please use "proxy" instead.` The file still works but will need to be renamed to `src/proxy.ts` for forward compatibility — defer until you next touch the file.

### Booking + Contact flow (used by the v2 ecosystem — `/v2`, `/ki-automatisierung`, `/ki-schulungen`, `/ki-software`, `/preise` — plus Lux3 and `/digital/*`)
- `src/components/BookingWidget.tsx` — 2-step client component: (1) date+time picker, (2) contact form, (3) success screen. Hardcoded weekday-only availability with 30-min slots at 10:00–11:30 and 14:00–15:30 (CET/CEST). Posts to `/api/booking`. Accepts optional props `eyebrow` (default `"Klarheitsgespräch"`), `hostName` (default `"Glockner AI"`), `promise` (italic line in sidebar) — used by Glockner Digital pages to swap to *„Erstberatung / mit Glockner Digital."*. Theme is now uniformly aurum; the `.theme-granat` swap-wrapper is no longer applied anywhere (kept available for future use).
- **Lead-time buffer (2 h):** `LEAD_TIME_MIN = 120` filters out any slot whose datetime is less than now+2h. `availableSlots(date, slots)` is used for rendering, the half-day headline („Vormittag" / „Nachmittag") is only shown if its filtered list is non-empty, and `isDateBookable` disables a day entirely when zero remaining slots satisfy the buffer (so today gets greyed out around mid-afternoon). A `setInterval(setNow, 60_000)` re-evaluates every minute; if the user already picked a slot that just expired, it is cleared via a `useEffect` tied to `now`. To change the buffer (e.g. 1 h or 4 h), edit the single `LEAD_TIME_MIN` constant.
- `src/components/ContactWidget.tsx` — Name / E-Mail / Nachricht client component, posts to `/api/contact`. Same theme-scoping mechanism.
- `src/app/api/booking/route.ts` — validates payload, sends two transactional emails via **Resend**: customer confirmation (gold "Zum Meeting beitreten" CTA → `MEETING_URL`) and host notification. When `RESEND_API_KEY` is absent the route logs and returns `{ ok: true, mode: "dev" }` — the widget still flows to "success" so dev iteration works without Resend. `MEETING_URL` / `HOST_EMAIL` / `SUPPORT_EMAIL` are hardcoded at the top. **Anti-abuse:** honeypot field `hp` (silently returns 200 if filled) + in-memory rate limit (`src/lib/rateLimit.ts`, 5 req/10 min per IP → 429) + server-side slot validation (`time` ∈ `ALLOWED_SLOTS`, date inside a sane window).
- `src/app/api/contact/route.ts` — first persists the lead in Supabase (`leads` table), then sends two Resend emails (host notification + customer confirmation). Mail failure does not fail the request — the lead is already saved. Same honeypot (`hp`) + rate-limit guard as booking.
- **Resend setup (live):** the verified sending domain in the `glocknerdigital` Resend account is **`glockner.ai`** (NOT `glocknerdigital.at` — the free plan allows only 1 domain). `RESEND_FROM_EMAIL` is set on Vercel to `Glockner AI <a.unterkofler@glockner.ai>` (a sender address needs no real mailbox, only a verified domain). Customer-mail **reply-to** = `SUPPORT_EMAIL` = `support@glocknerdigital.at`; host notifications go to `HOST_EMAIL` = `a.unterkofler@glocknerdigital.at`. Sending from `@glocknerdigital.at` would require verifying it → Resend Pro ($20/mo). Empty `RESEND_FROM_EMAIL` falls back to `onboarding@resend.dev` (restricted to the account address).

### Image asset pipeline
- `public/banana/{fundament,grow-design,grow-ms}.webp` — pillar identity images for Lux variants (rendered as circular gold-ringed seals in Lux3).
- `public/logo.{webp,png}` + `public/logo@2x.webp` — Glockner AI header/footer brand mark.
- `public/logo-digital.{webp,png}` + `public/logo-digital@2x.webp` — Glockner Digital header brand mark, swapped in by `Header.tsx` for `/digital/*` routes.
- `public/team/andreas-unterkofler.webp` (+ `@2x`) — founder portrait used on `/digital/ecommerce`. Source PNG had an opaque orange disc behind the subject; we **chroma-key the orange to transparent** in Sharp (find pixels within tolerance 50 of `#ff914d`, set alpha=0), then render against a CSS-rendered gold radial-gradient circle in the page. Re-process from the original PNG (not the converted webp) when re-running because lossy webp loses fine alpha edges.
- `public/cert/{wko-kmu-bundesministerium,cecc}.webp` — official cert logos, processed to **white-on-transparent** monochrome by mapping each pixel's perceived luminance to alpha (darker = more visible) and forcing RGB to white. Used in the trust strip on `/digital/ecommerce`.
- Source files live in `Input/` (gitignored, scratch). To process: use the already-installed `sharp` via `node -e "..."` — typical pipeline is `sharp(src).trim().resize({ width: N }).webp({ quality: 92 }).toFile(...)`. For chroma-keyed assets, decode raw pixels (`.ensureAlpha().raw().toBuffer({ resolveWithObject: true })`), iterate, and re-encode. There is no build script for this; commit only the optimized output to `public/`.
- After replacing an image at the same path, dev browsers may show the cached optimized version. **Note that Next.js Turbopack also caches optimized images on disk under `.next/dev/cache/images/`** which survives a `next dev` restart. To force a fresh optimization, delete that directory (via Node, since the Bash sandbox blocks `rm -rf`) and reload — see the inline Node snippet pattern used elsewhere in this codebase.

### Path alias
`@/*` maps to `./src/*` (tsconfig paths).

### Static reference
`glockner_full.html` at the repo root is a **static design reference**, not part of the build. Don't link to it from the app and don't try to import from it — copy patterns out by hand.

### SEO, indexing & the launch switch (`src/lib/seo.ts`)
`src/lib/seo.ts` is the single source of truth for SEO/launch state:
- **`SITE_LIVE`** — master switch (currently `true` = LIVE/indexable). It governs three things in concert: the root-layout `robots` metadata (noindex when `false`), the generated `robots.txt` (`Disallow: /` when `false`, else `Allow:` + sitemap), and the middleware `X-Robots-Tag` header (only `PUBLIC_LUX_HOSTS` skip noindex, and only when `SITE_LIVE`). Flipping it + redeploy is the entire launch / unlaunch — nothing else to touch.
- **`SITE_URL`** = `https://glockner.ai` — feeds `metadataBase` (layout), every per-page `alternates.canonical`, and the sitemap. One-line change if the canonical domain ever moves.
- **`organizationJsonLd()`** — `Organization` + `WebSite` JSON-LD injected as a `<script type="application/ld+json">` in `layout.tsx` (both Wien + Klagenfurt addresses).
- `src/app/robots.ts` + `src/app/sitemap.ts` are generated routes. The old static `public/robots.txt` was **deleted** (a static file + a route collide). Sitemap now lists: `/`, `/preise`, `/ki-automatisierung`, `/ki-schulungen`, `/ki-software`, `/ki-marketing-vertrieb`, `/ueber-uns`, `/digital/{ecommerce,gewerbe,gesundheit}`, `/kontakt`. **Add new public pages here too.**
- **Per-page metadata:** the public homepage is served by **`/v2`** (rewrite), so that page carries the strongest homepage title + `alternates.canonical: "/"`. `/ki-marketing-vertrieb` (now the "Money Making AI" subpage) carries its **own** `canonical: "/ki-marketing-vertrieb"` (don't let two pages claim `/`). The v2-ecosystem pages (`/ki-automatisierung`, `/ki-schulungen`, `/ki-software`, `/preise`, `/ueber-uns`) are **indexable** (their review-time `robots: index:false` was removed at launch) with self-canonicals. Glockner-Digital pages use `title: { absolute: "… | Glockner Digital" }`. The design-alternatives + older service pages (`/leistungen`, `/leistungen-lux`, `/leistungen-lux2`, `/leistungen/*`) keep `robots: { index: false }`. Brand claim is **"KI-Beratung & Implementierung"** everywhere.
- **Google Search Console:** `glockner.ai` is a verified Domain-Property (DNS-TXT at domaindiscount24); the sitemap is submitted.

### Analytics & cookie consent (Cookiebot + GA4)
Consent-first tracking, added 2026-06-04. **Only Google Analytics 4 is used** — GTM, Hotjar and Intercom from the old easy2 site were deliberately left out.
- **Cookiebot** is the consent banner: `<Script id="Cookiebot" … data-cbid="6096c68d-3c0a-4690-8049-5b49f7f23465" data-blockingmode="manual" strategy="beforeInteractive">` in `layout.tsx` (must load first). The CBID's **domain group in the Cookiebot account must list `glockner.ai` + `www.glockner.ai`** — otherwise `consentconfig/…/<host>/configuration.js` 404s and **no banner renders**.
- **GA4** (`G-LJ8G8DE1F0`) is loaded by `src/components/Analytics.tsx` — a client component that injects `gtag.js` **only after** Cookiebot reports `statistics` consent (`CookiebotOnAccept` / `CookiebotOnConsentReady`; return visits via `window.Cookiebot.consent.statistics`). Fail-safe: if Cookiebot can't load, no consent event fires → GA never loads.
- `src/components/CookieDeclaration.tsx` injects Cookiebot's `cd.js` cookie-list into `/datenschutz` client-side (so React-19 script hoisting doesn't move the table).
- **Two hard-won gotchas — do not revert:**
  1. **`data-blockingmode` must be `manual`, not `auto`.** Auto-blocking turns on Google Consent Mode with `analytics_storage` defaulted to *denied* page-wide, which silently suppressed the manually-injected GA (it loaded but sent 0 hits). Manual mode + the consent-gated `Analytics.tsx` is the working combination.
  2. **`gtag` must push the `arguments` object, not a plain array.** A classic `function(){ dataLayer.push(arguments) }` works; an arrow fn pushing `[...args]` makes GA load but never send (the `config` command isn't recognised). See the typed pattern in `Analytics.tsx`.
- Verified end-to-end: before consent → no `gtag.js`, no `_ga`, 0 `/collect`; after "Alle zulassen" → `page_view` hits `region1.analytics.google.com/g/collect?tid=G-LJ8G8DE1F0`, `_ga` set, choice stored in the `CookieConsent` cookie.

## Deployment

Hosted on **Vercel** (project: `glockner-website`, team `aunterkofler-4276s-projects`). Domains attached to the project:
- **`glockner.ai` / `www.glockner.ai`** — LIVE public site (Lux experience). Apex `A → 76.76.21.21` at registrar **domaindiscount24**. Keep the NS at DD24 (the `glockner.ai` zone hosts many active subdomains for *other* Vercel projects — switching NS to Vercel would break them).
- **`glocknerdigital.at` / `www.glocknerdigital.at`** — attached, apex `A → 76.76.21.21`; 308-redirect to `glockner.ai` (middleware). Email DNS untouched.
- `test.glockner.ai` — full site (staging, noindex)
- `glockner.preview.glockner.ai` — Lux-only preview (staging, noindex; CNAME → `cname.vercel-dns.com`)

Vercel CLI is **not** installed globally — always invoke via `npx vercel`. Always run `npm run build` before deploying. Deploys can fail mid-upload with `ECONNRESET` on slow connections — just retry, the build artifacts in `.next/` are reused. Resend env vars must be set in the Vercel project settings before the live booking flow can send mail.

`vercel.json` pins `"regions": ["fra1"]` — all Functions / Middleware run in Frankfurt, not the Vercel default `iad1` (US-East). This is a DSGVO requirement (visitor IPs + form submissions must be processed inside the EU) and also shortens the Supabase round-trip. Do not remove the region pin.

`vercel.json` also sets a `headers` block on `/(.*)`: HSTS, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy`, `Permissions-Policy`, and a **deliberately non-restrictive CSP** (`frame-ancestors 'self'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests` — **no `script-src`/`style-src`/`connect-src`**). The CSP is kept loose on purpose so Next.js inline scripts, Google Fonts, Cookiebot and GA aren't blocked; if you ever add a strict `script-src`, you must allow `consent.cookiebot.com` + `googletagmanager.com` and nonce the JSON-LD/inline scripts.

### DSGVO / data-processing notes
- Processors in use: **Vercel** (hosting, EU-US DPF-certified), **Supabase** (`kjschlicrafsdwwkxecm`, region Frankfurt), **Resend** (transactional mail, EU-US DPF), **Sanity** (CMS, Norway/EEA), **Cookiebot/Cybot** (consent management, Denmark/EEA), and — **only after the visitor consents** — **Google Analytics 4** (Google Ireland; US transfer under EU-US DPF). DPAs for Vercel / Supabase / Resend / Cookiebot / Google must be accepted in each provider's dashboard — these are click-through actions outside this repo.
- Transactional mail sends from the verified **`glockner.ai`** domain (`RESEND_FROM_EMAIL = Glockner AI <a.unterkofler@glockner.ai>`, reply-to `support@glocknerdigital.at`); see the "Resend setup (live)" note under Booking + Contact flow.
- **Known open gap:** fonts are loaded from the Google Fonts CDN via a `<link>` in `layout.tsx`. Dynamic Google-Fonts embedding is a documented DSGVO risk (LG München I, 3 O 17493/20). The compliant fix is to self-host the font files (`public/fonts/` + `next/font/local`); not yet done.

### Address (Klagenfurt office)
**Confirmed correct by the user (2026-05-31): `Sankt Ruprechter Straße 90, 9020 Klagenfurt`** — used in `Footer.tsx`, `ueber-uns/page.tsx`, and the second address in `organizationJsonLd()` (`src/lib/seo.ts`). The global `~/.claude/CLAUDE.md` brand profile still lists the older `Haraldweg 26/10` — ignore it; Sankt Ruprechter is current. Wien HQ / legal seat: `Blumauergasse 23/12, 1020 Wien`. (`kontakt/page.tsx` no longer carries an address block — it's hero-only; the Footer owns the NAP.)

## Environment Variables

Required in `.env.local` (and on Vercel):
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_SANITY_PROJECT_ID    # pdjtv2pg
NEXT_PUBLIC_SANITY_DATASET       # production
RESEND_API_KEY                   # transactional email (contact + booking) — empty = dev-mode (logs only)
RESEND_FROM_EMAIL                # "Glockner AI <a.unterkofler@glockner.ai>" (glockner.ai is the verified Resend domain). Empty → falls back to onboarding@resend.dev
```

## Companion artifacts (outside this codebase)

- **`QA-TODO.md`** at the repo root is the static, grouped output of an end-to-end QA audit (Desktop 1440×900 + Mobile 390×844) of the Lux preview and `/digital/*` pages. Items are labelled **Agent**, organized into A · Brand & Inhalt (Critical) → B · UX-Funktional (Important) → C · Layout & Polish → D · SEO. Use it as the source of truth when picking up open polish work; cross-reference `qa-d-*.png` / `qa-m-*.png` screenshots in the repo root.
- **Live QA-Board: `glockner-todo`** — separate Next.js project at sibling path `../glockner-todo/`, deployed to **https://glockner-todo.vercel.app** (PIN `9595`). Same content as `QA-TODO.md` but interactive (status pills, comments, drag-and-drop, DE/EN, dark/light), branded in Aurum on dark navy with Fraunces + DM Sans. Multi-tenant Supabase: shares the `mhybegxcwoasofseeoza` project with `granat-todo` and `arldelima-todos` via table prefix `glockner_items` / `glockner_comments` / `glockner_sections`. **Never** rename those tables to the unprefixed forms — those belong to a different tenant. See `../glockner-todo/CLAUDE.md` for the full board architecture.

## Windows / dev-server quirks
- The Bash tool runs in a sandbox; `rm -rf` is denied. Use the dedicated tools (`Read`, `Write`, `Edit`) for file ops.
- When `npm run dev` complains "Another next dev server is already running" with a `PID:`, kill it via `taskkill //PID <pid> //F` (note the double slash for Git-Bash on Windows) before restarting.
- `.env.local` changes are only picked up on dev-server restart.
