"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  MessageSquare,
  FileText,
  Sparkles,
  Settings,
  ChevronDown,
} from "lucide-react";

import { cn } from "@/lib/utils";

const navigation = [
  {
    title: "Workspace",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        label: "Analytics",
        href: "/analytics",
        icon: BarChart3,
      },
      {
        label: "Feedback",
        href: "/feedback",
        icon: MessageSquare,
      },
      {
        label: "Reports",
        href: "/reports",
        icon: FileText,
      },
    ],
  },
  {
    title: "AI",
    items: [
      {
        label: "AI Insights",
        href: "/ai",
        icon: Sparkles,
      },
    ],
  },
  {
    title: "General",
    items: [
      {
        label: "Settings",
        href: "/settings",
        icon: Settings,
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-[280px] flex-col border-r border-[var(--border)] bg-[var(--surface)]">
      {/* Logo */}

      <div className="flex h-20 items-center border-b border-[var(--border)] px-7">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-lg font-semibold text-white">
            L
          </div>

          <div className="space-y-0.5">
            <h1 className="text-[17px] font-semibold tracking-tight">
              LOOP
            </h1>

            <p className="text-xs text-[var(--text-muted)]">
              Customer Intelligence
            </p>
          </div>
        </Link>
      </div>

      {/* Workspace */}

      <div className="px-5 pt-6">
        <button className="flex h-12 w-full items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 transition hover:border-[var(--border-strong)]">
          <div className="text-left">
            <p className="text-xs text-[var(--text-muted)]">
              Workspace
            </p>

            <p className="mt-0.5 text-sm font-medium">
              LOOP Inc.
            </p>
          </div>

          <ChevronDown size={18} />
        </button>
      </div>

      {/* Navigation */}

      <div className="mt-8 flex-1 overflow-y-auto px-4 pb-6">
        {navigation.map((group) => (
          <div key={group.title} className="mb-8">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              {group.title}
            </p>

            <div className="space-y-1.5">
              {group.items.map((item) => {
                const Icon = item.icon;

                const active =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group flex h-12 items-center gap-3 rounded-xl px-3 transition-all duration-200",
                      active
                        ? "bg-black text-white shadow-sm"
                        : "text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
                    )}
                  >
                    <Icon
                      size={19}
                      className={cn(
                        active
                          ? "text-white"
                          : "text-[var(--text-muted)] group-hover:text-[var(--text-primary)]"
                      )}
                    />

                    <span className="text-[15px] font-medium">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
            {/* Footer */}

      <div className="border-t border-[var(--border)] p-5">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
              IC
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                Insha Chaudhary
              </h3>

              <p className="text-xs text-[var(--text-muted)]">
                Product Admin
              </p>
            </div>
          </div>

          <button
            className={cn(
              "flex h-11 w-full items-center justify-center rounded-xl",
              "border border-[var(--border)]",
              "bg-white",
              "text-sm font-medium",
              "transition-all duration-200",
              "hover:border-[var(--border-strong)]",
              "hover:bg-[var(--surface-hover)]"
            )}
          >
            Manage Account
          </button>
        </div>
      </div>
    </aside>
  );
}