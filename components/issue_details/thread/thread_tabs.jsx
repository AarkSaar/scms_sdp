'use client';

import React, { useState } from 'react';
import ThreadView from './ThreadView'; // Import the new component

export default function ThreadTabs({
  activity = [],
  participants = [],
  issueId, // <--- New Prop
  threadId, // <--- New Prop
}) {
  const tabs = ['Main Activity', 'Participants', 'General', 'Reactions'];
  const [active, setActive] = useState(tabs[0]);

  return (
    <div>
      <div className='border-t border-[#1f1f1f] pt-4'>
        {/* Tabs Header */}
        <div className='flex gap-6 border-b border-[#1f1f1f] pb-2'>
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`pb-2 text-sm transition-colors ${
                active === t
                  ? 'text-white border-b-2 border-pink-400'
                  : 'text-[#8e8e8e] hover:text-[#bbb]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className='pt-4'>
          {active === 'Main Activity' && (
            // ✅ Replace ActivityLog with ThreadView
            <ThreadView issueId={issueId} initialThreadId={threadId} />
          )}

          {active === 'Participants' && (
            <div className='space-y-2'>
              {participants.length === 0 ? (
                <div className='text-[#585858] text-sm'>No participants</div>
              ) : (
                participants.map((p) => (
                  <div key={p.id} className='flex items-center gap-3'>
                    <div className='w-8 h-8 rounded-full bg-[#222] text-[#ccc] flex items-center justify-center text-xs font-bold'>
                      {p.name
                        .split(' ')
                        .map((s) => s[0])
                        .slice(0, 2)
                        .join('')}
                    </div>
                    <div className='text-white text-sm'>{p.name}</div>
                  </div>
                ))
              )}
            </div>
          )}

          {active === 'General' && (
            <div className='text-[#585858] text-sm'>General discussion / settings area.</div>
          )}

          {active === 'Reactions' && (
            <div className='text-[#585858] text-sm'>Reactions breakdown and who reacted.</div>
          )}
        </div>
      </div>
    </div>
  );
}
