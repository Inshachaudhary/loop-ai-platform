import AppShell from "@/components/layout/AppShell";
import DashboardGrid from "@/components/dashboard/DashboardGrid";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        {/* Hero */}
        <section>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Customer Signals
          </h1>

          <p className="mt-2 max-w-2xl text-[15px] leading-7 text-[var(--text-secondary)]">
            Track customer sentiment, discover recurring themes, and
            identify issues before they become problems.
          </p>
        </section>

        {/* Metrics */}
        <DashboardGrid />
      </div>
    </AppShell>
  );
}