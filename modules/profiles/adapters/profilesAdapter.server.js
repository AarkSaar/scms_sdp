// modules/profiles/services/profilesService.js
import { getSupabaseAdmin } from '@/modules/shared/supabaseAdmin';

/**
 * Upsert a profile row for a Supabase auth user.
 */
export async function ensureProfileForAuthUser(user, extra = {}) {
  const supabaseAdmin = await getSupabaseAdmin();
  if (!user || !user.id) {
    throw new Error('ensureProfileForAuthUser: missing user.id');
  }
  const id = user.id; // uuid
  const email = user.email ?? (user.user_metadata && user.user_metadata.email) ?? null;
  const name =
    user.user_metadata?.full_name ?? user.user_metadata?.name ?? user.name ?? extra?.name ?? null;
  const username = user.username ?? extra?.username ?? null;

  const row = {
    id,
    email,
    name,
    username,
    role_id: extra.role_id ?? 'role_user',
    metadata: extra.metadata ?? {},
    avatar_url: extra.avatar_url ?? null,
    created_at: new Date().toISOString(),
  };

  const { data, error } = await supabaseAdmin
    .from('profiles')
    .upsert(row, { returning: 'representation' }) // upsert the full row
    .select('*');

  if (error) {
    throw error;
  }

  return data?.[0] ?? null;
}
