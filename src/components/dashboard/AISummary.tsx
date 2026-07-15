import { Bot, TrendingUp, AlertTriangle, Sparkles } from "lucide-react";

export default function AISummary() {
  return (
    <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-6">

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
          <Bot className="text-blue-600" size={22} />
        </div>

        <div>
          <h3 className="text-lg font-bold text-stone-900">
            AI Summary
          </h3>

          <p className="text-sm text-stone-500">
            Generated from recent customer feedback
          </p>
        </div>

      </div>

      <div className="space-y-4">

        <div className="flex items-start gap-3 rounded-2xl bg-blue-50 p-4">
          <Sparkles className="mt-1 text-blue-600" size={18} />
          <p className="text-sm leading-6 text-stone-700">
            Positive sentiment increased by <strong>18%</strong> after the latest product update.
          </p>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-green-50 p-4">
          <TrendingUp className="mt-1 text-green-600" size={18} />
          <p className="text-sm leading-6 text-stone-700">
            Delivery experience received significantly better ratings this month.
          </p>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-orange-50 p-4">
          <AlertTriangle className="mt-1 text-orange-600" size={18} />
          <p className="text-sm leading-6 text-stone-700">
            Most recurring complaints are related to checkout speed and mobile responsiveness.
          </p>
        </div>

      </div>

    </div>
  );
}