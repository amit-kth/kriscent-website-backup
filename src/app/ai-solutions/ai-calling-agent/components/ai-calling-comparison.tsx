// components/sections/voice-agents/voice-comparison-section.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
  Check,
  X,
  Bot,
  Users,
  Clock,
  Languages,
  Wallet,
  Repeat,
  TrendingUp,
  PhoneMissed,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AiCallingSectionHeader } from "./ai-calling-section-header";

/* ── Comparison rows , each with a capability icon ── */
const rows: {
  icon: LucideIcon;
  label: string;
  human: string;
  ai: string;
}[] = [
    {
      icon: Clock,
      label: "Working hours",
      human: "9–6, with breaks",
      ai: "24×7, never off",
    },
    {
      icon: Languages,
      label: "Languages",
      human: "1–2 languages",
      ai: "12+ languages",
    },
    {
      icon: Wallet,
      label: "Cost per call",
      human: "Salaries + overhead",
      ai: "A fraction of the cost",
    },
    {
      icon: Repeat,
      label: "Consistency",
      human: "Varies with mood",
      ai: "Same tone, every call",
    },
    {
      icon: TrendingUp,
      label: "Scaling up",
      human: "Hire & onboard",
      ai: "Instant capacity",
    },
    {
      icon: PhoneMissed,
      label: "Missed calls",
      human: "Misses & callbacks",
      ai: "Answers every call",
    },
  ];

export function VoiceComparisonSection() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="comparison-title"
      className="relative overflow-hidden bg-background py-8 sm:py-12 lg:py-16 2xl:py-20"
    >
      <div className="container relative z-10">
        {/* ── Header ── */}
        <AiCallingSectionHeader
          id="features-title"
          label="The Comparison"
          title="AI agent"
          highlight="vs. human team."
          isVisible={isVisible}
        />

        {/* ── Dramatic comparison card ── */}
        <div
          className={cn(
            "relative overflow-hidden rounded-[28px] bg-foreground shadow-2xl lg:rounded-[36px]",
            "transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          {/* ambient glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 top-0 h-full w-40 bg-primary/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
          />

          {/* ── Header row ── */}
          <div className="relative grid grid-cols-[1.2fr_1fr_1.2fr] items-center border-b border-white/10">
            {/* capability */}
            <div className="flex items-center gap-2 px-4 py-5 sm:px-6 lg:px-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Capability</span>
            </div>

            {/* human */}
            <div className="flex items-center gap-2 border-l border-white/10 px-4 py-5 opacity-80 sm:px-6 lg:px-8">
              <Users className="size-4 text-white/60" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/70 sm:text-sm">
                Human
              </span>
            </div>

            {/* AI , winning header */}
            <div className="relative flex items-center justify-center gap-2 border-l border-primary/30 px-4 py-5 sm:px-6 lg:px-8">
              <Bot className="size-5 text-primary" />
              <span className="text-sm font-bold uppercase tracking-widest text-white sm:text-base">
                AI agent
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-primary-foreground shadow-lg">
                <Sparkles className="size-3" /> Better
              </span>
            </div>
          </div>

          {/* ── Rows ── */}
          <div className="relative divide-y divide-white/[0.06]">
            {rows.map((row, i) => {
              const Icon = row.icon;
              return (
                <div
                  key={row.label}
                  className={cn(
                    "grid grid-cols-[1.2fr_1fr_1.2fr] items-center transition-colors duration-300",
                    "transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${150 + i * 80}ms` }}
                >
                  {/* capability */}
                  <div className="flex items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/60">
                      <Icon className="size-4" strokeWidth={2} />
                    </span>
                    <span className="text-sm font-semibold text-white sm:text-base">{row.label}</span>
                  </div>

                  {/* human */}
                  <div className="flex items-center gap-2 border-l border-white/10 px-4 py-4 opacity-80 sm:px-6 lg:px-8">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <X className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-xs font-medium text-white/70 sm:text-sm">{row.human}</span>
                  </div>

                  {/* AI , highlighted with gradient + glow */}
                  <div
                    className={cn(
                      "relative flex items-center gap-2 border-l border-primary/20 px-4 py-4 sm:px-6 lg:px-8",
                      "bg-gradient-to-r from-primary/30 to-transparent rounded-l-2xl"
                    )}
                  >
                    {/* green check */}
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.4)]">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-xs font-semibold text-white sm:text-sm">{row.ai}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
