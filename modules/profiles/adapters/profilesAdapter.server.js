// modules/profiles/adapters/profilesAdapter.server.js
import { supabaseAdmin } from '@/modules/shared/supabaseAdmin';

/**
 * Insert or update a profile row keyed by auth.users.id (uuid).
 * Uses service-role client (supabaseAdmin).
 *
 * profile: { id: uuid, email?: string, name?: string, role_id?: string, avatar_url?: string }
 */
export async function upsertProfile(profile) {
  const row = {
    id: profile.id,
    email: profile.email ?? null,
    name: profile.name ?? null,
    role_id: profile.role_id ?? null,
    avatar_url: profile.avatar_url ?? null,
    metadata: profile.metadata ?? {},
    created_at: profile.created_at ?? new Date().toISOString(),
  };

  // upsert (insert or update) — primary key is id (uuid)
  const { data, error } = await supabaseAdmin
    .from('profiles')
    .upsert(row, { onConflict: 'id' })
    .select()
    .single();

  if (error) throw error;
  return data;
}

/** fetch profile by uuid */
export async function getProfileById(id) {
  const { data, error } = await supabaseAdmin
    .from('profiles')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) throw error;
  return data;
}
