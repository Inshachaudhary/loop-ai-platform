import Card from "@/components/ui/Card";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KpiCard from "@/components/dashboard/KpiCard";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import AISummary from "@/components/dashboard/AISummary";
import RecentFeedback from "@/components/dashboard/RecentFeedback";

import {
  ArrowUpRight,
  MessageSquare,
  Smile,
  TrendingUp,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <div className="relative">

      {/* Background Glow */}

      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

      <Card className="relative rounded-[32px] border border-stone-200 bg-white p-7 shadow-2xl">

        <DashboardHeader />

        {/* KPI Cards */}

        <div className="mt-8 grid grid-cols-2 gap-5">

          <KpiCard
            title="Revenue"
            value="₹2.4M"
            change="+18.6%"
            icon={ArrowUpRight}
          />

          <KpiCard
            title="Feedback"
            value="12.4K"
            change="+1,284"
            icon={MessageSquare}
          />

          <KpiCard
            title="Satisfaction"
            value="92%"
            change="Excellent"
            icon={Smile}
          />

          <KpiCard
            title="Growth"
            value="+24%"
            change="QoQ"
            icon={TrendingUp}
          />

        </div>

        <AnalyticsChart />

        <AISummary />

        <RecentFeedback />

      </Card>

    </div>
  );
}