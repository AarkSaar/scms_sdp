// lib/navItems.js
import GlobeExclamationIcon from '../assets/iconComponents/GlobeExclamation';
import ExclamationIcon from '../assets/iconComponents/Exclamation';
import AnnouncementIcon from '../assets/iconComponents/Announcement';
import BellIcon from '../assets/iconComponents/Bell';
import UsersLine from '@/assets/iconComponents/UsersLine';

export default [
  { id: 'all', label: 'All issues', href: '/issues/all', Icon: GlobeExclamationIcon },
  { id: 'mine', label: 'My issues', href: '/issues/mine', Icon: ExclamationIcon },
  { id: 'ann', label: 'Announcements', href: '/updates/announcements', Icon: AnnouncementIcon },
  { id: 'notif', label: 'Notifications', href: '/updates/notifications', Icon: BellIcon },
  { id: 'manage', label: 'Manage Executives', href: '#', Icon: UsersLine },
];
