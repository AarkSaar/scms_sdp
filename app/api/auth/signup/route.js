import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/modules/shared/supabaseAdmin';
import { ensureProfileForAuthUser } from '@/modules/profiles/services/profilesService';

export async function POST(request) {
  try {
    const body = await request.json();
    const email = (body.email || '').toString().trim();
    const password = (body.password || '').toString();
    const name = body.name ? String(body.name).trim() : null;

    if (!email || !password) {
      return NextResponse.json({ error: 'email and password required' }, { status: 400 });
    }

    const supabaseAdmin = await getSupabaseAdmin();

    // admin.createUser (supabase-js v2) — might vary with SDK version
    const { data, error: createErr } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (createErr) {
      console.error('supabase admin createUser error', createErr);
      return NextResponse.json(
        { error: createErr.message || 'Failed to create user' },
        { status: 500 },
      );
    }

    const createdUser = data.user ?? data;

    if (!createdUser?.id) {
      return NextResponse.json({ error: 'Failed to create user (no id)' }, { status: 500 });
    }

    await ensureProfileForAuthUser(
      { id: createdUser.id, email: createdUser.email, name },
      { role_id: 'role_user' },
    );

    return NextResponse.json(
      { data: { id: createdUser.id, email: createdUser.email } },
      { status: 201 },
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}
