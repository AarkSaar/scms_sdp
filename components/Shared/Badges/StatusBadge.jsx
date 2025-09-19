// components/shared/badge/StatusBadge.jsx
import React from 'react';
import { statusBadges } from '@/lib/badges';

/**
 * StatusBadge
 * Props:
 *  - id: string (status id) OR
 *  - badge: full badge object
 *  - small (boolean) - render compact without label
 *  - className
 */
export default function StatusBadge({ id, badge, small = false, className = '' }) {
  const b = badge ?? statusBadges[id];
  if (!b) return null;
  const Icon = b.icon;

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 border-[1.25px] border-[#2a2a2a] rounded-full text-[10px] font-semibold ${className}`}
      style={{ color: '#fff', background: 'transparent' }}
      role='status'
      aria-label={b.label}
    >
      {/* small colored dot */}
      <span
        className='flex items-center justify-center w-3.5 h-3.5 rounded-sm shrink-0'
        aria-hidden='true'
      >
        {Icon ? <Icon strokeColor={b.iconColor} className='w-auto h-[13px]' /> : null}
      </span>
      {!small && <span className='leading-[20px] select-none'>{b.label}</span>}
    </div>
  );
}
