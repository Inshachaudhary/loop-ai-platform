"use client";

import {
  ArrowUpRight,
  Mail,
  Globe,
  Smartphone,
  MessageCircle,
} from "lucide-react";

const feedback = [
  {
    id: "#FB-2041",
    customer: "Sarah Johnson",
    company: "Acme Inc.",
    channel: "Email",
    sentiment: "Positive",
    summary:
      "Customers appreciate the faster checkout experience introduced this week.",
    time: "5 min ago",
  },
  {
    id: "#FB-2039",
    customer: "Michael Lee",
    company: "Nova Labs",
    channel: "Website",
    sentiment: "Neutral",
    summary:
      "Suggested adding more payment methods during checkout.",
    time: "12 min ago",
  },
  {
    id: "#FB-2037",
    customer: "Emily Carter",
    company: "Pixel Studio",
    channel: "Play Store",
    sentiment: "Negative",
    summary:
      "Reported occasional crashes after the latest mobile update.",
    time: "22 min ago",
  },
  {
    id: "#FB-2034",
    customer: "James Wilson",
    company: "Bright AI",
    channel: "X",
    sentiment: "Positive",
    summary:
      "Praised the new analytics dashboard and reporting speed.",
    time: "38 min ago",
  },
];

function ChannelIcon(channel: string) {
  switch (channel) {
    case "Email":
      return <Mail size={16} />;
    case "Website":
      return <Globe size={16} />;
    case "Play Store":
      return <Smartphone size={16} />;
    default:
      return <MessageCircle size={16} />;
  }
}

function SentimentBadge(sentiment: string) {
  switch (sentiment) {
    case "Positive":
      return (
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          Positive
        </span>
      );

    case "Negative":
      return (
        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
          Negative
        </span>
      );

    default:
      return (
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
          Neutral
        </span>
      );
  }
}

export default function RecentFeedback() {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-white shadow-sm">

      <div className="flex items-center justify-between border-b border-[var(--border)] p-7">

        <div>

          <p className="text-sm font-medium text-[var(--text-muted)]">
            Recent Feedback
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Latest Customer Conversations
          </h2>

        </div>

        <button className="flex items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-medium transition hover:border-[var(--border-strong)]">
          View All
          <ArrowUpRight size={16} />
        </button>

      </div>

      <div className="divide-y divide-[var(--border)]">
        {feedback.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between gap-6 p-6 transition hover:bg-[var(--surface-hover)]"
          >
            <div className="flex flex-1 gap-5">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-hover)]">
                {ChannelIcon(item.channel)}
              </div>

              <div className="flex-1">

                <div className="flex items-center gap-3">

                  <h3 className="font-semibold">
                    {item.customer}
                  </h3>

                  <span className="text-xs text-[var(--text-muted)]">
                    {item.company}
                  </span>

                  {SentimentBadge(item.sentiment)}

                </div>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {item.summary}
                </p>
                                <div className="mt-4 flex flex-wrap items-center gap-3">

                  <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium">
                    {item.id}
                  </span>

                  <span className="rounded-full bg-[var(--surface-hover)] px-3 py-1 text-xs font-medium">
                    {item.channel}
                  </span>

                  <span className="text-xs text-[var(--text-muted)]">
                    {item.time}
                  </span>

                </div>

              </div>

            </div>

            <button
              className="
              rounded-xl
              border
              border-[var(--border)]
              px-4
              py-2
              text-sm
              font-medium
              transition-all
              duration-200
              hover:border-[var(--border-strong)]
              hover:bg-[var(--surface-hover)]
              "
            >
              Review
            </button>

          </div>
        ))}
      </div>

    </section>
  );
}