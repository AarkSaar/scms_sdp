'use client'; // Ensure client directive is here
import React, { useState } from 'react'; // Import useState
import Add from '@/assets/iconComponents/Add';
import { useProfile } from '@/modules/profiles/ProfileProvider';
import { priorityBadges, departmentBadges, statusBadges } from '@/lib/badges';
// 👇 Import the Modal
import QuickCreateIssueModal from '@/components/CreateIssue/QuickCreateIssueModal';

export default function BoardGroupTitle({
  label = 'Pending',
  count = 0,
  Icon = null,
  className = '',
  groupBy = 'status',
  departmentHeadId = null,
  groupId = null, // <--- ACCEPT THE PROP
}) {
  const { profile } = useProfile();
  const [isModalOpen, setIsModalOpen] = useState(false); // <--- Modal State

  // Derive Badge Info
  const badgeKey =
    typeof label === 'string'
      ? label.toString().trim().toLowerCase().replace(/\s+/g, '_')
      : String(label);

  const allBadges = { ...priorityBadges, ...departmentBadges, ...statusBadges };
  const badgeInfo = allBadges[badgeKey] || null;
  const iconColor = badgeInfo && badgeInfo.iconColor ? badgeInfo.iconColor : undefined;

  // --- PERMISSION LOGIC ---
  const userRole = profile?.roles?.id;
  const userId = profile?.id;

  const sgaData = Array.isArray(profile?.sga_members)
    ? profile.sga_members[0]
    : profile?.sga_members;
  const sgaPosition = sgaData?.position;

  const isStudent = userRole === 'role_student';
  const isFaculty = userRole === 'role_sga_faculty';

  const isPresident = userRole === 'role_sga_member' && sgaPosition === 'president';

  const isSgaChair =
    userRole === 'role_sga_member' && departmentHeadId && userId === departmentHeadId;

  const canAdd = (isPresident || isFaculty || isSgaChair) && !isStudent;
  const isCorrectGroup = groupBy !== 'status';

  const showAdd = canAdd && isCorrectGroup;

  return (
    <>
      <div
        className={`flex items-center justify-between h-fit pb-2 px-2 ${className}`}
        role='group'
      >
        <div className='flex items-center gap-2'>
          {Icon ? (
            <div className='w-[18px] h-[18px] flex items-center justify-center'>
              <Icon
                className='w-[14px] h-[14px]'
                strokeWidth={1.75}
                style={iconColor ? { color: iconColor } : undefined}
              />
            </div>
          ) : (
            <div className='w-[18px] h-[18px] rounded bg-white/5' aria-hidden />
          )}
          <span className='text-[14px] font-semibold text-white select-none'>{label}</span>
        </div>

        <div className='flex flex-row items-center justify-center gap-x-2'>
          <div className='flex items-center rounded-full px-2 py-1 bg-white text-[10px] font-semibold leading-[14px] text-[#0a0a0a] select-none'>
            {count} Issues
          </div>

          {/* Conditional Add Button */}
          {showAdd && (
            <div
              onClick={() => setIsModalOpen(true)} // <--- Trigger Modal
              className={`flex p-2 hover:bg-[#2f2f2f] rounded-[4px] items-center justify-center cursor-pointer transition-colors`}
            >
              <Add strokeWidth={1.2} className={`w-auto h-2.5 text-[#8e8e8e]`} />
            </div>
          )}
        </div>
      </div>

      {/* Render the Modal */}
      <QuickCreateIssueModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        groupingType={groupBy} // e.g., 'department' or 'priority'
        groupValue={groupId} // e.g., '123-abc-uuid' or 'urgent'
        onSuccess={() => {
          // Optional: You could trigger a refresh here if you have a global refresh context
          // otherwise the page might need a reload or useSWR revalidation to see the new issue
          console.log('Issue created via quick add');
        }}
      />
    </>
  );
}
