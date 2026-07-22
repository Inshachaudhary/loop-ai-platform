import DashboardHero from "@/components/dashboard/DashboardHero";
import DashboardFilters from "@/components/dashboard/DashboardFilters";
import DashboardGrid from "@/components/dashboard/DashboardGrid";
import DashboardBottom from "@/components/dashboard/DashboardBottom";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHero />

      <DashboardFilters />

      <DashboardGrid />

      <DashboardBottom />
    </div>
  );
}