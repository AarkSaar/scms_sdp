// app/api/issues/[id]/route.js
import { NextResponse } from 'next/server';
import getSupabaseAdmin from '@/modules/shared/supabaseAdmin.js';

export async function GET(req, { params }) {
  try {
    // 1. Await params (Required in Next.js 15)
    const { id } = await params;

    // 2. Validate ID
    if (!id) {
      return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
    }

    const supabaseAdmin = await getSupabaseAdmin();

    // 3. Fetch Data
    const { data: issue, error } = await supabaseAdmin
      .from('issues')
      .select(
        `
        *,
        creator:creator_id ( id, name, avatar_url ),
        department:departments!issues_department_id_fkey (
          id, name,
          sga_members ( profiles (id, name, avatar_url) )
        )
      `,
      )
      .eq('id', id)
      .single();

    if (error || !issue) {
      console.error('Issue fetch error:', error);
      return NextResponse.json({ error: 'Issue not found' }, { status: 404 });
    }

    // 4. Handle Anonymous
    let isStudentCreator = false;
    if (issue.creator_id) {
      const { data: student } = await supabaseAdmin
        .from('students')
        .select('id')
        .eq('id', issue.creator_id)
        .single();
      if (student) isStudentCreator = true;
    }

    if (issue.anonymous && isStudentCreator) {
      issue.creator = { id: 'anonymous', name: 'Anonymous Student', avatar_url: null };
      issue.creator_id = 'anonymous';
    }

    // 5. Format Participants
    const participants =
      issue.department?.sga_members
        ?.map((m) => ({
          id: m.profiles?.id,
          name: m.profiles?.name,
          avatarUrl: m.profiles?.avatar_url,
        }))
        .filter(Boolean) || [];

    const formatted = {
      ...issue,
      department: { id: issue.department?.id, name: issue.department?.name || 'None' },
      participants,
      start: issue.created_at,
      end: issue.closed_at,
      activity: [
        {
          actor: issue.creator?.name || 'Unknown',
          text: 'created this issue',
          when: new Date(issue.created_at).toLocaleDateString(),
        },
      ],
    };

    return NextResponse.json(formatted);
  } catch (err) {
    console.error('[GET Issue]', err);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
