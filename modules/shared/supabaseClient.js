// modules/shared/supabaseClient.js
// lightweight, async getter that dynamically imports @supabase/supabase-js
let _client = null;

/**
 * getSupabaseClient()
 * returns a singleton Supabase client using the public/anon key.
 * Usage: const supabase = await getSupabaseClient();
 */
export async function getSupabaseClient() {
  if (_client) return _client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      'Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be set.',
    );
  }

  // dynamic import avoids top-level bundling issues
  const mod = await import('@supabase/supabase-js');
  const createClient = mod.createClient ?? mod.default?.createClient ?? mod.default;

  _client = createClient(url, anonKey, {
    // optional options
  });

  return _client;
}

export default getSupabaseClient;
