// components/BoardIssue/BoardIssueCard.jsx
import React from 'react';
import ProfileStack from './ProfileStack';

import PriorityBadge from '../Shared/Badges/PriorityBadge';
import DepartmentBadge from '../Shared/Badges/DepartmentBadge';
import StatusBadge from '../Shared/Badges/StatusBadge';
import Calendar from '@/assets/iconComponents/Calendar';

/**
 * IssueBoardCard (simplified badge row)
 *
 * Props:
 *  - mediaUrl
 *  - badgeSet: { priority?: 'low', department?: 'health', status?: 'pending' }   <-- preferred
 *  - badges: legacy array: [{ type: 'priority'|'department'|'status', id: 'low' }, ...]
 *  - title, description, dateRange, assignees
 */
export default function IssueBoardCard({
  mediaUrl = null,
  badgeSet = {},
  badges = [],
  title = '',
  description = '',
  dateRange = '',
  assignees = [''],
}) {
  // helper: check badgeSet first, then try to find in badges array
  const getBadgeId = (type) => {
    if (badgeSet && badgeSet[type]) return badgeSet[type];
    if (Array.isArray(badges)) {
      const found = badges.find(
        (b) =>
          b &&
          (b.type === type || b.badgeType === type || b.kind === type) &&
          (b.id || b.name || b.label),
      );
      if (found) return found.id ?? found.name ?? found.label;
    }
    return null;
  };

  const priorityId = getBadgeId('priority');
  const departmentId = getBadgeId('department');
  const statusId = getBadgeId('status');

  return (
    <article
      className='w-[272px] flex flex-col overflow-hidden rounded-[16px]'
      role='article'
      aria-label={title || 'Issue card'}
    >
      {/* top image area (only if media present) */}
      {mediaUrl ? (
        <div className='w-full h-[152px] bg-gray-800 overflow-hidden'>
          <img src={mediaUrl} alt={`${title} media`} className='w-full h-full object-cover' />
        </div>
      ) : null}

      {/* bottom content */}
      <div className='flex-1 bg-[#161616] px-4 py-3 flex flex-col justify-between'>
        <div className='space-y-2'>
          {/* simplified badges row: priority, department, status */}
          <div className='flex items-center gap-2'>
            {priorityId ? <PriorityBadge id={priorityId} /> : null}
            {departmentId ? <DepartmentBadge id={departmentId} /> : null}
            {/* {statusId ? <StatusBadge id={statusId} /> : null} */}
          </div>

          {/* title */}
          <h3 className='text-[12px] font-semibold text-white leading-5 line-clamp-2'>{title}</h3>

          {/* description */}
          <p className='text-[10px] text-[#8e8e8e] line-clamp-3 font-semibold'>{description}</p>
        </div>

        {/* divider */}
        <div className='my-2 border-t border-white/5 ' />

        {/* bottom meta row: date on left, assignees on right */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-[10px] text-white'>
            {/* small calendar icon */}
            <Calendar strokeWidth={1.25} className={`w-3 h-auto text-[#8e8e8e]`} />

            <span className='text-[10px] text-white'>{dateRange}</span>
          </div>

          <ProfileStack assignees={assignees} />
        </div>
      </div>
    </article>
  );
}
