'use client';

import React, { useState } from 'react';
import Header from '@/components/Headers/IssuesHeader';
import BoardView from '@/components/IssueBoardView/BoardView';
import ListView from '@/components/IssueListView/ListView';

export default function IssuesAllPage() {
  const [activeView, setActiveView] = useState('list'); // 'list' | 'board'

  return (
    <div className='flex flex-col w-full min-w-0 h-full min-h-0'>
      <Header activeView={activeView} setActiveView={setActiveView} />

      <div className='flex-1 px-2 py-3 overflow-hidden h-full'>
        {activeView === 'list' ? <ListView /> : <BoardView />}
      </div>
    </div>
  );
}
