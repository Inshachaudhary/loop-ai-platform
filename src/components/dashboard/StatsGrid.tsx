"use client";

import {
  AlertTriangle,
  BrainCircuit,
  MessageSquareText,
  Smile,
} from "lucide-react";

import MetricCard from "./MetricCard";

export default function StatsGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        title="Customer Satisfaction"
        value="94%"
        change="+4.2%"
        trend="up"
        description="Customer satisfaction improved compared to last week."
        icon={
          <Smile
            size={22}
            className="text-emerald-600"
          />
        }
      />

      <MetricCard
        title="Active Feedback"
        value="18,420"
        change="+12%"
        trend="up"
        description="New feedback collected across all connected channels."
        icon={
          <MessageSquareText
            size={22}
            className="text-blue-600"
          />
        }
      />

      <MetricCard
        title="AI Insights"
        value="326"
        change="+18%"
        trend="up"
        description="Insights generated automatically by LOOP AI."
        icon={
          <BrainCircuit
            size={22}
            className="text-violet-600"
          />
        }
      />

      <MetricCard
        title="Critical Issues"
        value="23"
        change="-8%"
        trend="down"
        description="High priority issues requiring immediate investigation."
        icon={
          <AlertTriangle
            size={22}
            className="text-red-600"
          />
        }
      />
    </section>
  );
}