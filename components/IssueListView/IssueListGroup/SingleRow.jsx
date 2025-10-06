'use client';

import React from 'react';
import ProfileStack from './ProfileStack';
import PriorityBadge from '@/components/Shared/Badges/PriorityBadge';
import DepartmentBadge from '@/components/Shared/Badges/DepartmentBadge';
import StatusBadge from '@/components/Shared/Badges/StatusBadge';

function formatDate(value) {
  if (!value) return '---';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString();
}

export default function SingleRow({ issue }) {
  const badgeSet = issue.badgeSet || {};
  const priorityId = badgeSet.priority || null;
  const departmentId = badgeSet.department || null;
  const statusId = badgeSet.status || null;

  const created = issue.createdAt || issue.dateCreated || (issue.dateRange?.start ?? null) || null;
  const closed = issue.closedAt || null;

  return (
    <div className='px-2 flex items-start justify-center hover:bg-[#0b0b0b] h-[40px]'>
      {/* Priority */}
      <div className='w-[88px] h-full flex-shrink-0 flex items-center justify-center'>
        {priorityId ? (
          <div className='inline-block'>
            <PriorityBadge id={priorityId} />
          </div>
        ) : (
          <div className='text-[12px] text-[#8e8e8e]'>—</div>
        )}
      </div>

      {/* Title / Description */}
      <div className='px-4 flex-1 w-full h-full'>
        <div className='text-[13px] font-semibold text-white line-clamp-1'>
          {issue.title || 'Untitled Issue'}
        </div>
        <div className='text-[11px] text-[#9b9b9b] font-medium mt-0.5 line-clamp-1'>
          {issue.description || issue.summary || '---'}
        </div>
      </div>

      {/* Department */}
      <div className='h-full px-2 w-[142px] flex-shrink-0 flex items-center justify-center'>
        {departmentId ? (
          <DepartmentBadge id={departmentId} />
        ) : (
          <div className='text-[12px] text-[#8e8e8e]'>---</div>
        )}
      </div>

      {/* Participants */}
      <div className='h-full px-2 w-[98px] flex-shrink-0 flex items-center justify-center'>
        <ProfileStack assignees={issue.assignees || []} />
      </div>

      {/* Created */}
      <div className='h-full px-2 w-[98px] items-center justify-center flex flex-shrink-0 text-[12px] text-[#bdbdbd]'>
        {formatDate(created)}
      </div>

      {/* Closed */}
      <div className='h-full px-2 w-[98px] items-center justify-center flex flex-shrink-0 text-[12px] text-[#bdbdbd]'>
        {formatDate(closed)}
      </div>
    </div>
  );
}
