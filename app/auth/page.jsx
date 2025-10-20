// app/auth/page.jsx
'use client';

import React, { useState } from 'react';
import ViewTabs from '@/components/auth/Tabs';
import SignUp from '@/components/auth/SignUpForm';
import SignIn from '@/components/auth/SignInForm';
import BrandingSection from '@/components/auth/BrandingSection';
import LogoName from '@/assets/iconComponents/LogoName'; // provided by you

export default function AuthPage() {
  const [tab, setTab] = useState('SignUp'); // 'SignUp' | 'SignIn'

  return (
    <div className='h-dvh max-h-dvh flex bg-[#0a0a0a] p-2 leading-tight'>
      {/* left: content */}
      <div
        className='flex flex-col w-full md:w-full py-4 gap-12'
        style={{
          backgroundImage: "url('/dotted-background.svg')",
          backgroundPosition: 'left top',
          backgroundSize: '200% 200%',
          backgroundRepeat: 'repeat-x',
        }}
      >
        {/* top row: logo + tabs */}
        <div className='flex items-center justify-between w-full px-5 lg:px-10'>
          <img
            src='/icons/logo_name.svg'
            alt='Logo'
            className='h-7 w-auto select-none'
            draggable='false'
          />

          <ViewTabs active={tab} onChange={(v) => setTab(v)} />
        </div>

        <div className='flex flex-col px-5 md:px-0 lg:px-7 xl:px-10 gap-y-16 w-full items-center'>
          <div className='flex flex-col gap-y-12 w-full md:max-w-[440px]'>
            {/* second: logo big + title + subtext */}
            <div className='flex flex-col gap-y-5 items-start lg:items-center'>
              {/* you mentioned a Logo.jsx too */}
              <img
                src='/icons/logo.svg'
                alt='Logo'
                className='h-17 w-auto select-none'
                draggable='false'
              />
              <div className='space-y-2.5'>
                <h1 className='text-[20px] font-bold text-white lg:text-center leading-tight'>
                  {tab === 'SignUp' ? 'HELLO THERE :)' : 'WELCOME BACK !!!'}
                </h1>
                <p className='text-[14px] lg:text-center font-medium text-[#8e8e8e]'>
                  {tab === 'SignUp'
                    ? 'Enter your details to create an account.'
                    : 'Enter your details to sign in to your account.'}
                </p>
              </div>
            </div>

            {/* third: forms */}
            <div className='w-full flex justify-center'>
              {tab === 'SignUp' ? <SignUp /> : <SignIn />}
            </div>
          </div>

          {/* fourth: bottom helper text */}
          <div className='text-[14px] font-semibold text-[#787878] text-center'>
            {tab === 'SignUp' ? (
              <>
                Already have an account?&nbsp;
                <button
                  className='text-[#3BD3EF] cursor-pointer hover:underline'
                  onClick={() => setTab('SignIn')}
                >
                  Log in
                </button>
              </>
            ) : (
              <>
                Don’t have an account?&nbsp;
                <button
                  className='text-[#3BD3EF] cursor-pointer hover:underline'
                  onClick={() => setTab('SignUp')}
                >
                  Create one
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* right: branding / image — hidden on md and below */}
      {/* <BrandingSection /> */}
    </div>
  );
}
