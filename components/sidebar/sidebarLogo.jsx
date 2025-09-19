// components/sidebar/sidebarLogo.jsx
'use client';

import OpenPanel from '@/assets/iconComponents/OpenPanel';
import react from 'react';
export default function SidebarLogo({ collapsed, hovered, onToggle }) {
  return (
    <div className='h-13'>
      {/*
        Expanded: logo_name.svg at left, panel icon button at right, auto spacing between
      */}
      {!collapsed ? (
        <div className='flex items-center pl-4 pr-2 h-full'>
          <img
            src='/icons/logo_name.svg'
            alt='Logo'
            className='h-8 w-auto select-none'
            draggable='false'
          />

          {/* auto space between logo and button */}
          <div className='flex-1' />

          {/* panel icon (collapse button) */}
          <button
            aria-label='Collapse sidebar'
            onClick={onToggle}
            className='w-7 h-7 flex items-center justify-center rounded-[8px] text-[#8e8e8e] hover:bg-[#1a1a1a] focus:bg-[#1f1f1f] focus:text-white focus:outline-none cursor-e-resize'
            title='Collapse'
          >
            <OpenPanel className='w-[16px] h-[16px]' />
          </button>
        </div>
      ) : (
        // Collapsed state
        <div className='flex items-center justify-center h-full w-full my-auto'>
          {hovered ? (
            <button
              aria-label='Expand sidebar'
              onClick={onToggle}
              className='w-7 h-7 flex items-center justify-center rounded-[8px] text-[#8e8e8e] hover:bg-[#1a1a1a] focus:bg-[#1f1f1f] focus:text-white focus:outline-none cursor-e-resize'
              title='Expand'
            >
              <OpenPanel className='w-[16px] h-[16px]' />
            </button>
          ) : (
            <img
              src='/icons/Logo.svg'
              alt='App logo'
              className='h-[32px] w-auto'
              draggable='false'
            />
          )}
        </div>
      )}
    </div>
  );
}
