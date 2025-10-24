// components/CreateIssue/CreateIssueActions.jsx
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
export default function CreateIssueActions({ onSubmit, onAttach, submitting = false }) {
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
      <div className='flex flex-row items-center gap-1 lg:gap-3'>
        <label className='flex items-center gap-2 px-3 py-2 hover:bg-[#1a1a1a] rounded-[8px] select-none cursor-pointer'>
          {/* checkbox + absolute checkmark */}
          <div className='relative flex items-center'>
            <input
              type='checkbox'
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
              className='peer h-3.5 w-3.5 cursor-pointer transition-all appearance-none rounded-sm
                 bg-[#1a1a1a] border border-[#2f2f2f]
                 checked:bg-[#F188F0] checked:border-transparent'
              aria-label='Post anonymously'
            />

            {/* SVG check — centered inside the checkbox, visible only when checked */}
            <span
              className='absolute inset-0 flex items-center justify-center pointer-events-none
                     opacity-0 peer-checked:opacity-100 transition-opacity duration-150'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-3 w-3'
                viewBox='0 0 20 20'
                fill='none'
                stroke='none'
              >
                <path
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  fill='#000'
                />
              </svg>
            </span>
          </div>

          {/* label text */}
          <span className='text-[12px] font-semibold text-white'>Anonymous?</span>
        </label>

        <button
          type='button'
          onClick={handleSubmit}
          disabled={submitting}
          className={`px-4 py-2 rounded-full flex items-center gap-3 ${
            submitting ? 'bg-gray-400 text-black/60' : 'bg-white text-black'
          }`}
          aria-label='Submit issue'
        >
          <span className='text-sm font-semibold'>{submitting ? 'Submitting…' : 'Submit'}</span>
          <Send className='w-[12px] h-auto text-black' strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
