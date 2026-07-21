"use client";

import { ArrowUpRight, RefreshCw } from "lucide-react";

export default function ExecutiveSummary() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good morning"
      : hour < 18
      ? "Good afternoon"
      : "Good evening";

  return (
    <section className="mb-10 flex flex-col gap-6 rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
          Executive Summary
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
          {greeting}, Insha 👋
        </h1>

        <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
          Customer satisfaction is improving this week. AI detected
          <span className="font-semibold text-[var(--text-primary)]">
            {" "}3 recurring issues
          </span>{" "}
          that require immediate attention and identified
          <span className="font-semibold text-[var(--text-primary)]">
            {" "}2 high-impact opportunities
          </span>{" "}
          to improve retention.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button className="flex h-12 items-center gap-2 rounded-xl border border-[var(--border)] bg-white px-5 text-sm font-medium transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]">
          <RefreshCw size={18} />
          Last Sync • 2 min ago
        </button>

        <button className="flex h-12 items-center gap-2 rounded-xl bg-black px-6 text-sm font-medium text-white transition hover:opacity-90">
          View AI Report
          <ArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
}