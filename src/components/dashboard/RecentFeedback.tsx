import {
  MessageCircle,
  ThumbsUp,
  Clock3,
} from "lucide-react";

const feedback = [
  {
    name: "Sarah Johnson",
    company: "Marketing Lead",
    message:
      "The latest update significantly improved our reporting workflow.",
    sentiment: "Positive",
    time: "2 min ago",
  },
  {
    name: "David Lee",
    company: "Product Manager",
    message:
      "Checkout performance on mobile still needs some optimization.",
    sentiment: "Neutral",
    time: "14 min ago",
  },
  {
    name: "Emily Carter",
    company: "Customer Success",
    message:
      "Love the new dashboard! Much cleaner and easier to navigate.",
    sentiment: "Positive",
    time: "38 min ago",
  },
];

export default function RecentFeedback() {
  return (
    <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-lg font-bold text-slate-900">
            Recent Feedback
          </h3>

          <p className="text-sm text-slate-500">
            Latest customer conversations
          </p>

        </div>

        <MessageCircle className="text-blue-600" />

      </div>

      <div className="mt-7 space-y-4">

        {feedback.map((item) => (

          <div
            key={item.name}
            className="rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-md"
          >

            <div className="flex items-start justify-between">

              <div className="flex gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h4 className="font-semibold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.company}
                  </p>

                </div>

              </div>

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                {item.sentiment}
              </span>

            </div>

            <p className="mt-4 leading-7 text-slate-600">
              {item.message}
            </p>

            <div className="mt-5 flex items-center justify-between">

              <div className="flex items-center gap-2 text-sm text-slate-500">

                <Clock3 size={15} />

                {item.time}

              </div>

              <button className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">

                <ThumbsUp size={15} />

                Helpful

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}