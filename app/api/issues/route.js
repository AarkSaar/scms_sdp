// app/api/issues/route.js
import { NextResponse } from 'next/server';
import getSupabaseAdmin from '@/modules/shared/supabaseAdmin.js';
import { createId } from '@paralleldrive/cuid2';
import { v4 as uuidv4 } from 'uuid';

// Optional helper for readable CUID formatting
function hyphenateByPattern(id, pattern = [8, 4, 4, 4, 5]) {
  if (!id) return id;
  const parts = [];
  let idx = 0;
  for (const len of pattern) {
    if (idx >= id.length) break;
    parts.push(id.slice(idx, idx + len));
    idx += len;
  }
  if (idx < id.length) parts.push(id.slice(idx));
  return parts.join('-');
}

export async function POST(req) {
  try {
    const contentType = req.headers.get('content-type') || '';
    const supabaseAdmin = await getSupabaseAdmin();

    // ✅ If form-data (with attachments)
    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const title = formData.get('title');
      const description = formData.get('description');
      const department_id = formData.get('department_id') || 'none';
      const priority = formData.get('priority') || null;
      const creator_id = formData.get('creator_id');
      const anonymous = formData.get('anonymous') === 'true';
      const files = formData.getAll('attachments') || [];

      if (!title || !department_id) {
        return NextResponse.json(
          { error: 'Missing required fields: title or department_id' },
          { status: 400 },
        );
      }

      // 🧠 Upload attachments to Supabase Storage
      const uploadedFiles = [];
      for (const file of files) {
        if (!(file instanceof File)) continue; // skip non-files

        const buffer = Buffer.from(await file.arrayBuffer());
        const ext = file.name.split('.').pop();
        const filePath = `issues/${uuidv4()}.${ext}`;

        const { error: uploadError } = await supabaseAdmin.storage
          .from('scms_attachments')
          .upload(filePath, buffer, {
            contentType: file.type,
            upsert: false,
          });

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabaseAdmin.storage
          .from('scms_attachments')
          .getPublicUrl(filePath);

        uploadedFiles.push({
          name: file.name,
          url: publicUrlData.publicUrl,
          path: filePath,
          type: file.type,
        });
      }

      // 🗄️ Insert issue into Supabase table
      const row = {
        id: hyphenateByPattern(createId(), [8, 4, 4, 4, 5]),
        title: String(title).trim(),
        description: description || null,
        creator_id: creator_id && creator_id !== 'undefined' ? creator_id : null,
        department_id: String(department_id),
        status: 'pending',
        attachments: uploadedFiles, // stored as JSONB
        priority,
        thread_id: null,
        created_at: new Date().toISOString(),
        closed_at: null,
        reactions: {},
        participants: [],
        saves: 0,
        anonymous,
      };

      const { data, error } = await supabaseAdmin.from('issues').insert([row]).select('*').single();
      if (error) throw error;

      return NextResponse.json({ data }, { status: 201 });
    }

    // 🚫 If JSON body (old behavior)
    else {
      const body = await req.json();
      const { title, description, department_id, priority, anonymous, attachments, creator_id } =
        body ?? {};

      if (!title || !department_id) {
        return NextResponse.json(
          { error: 'Missing required fields: title or department_id' },
          { status: 400 },
        );
      }

      const row = {
        id: hyphenateByPattern(createId(), [8, 4, 4, 4, 5]),
        title: String(title).trim(),
        description: description ?? null,
        creator_id: creator_id ?? null,
        department_id: String(department_id),
        status: 'open',
        attachments: attachments ?? [],
        priority: priority ?? 'medium',
        thread_id: null,
        created_at: new Date().toISOString(),
        closed_at: null,
        reactions: {},
        participants: [],
        saves: 0,
        anonymous: !!anonymous,
      };

      const { data, error } = await supabaseAdmin.from('issues').insert([row]).select('*').single();
      if (error) throw error;

      return NextResponse.json({ data }, { status: 201 });
    }
  } catch (err) {
    console.error('[api/issues] unexpected', err);
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}
