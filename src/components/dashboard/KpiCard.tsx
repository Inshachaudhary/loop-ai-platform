import { LucideIcon } from "lucide-react";

type KpiCardProps = {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
};

export default function KpiCard({
  title,
  value,
  change,
  icon: Icon,
}: KpiCardProps) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">

        <span className="text-sm text-stone-500">
          {title}
        </span>

        <Icon
          size={18}
          className="text-blue-600"
        />

      </div>

      <h3 className="mt-5 text-3xl font-bold text-stone-900">
        {value}
      </h3>

      <p className="mt-2 text-sm font-semibold text-green-600">
        {change}
      </p>

    </div>
  );
}