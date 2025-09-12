'use client';

import CaretDown from '@/assets/iconComponents/CaretDown';
import React from 'react';

export default function ViewOptionItem({ item, collapsed, onClick }) {
  const Icon = item.Icon;
  const Dropdown = item.Dropdown;

  return (
    <div>
      {/* icon + label wrapper */}
      <div
        className={`flex items-center gap-3 w-fit h-fit bg-[#1a1a1a] px-2.5 py-2 rounded-[12px] ${
          item.id === 'filter' ? 'border border-[#1a1a1a]' : 'border border-[#262626]'
        }`}
      >
        <div className='flex items-center gap-1 w-fit h-fit'>
          <div className='flex items-center justify-center w-[18px] h-[18px]'>
            {Icon ? (
              <Icon strokeWidth={1.25} className='w-auto h-[10px] text-[#8e8e8e]' />
            ) : item.icon ? (
              <img
                src={item.icon}
                alt=''
                aria-hidden='true'
                className='w-auto h-[10px] object-contain'
              />
            ) : null}
          </div>

          <span className='hidden lg:block text-[14px] font-medium text-[#d2d2d2] leading-none group-hover:text-white'>
            {item.label}
          </span>
        </div>
        {item.dropdown === true && (
          <div>
            <CaretDown strokeWidth={1} className='w-[8px] h-auto text-[#fff]' />
          </div>
        )}
      </div>
    </div>
  );
}
