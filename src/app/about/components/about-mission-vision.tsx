"use client";

import React from "react";
import { Gem, MessageCircle, Quote, Target, Eye } from "lucide-react";
import { ASSETS_BASE_URL } from "@/lib/variables";
import { cn } from "@/lib/utils";

const containerClass =
    "mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1720px] 2xl:px-10";

/* ── Combined story section: intro + mission/vision + founder message ── */
export default function AboutMissionVision() {
    return (
        <section aria-label="About Kriscent" className="flex w-full justify-center">
            <div className={cn(containerClass, "flex flex-col gap-16 md:gap-24 2xl:gap-28")}>
                {/* ── Intro + mission / vision ── */}
                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 2xl:gap-20">
                    {/* intro */}
                    <div>
                        <span className="mb-4 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                            <span className="h-px w-6 bg-primary" />
                            Our Specialty
                        </span>

                        <h2 className="text-[30px] font-bold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[44px] 2xl:text-5xl">
                            About <span className="text-primary">Kriscent</span>
                            <br />
                            Techno Hub
                        </h2>

                        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                            Based in Kota, Rajasthan, we deliver innovative IT solutions,
                            including software development, digital marketing, and emerging
                            technologies. Since 2014, we have empowered businesses globally
                            with high-quality, scalable solutions tailored to their needs.
                        </p>

                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                            From custom software to AI, robotics, and drones, we offer
                            future-ready services designed to give your business the
                            competitive edge it needs, in India and worldwide.
                        </p>
                    </div>

                    {/* mission / vision */}
                    <div className="flex flex-col gap-5">
                        {/* mission */}
                        <div className="group rounded-[24px] bg-destructive/10 p-6 transition duration-300 hover:-translate-y-0.5 md:p-7">
                            <div className="flex items-center gap-4">
                                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-destructive text-primary-foreground shadow-md">
                                    <Target className="size-6" strokeWidth={2} />
                                </span>
                                <h3 className="text-xl font-bold tracking-tight text-foreground">Our Mission</h3>
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                                Our mission is to deliver innovative IT solutions by understanding
                                clients needs, fostering strong relationships, and ensuring
                                exceptional quality and value in everything we do.
                            </p>
                        </div>

                        {/* vision */}
                        <div className="group rounded-[24px] border-none bg-primary/5 p-6 transition duration-300 hover:-translate-y-0.5 md:p-7">
                            <div className="flex items-center gap-4">
                                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
                                    <Eye className="size-6" strokeWidth={2} />
                                </span>
                                <h3 className="text-xl font-bold tracking-tight text-foreground">Our Vision</h3>
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                                Our vision drives us to provide support by understanding our
                                clients needs deeply. At Kriscent, we are committed to listening,
                                analyzing, and delivering optimal solutions. Our promise reflects
                                our responsibility and dedication to delivering quality and real
                                value in every product and service.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── Founder message card ── */}
                <div className="relative overflow-hidden rounded-[32px] bg-foreground text-background shadow-2xl lg:rounded-[40px]">
                    {/* background image (inline path) */}
                    <img
                        src={`${ASSETS_BASE_URL}/tempAssets/revamp/hero-bg.webp`}
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                    />
          

                    {/* ambient glow */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/25 blur-3xl"
                    />

                    <div className="relative z-10 p-8 sm:p-12 lg:p-16 2xl:p-20">
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-background/60">
                            <MessageCircle className="size-3.5" />
                            A message from Founder
                        </span>

                        <Quote className="mb-5 size-9 text-primary" />

                        <h3 className="max-w-3xl text-balance text-2xl font-bold leading-[1.12] tracking-[-0.02em] text-background sm:text-4xl lg:text-[44px] 2xl:text-[52px]">
                            “The best team brings{" "}
                            <span className="text-[#7AB037]">success.</span>”
                        </h3>

                        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-background/70 md:text-base 2xl:text-lg">
                            This is the perfect formula for a team. I follow this from my first
                            day of establishment of Kriscent. Kriscent never compromises to
                            choose the best team member because a best brings best. I have one
                            of the great team. My team is full of experience and energy to do
                            anything by technology. I believe in quality, and quality comes
                            from creative and innovative minds, and I am proud of my team for
                            this.
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <div className="h-12 w-12 overflow-hidden rounded-full border border-white/10">
                                <img
                                    src={`${ASSETS_BASE_URL}/tempAssets/About/kapilsir.webp?updatedAt=1740658088232`}
                                    alt="Kapil Gautam, Founder and CEO of Kriscent"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-bold text-background">Kapil Gautam</p>
                                <p className="text-sm text-background/60">Founder &amp; CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
