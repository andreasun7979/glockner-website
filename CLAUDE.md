# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build (uses Turbopack)
npm run start     # Serve production build
npm run lint      # ESLint (next/core-web-vitals + typescript)
npx vercel --prod # Deploy to Vercel production
```

## Architecture

**Next.js 16.2.1 App Router** marketing site for Glockner AI (Austrian KI consulting firm). All content is in German.

### Key integrations
- **Sanity CMS** (v5) at `/studio` — homepage, service pages, blog, team, settings. Config in `sanity.config.ts` (hardcoded projectId `pdjtv2pg`, basePath `/studio`), schemas in `sanity/schemas/`. Sanity client in `sanity/lib/client.ts` returns `null` when projectId is missing (defensive for builds). Queries in `sanity/lib/queries.ts`.
- **Supabase** — contact form submissions stored in `leads` table via `/api/contact` POST endpoint. Client in `src/lib/supabase.ts`.

### CMS content pattern
Pages fetch from Sanity with hardcoded fallbacks. Example:
```tsx
const cms = await getHomepage().catch(() => null);
const heading = cms?.heroHeading || "Fallback text";
```
Singleton document IDs: `homepage`, `service-ki-beratung`, `service-ecommerce`, `service-gewerbe`, `service-gesundheit`.

### Styling
- **Tailwind CSS 4** with `@tailwindcss/postcss` — no `tailwind.config` file; custom colors defined via `@theme inline` in `globals.css`.
- Brand colors: `brand-blue` (#3b82f6), `brand-cyan` (#06b6d4), `brand-dark` (#020617). CTA buttons use blue-to-cyan gradient with `.cta-glow` class. Orange (#f0a173) is a subtle background accent only — never for buttons or interactive elements.
- Custom utility classes: `.glass` (glassmorphism), `.glass-hover` (cyan border on hover + lift), `.gradient-text` (blue→cyan), `.cta-glow` (hover glow effect), `.section-line` (gradient divider), `.dot-grid` (background pattern), `.accent-bar` (left border accent).
- Fonts: Montserrat (headings via CSS rule), DM Sans (body) — loaded via Google Fonts CDN `<link>` in layout.tsx, not `next/font/google` (http2 build issue on Windows).
- Scroll animations: `FadeIn` client component uses IntersectionObserver with staggered delays.

### Routing
- `/` — homepage with hero, comparison, benefits, packages, use cases marquee, roadmap
- `/leistungen` — services overview linking to 4 subpages
- `/leistungen/{ki-beratung,ecommerce,gewerbe,gesundheit}` — individual service pages (CMS-connected)
- `/kontakt` — contact form (client component `ContactForm.tsx`)
- `/ueber-uns` — about page
- `/blog` — placeholder (content via Sanity when connected)
- `/studio/[[...tool]]` — Sanity Studio (uses `NextStudioLayout` from next-sanity)

### Path alias
`@/*` maps to `./src/*` (tsconfig paths).

## Environment Variables

Required in `.env.local` (and on Vercel):
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_SANITY_PROJECT_ID    # pdjtv2pg
NEXT_PUBLIC_SANITY_DATASET       # production
```
