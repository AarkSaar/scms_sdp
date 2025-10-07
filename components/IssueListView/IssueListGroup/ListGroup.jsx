'use client';

import React from 'react';
import ListGroupTitle from './ListGroupTitle';
import SingleRow from './SingleRow';

// import badge maps (used to derive icon/color if desired)
import { priorityBadges, departmentBadges, statusBadges } from '@/lib/badges';

export default function ListGroup({
  title = 'Pending',
  groupKey,
  issues = [],
  groupBy = 'status',
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
  let badgeInfo = map[groupKey];

  // fallback attempts:
  if (!badgeInfo) {
    if (groupBy === 'priority') badgeInfo = map['not_set'] || null;
    else if (groupBy === 'department') badgeInfo = map['unassigned'] || null;
    else if (groupBy === 'status') badgeInfo = map['pending'] || null;
  }

  const Icon = badgeInfo ? badgeInfo.icon : null;

  return (
    // full width group (vertical list)
    <section className='w-full flex flex-col gap-y-2.5' aria-label={`${humanLabel} group`}>
      {/* Group title: sticky to top of viewport while group is in view */}
      <div className='sticky top-0 z-30 bg-[#101010]'>
        <ListGroupTitle label={humanLabel} count={issues.length} Icon={Icon} />
      </div>

      {/* Column labels: sticky under the title */}
      <div className='bg-[#0f0f0f]'>
        <div className='overflow-x-auto hide-scrollbar space-y-2.5'>
          <div className='min-w-max md:min-w-full w-full'>
            {/* header row (column labels) */}
            <div className='flex h-[40px] border-b border-[#1a1a1a] items-center px-3 py-2.5 text-[12px] text-[#a9a9a9] font-semibold'>
              <div className='w-[88px] text-center flex-shrink-0'>Priority</div>
              <div className='flex-1 text-center w-[400px] lg:w-full px-2 flex-shrink-0'>
                Title / Description
              </div>
              <div className='w-[142px] text-center flex-shrink-0'>Department</div>
              <div className='w-[98px] text-center flex-shrink-0'>Participants</div>
              <div className='w-[98px] text-center flex-shrink-0'>Created</div>
              <div className='w-[98px] text-center flex-shrink-0'>Closed</div>
            </div>
          </div>

          {/* rows list */}
          <div className='min-w-max md:min-w-full w-full'>
            <div className='flex flex-col gap-y-2.5'>
              {issues.map((issue) => (
                <SingleRow key={issue.id} issue={issue} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
