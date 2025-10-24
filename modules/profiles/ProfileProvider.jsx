// modules/profiles/ProfileProvider.jsx
'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getSupabaseClient } from '@/modules/shared/supabaseClient';

const ProfileContext = createContext({
  loading: true,
  profile: null,
  refresh: async () => {},
});

export function ProfileProvider({ children, initialProfile }) {
  const supabase = getSupabaseClient();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(initialProfile ?? null);

  async function fetchProfile() {
    if (!supabase) {
      console.warn('[ProfileProvider] Missing Supabase client');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) throw sessionError;

      const user = sessionData?.session?.user;
      if (!user) {
        setProfile(null);
        return;
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .maybeSingle(); // allow no rows

      if (error) {
        if (error.code === 'PGRST116') {
          setProfile(null);
        } else {
          throw error;
        }
      } else {
        setProfile(data);
      }
    } catch (err) {
      console.error('[ProfileProvider] fetchProfile error:', err.message || err);
      setProfile(null);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 200);
    }
  }

  useEffect(() => {
    if (initialProfile) {
      setLoading(false);
    } else {
      fetchProfile();
    }
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) fetchProfile();
      else setProfile(null);
    });
    return () => listener?.subscription?.unsubscribe();
  }, []);

  const value = useMemo(
    () => ({
      loading,
      profile,
      refresh: fetchProfile,
    }),
    [loading, profile],
  );

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  return useContext(ProfileContext);
}
