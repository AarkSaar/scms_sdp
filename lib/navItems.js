// lib/navItems.js
import GlobeExclamationIcon from '../assets/iconComponents/GlobeExclamation';
import ExclamationIcon from '../assets/iconComponents/Exclamation';
import AnnouncementIcon from '../assets/iconComponents/Announcement';
import BellIcon from '../assets/iconComponents/Bell';

export default [
  { id: 'all', label: 'All issues', href: '/issues', Icon: GlobeExclamationIcon },
  { id: 'mine', label: 'My issues', href: '/issues/mine', Icon: ExclamationIcon },
  { id: 'ann', label: 'Announcements', href: '/announcements', Icon: AnnouncementIcon },
  { id: 'notif', label: 'Notifications', href: '/notifications', Icon: BellIcon },
];
