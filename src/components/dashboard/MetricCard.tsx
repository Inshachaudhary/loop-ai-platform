"use client";

import { ArrowDownRight, ArrowUpRight, LucideIcon } from "lucide-react";

type MetricCardProps = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  description: string;
  icon: LucideIcon;
};

export default function MetricCard({
  title,
  value,
  change,
  trend,
  description,
  icon: Icon,
}: MetricCardProps) {
  const positive = trend === "up";

  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-stone-200 bg-stone-50">
          <Icon size={20} className="text-stone-700" />
        </div>

        <div
          className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
            positive
              ? "bg-emerald-50 text-emerald-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {positive ? (
            <ArrowUpRight size={14} />
          ) : (
            <ArrowDownRight size={14} />
          )}

          <span>{change}</span>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-stone-500">
          {title}
        </p>

        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900">
          {value}
        </h3>

        <p className="mt-2 text-sm leading-6 text-stone-500">
          {description}
        </p>
      </div>
    </article>
  );
}