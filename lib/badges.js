// lib/Badges.js
// Badge maps for the SCMS

import Add from '@/assets/iconComponents/Add';
import AddOutline from '@/assets/iconComponents/AddOutline';
import Announcement from '@/assets/iconComponents/Announcement';
import Assigned from '@/assets/iconComponents/Assigned';
import Ball from '@/assets/iconComponents/Ball';
import Bus from '@/assets/iconComponents/Bus';
import Cancelled from '@/assets/iconComponents/Cancelled';
import DropAdd from '@/assets/iconComponents/DropAdd';
import Engineer from '@/assets/iconComponents/Engineer';
import Flag from '@/assets/iconComponents/Flag';
import GraduationCap from '@/assets/iconComponents/GraduationCap';
import InProgress from '@/assets/iconComponents/InProgress';
import More from '@/assets/iconComponents/More';
import Naira from '@/assets/iconComponents/Naira';
import NeedsReview from '@/assets/iconComponents/NeedsReview';
import Pending from '@/assets/iconComponents/Pending';
import People from '@/assets/iconComponents/People';
import Resolved from '@/assets/iconComponents/Resolved';
import SpecialEvent from '@/assets/iconComponents/SpecialEvent';

export const priorityBadges = {
  low: {
    id: 'low',
    label: 'Low',
    icon: Flag,
    iconColor: '#18F37E',
    outlineColor: '#90EEBC',
  },
  medium: {
    id: 'medium',
    label: 'Medium',
    icon: Flag,
    iconColor: '#1E98DF',
    outlineColor: '#5E9ABC',
  },
  high: {
    id: 'high',
    label: 'High',
    icon: Flag,
    iconColor: '#EE2F1D',
    outlineColor: '#EA7C72',
  },
  not_set: {
    id: 'not_set',
    label: 'Not Set',
    icon: Add,
    iconColor: '#8e8e8e',
    outlineColor: '',
  },
};

export const departmentBadges = {
  dept_transport: {
    id: 'transport',
    label: 'Transport',
    icon: Bus,
    iconColor: '#1175F6',
  },
  dept_internal_affairs: {
    id: 'internal_affairs',
    label: 'Internal Affairs',
    icon: People,
    iconColor: '#16BBEE',
  },
  dept_capital_projects: {
    id: 'capital_projects',
    label: 'Capital Projects',
    icon: Engineer,
    iconColor: '#F2A20D',
  },
  dept_special_events: {
    id: 'special_events',
    label: 'Special Events',
    icon: SpecialEvent,
    iconColor: 'B43FE7',
  },
  dept_academics: {
    id: 'academics',
    label: 'Academics',
    icon: GraduationCap,
    iconColor: '#B6F113',
  },
  dept_sports: {
    id: 'sports',
    label: 'Sports',
    icon: Ball,
    iconColor: '#F2D816',
  },
  dept_public_relations: {
    id: 'public_relations',
    label: 'Public Relations',
    icon: Announcement,
    iconColor: '#FF7A0E',
  },
  dept_health: {
    id: 'health',
    label: 'Health',
    icon: AddOutline,
    iconColor: '#F52A2A',
  },
  dept_food_hygiene: {
    id: 'food_and_hygiene',
    label: 'Food and Hygiene',
    icon: DropAdd,
    iconColor: '#F413A5',
  },
  dept_finance: {
    id: 'finance',
    label: 'Finance',
    icon: Naira,
    iconColor: '#4ACA29',
  },
  multiple: {
    id: 'multiple',
    label: 'Multiple',
    icon: More,
    iconColor: '#ffffff',
  },
  unassigned: {
    id: 'unassigned',
    label: 'Unassigned',
    icon: Add,
    iconColor: '#8e8e8e',
  },
};

export const statusBadges = {
  pending: {
    id: 'pending',
    label: 'Pending',
    icon: Pending,
    iconColor: '#8e8e8e',
  },
  assigned: {
    id: 'assigned',
    label: 'Assigned',
    icon: Assigned,
    iconColor: '#3BD3EF',
  },
  in_progress: {
    id: 'in_progress',
    label: 'In Progress',
    icon: InProgress,
    iconColor: '#EE8AF0',
  },
  needs_review: {
    id: 'needs_review',
    label: 'Needs Review',
    icon: NeedsReview,
    iconColor: '#c0e852',
  },
  resolved: {
    id: 'resolved',
    label: 'Resolved',
    icon: Resolved,
    iconColor: '#2EB52E',
  },
  cancelled: {
    id: 'cancelled',
    label: 'Cancelled',
    icon: Cancelled,
    iconColor: '#E51212',
  },
};

export default {
  priorityBadges,
  departmentBadges,
  statusBadges,
};
