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
            className='h-7 w-auto select-none'
            draggable='false'
          />

          {/* auto space between logo and button */}
          <div className='flex-1' />

          {/* panel icon (collapse button) */}
          <button
            aria-label='Collapse sidebar'
            onClick={onToggle}
            className='w-6 h-6 flex items-center justify-center rounded-md hover:bg-white/10 cursor-e-resize focus:outline-none focus:ring-2 focus:ring-white/20'
            title='Collapse'
          >
            <img
              src='/icons/OpenPanel.svg'
              alt='Collapse'
              aria-hidden='true'
              className='w-4 h-4'
              draggable='false'
            />
          </button>
        </div>
      ) : (
        // Collapsed state
        <div className='flex items-center justify-center h-full w-full my-auto'>
          {hovered ? (
            <button
              aria-label='Expand sidebar'
              onClick={onToggle}
              className='w-6 h-6 flex items-center justify-center rounded-md hover:bg-white/10 focus:outline-none cursor-e-resize'
              title='Expand'
            >
              <OpenPanel className='w-[16px] h-[16px]' />
            </button>
          ) : (
            <img
              src='/icons/Logo.svg'
              alt='App logo'
              className='h-[28px] w-auto'
              draggable='false'
            />
          )}
        </div>
      )}
    </div>
  );
}
