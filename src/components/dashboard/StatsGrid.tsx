import {
  ArrowUpRight,
  MessageSquare,
  Smile,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Revenue",
    value: "₹2.4M",
    change: "+18%",
    icon: ArrowUpRight,
  },
  {
    title: "Feedback",
    value: "12.4K",
    change: "+1.2K",
    icon: MessageSquare,
  },
  {
    title: "Satisfaction",
    value: "92%",
    change: "Excellent",
    icon: Smile,
  },
  {
    title: "Growth",
    value: "+24%",
    change: "QoQ",
    icon: TrendingUp,
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-gradient-to-b
              from-white
              to-slate-50
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <div className="flex items-center justify-between">

              <span className="text-sm font-medium text-slate-500">
                {item.title}
              </span>

              <div className="rounded-xl bg-blue-50 p-2">
                <Icon
                  size={18}
                  className="text-blue-600"
                />
              </div>

            </div>

            <h3 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
              {item.value}
            </h3>

            <p className="mt-3 text-sm font-semibold text-green-600">
              {item.change}
            </p>

          </div>
        );
      })}
    </div>
  );
}