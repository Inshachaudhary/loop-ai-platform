"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import ChartCard from "./ChartCard";

const sentimentData = [
  {
    day: "01",
    positive: 72,
    neutral: 20,
    negative: 8,
  },
  {
    day: "05",
    positive: 74,
    neutral: 18,
    negative: 8,
  },
  {
    day: "10",
    positive: 77,
    neutral: 16,
    negative: 7,
  },
  {
    day: "15",
    positive: 75,
    neutral: 17,
    negative: 8,
  },
  {
    day: "20",
    positive: 81,
    neutral: 13,
    negative: 6,
  },
  {
    day: "25",
    positive: 83,
    neutral: 12,
    negative: 5,
  },
  {
    day: "30",
    positive: 86,
    neutral: 10,
    negative: 4,
  },
];

function CustomTooltip({
  active,
  payload,
  label,
}: any) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-sm">
      <p className="mb-2 text-xs font-medium text-stone-500">
        Day {label}
      </p>

      {payload.map((item: any) => (
        <div
          key={item.dataKey}
          className="flex items-center justify-between gap-6 text-sm"
        >
          <span className="capitalize text-stone-600">
            {item.dataKey}
          </span>

          <span className="font-medium text-stone-900">
            {item.value}%
          </span>
        </div>
      ))}
    </div>
  );
}

export default function SentimentTrend() {
  return (
    <ChartCard
      title="Sentiment Trend"
      description="Customer sentiment movement over the last 30 days."
    >
      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={sentimentData}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />

            <YAxis
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="positive"
              strokeWidth={2}
              fillOpacity={0.08}
              fill="currentColor"
              className="text-stone-900"
            />

            <Area
              type="monotone"
              dataKey="neutral"
              strokeWidth={2}
              fillOpacity={0}
              className="text-stone-400"
            />

            <Area
              type="monotone"
              dataKey="negative"
              strokeWidth={2}
              fillOpacity={0}
              className="text-red-600"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}