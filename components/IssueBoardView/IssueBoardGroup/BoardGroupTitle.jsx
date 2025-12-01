import React from 'react';
import Add from '@/assets/iconComponents/Add';
import { useProfile } from '@/modules/profiles/ProfileProvider';

// badge maps to derive icon colors
import { priorityBadges, departmentBadges, statusBadges } from '@/lib/badges';

export default function BoardGroupTitle({
  label = 'Pending',
  count = 0,
  Icon = null,
  className = '',
  groupBy = 'status', // Received from parent
  departmentHeadId = null, // Received from parent (only valid if groupBy='department')
}) {
  const { profile } = useProfile();

  // Derive Badge Info
  const badgeKey =
    typeof label === 'string'
      ? label.toString().trim().toLowerCase().replace(/\s+/g, '_')
      : String(label);

  const allBadges = { ...priorityBadges, ...departmentBadges, ...statusBadges };
  const badgeInfo = allBadges[badgeKey] || null;
  const iconColor = badgeInfo && badgeInfo.iconColor ? badgeInfo.iconColor : undefined;

  // --- VISIBILITY LOGIC ---
  const userRole = profile?.roles?.id;
  const userId = profile?.id;

  const isStudent = userRole === 'role_student';
  const isPresident = userRole === 'role_president';
  const isFaculty = userRole === 'role_sga_faculty';

  // Check if SGA Member AND matches the head ID of this specific group
  const isSgaChair =
    userRole === 'role_sga_member' && departmentHeadId && userId === departmentHeadId;

  // 1. Must be one of the allowed roles
  const hasRolePermission = isPresident || isFaculty || isSgaChair;

  // 2. Must NOT be a student (explicit check from prompt)
  const isNotStudent = !isStudent;

  // 3. Must NOT be grouped by status
  const isAllowedGroup = groupBy !== 'status';

  // Final boolean
  const showAdd = hasRolePermission && isNotStudent && isAllowedGroup;

  return (
    <div
      className={`flex items-center justify-between h-fit pb-2 px-2 ${className}`}
      role='group'
      aria-label={`${label} group header`}
    >
      {/* Left: Icon + Label */}
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

      {/* Right: Count Pill + Add Button */}
      <div className='flex flex-row items-center justify-center gap-x-2'>
        <div
          className='flex items-center rounded-full px-2 py-1 bg-white text-[10px] font-semibold leading-[14px] text-[#0a0a0a] select-none'
          aria-hidden={count == null}
        >
          {count} Issues
        </div>

        {/* CONDITIONAL RENDER */}
        {showAdd && (
          <div
            className={`flex p-2 hover:bg-[#2f2f2f] rounded-[4px] items-center justify-center cursor-pointer`}
          >
            <Add strokeWidth={1.2} className={`w-auto h-2.5 text-[#8e8e8e]`} />
          </div>
        )}
      </div>
    </div>
  );
}
