// components/sections/voice-agents/voice-agents-architecture-section.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, m } from "motion/react";
import { Headset, CreditCard, RefreshCw, ShieldCheck } from "lucide-react";
import type { ElementType } from "react";
import { cn } from "@/lib/utils";
import { ASSETS_BASE_URL } from "@/lib/variables";
import { AiCallingSectionHeader } from "./ai-calling-section-header";

/* ── Supervisor blob gif , 1:1 square, its own bg is #000103 ── */
const SUPERVISOR_GIF = `${ASSETS_BASE_URL}/tempAssets/revamp/ai-calling-agents/ai-blob.gif`;

/* ── Specialist tones , solid Tailwind classes ── */
const tones = {
  cyan: { iconBox: "bg-cyan-400 text-white", line: "#22D3EE" },
  amber: { iconBox: "bg-amber-400 text-white", line: "#FBBF24" },
  red: { iconBox: "bg-red-400 text-white", line: "#F87171" },
  emerald: { iconBox: "bg-emerald-400 text-white", line: "#4ADE80" },
} as const;

type Tone = keyof typeof tones;

const specialists: {
  id: string;
  icon: ElementType;
  title: string;
  tone: Tone;
}[] = [
    { id: "support", icon: Headset, title: "Support Agent", tone: "cyan" },
    { id: "renewals", icon: RefreshCw, title: "Renewals Agent", tone: "amber" },
    { id: "compliance", icon: ShieldCheck, title: "Compliance Agent", tone: "red" },
    { id: "payments", icon: CreditCard, title: "Payments Agent", tone: "emerald" },
  ];

/* Connector geometry (0-100 viewBox) , hub left, specialists fanned right */
const HUB = { x: 16, y: 50 };
const NODES = [
  { x: 58, y: 20 },
  { x: 86, y: 30 },
  { x: 86, y: 70 },
  { x: 58, y: 80 },
];

function linkPath(x: number, y: number) {
  const dx = (HUB.x + x) / 2;
  const dy = (HUB.y + y) / 2;
  return `M ${HUB.x} ${HUB.y} C ${HUB.x} ${dy}, ${dx} ${HUB.y}, ${x} ${y}`;
}

export function VoiceAgentsArchitectureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={sectionRef}
        aria-labelledby="architecture-title"
        className="relative overflow-hidden py-4 sm:py-8 lg:py-12 2xl:py-16"
      >
        <div className="container relative z-10">
          {/* ── Header , reused component ── */}
          <AiCallingSectionHeader
            id="architecture-title"
            label="Multi-Agent Architecture"
            title="One supervisor."
            highlight="Four specialists."
            isVisible={isVisible}
          />

          {/* ═══ Hub-and-spoke , bg matches gif (#000103) ═══ */}
          <div
            className={cn(
              "relative overflow-hidden rounded-[28px] border border-white/10 bg-[#000103] shadow-2xl lg:rounded-[36px]",
              "transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            {/* ── DESKTOP: hub-and-spoke ── */}
            <div className="relative hidden min-h-[430px] w-full lg:block xl:min-h-[460px]">
              {/* curved connectors + flowing dots */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {specialists.map((spec, i) => {
                  const pos = NODES[i];
                  const line = tones[spec.tone].line;
                  const d = linkPath(pos.x, pos.y);
                  return (
                    <g key={spec.id}>
                      <m.path
                        d={d}
                        stroke={line}
                        strokeOpacity="0.6"
                        strokeWidth="0.5"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 + i * 0.2, ease: "easeOut" }}
                      />
                      <circle r="0.45" fill={line} style={{ filter: `drop-shadow(0 0 2px ${line})` }}>
                        <animateMotion dur={`${2.6 + i * 0.3}s`} repeatCount="indefinite" path={d} />
                      </circle>
                    </g>
                  );
                })}
              </svg>

              {/* hub , left, transparent bg, blob gif */}
              <div className="absolute left-[6%] top-1/2 z-20 w-[26%] -translate-y-1/2">
                <SupervisorNode />
              </div>

              {/* specialists , icon + heading only */}
              {specialists.map((spec, i) => {
                const pos = NODES[i];
                return (
                  <div
                    key={spec.id}
                    className="absolute z-10 w-[32%]"
                    style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%,-50%)" }}
                  >
                    <SpecialistNode spec={spec} />
                  </div>
                );
              })}
            </div>

            {/* ── MOBILE: stacked ── */}
            <div className="relative p-5 lg:hidden sm:p-6">
              <div className="mb-6 flex justify-center">
                <SupervisorNode compact />
              </div>

              <div className="mb-4 flex items-center gap-3" aria-hidden="true">
                <div className="h-px flex-1 bg-white/15" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">Routes to</span>
                <div className="h-px flex-1 bg-white/15" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {specialists.map((spec) => (
                  <SpecialistNode key={spec.id} spec={spec} compact />
                ))}
              </div>
            </div>

            {/* ── Bottom compliance line ── */}
            <div className="relative flex items-center justify-center gap-2 border-t border-white/10 bg-white/[0.02] px-6 py-3 text-center">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-red-300" strokeWidth={2} />
              <p className="text-xs text-white/80 sm:text-sm">
                <span className="font-semibold text-white">Every call monitored.</span>{" "}
                <span className="text-white/70">
                  Grievance keywords trigger instant human handoff.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

/* ═══════ Supervisor , transparent hub, blob gif ═══════ */

function SupervisorNode({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-300">
        Supervisor
      </div>

      {/* 1:1 square gif , transparent frame, no glow */}
      <div className={cn("relative overflow-hidden", compact ? "h-24 w-24" : "h-48 w-48 xl:h-52 xl:w-52")}>
        <img
          src={SUPERVISOR_GIF}
          alt="AI Supervisor"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="text-center">
        <div className={cn("font-bold leading-tight text-white", compact ? "text-sm" : "text-xl")}>
          AI Supervisor
        </div>
        {!compact && (
          <div className="mt-1 text-xs font-medium text-white/70">
            Listens · classifies · routes
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════ Specialist node , icon + heading only ═══════ */

function SpecialistNode({
  spec,
  compact = false,
}: {
  spec: (typeof specialists)[0];
  compact?: boolean;
}) {
  const Icon = spec.icon;
  const t = tones[spec.tone];

  return (
    <div className="flex flex-col items-center gap-2.5">
      {/* icon node */}
      <div
        className={cn(
          "relative flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg xl:h-[72px] xl:w-[72px]",
          t.iconBox
        )}
      >
        <Icon className="h-8 w-8" strokeWidth={2.2} />
      </div>

      <div className="text-center">
        <div className="text-sm font-bold leading-tight text-white xl:text-base">
          {spec.title}
        </div>
      </div>
    </div>
  );
}
