// app/components/Header.jsx
'use client';

import SearchBar from './searchBar';
import ViewTabs from './viewTabs';
import ViewOptionItem from './viewOptionItem';
import Columns from '@/assets/iconComponents/Columns';
import Filter from '@/assets/iconComponents/Filter';
import Filter2 from '@/assets/iconComponents/Filter2';

const viewOptionItems = [
  { id: 'group', label: 'Grouping', dropdown: true, Icon: Columns },
  { id: 'sort', label: 'Ordering', dropdown: true, Icon: Filter2 },
  { id: 'filter', label: 'Filter', dropdown: false, Icon: Filter },
];

export default function Header() {
  return (
    <header className='w-full bg-transparent flex flex-col border-b gap-3 border-[#1f1f1f] px-6 pt-4 pb-4'>
      {/* Top bar */}
      <div className='flex justify-between items-center'>
        <span className='text-white font-semibold text-[18px]'>All Issues</span>
        <SearchBar />
      </div>

      {/* Bottom bar */}
      <div className='flex justify-between items-center'>
        {/* Left toggle group */}
        <div className=''>
          <ViewTabs />
        </div>

        <div className='flex gap-x-[12px]'>
          <div className='flex gap-x-[8px]'>
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
