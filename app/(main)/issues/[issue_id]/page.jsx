'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import IssueHeader from '@/components/issue_details/issue_header';
import IssueInfo from '@/components/issue_details/issue_info';
import ThreadTabs from '@/components/issue_details/thread/thread_tabs';

export default function IssuePage() {
  const router = useRouter();
  const { issue_id } = useParams();
  const [mounted, setMounted] = useState(false);
  const [issue, setIssue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // animate in
    requestAnimationFrame(() => setMounted(true));
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev || '';
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        // TODO: replace with real API call or supabase fetch
        // const res = await fetch(`/api/issues/${issue_id}`);
        // const json = await res.json();
        const fake = {
          id: issue_id,
          title: 'Insufficient Shuttle Buses During Peak Hours',
          attachments: [
            /* urls */
          ],
          department: { id: 'dept_transport', name: 'Transport' },
          priority: 'Medium',
          participants: [
            { id: 'u1', name: 'Bashir Z' },
            { id: 'u2', name: 'Tameem M' },
          ],
          status: 'Needs Review',
          start: '2023-09-00',
          end: '2023-09-00',
          reactions: { '🤔': 12, '😪': 6, '😂': 3 },
          creator: { id: 'u1', name: 'Bashir Z' },
          description:
            'Morning and evening peak hours (7:30–9:00 AM and 5–6 PM) have long queues at bus stops, with many students left stranded.',
          activity: [
            { actor: 'Bashir Z', text: 'created this issue', when: '5d ago' },
            { actor: 'System', text: 'changed status to Pending', when: '5d ago' },
            { actor: 'Bashir Z', text: 'flagged as Medium', when: '5d ago' },
          ],
        };
        if (!cancelled) setIssue(fake);
      } catch (e) {
        console.error('Failed to load issue', e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [issue_id]);

  function close() {
    try {
      router.back();
    } catch {
      router.push('/issues/all');
    }
  }

  return (
    <>
      {/* backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 transition-opacity duration-200 ${
          mounted ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
        aria-hidden={!mounted}
      />

      {/* panel */}
      <div
        role='dialog'
        aria-modal='true'
        className={`fixed inset-y-0 right-0 z-50 transform transition-transform duration-300 ease-out
          ${mounted ? 'translate-x-0' : 'translate-x-full'}
          w-full md:w-[400px] lg:w-[560px] h-full flex flex-col bg-[#0b0b0b]`}
      >
        <IssueHeader issue={issue} onClose={close} loading={loading} />

        <div className='flex-1 overflow-auto'>
          <div className='p-5 space-y-6'>
            {/* Title + attachments shown in IssueInfo */}
            <IssueInfo issue={issue} loading={loading} />

            {/* Description */}
            <div>
              <div className='text-sm text-[#8e8e8e] mb-2'>Description</div>
              <div className='text-[15px] text-[#ddd] leading-relaxed'>
                {loading ? 'Loading description…' : issue?.description}
              </div>
            </div>

            {/* Thread / Tabs */}
            <ThreadTabs activity={issue?.activity ?? []} participants={issue?.participants ?? []} />
          </div>
        </div>
      </div>
    </>
  );
}
