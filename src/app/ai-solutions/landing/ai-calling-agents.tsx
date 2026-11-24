"use client";

import Link from "next/link";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { ASSETS_BASE_URL } from "@/lib/variables";

const AI_CALL_AGENT_VIDEO_URL = `${ASSETS_BASE_URL}/tempAssets/revamp/Hero-Video-2.mp4`;
const AI_CALL_AGENT_POSTER_URL = `${ASSETS_BASE_URL}/tempAssets/revamp/hero-poster.webp`;

export function AiCallingAgentsSection() {
    return (
        <section className="relative w-full overflow-hidden bg-background">
            <article
                className={cn(
                    "relative isolate w-full overflow-hidden",
                    "min-h-screen h-screen",
                    "bg-foreground text-background"
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
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* top-overlay */}
                <div className="absolute inset-0 h-30 w-full bg-gradient-to-b from-foreground to-transparent" />

                {/* Left-aligned content */}
                <div className="relative z-10 flex h-full min-h-screen items-center">
                    <div className="container">
                        <div className="max-w-[620px] 2xl:max-w-[760px]">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-background/10 px-3 py-1.5 ring-1 ring-background/15 backdrop-blur-md">
                                <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    <PhoneCall className="size-3.5" />
                                </span>
                                <span className="text-xs font-bold uppercase tracking-widest text-background/78">
                                    AI Calling Agents
                                </span>
                            </div>

                            <h2 className="text-balance text-[36px] font-bold leading-[1.04] tracking-[-0.045em] text-background sm:text-[44px] lg:text-[58px] 2xl:text-[76px]">
                                Building AI that works for your business.
                            </h2>

                            <p className="mt-5 max-w-[560px] 2xl:max-w-[680px] text-[15px] font-medium leading-relaxed text-background/72 sm:text-base 2xl:text-xl">
                                AI calling agents for customer support, appointment booking, lead
                                qualification, and follow-up calls without adding manual workload.
                            </p>

                            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/ai-solutions/ai-calling-agent"
                                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-background px-6 text-sm font-bold text-foreground transition hover:bg-background/90 active:scale-[0.98]"
                                >
                                    Explore Calling Agents
                                    <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Link>

                                <Link
                                    href="#contact"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-background/10 px-6 text-sm font-bold text-background ring-1 ring-background/18 backdrop-blur-md transition hover:bg-background/15 active:scale-[0.98]"
                                >
                                    Book a Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}