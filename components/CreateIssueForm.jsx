'use client';

import React from 'react';

export default function CreateIssueForm() {
  return (
    <form className='flex flex-col gap-4 lg:gap-6 w-full px-5 py-3 md:px-[60px] lg:px-[96px] xl:px-[160px] items-start justify-start h-full'>
      {/* Title input */}
      <input
        type='text'
        placeholder='Title'
        className='placeholder:text-[#585858] placeholder:text-[24px] w-full lg:placeholder:text-[32px] text-white text-[24px] lg:text-[32px] font-bold placeholder:font-bold focus:outline-none pt-9 md:pt-15 lg:pt-18'
      />

      {/* Divider */}
      <div className='w-full border-b border-[#1a1a1a]'></div>

      {/* Description textarea */}
      <textarea
        placeholder='Give a description of your issue here...'
        className='placeholder:text-[#8e8e8e] placeholder:text-[14px] lg:placeholder:text-[16px] text-white text-[14px] lg:text-[16px] font-medium placeholder:font-medium focus:outline-none h-full w-full resize-none'
      ></textarea>
    </form>
  );
}
