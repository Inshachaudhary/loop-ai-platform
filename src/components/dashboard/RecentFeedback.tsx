import { MessageCircle } from "lucide-react";

const feedback = [
  {
    user: "Sarah Johnson",
    message: "Love the new dashboard. It's much easier to navigate.",
    sentiment: "Positive",
  },
  {
    user: "Michael Lee",
    message: "Checkout feels slower after the latest update.",
    sentiment: "Neutral",
  },
  {
    user: "Emma Wilson",
    message: "Customer support was quick and helpful.",
    sentiment: "Positive",
  },
];

export default function RecentFeedback() {
  return (
    <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-6">

      <div className="mb-6 flex items-center gap-3">

        <MessageCircle className="text-blue-600" size={22} />

        <h3 className="text-lg font-bold text-stone-900">
          Recent Feedback
        </h3>

      </div>

      <div className="space-y-4">

        {feedback.map((item) => (
          <div
            key={item.user}
            className="rounded-2xl border border-stone-100 p-4 transition hover:bg-stone-50"
          >
            <div className="flex items-center justify-between">

              <h4 className="font-semibold text-stone-900">
                {item.user}
              </h4>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {item.sentiment}
              </span>

            </div>

            <p className="mt-2 text-sm leading-6 text-stone-600">
              {item.message}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}