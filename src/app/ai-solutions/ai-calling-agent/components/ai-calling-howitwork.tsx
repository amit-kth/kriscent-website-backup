// components/sections/voice-agents/voice-how-it-works-section.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, m } from "motion/react";
import { PhoneCall, Mic, Sparkles, Volume2 } from "lucide-react";
import type { ElementType } from "react";
import { cn } from "@/lib/utils";

/* ── Pipeline step tones , literal Tailwind classes per accent ── */
const tones = {
  blue: {
    iconBg: "bg-[linear-gradient(135deg,#3B82F6_0%,rgba(59,130,246,0.85)_100%)]",
    accent: "text-[#3B82F6]",
    innerBg: "bg-[rgba(59,130,246,0.07)]",
    shadow:
      "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_24px_-10px_rgba(59,130,246,0.35),0_20px_50px_-20px_rgba(59,130,246,0.25)]",
    shadowHover:
      "hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_16px_32px_-10px_rgba(59,130,246,0.5),0_30px_60px_-20px_rgba(59,130,246,0.35)]",
  },
  orange: {
    iconBg: "bg-[linear-gradient(135deg,#F97316_0%,rgba(249,115,22,0.85)_100%)]",
    accent: "text-[#F97316]",
    innerBg: "bg-[rgba(249,115,22,0.07)]",
    shadow:
      "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_24px_-10px_rgba(249,115,22,0.35),0_20px_50px_-20px_rgba(249,115,22,0.25)]",
    shadowHover:
      "hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_16px_32px_-10px_rgba(249,115,22,0.5),0_30px_60px_-20px_rgba(249,115,22,0.35)]",
  },
  violet: {
    iconBg: "bg-[linear-gradient(135deg,#8B5CF6_0%,rgba(139,92,246,0.85)_100%)]",
    accent: "text-[#8B5CF6]",
    innerBg: "bg-[rgba(139,92,246,0.07)]",
    shadow:
      "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_24px_-10px_rgba(139,92,246,0.35),0_20px_50px_-20px_rgba(139,92,246,0.25)]",
    shadowHover:
      "hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_16px_32px_-10px_rgba(139,92,246,0.5),0_30px_60px_-20px_rgba(139,92,246,0.35)]",
  },
  emerald: {
    iconBg: "bg-[linear-gradient(135deg,#10B981_0%,rgba(16,185,129,0.85)_100%)]",
    accent: "text-[#10B981]",
    innerBg: "bg-[rgba(16,185,129,0.07)]",
    shadow:
      "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_24px_-10px_rgba(16,185,129,0.35),0_20px_50px_-20px_rgba(16,185,129,0.25)]",
    shadowHover:
      "hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_16px_32px_-10px_rgba(16,185,129,0.5),0_30px_60px_-20px_rgba(16,185,129,0.35)]",
  },
} as const;

type Tone = keyof typeof tones;

const pipelineSteps: {
  icon: ElementType;
  title: string;
  description: string;
  tone: Tone;
}[] = [
    {
      icon: PhoneCall,
      title: "Telephony Layer",
      description: "Outbound via SIP, inbound via DID , connected-minute billing.",
      tone: "blue",
    },
    {
      icon: Mic,
      title: "Speech-to-Text",
      description: "Indic STT transcribes Hindi, English, and regional speech.",
      tone: "orange",
    },
    {
      icon: Sparkles,
      title: "AI Agent Brain",
      description: "Supervisor + specialists run dialogue on a BFSI-tuned model.",
      tone: "violet",
    },
    {
      icon: Volume2,
      title: "Text-to-Speech",
      description: "Natural low-latency Indic voices close the loop to the caller.",
      tone: "emerald",
    },
  ];

const operatingFacts = [
  "Inbound · intent routing",
  "Outbound · reminder-only & conversational",
  "Connected-minute billing",
  "Low-latency < 1s turn",
];

export function VoiceHowItWorksSection() {
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
    <LazyMotion features={domAnimation}>
      <section
        ref={sectionRef}
        aria-labelledby="how-it-works-title"
        className="relative overflow-hidden bg-background py-14 sm:py-16 lg:py-20 2xl:py-24"
      >
        {/* ruled-line background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "100% 32px",
          }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />

        <div className="container relative z-10">
          {/* ── Header , centered, compact ── */}
          <div
            className={cn(
              "mx-auto mb-10 max-w-2xl text-center lg:mb-12 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <span className="mb-3 inline-flex items-center justify-center gap-2.5 text-[11px] sm:text-xs uppercase tracking-[0.15em] text-muted-foreground">
              <span className="h-px w-6 bg-primary" />
              How It Works
              <span className="h-px w-6 bg-primary" />
            </span>

            <h2
              id="how-it-works-title"
              className="text-2xl sm:text-3xl lg:text-[40px] 2xl:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-3"
            >
              One pipeline.{" "}
              <span className="text-primary">Every conversation.</span>
            </h2>

            <p className="mx-auto max-w-lg text-sm text-muted-foreground leading-relaxed">
              Every call runs through the same four-step voice pipeline , inbound
              or outbound, one language or five.
            </p>
          </div>

          {/* ── Zigzag polaroid row ── */}
          <div className="relative">
            {/* animated dashed path , desktop only */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block"
              viewBox="0 0 1200 240"
              preserveAspectRatio="none"
            >
              <m.path
                d="M 130 110 Q 280 30, 420 150 T 660 100 T 900 150 T 1080 110"
                stroke="currentColor"
                className="text-border"
                strokeWidth="2"
                strokeDasharray="6 5"
                fill="none"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -110 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {/* cards */}
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-0 md:pt-4 md:pb-16">
              {pipelineSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={cn(
                    "flex justify-center transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  )}
                  style={{ transitionDelay: `${100 + index * 100}ms` }}
                >
                  <StepCard step={step} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* ── Operating-mode summary pill ── */}
          <div
            className={cn(
              "mt-6 flex flex-wrap items-center justify-center gap-2 lg:mt-8 transition-all duration-700 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-muted/40 px-4 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs sm:text-sm text-muted-foreground">
                One loop.{" "}
                <span className="font-semibold text-foreground">
                  Every conversation.
                </span>
              </span>
              <span className="hidden h-3 w-px bg-border sm:block" />
              <span className="hidden text-xs sm:block text-muted-foreground">
                {operatingFacts.join(" · ")}
              </span>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

/* Polaroid step card , zigzag style */

function StepCard({
  step,
  index,
}: {
  step: (typeof pipelineSteps)[number];
  index: number;
}) {
  const Icon = step.icon;
  const t = tones[step.tone];

  /* Zigzag rotation + vertical offset */
  const isEven = index % 2 === 0;
  const rotate = isEven ? "md:rotate-2" : "md:-rotate-2";
  const yOffset = isEven ? "md:translate-y-0" : "md:translate-y-10";

  return (
    <div
      className={cn(
        "relative w-full shrink-0 transition-transform duration-500 ease-out hover:z-30 hover:rotate-0 hover:translate-y-0 hover:scale-[1.06] md:w-[230px]",
        rotate,
        yOffset
      )}
    >
      {/* polaroid shell , layered colored shadow */}
      <div
        className={cn(
          "rounded-[20px] bg-card p-2 transition-shadow duration-500 ease-out",
          t.shadow,
          t.shadowHover
        )}
      >
        {/* pin */}
        <div className="mb-2 flex justify-center">
          <div className={cn("flex h-7 w-7 items-center justify-center rounded-full shadow-[0_2px_6px_-1px_rgba(0,0,0,0.15)]", t.iconBg)}>
            <div className="h-1.5 w-1.5 rounded-full bg-white/90" />
          </div>
        </div>

        {/* inner tinted content */}
        <div className={cn("relative overflow-hidden rounded-[14px] p-4", t.innerBg)}>
          {/* number + icon */}
          <div className="mb-3 flex items-center justify-between">
            <span className={cn("text-2xl font-bold tracking-tight leading-none", t.accent)}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg text-white shadow-[0_2px_6px_-1px_rgba(0,0,0,0.15)]", t.iconBg)}>
              <Icon className="h-4 w-4" strokeWidth={2} />
            </div>
          </div>

          {/* title */}
          <h3 className="mb-1.5 text-[15px] font-semibold text-foreground leading-tight tracking-tight">
            {step.title}
          </h3>

          {/* description */}
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}
