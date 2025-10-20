'use client';
import React from 'react';

export default function Tabs({ active = 'SignUp', onChange = () => {} }) {
  return (
    <div className='bg-[#1a1a1a] border border-[#262626] flex gap-x-0 p-1 w-fit h-fit cursor-pointer rounded-[12px]'>
      <div
        onClick={() => onChange('SignUp')}
        className={`flex gap-x-1 items-center ${
          active === 'SignUp' ? 'bg-[#2a2a2a] rounded-[8px]' : ''
        } px-3 py-1.5 w-fit`}
      >
        <div
          className={`text-[14px] ${
            active === 'SignUp' ? 'text-white font-semibold' : 'text-[#8e8e8e] font-medium'
          }`}
        >
          Sign up
        </div>
      </div>

      <div
        onClick={() => onChange('SignIn')}
        className={`flex gap-x-1 items-center ${
          active === 'SignIn' ? 'bg-[#2a2a2a] rounded-[8px]' : ''
        } px-3 py-1.5 w-fit`}
      >
        <div
          className={`text-[14px] ${
            active === 'SignIn' ? 'text-white font-semibold' : 'text-[#8e8e8e] font-medium'
          }`}
        >
          Sign in
        </div>
      </div>
    </div>
  );
}
