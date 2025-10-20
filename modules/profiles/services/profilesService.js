// modules/profiles/services/profilesService.js

import { getSupabaseAdmin } from '@/modules/shared/supabaseAdmin';

/**
 * Upsert a profile row for a Supabase auth user.
 * - user object should contain at least { id, email, user_metadata?, email }
 * - Runs with the service role key (supabaseAdmin) so it bypasses RLS and is safe.
 */
export async function ensureProfileForAuthUser(user, extra = {}) {
  const supabaseAdmin = getSupabaseAdmin();
  if (!user || !user.id) {
    throw new Error('ensureProfileForAuthUser: missing user.id');
  }
  const id = user.id; // uuid string from auth.users
  const email = user.email ?? (user.user_metadata && user.user_metadata.email) ?? null;
  const name =
    user.user_metadata?.full_name ?? user.user_metadata?.name ?? user.name ?? extra?.name ?? null;

  const row = {
    id,
    email,
    name,
    role_id: extra.role_id ?? 'role_user', // default role value (adjust as desired)
    metadata: extra.metadata ?? {},
    avatar_url: extra.avatar_url ?? null,
    created_at: new Date().toISOString(),
  };

  // Upsert (insert if missing, update if exists)
  const { data, error } = await supabaseAdmin
    .from('profiles')
    .upsert(row, { returning: 'representation' })
    .select('*');

  if (error) {
    // bubble error up — caller can log or ignore
    throw error;
  }

  return data?.[0] ?? null;
}
