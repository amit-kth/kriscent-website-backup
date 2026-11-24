"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { ArrowRight, MessageSquare, Users, Check, Zap } from "lucide-react";

/* ─── STEPS , themed colors ─── */
const steps = [
    {
        n: 1,
        title: "Share your needs",
        desc: "Tell us what you're building and who you need.",
        color: "#F97316",
        icon: MessageSquare,
    },
    {
        n: 2,
        title: "Meet your matches",
        desc: "Interview pre-vetted developers within 48 hours.",
        color: "#EC4899",
        icon: Users,
    },
    {
        n: 3,
        title: "Pick your favorite",
        desc: "Choose the developer that fits your team best.",
        color: "#8B5CF6",
        icon: Check,
    },
    {
        n: 4,
        title: "Start building",
        desc: "They're onboarded and shipping code on day one.",
        color: "#E53E3E",
        icon: Zap,
    },
];

/* ─── MAIN ─── */
export default function HowItWorks() {
    return (
        <section id="process" aria-labelledby="process-title" className="relative w-full overflow-hidden border-y border-border bg-background">
            {/* ambient */}
            <div aria-hidden="true" className="pointer-events-none absolute left-[10%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-orange-100/40 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute right-[10%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 md:py-24 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
                {/* header */}
                <SectionHeading
                    primaryHeading="Hire in four steps, not four weeks"
                    secondaryHeading="The process"
                    icon={Zap}
                    isCentered
                    highlightedString="four steps"
                    description="From sharing your needs to shipping code, get a developer on your team fast."
                />

                {/* steps */}
                <div className="relative mt-12">
                    {/* connecting line , desktop */}
                    <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-0.5 bg-border lg:block" />

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 2xl:gap-8">
                        {steps.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <motion.div
                                    key={s.n}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                                    className="group relative flex flex-col items-center text-center"
                                >
                                    {/* icon circle */}
                                    <div className="relative mb-5">
                                        {/* soft glow */}
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-0 rounded-full opacity-40 blur-xl transition-opacity duration-300 group-hover:opacity-70"
                                            style={{ backgroundColor: s.color }}
                                        />
                                        <div
                                            className="relative flex size-20 items-center justify-center rounded-full bg-white text-white shadow-lg ring-8 ring-white/60 transition duration-300 group-hover:-translate-y-1"
                                        >
                                            <span className="absolute inset-1.5 rounded-full opacity-15" style={{ backgroundColor: s.color }} />
                                            <Icon className="relative z-10 size-8" style={{ color: s.color }} strokeWidth={2} />
                                        </div>

                                        {/* number badge */}
                                        <span
                                            className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full border-2 bg-white text-[11px] font-bold shadow-md"
                                            style={{ color: s.color, borderColor: s.color }}
                                        >
                                            {s.n}
                                        </span>
                                    </div>

                                    {/* text */}
                                    <h3 className="text-lg font-bold tracking-tight text-foreground">{s.title}</h3>
                                    <p className="mt-1.5 max-w-[220px] text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

                                    {/* connector arrow (mobile) */}
                                    {i < steps.length - 1 && (
                                        <ArrowRight aria-hidden="true" className="mt-4 size-4 rotate-90 text-muted-foreground/30 lg:hidden" />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* bottom flourish */}
                <p className="mt-14 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2">
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                        </span>
                        Average time to first hire:{" "}
                        <span className="font-bold text-foreground">4 days</span>
                    </span>
                </p>
            </div>
        </section>
    );
}
