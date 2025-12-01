// app/(main)/issues/create/page.jsx
'use client';

import React, { useState, useRef, useCallback } from 'react';
import Header from '@/components/Headers/CreateIssueHeader';
import CreateIssueForm from '@/components/CreateIssue/CreateIssueForm';
import CreateIssueActions from '@/components/CreateIssue/CreateIssueActions';
import CreateIssueAttachments from '@/components/CreateIssue/CreateIssueAttachments';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/Shared/ToastProvider';
import { useProfile } from '@/modules/profiles/ProfileProvider';

export default function CreateIssuePage() {
  const { profile, loading: profileLoading } = useProfile();
  const router = useRouter();
  const { toast } = useToast();
  const userRole = profile?.roles?.id;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState([]); // {id, name, size, type, file}
  const [submitting, setSubmitting] = useState(false);

  const fileInputRef = useRef(null);

  const handleAttachClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFilesSelected = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const newItems = files.map((file, idx) => ({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}-${idx}`,
      name: file.name,
      size: file.size,
      type: file.type,
      file,
      url: URL.createObjectURL(file),
    }));

    setAttachments((prev) => [...prev, ...newItems]);
    e.currentTarget.value = '';
  };

  const handleRemoveAttachment = (id) => {
    setAttachments((prev) => {
      const toRemove = prev.find((p) => p.id === id);
      if (toRemove?.url) URL.revokeObjectURL(toRemove.url);
      return prev.filter((p) => p.id !== id);
    });
  };

  const handleSubmit = async ({ anonymous }) => {
    if (!title.trim()) {
      toast({ type: 'error', message: 'Please provide a title' });
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('title', title.trim());
      formData.append('description', description.trim() || '');
      formData.append('department_id', 'none');
      formData.append('creator_id', profile?.id || '');
      formData.append('anonymous', anonymous ? 'true' : 'false');
      attachments.forEach((att) => formData.append('attachments', att.file));

      const resp = await fetch('/api/issues', {
        method: 'POST',
        body: formData,
      });

      const contentType = resp.headers.get('content-type') || '';
      const body = contentType.includes('application/json')
        ? await resp.json()
        : { error: await resp.text() };

      if (!resp.ok) {
        console.error('create issue failed', body);
        toast({ type: 'error', message: body?.error || 'Failed to create issue' });
        return;
      }

      toast({ type: 'success', message: 'Issue created successfully!' });
      setTitle('');
      setDescription('');
      setAttachments([]);
      router.push('/issues/all');
    } catch (err) {
      console.error('create issue error', err);
      toast({ type: 'error', message: err?.message || 'Failed to create issue' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={`flex flex-col w-full min-w-0 h-full min-h-0`}>
      <Header />
      <CreateIssueForm
        title={title}
        description={description}
        onChangeTitle={setTitle}
        onChangeDescription={setDescription}
      />

      {attachments.length > 0 && (
        <CreateIssueAttachments attachments={attachments} onRemove={handleRemoveAttachment} />
      )}

      <CreateIssueActions
        onAttach={handleAttachClick}
        onSubmit={handleSubmit}
        submitting={submitting}
      />

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
