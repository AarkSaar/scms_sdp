// app/api/auth/signin/route.js
import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/modules/shared/supabaseClient';
import { ensureProfileForAuthUser } from '@/modules/profiles/services/profilesService';

/**
 * POST /api/auth/signin
 * body: { email, password }
 * Returns the session data from Supabase if successful.
 *
 * This route uses the anon key client to perform sign-in and returns the session object.
 * (You could also let client-side code call supabaseClient.auth.signInWithPassword directly,
 *  but this centralizes the call and allows server-side post-processing like ensuring profiles.)
 */
export async function POST(request) {
  const supabaseClient = getSupabaseClient();
  try {
    const body = await request.json();
    const email = (body.email || '').toString().trim();
    const password = (body.password || '').toString();

    if (!email || !password) {
      return NextResponse.json({ error: 'email and password required' }, { status: 400 });
    }

    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('signIn error', error);
      return NextResponse.json({ error: error.message || 'Sign in failed' }, { status: 401 });
    }

    const session = data?.session ?? null;
    const user = data?.user ?? session?.user ?? null;

    // Ensure the profile exists (upsert). pass-through errors non-fatal.
    if (user?.id) {
      try {
        await ensureProfileForAuthUser(user);
      } catch (e) {
        console.warn('failed to upsert profile after sign in', e);
      }
    }

    return NextResponse.json({ data: { session, user } }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}
