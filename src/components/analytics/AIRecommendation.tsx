"use client";

import {
  ArrowUpRight,
  Lightbulb,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

import ChartCard from "./ChartCard";

const recommendations = [
  {
    title: "Improve payment reliability",
    description:
      "Payment-related complaints increased by 18% this week. AI detected repeated checkout failures across mobile users.",
    priority: "High Priority",
    action:
      "Review payment API latency and failed transaction logs.",
    icon: ShieldAlert,
    level: "high",
  },
  {
    title: "Optimize mobile onboarding",
    description:
      "New users are dropping during account setup. Simplifying the onboarding flow may improve activation.",
    priority: "Medium Priority",
    action:
      "Test a shorter registration experience.",
    icon: Lightbulb,
    level: "medium",
  },
];

const priorityStyles = {
  high: "bg-red-50 text-red-700",
  medium: "bg-amber-50 text-amber-700",
};

export default function AIRecommendation() {
  return (
    <ChartCard
      title="AI Recommendations"
      description="Actionable insights generated from customer feedback patterns."
      action={
        <div className="flex items-center gap-1 text-xs font-medium text-stone-500">
          <Sparkles size={14} />
          AI Powered
        </div>
      }
    >
      <div className="space-y-4">
        {recommendations.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-xl border border-stone-200 p-5 transition hover:bg-stone-50"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-100">
                  <Icon
                    size={18}
                    className="text-stone-700"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h4 className="text-sm font-semibold text-stone-900">
                      {item.title}
                    </h4>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        priorityStyles[
                          item.level as keyof typeof priorityStyles
                        ]
                      }`}
                    >
                      {item.priority}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-stone-600">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between rounded-xl bg-stone-50 px-4 py-3">
                    <span className="text-xs text-stone-600">
                      Suggested action:
                    </span>

                    <span className="text-xs font-medium text-stone-900">
                      {item.action}
                    </span>
                  </div>

                  <button className="mt-4 flex items-center gap-2 text-xs font-medium text-stone-700 hover:text-black">
                    View analysis

                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </ChartCard>
  );
}