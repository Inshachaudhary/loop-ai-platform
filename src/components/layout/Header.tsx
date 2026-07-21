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
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-10">

      {/* Left */}

      <div className="flex flex-col">

        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">

          <span>Workspace</span>

          <ChevronRight size={15} />

          <span>{pageTitle}</span>

        </div>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
          {pageTitle}
        </h1>

      </div>

      {/* Search */}

      <div className="mx-12 flex flex-1 justify-center">

        <button
          className="
          flex
          h-12
          w-full
          max-w-xl
          items-center
          justify-between
          rounded-2xl
          border
          border-[var(--border)]
          bg-[var(--surface-elevated)]
          px-4
          transition-all
          duration-200
          hover:border-[var(--border-strong)]
          "
        >
          <div className="flex items-center gap-3">

            <Search
              size={18}
              className="text-[var(--text-muted)]"
            />

            <span className="text-sm text-[var(--text-muted)]">
              Search feedback, reports or customers...
            </span>

          </div>

          <div className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-white px-2 py-1 text-xs text-[var(--text-muted)]">

            <Command size={12} />

            <span>K</span>

          </div>

        </button>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        <button
          className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-[var(--border)]
          bg-white
          transition
          hover:border-[var(--border-strong)]
          hover:bg-[var(--surface-hover)]
          "
        >
          <Bell size={18} />
        </button>

        <button
          className="
          flex
          h-11
          items-center
          gap-2
          rounded-xl
          bg-black
          px-5
          text-sm
          font-medium
          text-white
          transition
          hover:opacity-90
          "
        >
          <Plus size={18} />

          New Report
        </button>
                <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white px-3 py-2 transition hover:border-[var(--border-strong)]">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
            IC
          </div>

          <div className="flex flex-col text-left">
            <span className="text-sm font-semibold text-[var(--text-primary)]">
              Insha Chaudhary
            </span>

            <span className="text-xs text-[var(--text-muted)]">
              Product Admin
            </span>
          </div>
        </div>

      </div>

    </header>
  );
}