"use client";

import {
  Mail,
  MessageCircle,
  Star,
} from "lucide-react";

import ChartCard from "./ChartCard";

const feedbackItems = [
  {
    customer: "Sarah Williams",
    message:
      "The latest mobile update feels much faster and navigation is smoother.",
    sentiment: "Positive",
    source: "App Store",
    time: "8 minutes ago",
    rating: "5.0",
  },
  {
    customer: "Michael Brown",
    message:
      "Payment failed multiple times while completing my subscription.",
    sentiment: "Negative",
    source: "Email",
    time: "24 minutes ago",
    rating: "2.0",
  },
  {
    customer: "Emma Davis",
    message:
      "Delivery tracking has improved but notifications arrive late.",
    sentiment: "Neutral",
    source: "Chat",
    time: "1 hour ago",
    rating: "3.0",
  },
];

const sentimentStyles = {
  Positive: "bg-emerald-50 text-emerald-700",
  Negative: "bg-red-50 text-red-700",
  Neutral: "bg-stone-100 text-stone-700",
};

const sourceIcons = {
  "App Store": Star,
  Email: Mail,
  Chat: MessageCircle,
};

export default function RecentFeedback() {
  return (
    <ChartCard
      title="Recent Feedback"
      description="Latest customer conversations analyzed by AI."
    >
      <div className="space-y-4">
        {feedbackItems.map((feedback) => {
          const SourceIcon =
            sourceIcons[
              feedback.source as keyof typeof sourceIcons
            ];

          return (
            <article
              key={feedback.customer}
              className="rounded-xl border border-stone-200 p-4 transition hover:bg-stone-50"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">
                    {feedback.customer}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    "{feedback.message}"
                  </p>
                </div>

                <span
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${
                    sentimentStyles[
                      feedback.sentiment as keyof typeof sentimentStyles
                    ]
                  }`}
                >
                  {feedback.sentiment}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <SourceIcon size={14} />

                  <span>
                    {feedback.source}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-stone-500">
                  <span>
                    {feedback.time}
                  </span>

                  <span className="font-medium text-stone-700">
                    {feedback.rating}/5
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </ChartCard>
  );
}