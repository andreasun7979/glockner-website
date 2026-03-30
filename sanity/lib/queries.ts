import { sanityClient } from "./client";

export async function getHomepage() {
  if (!sanityClient) return null;
  return sanityClient.fetch(
    `*[_type == "homepage" && _id == "homepage"][0]{
      heroBadge, heroHeading, heroHeadingAccent, heroDescription, heroCtaText, heroCtaSecondary,
      comparisonHeading, comparisonDescription, withoutKI, withKI,
      benefitsHeading, benefitsDescription, benefits,
      pillarsHeading, pillarsDescription, pillars,
      packagesHeading, packagesDescription, packages,
      useCasesHeading, useCases,
      roadmapHeading, roadmapDescription, roadmapSteps,
      ctaHeading, ctaDescription, ctaButtonText
    }`,
  );
}

export async function getServicePageById(documentId: string) {
  if (!sanityClient) return null;
  return sanityClient.fetch(
    `*[_type == "servicePage" && _id == $id][0]{
      title,
      heroBadge, heroHeading, heroHeadingAccent, heroDescription, heroCtaText,
      packagesHeading, packagesDescription, packages,
      roadmapHeading, roadmapSteps,
      ctaHeading, ctaDescription, ctaButtonText
    }`,
    { id: documentId },
  );
}
