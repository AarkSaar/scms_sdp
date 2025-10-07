'use client';

import React, { useState } from 'react';
import Header from '@/components/Headers/CreateIssueHeader';
import CreateIssueForm from '@/components/CreateIssueForm';
import CreateIssueActions from '@/components/CreateISsueActions';

export default function IssuesAllPage() {
  const [activeView, setActiveView] = useState('list'); // 'list' | 'board'

  return (
    <div className='flex flex-col w-full min-w-0 h-full min-h-0'>
      <Header />
      <CreateIssueForm />
      <CreateIssueActions />
    </div>
  );
}
