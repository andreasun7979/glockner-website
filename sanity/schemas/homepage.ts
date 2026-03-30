import { defineType, defineField } from "sanity";

export default defineType({
  name: "homepage",
  title: "Startseite",
  type: "document",
  groups: [
    { name: "hero", title: "Hero-Bereich" },
    { name: "vergleich", title: "Vergleich (Ohne/Mit KI)" },
    { name: "vorteile", title: "Vorteile" },
    { name: "konzept", title: "Konzept / Säulen" },
    { name: "pakete", title: "Beratungspakete" },
    { name: "useCases", title: "Use Cases" },
    { name: "roadmap", title: "Roadmap" },
    { name: "cta", title: "Call-to-Action" },
  ],
  fields: [
    // ── Hero ──
    defineField({ name: "heroBadge", title: "Badge-Text", type: "string", group: "hero", initialValue: "KI-Beratung & Automatisierung" }),
    defineField({ name: "heroHeading", title: "Überschrift (Zeile 1)", type: "string", group: "hero", initialValue: "Die Ära der KI ist da." }),
    defineField({ name: "heroHeadingAccent", title: "Überschrift (farbig, Zeile 2)", type: "string", group: "hero", initialValue: "Wir machen Ihr Unternehmen zukunftsfähig." }),
    defineField({ name: "heroDescription", title: "Beschreibung", type: "text", rows: 3, group: "hero" }),
    defineField({ name: "heroCtaText", title: "Button-Text (primär)", type: "string", group: "hero", initialValue: "Jetzt informieren" }),
    defineField({ name: "heroCtaSecondary", title: "Button-Text (sekundär)", type: "string", group: "hero", initialValue: "Unsere Leistungen" }),

    // ── Vergleich ──
    defineField({ name: "comparisonHeading", title: "Überschrift", type: "string", group: "vergleich", initialValue: "Warum jetzt auf KI setzen?" }),
    defineField({ name: "comparisonDescription", title: "Beschreibung", type: "string", group: "vergleich" }),
    defineField({
      name: "withoutKI",
      title: "Ohne KI-Strategie",
      type: "array",
      group: "vergleich",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "title", title: "Titel", type: "string" }),
          defineField({ name: "desc", title: "Beschreibung", type: "text", rows: 2 }),
        ],
        preview: { select: { title: "title" } },
      }],
    }),
    defineField({
      name: "withKI",
      title: "Mit Glockner AI",
      type: "array",
      group: "vergleich",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "title", title: "Titel", type: "string" }),
          defineField({ name: "desc", title: "Beschreibung", type: "text", rows: 2 }),
        ],
        preview: { select: { title: "title" } },
      }],
    }),

    // ── Vorteile ──
    defineField({ name: "benefitsHeading", title: "Überschrift", type: "string", group: "vorteile" }),
    defineField({ name: "benefitsDescription", title: "Beschreibung", type: "string", group: "vorteile" }),
    defineField({
      name: "benefits",
      title: "Vorteile",
      type: "array",
      group: "vorteile",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "title", title: "Titel", type: "string" }),
          defineField({ name: "desc", title: "Beschreibung", type: "text", rows: 2 }),
        ],
        preview: { select: { title: "title" } },
      }],
    }),

    // ── Konzept ──
    defineField({ name: "pillarsHeading", title: "Überschrift", type: "string", group: "konzept" }),
    defineField({ name: "pillarsDescription", title: "Beschreibung", type: "string", group: "konzept" }),
    defineField({
      name: "pillars",
      title: "Säulen",
      type: "array",
      group: "konzept",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "title", title: "Titel", type: "string" }),
          defineField({ name: "desc", title: "Beschreibung", type: "text", rows: 2 }),
        ],
        preview: { select: { title: "title" } },
      }],
    }),

    // ── Pakete ──
    defineField({ name: "packagesHeading", title: "Überschrift", type: "string", group: "pakete" }),
    defineField({ name: "packagesDescription", title: "Beschreibung", type: "string", group: "pakete" }),
    defineField({
      name: "packages",
      title: "Pakete",
      type: "array",
      group: "pakete",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "badge", title: "Badge (z.B. 80% WKO-Förderung)", type: "string" }),
          defineField({ name: "title", title: "Titel", type: "string" }),
          defineField({ name: "subtitle", title: "Untertitel", type: "string" }),
          defineField({ name: "price", title: "Preis", type: "string" }),
          defineField({ name: "originalPrice", title: "Originalpreis (durchgestrichen)", type: "string" }),
          defineField({ name: "popular", title: "Als beliebt markieren?", type: "boolean", initialValue: false }),
          defineField({ name: "features", title: "Features", type: "array", of: [{ type: "string" }] }),
        ],
        preview: { select: { title: "title", subtitle: "badge" } },
      }],
    }),

    // ── Use Cases ──
    defineField({ name: "useCasesHeading", title: "Überschrift", type: "string", group: "useCases" }),
    defineField({ name: "useCases", title: "Use Cases", type: "array", group: "useCases", of: [{ type: "string" }] }),

    // ── Roadmap ──
    defineField({ name: "roadmapHeading", title: "Überschrift", type: "string", group: "roadmap" }),
    defineField({ name: "roadmapDescription", title: "Beschreibung", type: "string", group: "roadmap" }),
    defineField({
      name: "roadmapSteps",
      title: "Schritte",
      type: "array",
      group: "roadmap",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "title", title: "Titel", type: "string" }),
          defineField({ name: "desc", title: "Beschreibung", type: "text", rows: 3 }),
        ],
        preview: { select: { title: "title" } },
      }],
    }),

    // ── CTA ──
    defineField({ name: "ctaHeading", title: "Überschrift", type: "string", group: "cta" }),
    defineField({ name: "ctaDescription", title: "Beschreibung", type: "text", rows: 2, group: "cta" }),
    defineField({ name: "ctaButtonText", title: "Button-Text", type: "string", group: "cta" }),
  ],
  preview: {
    prepare: () => ({ title: "Startseite" }),
  },
});
