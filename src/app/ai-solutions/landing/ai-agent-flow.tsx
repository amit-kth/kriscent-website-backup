// components/sections/voice-agents/ai-agent-flow-section.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, m } from "motion/react";
import { UserRound, Sparkles, Brain, Wrench, Zap } from "lucide-react";

/* ── 5 flow steps ── */
export const flowSteps = [
    {
        icon: UserRound,
        title: "Customer",
        description: "Initiates a request via call, chat, or message.",
        tint: {
            bg: "bg-sky-50",
            text: "text-sky-600",
            iconBg: "bg-sky-500",
            // Realistic layered shadow with brand color glow
            shadow:
                "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_24px_-10px_rgba(14,165,233,0.35),0_20px_50px_-20px_rgba(14,165,233,0.25)]",
            // Deeper shadow on hover
            shadowHover:
                "hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_16px_32px_-10px_rgba(14,165,233,0.5),0_30px_60px_-20px_rgba(14,165,233,0.35)]",
        },
    },
    {
        icon: Sparkles,
        title: "AI Agent Listens",
        description:
            "Receives the request, parses intent, language, and full context.",
        tint: {
            bg: "bg-violet-50",
            text: "text-violet-600",
            iconBg: "bg-violet-500",
            shadow:
                "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_24px_-10px_rgba(139,92,246,0.35),0_20px_50px_-20px_rgba(139,92,246,0.25)]",
            shadowHover:
                "hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_16px_32px_-10px_rgba(139,92,246,0.5),0_30px_60px_-20px_rgba(139,92,246,0.35)]",
        },
    },
    {
        icon: Brain,
        title: "Reasons & Plans",
        description:
            "Applies business logic, policies, and decides the next best step.",
        tint: {
            bg: "bg-orange-50",
            text: "text-orange-600",
            iconBg: "bg-orange-500",
            shadow:
                "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_24px_-10px_rgba(249,115,22,0.35),0_20px_50px_-20px_rgba(249,115,22,0.25)]",
            shadowHover:
                "hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_16px_32px_-10px_rgba(249,115,22,0.5),0_30px_60px_-20px_rgba(249,115,22,0.35)]",
        },
    },
    {
        icon: Wrench,
        title: "Uses Tools & Systems",
        description:
            "Connects to CRM, ERP, WhatsApp, and databases via APIs.",
        tint: {
            bg: "bg-indigo-50",
            text: "text-indigo-600",
            iconBg: "bg-indigo-500",
            shadow:
                "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_24px_-10px_rgba(99,102,241,0.35),0_20px_50px_-20px_rgba(99,102,241,0.25)]",
            shadowHover:
                "hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_16px_32px_-10px_rgba(99,102,241,0.5),0_30px_60px_-20px_rgba(99,102,241,0.35)]",
        },
    },
    {
        icon: Zap,
        title: "Takes Action",
        description:
            "Executes the task and closes the loop with the customer instantly.",
        tint: {
            bg: "bg-emerald-50",
            text: "text-emerald-600",
            iconBg: "bg-emerald-500",
            shadow:
                "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_24px_-10px_rgba(16,185,129,0.35),0_20px_50px_-20px_rgba(16,185,129,0.25)]",
            shadowHover:
                "hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_16px_32px_-10px_rgba(16,185,129,0.5),0_30px_60px_-20px_rgba(16,185,129,0.35)]",
        },
    },
];

/* ── Single card ── */
function FlowCard({
    step,
    index,
}: {
    step: (typeof flowSteps)[0];
    index: number;
}) {
    const Icon = step.icon;
    const number = `0${index + 1}`;
    const { bg, text, iconBg, shadow, shadowHover } = step.tint;

    /* Zigzag rotation and vertical offset */
    const isEven = index % 2 === 0;
    const rotate = isEven ? "md:rotate-2" : "md:-rotate-2";
    const yOffset = isEven ? "md:translate-y-0" : "md:translate-y-10";

    return (
        <div
            className={`relative w-full md:w-[220px] shrink-0 transition-transform duration-500 ease-out hover:z-30 hover:scale-[1.06] hover:rotate-0 hover:translate-y-0 ${rotate} ${yOffset}`}
        >
            {/* Outer polaroid shell , no border, layered colored shadow */}
            <div
                className={`bg-background p-2 rounded-[20px] transition-shadow duration-500 ease-out ${shadow} ${shadowHover}`}
            >
                {/* Pin */}
                <div className="flex justify-center mb-2">
                    <div
                        className={`flex items-center justify-center w-7 h-7 rounded-full ${iconBg} shadow-[0_2px_6px_-1px_rgba(0,0,0,0.15)]`}
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
                    </div>
                </div>

                {/* Inner tinted content , no border */}
                <div className={`${bg} rounded-[14px] p-4 relative overflow-hidden`}>
                    {/* Number + icon row */}
                    <div className="flex items-center justify-between mb-3">
                        <span
                            className={`${text} text-2xl font-bold tracking-tight leading-none`}
                        >
                            {number}
                        </span>
                        <div
                            className={`flex items-center justify-center w-8 h-8 rounded-lg ${iconBg} text-white shadow-[0_2px_6px_-1px_rgba(0,0,0,0.15)]`}
                        >
                            <Icon className="w-4 h-4" strokeWidth={2} />
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[15px] lg:text-base font-semibold text-foreground leading-tight mb-1.5 tracking-tight">
                        {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] lg:text-xs text-muted-foreground leading-relaxed">
                        {step.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export function AIAgentFlowSection() {
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
                className="relative overflow-hidden bg-background py-14 sm:py-16 lg:py-20 2xl:py-24"
            >
                {/* Horizontal ruled-line background */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
                        backgroundSize: "100% 32px",
                        marginTop: "4px",
                    }}
                />
                <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
                <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />

                <div className="container relative z-10">
                    {/* ─── Header , compact, refined ─── */}
                    <div
                        className={`max-w-2xl mx-auto text-center mb-8 lg:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                    >
                        <span className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground mb-3 justify-center">
                            <span className="w-6 h-px bg-primary" />
                            How an AI Agent Thinks
                            <span className="w-6 h-px bg-primary" />
                        </span>

                        <h2 className="text-2xl sm:text-3xl lg:text-[40px] 2xl:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-3">
                            From request to{" "}
                            <span className="text-primary">real-world action.</span>
                        </h2>

                        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
                            Listen, think, act, close the loop , the same reasoning cycle
                            behind every conversation.
                        </p>
                    </div>

                    {/* ─── Zigzag card row ─── */}
                    <div className="relative">
                        {/* Animated dashed path , desktop only */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0"
                            viewBox="0 0 1200 240"
                            preserveAspectRatio="none"
                        >
                            <m.path
                                d="M 120 100 Q 240 30, 360 150 T 600 100 T 840 150 T 1080 100"
                                stroke="currentColor"
                                className="text-border"
                                strokeWidth="2"
                                strokeDasharray="6 5"
                                fill="none"
                                strokeLinecap="round"
                                vectorEffect="non-scaling-stroke"
                                initial={{ strokeDashoffset: 0 }}
                                animate={{ strokeDashoffset: -110 }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                        </svg>

                        {/* Cards */}
                        <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-0 md:pt-4 md:pb-16 z-10">
                            {flowSteps.map((step, index) => (
                                <div
                                    key={step.title}
                                    className={`flex justify-center transition-all duration-700 ${isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-6"
                                        }`}
                                    style={{ transitionDelay: `${100 + index * 100}ms` }}
                                >
                                    <FlowCard step={step} index={index} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ─── Bottom summary line ─── */}
                    <div
                        className={`mt-6 lg:mt-8 flex items-center justify-center transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/40 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-xs sm:text-sm text-muted-foreground">
                                One loop.{" "}
                                <span className="text-foreground font-semibold">
                                    Every conversation.
                                </span>{" "}
                                Logged and auditable.
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </LazyMotion>
    );
}