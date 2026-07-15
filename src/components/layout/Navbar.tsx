"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const navItems = [
  { label: "Platform", href: "#" },
  { label: "Solutions", href: "#", dropdown: true },
  { label: "Resources", href: "#", dropdown: true },
  { label: "Pricing", href: "#" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">

      <Container>

        <div className="flex h-24 items-center justify-between">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-xl font-bold text-white shadow-lg shadow-blue-500/20">

              L

            </div>

            <div>

              <h2 className="text-[18px] font-bold text-slate-900">
                LOOP AI
              </h2>

              <p className="text-[15px] text-slate-500">
                Customer Intelligence
              </p>

            </div>

          </Link>

          {/* Navigation */}

          <nav className="hidden items-center gap-12 lg:flex">

            {navItems.map((item) => (

              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-1 text-[16px] font-medium text-slate-600 transition hover:text-blue-600"
              >
                {item.label}

                {item.dropdown && (
                  <ChevronDown
                    size={16}
                    className="transition group-hover:rotate-180"
                  />
                )}

              </Link>

            ))}

          </nav>

          {/* Right */}

          <div className="flex items-center gap-4">

            <Link
              href="#"
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-[15px] font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
            >
              Sign In
            </Link>

            <Button>
              Get Started
            </Button>

          </div>

        </div>

      </Container>

    </header>
  );
}