// components/BoardIssue/ProfileStack.jsx
import React from 'react';

/**
 * ProfileStack
 * props:
 *  - assignees: Array of { id, name, avatarUrl } (order: first shown)
 *  - maxVisible: number (default 3)
 *
 * Renders up to `maxVisible` avatars (28x28) as rounded boxes, then a +N chip.
 */
export default function ProfileStack({ assignees = [], maxVisible = 3 }) {
  const visible = assignees.slice(0, maxVisible);
  const remaining = Math.max(0, assignees.length - maxVisible);

  return (
    <div className='flex items-center -space-x-2'>
      {visible.map((p, idx) => (
        <div
          key={p.id ?? `${p.name}-${idx}`}
          className='w-7 h-7 rounded-[6px] overflow-hidden ring-0 border-0 bg-[#2b2b2b] flex items-center justify-center'
          title={p.name}
          style={{ zIndex: visible.length - idx }}
        >
          {p.avatarUrl ? (
            <img src={p.avatarUrl} alt={p.name} className='w-full h-full object-cover' />
          ) : (
            // fallback initials
            <span className='text-[10px] font-semibold text-white select-none'>
              {p.name
                ? p.name
                    .split(' ')
                    .map((s) => s[0])
                    .slice(0, 2)
                    .join('')
                : 'U'}
            </span>
          )}
        </div>
      ))}

      {remaining > 0 && (
        <div
          className='w-7 h-7 rounded-[6px] bg-[#111111] border border-[#2b2b2b] text-[10px] font-semibold flex items-center justify-center text-[#bdbdbd]'
          title={`${remaining} more`}
          style={{ marginLeft: -8 }}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
}
