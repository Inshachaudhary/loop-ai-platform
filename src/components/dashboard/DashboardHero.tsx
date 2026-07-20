"use client";

import { CalendarDays, Download, FilePlus } from "lucide-react";

export default function DashboardHero() {
  return (
    <section className="mb-8 flex flex-col gap-6 rounded-3xl border border-stone-200 bg-white p-8 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-600">
          <CalendarDays size={14} />
          Last synced • 5 minutes ago
        </div>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-stone-900">
          Customer Feedback Intelligence
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-600">
          Monitor customer sentiment, discover recurring themes, and transform
          feedback into actionable product decisions with AI-powered insights.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button className="inline-flex h-11 items-center gap-2 rounded-xl border border-stone-200 bg-white px-5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100">
          <Download size={16} />
          Export
        </button>

        <button className="inline-flex h-11 items-center gap-2 rounded-xl bg-stone-900 px-5 text-sm font-medium text-white transition-colors hover:bg-black">
          <FilePlus size={16} />
          New Report
        </button>
      </div>
    </section>
  );
}