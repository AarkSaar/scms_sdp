'use client';

import { useSidebar } from '../../hooks/useSidebar';
import SearchBar from '../searchBar';
import ViewTabs from '../viewTabs';
import ViewOptionItem from '../viewOptionItem';
import Columns from '@/assets/iconComponents/Columns';
import Filter from '@/assets/iconComponents/Filter';
import Equals from '@/assets/iconComponents/Equals';
import UpDownArrow from '@/assets/iconComponents/UpDownArrow';

const viewOptionItems = [
  { id: 'group', label: 'Grouping', dropdown: true, Icon: Columns },
  { id: 'sort', label: 'Ordering', dropdown: true, Icon: UpDownArrow },
  { id: 'filter', label: 'Filter', dropdown: false, Icon: Filter },
];

export default function Header({ activeView = 'list', setActiveView = () => {} }) {
  const { setMobileOpen } = useSidebar();

  return (
    // non-scrolling header, fixed height within page column
    <header className='w-full flex-shrink-0 flex flex-col border-b gap-2 lg:gap-3 border-[#1f1f1f] px-6 pt-4 pb-4 bg-transparent'>
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
          <span className='text-white inline font-bold text-[16px] lg:text-[18px]'>All Issues</span>
        </div>
        <SearchBar />
      </div>

      {/* Bottom bar */}
      <div className='flex justify-between items-center'>
        <div>
          <ViewTabs active={activeView} onChange={setActiveView} />
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
