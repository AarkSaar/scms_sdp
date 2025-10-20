'use client';
import React from 'react';

export default function BrandingSection() {
  return (
    <div className='w-full hidden md:flex flex-1 items-center justify-center bg-[#101010] border border-[#161616] rounded-[4px]'>
      {/* left blank background as requested; add an image or SVG later */}
      <div
        style={{ backgroundImage: "url('/images/library.jpeg')" }}
        className='w-full h-full flex items-center justify-center text-[#6b6b6b] bg-cover overflow-hidden rounded-[4px]'
      >
        {/* placeholder */}
      </div>
    </div>
  );
}
