'use client';

import { useSidebar } from '../../hooks/useSidebar';
import Equals from '@/assets/iconComponents/Equals';
import X from '@/assets/iconComponents/X';
import CaretDown from '@/assets/iconComponents/CaretDown';

export default function Header() {
  const { setMobileOpen } = useSidebar();

  return (
    // non-scrolling header, fixed height within page column
    <header className='w-full flex-shrink-0 flex flex-col border-b gap-2 lg:gap-3 border-[#1f1f1f] px-6 py-4 bg-transparent'>
      {/* Top bar */}
      <div className='flex justify-between items-center'>
        <div className='flex gap-x-1 items-center w-fit'>
          <div
            className='h-7 w-7 rounded-[8px] flex items-center justify-center lg:hidden text-[#8e8e8e] hover:bg-[#1f1f1f] focus:text-white cursor-pointer'
            onClick={() => setMobileOpen(true)}
            role='button'
            aria-label='Open mobile sidebar'
          >
            <Equals strokeWidth={1.5} className={`w-4 md:w-5 h-auto`} />
          </div>
          <span className='text-white inline font-bold text-[16px] lg:text-[18px]'>
            Create Issue
          </span>
        </div>

        <div className='flex flex-row items-center gap-x-2.5 px-3 py-2 hover:bg-[#1a1a1a] cursor-pointer w-fit h-fit rounded-[8px]'>
          <div className='flex items-center justify-center w-[18px] h-[18px]'>
            <X strokeWidth={1.25} className={`h-[13px] w-auto text-[#8e8e8e]`} />
          </div>

          <span className='hidden md:block text-[12px] lg:text-[14px] font-medium text-[#d2d2d2] leading-none group-hover:text-white'>
            Cancel
          </span>
        </div>
      </div>
    </header>
  );
}
