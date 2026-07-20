import AppShell from "@/components/layout/AppShell";

import DashboardHero from "@/components/dashboard/DashboardHero";
import DashboardGrid from "@/components/dashboard/DashboardGrid";
import AnalyticsOverview from "@/components/dashboard/AnalyticsOverview";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <DashboardHero />

        <DashboardGrid />

        <AnalyticsOverview />
      </div>
    </AppShell>
  );
}