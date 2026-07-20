"use client";

import {
  Activity,
  FileText,
  MessageSquare,
  Sparkles,
  Users,
} from "lucide-react";

import ChartCard from "./ChartCard";

const activities = [
  {
    title: "AI analyzed 2,430 new feedback messages",
    description:
      "Sentiment and recurring themes were updated automatically.",
    time: "5 minutes ago",
    icon: Sparkles,
  },
  {
    title: "New customer feedback received",
    description:
      "A new conversation was imported from the mobile app channel.",
    time: "18 minutes ago",
    icon: MessageSquare,
  },
  {
    title: "Weekly insight report generated",
    description:
      "AI summary report is ready for team review.",
    time: "1 hour ago",
    icon: FileText,
  },
  {
    title: "Team member joined workspace",
    description:
      "A new analyst was added to the feedback workspace.",
    time: "3 hours ago",
    icon: Users,
  },
];

export default function ActivityFeed() {
  return (
    <ChartCard
      title="Activity Feed"
      description="Recent actions and intelligence updates."
    >
      <div className="space-y-6">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex gap-4"
            >
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-stone-50">
                  <Icon
                    size={17}
                    className="text-stone-700"
                  />
                </div>

                <div className="absolute left-1/2 top-11 h-full w-px -translate-x-1/2 bg-stone-200" />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-sm font-medium text-stone-900">
                    {activity.title}
                  </h4>

                  <span className="whitespace-nowrap text-xs text-stone-400">
                    {activity.time}
                  </span>
                </div>

                <p className="mt-1 text-sm leading-6 text-stone-500">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </ChartCard>
  );
}