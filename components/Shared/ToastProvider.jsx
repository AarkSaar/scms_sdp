'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext(null);

export function useToast() {
  return useContext(ToastContext);
}

/**
 * ToastProvider wraps your app (or a subtree) and provides `toast({type, message})`.
 * It also renders a simple toast container.
 */
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback(({ type = 'info', message = '', duration = 3000 }) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, type, message }]);
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, duration);
  }, []);

  const value = { toast };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className='fixed bottom-6 right-6 z-50 flex flex-col gap-2'>
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`min-w-[220px] max-w-sm px-4 py-2 rounded shadow-lg text-sm ${
              t.type === 'error' ? 'bg-red-600 text-white' : 'bg-white text-black'
            }`}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
