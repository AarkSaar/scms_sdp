// components/issue_details/thread/CommentsTab.jsx
'use client';

import React, { useEffect, useState } from 'react';
import { getSupabaseClient } from '@/modules/shared/supabaseClient'; // Ensure this path matches your project
import Send from '@/assets/iconComponents/Send'; // Assuming you have this from previous context
import { useProfile } from '@/modules/profiles/ProfileProvider'; // Assuming you have this

export default function CommentsTab({ issueId }) {
  const supabase = getSupabaseClient();
  const { profile } = useProfile();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Fetch Comments
  useEffect(() => {
    if (!issueId) return;

    const fetchComments = async () => {
      try {
        const { data, error } = await supabase
          .from('comments') // Ensure you have a 'comments' table
          .select(
            `
            *,
            profiles ( id, name )
          `,
          )
          .eq('issue_id', issueId)
          .order('created_at', { ascending: true }); // Oldest first (like a chat) or false for newest first

        if (error) throw error;
        setComments(data || []);
      } catch (err) {
        console.error('Error fetching comments:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();

    // Optional: Real-time subscription could go here
  }, [issueId, supabase]);

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || !profile) return;

    setSubmitting(true);
    try {
      const { data, error } = await supabase
        .from('comments')
        .insert({
          issue_id: issueId,
          user_id: profile.id,
          content: newComment.trim(),
        })
        .select('*, profiles(id, name)')
        .single();

      if (error) throw error;

      setComments((prev) => [...prev, data]);
      setNewComment('');
    } catch (err) {
      console.error('Error posting comment:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='flex flex-col gap-4 h-full'>
      {/* Comment List */}
      <div className='flex flex-col gap-4 min-h-[100px]'>
        {loading ? (
          <div className='text-[#585858] text-sm'>Loading comments...</div>
        ) : comments.length === 0 ? (
          <div className='text-[#585858] text-sm italic'>
            No comments yet. Start the discussion.
          </div>
        ) : (
          comments.map((c) => (
            <div key={c.id} className='flex gap-3 group'>
              {/* Avatar Placeholder */}
              <div className='w-7 h-7 rounded-full bg-[#2f2f2f] flex items-center justify-center text-[10px] text-white font-bold flex-shrink-0 mt-1'>
                {c.profiles?.name?.substring(0, 2).toUpperCase() || 'U'}
              </div>

              <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-2'>
                  <span className='text-[13px] font-semibold text-white'>
                    {c.profiles?.name || 'Unknown User'}
                  </span>
                  <span className='text-[11px] text-[#585858]'>
                    {new Date(c.created_at).toLocaleDateString()}
                  </span>
                </div>
                <div className='text-[14px] text-[#d4d4d4] leading-relaxed whitespace-pre-wrap bg-[#1a1a1a] px-3 py-2 rounded-r-lg rounded-bl-lg'>
                  {c.content}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input Area */}
      <form
        onSubmit={handleSubmit}
        className='mt-2 flex gap-3 items-start border-t border-[#1f1f1f] pt-4'
      >
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder='Write a comment...'
          className='flex-1 bg-[#101010] border border-[#2f2f2f] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#444] resize-none h-[42px] focus:h-[80px] transition-all'
        />
        <button
          type='submit'
          disabled={submitting || !newComment.trim()}
          className='p-2.5 bg-white rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-white transition-colors'
        >
          <Send className='w-4 h-4 text-black' />
        </button>
      </form>
    </div>
  );
}
