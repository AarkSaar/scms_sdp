// components/issue_details/issue_info.jsx
'use client';

import React from 'react';
// Importing specific badges as requested
import PriorityBadge from '@/components/Shared/Badges/PriorityBadge';
import DepartmentBadge from '@/components/Shared/Badges/DepartmentBadge';
import StatusBadge from '@/components/Shared/Badges/StatusBadge';
import UserLine from '@/assets/iconComponents/UserLine';
import BranchDept from '@/assets/iconComponents/BranchDept';
import Flag from '@/assets/iconComponents/Flag';
import UsersLine from '@/assets/iconComponents/UsersLine';
import Pending from '@/assets/iconComponents/Pending';
import CalendarTime from '@/assets/iconComponents/CalendarTime';
import Smiley from '@/assets/iconComponents/Smiley';

const iconMap = {
  Department: BranchDept,
  Priority: Flag,
  Status: Pending,
  Participants: UsersLine,
  Duration: CalendarTime,
  Reactions: Smiley,
  Creator: UsersLine,
};

function IssueInfoItem({ label, children, className = '' }) {
  const Icon = iconMap[label];

  return (
    <div className={`flex min-h-6 flex-row items-center gap-4 ${className}`}>
      {/* Label Column */}
      <div className='w-28 text-[#8e8e8e] text-[11.5px] font-semibold flex flex-row items-center gap-2'>
        {Icon ? <Icon className='w-auto h-3' strokeWidth={1.25} /> : null}
        <span>{label}</span>
      </div>

      {/* Content Column */}
      <div className='flex-1 min-w-0 flex flex-row flex-wrap gap-2 items-center'>{children}</div>
    </div>
  );
}

export default function IssueInfo({ issue, loading }) {
  if (loading) {
    return (
      <div className='animate-pulse space-y-4'>
        <div className='h-7 bg-[#151515] rounded w-1/2' />
        <div className='h-24 bg-[#151515] rounded' />
        <div className='space-y-2'>
          <div className='h-4 bg-[#151515] w-1/3 rounded' />
          <div className='h-4 bg-[#151515] w-2/3 rounded' />
        </div>
      </div>
    );
  }

  if (!issue) {
    return <div className='text-[#999]'>Issue not found.</div>;
  }

  return (
    <div className='space-y-6'>
      {/* --- Header Section (Title & Attachments) --- */}
      <div>
        <h1 className='text-2xl font-semibold text-white leading-tight'>{issue.title}</h1>
        {/* Attachments Placeholder */}
        {issue.attachments && issue.attachments.length > 0 && (
          <div className='mt-4 flex gap-3 overflow-x-auto pb-2'>
            {issue.attachments.map((att, i) => (
              <div
                key={i}
                className='w-16 h-16 flex-shrink-0 rounded-md bg-[#1a1a1a] border border-[#2a2a2a]'
              />
            ))}
          </div>
        )}
      </div>

      {/* --- Info Grid --- */}
      <div className='space-y-3'>
        {/* Department Badge */}
        <IssueInfoItem label='Department'>
          <DepartmentBadge id={issue.department?.id || 'none'} />
        </IssueInfoItem>

        {/* Priority Badge */}
        <IssueInfoItem label='Priority'>
          <PriorityBadge id={issue.priority || 'medium'} />
        </IssueInfoItem>

        {/* Status Badge */}
        <IssueInfoItem label='Status'>
          <StatusBadge id={issue.status || 'pending'} />
        </IssueInfoItem>

        {/* Participants */}
        <IssueInfoItem label='Participants'>
          {issue.participants && issue.participants.length > 0 ? (
            issue.participants.map((p) => (
              <div
                key={p.id}
                className='inline-flex items-center gap-2 px-2 py-1 pr-3 rounded-full bg-[#0f0f0f] border border-[#1f1f1f]'
              >
                <div className='w-5 h-5 rounded-full bg-[#2a2a2a] text-white flex items-center justify-center text-[10px] font-bold overflow-hidden'>
                  {p.avatarUrl ? (
                    <img src={p.avatarUrl} alt={p.name} className='w-full h-full object-cover' />
                  ) : (
                    (p.name || '?').substring(0, 2).toUpperCase()
                  )}
                </div>
                <span className='text-sm text-[#e5e5e5]'>{p.name}</span>
              </div>
            ))
          ) : (
            <span className='text-[#555] text-sm italic'>No participants</span>
          )}
        </IssueInfoItem>

        {/* Duration */}
        <IssueInfoItem label='Duration'>
          <span className='text-[#ddd] text-sm pt-1'>
            {issue.start} — {issue.end || 'Ongoing'}
          </span>
        </IssueInfoItem>

        {/* Reactions */}
        <IssueInfoItem label='Reactions'>
          {Object.keys(issue.reactions || {}).length > 0 ? (
            Object.entries(issue.reactions).map(([emoji, count]) => (
              <div
                key={emoji}
                className='px-2.5 py-1 rounded-full bg-[#0f0f0f] border border-[#1f1f1f] inline-flex items-center gap-2'
              >
                <span className='text-sm'>{emoji}</span>
                <span className='text-xs font-semibold text-[#888]'>{count}</span>
              </div>
            ))
          ) : (
            <span className='text-[#555] text-sm italic'>No reactions yet</span>
          )}
        </IssueInfoItem>

        {/* Creator */}
        <IssueInfoItem label='Creator'>
          <div className='flex items-center gap-2 pt-1'>
            <div className='w-5 h-5 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[9px] text-white'>
              {issue.creator?.name ? issue.creator.name.substring(0, 2).toUpperCase() : 'U'}
            </div>
            <span className='text-[#ddd] text-sm'>{issue.creator?.name || 'Unknown'}</span>
          </div>
        </IssueInfoItem>
      </div>
    </div>
  );
}
