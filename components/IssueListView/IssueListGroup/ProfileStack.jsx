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
    <div className='flex items-center -space-x-2.5'>
      {visible.map((p, idx) => (
        <div
          key={p.id ?? `${p.name}-${idx}`}
          className='w-7 h-7 rounded-full overflow-hidden ring-0 border-[1.5px] border-[#2f2f2f] bg-[#1f1f1f] flex items-center justify-center'
          title={p.name}
          style={{ zIndex: visible.length - idx }}
        >
          {p.avatarUrl ? (
            <img src={p.avatarUrl} alt={p.name} className='w-full h-full object-cover' />
          ) : (
            // fallback initials
            <span className='text-[8px] font-semibold text-white select-none'>
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
          className='w-7 h-7 rounded-full border-[1.55px] border-[#2b2b2b] text-[8px] font-bold flex items-center justify-end text-[#bdbdbd] p-1.5'
          title={`${remaining} more`}
          style={{ marginLeft: -0 }}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
}
