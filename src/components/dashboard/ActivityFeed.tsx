"use client";

import {
  Brain,
  MessageSquare,
  TriangleAlert,
  CheckCircle2,
} from "lucide-react";

const activities = [
  {
    id: 1,
    icon: Brain,
    title: "AI detected a recurring refund issue",
    description:
      "Refund processing time has been mentioned 46 times in the last 24 hours.",
    time: "2 min ago",
    color: "bg-violet-100 text-violet-700",
  },
  {
    id: 2,
    icon: CheckCircle2,
    title: "Customer satisfaction increased",
    description:
      "Positive sentiment improved by 8.4% after the latest release.",
    time: "18 min ago",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 3,
    icon: MessageSquare,
    title: "128 new feedback entries",
    description:
      "New reviews were synced from Email, Website and Play Store.",
    time: "34 min ago",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 4,
    icon: TriangleAlert,
    title: "Critical issue requires attention",
    description:
      "Checkout payment failures crossed the alert threshold.",
    time: "1 hour ago",
    color: "bg-red-100 text-red-700",
  },
];

export default function ActivityFeed() {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-white shadow-sm">

      <div className="border-b border-[var(--border)] p-7">

        <p className="text-sm font-medium text-[var(--text-muted)]">
          Live Activity
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Activity Timeline
        </h2>

      </div>

      <div className="relative p-7">

        <div className="absolute left-[36px] top-8 bottom-8 w-px bg-[var(--border)]" />

        <div className="space-y-8">

          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div
                key={activity.id}
                className="relative flex gap-5"
              >
                <div
                  className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full ${activity.color}`}
                >
                  <Icon size={18} />
                </div>

                <div className="flex-1">

                  <div className="flex items-center justify-between">

                    <h3 className="font-semibold text-[var(--text-primary)]">
                      {activity.title}
                    </h3>

                    <span className="text-xs text-[var(--text-muted)]">
                      {activity.time}
                    </span>

                  </div>

                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                    {activity.description}
                  </p>
                                    <button
                    className="
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[var(--border)]
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-200
                    hover:border-[var(--border-strong)]
                    hover:bg-[var(--surface-hover)]
                    "
                  >
                    View Details
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}