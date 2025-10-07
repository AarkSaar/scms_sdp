'use client';

import React from 'react';
import Clip from '@/assets/iconComponents/Clip';
import Send from '@/assets/iconComponents/Send';

/**
 * CreateIssueActions
 *
 * Layout:
 *  - horizontal row (justify-between)
 *  - left: column with Clip icon + "Add attachment" label (clickable)
 *  - right: column with [checkbox + "Anonymous"] and [white Submit button with Submit icon]
 *
 * Props (optional):
 *  - onSubmit({ anonymous }) — called when the Submit button is clicked
 *  - onAttach() — called when clicking the add attachment area
 */
export default function CreateIssueActions({ onSubmit, onAttach }) {
  const [anonymous, setAnonymous] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (typeof onSubmit === 'function') onSubmit({ anonymous });
  }

  function handleAttach(e) {
    e.preventDefault();
    if (typeof onAttach === 'function') onAttach();
  }

  return (
    <div className='px-5 py-4 md:py-5 xl:pb-8 md:px-7 lg:px-8 w-full flex items-start justify-between'>
      {/* Left: attachment */}
      <button
        type='button'
        onClick={handleAttach}
        className='flex flex-row items-center gap-x-2.5 px-3 py-2  hover:bg-[#1a1a1a] rounded-[8px]'
        aria-label='Add attachment'
      >
        <Clip className='h-[14px] w-auto text-[#8e8e8e]' />
        <span className='hidden md:block text-[14px] font-medium text-[#fff]'>Add attachment</span>
      </button>

      {/* Right: anonymous + Submit */}
      <div className='flex flex-row items-center gap-4 lg:gap-3'>
        <label className='flex items-center gap-2 px-3 py-2 hover:bg-[#1a1a1a] rounded-[8px] select-none'>
          <input
            type='checkbox'
            checked={anonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
            className='h-3 w-3 accent-[#F188F0]'
            aria-label='Post anonymously'
          />
          <span className='text-[12px] font-semibold text-white'>Anonymous?</span>
        </label>

        <button
          type='button'
          onClick={handleSubmit}
          className='bg-white text-black px-4 py-2 rounded-full flex items-center gap-3'
          aria-label='Submit issue'
        >
          <span className='text-sm font-semibold'>Submit</span>
          <Send className='w-[12px] h-auto text-black' strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
