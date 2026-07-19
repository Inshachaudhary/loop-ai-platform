import { Activity } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex items-start justify-between">

      <div>

        <h3 className="text-2xl font-bold tracking-tight text-slate-900">
          Executive Dashboard
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          AI-powered customer intelligence overview
        </p>

      </div>

      <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2">

        <Activity
          size={16}
          className="text-green-600"
        />

        <span className="text-sm font-semibold text-green-700">
          Live
        </span>

      </div>

    </div>
  );
}