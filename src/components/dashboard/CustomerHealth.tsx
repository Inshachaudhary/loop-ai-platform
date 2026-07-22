"use client";

import {
  HeartPulse,
  TrendingUp,
  Users,
  Clock3,
} from "lucide-react";

const metrics = [
  {
    title: "Customer Health",
    value: "91%",
    subtitle: "Excellent",
    color: "text-emerald-600",
    icon: HeartPulse,
  },
  {
    title: "Net Promoter Score",
    value: "68",
    subtitle: "+6 this month",
    color: "text-blue-600",
    icon: TrendingUp,
  },
  {
    title: "Active Customers",
    value: "12.4K",
    subtitle: "Across all channels",
    color: "text-violet-600",
    icon: Users,
  },
  {
    title: "Avg. Resolution",
    value: "2h 14m",
    subtitle: "↓ 18% faster",
    color: "text-orange-600",
    icon: Clock3,
  },
];

export default function CustomerHealth() {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-white p-7 shadow-sm">
      <div className="mb-8">
        <p className="text-sm font-medium text-[var(--text-muted)]">
          Customer Health
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Executive Health Overview
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.title}
              className="rounded-2xl border border-[var(--border)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-hover)]">
                  <Icon
                    size={20}
                    className={metric.color}
                  />
                </div>

                <span className={`text-xs font-semibold ${metric.color}`}>
                  Live
                </span>
              </div>

              <p className="mt-5 text-sm text-[var(--text-muted)]">
                {metric.title}
              </p>

              <h3 className="mt-2 text-3xl font-bold tracking-tight">
                {metric.value}
              </h3>

              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {metric.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}