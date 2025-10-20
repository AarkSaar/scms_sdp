import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/modules/shared/supabaseClient';
import { ensureProfileForAuthUser } from '@/modules/profiles/services/profilesService';

export async function POST(request) {
  try {
    const body = await request.json();
    const email = (body.email || '').toString().trim();
    const password = (body.password || '').toString();

    if (!email || !password) {
      return NextResponse.json({ error: 'email and password required' }, { status: 400 });
    }

    const supabaseClient = await getSupabaseClient();

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
