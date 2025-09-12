"use client";

import React, { useEffect, useRef } from "react";
import { useSidebar } from "../../hooks/useSidebar";
import navItems from "../../lib/navItems";
import SidebarItem from "./sidebarItem";

export default function MobileSidebar() {
  const { mobileOpen, setMobileOpen } = useSidebar();
  const closeBtnRef = useRef(null);

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") setMobileOpen(false); }
    if (mobileOpen) {
      closeBtnRef.current?.focus();
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen, setMobileOpen]);

  return (
    <div className={`fixed inset-0 z-40 md:hidden ${mobileOpen ? "" : "pointer-events-none"}`} aria-hidden={!mobileOpen}>
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity ${mobileOpen ? "opacity-100" : "opacity-0"}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile sidebar"
        className={`absolute left-0 top-0 bottom-0 w-72 bg-[#0b0b0b] transform transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-yellow-500 flex items-center justify-center text-sm font-bold">TS</div>
            <span className="text-white font-semibold">SCMS</span>
          </div>

          <button ref={closeBtnRef} onClick={() => setMobileOpen(false)} className="p-2 rounded hover:bg-white/5" aria-label="Close sidebar">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-2 mt-2 space-y-1 overflow-y-auto">
          <div className="px-4 text-xs text-gray-400 uppercase">Issues</div>
          {navItems.slice(0, 2).map((item) => (
            <SidebarItem key={item.id} item={item} collapsed={false} onClick={() => setMobileOpen(false)} />
          ))}

          <div className="mt-6 px-4 text-xs text-gray-400 uppercase">Updates</div>
          {navItems.slice(2).map((item) => (
            <SidebarItem key={item.id} item={item} collapsed={false} onClick={() => setMobileOpen(false)} />
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div className="flex items-center gap-3 rounded-md p-2 bg-[#111]">
            <div className="w-10 h-10 rounded-md bg-yellow-500 flex items-center justify-center">TS</div>
            <div className="flex-1">
              <div className="text-white text-sm">Thomas Smith</div>
              <div className="text-xs text-gray-400">thomas.smith@aun.edu.ng</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
