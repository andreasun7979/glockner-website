import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Website Einstellungen",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Website-Titel",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Beschreibung (SEO)",
      type: "text",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "email",
      title: "E-Mail",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Telefon",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Adresse",
      type: "text",
    }),
  ],
});
