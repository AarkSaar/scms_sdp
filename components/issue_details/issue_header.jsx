// C:\Users\mahdi\React\scms_sdp\components\issue_details\issue_header.jsx

'use client';

import React from 'react';
import {
  ClipboardIcon,
  StarIcon,
  EllipsisVerticalIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

export default function IssueHeader({ issue, onClose, loading }) {
  return (
    <div className='flex items-center justify-between px-4 py-3 border-b border-[#1f1f1f]'>
      <div className='flex items-center gap-3'>
        <button
          onClick={onClose}
          aria-label='Close'
          className='p-2 rounded-md hover:bg-[#161616] text-[#bdbdbd]'
        >
          <XMarkIcon className='w-4 h-4' />
        </button>
        <div className='text-white font-semibold'>Issue</div>
      </div>

      <div className='flex items-center gap-3'>
        <button
          title='Star'
          className='flex items-center gap-2 px-2 py-1 rounded-md hover:bg-[#161616]'
        >
          <StarIcon className='w-4 h-4 text-[#cfcfcf]' />
          <span className='text-sm text-[#cfcfcf]'>12</span>
        </button>

        <button title='Copy link' className='p-2 rounded-md hover:bg-[#161616] text-[#cfcfcf]'>
          <ClipboardIcon className='w-4 h-4' />
        </button>

        <button title='More' className='p-2 rounded-md hover:bg-[#161616] text-[#cfcfcf]'>
          <EllipsisVerticalIcon className='w-4 h-4' />
        </button>
      </div>
    </div>
  );
}
