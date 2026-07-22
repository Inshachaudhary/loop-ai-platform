import { Bell } from "lucide-react";

export default function SidebarNotification() {
  return (
    <div className="px-4">

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">

        <div className="flex items-start gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100">
            <Bell
              size={19}
              className="text-violet-700"
            />
          </div>

          <div className="flex-1">

            <div className="flex items-center justify-between">

              <h3 className="text-sm font-semibold">
                Notifications
              </h3>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] font-semibold text-white">
                3
              </span>

            </div>

            <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
              You have 3 unread alerts waiting for review.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}