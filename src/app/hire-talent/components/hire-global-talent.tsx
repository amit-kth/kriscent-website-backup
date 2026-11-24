"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { Globe2, ArrowRight } from "lucide-react";

/* ─── COUNTRIES , flag-tinted glass cards ─── */
const countries = [
    { flag: "🇮🇳", name: "India", devs: "150+ developers", region: "South Asia", tint: "from-orange-400/30 to-emerald-500/30", accent: "#10B981" },
    { flag: "🇺🇸", name: "United States", devs: "80+ developers", region: "North America", tint: "from-primary/30 to-blue-600/35", accent: "#3B82F6" },
    { flag: "🇬🇧", name: "United Kingdom", devs: "40+ developers", region: "Europe", tint: "from-blue-700/35 to-primary/25", accent: "#1E40AF" },
    { flag: "🇨🇦", name: "Canada", devs: "30+ developers", region: "North America", tint: "from-primary/35 to-primary/25", accent: "#EF4444" },
    { flag: "🇦🇺", name: "Australia", devs: "25+ developers", region: "Oceania", tint: "from-blue-800/35 to-primary/20", accent: "#1E3A8A" },
    { flag: "🇮🇪", name: "Ireland", devs: "15+ developers", region: "Europe", tint: "from-emerald-500/35 to-orange-400/30", accent: "#10B981" },
];

/* ─── MAIN ─── */
export default function GlobalTalent() {
    return (
        <section id="global" aria-labelledby="global-title" className="relative w-full overflow-hidden border-t border-border bg-muted/30">
            {/* ambient */}
            <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-24 h-72 w-72 rounded-full bg-[#1e4fd8]/5 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 md:py-24 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
                {/* header */}
                <SectionHeading
                    primaryHeading="Talent deployed across the globe"
                    secondaryHeading="Global reach"
                    icon={Globe2}
                    highlightedString="across the globe"
                    description="Our vetted developers are actively working with clients across 6 countries , and growing."
                />

                {/* country grid */}
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-5">
                    {countries.map((c, i) => (
                        <motion.div
                            key={c.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl 2xl:p-7"
                        >
                            {/* flag-tinted wash */}
                            <div aria-hidden="true" className={cn("absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-500 group-hover:opacity-80", c.tint)} />

                            {/* content */}
                            <div className="relative z-10 flex items-center gap-5">
                                {/* flag */}
                                <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-background/80 text-4xl shadow-md backdrop-blur-sm transition duration-300 group-hover:scale-105">
                                    {c.flag}
                                </span>

                                <div className="min-w-0">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em]" style={{ color: c.accent }}>
                                        {c.region}
                                    </p>
                                    <p className="mt-0.5 text-lg font-bold leading-tight text-foreground">{c.name}</p>
                                    <p className="mt-1 text-sm font-medium text-muted-foreground">{c.devs}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* bottom note */}
                <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
                    <ArrowRight className="size-4 text-[#1e4fd8]" />
                    All timezones covered , your team works when you do.
                </p>
            </div>
        </section>
    );
}
