import { NextResponse } from 'next/server';
import getSupabaseAdmin from '@/modules/shared/supabaseAdmin';
import { ensureProfileForAuthUser } from '@/modules/profiles/services/profilesService.server';

export async function POST(request) {
  try {
    const { name, email, password, username } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }

    const supabaseAdmin = getSupabaseAdmin();

    const { data: createData, error: createErr } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name: name, username },
    });

    if (createErr) {
      console.error('admin.createUser error', createErr);
      return NextResponse.json({ error: createErr.message }, { status: 500 });
    }

    const createdUser = createData?.user ?? createData;
    if (!createdUser?.id) {
      console.error('No user id returned', createData);
      return NextResponse.json({ error: 'User creation failed' }, { status: 500 });
    }

    // Upsert profile
    let profile = null;
    try {
      profile = await ensureProfileForAuthUser(
        { id: createdUser.id, email: createdUser.email, name, username },
        { role_id: 'role_student' },
      );
    } catch (e) {
      console.warn('Profile upsert failed (non-fatal)', e);
      // we proceed anyway
    }

    // *** Generate a session for this new user ***
    // Approach: Use magic link / verify flow to create a session
    const { data: linkData, error: linkError } = await supabaseAdmin.auth.admin.generateLink({
      type: 'magiclink',
      email,
    });
    if (linkError || !linkData?.properties?.hashed_token) {
      console.error('generateLink failed', linkError);
      return NextResponse.json({ error: 'Failed to generate login link' }, { status: 500 });
    }

    // Now verify that link to turn it into a session
    const verifyResp = await supabaseAdmin.auth.verifyOtp({
      token_hash: linkData.properties.hashed_token,
      type: 'magiclink',
    });
    const session = verifyResp?.data?.session;
    if (!session) {
      console.error('verifyOtp did not return session', verifyResp);
      return NextResponse.json({ error: 'Failed to create session' }, { status: 500 });
    }

    // Return profile + session tokens to client
    return NextResponse.json(
      {
        data: {
          profile,
          session: {
            access_token: session.access_token,
            refresh_token: session.refresh_token,
          },
        },
      },
      { status: 201 },
    );
  } catch (err) {
    console.error('signup route caught', err);
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
