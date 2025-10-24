'use client';

import React, { useState } from 'react';
import ActivityLog from './activity_log';

export default function ThreadTabs({ activity = [], participants = [] }) {
  const tabs = ['Main Activity', 'Participants', 'General', 'Reactions'];
  const [active, setActive] = useState(tabs[0]);

  return (
    <div>
      <div className='border-t border-[#1f1f1f] pt-4'>
        {/* tabs */}
        <div className='flex gap-6 border-b border-[#1f1f1f] pb-2'>
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`pb-2 text-sm ${
                active === t ? 'text-white border-b-2 border-pink-400' : 'text-[#8e8e8e]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* content */}
        <div className='pt-4'>
          {active === 'Main Activity' && <ActivityLog entries={activity} />}
          {active === 'Participants' && (
            <div className='space-y-2'>
              {participants.length === 0 ? (
                <div className='text-[#999]'>No participants</div>
              ) : (
                participants.map((p) => (
                  <div key={p.id} className='flex items-center gap-3'>
                    <div className='w-8 h-8 rounded-full bg-[#e5e7eb] text-black flex items-center justify-center text-sm'>
                      {p.name
                        .split(' ')
                        .map((s) => s[0])
                        .slice(0, 2)
                        .join('')}
                    </div>
                    <div className='text-white'>{p.name}</div>
                  </div>
                ))
              )}
            </div>
          )}
          {active === 'General' && (
            <div className='text-[#ddd]'>General discussion / settings area.</div>
          )}
          {active === 'Reactions' && (
            <div className='text-[#ddd]'>
              Reactions breakdown and who reacted (not implemented).
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
