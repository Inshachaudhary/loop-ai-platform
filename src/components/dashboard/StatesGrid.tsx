import {
  ArrowUpRight,
  MessageSquare,
  TrendingUp,
  Smile,
} from "lucide-react";

const stats = [
  {
    title: "Revenue",
    value: "₹2.4M",
    change: "+18.4%",
    icon: ArrowUpRight,
  },
  {
    title: "Feedback",
    value: "12.4K",
    change: "+1,240",
    icon: MessageSquare,
  },
  {
    title: "Growth",
    value: "+24%",
    change: "Quarterly",
    icon: TrendingUp,
  },
  {
    title: "CSAT",
    value: "92%",
    change: "Excellent",
    icon: Smile,
  },
];

export default function StatsGrid() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
          >
            <div className="flex items-center justify-between">

              <span className="text-sm font-medium text-slate-500">
                {item.title}
              </span>

              <div className="rounded-xl bg-blue-100 p-2">

                <Icon
                  size={18}
                  className="text-blue-600"
                />

              </div>

            </div>

            <h4 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
              {item.value}
            </h4>

            <p className="mt-2 text-sm font-semibold text-green-600">
              {item.change}
            </p>

          </div>
        );
      })}

    </div>
  );
}