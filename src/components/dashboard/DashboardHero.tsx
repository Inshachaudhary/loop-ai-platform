import { RefreshCw } from "lucide-react";

export default function DashboardHero() {
  return (
    <section
      className="
        min-h-[235px]
        flex
        items-start
        justify-between
        rounded-[24px]
        border
        border-[var(--border)]
        bg-white
        px-8
        py-7
        shadow-sm
      "
    >
      {/* Left */}

      <div className="max-w-[760px]">

        <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
          EXECUTIVE SUMMARY
        </p>

        <h2 className="mt-3 text-[58px] font-bold leading-[1.02] tracking-[-0.05em] text-[var(--text-primary)]">
          Good afternoon, Insha{" "}
          <span className="ml-2 inline-block">👋</span>
        </h2>

        <p className="mt-5 max-w-[760px] text-[18px] leading-9 text-[var(--text-secondary)]">
          Customer satisfaction is improving this week. AI detected{" "}
          <strong className="font-semibold text-[var(--text-primary)]">
            3 recurring issues
          </strong>{" "}
          that require immediate attention and identified{" "}
          <strong className="font-semibold text-[var(--text-primary)]">
            2 high-impact opportunities
          </strong>{" "}
          to improve retention.
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-3 pt-2 text-[18px] text-[var(--text-primary)]">

        <RefreshCw size={20} strokeWidth={2} />

        <span className="font-medium">
          Last Sync • 2 min ago
        </span>

      </div>
    </section>
  );
}