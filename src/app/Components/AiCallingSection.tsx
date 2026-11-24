"use client";

import Link from "next/link";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { ASSETS_BASE_URL } from "@/lib/variables";

const AI_CALL_AGENT_VIDEO_URL = `${ASSETS_BASE_URL}/tempAssets/revamp/Hero-Video-2.mp4`;
const AI_CALL_AGENT_POSTER_URL = `${ASSETS_BASE_URL}/tempAssets/revamp/hero-poster.webp`;

/* ══════════════════════════════════════════════════════════════
   AI Calling Agents , big card version (homepage section)
   Self-contained section: container keeps space from both viewport
   edges, the card is a rounded panel inside it, and everything
   scales cleanly up to 2xl.
   ══════════════════════════════════════════════════════════════ */

export function AiCallingAgentsCard() {
    return (
        <section
            aria-labelledby="ai-calling-card-title"
            className="relative w-full bg-background mb-10"
        >
            <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1680px] 2xl:px-10">
                <article
                    className={cn(
                        "group relative isolate w-full overflow-hidden rounded-[28px] lg:rounded-[36px]",
                        "bg-foreground text-background",
                        "h-[420px] sm:h-[480px] lg:h-[540px] 2xl:h-[620px]"
                    )}
                >
                    {/* Video background */}
                    <video
                        aria-hidden="true"
                        src={AI_CALL_AGENT_VIDEO_URL}
                        poster={AI_CALL_AGENT_POSTER_URL}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] opacity-40 md:opacity-100"
                    />


                    {/* content , bottom aligned */}
                    <div className="relative z-10 flex h-full items-end">
                        <div className="w-full p-6 sm:p-8 lg:p-10 2xl:p-12">
                            <div className="max-w-[620px] 2xl:max-w-[720px]">
                                {/* badge */}
                                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-background/10 px-3.5 py-1.5 ring-1 ring-background/15 backdrop-blur-md">
                                    <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                        <PhoneCall className="size-3.5" />
                                    </span>
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-background/90 sm:text-xs">
                                        BFSI AI Voice Workforce
                                    </span>
                                </div>

                                {/* heading */}
                                <h2
                                    id="ai-calling-card-title"
                                    className="text-balance text-[28px] font-bold leading-[1.05] tracking-[-0.04em] text-background sm:text-[36px] lg:text-[44px] 2xl:text-[52px]"
                                >
                                    Autonomous Voice AI for Indian Banks & NBFCs.
                                </h2>

                                {/* description */}
                                <p className="mt-4 max-w-[560px] text-sm font-medium leading-relaxed text-background/80 sm:text-base 2xl:text-lg">
                                    Deploy named, multilingual AI agents that qualify loan leads, collect overdue EMIs, send mid-call UPI payment links, and handle 24×7 helpline support with built-in TRAI & RBI compliance.
                                </p>

                                {/* CTAs */}
                                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                    <Link
                                        href="/ai-solutions/ai-calling-agent"
                                        className="group/cta inline-flex h-11 items-center justify-center gap-2 rounded-full bg-background px-6 text-sm font-bold text-foreground transition hover:bg-background/90 active:scale-[0.98] 2xl:h-12 2xl:px-7 2xl:text-base"
                                    >
                                        Explore BFSI Voice AI
                                        <ArrowUpRight className="size-4 transition group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
                                    </Link>

                                    <Link
                                        href="#contact"
                                        className="inline-flex h-11 items-center justify-center rounded-full bg-background/10 px-6 text-sm font-bold text-background ring-1 ring-background/20 backdrop-blur-md transition hover:bg-background/15 active:scale-[0.98] 2xl:h-12 2xl:px-7 2xl:text-base"
                                    >
                                        Book a Live Demo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
