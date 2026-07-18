"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-[72px] items-center justify-between">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
              L
            </div>

            <div>

              <h2 className="text-[17px] font-semibold tracking-tight text-slate-900">
                LOOP
              </h2>

              <p className="text-xs text-slate-500">
                Customer Intelligence
              </p>

            </div>

          </Link>

          {/* Navigation */}

          <ul className="hidden lg:flex items-center gap-9">

            {[
              "Platform",
              "Solutions",
              "Resources",
              "Pricing",
            ].map((item) => (

              <li key={item}>

                <Link
                  href="#"
                  className="flex items-center gap-1 text-[15px] font-medium text-slate-600 transition hover:text-slate-900"
                >

                  {item}

                  {(item === "Solutions" ||
                    item === "Resources") && (
                    <ChevronDown size={16} />
                  )}

                </Link>

              </li>

            ))}

          </ul>

          {/* Right */}

          <div className="flex items-center gap-3">

            <Link
              href="#"
              className="flex h-10 items-center justify-center rounded-xl px-5 text-[15px] font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Sign In
            </Link>

            <Link
              href="#"
              className="flex h-10 items-center gap-2 rounded-xl bg-slate-900 px-5 text-[15px] font-semibold text-white transition hover:bg-black"
            >
              Get Started

              <ArrowRight size={16} />

            </Link>

          </div>

        </nav>
      </Container>
    </header>
  );
}