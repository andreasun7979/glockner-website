import { defineType, defineField } from "sanity";

export default defineType({
  name: "servicePage",
  title: "Dienstleistungs-Seiten",
  type: "document",
  groups: [
    { name: "hero", title: "Hero-Bereich" },
    { name: "pakete", title: "Beratungspakete" },
    { name: "roadmap", title: "Roadmap" },
    { name: "cta", title: "Call-to-Action" },
  ],
  fields: [
    defineField({ name: "title", title: "Seitentitel", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "URL-Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),

    // ── Hero ──
    defineField({ name: "heroBadge", title: "Badge-Text", type: "string", group: "hero" }),
    defineField({ name: "heroHeading", title: "Überschrift", type: "string", group: "hero" }),
    defineField({ name: "heroHeadingAccent", title: "Überschrift (farbig)", type: "string", group: "hero" }),
    defineField({ name: "heroDescription", title: "Beschreibung", type: "text", rows: 3, group: "hero" }),
    defineField({ name: "heroCtaText", title: "Button-Text", type: "string", group: "hero" }),

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
          defineField({ name: "badge", title: "Badge", type: "string" }),
          defineField({ name: "title", title: "Titel", type: "string" }),
          defineField({ name: "subtitle", title: "Untertitel", type: "string" }),
          defineField({ name: "price", title: "Preis", type: "string" }),
          defineField({ name: "originalPrice", title: "Originalpreis", type: "string" }),
          defineField({ name: "popular", title: "Beliebt?", type: "boolean", initialValue: false }),
          defineField({ name: "features", title: "Features", type: "array", of: [{ type: "string" }] }),
        ],
        preview: { select: { title: "title", subtitle: "badge" } },
      }],
    }),

    // ── Roadmap ──
    defineField({ name: "roadmapHeading", title: "Überschrift", type: "string", group: "roadmap" }),
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
    select: { title: "title" },
  },
});
