import Link from "next/link";

export default function SidebarLogo() {
  return (
    <Link
      href="/dashboard"
      className="flex items-center gap-4 px-6 py-6 border-b border-[var(--border)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#18181B] shadow-sm">
        <span className="text-lg font-semibold tracking-tight text-white">
          L
        </span>
      </div>

      <div>
        <h1 className="text-[18px] font-semibold leading-none text-[var(--text-primary)]">
          LOOP
        </h1>

        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Feedback Intelligence
        </p>
      </div>
    </Link>
  );
}