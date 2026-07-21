"use client";

import {
  ArrowRight,
  Brain,
  Sparkles,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";

const insights = [
  {
    title: "Delivery delays are increasing",
    description:
      "27% more customers mentioned delayed deliveries during the last 7 days.",
    priority: "High",
    color: "bg-red-100 text-red-700",
    icon: TriangleAlert,
  },
  {
    title: "Customers love the new checkout",
    description:
      "Positive sentiment increased after the latest checkout redesign.",
    priority: "Medium",
    color: "bg-emerald-100 text-emerald-700",
    icon: TrendingUp,
  },
  {
    title: "Refund process mentioned frequently",
    description:
      "AI detected a recurring discussion around refund turnaround time.",
    priority: "Low",
    color: "bg-blue-100 text-blue-700",
    icon: Brain,
  },
];

export default function AIInsights() {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-white p-7 shadow-sm">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-[var(--text-muted)]">
            AI Insights
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Recommended Actions
          </h2>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
          <Sparkles size={16} />
          AI Powered
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--border)] p-5 transition-all duration-300 hover:border-[var(--border-strong)] hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-hover)]">
                  <Icon size={20} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[var(--text-primary)]">
                      {item.title}
                    </h3>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${item.color}`}
                    >
                      {item.priority}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                    {item.description}
                  </p>

                  <button className="mt-5 flex items-center gap-2 text-sm font-semibold text-black transition hover:gap-3">
                    View Details
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}