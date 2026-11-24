"use client";

import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Users } from "lucide-react";

/* ─── TRUST CHIPS ─── */
const chips = [
    { icon: Clock, label: "Shortlist in 24 hrs" },
    { icon: ShieldCheck, label: "NDA protected" },
];

/* ─── STATS ─── */
const stats = [
    { label: "Response time", value: "< 24h" },
    { label: "Shortlist in", value: "48 hrs" },
    { label: "Happy clients", value: "315+" },
];

/* ─── MAIN ─── */
export default function QuotationCTA() {
    return (
        <section className="relative w-full bg-background py-16 md:py-24 2xl:py-28">
            <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
                <div className="relative overflow-hidden rounded-[32px] bg-foreground text-background shadow-2xl lg:rounded-[40px]">
                    {/* brand glows */}
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_-10%,rgba(229,62,62,0.22),transparent_55%)]" />
                    <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#1e4fd8]/15 blur-[100px]" />
                    <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-[100px]" />
                    {/* top hairline */}
                    <div aria-hidden="true" className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div className="relative z-10 grid items-center gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:gap-16 lg:p-16 2xl:gap-24 2xl:p-20">
                        {/* ── LEFT , text + CTAs ── */}
                        <div>
                            {/* pill */}
                            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur-md">
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                                </span>
                                <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                                    Hire resources
                                </span>
                            </span>

                            {/* heading */}
                            <h2 className="text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl 2xl:text-6xl">
                                Ready to hire your{" "}
                                <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
                                    next great developer?
                                </span>
                            </h2>

                            {/* subtitle */}
                            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300/80 sm:text-lg">
                                Tell us your stack and timeline. We&apos;ll send you a shortlist of
                                pre-vetted developers in under 24 hours , no calls, no pressure.
                            </p>

                            {/* trust chips */}
                            <div className="mt-7 flex flex-wrap gap-2">
                                {chips.map((chip) => {
                                    const Icon = chip.icon;
                                    return (
                                        <span
                                            key={chip.label}
                                            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/70"
                                        >
                                            <Icon className="size-3.5 text-white/50" strokeWidth={2} />
                                            {chip.label}
                                        </span>
                                    );
                                })}
                            </div>

                            {/* CTAs */}
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/quotation?service=hire-resources"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_40px_-8px_rgba(229,62,62,0.65),inset_0_1px_0_rgba(255,255,255,0.15)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_16px_50px_-8px_rgba(229,62,62,0.75)]"
                                >
                                    <Users className="size-4" strokeWidth={2.5} />
                                    Hire a developer
                                    <ArrowRight className="size-4" strokeWidth={2.5} />
                                </Link>
                            </div>
                        </div>

                        {/* ── RIGHT , glass stats card ── */}
                        <div className="w-full max-w-xs shrink-0 lg:w-64">
                            <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.05] p-6 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
                                {/* inner glow */}
                                <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
                                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                                <div className="relative">
                                    {/* header */}
                                    <div className="mb-5 flex items-center gap-2.5 border-b border-white/[0.08] pb-4">
                                        <span className="flex size-8 items-center justify-center rounded-lg bg-[#1e4fd8]/20 text-[#60A5FA]">
                                            <Users className="size-4" strokeWidth={2} />
                                        </span>
                                        <div>
                                            <p className="text-xs font-bold text-white leading-tight">Hire resources</p>
                                            <p className="mt-0.5 text-[10px] text-white/40">600+ developers</p>
                                        </div>
                                    </div>

                                    {/* stats */}
                                    <div className="space-y-3.5">
                                        {stats.map((s) => (
                                            <div key={s.label} className="flex items-center justify-between">
                                                <span className="text-xs text-white/45">{s.label}</span>
                                                <span className="text-sm font-bold text-white tabular-nums tracking-tight">{s.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* live indicator */}
                                    <div className="mt-5 flex items-center gap-2 border-t border-white/[0.08] pt-4">
                                        <span className="relative flex size-2 shrink-0">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                                            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                                        </span>
                                        <span className="text-[11px] font-medium text-white/55">Accepting new projects</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
