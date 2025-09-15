// components/CreateIssueButton.jsx
import React from 'react';
import Add from '@/assets/iconComponents/Add';

export default function CreateIssueButton({
  onClick,
  label = 'Create Issue',
  className = '',
  collapsed,
}) {
  return (
    <a
      href='/issues/create'
      type='button'
      onClick={onClick}
      aria-label={label}
      title={label}
      className={[
        // base
        'flex items-center bg-white hover:bg-gray-100 transition-colors',
        // collapsed vs expanded sizing + spacing
        // NOTE: collapsed uses a small fixed size so rounded-[12px] is visible
        collapsed
          ? 'rounded-[12px] justify-center w-full px-3 py-2.5' // force the radius with !
          : 'w-full rounded-full px-5 py-2.5',
        className,
      ].join(' ')}
    >
      {/* icon box (always present) */}
      <span
        className={[
          'flex-none w-[18px] h-[18px] rounded-[4px] bg-[#0A0A0A] flex items-center justify-center',
          // add right margin only when expanded so icon moves left
          collapsed ? '' : 'mr-3',
        ].join(' ')}
      >
        <Add className='h-2 w-2 block' strokeColor='#ffffff' strokeWidth={1.25} />
      </span>

      {/* label only when expanded; it takes remaining space and stays centered */}
      {!collapsed && (
        <span className='flex-1 line-clamp-1 text-[14px] font-bold text-[#0A0A0A] text-center leading-none'>
          {label}
        </span>
      )}
    </a>
  );
}
