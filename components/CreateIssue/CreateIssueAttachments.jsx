// components/CreateIssueAttachments.jsx
'use client';

import React from 'react';
import X from '@/assets/iconComponents/X';

/**
 * CreateIssueAttachments
 *
 * Props:
 *  - attachments: Array<{ id, name, size, type, url }>
 *  - onRemove(id): callback to remove an attachment
 *
 * Renders a horizontal scrollable row of thumbnail tiles. Each tile shows
 * a preview (image or file-ext) and an X button in a small circle at the top-right.
 */
export default function CreateIssueAttachments({ attachments = [], onRemove }) {
  if (!attachments || attachments.length === 0) return null;

  return (
    <div className='px-8 md:px-10 lg:px-11  pb-1'>
      <div className='flex gap-3 overflow-x-auto py-2'>
        {attachments.map((att) => {
          const ext = att.name?.split('.').pop()?.toUpperCase() || '';
          const isImage = Boolean(att.type && att.type.startsWith('image/'));

          return (
            <div key={att.id} className='relative flex-shrink-0'>
              {/* thumbnail */}
              <div className='relative h-20 w-20 rounded-md overflow-hidden bg-[#0b0b0b] border border-[#1f1f1f] flex items-center justify-center'>
                {isImage ? (
                  <img
                    src={att.url}
                    alt={att.name}
                    className='h-full w-full object-cover'
                    draggable={false}
                  />
                ) : (
                  <div className='text-xs font-semibold text-[#bdbdbd]'>{ext}</div>
                )}

                {/* X remove button (top-right) */}
                <button
                  type='button'
                  onClick={() => onRemove?.(att.id)}
                  className='absolute top-1 right-1 h-5 w-5 rounded-full bg-black/80 flex items-center justify-center
                             hover:bg-black text-white shadow-sm border border-[#222] focus:outline-none'
                  aria-label={`Remove ${att.name}`}
                >
                  <X className='h-2.5 w-2,5 text-[#8e8e8e] hover:text-[white]' />
                </button>
              </div>

              {/* filename (below thumbnail) */}
              {/* <div className='mt-2 w-20 text-xs text-white truncate text-center'>{att.name}</div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
