// components/Header.jsx
'use client';

import { useSidebar } from '../hooks/useSidebar'; // adjust path if needed
import SearchBar from './searchBar';
import ViewTabs from './viewTabs';
import ViewOptionItem from './viewOptionItem';
import Columns from '@/assets/iconComponents/Columns';
import Filter from '@/assets/iconComponents/Filter';
import Equals from '@/assets/iconComponents/Equals';
import UpDownArrow from '@/assets/iconComponents/UpDownArrow';

const viewOptionItems = [
  { id: 'group', label: 'Grouping', dropdown: true, Icon: Columns },
  { id: 'sort', label: 'Ordering', dropdown: true, Icon: UpDownArrow },
  { id: 'filter', label: 'Filter', dropdown: false, Icon: Filter },
];

export default function Header() {
  const { setMobileOpen } = useSidebar();

  return (
    <header className='w-full bg-transparent flex flex-col border-b gap-2 lg:gap-3 border-[#1f1f1f] px-6 pt-4 pb-4'>
      {/* Top bar */}
      <div className='flex justify-between items-center'>
        <div className='flex gap-x-2 items-center w-fit'>
          <div
            className='h-6 w-6 rounded-[4px] flex items-center justify-center lg:hidden text-[#8e8e8e] hover:bg-[#1f1f1f] focus:text-white cursor-pointer'
            onClick={() => setMobileOpen(true)}
            role='button'
            aria-label='Open mobile sidebar'
          >
            <Equals strokeWidth={1.25} className={`w-4 md:w-5 h-auto`} />
          </div>
          <span className='text-white inline font-bold text-[16px] lg:text-[18px]'>All Issues</span>
        </div>
        <SearchBar />
      </div>

      {/* Bottom bar */}
      <div className='flex justify-between items-center'>
        {/* Left toggle group */}
        <div className=''>
          <ViewTabs />
        </div>

        <div className='flex gap-x-[8px] lg:gap-x-[12px]'>
          <div className='flex gap-x-[6px] lg:gap-x-[8px]'>
            {viewOptionItems.slice(0, 2).map((i) => (
              <ViewOptionItem key={i.id} item={i} />
            ))}
          </div>
          <ViewOptionItem
            key={viewOptionItems.find((it) => it.id === 'filter').id}
            item={viewOptionItems.find((it) => it.id === 'filter')}
          />
        </div>
      </div>
    </header>
  );
}
