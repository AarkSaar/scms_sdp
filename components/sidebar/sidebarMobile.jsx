// components/sidebar/MobileSidebar.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import { useSidebar } from '../../hooks/useSidebar';
import navItems from '../../lib/navItems';
import SidebarItem from './sidebarItem';
import X from '@/assets/iconComponents/X';
import CreateIssueButton from './createIssueButton';
import Expand from '@/assets/iconComponents/Expand';

export default function MobileSidebar() {
  const { mobileOpen, setMobileOpen } = useSidebar();
  const closeBtnRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setMobileOpen(false);
    }

    if (mobileOpen) {
      // focus the close button for accessibility
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen, setMobileOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden ${mobileOpen ? '' : 'pointer-events-none'}`}
      aria-hidden={!mobileOpen}
    >
      {/* backdrop */}
      <div
        className={`absolute inset-0 bg-black/10 transition-opacity ${
          mobileOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden='true'
      />

      {/* panel */}
      <div
        role='dialog'
        aria-modal='true'
        aria-label='Mobile sidebar'
        className={`max-h-[100dvh] absolute border-r border-[#1f1f1f] left-0 top-0 bottom-0 w-72 bg-[#0b0b0b] transform transition-transform duration-200 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        {/* header (your logo + close button kept as-is) */}
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img
              src='/icons/logo_name.svg'
              alt='Logo'
              className='h-8 w-auto select-none'
              draggable='false'
            />
          </div>

          <button
            ref={closeBtnRef}
            onClick={() => setMobileOpen(false)}
            className='flex items-center text-[#8e8e8e] justify-center w-7 h-7 rounded-[8px] hover:bg-[#1a1a1a] focus:text-white focus:bg-[#1f1f1f]'
            aria-label='Close sidebar'
          >
            <X className='w-3 h-3' />
          </button>
        </div>

        {/* main content: replicate desktop's space-y-4 structure */}
        <div className='flex-1 overflow-y-auto p-2'>
          <div className='space-y-4'>
            {/* Create Issue button area */}
            <div className='w-full px-4'>
              <CreateIssueButton className='w-full' />
            </div>

            {/* Issues group */}
            <div className='space-y-[2px]'>
              <div className='px-4 py-1 text-[12px] text-[#8e8e8e] font-semibold'>Issues</div>
              <div className='space-y-[4px]'>
                {navItems.slice(0, 2).map((i) => (
                  <SidebarItem
                    key={i.id}
                    item={i}
                    collapsed={false}
                    onClick={() => setMobileOpen(false)}
                  />
                ))}
              </div>
            </div>

            {/* Updates group */}
            <div className='space-y-[2px]'>
              <div className='px-4 py-1 text-[12px] text-[#8e8e8e] font-semibold'>Updates</div>
              <div className='space-y-[4px]'>
                {navItems.slice(2).map((i) => (
                  <SidebarItem
                    key={i.id}
                    item={i}
                    collapsed={false}
                    onClick={() => setMobileOpen(false)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* profile (replicated desktop profile block) */}
        <div className='p-4'>
          <div className='w-full flex items-center justify-between p-1 rounded-[12px] bg-[#1a1a1a] border-[1.5px] border-[#1F1F1F]'>
            {/* avatar + details */}
            <div className='flex items-center gap-3'>
              <div className='w-[42px] h-[42px] rounded-[9.33px] bg-[#E5A13C] flex items-center justify-center text-[14px] font-extrabold text-black'>
                TS
              </div>
              <div className='flex flex-col gap-y-0.5'>
                <div className='text-white text-[12px] font-semibold'>Thomas Smith</div>
                <div className='text-[10px] truncate text-[#aaaaaa] font-medium'>
                  thomas.smith@aun.edu.ng
                </div>
              </div>
            </div>

            {/* expand/collapse affordance (keeps same UI as desktop) */}
            <div className='self-start flex items-start justify-center pt-2 w-6 h-auto cursor-n-resize'>
              <Expand height={12} className='block text-[#8e8e8e]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
