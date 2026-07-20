"use client";

import SectionHeading from "@/components/analytics/SectionHeading";

import SentimentTrend from "@/components/analytics/SentimentTrend";
import ThemeBreakdown from "@/components/analytics/ThemeBreakdown";
import RecentFeedback from "@/components/analytics/RecentFeedback";
import AIRecommendation from "@/components/analytics/AIRecommendation";
import ActivityFeed from "@/components/analytics/ActivityFeed";

export default function AnalyticsOverview() {
  return (
    <section className="mt-10">
      <SectionHeading
        title="Customer Intelligence"
        description="AI-powered insights from customer conversations, sentiment trends, and recurring themes."
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Sentiment */}
        <div className="xl:col-span-7">
          <SentimentTrend />
        </div>

        {/* Themes */}
        <div className="xl:col-span-5">
          <ThemeBreakdown />
        </div>

        {/* Feedback */}
        <div className="xl:col-span-6">
          <RecentFeedback />
        </div>

        {/* AI */}
        <div className="xl:col-span-6">
          <AIRecommendation />
        </div>

        {/* Activity */}
        <div className="xl:col-span-12">
          <ActivityFeed />
        </div>
      </div>
    </section>
  );
}