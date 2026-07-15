import Card from "@/components/ui/Card";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsGrid from "@/components/dashboard/StatsGrid";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import BottomCards from "@/components/dashboard/BottomCards";
import RecentFeedback from "@/components/dashboard/RecentFeedback";

export default function DashboardPreview() {
  return (
    <div className="relative">

      {/* Glow */}

      <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

      <Card className="relative rounded-[36px] border border-slate-200 bg-white p-8 shadow-2xl">

        <DashboardHeader />

        <div className="mt-8">

          <StatsGrid />

          <AnalyticsChart />

          <BottomCards />

          <RecentFeedback />

        </div>

      </Card>

    </div>
  );
}