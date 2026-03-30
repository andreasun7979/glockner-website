import { createClient } from "next-sanity";
import { apiVersion } from "../env";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;
