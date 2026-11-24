// components/sections/voice-agents/voice-features-section.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Languages, Wallet, Clock, Rocket } from "lucide-react";
import type { ElementType } from "react";
import { cn } from "@/lib/utils";
import { AiCallingSectionHeader } from "./ai-calling-section-header";

/* ── Feature data , metric hero, tiny label ── */
const features: {
  icon: ElementType;
  metric: string;
  unit: string;
  label: string;
  color: string; // Tailwind text color class
  iconBg: string; // Tailwind icon container class
}[] = [
    {
      icon: Languages,
      metric: "12+",
      unit: "languages",
      label: "Hindi, English & regional dialects",
      color: "text-sky-400",
      iconBg: "bg-sky-500",
    },
    {
      icon: Wallet,
      metric: "5×",
      unit: "cheaper",
      label: "Than a human calling team",
      color: "text-emerald-400",
      iconBg: "bg-emerald-500",
    },
    {
      icon: Clock,
      metric: "24×7",
      unit: "always on",
      label: "No breaks, no missed calls",
      color: "text-violet-400",
      iconBg: "bg-violet-500",
    },
    {
      icon: Rocket,
      metric: "10",
      unit: "days",
      label: "From signup to live calls",
      color: "text-amber-400",
      iconBg: "bg-amber-500",
    },
  ];

export function VoiceFeaturesSection() {
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
    <section
      ref={sectionRef}
      aria-labelledby="features-title"
      className="relative overflow-hidden bg-background py-10 sm:py-12 lg:py-16 2xl:py-20"
    >
      <div className="container relative z-10">
        {/* Header */}
        <AiCallingSectionHeader
          id="features-title"
          label="Why AI Calling Agents"
          title="  Built to work."
          highlight="Built to scale."
          isVisible={isVisible}
        />

        {/* Dark panel */}
        <div
          className={cn(
            "relative overflow-hidden rounded-[28px] bg-foreground shadow-2xl lg:rounded-[36px]",
            "transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="grid grid-cols-1 divide-y divide-white/10 bg-white/[0.03] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {features.map((feature, index) => (
              <FeatureCard key={feature.metric} feature={feature} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Feature card , big metric hero, tiny label */

function FeatureCard({
  feature,
  index,
  isVisible,
}: {
  feature: (typeof features)[number];
  index: number;
  isVisible: boolean;
}) {
  const Icon = feature.icon;

  return (
    <article
      aria-label={`${feature.metric} ${feature.unit}`}
      className={cn(
        "group relative flex flex-col p-6 sm:p-7 2xl:p-9",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: `${100 + index * 100}ms` }}
    >
      {/* icon */}
      <div
        className={cn(
          "mb-6 flex size-11 items-center justify-center rounded-2xl text-white shadow-lg transition group-hover:-translate-y-0.5",
          feature.iconBg
        )}
      >
        <Icon className="size-5" strokeWidth={2} />
      </div>

      {/* big metric */}
      <div className="mb-1 flex items-baseline gap-2">
        <span className={cn("text-5xl font-bold leading-none tracking-tight sm:text-6xl 2xl:text-7xl", feature.color)}>
          {feature.metric}
        </span>
        <span className="text-sm font-semibold uppercase tracking-wide text-background/70">
          {feature.unit}
        </span>
      </div>

      {/* tiny label */}
      <p className="mt-auto pt-4 text-xs text-background/55 leading-relaxed sm:text-[13px]">
        {feature.label}
      </p>
    </article>
  );
}
