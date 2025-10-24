'use client';

import React from 'react';

export default function ActivityLog({ entries = [] }) {
  if (!entries || entries.length === 0) {
    return <div className='text-[#999]'>No activity yet.</div>;
  }

  return (
    <ul className='space-y-4'>
      {entries.map((e, idx) => (
        <li key={idx} className='flex gap-3'>
          <div className='flex flex-col items-center'>
            <div className='w-8 h-8 rounded-full bg-[#e5e7eb] text-black flex items-center justify-center text-sm'>
              {e.actor
                ?.split(' ')
                .map((s) => s[0])
                .slice(0, 2)
                .join('')}
            </div>
            {idx < entries.length - 1 && <div className='w-px h-full bg-[#2a2a2a] mt-2' />}
          </div>

          <div className='flex-1'>
            <div className='text-sm'>
              <span className='font-semibold text-white'>{e.actor}</span>
              <span className='text-[#ddd]'> {e.text}</span>
            </div>
            <div className='text-xs text-[#8e8e8e] mt-1'>{e.when}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
