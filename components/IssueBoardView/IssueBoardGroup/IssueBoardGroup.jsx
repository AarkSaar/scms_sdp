'use client';

import React from 'react';
import BoardGroupTitle from './BoardGroupTitle';
import IssueBoardCard from './IssueBoardCard/IssueBoardCard';

// import badge maps (only used to grab icons)
import { priorityBadges, departmentBadges, statusBadges } from '@/lib/badges';

export default function IssueBoardGroup({
  title,
  groupKey,
  issues = [],
  groupBy = 'status',
  departmentHeadId = null,
}) {
  const humanLabel =
    typeof title === 'string'
      ? title.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
      : String(title);

  // choose the correct badge map based on groupBy
  const badgeMaps = {
    status: statusBadges,
    priority: priorityBadges,
    department: departmentBadges,
  };

  const map = badgeMaps[groupBy] || {};
  // try to find the badge info for this groupKey
  let badgeInfo = map[groupKey];

  // fallback attempts:
  // - for priority/department use 'not_set'/'unassigned' if present
  // - otherwise fallback to null
  if (!badgeInfo) {
    if (groupBy === 'priority') badgeInfo = map['not_set'] || null;
    else if (groupBy === 'department') badgeInfo = map['unassigned'] || null;
    else if (groupBy === 'status') badgeInfo = map['pending'] || null;
  }

  const Icon = badgeInfo ? badgeInfo.icon : null;

  return (
    <section
      className='w-[288px] flex-shrink-0 flex flex-col h-full'
      aria-label={`${humanLabel} group`}
    >
      {/* header: fixed height, not scrollable */}
      <div className='flex-shrink-0 bg-[#101010]'>
        <BoardGroupTitle
          label={humanLabel}
          count={issues.length}
          Icon={Icon}
          groupBy={groupBy}
          departmentHeadId={departmentHeadId}
        />
      </div>

      {/* cards list: takes remaining height and scrolls vertically */}
      {/* hide-scrollbar here */}
      <div className='flex-1 overflow-y-auto overflow-x-hidden p-1.5 min-h-0'>
        <div className='flex flex-col w-full justify-center gap-y-1.5'>
          {issues.map((issue) => (
            <IssueBoardCard
              key={issue.id}
              issue={issue}
              mediaUrl={issue.mediaUrl}
              badgeSet={issue.badgeSet}
              title={issue.title}
              description={issue.description}
              dateRange={issue.dateRange}
              assignees={issue.assignees}
              departmentId={issue.department?.id ?? issue.badgeSet?.department}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
