import {
  ChevronUp,
  LogOut,
} from "lucide-react";

export default function SidebarProfile() {
  return (
    <div className="border-t border-[var(--border)] p-4">

      <button className="flex w-full items-center gap-3 rounded-2xl border border-[var(--border)] bg-white p-3 transition-all duration-200 hover:border-[var(--border-strong)] hover:shadow-sm">

        <div className="relative">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#18181B] text-sm font-semibold text-white">
            IC
          </div>

          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />

        </div>

        <div className="min-w-0 flex-1 text-left">

          <p className="truncate text-sm font-semibold text-[var(--text-primary)]">
            Insha Chaudhary
          </p>

          <p className="truncate text-xs text-[var(--text-muted)]">
            Product Administrator
          </p>

        </div>

        <div className="flex items-center gap-1 text-[var(--text-muted)]">

          <ChevronUp size={16} />

          <LogOut size={15} />

        </div>

      </button>

    </div>
  );
}