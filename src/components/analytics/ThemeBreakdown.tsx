"use client";

import {
  ArrowRight,
  CircleAlert,
  CreditCard,
  Package,
  Smartphone,
} from "lucide-react";

import ChartCard from "./ChartCard";

const themes = [
  {
    name: "Mobile Experience",
    percentage: "42%",
    mentions: "5,240 mentions",
    sentiment: "Needs attention",
    icon: Smartphone,
    status: "warning",
  },
  {
    name: "Delivery Experience",
    percentage: "28%",
    mentions: "3,480 mentions",
    sentiment: "Improving",
    icon: Package,
    status: "positive",
  },
  {
    name: "Payment Issues",
    percentage: "18%",
    mentions: "2,210 mentions",
    sentiment: "Critical",
    icon: CreditCard,
    status: "negative",
  },
  {
    name: "Pricing Feedback",
    percentage: "12%",
    mentions: "1,556 mentions",
    sentiment: "Stable",
    icon: CircleAlert,
    status: "neutral",
  },
];

const statusStyles = {
  positive: "text-emerald-700 bg-emerald-50",
  warning: "text-amber-700 bg-amber-50",
  negative: "text-red-700 bg-red-50",
  neutral: "text-stone-700 bg-stone-100",
};

export default function ThemeBreakdown() {
  return (
    <ChartCard
      title="Theme Breakdown"
      description="AI identified recurring topics from customer feedback."
    >
      <div className="space-y-4">
        {themes.map((theme) => {
          const Icon = theme.icon;

          return (
            <div
              key={theme.name}
              className="flex items-center justify-between rounded-xl border border-stone-200 p-4 transition hover:bg-stone-50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-100">
                  <Icon
                    size={18}
                    className="text-stone-700"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-stone-900">
                    {theme.name}
                  </h4>

                  <p className="mt-1 text-xs text-stone-500">
                    {theme.mentions}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden text-right sm:block">
                  <p className="text-sm font-semibold text-stone-900">
                    {theme.percentage}
                  </p>

                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                      statusStyles[
                        theme.status as keyof typeof statusStyles
                      ]
                    }`}
                  >
                    {theme.sentiment}
                  </span>
                </div>

                <ArrowRight
                  size={16}
                  className="text-stone-400"
                />
              </div>
            </div>
          );
        })}
      </div>
    </ChartCard>
  );
}