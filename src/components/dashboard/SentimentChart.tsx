"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { day: "Mon", positive: 74, negative: 16 },
  { day: "Tue", positive: 79, negative: 13 },
  { day: "Wed", positive: 76, negative: 15 },
  { day: "Thu", positive: 82, negative: 11 },
  { day: "Fri", positive: 85, negative: 9 },
  { day: "Sat", positive: 83, negative: 10 },
  { day: "Sun", positive: 88, negative: 8 },
];

export default function SentimentChart() {
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-white p-7 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <p className="text-sm font-medium text-[var(--text-muted)]">
            Sentiment Trend
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Weekly Customer Sentiment
          </h2>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
          <TrendingUp size={16} />
          +8.4%
        </div>

      </div>

      <div className="h-[340px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient id="positive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0.02} />
              </linearGradient>

              <linearGradient id="negative" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#ef4444" stopOpacity={0.02} />
              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="#ECECEC"
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

            <Tooltip
              contentStyle={{
                borderRadius: 16,
                border: "1px solid #E5E7EB",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,.08)",
              }}
            />

            <Area
              dataKey="positive"
              stroke="#22c55e"
              fill="url(#positive)"
              strokeWidth={3}
            />

            <Area
              dataKey="negative"
              stroke="#ef4444"
              fill="url(#negative)"
              strokeWidth={3}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}