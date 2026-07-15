"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", value: 420 },
  { month: "Feb", value: 580 },
  { month: "Mar", value: 760 },
  { month: "Apr", value: 910 },
  { month: "May", value: 1080 },
  { month: "Jun", value: 1280 },
];

export default function AnalyticsChart() {
  return (
    <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-7">

      <div className="mb-7 flex items-center justify-between">

        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Feedback Analytics
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Customer feedback trend over the last 6 months
          </p>
        </div>

        <div className="rounded-full bg-green-50 px-4 py-2">
          <span className="text-sm font-semibold text-green-600">
            ↑ 18.6%
          </span>
        </div>

      </div>

      <div className="h-[280px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient id="feedbackFill" x1="0" y1="0" x2="0" y2="1">

                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.30} />

                <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />

              </linearGradient>

            </defs>

            <CartesianGrid
              vertical={false}
              strokeDasharray="4 4"
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 13 }}
            />

            <Tooltip
              cursor={false}
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 12px 40px rgba(0,0,0,.08)",
              }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={3}
              fill="url(#feedbackFill)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}