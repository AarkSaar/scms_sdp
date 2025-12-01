'use client';
import CaretDown from '@/assets/iconComponents/CaretDown';
import React, { useState, useEffect, useRef } from 'react'; // <-- 1. Import useEffect and useRef

export default function ViewOptionItem({ item, onSelect, activeOption }) {
  const Icon = item.Icon;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null); // <-- 2. Create a ref for the wrapper

  // 3. Handle click outside logic
  useEffect(() => {
    function handleClickOutside(event) {
      // If menu is open AND click is NOT inside the dropdownRef element
      if (isMenuOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    // Add listener when menu opens
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up listener when menu closes or component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleOptionClick = (optId) => {
    onSelect(optId);
    setIsMenuOpen(false);
  };

  const handleButtonClick = () => {
    if (item.dropdown) {
      setIsMenuOpen(!isMenuOpen);
    } else if (onClick) {
      onClick();
    }
  };

  const currentLabel = item.options?.find((o) => o.id === activeOption)?.label || item.label;

  return (
    // 4. Attach ref to the main wrapper div
    <div className='relative' ref={dropdownRef}>
      {/* icon + label wrapper (The main clickable button) */}
      <div
        className={`flex items-center gap-3 w-fit h-fit bg-[#1a1a1a] px-2.5 py-2 rounded-[12px] 
            cursor-pointer transition-colors duration-150 hover:bg-[#262626]
            ${isMenuOpen ? 'ring-2 ring-[#4a4a4a]' : ''} 
            ${item.id === 'filter' ? 'border border-[#1a1a1a]' : 'border border-[#262626]'}`}
        onClick={handleButtonClick}
      >
        <div className='flex items-center gap-1 w-fit h-fit'>
          <div className='flex items-center justify-center w-[18px] h-[18px]'>
            {Icon ? (
              <Icon
                strokeWidth={1.5}
                className={`${
                  item.id === 'sort' || item.id === 'filter' ? 'w-[13px] h-auto' : 'w-auto h-[12px]'
                } text-[#8e8e8e]`}
              />
            ) : item.icon ? (
              <img
                src={item.icon}
                alt=''
                aria-hidden='true'
                className='w-auto h-[10px] object-contain'
              />
            ) : null}
          </div>

          <span
            className={`${
              item.id === 'filter' ? 'hidden md:block' : 'hidden lg:block'
            } text-[12px] font-medium text-[#d2d2d2] leading-none group-hover:text-white`}
          >
            {item.id === 'group' ? currentLabel : item.label}
          </span>
        </div>
        {item.dropdown === true && (
          <div>
            <CaretDown strokeWidth={1} className='w-[8px] h-auto text-[#fff]' />
          </div>
        )}
      </div>

      {/* Dropdown Menu */}
      {item.dropdown && isMenuOpen && (
        <div className='absolute top-full mt-2 right-0 z-40 w-[180px] bg-[#1a1a1a] border border-[#262626] space-y-2 rounded-xl shadow-lg py-2'>
          <p className='text-[12px] mb-3 text-center text-[#8e8e8e] font-semibold'>
            Grouping Options
          </p>
          {item.options?.map((option) => (
            <div
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className={`p-1.5 text-[13px] rounded-[0px] cursor-pointer transition-colors 
                ${
                  activeOption === option.id
                    ? 'bg-[#3b3b3b] text-white font-medium'
                    : 'text-[#d2d2d2] hover:bg-[#262626]'
                }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
