// components/auth/signUpForm.jsx
'use client';
import React, { useState } from 'react';
import LockIcon from '@/assets/iconComponents/LockFill';
import { getSupabaseClient } from '@/modules/shared/supabaseClient';
import { useRouter } from 'next/navigation';
import { useProfile } from '@/modules/profiles/ProfileProvider';
import { useToast } from '@/components/Shared/ToastProvider';
import MailFill from '@/assets/iconComponents/MailFIll';
import GoogleLogo from '@/assets/iconComponents/GoogleIcon';
import EyeIcon from '@/assets/iconComponents/Eye';
import EyeOffIcon from '@/assets/iconComponents/EyeOff';
import UserIcon from '@/assets/iconComponents/UserIcon';

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const { refresh: refreshProfile, profile, loading: profileLoading } = useProfile();
  const router = useRouter();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showEye, setShowEye] = useState(false);

  // helper to wait for auth state propagation (resolve early on timeout)
  async function handleSignUp(e) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const name = (form.get('name') || '').toString().trim();
    const email = (form.get('email') || '').toString().trim();
    const password = (form.get('password') || '').toString();

    if (!email || !password) {
      toast({ type: 'error', message: 'Please enter email and password' });
      setLoading(false);
      return;
    }

    // build a simple username
    const local = email.split('@')[0] || '';
    const username =
      local
        .toLowerCase()
        .replace(/[^a-z0-9-_.]/g, '')
        .slice(0, 40) || `user${Date.now()}`;

    try {
      const resp = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, username }),
      });

      const contentType = resp.headers.get('content-type') || '';
      const payload = contentType.includes('application/json')
        ? await resp.json()
        : { error: await resp.text() };

      if (!resp.ok) {
        toast({ type: 'error', message: payload.error || 'Sign up failed' });
        setLoading(false);
        return;
      }

      const { profile, session } = payload.data;

      const supabase = getSupabaseClient();
      if (!supabase) {
        toast({ type: 'error', message: 'Supabase not configured in browser.' });
        setLoading(false);
        return;
      }

      if (session) {
        await supabase.auth.setSession({
          access_token: session.access_token,
          refresh_token: session.refresh_token,
        });
      }
      await new Promise((r) => setTimeout(r, 400));
      await refreshProfile();
      // Optionally store profile so Provider can use it immediately
      router.push('/issues/all');
    } catch (err) {
      console.error('Sign up unexpected error', err);
      toast({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSignUp} className='flex flex-col gap-5 w-full max-w-lg'>
      <div className='space-y-3  text-[14px] font-medium'>
        <div className='w-full items-center bg-[#161616] flex flex-row gap-x-2.5  border border-[#1f1f1f] px-3.5 h-9.5 rounded-[10px] hover:border-[#2f2f2f] focus:border-[#FC83F0]/50'>
          <UserIcon width={14} strokeWidth={2} fillColor='#787878' />
          <input
            name='name'
            type='text'
            placeholder='Display Name'
            className=' outline-none w-full focus-none text-white placeholder:text-[#8e8e8e] placeholder:font-medium placeholder:text-[14px]'
          />
        </div>
        <div className='w-full items-center bg-[#161616] flex flex-row gap-x-2.5  border border-[#1f1f1f] px-3.5 h-9.5 rounded-[10px] hover:border-[#2f2f2f] focus:border-[#FC83F0]/50'>
          <MailFill width={14} fillColor='#787878' />
          <input
            name='email'
            type='email'
            placeholder='Email'
            className=' outline-none w-full focus-none text-white placeholder:text-[#8e8e8e] placeholder:font-medium placeholder:text-[14px]'
          />
        </div>
        <div className='w-full items-center cursor-text bg-[#161616] flex flex-row justify-between border border-[#1f1f1f] pl-3.5 pr-1 h-9.5 rounded-[10px] hover:border-[#2f2f2f] focus:border-[#FC83F0]/50'>
          <div className='flex flex-row gap-x-2.5 items-center justify-start w-full'>
            <LockIcon width={14} fillColor='#787878' />
            <input
              name='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              onChange={(e) => setShowEye(e.target.value.length > 0)}
              className=' outline-none w-full focus-none text-white placeholder:text-[#8e8e8e] placeholder:font-medium placeholder:text-[14px]'
            />
          </div>
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='text-[#787878] flex flex-col items-center justify-center w-7 h-7 rounded-[8px] hover:bg-[#2f2f2f]'
          >
            {showEye &&
              (showPassword ? (
                <EyeOffIcon strokeWidth={1.5} className='w-3.5 h-auto mx-auto' />
              ) : (
                <EyeIcon strokeWidth={1.5} className='w-3.5 h-auto mx-auto' />
              ))}
          </button>
        </div>
      </div>

      <button
        type='submit'
        disabled={loading}
        className='bg-[#FC83F0] cursor-pointer text-black py-2.5 rounded-full font-semibold hover:opacity-95 focus:border focus:border-white'
      >
        {loading ? 'Creating…' : 'Continue'}
      </button>

      <div className='flex items-center gap-4 px-5'>
        <div className='flex-1 h-[1px] bg-[#2f2f2f]' />
        <div className='text-[14px] font-bold text-[#787878] px-2'>OR</div>
        <div className='flex-1 h-[1px] bg-[#2f2f2f]' />
      </div>

      <button
        type='button'
        className='flex flex-row justify-between items-center bg-[#1f1f1f] w-full px-3 py-2.5 rounded-full text-white cursor-pointer hover:bg-[#242424] focus:border focus:border-[#2f2f2f]'
      >
        <GoogleLogo className='h-4.5 w-auto select-none' />

        <div className='text-center w-full font-medium'>Continue with Google</div>
        <div className='w-4.5 h-4.5'></div>
      </button>
    </form>
  );
}
