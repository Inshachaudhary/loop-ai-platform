"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { navItems } from "./nav-items";

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 px-4 py-6">

      <p className="mb-4 px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
        Workspace
      </p>

      <div className="space-y-1">

        {navItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                group
                flex
                h-12
                items-center
                justify-between
                rounded-xl
                px-3
                transition-all
                duration-200
                ${
                  active
                    ? "bg-[#18181B] text-white shadow-sm"
                    : "text-[var(--text-secondary)] hover:bg-[#F5F5F5]"
                }
              `}
            >
              <div className="flex items-center gap-3">

                <Icon
                  size={19}
                  strokeWidth={2}
                />

                <span className="text-[15px] font-medium">
                  {item.title}
                </span>

              </div>

              <ChevronRight
                size={16}
                className={`transition-all duration-200 ${
                  active
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />

            </Link>
          );
        })}

      </div>

    </nav>
  );
}