'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useProfile } from '@/modules/profiles/ProfileProvider'; // Assuming you have this
import { fetchComments, postComment } from '@/modules/issues/issuesService.client';
import Send from '@/assets/iconComponents/Send'; // Reusing your existing icon

export default function ThreadView({ issueId, initialThreadId }) {
  const { profile } = useProfile();
  const [threadId, setThreadId] = useState(initialThreadId);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  // Load comments on mount or when threadId changes
  useEffect(() => {
    let mounted = true;
    async function load() {
      if (!threadId) return;
      setLoading(true);
      try {
        const data = await fetchComments(threadId);
        if (mounted) setComments(data);
      } catch (err) {
        console.error(err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, [threadId]);

  // Auto-scroll to bottom when comments change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [comments]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputVal.trim() || submitting) return;

    setSubmitting(true);
    try {
      const { comment, newThreadId } = await postComment({
        issueId,
        threadId,
        authorId: profile?.id,
        body: inputVal.trim(),
      });

      // If we just created a thread, update local state so future posts use it
      if (!threadId) setThreadId(newThreadId);

      setComments((prev) => [...prev, comment]);
      setInputVal('');
    } catch (err) {
      console.error('Failed to post comment', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='flex flex-col h-[500px]'>
      {/* Comments List */}
      <div className='flex-1 overflow-y-auto pr-2 space-y-5'>
        {!threadId && comments.length === 0 && (
          <div className='text-[#585858] text-sm text-center py-10 italic'>
            No activity yet. Start the conversation.
          </div>
        )}

        {comments.map((c) => (
          <div key={c.id} className='flex gap-3 group'>
            {/* Avatar Circle */}
            <div className='flex-shrink-0 w-8 h-8 rounded-full bg-[#1f1f1f] border border-[#2f2f2f] flex items-center justify-center text-[#8e8e8e] text-xs font-bold'>
              {c.author?.name?.substring(0, 2).toUpperCase() || '??'}
            </div>

            <div className='flex flex-col gap-1 w-full min-w-0'>
              <div className='flex items-baseline gap-2'>
                <span className='text-sm font-semibold text-white'>
                  {c.author?.name || 'Unknown'}
                </span>
                <span className='text-[11px] text-[#585858]'>
                  {new Date(c.created_at).toLocaleString([], {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
              <div className='text-[14px] text-[#d4d4d4] whitespace-pre-wrap leading-relaxed'>
                {c.body}
              </div>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Area */}
      <div className='mt-4 pt-4 border-t border-[#1f1f1f]'>
        <form onSubmit={handleSubmit} className='relative'>
          <textarea
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder='Write a comment...'
            disabled={submitting}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            className='w-full bg-[#0b0b0b] border border-[#2f2f2f] rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#585858] focus:outline-none focus:border-[#444] min-h-[46px] max-h-32 resize-none pr-12'
          />
          <button
            type='submit'
            disabled={!inputVal.trim() || submitting}
            className='absolute bottom-3 right-3 p-1.5 bg-white rounded-md hover:bg-gray-200 disabled:opacity-0 disabled:pointer-events-none transition-all'
          >
            <Send className='w-3.5 h-3.5 text-black' strokeWidth={2} />
          </button>
        </form>
      </div>
    </div>
  );
}
