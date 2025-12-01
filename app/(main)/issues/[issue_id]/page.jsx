'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import IssueHeader from '@/components/issue_details/issue_header';
import IssueInfo from '@/components/issue_details/issue_info';
import ThreadTabs from '@/components/issue_details/thread/thread_tabs';
import { fetchIssueById } from '@/modules/issues/issuesService.client'; // Import service
import SmileyPlus from '@/assets/iconComponents/SmileyPlus';

export default function IssuePage() {
  const router = useRouter();
  const { issue_id } = useParams();
  const [mounted, setMounted] = useState(false);
  const [issue, setIssue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      if (!issue_id) return;
      setLoading(true);
      try {
        const data = await fetchIssueById(issue_id); // ✅ Real API call
        if (!cancelled) setIssue(data);
      } catch (e) {
        console.error('Failed to load issue', e);
        // Optional: Redirect or show error state
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
    // ... existing close logic
    try {
      router.back();
    } catch {
      router.push('/issues/all');
    }
  }

  // Helper to safely format dates
  const formatDate = (dateStr) => {
    if (!dateStr) return 'Ongoing';
    return new Date(dateStr).toLocaleDateString();
  };

  // Prepare display data ensuring fields exist
  const displayIssue = issue
    ? {
        ...issue,
        start: formatDate(issue.start),
        end: formatDate(issue.end),
        creator: {
          name: issue.creator?.name || 'Unknown',
          ...issue.creator,
        },
      }
    : null;

  return (
    <>
      {/* backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 transition-opacity duration-200 ${
          mounted ? 'opacity-20' : 'opacity-0 pointer-events-none'
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
          w-full md:w-[400px] lg:w-[560px] h-full flex flex-col bg-[#0c0c0c]`}
      >
        <IssueHeader issue={displayIssue} onClose={close} loading={loading} />

        <div className='flex-1 overflow-auto'>
          <div className='p-5 space-y-6'>
            <IssueInfo issue={displayIssue} loading={loading} />

            {/* Description */}
            <div className='space-y-1.5'>
              <div className='flex flex-row justify-between items-center'>
                <div className='text-[11.5px] font-semibold text-[#585858]'>Description</div>
                <div className='p-2 hover:bg-[#2f2f2f] rounded-[8px]'>
                  <SmileyPlus strokeWidth={1.2} className={`text-[#8e8e8e] w-auto h-3.5  `} />
                </div>
              </div>
              <div className='text-[15px] text-[#ddd] leading-relaxed whitespace-pre-wrap'>
                {loading
                  ? 'Loading description…'
                  : displayIssue?.description || 'No description provided.'}
              </div>
            </div>

            <ThreadTabs
              activity={displayIssue?.activity ?? []}
              participants={displayIssue?.participants ?? []}
            />
          </div>
        </div>
      </div>
    </>
  );
}
