"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Bot,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Settings,
} from "lucide-react";

const navigation = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    name: "Feedback",
    href: "/dashboard/feedback",
    icon: MessageSquare,
  },
  {
    name: "Reports",
    href: "/dashboard/reports",
    icon: FileText,
  },
  {
    name: "AI Assistant",
    href: "/dashboard/ai",
    icon: Bot,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-72 flex-col border-r border-stone-200 bg-white">
      <div className="flex h-20 items-center border-b border-stone-200 px-8">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-stone-300 bg-stone-950 text-sm font-semibold text-white">
            L
          </div>

          <div>
            <h1 className="text-lg font-semibold tracking-tight text-stone-900">
              LOOP
            </h1>

            <p className="text-xs text-stone-500">
              Customer Intelligence
            </p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-8">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            const Icon = item.icon;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-stone-900 text-white"
                      : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                  }`}
                >
                  <Icon
                    size={18}
                    className={
                      active
                        ? "text-white"
                        : "text-stone-500 group-hover:text-stone-900"
                    }
                  />

                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-stone-200 p-5">
        <div className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-stone-50 p-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">
            JC
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-stone-900">
              John Carter
            </p>

            <p className="truncate text-xs text-stone-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}