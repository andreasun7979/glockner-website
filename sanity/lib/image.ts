import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source: { asset: { _ref: string } }) {
  if (!builder) return { url: () => "" };
  return builder.image(source);
}
