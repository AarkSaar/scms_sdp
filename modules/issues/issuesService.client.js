// modules/issues/issuesService.client.js
import { getSupabaseClient } from '@/modules/shared/supabaseClient';
export async function fetchIssuesWithMembers({ limit = 500 } = {}) {
  const res = await fetch(`/api/issues/with-members?limit=${limit}`);
  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: 'Failed to fetch' }));
    throw new Error(body?.error || 'Failed to fetch issues');
  }
  const body = await res.json();
  return body.issues || [];
}

export async function fetchIssueById(id) {
  const res = await fetch(`/api/issues/${id}`, { cache: 'no-store' });

  if (!res.ok) {
    // Try to read JSON, fallback to text (for 404 HTML pages)
    let errorMessage = 'Failed to load issue';
    try {
      const body = await res.json();
      errorMessage = body.error || errorMessage;
    } catch (e) {
      console.error('API returned non-JSON response:', res.status, res.statusText);
    }
    throw new Error(errorMessage);
  }

  return await res.json();
}

export async function fetchComments(threadId) {
  const supabase = getSupabaseClient();
  if (!threadId) return [];

  const { data, error } = await supabase
    .from('comments')
    .select(
      `
      id,
      body,
      created_at,
      author: profiles ( id, name )
    `,
    )
    .eq('thread_id', threadId)
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data;
}

export async function postComment({ issueId, threadId, authorId, body }) {
  const supabase = getSupabaseClient();
  let currentThreadId = threadId;

  // 1. If no thread exists yet, create one and link it to the issue
  if (!currentThreadId) {
    // Create Thread
    const { data: newThread, error: threadError } = await supabase
      .from('threads')
      .insert({ issue_id: issueId })
      .select('id')
      .single();

    if (threadError) throw threadError;
    currentThreadId = newThread.id;

    // Link Issue to Thread
    await supabase.from('issues').update({ thread_id: currentThreadId }).eq('id', issueId);
  }

  // 2. Post the Comment
  const { data, error } = await supabase
    .from('comments')
    .insert({
      thread_id: currentThreadId,
      author_id: authorId,
      body: body,
    })
    .select('*, author: profiles(id, name)')
    .single();

  if (error) throw error;

  // Return the comment AND the threadId (in case it was just created)
  return { comment: data, newThreadId: currentThreadId };
}
