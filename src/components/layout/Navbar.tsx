"use client";

import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">

      <Container>

        <nav className="flex h-[84px] items-center justify-between">

          {/* LEFT */}

          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-xl font-bold text-white shadow-lg shadow-blue-500/20">
              L
            </div>

            <div>

              <h2 className="text-[18px] font-bold tracking-tight text-slate-900">
                LOOP AI
              </h2>

              <p className="text-[15px] text-slate-500">
                Customer Intelligence
              </p>

            </div>

          </Link>

          {/* CENTER */}

          <ul className="hidden items-center gap-12 lg:flex">

            <li>
              <Link
                href="#"
                className="font-medium text-slate-700 transition hover:text-blue-600"
              >
                Platform
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="flex items-center gap-1 font-medium text-slate-700 transition hover:text-blue-600"
              >
                Solutions

                <ChevronDown size={17} />

              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="flex items-center gap-1 font-medium text-slate-700 transition hover:text-blue-600"
              >
                Resources

                <ChevronDown size={17} />

              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="font-medium text-slate-700 transition hover:text-blue-600"
              >
                Pricing
              </Link>
            </li>

          </ul>

          {/* RIGHT */}

          <div className="flex items-center gap-4">

            <Link
              href="#"
              className="inline-flex h-11 w-[92px] items-center justify-center rounded-xl border border-slate-200 bg-white text-[15px] font-semibold text-slate-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-600"
            >
              Sign In
            </Link>

            <Link
              href="#"
              className="inline-flex h-11 w-[160px] items-center justify-center gap-2 rounded-xl bg-blue-600 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get Started

              <ArrowRight size={18} />

            </Link>

          </div>

        </nav>

      </Container>

    </header>
  );
}