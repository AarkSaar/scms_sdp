// components/BoardIssue/IssueBoardCard.jsx
import React from 'react';
import ProfileStack from './ProfileStack';
import { useRouter } from 'next/navigation';
import PriorityBadge from '../../../Shared/Badges/PriorityBadge';
import { useProfile } from '@/modules/profiles/ProfileProvider';
import DepartmentBadge from '../../../Shared/Badges/DepartmentBadge';
import StatusBadge from '../../../Shared/Badges/StatusBadge';
import Calendar from '@/assets/iconComponents/Calendar';

export default function IssueBoardCard({
  mediaUrl = null,
  badgeSet = {},
  title = '',
  description = '',
  dateRange = '',
  assignees = [],
  departmentId = null,
  issue,
}) {
  const priorityId = badgeSet?.priority;
  const departmentIdBadge = badgeSet?.department;
  const statusId = badgeSet?.status;
  const router = useRouter();
  const { profile, loading: profileLoading } = useProfile();
  const userRole = profile?.roles?.id;

  return (
    <article
      onClick={() => router.push(`/issues/${issue.id}`)}
      className='w-full flex flex-col overflow-hidden rounded-[16px]'
      role='article'
      aria-label={title || 'Issue card'}
    >
      {mediaUrl && (
        <div className='w-full h-[136px] bg-gray-800 overflow-hidden'>
          <img src={mediaUrl} alt={`${title} media`} className='w-full h-full object-cover' />
        </div>
      )}

      <div className='flex-1 bg-[#1a1a1a] px-3 py-3 flex flex-col justify-between'>
        <div className='space-y-1'>
          <div className='flex flex-wrap items-center gap-2'>
            {priorityId && userRole && userRole !== 'role_student' && (
              <PriorityBadge id={priorityId} />
            )}
            {departmentIdBadge && <DepartmentBadge id={departmentIdBadge} />}
            {statusId && <StatusBadge id={statusId} />}
          </div>

          <h3 className='text-[12px] font-semibold text-white leading-5 line-clamp-2'>{title}</h3>
          <p className='text-[11px] text-[#8e8e8e] line-clamp-3 font-semibold'>{description}</p>
        </div>

        <div className='my-2 border-t border-[#2a2a2a]' />

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-[10px] text-white'>
            <Calendar strokeWidth={1.25} className='w-3 h-auto text-[#8e8e8e]' />
            <span className='text-[10px] text-white'>{dateRange}</span>
          </div>

          {assignees.length > 0 ? (
            <ProfileStack assignees={assignees} />
          ) : (
            <span className='text-[10px] text-[#6e6e6e]'>Unassigned</span>
          )}
        </div>
      </div>
    </article>
  );
}
