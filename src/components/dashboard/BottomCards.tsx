import {
  BrainCircuit,
  Smile,
  Frown,
  Meh,
  Sparkles,
} from "lucide-react";

export default function BottomCards() {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-2">

      {/* AI Summary */}

      <div className="rounded-[28px] border border-slate-200 bg-white p-6">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">

            <BrainCircuit
              className="text-blue-600"
              size={22}
            />

          </div>

          <div>

            <h3 className="text-lg font-bold text-slate-900">
              AI Summary
            </h3>

            <p className="text-sm text-slate-500">
              Generated from recent feedback
            </p>

          </div>

        </div>

        <div className="mt-6 space-y-4">

          <div className="rounded-2xl bg-blue-50 p-4">

            <div className="flex items-center gap-2">

              <Sparkles
                size={18}
                className="text-blue-600"
              />

              <span className="font-semibold text-slate-900">
                Key Insight
              </span>

            </div>

            <p className="mt-3 text-sm leading-7 text-slate-600">

              Customers are highly satisfied with product quality,
              while checkout speed remains the most common pain point.

            </p>

          </div>

          <div className="rounded-2xl border border-slate-200 p-4">

            <p className="text-sm leading-7 text-slate-600">

              AI recommends improving payment performance and mobile
              responsiveness to increase conversion.

            </p>

          </div>

        </div>

      </div>

      {/* Sentiment */}

      <div className="rounded-[28px] border border-slate-200 bg-white p-6">

        <h3 className="text-lg font-bold text-slate-900">
          Sentiment Analysis
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Distribution of customer emotions
        </p>

        <div className="mt-8 space-y-5">

          <div>

            <div className="mb-2 flex items-center justify-between">

              <div className="flex items-center gap-2">

                <Smile
                  size={18}
                  className="text-green-600"
                />

                <span className="font-medium text-slate-700">
                  Positive
                </span>

              </div>

              <span className="font-semibold text-slate-900">
                72%
              </span>

            </div>

            <div className="h-2 rounded-full bg-slate-100">

              <div className="h-2 w-[72%] rounded-full bg-green-500" />

            </div>

          </div>

          <div>

            <div className="mb-2 flex items-center justify-between">

              <div className="flex items-center gap-2">

                <Meh
                  size={18}
                  className="text-yellow-500"
                />

                <span className="font-medium text-slate-700">
                  Neutral
                </span>

              </div>

              <span className="font-semibold text-slate-900">
                18%
              </span>

            </div>

            <div className="h-2 rounded-full bg-slate-100">

              <div className="h-2 w-[18%] rounded-full bg-yellow-500" />

            </div>

          </div>

          <div>

            <div className="mb-2 flex items-center justify-between">

              <div className="flex items-center gap-2">

                <Frown
                  size={18}
                  className="text-red-500"
                />

                <span className="font-medium text-slate-700">
                  Negative
                </span>

              </div>

              <span className="font-semibold text-slate-900">
                10%
              </span>

            </div>

            <div className="h-2 rounded-full bg-slate-100">

              <div className="h-2 w-[10%] rounded-full bg-red-500" />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}