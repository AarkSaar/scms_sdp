// components/shared/badge/DepartmentBadge.jsx
import React from 'react';
import { departmentBadges } from '@/lib/badges';

/**
 * DepartmentBadge
 * Props:
 *  - id: string (department id) OR
 *  - badge: full badge object
 *  - className
 */
export default function DepartmentBadge({ id, badge, className = '' }) {
  const b = badge ?? departmentBadges[id];
  if (!b) return null;

  const Icon = b.icon;

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] border-[1px] border-[#2f2f2f] font-semibold ${className}`}
      style={{
        background: b.bgColor ?? '#2f2f2f',
        color: '#fff',
      }}
      role='region'
      aria-label={b.label}
    >
      {Icon ? (
        <Icon strokeColor={b.iconColor} strokeWidth={1.25} className='w-auto h-[12px]' />
      ) : null}
      <span className='leading-[20px] select-none text-white'>{b.label}</span>
    </div>
  );
}
