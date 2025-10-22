// components/auth/signInForm.jsx
'use client';
import React, { useState } from 'react';
import { getSupabaseClient } from '@/modules/shared/supabaseClient';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/Shared/ToastProvider';
import MailFill from '@/assets/iconComponents/MailFIll';
import GoogleLogo from '@/assets/iconComponents/GoogleIcon';
import LockIcon from '@/assets/iconComponents/LockFill';
import EyeIcon from '@/assets/iconComponents/Eye';
import EyeOffIcon from '@/assets/iconComponents/EyeOff';

export default function SignIn() {
  const supabase = getSupabaseClient();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showEye, setShowEye] = useState(false);

  async function handleSignIn(e) {
    e.preventDefault();
    if (!supabase) {
      toast({ type: 'error', message: 'Supabase not configured. Check NEXT_PUBLIC env vars.' });
      return;
    }

    setLoading(true);
    const form = new FormData(e.currentTarget);
    const email = (form.get('email') || '').toString().trim();
    const password = (form.get('password') || '').toString();

    if (!email || !password) {
      toast({ type: 'error', message: 'Please enter email and password' });
      setLoading(false);
      return;
    }

    try {
      // Use the browser/anon client directly to sign in
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('signInWithPassword error', error);
        toast({ type: 'error', message: error.message || 'Sign in failed' });
        setLoading(false);
        return;
      }

      const session = data?.session ?? null;
      const user = data?.user ?? session?.user ?? null;

      // set session in browser client (supabase-js v2)
      if (session && session.access_token && session.refresh_token) {
        await supabase.auth.setSession({
          access_token: session.access_token,
          refresh_token: session.refresh_token,
        });
      }

      toast({ type: 'success', message: 'Signed in' });

      // Navigate to your app
      router.push('/app/issues/all');
    } catch (err) {
      console.error('Sign in unexpected error', err);
      toast({ type: 'error', message: 'Something went wrong, please try again.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSignIn} className='flex flex-col gap-5 w-full max-w-lg'>
      <div className='space-y-3 text-[14px] font-medium'>
        <div className='w-full items-center bg-[#161616] flex flex-row gap-x-2.5 border border-[#1f1f1f] px-3.5 h-9.5 rounded-[10px] hover:border-[#2f2f2f] focus:border-[#FC83F0]/50'>
          <MailFill width={14} fillColor='#787878' />
          <input
            name='email'
            type='email'
            placeholder='Email'
            className=' outline-none w-full focus-none text-white placeholder:text-[#8e8e8e] placeholder:font-medium  placeholder:text-[14px]'
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
              className=' outline-none w-full focus-none text-white placeholder:text-[#8e8e8e] placeholder:text-[14px] placeholder:font-medium'
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
        {loading ? 'Signing in…' : 'Continue'}
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
