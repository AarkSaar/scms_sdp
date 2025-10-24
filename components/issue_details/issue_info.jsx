'use client';

import React from 'react';

function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${className}`}
    >
      {children}
    </span>
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
    <div className='space-y-4'>
      {/* Title */}
      <div>
        <h1 className='text-2xl font-semibold text-white leading-tight'>{issue.title}</h1>

        {/* attachments preview (placeholders) */}
        <div className='mt-4 flex gap-3'>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className='w-16 h-16 rounded-md bg-[#1a1a1a]' />
          ))}
        </div>
      </div>

      {/* Core info grid */}
      <div className='space-y-3'>
        <div className='flex items-start gap-4'>
          <div className='w-28 text-[#8e8e8e] text-sm font-semibold'>Department</div>
          <div className='flex-1'>
            <Badge className='bg-[#111] text-[#dbeafe] border border-[#2b2b2b]'>
              <svg width='14' height='14' viewBox='0 0 24 24' className='opacity-80'>
                <circle cx='12' cy='12' r='10' fill='#3b82f6' />
              </svg>
              <span>{issue.department?.name ?? '—'}</span>
            </Badge>
          </div>
        </div>

        <div className='flex items-start gap-4'>
          <div className='w-28 text-[#8e8e8e] text-sm font-semibold'>Priority</div>
          <div className='flex-1'>
            <Badge className='bg-[#021431] text-[#60a5fa] border border-[#123]'>
              {' '}
              {issue.priority}{' '}
            </Badge>
          </div>
        </div>

        <div className='flex items-start gap-4'>
          <div className='w-28 text-[#8e8e8e] text-sm font-semibold'>Participants</div>
          <div className='flex-1 flex gap-2'>
            {issue.participants?.map((p) => (
              <div
                key={p.id}
                className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f0f0f] border border-[#1f1f1f]'
              >
                <div className='w-6 h-6 rounded-full bg-[#e5e7eb] text-black flex items-center justify-center text-xs'>
                  {p.name
                    .split(' ')
                    .map((s) => s[0])
                    .slice(0, 2)
                    .join('')}
                </div>
                <div className='text-sm text-white'>{p.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex items-start gap-4'>
          <div className='w-28 text-[#8e8e8e] text-sm font-semibold'>Status</div>
          <div className='flex-1'>
            <Badge className='bg-[#072f00] text-[#bbf7d0]'>{issue.status}</Badge>
          </div>
        </div>

        <div className='flex items-start gap-4'>
          <div className='w-28 text-[#8e8e8e] text-sm font-semibold'>Duration</div>
          <div className='flex-1 text-[#ddd]'>
            {issue.start} - {issue.end}
          </div>
        </div>

        <div className='flex items-start gap-4'>
          <div className='w-28 text-[#8e8e8e] text-sm font-semibold'>Reactions</div>
          <div className='flex-1 flex gap-2'>
            {Object.entries(issue.reactions ?? {}).map(([emoji, count]) => (
              <div
                key={emoji}
                className='px-3 py-1 rounded-full bg-[#0f0f0f] inline-flex items-center gap-2'
              >
                <span className='text-lg'>{emoji}</span>
                <span className='text-sm text-[#ddd]'>{count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='flex items-start gap-4'>
          <div className='w-28 text-[#8e8e8e] text-sm font-semibold'>Creator</div>
          <div className='flex-1 text-[#ddd]'>{issue.creator?.name}</div>
        </div>
      </div>
    </div>
  );
}
