"use client";

import { ArrowRight, Sparkles, Bot, Cpu } from "lucide-react";
import { ShaderBackground } from "./shader";

/* ─── NOISE ─── */
function NoiseOverlay({ opacity = 0.05 }: { opacity?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

/* ─── DATA ─── */
const techs = ["LLMs", "Computer Vision", "NLP", "MLOps", "RAG Pipelines", "Fine-tuning"];

const capabilities = [
  { label: "AI engineers worldwide", value: "100+", accent: "text-primary" },
  { label: "GenAI products shipped", value: "40+", accent: "text-white" },
  { label: "Avg. hire time", value: "10 days", accent: "text-white" },
];

const bars = [40, 70, 55, 85, 50, 78, 45, 65];

/* ─── MAIN , static, optimized ─── */
export default function AIEraBand() {
  return (
    <section className="relative w-full overflow-hidden bg-foreground">
      <ShaderBackground className="absolute inset-0 z-0" />
      {/* static glows (single-layer, no flicker) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(29,79,216,0.18),transparent_55%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_100%,rgba(229,62,62,0.14),transparent_55%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <NoiseOverlay opacity={0.04} />

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:py-28 2xl:max-w-[1720px] 2xl:px-10 2xl:py-32">
        {/* ── LEFT , editorial content ── */}
        <div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
            <Sparkles className="size-3.5 text-primary" />
            100+ AI engineers worldwide
          </span>

          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] sm:text-5xl lg:text-6xl 2xl:text-7xl">
            Powering the{" "}
            <span className="bg-gradient-to-b from-white/90 to-white/40 bg-clip-text text-transparent">
              AI era
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300/80 sm:text-lg">
            From GenAI to computer vision, our AI talent helps businesses build
            and ship intelligent products , faster than hiring in-house.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/12 bg-white/6 px-3.5 py-1.5 text-xs font-medium text-white/70 backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="/quotation?service=hire-resources"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-8px_rgba(229,62,62,0.6),inset_0_1px_0_rgba(255,255,255,0.15)]"
            >
              Hire AI engineers
              <ArrowRight className="size-4" strokeWidth={2.5} />
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/6 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-xl"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* ── RIGHT , static glass panel ── */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl shadow-2xl md:p-9">
            {/* panel header */}
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#1e4fd8]/20 text-[#60A5FA] ring-1 ring-[#1e4fd8]/30">
                  <Bot className="size-5" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">AI Capability</p>
                  <p className="text-[11px] text-white/50">Global talent network</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Active
              </span>
            </div>

            {/* stats , static */}
            <div className="space-y-4">
              {capabilities.map((c) => (
                <div key={c.label} className="flex items-center justify-between">
                  <span className="text-sm text-white/60">{c.label}</span>
                  <span className={c.accent + " text-2xl font-bold leading-none tracking-tight"}>
                    {c.value}
                  </span>
                </div>
              ))}
            </div>

            {/* static bars */}
            <div className="mt-7 border-t border-white/10 pt-6">
              <div className="flex h-16 items-end justify-center gap-2">
                {bars.map((h, i) => (
                  <span
                    key={i}
                    className="w-1.5 rounded-full bg-gradient-to-t from-[#1e4fd8]/60 to-[#60A5FA]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-white/50">
                <Cpu className="size-3.5 text-primary" />
                Global AI talent network
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
