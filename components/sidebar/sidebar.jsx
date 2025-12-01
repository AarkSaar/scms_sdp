// components/sidebar/sidebar.jsx
'use client';

import { useState } from 'react';
import { useSidebar } from '../../hooks/useSidebar';
import { useProfile } from '@/modules/profiles/ProfileProvider';
import SidebarItem from './sidebarItem';
import SidebarLogo from './sidebarLogo';
import navItems from '../../lib/navItems';
import Expand from '@/assets/iconComponents/Expand';
import CreateIssueButton from './createIssueButton';
import getNameDisplay from '../Shared/NameDisplay';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const { profile, loading: profileLoading } = useProfile();
  const { collapsed, setCollapsed } = useSidebar();
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();
  const widthClass = collapsed ? 'w-14' : 'w-56';

  // helper to decide if a nav item is active
  const isActive = (href) => {
    if (!href) return false;
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <aside
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`hidden lg:flex ${widthClass} bg-[#0a0a0a] transition-[width] duration-200 flex-col justify-between`}
    >
      <div className='space-y-4'>
        <SidebarLogo
          collapsed={collapsed}
          hovered={hovered}
          onToggle={() => setCollapsed(!collapsed)}
        />

        <div className={`${collapsed ? 'space-y-4' : 'space-y-3'}`}>
          <div className={`w-full flex justify-center ${collapsed ? 'px-2' : 'px-4'}`}>
            <CreateIssueButton collapsed={collapsed} className='w-full' />
          </div>
          <div className='space-y-[2px]'>
            {!collapsed && (
              <div className='px-4 py-1 text-[12px] text-[#8e8e8e] font-semibold'>Issues</div>
            )}
            <div className='space-y-[4px]'>
              {navItems.slice(0, 2).map((i) => (
                <SidebarItem key={i.id} item={i} collapsed={collapsed} active={isActive(i.href)} />
              ))}
            </div>
          </div>
          <div className='space-y-[2px]'>
            {!collapsed && (
              <div className='px-4 py-1 text-[12px] text-[#8e8e8e] font-semibold'>Updates</div>
            )}
            <div className='space-y-[4px]'>
              {navItems
                .filter((i) => i.id == 'notif' || i.id == 'ann') // Only keep the item with id 'manage'
                .map((i) => (
                  <SidebarItem
                    key={i.id}
                    item={i}
                    collapsed={collapsed}
                    onClick={() => setMobileOpen(false)}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          collapsed ? ' items-center' : 'p-1 items-start'
        } flex flex-col justify-center gap-y-3.5 w-full`}
      >
        {navItems
          .filter((i) => i.id === 'manage') // Only keep the item with id 'manage'
          .map((i) => (
            <SidebarItem
              key={i.id}
              item={i}
              collapsed={collapsed}
              onClick={() => setMobileOpen(false)}
            />
          ))}
        {collapsed ? (
          // collapsed view — only avatar
          <div className='w-full flex items-center justify-center p-1 hover:bg-[#1a1a1a]'>
            <div className='w-[42px] h-[42px] rounded-[9.33px] bg-[#E5A13C] flex items-center justify-center text-[14px] font-bold text-black'>
              {getNameDisplay(profile?.name, 'short')}
            </div>
          </div>
        ) : (
          // expanded view — avatar + details + expand icon
          <div className='w-full flex items-center justify-between p-1 rounded-[12px] bg-[#1a1a1a] border-[1.5px] border-[#1F1F1F]'>
            {/* avatar + text side by side */}
            <div className='flex items-center gap-3'>
              <div className='w-[42px] h-[42px] rounded-[9.33px] bg-[#E5A13C] flex items-center justify-center text-[14px] font-extrabold text-black'>
                {getNameDisplay(profile?.name, 'short')}
              </div>
              <div className='flex flex-col gap-y-0.5'>
                <div className='text-white text-[12px] font-semibold'>{profile?.name}</div>
                <div className='text-[10px] truncate text-[#aaaaaa] font-medium'>
                  {profile?.email}
                </div>
              </div>
            </div>

            {/* expand icon: override parent centering with self-start and don't stretch (h-auto) */}
            <div className='self-start flex items-start justify-center pt-2 w-6 h-auto cursor-n-resize'>
              {/* pass an explicit height so the SVG renders consistent size */}
              <Expand height={12} className='block text-[#8e8e8e]' />
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
