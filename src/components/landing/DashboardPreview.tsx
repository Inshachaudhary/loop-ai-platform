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
  ChevronRight,
} from "lucide-react";

const chartData = [
  { month: "Jan", value: 420 },
  { month: "Feb", value: 580 },
  { month: "Mar", value: 720 },
  { month: "Apr", value: 890 },
  { month: "May", value: 1080 },
  { month: "Jun", value: 1290 },
];

const feedback = [
  {
    name: "Sarah Johnson",
    role: "Marketing Lead",
    message:
      "The AI insights helped us improve campaign performance significantly.",
    time: "2 min ago",
  },
  {
    name: "David Lee",
    role: "Product Manager",
    message:
      "Love the new dashboard. Everything is much easier to understand.",
    time: "18 min ago",
  },
];

export default function DashboardPreview() {
  return (
    <div className="relative">

      {/* Glow */}

      <div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

      {/* Main Card */}

      <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,.08)]">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <h3 className="text-xl font-bold text-slate-900">
              Executive Dashboard
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Real-time customer intelligence
            </p>

          </div>

          <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2">

            <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />

            <span className="text-sm font-semibold text-green-700">
              Live
            </span>

          </div>

        </div>
                {/* KPI Cards */}

        <div className="mt-7 grid grid-cols-2 gap-4">

          {/* Revenue */}

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="flex items-center justify-between">

              <span className="text-sm font-medium text-slate-500">
                Revenue
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
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
              +18.4% this month
            </p>

          </div>

          {/* Feedback */}

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="flex items-center justify-between">

              <span className="text-sm font-medium text-slate-500">
                Feedback
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
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
              +1,240 this week
            </p>

          </div>

          {/* Growth */}

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="flex items-center justify-between">

              <span className="text-sm font-medium text-slate-500">
                Growth
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
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
              Quarter over quarter
            </p>

          </div>

          {/* Satisfaction */}

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="flex items-center justify-between">

              <span className="text-sm font-medium text-slate-500">
                Satisfaction
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
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
              Excellent rating
            </p>

          </div>

        </div>
                {/* Analytics Chart */}

        <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <h4 className="text-lg font-bold text-slate-900">
                Feedback Analytics
              </h4>

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

          <div className="h-[250px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

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
                  vertical={false}
                  strokeDasharray="4 4"
                  stroke="#e2e8f0"
                />

                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: "#64748b",
                    fontSize: 13,
                  }}
                />

                <Tooltip
                  cursor={false}
                  contentStyle={{
                    borderRadius: "16px",
                    border: "1px solid #e2e8f0",
                    boxShadow:
                      "0 12px 32px rgba(15,23,42,.08)",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#2563eb"
                  strokeWidth={3}
                  fill="url(#feedbackGradient)"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </div>
                {/* Bottom Cards */}

        <div className="mt-7 grid gap-5 lg:grid-cols-2">

          {/* AI Summary */}

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">

                <BrainCircuit
                  size={22}
                  className="text-blue-600"
                />

              </div>

              <div>

                <h4 className="text-lg font-bold text-slate-900">
                  AI Summary
                </h4>

                <p className="text-sm text-slate-500">
                  Generated from customer feedback
                </p>

              </div>

            </div>

            <div className="mt-6 rounded-2xl bg-blue-50 p-5">

              <div className="flex items-center gap-2">

                <Sparkles
                  size={18}
                  className="text-blue-600"
                />

                <span className="font-semibold text-slate-900">
                  Key Insight
                </span>

              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">

                Customers appreciate the product quality and AI-powered
                analytics, while checkout speed continues to be the
                most frequently reported issue.

              </p>

            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">

              <h5 className="font-semibold text-slate-900">
                Recommendation
              </h5>

              <p className="mt-3 text-sm leading-7 text-slate-600">

                Improve payment performance and optimize the mobile
                checkout experience to increase overall conversion.

              </p>

            </div>

          </div>

          {/* Sentiment */}

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <h4 className="text-lg font-bold text-slate-900">
              Sentiment Analysis
            </h4>

            <p className="mt-1 text-sm text-slate-500">
              Overall customer emotions
            </p>

            <div className="mt-8 space-y-6">

              {/* Positive */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <span className="font-medium text-slate-700">
                    😊 Positive
                  </span>

                  <span className="font-semibold text-slate-900">
                    72%
                  </span>

                </div>

                <div className="h-2 rounded-full bg-slate-200">

                  <div className="h-2 w-[72%] rounded-full bg-green-500" />

                </div>

              </div>

              {/* Neutral */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <span className="font-medium text-slate-700">
                    😐 Neutral
                  </span>

                  <span className="font-semibold text-slate-900">
                    18%
                  </span>

                </div>

                <div className="h-2 rounded-full bg-slate-200">

                  <div className="h-2 w-[18%] rounded-full bg-yellow-500" />

                </div>

              </div>

              {/* Negative */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <span className="font-medium text-slate-700">
                    😞 Negative
                  </span>

                  <span className="font-semibold text-slate-900">
                    10%
                  </span>

                </div>

                <div className="h-2 rounded-full bg-slate-200">

                  <div className="h-2 w-[10%] rounded-full bg-red-500" />

                </div>

              </div>

            </div>

          </div>

        </div>
                {/* Recent Feedback */}

        <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-6">

          <div className="flex items-center justify-between">

            <div>

              <h4 className="text-lg font-bold text-slate-900">
                Recent Feedback
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                Latest customer conversations
              </p>

            </div>

            <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600">

              View All

              <ChevronRight size={16} />

            </button>

          </div>

          <div className="mt-6 space-y-4">

            {feedback.map((item) => (

              <div
                key={item.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-start justify-between">

                  <div className="flex gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">

                      {item.name.charAt(0)}

                    </div>

                    <div>

                      <h5 className="font-semibold text-slate-900">
                        {item.name}
                      </h5>

                      <p className="text-sm text-slate-500">
                        {item.role}
                      </p>

                    </div>

                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Positive
                  </span>

                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.message}
                </p>

                <div className="mt-5 flex items-center justify-between">

                  <div className="flex items-center gap-2 text-sm text-slate-500">

                    <Clock3 size={15} />

                    {item.time}

                  </div>

                  <button className="rounded-xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-100">

                    Reply

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );
}