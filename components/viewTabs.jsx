'use client';
import React, { useState } from 'react';
import ListView from '@/assets/iconComponents/ListView';
import BoardView from '@/assets/iconComponents/BoardView';

export default function ViewTabs() {
  const [active, setActive] = useState('list');
  return (
    <div className='bg-[#1a1a1a] border border-[#262626] flex gap-x-0 p-1 w-fit h-fit cursor-pointer rounded-[12px]'>
      <div
        onClick={() => setActive('list')}
        className={`flex gap-x-1 items-center ${
          active === 'list' ? 'bg-[#2a2a2a] rounded-[8px]' : ''
        } px-2 py-1.5 w-fit`}
      >
        <div className='w-[18px] h-[18px] flex items-center justify-center'>
          <ListView
            strokeWidth={1.25}
            className={`h-[12px] w-auto ${active === 'list' ? 'text-[#fff]' : 'text-[#8e8e8e]'}`}
          />
        </div>
        <div
          className={`text-[12px] hidden md:block ${
            active === 'list' ? 'text-[#ffffff] font-semibold' : 'text-[#8e8e8e] font-medium'
          }`}
        >
          List view
        </div>
      </div>
      <div
        onClick={() => setActive('board')}
        className={`flex gap-x-1 items-center ${
          active === 'board' ? 'bg-[#2a2a2a] rounded-[8px]' : ''
        } px-2 py-1.5 w-fit`}
      >
        <div className='w-[18px] h-[18px] flex items-center justify-center'>
          <BoardView
            strokeWidth={1.25}
            className={`h-[12px] w-auto ${active === 'board' ? 'text-[#fff]' : 'text-[#8e8e8e]'}`}
          />
        </div>
        <div
          className={`text-[12px] hidden md:block ${
            active === 'board' ? 'text-[#ffffff] font-semibold' : 'text-[#8e8e8e] font-medium'
          }`}
        >
          Board view
        </div>
      </div>
    </div>
  );
}
