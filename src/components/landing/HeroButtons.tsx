import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">

      <Link
        href="#"
        className="inline-flex h-12 items-center gap-2 rounded-xl bg-slate-900 px-6 text-[15px] font-semibold text-white transition hover:bg-black"
      >
        Get Started

        <ArrowRight size={18} />
      </Link>

      <Link
        href="#"
        className="inline-flex h-12 items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-[15px] font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        <Play size={16} />

        Watch Demo
      </Link>

    </div>
  );
}