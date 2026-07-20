import {
  ArrowDownRight,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";
import Card from "@/components/ui/Card";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  description: string;
  icon: LucideIcon;
}

export default function MetricCard({
  title,
  value,
  change,
  trend,
  description,
  icon: Icon,
}: MetricCardProps) {
  const positive = trend === "up";

  return (
    <Card hover>
      <div className="flex items-start justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-[var(--background)] p-3">
            <Icon
              size={20}
              className="text-[var(--primary)]"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-[var(--text-secondary)]">
              {title}
            </p>

            <h3 className="mt-2 text-3xl font-semibold text-[var(--text-primary)]">
              {value}
            </h3>
          </div>
        </div>

        {/* Trend Badge */}
        <div
          className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${
            positive
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {positive ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}

          {change}
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-[var(--text-secondary)]">
        {description}
      </p>
    </Card>
  );
}