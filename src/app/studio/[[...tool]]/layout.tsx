import { metadata as studioMetadata, viewport as studioViewport, NextStudioLayout } from "next-sanity/studio";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Sanity Studio | Glockner AI",
};

export const viewport: Viewport = {
  ...studioViewport as Viewport,
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NextStudioLayout>{children}</NextStudioLayout>;
}
