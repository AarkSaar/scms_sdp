// modules/shared/supabaseAdmin.js
// import { createClient } from '@supabase/supabase-js';

// const Admin = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.SUPABASE_SERVICE_ROLE_KEY,
//   {
//     // Optional: set global options here.
//     auth: { persistSession: false },
//   },
// );

// export default Admin;

// modules/shared/supabaseAdmin.js
import { createClient } from '@supabase/supabase-js';

/**
 * Returns a singleton Supabase client using the SERVICE_ROLE key.
 * This MUST only be used on server-side code (API routes, server actions).
 *
 * Use: const supabaseAdmin = getSupabaseAdmin();
 */
let _admin = null;

export function getSupabaseAdmin() {
  if (_admin) return _admin;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL; // still safe to read server-side
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      'Missing SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_URL. Set SUPABASE_SERVICE_ROLE_KEY in server environment (Vercel secrets).',
    );
  }

  _admin = createClient(url, serviceKey, {
    // for admin usage, you may want to disable auth persistence
    // or set other server-side options here
  });

  return _admin;
}

export default getSupabaseAdmin;
