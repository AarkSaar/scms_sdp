// app/api/auth/signup/route.js
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/modules/shared/supabaseAdmin';
import { ensureProfileForAuthUser } from '@/modules/profiles/services/profilesService';

/**
 * POST /api/auth/signup
 * body: { email, password, name? }
 *
 * Server creates the user using the SERVICE ROLE key (supabaseAdmin.auth.admin.createUser).
 * Then creates/upserts the public.profiles row.
 *
 * NOTE: Using the service role lets the server create users without email verification flow.
 * If you prefer email confirmation flows, use the client-side signUp or set email_confirm to false/true accordingly.
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const email = (body.email || '').toString().trim();
    const password = (body.password || '').toString();
    const name = body.name ? String(body.name).trim() : null;

    if (!email || !password) {
      return NextResponse.json({ error: 'email and password required' }, { status: 400 });
    }

    // Create user via admin API (service role)
    // NOTE: API call name depends on supabase-js version; admin.createUser is supported in v2.
    const { data, error: createErr } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // optional; set to false if you want email confirmation flow
    });

    if (createErr) {
      console.error('supabase admin createUser error', createErr);
      return NextResponse.json(
        { error: createErr.message || 'Failed to create user' },
        { status: 500 },
      );
    }

    const createdUser = data.user ?? data; // structure varies by sdk version

    if (!createdUser?.id) {
      return NextResponse.json({ error: 'Failed to create user (no id)' }, { status: 500 });
    }

    // Create a profile row
    await ensureProfileForAuthUser({
      id: createdUser.id,
      email: createdUser.email,
      name,
    });

    // Optionally, you could also issue a session token here. For now we return limited info.
    return NextResponse.json(
      { data: { id: createdUser.id, email: createdUser.email } },
      { status: 201 },
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}
