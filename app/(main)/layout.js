// app/(main)/layout.jsx
'use client';

import React from 'react';
import { ProfileProvider } from '@/modules/profiles/ProfileProvider';
import { SidebarProvider } from '@/hooks/useSidebar'; // adjust path if necessary
import Sidebar from '@/components/sidebar/sidebar';
import MobileSidebar from '@/components/sidebar/sidebarMobile';

export default function MainLayout({ children }) {
  return (
    <ProfileProvider>
      <SidebarProvider>
        {/* root container fills the screen */}
        <div className='h-full max-w-full flex gap-x-2 lg:p-2'>
          {/* Desktop sidebar wrapper (hidden below lg). make it full height */}
          <div className='hidden lg:flex h-full'>
            <Sidebar />
          </div>

          {/* Content column: allow it to grow and shrink; internal scrolling will happen in main */}
          <div className='flex-1 min-h-0 min-w-0 flex flex-col w-full'>
            {/* main is the scroll host for the page; ensure it doesn't expand parent */}
            <main className='flex-1 min-h-0 h-full min-w-0 w-full overflow-hidden rounded-[4px] bg-[#101010] border border-[#161616]'>
              {children}
            </main>
          </div>

          {/* Mobile sidebar overlay */}
          <MobileSidebar />
        </div>
      </SidebarProvider>
    </ProfileProvider>
  );
}
