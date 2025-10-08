// app/(somePath)/issues/IssuesAllPage.jsx
'use client';

import React, { useState, useRef, useCallback } from 'react';
import Header from '@/components/Headers/CreateIssueHeader';
import CreateIssueForm from '@/components/CreateIssue/CreateIssueForm';
import CreateIssueActions from '@/components/CreateIssue/CreateIssueActions';
import CreateIssueAttachments from '@/components/CreateIssue/CreateIssueAttachments';

export default function CreateIssuePage() {
  const [attachments, setAttachments] = useState([]); // {id, name, size, type, url, file}
  const fileInputRef = useRef(null);

  // Triggered when CreateIssueActions' Add attachment button is clicked
  const handleAttachClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  // Files selected via the hidden file input
  function handleFilesSelected(e) {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const newItems = files.map((file, idx) => {
      return {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}-${idx}`,
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file),
        file,
      };
    });

    setAttachments((prev) => [...prev, ...newItems]);

    // reset input so selecting same file again works
    e.currentTarget.value = '';
  }

  // Remove attachment and revoke object URL
  function handleRemoveAttachment(id) {
    setAttachments((prev) => {
      const toRemove = prev.find((p) => p.id === id);
      if (toRemove && toRemove.url) {
        try {
          URL.revokeObjectURL(toRemove.url);
        } catch (err) {
          /* ignore */
        }
      }
      return prev.filter((p) => p.id !== id);
    });
  }

  // Example submit handler
  function handleSubmit({ anonymous }) {
    // Build form payload (example)
    console.log('send issue; anonymous:', anonymous, 'attachments:', attachments);
    // TODO: upload files and send text from CreateIssueForm
  }

  return (
    <div className='flex flex-col w-full min-w-0 h-full min-h-0'>
      <Header />

      <CreateIssueForm />

      {/* only show attachments tile when there are attachments */}
      {attachments.length > 0 && (
        <CreateIssueAttachments attachments={attachments} onRemove={handleRemoveAttachment} />
      )}

      <CreateIssueActions onAttach={handleAttachClick} onSubmit={handleSubmit} />

      {/* hidden file input used by onAttach */}
      <input
        ref={fileInputRef}
        type='file'
        multiple
        className='hidden'
        onChange={handleFilesSelected}
      />
    </div>
  );
}
