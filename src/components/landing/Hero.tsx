"use client";

import Container from "@/components/ui/Container";

import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import TrustedCompanies from "./TrustedCompanies";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#FAFBFC]">

      <Container>

        <div className="grid min-h-[calc(100vh-72px)] items-center gap-16 py-20 lg:grid-cols-[1fr_1.15fr]">

          {/* LEFT */}

          <div className="max-w-xl">

            <HeroBadge />

            <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 lg:text-7xl">

              Turn customer
              <br />
              feedback into
              <br />
              strategic decisions.

            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-slate-600">

              LOOP transforms customer conversations into actionable insights
              using AI-powered analytics, helping teams improve products,
              customer satisfaction and business growth.

            </p>

            <HeroButtons />

            <TrustedCompanies />

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center lg:justify-end">

            <DashboardPreview />

          </div>

        </div>

      </Container>

    </section>
  );
}