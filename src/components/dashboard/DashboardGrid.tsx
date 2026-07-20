"use client";

import {
  Activity,
  MessageSquare,
  Smile,
  TrendingUp,
} from "lucide-react";

import MetricCard from "./MetricCard";

const metrics = [
  {
    title: "Overall Sentiment",
    value: "84%",
    change: "+6.4%",
    trend: "up" as const,
    description: "Customer sentiment improved compared to last week.",
    icon: Smile,
  },
  {
    title: "Feedback Received",
    value: "12,486",
    change: "+12.8%",
    trend: "up" as const,
    description: "Feedback collected across all connected channels.",
    icon: MessageSquare,
  },
  {
    title: "Recurring Themes",
    value: "37",
    change: "-4.1%",
    trend: "down" as const,
    description: "Frequently mentioned topics detected by AI.",
    icon: Activity,
  },
  {
    title: "Resolution Rate",
    value: "91%",
    change: "+3.2%",
    trend: "up" as const,
    description: "Customer issues resolved within the target SLA.",
    icon: TrendingUp,
  },
];

export default function DashboardGrid() {
  return (
    <section
      aria-label="Dashboard metrics"
      className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
    >
      {metrics.map((metric) => (
        <MetricCard
          key={metric.title}
          title={metric.title}
          value={metric.value}
          change={metric.change}
          trend={metric.trend}
          description={metric.description}
          icon={metric.icon}
        />
      ))}
    </section>
  );
}