import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[650px] w-[650px] rounded-full bg-blue-100/40 blur-[140px]" />

      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-12">

          {/* LEFT */}

          <div className="relative z-10 lg:col-span-5 max-w-[560px]">

            <Badge>
              ✨ AI Powered Customer Intelligence
            </Badge>

            <h1 className="mt-8 text-[64px] font-extrabold leading-[1.05] tracking-[-2px] text-slate-900">

              Turn customer feedback into{" "}

              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                strategic decisions.
              </span>

            </h1>

            <p className="mt-8 max-w-[520px] text-[20px] leading-9 text-slate-600">

              Collect, organize and analyze customer feedback using AI.
              Discover trends, uncover sentiment and generate actionable
              business insights from one intelligent platform.

            </p>

            <div className="mt-12 flex items-center gap-5">

              <Button>
            Get Started
         </Button>

        <Button variant="secondary">
          Watch Demo
         </Button>

            </div>

            {/* Trusted */}

            <div className="mt-16">

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">

                Trusted by innovative teams

              </p>

              <div className="mt-8 flex flex-wrap items-center gap-10 text-2xl font-semibold text-slate-400">

                <span>Microsoft</span>

                <span>Amazon</span>

                <span>Spotify</span>

                <span>Slack</span>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative lg:col-span-7">

            <DashboardPreview />

          </div>

        </div>

      </Container>

    </section>
  );
}