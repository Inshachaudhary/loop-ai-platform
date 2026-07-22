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

const data = [
  { day: "Jun 22", positive: 72, neutral: 25, negative: 8 },
  { day: "Jun 29", positive: 76, neutral: 28, negative: 6 },
  { day: "Jul 6", positive: 73, neutral: 24, negative: 7 },
  { day: "Jul 13", positive: 79, neutral: 24, negative: 5 },
  { day: "Jul 20", positive: 83, neutral: 25, negative: 4 },
];

export default function SentimentChart() {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h3 className="text-xl font-semibold">
            Sentiment Trend
          </h3>

          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Weekly customer sentiment
          </p>
        </div>

        <button className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm">
          Weekly
        </button>

      </div>

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient id="positive" x1="0" y1="0" x2="0" y2="1">

                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.30} />

                <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />

              </linearGradient>

              <linearGradient id="negative" x1="0" y1="0" x2="0" y2="1">

                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.20} />

                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#ECECEC"
              strokeDasharray="4 4"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="positive"
              stroke="#22C55E"
              fill="url(#positive)"
              strokeWidth={3}
            />

            <Area
              type="monotone"
              dataKey="negative"
              stroke="#EF4444"
              fill="url(#negative)"
              strokeWidth={3}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </section>
  );
}