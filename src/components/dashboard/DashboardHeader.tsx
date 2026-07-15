import { Activity } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>
        <h2 className="text-2xl font-bold text-stone-900">
          Executive Dashboard
        </h2>

        <p className="mt-1 text-sm text-stone-500">
          AI-powered customer intelligence
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