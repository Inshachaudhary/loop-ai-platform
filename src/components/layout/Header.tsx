"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import {
  Bell,
  Search,
  Plus,
  ChevronRight,
  Command,
} from "lucide-react";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/analytics": "Analytics",
  "/feedback": "Customer Feedback",
  "/reports": "Reports",
  "/ai": "AI Insights",
  "/settings": "Settings",
};

export default function Header() {
  const pathname = usePathname();

  const pageTitle = useMemo(() => {
    return pageTitles[pathname] ?? "Dashboard";
  }, [pathname]);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
    <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-[var(--border)] bg-white px-8">

      {/* Left */}

      <div className="flex flex-col">

        <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
          <span>Workspace</span>
          <ChevronRight size={13} />
          <span>{pageTitle}</span>
        </div>

        <div className="mt-1 flex items-center gap-3">

          <h1 className="text-[28px] font-semibold tracking-tight text-[var(--text-primary)]">
            {pageTitle}
          </h1>

          <span className="rounded-full bg-[#F4F4F5] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]">
            {today}
          </span>

        </div>

      </div>

      {/* Search */}

      <div className="mx-8 flex flex-1 justify-center">

        <button className="flex h-11 w-full max-w-lg items-center justify-between rounded-xl border border-[var(--border)] bg-[#FAFAFA] px-4 transition hover:border-[var(--border-strong)]">

          <div className="flex items-center gap-3">

            <Search
              size={17}
              className="text-[var(--text-muted)]"
            />

            <span className="text-sm text-[var(--text-muted)]">
              Search...
            </span>

          </div>

          <div className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-white px-2 py-1 text-[11px] text-[var(--text-muted)]">
            <Command size={11} />
            K
          </div>

        </button>

      </div>

      {/* Right */}

      <div className="flex items-center gap-3">

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white transition hover:bg-[#F8F8F8]">

          <Bell size={18} />

        </button>

        <button className="flex h-10 items-center gap-2 rounded-xl bg-[#18181B] px-4 text-sm font-medium text-white transition hover:bg-black">

          <Plus size={16} />

          New

        </button>

        <button className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-3 py-2 transition hover:border-[var(--border-strong)]">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#18181B] text-sm font-semibold text-white">
            IC
          </div>

          <div className="text-left">

            <p className="text-sm font-semibold">
              Insha
            </p>

            <p className="text-xs text-[var(--text-muted)]">
              Administrator
            </p>

          </div>

        </button>

      </div>

    </header>
  );
}