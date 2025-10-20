// modules/shared/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

let SUPABASE_CLIENT = null;

/**
 * Returns a singleton Supabase client meant for public/anon usage.
 * Uses NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.
 */
export function getSupabaseClient() {
  if (SUPABASE_CLIENT) return SUPABASE_CLIENT;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    // Don't throw here — return null so caller can handle gracefully.
    // But log to make debugging easier.
    // In production builds, missing NEXT_PUBLIC_* is the most common cause of the error you saw.
    // Throwing here would crash builds; prefer to surface but let code handle it.
    // If you want to fail fast uncomment the throw below.
    // throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY');
    // eslint-disable-next-line no-console
    console.warn(
      'Supabase public env vars are missing: NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY',
    );
    return null;
  }

  SUPABASE_CLIENT = createClient(url, key, {
    auth: {
      // configure as you prefer, e.g. detectSessionInUrl: false
      // detectSessionInUrl: false,
    },
  });

  return SUPABASE_CLIENT;
}

// convenience default export
const supabase = getSupabaseClient();
export default supabase;
