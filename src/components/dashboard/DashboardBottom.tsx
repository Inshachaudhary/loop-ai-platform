import SentimentChart from "./SentimentChart";
import ThemeBreakdown from "./ThemeBreakdown";
import ActivityFeed from "./ActivityFeed";

export default function DashboardBottom() {
  return (
    <section className="grid grid-cols-12 gap-6">
      {/* Left Chart */}

      <div className="col-span-7">
        <SentimentChart />
      </div>

      {/* Themes */}

      <div className="col-span-3">
        <ThemeBreakdown />
      </div>

      {/* Activity */}

      <div className="col-span-2">
        <ActivityFeed />
      </div>
    </section>
  );
}