"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Settings,
  UserCircle2,
  Circle,
} from "lucide-react";

import { navigation } from "@/constants/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[270px] flex-col border-r border-[var(--border)] bg-[var(--surface)]">
      {/* Brand */}
      <div className="px-7 pt-8 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]">
            <Circle
              size={12}
              fill="white"
              className="text-white"
            />
          </div>

          <div>
            <h1 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
              LOOP
            </h1>

            <p className="text-xs text-[var(--text-secondary)]">
              Customer Intelligence
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
          Workspace
        </p>

        <ul className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-[var(--background)] text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--background)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <Icon size={18} />

                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-[var(--border)] p-5">
        <Link
          href="/settings"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--background)] hover:text-[var(--text-primary)]"
        >
          <Settings size={18} />
          Settings
        </Link>

        <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4">
          <div className="flex items-center gap-3">
            <UserCircle2
              size={42}
              className="text-[var(--primary)]"
            />

            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Insha Chaudhary
              </p>

              <p className="text-xs text-[var(--text-secondary)]">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}