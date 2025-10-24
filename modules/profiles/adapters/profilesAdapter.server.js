// modules/profiles/adapters/profilesAdapter.server.js
import getSupabaseAdmin from '@/modules/shared/supabaseAdmin';

/**
 * Server-only profile adapter.
 * Use the admin client to bypass RLS for administrative tasks (seed, signup upsert).
 */

// Get profile by auth user id
export async function getProfileById(userId) {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('profiles').select('*').eq('id', userId).single();
  if (error && error.code !== 'PGRST116') {
    // PGRST116 = no rows (not an actual error for our usage)
    console.error('[getProfileById] error', error);
    throw error;
  }
  return data || null;
}

export async function upsertProfile(profileData) {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin
    .from('profiles')
    .upsert(profileData, { returning: 'representation' })
    .select('*');
  if (error) {
    console.error('[upsertProfile] error', error);
    throw error;
  }
  return data?.[0] ?? null;
}

export async function createProfile(profileData) {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('profiles').insert(profileData).select('*').single();
  if (error) {
    console.error('[createProfile] error', error);
    throw error;
  }
  return data;
}
