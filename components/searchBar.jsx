// components/SearchBar.jsx
'use client';
import Search from '@/assets/iconComponents/Search';

export default function SearchBar({ value, onChange }) {
  return (
    <div className='flex items-center w-68 bg-[#1a1a1a] rounded-[12px] px-4 py-2'>
      <Search className='text-[#8e8e8e] w-[14px] h-auto' />
      <input
        type='text'
        placeholder='Search issues...'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='flex-1 ml-2 font-medium text-[12px] placeholder:text-[12px] placeholder:text-[#d2d2d2] placeholder:font-medium text-[#fff]'
      />
    </div>
  );
}
