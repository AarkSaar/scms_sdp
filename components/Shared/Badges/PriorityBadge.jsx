// components/shared/badge/PriorityBadge.jsx
import React from 'react';
import { priorityBadges } from '@/lib/badges';

/**
 * PriorityBadge
 * Props:
 *  - id: string (one of priorityBadges keys) OR
 *  - badge: full badge object
 *  - className: extra tailwind classes
 */
export default function PriorityBadge({ id, badge, className = '' }) {
  const b = badge ?? priorityBadges[id];
  if (!b) return null;

  const Icon = b.icon;

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold ${className}`}
      style={{
        border: b.outlineColor ? `1.5px solid ${b.outlineColor}` : undefined,
        background: 'transparent',
        color: b.iconColor,
      }}
      role='status'
      aria-label={b.label}
    >
      <span
        className='flex items-center justify-center w-3 h-3 rounded-sm shrink-0'
        aria-hidden='true'
        style={{ color: b.iconColor }}
      >
        {Icon ? (
          <Icon strokeColor='none' fillColor={b.iconColor} className='w-auto h-[12px]' />
        ) : null}
      </span>
      <span className='leading-[20px] select-none'>{b.label}</span>
    </div>
  );
}
