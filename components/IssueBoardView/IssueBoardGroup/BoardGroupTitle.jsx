import React from 'react';

// badge maps to derive icon colors (only used for coloring the icon)
import { priorityBadges, departmentBadges, statusBadges } from '@/lib/badges';

export default function BoardGroupTitle({
  label = 'Pending',
  count = 0,
  Icon = null,
  className = '',
}) {
  // try to derive a badge key from the human label, e.g. "Needs Review" -> "needs_review"
  const badgeKey =
    typeof label === 'string'
      ? label.toString().trim().toLowerCase().replace(/\s+/g, '_')
      : String(label);

  // combine maps and try to find badge info
  const allBadges = { ...priorityBadges, ...departmentBadges, ...statusBadges };
  const badgeInfo = allBadges[badgeKey] || null;

  // fallback color if none found
  const iconColor = badgeInfo && badgeInfo.iconColor ? badgeInfo.iconColor : undefined;

  return (
    <div
      className={`flex items-center justify-between h-fit pb-1 px-3 ${className}`}
      role='group'
      aria-label={`${label} group header`}
    >
      {/* left: icon + label */}
      <div className='flex items-center gap-2'>
        {Icon ? (
          <div className='w-[18px] h-[18px] flex items-center justify-center'>
            {/* pass className to Icon for sizing and use inline styles to color it */}
            <Icon
              className='w-[14px] h-[14px]'
              style={
                iconColor ? { color: iconColor, stroke: iconColor, fill: iconColor } : undefined
              }
            />
          </div>
        ) : (
          <div className='w-[18px] h-[18px] rounded bg-white/5' aria-hidden />
        )}

        <span className='text-[14px] font-semibold text-white select-none'>{label}</span>
      </div>

      {/* right: count pill */}
      <div
        className='inline-flex items-center rounded-full px-2 py-0.75 bg-white'
        aria-hidden={count == null}
      >
        <div className='text-[10px] font-semibold leading-[14px] text-[#0a0a0a] select-none'>
          {count}
          <span>{` `}Issues</span>
        </div>
      </div>
    </div>
  );
}
