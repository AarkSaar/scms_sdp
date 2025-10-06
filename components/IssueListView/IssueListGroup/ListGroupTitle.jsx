'use client';

import React from 'react';
import { priorityBadges, departmentBadges, statusBadges } from '@/lib/badges';

export default function ListGroupTitle({
  label = 'Pending',
  count = 0,
  Icon = null,
  className = '',
}) {
  // human-friendly label (same conversion used elsewhere)
  const humanLabel =
    typeof label === 'string'
      ? label.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
      : String(label);
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
    <div className='flex items-center justify-between bg-[#1f1f1f] px-3 py-1.5 md:py-2'>
      {/* left: icon + label */}
      <div className='flex items-center gap-2'>
        {Icon ? (
          <div className='w-[18px] h-[18px] flex items-center justify-center'>
            {/* pass className to Icon for sizing and use inline styles to color it */}
            <Icon
              className='w-[16px] h-[16px]'
              strokeWidth={1.75}
              style={
                iconColor ? { color: iconColor, stroke: iconColor, fill: iconColor } : undefined
              }
            />
          </div>
        ) : (
          <div className='w-[18px] h-[18px] rounded bg-white/5' aria-hidden />
        )}

        <span className='text-[14px] font-semibold text-white select-none'>{humanLabel}</span>
      </div>

      <div
        className='inline-flex items-center rounded-full px-2 py-1 bg-white'
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
