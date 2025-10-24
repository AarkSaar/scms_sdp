// app/api/auth/signin/route.js
import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/modules/shared/supabaseClient';
import { ensureProfileForAuthUser } from '@/modules/profiles/services/profilesService.server';

export async function POST(request) {
  try {
    const body = await request.json();
    const email = (body.email || '').toString().trim();
    const password = (body.password || '').toString();

    if (!email || !password) {
      return NextResponse.json({ error: 'email and password required' }, { status: 400 });
    }

    const supabaseClient = getSupabaseClient();
    if (!supabaseClient) {
      return NextResponse.json(
        { error: 'Supabase client not configured (missing NEXT_PUBLIC_* env vars)' },
        { status: 500 },
      );
    }

    // Use the anon client on the server to sign in the user and get the session object
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

    // Ensure profile exists (non-fatal if it fails)
    if (user?.id) {
      try {
        await ensureProfileForAuthUser(user);
      } catch (e) {
        console.warn('failed to upsert profile after sign in', e);
      }
    }

    // Return the session and user to the client. Client will call supabase.auth.setSession(...)
    return NextResponse.json({ data: { session, user } }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}
