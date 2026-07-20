import {
  AlertTriangle,
  Smile,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

import MetricCard from "./MetricCard";

export default function DashboardGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        title="Critical Issues"
        value="23"
        change="+18%"
        trend="up"
        description="Billing failures increased this week."
        icon={AlertTriangle}
      />

      <MetricCard
        title="Customer Satisfaction"
        value="91%"
        change="-2%"
        trend="down"
        description="Slight decline compared to last week."
        icon={Smile}
      />

      <MetricCard
        title="New Feedback"
        value="842"
        change="+12%"
        trend="up"
        description="Collected from all channels."
        icon={MessageSquare}
      />

      <MetricCard
        title="Resolved Issues"
        value="156"
        change="+8%"
        trend="up"
        description="Successfully handled by the team."
        icon={CheckCircle2}
      />
    </section>
  );
}