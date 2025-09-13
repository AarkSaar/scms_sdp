// components/SearchBar.jsx
// PURE AI

'use client';

import React, { useEffect, useRef, useState } from 'react';
import Search from '@/assets/iconComponents/Search';

export default function SearchBar({ value, onChange }) {
  // controlled if parent passes `value` (not undefined)
  const isControlled = value !== undefined;

  // internal state for uncontrolled mode
  const [internalValue, setInternalValue] = useState(() => value ?? '');

  const [expanded, setExpanded] = useState(false); // expanded on small screens
  const [isMd, setIsMd] = useState(false); // matches Tailwind md breakpoint (>=768px)

  const containerRef = useRef(null);
  const inputRef = useRef(null);

  // keep internal value in sync when value prop changes (only for controlled or when parent updates)
  useEffect(() => {
    if (isControlled) {
      // when parent controls the value, mirror it into internal state so focusing/reading works
      setInternalValue(value ?? '');
    }
    // if uncontrolled, ignore external changes
  }, [value, isControlled]);

  // track md breakpoint (Tailwind default 768px)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(min-width: 768px)');
    const handle = (e) => setIsMd(e.matches);

    setIsMd(mql.matches);
    if (mql.addEventListener) mql.addEventListener('change', handle);
    else mql.addListener(handle);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', handle);
      else mql.removeListener(handle);
    };
  }, []);

  // when screen turns md+, ensure expanded state doesn't interfere
  useEffect(() => {
    if (isMd) {
      setExpanded(false);
    }
  }, [isMd]);

  // clicking outside collapses (only relevant for small screens)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!expanded) return;

    function onDown(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) {
        setExpanded(false);
      }
    }

    function onKey(e) {
      if (e.key === 'Escape') setExpanded(false);
    }

    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [expanded]);

  // when expanded, focus input
  useEffect(() => {
    if (expanded) {
      inputRef.current?.focus();
    }
  }, [expanded]);

  // computed placeholder:
  const placeholder = isMd ? 'Search issues...' : expanded ? 'Search...' : '';

  // handle icon click:
  const onIconClick = () => {
    if (isMd) {
      // on desktop just focus the input
      inputRef.current?.focus();
    } else {
      // on small screens expand and focus
      setExpanded(true);
    }
  };

  // unified change handler that supports both modes
  const handleChange = (next) => {
    if (!isControlled) {
      setInternalValue(next);
    }
    if (typeof onChange === 'function') {
      onChange(next);
    }
  };

  // value used by input element
  const inputValue = isControlled ? value ?? '' : internalValue;

  return (
    <div
      ref={containerRef}
      onClick={onIconClick}
      className={`flex items-center bg-[#1a1a1a] rounded-[12px] px-3 py-2 transition-[width] duration-200 ease-out
        ${expanded ? 'w-[200px]' : 'w-10'}
        md:w-[272px]`}
    >
      {/* icon button */}
      <button
        type='button'
        aria-label={isMd ? 'Search' : expanded ? 'Focus search' : 'Open search'}
        className='flex == items-center justify-center shrink-0 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20'
      >
        <Search className='text-[#8e8e8e] w-[14px] h-auto' />
      </button>

      {/* input:
          - visible on md always (md:block)
          - visible on sm only when expanded (block if expanded)
      */}
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className={`flex-1 ml-2 text-[12px] font-medium text-white placeholder:text-[12px] placeholder:text-[#8e8e8e]
          ${expanded ? 'block' : 'hidden'} md:block
          bg-transparent outline-none`}
        onBlur={() => {
          if (!isMd) {
            // allow tiny delay so clicking button doesn't immediately collapse before click resolves
            setTimeout(() => {
              if (
                !document.activeElement ||
                !containerRef.current?.contains(document.activeElement)
              ) {
                setExpanded(false);
              }
            }, 100);
          }
        }}
      />
    </div>
  );
}
