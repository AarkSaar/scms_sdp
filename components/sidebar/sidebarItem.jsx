'use client';

import React from 'react';

export default function SidebarItem({ item, collapsed, onClick }) {
  const Icon = item.Icon;

  return (
    <a
      href={item.href}
      onClick={onClick}
      className={`flex items-center px-4 py-2 hover:bg-[#1a1a1a] ${
        collapsed ? 'justify-center' : 'gap-3'
      } group`} // add "group" to use group-hover
    >
      {/* icon + label wrapper */}
      <div className='flex items-center gap-3'>
        <div className='flex items-center justify-center w-4 h-4'>
          {Icon ? (
            <Icon
              strokeWidth={item.label === 'My issues' ? 3 : 1.25}
              className='w-auto h-[16px] text-[#8e8e8e]'
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
          <span className='text-[14px] font-medium text-[#d2d2d2] leading-none group-hover:text-white'>
            {item.label}
          </span>
        )}
      </div>
    </a>
  );
}
