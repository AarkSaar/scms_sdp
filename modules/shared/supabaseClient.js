// ⦁	modules/shared/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// const client = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
// );

// export default client;

// modules/shared/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

/**
 * Returns a singleton Supabase client for public/anon usage.
 * Will throw a helpful error if required env vars are missing.
 *
 * Use: const supabase = getSupabaseClient();
 */
let _client = null;

export function getSupabaseClient() {
  if (_client) return _client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    // Helpful build-time friendly message
    throw new Error(
      'Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be set.',
    );
  }

  _client = createClient(url, anonKey, {
    // optional: set any global options here
    // auth: { persistSession: true }
  });

  return _client;
}

export default getSupabaseClient; // convenience default
