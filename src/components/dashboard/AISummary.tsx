import { BrainCircuit, Sparkles } from "lucide-react";

export default function AISummary() {
  return (
    <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">

      {/* Header */}

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">

          <BrainCircuit size={22} />

        </div>

        <div>

          <h3 className="text-lg font-semibold text-slate-900">
            AI Summary
          </h3>

          <p className="text-sm text-slate-500">
            Updated just now
          </p>

        </div>

      </div>

      {/* Summary */}

      <p className="mt-6 leading-7 text-slate-600">
        Customer satisfaction continues to improve across all channels.
        Users appreciate the product's ease of use and responsive support,
        while onboarding and documentation remain the most requested areas
        for enhancement.
      </p>

      {/* Recommendation */}

      <div className="mt-6 rounded-xl border border-blue-100 bg-white p-4">

        <div className="flex items-center gap-2">

          <Sparkles
            size={18}
            className="text-blue-600"
          />

          <span className="font-semibold text-slate-900">
            AI Recommendation
          </span>

        </div>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Focus on improving the onboarding experience and create more
          interactive tutorials. This is expected to increase customer
          retention by approximately 12%.
        </p>

      </div>

    </div>
  );
}