// app/(main)/issues/all/page.jsx
'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Headers/IssuesHeader';
import BoardView from '@/components/IssueBoardView/BoardView';
import ListView from '@/components/IssueListView/ListView';
import { useProfile } from '@/modules/profiles/ProfileProvider';
import { fetchIssuesWithMembers } from '@/modules/issues/issuesService.client';
import { formatDateRange } from '@/lib/utils/dateUtils';

export default function IssuesAllPage() {
  const { profile, loading: profileLoading } = useProfile();
  const [activeView, setActiveView] = useState('list');
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const userRole = profile?.roles?.id;
  const [groupBy, setGroupBy] = useState('status');

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setErr(null);

    fetchIssuesWithMembers({ limit: 500 })
      .then((rows) => {
        if (!mounted) return;

        // Transform issues to match expected format
        const transformed = rows.map((issue) => ({
          ...issue,
          badgeSet: {
            status: issue.status,
            priority: issue.priority,
            department: issue.department_id,
          },
          dateRange: formatDateRange(issue.created_at, issue.closed_at),
          mediaUrl: issue.attachments?.[0]?.url || null,
          assignees: issue.departmentMembers || [],
        }));

        setIssues(transformed);
      })
      .catch((e) => {
        console.error('Failed to load issues:', e);
        if (mounted) setErr(e);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className='flex flex-col w-full min-w-0 h-full min-h-0'>
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        onGroupChange={setGroupBy}
        currentGroup={groupBy}
      />

      <div className='flex-1 px-2 py-3 overflow-hidden h-full'>
        {loading ? (
          <div className={`p-4 text-[#bfbfbf]`}>Loading issues…</div>
        ) : err ? (
          <div className='text-red-400 p-4'>Failed to load issues (see console)</div>
        ) : activeView === 'list' ? (
          <ListView issues={issues} groupBy={groupBy} />
        ) : (
          <BoardView issues={issues} groupBy={groupBy} />
        )}
      </div>
    </div>
  );
}
