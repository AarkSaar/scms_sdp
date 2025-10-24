// modules/profiles/adapters/profilesAdapter.client.js
'use client'; // this file is intended to be used from client code

import { getSupabaseClient } from '@/modules/shared/supabaseClient';

/**
 * Fetch the profile row for the given user id using the public client.
 * This respects RLS (auth.uid()) and matches the simple behaviour from your test-login script.
 *
 * Returns: { profile, error }
 */
export async function getProfileByIdClient(userId) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    throw new Error('Supabase client not configured (missing NEXT_PUBLIC envs)');
  }

  // Defensive: single select like your test script
  const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single();

  if (error) {
    // Allow callers to decide how to treat not-found vs permission errors.
    // For debugging, rethrow so the provider can log and act.
    throw error;
  }

  return data || null;
}
