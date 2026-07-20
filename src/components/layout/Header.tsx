"use client";

import {
  Bell,
  Menu,
  Plus,
  Search,
} from "lucide-react";

type HeaderProps = {
  onMenuClick?: () => void;
};

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-stone-200 bg-white px-6 lg:px-10">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 text-stone-700 transition hover:bg-stone-100 lg:hidden"
        >
          <Menu size={20} />
        </button>

        <div>
          <h1 className="text-xl font-semibold tracking-tight text-stone-900">
            Dashboard
          </h1>

          <p className="text-sm text-stone-500">
            Customer feedback intelligence overview
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden md:flex">
          <div className="flex h-11 w-80 items-center gap-3 rounded-xl border border-stone-200 bg-stone-50 px-4">
            <Search
              size={18}
              className="text-stone-400"
            />

            <input
              type="text"
              placeholder="Search feedback..."
              className="w-full bg-transparent text-sm text-stone-800 placeholder:text-stone-400 outline-none"
            />
          </div>
        </div>

        {/* Notification */}
        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-stone-200 transition hover:bg-stone-100">
          <Bell
            size={18}
            className="text-stone-700"
          />
        </button>

        {/* New Report */}
        <button className="hidden sm:flex h-11 items-center gap-2 rounded-xl bg-stone-900 px-4 text-sm font-medium text-white transition hover:bg-black">
          <Plus size={16} />

          New Report
        </button>

        {/* Avatar */}
        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">
          JC
        </button>
      </div>
    </header>
  );
}