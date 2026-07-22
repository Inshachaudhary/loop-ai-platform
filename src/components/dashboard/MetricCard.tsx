"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  description: string;
  icon: LucideIcon;
}

export default function MetricCard({
  title,
  value,
  change,
  trend,
  description,
  icon: Icon,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "group rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm transition-all duration-300",
        "hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-lg"
      )}
    >
      <div className="mb-6 flex items-center justify-between">
       <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-hover)]">
  <Icon
    size={22}
    strokeWidth={2}
  />
</div>

        <div
          className={cn(
            "flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
            trend === "up"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          )}
        >
          {trend === "up" ? (
            <ArrowUpRight size={14} />
          ) : (
            <ArrowDownRight size={14} />
          )}

          {change}
        </div>
      </div>

      <p className="text-sm font-medium text-[var(--text-muted)]">
        {title}
      </p>

      <h2 className="mt-2 text-4xl font-bold tracking-tight text-[var(--text-primary)]">
        {value}
      </h2>

      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
        {description}
      </p>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-[var(--surface-hover)]">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500 group-hover:w-full",
            trend === "up"
              ? "w-4/5 bg-green-500"
              : "w-2/5 bg-red-500"
          )}
        />
      </div>
    </div>
  );
}