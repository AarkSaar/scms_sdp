'use client';

import React from 'react';
import Link from 'next/link';

export default function SidebarItem({ item, collapsed, onClick, active = false }) {
  const Icon = item.Icon;

  // When active: icon + label should be white
  const iconColorClass = active ? 'text-white' : 'text-[#8e8e8e]';
  const labelClass = active ? 'text-white' : 'text-[#c9c9c9]';
  const activeBg = active ? 'bg-[#1f1f1f]' : '';

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`flex items-center px-4 py-2 ${activeBg} hover:bg-[#1a1a1a] ${
        collapsed ? 'justify-center' : 'gap-3'
      } group`} // add "group" to use group-hover
    >
      {/* icon + label wrapper */}
      <div className='flex items-center gap-3'>
        <div className='flex items-center justify-center w-4 h-4'>
          {Icon ? (
            <Icon
              strokeWidth={item.label === 'My issues' ? 3 : 1.25}
              className={`w-auto h-[16px] ${iconColorClass}`}
            />
          ) : item.icon ? (
            <img
              src={item.icon}
              alt=''
              aria-hidden='true'
              className='w-auto h-[16px] object-contain'
            />
          ) : null}
        </div>

        {!collapsed && (
          <span
            className={`text-[14px] line-clamp-1 ${labelClass} leading-none group-hover:text-white font-medium`}
          >
            {item.label}
          </span>
        )}
      </div>
    </Link>
  );
}
