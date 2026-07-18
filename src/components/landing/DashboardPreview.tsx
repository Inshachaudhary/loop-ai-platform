"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

import {
  ArrowUpRight,
  MessageSquare,
  TrendingUp,
  Smile,
  BrainCircuit,
  Sparkles,
  Clock3,
} from "lucide-react";

const chartData = [
  { month: "Jan", value: 420 },
  { month: "Feb", value: 580 },
  { month: "Mar", value: 710 },
  { month: "Apr", value: 860 },
  { month: "May", value: 980 },
  { month: "Jun", value: 1240 },
];

const feedback = [
  {
    name: "Sarah Johnson",
    role: "Marketing Lead",
    text: "AI insights helped improve campaign performance by 23%.",
    time: "2 min ago",
  },
  {
    name: "David Lee",
    role: "Product Manager",
    text: "Customer trends are much easier to understand now.",
    time: "18 min ago",
  },
];

export default function DashboardPreview() {
  return (
    <div className="relative w-full max-w-[760px]">

      {/* Glow */}

      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_30px_70px_rgba(15,23,42,.08)]">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <h3 className="text-xl font-semibold text-slate-900">
              Executive Dashboard
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Customer Intelligence Overview
            </p>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2">

            <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />

            <span className="text-sm font-semibold text-green-700">
              Live
            </span>

          </div>

        </div>

        {/* KPI Cards */}

        <div className="mt-7 grid grid-cols-2 gap-4"> </div>
{/* Revenue */}

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

  <div className="flex items-center justify-between">

    <span className="text-sm text-slate-500">
      Revenue
    </span>

    <div className="rounded-xl bg-blue-100 p-2">

      <ArrowUpRight
        size={18}
        className="text-blue-600"
      />

    </div>

  </div>

  <h4 className="mt-5 text-3xl font-bold text-slate-900">
    ₹2.4M
  </h4>

  <p className="mt-2 text-sm font-semibold text-green-600">
    +18.4%
  </p>

</div>

{/* Feedback */}

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

  <div className="flex items-center justify-between">

    <span className="text-sm text-slate-500">
      Feedback
    </span>

    <div className="rounded-xl bg-blue-100 p-2">

      <MessageSquare
        size={18}
        className="text-blue-600"
      />

    </div>

  </div>

  <h4 className="mt-5 text-3xl font-bold text-slate-900">
    12.4K
  </h4>

  <p className="mt-2 text-sm font-semibold text-green-600">
    +1,240
  </p>

</div>

{/* Growth */}

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

  <div className="flex items-center justify-between">

    <span className="text-sm text-slate-500">
      Growth
    </span>

    <div className="rounded-xl bg-blue-100 p-2">

      <TrendingUp
        size={18}
        className="text-blue-600"
      />

    </div>

  </div>

  <h4 className="mt-5 text-3xl font-bold text-slate-900">
    +24%
  </h4>

  <p className="mt-2 text-sm font-semibold text-green-600">
    QoQ
  </p>

</div>

{/* Satisfaction */}

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

  <div className="flex items-center justify-between">

    <span className="text-sm text-slate-500">
      CSAT
    </span>

    <div className="rounded-xl bg-blue-100 p-2">

      <Smile
        size={18}
        className="text-blue-600"
      />

    </div>

  </div>

  <h4 className="mt-5 text-3xl font-bold text-slate-900">
    92%
  </h4>

  <p className="mt-2 text-sm font-semibold text-green-600">
    Excellent
  </p>

</div>

</div>

{/* Analytics */}

<div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-6">

  <div className="mb-6 flex items-center justify-between">

    <div>

      <h4 className="text-lg font-semibold text-slate-900">
        Feedback Analytics
      </h4>

      <p className="mt-1 text-sm text-slate-500">
        Last 6 months performance
      </p>

    </div>

    <div className="rounded-full bg-green-100 px-4 py-2">

      <span className="text-sm font-semibold text-green-700">
        ↑ 18.6%
      </span>

    </div>

  </div>

  <div className="h-[240px]">

    <ResponsiveContainer>

      <AreaChart data={chartData}>

        <defs>

          <linearGradient
            id="fillBlue"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >

            <stop
              offset="0%"
              stopColor="#2563eb"
              stopOpacity={0.35}
            />

            <stop
              offset="100%"
              stopColor="#2563eb"
              stopOpacity={0}
            />

          </linearGradient>

        </defs>

        <CartesianGrid
          stroke="#E2E8F0"
          vertical={false}
          strokeDasharray="4 4"
        />

        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
        />

        <Tooltip />

        <Area
          dataKey="value"
          stroke="#2563eb"
          strokeWidth={3}
          fill="url(#fillBlue)"
        />

      </AreaChart>

    </ResponsiveContainer>

  </div>

</div>

{/* AI Summary */}

<div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 p-6">

  <div className="flex items-center gap-3">

    <div className="rounded-xl bg-blue-600 p-3 text-white">

      <BrainCircuit size={20} />

    </div>

    <div>

      <h4 className="font-semibold text-slate-900">
        AI Summary
      </h4>

      <p className="text-sm text-slate-500">
        Updated a few seconds ago
      </p>

    </div>

  </div>

  <p className="mt-5 leading-7 text-slate-700">

    Customer satisfaction has increased steadily over the last quarter.
    Product usability and support quality are the strongest drivers of
    positive feedback, while onboarding remains the most requested area
    for improvement.

  </p>

</div>
{/* Bottom Grid */}

<div className="mt-7 grid gap-5 lg:grid-cols-[1fr_1.2fr]">

  {/* Sentiment */}

  <div className="rounded-2xl border border-slate-200 bg-white p-5">

    <div className="flex items-center gap-3">

      <div className="rounded-xl bg-violet-100 p-2">

        <Sparkles
          size={18}
          className="text-violet-600"
        />

      </div>

      <div>

        <h4 className="font-semibold text-slate-900">
          Sentiment Analysis
        </h4>

        <p className="text-sm text-slate-500">
          AI Classification
        </p>

      </div>

    </div>

    <div className="mt-6 space-y-4">

      <div>

        <div className="mb-2 flex justify-between text-sm">

          <span>Positive</span>

          <span className="font-semibold text-green-600">
            78%
          </span>

        </div>

        <div className="h-2 rounded-full bg-slate-200">

          <div className="h-full w-[78%] rounded-full bg-green-500" />

        </div>

      </div>

      <div>

        <div className="mb-2 flex justify-between text-sm">

          <span>Neutral</span>

          <span className="font-semibold text-yellow-600">
            16%
          </span>

        </div>

        <div className="h-2 rounded-full bg-slate-200">

          <div className="h-full w-[16%] rounded-full bg-yellow-500" />

        </div>

      </div>

      <div>

        <div className="mb-2 flex justify-between text-sm">

          <span>Negative</span>

          <span className="font-semibold text-red-600">
            6%
          </span>

        </div>

        <div className="h-2 rounded-full bg-slate-200">

          <div className="h-full w-[6%] rounded-full bg-red-500" />

        </div>

      </div>

    </div>

  </div>

  {/* Recent Feedback */}

  <div className="rounded-2xl border border-slate-200 bg-white p-5">

    <h4 className="font-semibold text-slate-900">
      Recent Feedback
    </h4>

    <div className="mt-5 space-y-4">

      {feedback.map((item) => (

        <div
          key={item.name}
          className="rounded-xl border border-slate-200 p-4"
        >

          <div className="flex items-center justify-between">

            <div>

              <h5 className="font-semibold text-slate-900">
                {item.name}
              </h5>

              <p className="text-sm text-slate-500">
                {item.role}
              </p>

            </div>

            <div className="flex items-center gap-1 text-sm text-slate-400">

              <Clock3 size={14} />

              {item.time}

            </div>

          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            {item.text}
          </p>

        </div>

      ))}

    </div>

  </div>

</div>

</div>

);
}