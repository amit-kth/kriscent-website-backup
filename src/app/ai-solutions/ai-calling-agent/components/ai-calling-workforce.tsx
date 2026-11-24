// components/sections/voice-agents/voice-workforce-section.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
    Briefcase,
    Headset,
    BellRing,
    Users,
    Calculator,
    Settings2,
    Search,
    Mail,
} from "lucide-react";
import type { ElementType } from "react";
import { cn } from "@/lib/utils";
import { AiCallingSectionHeader } from "./ai-calling-section-header";

/* ── AI employees , title is the hero, icon is secondary ── */
const workforce: {
    icon: ElementType;
    role: string;
    department: string;
    description: string;
    cardBg: string; // solid gradient background
}[] = [
        {
            icon: Briefcase,
            role: "Sales Agent",
            department: "Sales",
            description: "Qualifies leads, follows up, books demos.",
            cardBg: "bg-gradient-to-br from-sky-500 to-sky-700",
        },
        {
            icon: Headset,
            role: "Support Agent",
            department: "Support",
            description: "Answers queries, resolves tickets, escalates.",
            cardBg: "bg-gradient-to-br from-red-500 to-red-700",
        },
        {
            icon: BellRing,
            role: "Receptionist",
            department: "Front Desk",
            description: "Greets callers, routes to the right team.",
            cardBg: "bg-gradient-to-br from-violet-500 to-violet-700",
        },
        {
            icon: Users,
            role: "HR Assistant",
            department: "People Ops",
            description: "Handles policies, onboarding, leave queries.",
            cardBg: "bg-gradient-to-br from-emerald-500 to-emerald-700",
        },
        {
            icon: Calculator,
            role: "Finance Assistant",
            department: "Finance",
            description: "Invoices, expenses, audit-ready follow-ups.",
            cardBg: "bg-gradient-to-br from-amber-500 to-amber-700",
        },
        {
            icon: Settings2,
            role: "Operations Agent",
            department: "Operations",
            description: "Automates workflows, monitors SLAs.",
            cardBg: "bg-gradient-to-br from-pink-500 to-pink-700",
        },
        {
            icon: Search,
            role: "Research Agent",
            department: "Research",
            description: "Market intel, summaries, briefs on demand.",
            cardBg: "bg-gradient-to-br from-cyan-500 to-cyan-700",
        },
        {
            icon: Mail,
            role: "Email Manager",
            department: "Communications",
            description: "Triages inbox, drafts replies, schedules.",
            cardBg: "bg-gradient-to-br from-violet-500 to-violet-700",
        },
    ];

export function VoiceWorkforceSection() {
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
            aria-labelledby="workforce-title"
            className="relative overflow-hidden bg-background py-14 sm:py-16 lg:py-20"
        >
            <div className="container relative z-10">
                <AiCallingSectionHeader
                    id="features-title"
                    label="Your AI Workforce"
                    title="Your AI team,"
                    highlight="always on."
                    isVisible={isVisible}
                />

                {/* ── Roster grid ── */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {workforce.map((employee, index) => (
                        <WorkforceCard key={employee.role} employee={employee} index={index} isVisible={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── Workforce card , colorful gradient bg, white text ── */

function WorkforceCard({
    employee,
    index,
    isVisible,
}: {
    employee: (typeof workforce)[number];
    index: number;
    isVisible: boolean;
}) {
    const Icon = employee.icon;

    return (
        <article
            aria-label={employee.role}
            className={cn(
                "group flex flex-col rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",
                "text-white",
                employee.cardBg,
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: `${80 + index * 60}ms` }}
        >
            {/* top , department label + small icon */}
            <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/80">
                    {employee.department}
                </span>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white">
                    <Icon className="size-4" strokeWidth={2} />
                </span>
            </div>

            {/* role , hero title */}
            <h3 className="text-base font-bold leading-tight text-white sm:text-[17px]">
                {employee.role}
            </h3>

            {/* description */}
            <p className="mt-1.5 text-xs leading-relaxed text-white/75">
                {employee.description}
            </p>
        </article>
    );
}
