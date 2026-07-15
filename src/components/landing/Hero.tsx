import Container from "@/components/ui/Container";
import DashboardPreview from "./DashboardPreview";
import {
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white">

      {/* Background Glow */}

      <div className="absolute left-0 top-24 h-[500px] w-[500px] rounded-full bg-blue-100 blur-[140px] opacity-70" />

      <Container>

        <div className="grid min-h-[760px] items-center gap-16 pt-16 pb-24 lg:grid-cols-[44%_56%]">

          {/* LEFT */}

          <div className="relative z-10 max-w-[560px]">

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 shadow-sm">

              <Sparkles
                size={16}
                className="text-blue-600"
              />

              <span className="text-sm font-semibold text-blue-700">
                AI Powered Customer Intelligence
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-[64px] font-extrabold leading-[1.05] tracking-[-2px] text-slate-900">

              Turn customer
              <br />

              feedback into

              <br />

              <span className="text-blue-600">
                strategic decisions.
              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-[520px] text-[20px] leading-9 text-slate-600">

              Collect, organize and analyze customer feedback using AI.

              Discover trends, uncover sentiment and generate actionable business insights from one intelligent platform.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex gap-5">

              <button className="flex h-[54px] w-[175px] items-center justify-center gap-2 rounded-xl bg-blue-600 text-[16px] font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1 hover:bg-blue-700">

                Get Started

                <ArrowRight size={18} />

              </button>

              <button className="flex h-[54px] w-[175px] items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white text-[16px] font-semibold text-slate-700 transition-all hover:border-blue-500 hover:text-blue-600 hover:shadow-md">

                <Play
                  size={18}
                  strokeWidth={2}
                />

                Watch Demo

              </button>

            </div>

            {/* Trusted */}

            <div className="mt-14">

              <p className="mb-6 text-xs font-bold uppercase tracking-[6px] text-slate-400">

                Trusted by innovative teams

              </p>

              <div className="flex items-center gap-12 text-[18px] font-semibold text-slate-400">

                <span>Microsoft</span>

                <span>Amazon</span>

                <span>Spotify</span>

                <span>Slack</span>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <DashboardPreview />

        </div>

      </Container>

    </section>
  );
}