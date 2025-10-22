// app/api/signup/route.js
import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/modules/shared/supabaseAdmin';
import { ensureProfileForAuthUser } from '@/modules/profiles/services/profilesService';

export async function POST(request) {
  try {
    const body = await request.json();
    const email = (body.email || '').toString().trim();
    const password = (body.password || '').toString();
    const name = body.name ? String(body.name).trim() : null;
    const username = body.username ? String(body.username).trim() : null;

    if (!email || !password) {
      return NextResponse.json({ error: 'email and password required' }, { status: 400 });
    }

    // Create admin client
    let supabaseAdmin;
    try {
      supabaseAdmin = await getSupabaseAdmin();
    } catch (e) {
      console.error('Missing SUPABASE_SERVICE_ROLE_KEY or client initialization failed:', e);
      return NextResponse.json(
        { error: 'Server config error. Contact the administrator.' },
        { status: 500 },
      );
    }

    // create user using the admin API
    const { data, error: createErr } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // change as desired
    });

    if (createErr) {
      console.error('supabase admin createUser error', createErr);
      return NextResponse.json(
        { error: createErr.message || 'Failed to create user' },
        { status: 500 },
      );
    }

    const createdUser = data?.user ?? data;
    if (!createdUser?.id) {
      console.error('createUser did not return user id', data);
      return NextResponse.json({ error: 'Failed to create user (no id)' }, { status: 500 });
    }

    // upsert profile via service role: pass username and name
    try {
      await ensureProfileForAuthUser(
        { id: createdUser.id, email: createdUser.email, name, username },
        { role_id: 'role_user' },
      );
    } catch (e) {
      console.warn('ensureProfileForAuthUser failed (non-fatal):', e);
      // continue — the user was created in auth, but profile upsert failed
    }

    return NextResponse.json(
      { data: { id: createdUser.id, email: createdUser.email } },
      { status: 201 },
    );
  } catch (err) {
    console.error('signup route error', err);
    // return JSON so client doesn't attempt to parse HTML
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}
