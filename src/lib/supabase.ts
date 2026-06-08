import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Returns `null` when the Supabase env vars are missing (e.g. preview/CI builds
 * without the secrets). Consumers already guard with `if (supabase)`, so a
 * missing client degrades gracefully instead of throwing at module load.
 * Mirrors the defensive Sanity client pattern.
 */
export const supabase = url && anonKey ? createClient(url, anonKey) : null;
