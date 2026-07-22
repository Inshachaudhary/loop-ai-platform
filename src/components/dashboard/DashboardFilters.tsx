"use client";

import {
  Calendar,
  Download,
  Filter,
  Search,
  Sparkles,
} from "lucide-react";

export default function DashboardFilters() {
  return (
    <section className="flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}

      <div className="flex flex-1 flex-wrap gap-3">
        <div className="flex h-11 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 transition hover:border-[var(--border-strong)]">
          <Search
            size={18}
            className="text-[var(--text-muted)]"
          />

          <input
            type="text"
            placeholder="Search customers, feedback..."
            className="w-56 bg-transparent text-sm outline-none placeholder:text-[var(--text-muted)]"
          />
        </div>

        <button className="flex h-11 items-center gap-2 rounded-xl border border-[var(--border)] bg-white px-4 text-sm font-medium transition hover:border-[var(--border-strong)]">
          <Calendar size={18} />
          Last 30 Days
        </button>

        <button className="flex h-11 items-center gap-2 rounded-xl border border-[var(--border)] bg-white px-4 text-sm font-medium transition hover:border-[var(--border-strong)]">
          <Filter size={18} />
          Filters
        </button>
      </div>

      {/* Right */}

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
          <Sparkles size={16} />
          AI Active
        </div>

        <button className="flex h-11 items-center gap-2 rounded-xl bg-black px-5 text-sm font-medium text-white transition hover:opacity-90">
          <Download size={18} />
          Export Report
        </button>
      </div>
    </section>
  );
}