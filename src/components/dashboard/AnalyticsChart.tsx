"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

const chartData = [
  { month: "Jan", feedback: 420 },
  { month: "Feb", feedback: 580 },
  { month: "Mar", feedback: 720 },
  { month: "Apr", feedback: 860 },
  { month: "May", feedback: 1010 },
  { month: "Jun", feedback: 1240 },
];

export default function AnalyticsChart() {
  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h3 className="text-lg font-semibold text-slate-900">
            Feedback Analytics
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Customer feedback trend over the last 6 months
          </p>

        </div>

        <div className="rounded-full bg-green-100 px-4 py-2">

          <span className="text-sm font-semibold text-green-700">
            ↑ 18.6%
          </span>

        </div>

      </div>

      <div className="h-[260px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={chartData}>

            <defs>

              <linearGradient
                id="feedbackGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#2563EB"
                  stopOpacity={0.35}
                />

                <stop
                  offset="100%"
                  stopColor="#2563EB"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#E2E8F0"
              strokeDasharray="4 4"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#64748B",
                fontSize: 13,
              }}
            />

            <Tooltip
              cursor={false}
              contentStyle={{
                borderRadius: "14px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 10px 30px rgba(15,23,42,.08)",
              }}
            />

            <Area
              type="monotone"
              dataKey="feedback"
              stroke="#2563EB"
              strokeWidth={3}
              fill="url(#feedbackGradient)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}