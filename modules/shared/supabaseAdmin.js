// modules/shared/supabaseAdmin.js
let _admin = null;

/**
 * getSupabaseAdmin()
 * returns a singleton Supabase client using the SERVICE_ROLE key.
 * Usage: const supabaseAdmin = await getSupabaseAdmin(); (server only)
 */
export async function getSupabaseAdmin() {
  if (_admin) return _admin;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      'Missing SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_URL. Set SUPABASE_SERVICE_ROLE_KEY in server environment.',
    );
  }

  const mod = await import('@supabase/supabase-js');
  const createClient = mod.createClient ?? mod.default?.createClient ?? mod.default;

  _admin = createClient(url, serviceKey, {
    // server-side options if needed
  });

  return _admin;
}

export default getSupabaseAdmin;
