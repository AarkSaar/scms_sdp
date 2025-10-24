// app/api/departments/[id]/members/route.js
import { NextResponse } from 'next/server';
import getSupabaseAdmin from '@/modules/shared/supabaseAdmin.js';

export async function GET(req, { params }) {
  try {
    // IMPORTANT: params is async in new Next versions — await before using.
    const p = await params;
    const departmentId = p?.id;

    if (!departmentId) {
      return NextResponse.json({ error: 'Missing department id' }, { status: 400 });
    }

    // Quick short-circuit for your 'none' sentinel
    if (departmentId === 'none') {
      return NextResponse.json({ members: [] }, { status: 200 });
    }

    const supabaseAdmin = await getSupabaseAdmin();

    // Approach A: try relationship select (if sga_members -> profiles relationship exists)
    // This selects the related profile for each sga_members row.
    const { data, error } = await supabaseAdmin
      .from('sga_members')
      .select('profiles(id, name, avatar_url)')
      .eq('department_id', departmentId);

    if (error) {
      console.error('[api/departments/members] supabase error', error);
      return NextResponse.json({ error: error.message || 'DB error' }, { status: 500 });
    }

    // Normalize returned rows -> members array
    const members =
      (data || [])
        .map((r) => r.profiles)
        .filter(Boolean)
        .map((p) => ({
          id: p.id,
          name: p.name ?? 'Unknown',
          avatarUrl: p.avatar_url ?? p.avatarUrl ?? null,
        })) || [];

    return NextResponse.json({ members }, { status: 200 });
  } catch (err) {
    console.error('[api/departments/members] unexpected', err);
    return NextResponse.json({ error: err?.message ?? 'Server error' }, { status: 500 });
  }
}
