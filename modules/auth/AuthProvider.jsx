// modules/auth/AuthProvider.jsx
'use client';

import React, { createContext, useState, useEffect } from 'react';
import { getSupabaseClient } from '@/modules/shared/supabaseClient';

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const client = getSupabaseClient();
    if (!client) {
      // client missing (likely env vars not set). Don't crash — keep loading=false so UI can render an error UI if desired.
      setUser(null);
      setLoading(false);
      console.warn('Supabase client unavailable in AuthProvider (check NEXT_PUBLIC env vars).');
      return;
    }

    let mounted = true;
    // get initial session
    client.auth
      .getSession()
      .then((res) => {
        if (!mounted) return;
        const data = res?.data ?? res;
        const session = data?.session ?? null;
        const userFromSession = data?.user ?? session?.user ?? null;
        setUser(userFromSession);
        setLoading(false);
      })
      .catch((err) => {
        console.error('getSession error', err);
        setLoading(false);
      });

    // subscribe to changes
    const { data: listener } = client.auth.onAuthStateChange((_event, session) => {
      const u = session?.user ?? null;
      setUser(u);
    });

    return () => {
      mounted = false;
      // listener might be undefined if SDK changed shape — guard it
      try {
        if (listener?.subscription?.unsubscribe) {
          listener.subscription.unsubscribe();
        } else if (listener?.unsubscribe) {
          listener.unsubscribe();
        }
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, []);

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>;
}

export { AuthContext };
