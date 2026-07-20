"use client";

import { Bell, CalendarDays, Search } from "lucide-react";

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

function getToday() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-8">
      {/* Left */}
      <div>
        <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
          {getGreeting()}, Insha
        </h2>

        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          {getToday()}
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}

        <div className="flex w-80 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2">
          <Search
            size={18}
            className="text-[var(--text-secondary)]"
          />

          <input
            placeholder="Search feedback..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--text-secondary)]"
          />
        </div>

        {/* Notification */}

        <button className="rounded-xl border border-[var(--border)] bg-white p-3 transition hover:bg-[var(--background)]">
          <Bell size={19} />
        </button>

        {/* Workspace */}

        <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-2">
          <CalendarDays
            size={18}
            className="text-[var(--primary)]"
          />

          <div>
            <p className="text-sm font-medium text-[var(--text-primary)]">
              Main Workspace
            </p>

            <p className="text-xs text-[var(--text-secondary)]">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}