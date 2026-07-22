"use client";

import { ArrowUpRight } from "lucide-react";

const themes = [
  {
    name: "Delivery Experience",
    mentions: 428,
    percentage: 86,
    color: "bg-emerald-500",
  },
  {
    name: "Payment Issues",
    mentions: 301,
    percentage: 61,
    color: "bg-red-500",
  },
  {
    name: "Customer Support",
    mentions: 244,
    percentage: 49,
    color: "bg-blue-500",
  },
  {
    name: "Mobile App Performance",
    mentions: 189,
    percentage: 38,
    color: "bg-violet-500",
  },
];

export default function ThemeBreakdown() {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-white p-7 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-[var(--text-muted)]">
            Recurring Themes
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Most Discussed Topics
          </h2>
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-medium transition hover:border-[var(--border-strong)]">
          View Report
          <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="space-y-6">
        {themes.map((theme) => (
          <div key={theme.name}>
            <div className="mb-2 flex items-center justify-between">
              <div>
                <h3 className="font-medium">{theme.name}</h3>

                <p className="text-sm text-[var(--text-muted)]">
                  {theme.mentions} mentions
                </p>
              </div>

              <span className="text-sm font-semibold">
                {theme.percentage}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-[var(--surface-hover)]">
              <div
                className={`${theme.color} h-full rounded-full transition-all duration-700`}
                style={{ width: `${theme.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}