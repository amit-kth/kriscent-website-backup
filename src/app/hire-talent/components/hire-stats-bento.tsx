"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion, useInView, animate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { BarChart3 } from "lucide-react";

/* ═══════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════ */
interface StatItem {
    eyebrow: string;
    value: number;
    suffix: string;
    description: string;
    variant: "light" | "dark" | "primary";
    className?: string;
}

/* ═══════════════════════════════════════════════
   ANIMATED COUNTER
═══════════════════════════════════════════════ */
function AnimatedNumber({
    target,
    suffix = "",
    suffixClass = "",
    duration = 2,
}: {
    target: number;
    suffix?: string;
    suffixClass?: string;
    duration?: number;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const motionVal = useMotionValue(0);
    const [display, setDisplay] = useState("0");

    useEffect(() => {
        const unsub = motionVal.on("change", (v) => setDisplay(Math.round(v).toLocaleString("en-US")));
        return () => unsub();
    }, [motionVal]);

    useEffect(() => {
        if (!isInView) return;
        const controls = animate(motionVal, target, {
            duration,
            ease: [0.25, 0.1, 0.25, 1],
        });
        return () => controls.stop();
    }, [isInView, target, duration, motionVal]);

    return (
        <span ref={ref} aria-label={`${target}${suffix}`}>
            {display}
            <span aria-hidden="true" className={suffixClass}>{suffix}</span>
        </span>
    );
}

/* ═══════════════════════════════════════════════
   DATA , kept exactly as provided
═══════════════════════════════════════════════ */
const STATS: StatItem[] = [
    {
        eyebrow: "Total Output",
        value: 50000,
        suffix: "+",
        description: "Hours delivered across global enterprise projects",
        variant: "light",
    },
    {
        eyebrow: "Global Network",
        value: 600,
        suffix: "+",
        description: "Highly skilled talents deployed",
        variant: "primary",
    },
    {
        eyebrow: "Happy Partners",
        value: 315,
        suffix: "+",
        description: "Clients scaling their teams with Kriscent",
        variant: "primary",
    },
    {
        eyebrow: "Legacy & Trust",
        value: 13,
        suffix: " Yrs",
        description: "Of uncompromising expertise in IT staffing & AI development",
        variant: "light",
    },
    {
        eyebrow: "CMMI LEVEL",
        value: 3,
        suffix: "",
        description: "Global quality standard recognized across IT, AI, and talent services",
        variant: "dark",
    },
];

/* ═══════════════════════════════════════════════
   ANIMATION VARIANTS
═══════════════════════════════════════════════ */
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
};

/* ═══════════════════════════════════════════════
   SINGLE STAT CARD , theme identity preserved
═══════════════════════════════════════════════ */
function BentoStatCard({
    eyebrow,
    value,
    suffix,
    description,
    variant,
    className,
}: StatItem) {
    const isDark = variant === "dark";
    const isPrimary = variant === "primary";
    const isTinted = isDark || isPrimary;

    return (
        <motion.article
            variants={cardVariants}
            aria-label={`${eyebrow}: ${value}${suffix}`}
            className={cn(
                "group relative flex h-full min-h-56 overflow-hidden rounded-3xl sm:min-h-60 2xl:min-h-72",
                "transition-opacity duration-300",
                className,
                {
                    /* Light , original theme */
                    "bg-primary/10 text-foreground": !isTinted,

                    /* Primary , original theme */
                    "bg-primary text-white": isPrimary,

                    /* Dark premium , original theme (bg-foreground) */
                    "bg-foreground text-white": isDark,
                }
            )}
        >
            {/* Editorial eyebrow with decorative dash */}
            <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-9 2xl:p-11">
                <div>
                    <div className="mb-3 flex items-center gap-2.5">
                        <span className="inline-block h-px w-6 bg-primary" aria-hidden="true" />
                        <h3
                            className={cn(
                                "font-mono text-[11px] font-semibold uppercase tracking-[0.15em] leading-tight",
                                isTinted ? "text-white/50" : "text-muted-foreground"
                            )}
                        >
                            {eyebrow}
                        </h3>
                    </div>
                </div>

                <div className="mt-auto">
                    <p
                        className={cn(
                            "font-extrabold tracking-tighter tabular-nums leading-[0.85]",
                            "text-5xl sm:text-6xl lg:text-7xl xl:text-8xl",
                            "transition-transform duration-500 ease-out",
                            isTinted ? "text-white" : "text-foreground",
                        )}
                    >
                        <AnimatedNumber
                            target={value}
                            suffix={suffix}
                            duration={2.2}
                            suffixClass={cn(
                                isDark ? "text-primary" : isPrimary ? "text-white/50" : "text-primary"
                            )}
                        />
                    </p>

                    <p
                        className={cn(
                            "mt-5 max-w-xs text-sm leading-relaxed",
                            isTinted ? "text-white/70" : "text-muted-foreground"
                        )}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </motion.article>
    );
}

/* ═══════════════════════════════════════════════
   MAIN , restructured editorial layout
═══════════════════════════════════════════════ */
export default function StatsBento() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.05 });
    const cards = useMemo(() => STATS, []);

    return (
        <section
            aria-label="Kriscent company statistics"
            className="relative w-full overflow-hidden bg-background py-16 md:py-24 2xl:py-28"
        >
            {/* Ambient decorative glow , pure Tailwind, no inline styles */}
            <div
                className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] -translate-y-1/3 translate-x-1/4 rounded-full bg-gradient-to-br from-primary/5 to-transparent opacity-60 blur-3xl"
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/3 -translate-x-1/4 rounded-full bg-gradient-to-tr from-primary/5 to-transparent opacity-60 blur-3xl"
                aria-hidden="true"
            />

            <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
                {/* Section header , existing component kept intact */}
                <SectionHeading
                    primaryHeading="Built on results, not promises"
                    secondaryHeading="By the numbers"
                    icon={BarChart3}
                    highlightedString="not promises"
                    description="Real numbers from real projects, the track record behind every engagement."
                />

                {/* Editorial asymmetrical magazine grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-12 grid grid-cols-1 gap-3 overflow-hidden rounded-3xl md:grid-cols-3 md:gap-4 2xl:gap-5"
                >
                    {/* Featured stat */}
                    <BentoStatCard
                        {...cards[0]}
                        className="md:col-span-2"
                    />

                    {/* Top right */}
                    <BentoStatCard {...cards[1]} />

                    {/* Middle right */}
                    <BentoStatCard {...cards[2]} />

                    {/* Bottom left */}
                    <BentoStatCard {...cards[3]} />

                    {/* Bottom middle */}
                    <BentoStatCard {...cards[4]} />
                </motion.div>
            </div>
        </section>
    );
}
