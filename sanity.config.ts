"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "glockner-studio",
  title: "Glockner AI Studio",
  projectId: "pdjtv2pg",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Inhalte")
          .items([
            // Homepage
            S.listItem()
              .title("Startseite")
              .id("homepage")
              .child(
                S.document()
                  .schemaType("homepage")
                  .documentId("homepage")
                  .title("Startseite bearbeiten"),
              ),

            S.divider(),

            // Service pages as individual singletons
            S.listItem()
              .title("Dienstleistungs-Seiten")
              .child(
                S.list()
                  .title("Dienstleistungs-Seiten")
                  .items([
                    S.listItem()
                      .title("Beratung Künstliche Intelligenz")
                      .id("service-ki-beratung")
                      .child(
                        S.document()
                          .schemaType("servicePage")
                          .documentId("service-ki-beratung")
                          .title("KI-Beratung bearbeiten"),
                      ),
                    S.listItem()
                      .title("Beratung eCommerce")
                      .id("service-ecommerce")
                      .child(
                        S.document()
                          .schemaType("servicePage")
                          .documentId("service-ecommerce")
                          .title("eCommerce bearbeiten"),
                      ),
                    S.listItem()
                      .title("Beratung Gewerbebetrieb")
                      .id("service-gewerbe")
                      .child(
                        S.document()
                          .schemaType("servicePage")
                          .documentId("service-gewerbe")
                          .title("Gewerbebetrieb bearbeiten"),
                      ),
                    S.listItem()
                      .title("Beratung Ärzte & Gesundheit")
                      .id("service-gesundheit")
                      .child(
                        S.document()
                          .schemaType("servicePage")
                          .documentId("service-gesundheit")
                          .title("Gesundheit bearbeiten"),
                      ),
                  ]),
              ),

            S.divider(),

            // Blog
            S.listItem()
              .title("Blog-Beiträge")
              .schemaType("post")
              .child(S.documentTypeList("post").title("Blog-Beiträge")),

            // Team
            S.listItem()
              .title("Team-Mitglieder")
              .schemaType("teamMember")
              .child(S.documentTypeList("teamMember").title("Team-Mitglieder")),

            // Settings
            S.listItem()
              .title("Website-Einstellungen")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
                  .title("Einstellungen"),
              ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
