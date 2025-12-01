'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import CreateIssueActions from '@/components/CreateIssue/CreateIssueActions';
import CreateIssueAttachments from '@/components/CreateIssue/CreateIssueAttachments';
import X from '@/assets/iconComponents/X'; // Assuming you have this, or use a simple SVG
import { useToast } from '@/components/Shared/ToastProvider';
import { useProfile } from '@/modules/profiles/ProfileProvider';

export default function QuickCreateIssueModal({
  isOpen,
  onClose,
  groupingType, // 'department' | 'priority'
  groupValue, // The ID of the department OR the string of the priority
  onSuccess,
}) {
  const { profile } = useProfile();
  const { toast } = useToast();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  // Reset form when opening
  useEffect(() => {
    if (isOpen) {
      setTitle('');
      setDescription('');
      setAttachments([]);
      setSubmitting(false);
    }
  }, [isOpen]);

  const handleAttachClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFilesSelected = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const newItems = files.map((file, idx) => ({
      id: `${Date.now()}-${idx}`,
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
      formData.append('creator_id', profile?.id || '');
      formData.append('anonymous', anonymous ? 'true' : 'false');

      // --- LOGIC REQUESTED ---
      if (groupingType === 'department') {
        // Created in a Department column: Status = assigned, Dept = current group
        formData.append('status', 'assigned');
        formData.append('department_id', groupValue);
        formData.append('priority', 'medium'); // Default priority
      } else if (groupingType === 'priority') {
        // Created in a Priority column: Status = pending, Dept = none, Priority = current group
        formData.append('status', 'pending');
        formData.append('department_id', 'none');
        // Ensure format matches your DB enum (e.g. lowercase)
        formData.append('priority', String(groupValue).toLowerCase());
      } else {
        // Fallback / Status grouping
        formData.append('status', 'pending');
        formData.append('department_id', 'none');
      }
      // ----------------------

      attachments.forEach((att) => formData.append('attachments', att.file));

      const resp = await fetch('/api/issues', { method: 'POST', body: formData });

      if (!resp.ok) {
        const errText = await resp.text();
        throw new Error(errText);
      }

      toast({ type: 'success', message: 'Issue created successfully!' });
      if (onSuccess) onSuccess();
      onClose();
    } catch (err) {
      console.error('Quick create error', err);
      toast({ type: 'error', message: 'Failed to create issue' });
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4'>
      <div className='w-full max-w-xl bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]'>
        {/* Header */}
        <div className='flex items-center justify-between px-6 py-4 border-b border-[#1f1f1f]'>
          <h2 className='text-white font-semibold text-lg'>Quick Create Issue</h2>
          <button
            onClick={onClose}
            className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#1a1a1a] text-[#8e8e8e] hover:text-white transition-colors'
          >
            {/* Minimal X icon */}
            <X className='w-5 h-5' />
          </button>
        </div>

        {/* Body */}
        <div className='flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4'>
          <input
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Issue Title'
            className='w-full bg-transparent text-[20px] font-bold text-white placeholder:text-[#585858] focus:outline-none'
          />
          <div className='w-full border-b border-[#1a1a1a]' />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Description...'
            className='w-full bg-transparent text-[15px] text-[#e0e0e0] placeholder:text-[#8e8e8e] focus:outline-none resize-none min-h-[100px]'
          />
          {attachments.length > 0 && (
            <CreateIssueAttachments attachments={attachments} onRemove={handleRemoveAttachment} />
          )}
        </div>

        {/* Footer */}
        <div className='border-t border-[#1f1f1f] bg-[#0b0b0b]'>
          <CreateIssueActions
            onAttach={handleAttachClick}
            onSubmit={handleSubmit}
            submitting={submitting}
          />
        </div>

        <input
          ref={fileInputRef}
          type='file'
          multiple
          className='hidden'
          onChange={handleFilesSelected}
        />
      </div>
    </div>
  );
}
