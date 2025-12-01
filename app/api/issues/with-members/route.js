// app/api/issues/with-members/route.js
import { NextResponse } from 'next/server';
import getSupabaseAdmin from '@/modules/shared/supabaseAdmin.js';

export async function GET(req) {
  try {
    const supabaseAdmin = await getSupabaseAdmin();

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit') || '500', 10);

    // 1) load all student ids (we use this to filter anonymous student posts)
    const { data: studentRows, error: studentError } = await supabaseAdmin
      .from('students')
      .select('id');

    if (studentError) {
      console.error('[api/issues/with-members] students fetch error', studentError);
      return NextResponse.json({ error: studentError.message }, { status: 500 });
    }

    const studentIdSet = new Set((studentRows || []).map((r) => String(r.id)));

    // 2) Single nested query to get everything at once
    const { data, error } = await supabaseAdmin
      .from('issues')
      .select(
        `
        id,
        title,
        description,
        status,
        priority,
        department_id,
        created_at,
        closed_at,
        attachments,
        anonymous,
        creator_id,
        departments!issues_department_id_fkey (
          id,
          name,
          sga_members (
            id,
            position,
            profiles (
              id,
              name,
              avatar_url
            )
          )
        )
      `,
      )
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('[api/issues/with-members] error', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // 3) Transform the data for easier consumption and filter anonymous student posts
    const transformed = (data || [])
      .map((issue) => {
        const department = issue.departments;
        const members =
          department?.sga_members
            ?.map((sm) => ({
              id: sm.profiles?.id,
              name: sm.profiles?.name || 'Unknown',
              avatarUrl: sm.profiles?.avatar_url || null,
              position: sm.position,
            }))
            .filter((m) => m.id) || [];

        return {
          ...issue,
          departmentMembers: members,
          departmentName: department?.name || 'None',
        };
      })
      // filter out issues that are anonymous and whose creator is a student
      .filter((issue) => {
        if (!issue) return false;
        const isAnonymous = !!issue.anonymous;
        const creatorId = issue.creator_id ? String(issue.creator_id) : null;
        if (isAnonymous && creatorId && studentIdSet.has(creatorId)) {
          // exclude anonymous issues created by students
          return false;
        }
        return true;
      });

    return NextResponse.json({ issues: transformed }, { status: 200 });
  } catch (err) {
    console.error('[api/issues/with-members] unexpected', err);
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}
