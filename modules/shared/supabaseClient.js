// modules/shared/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

let SUPABASE_CLIENT = null;

/**
 * Get a singleton public Supabase client (anon key).
 * Safe to import in client components.
 */
export function getSupabaseClient() {
  if (SUPABASE_CLIENT) return SUPABASE_CLIENT;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    // In dev we warn; in production you should ensure envs are present.
    console.warn(
      'Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. ' +
        'Make sure .env.local has these values and restart dev server.',
    );
    return null;
  }

  SUPABASE_CLIENT = createClient(url, key, {
    auth: {
      // default behavior; you can configure persistence etc. here
    },
  });

  return SUPABASE_CLIENT;
}

export default getSupabaseClient();
