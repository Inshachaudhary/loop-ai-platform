import ExecutiveSummary from "@/components/dashboard/ExecutiveSummary";
import StatsGrid from "@/components/dashboard/StatsGrid";
import SentimentChart from "@/components/dashboard/SentimentChart";
import AIInsights from "@/components/dashboard/AIInsights";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <ExecutiveSummary />

      <StatsGrid />

      <div className="grid gap-8 xl:grid-cols-3">
        <section className="xl:col-span-2">
          <div className="flex h-[420px] items-center justify-center rounded-3xl border border-[var(--border)] bg-white shadow-sm">
            <p className="text-[var(--text-muted)]">
              Sentiment Chart (Coming Next)
            </p>
          </div>
        </section>

        <section>
          <AIInsights />
        </section>
      </div>

      <div className="grid gap-8 xl:grid-cols-5">
        <section className="xl:col-span-3">
          <div className="flex h-[420px] items-center justify-center rounded-3xl border border-[var(--border)] bg-white shadow-sm">
            <p className="text-[var(--text-muted)]">
              Recent Feedback Table (Coming Next)
            </p>
          </div>
        </section>

        <section className="xl:col-span-2">
         <SentimentChart />
        </section>
      </div>
    </div>
  );
}