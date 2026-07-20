"use client";

import { ReactNode } from "react";

type ChartCardProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
};

export default function ChartCard({
  title,
  description,
  action,
  children,
}: ChartCardProps) {
  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold tracking-tight text-stone-900">
            {title}
          </h3>

          {description && (
            <p className="mt-1 text-sm text-stone-500">
              {description}
            </p>
          )}
        </div>

        {action && (
          <div>
            {action}
          </div>
        )}
      </div>

      <div>
        {children}
      </div>
    </section>
  );
}