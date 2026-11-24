"use client";

import { GlobePulse } from "./Globe";

/* ── Globe markers , lat/lng for each country ── */
const globalMarkers: {
    id: string;
    location: [number, number];
    delay: number;
}[] = [
        { id: "india", location: [28.6139, 77.209], delay: 0 },
        { id: "uae", location: [25.2048, 55.2708], delay: 0.3 },
        { id: "ireland", location: [53.3498, -6.2603], delay: 0.6 },
        { id: "uk", location: [51.5072, -0.1276], delay: 0.9 },
        { id: "usa", location: [37.7749, -122.4194], delay: 1.2 },
        { id: "canada", location: [43.6532, -79.3832], delay: 1.5 },
        { id: "australia", location: [-33.8688, 151.2093], delay: 1.8 },
    ];

/* ── Region data with country codes ── */
const regions = [
    { name: "India", code: "IN", flag: "🇮🇳", tag: "HQ" },
    { name: "United States", code: "US", flag: "🇺🇸", tag: null },
    { name: "United Kingdom", code: "UK", flag: "🇬🇧", tag: null },
    { name: "United Arab Emirates", code: "AE", flag: "🇦🇪", tag: null },
    { name: "Ireland", code: "IE", flag: "🇮🇪", tag: null },
    { name: "Canada", code: "CA", flag: "🇨🇦", tag: null },
    { name: "Australia", code: "AU", flag: "🇦🇺", tag: null },
];

export default function GlobalReachSection() {
    return (
        <section className="relative overflow-hidden bg-transparent py-10 md:py-14">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-primary/8 blur-3xl" />
            </div>

            <div className="container relative z-10">
                <div className="mx-auto rounded-[54px] border border-border bg-foreground p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-xl sm:p-5 md:p-6 lg:p-7 overflow-hidden">

                    {/* ─── Right: Globe , hidden below lg, desktop unchanged ─── */}
                    <div className="hidden lg:flex mx-auto w-full max-w-[1080px] items-center justify-center absolute -right-1/4 top-0">
                        <div className="relative w-full">
                            <div className="absolute inset-6 rounded-full bg-primary/20 blur-2xl" />
                            <div className="relative rounded-full bg-background/[0.02] p-2.5 md:p-3.5">
                                <GlobePulse
                                    markers={globalMarkers}
                                    className="mx-auto w-full  max-w-[500px] md:max-w-[660px]"
                                    speed={0.0028}
                                />
                            </div>
                        </div>


                    </div>


                    <div className="grid items-center gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
                        {/* ─── Left content ─── */}
                        <div className="max-w-lg px-4 sm:px-6 lg:px-10 py-10">
                            {/* Badge */}
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-background/10 bg-background/5 px-3 py-1">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                                </span>
                                <span className="text-[11px] font-medium tracking-wide text-background/70">
                                    Global Presence
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 className="max-w-md text-2xl font-bold tracking-tight text-background md:text-3xl lg:text-[34px] lg:leading-[1.15]">
                                Delivering AI Solutions
                                <br />
                                <span className="text-primary">Across the Globe</span>
                            </h2>

                            {/* Description */}
                            <p className="mt-3 max-w-md text-sm leading-relaxed text-background/60 md:text-[15px]">
                                Helping enterprises innovate through AI, digital engineering,
                                and intelligent automation across{" "}
                                <span className="text-background/80 font-medium">
                                    {regions.length} countries
                                </span>{" "}
                                worldwide.
                            </p>

                            {/* ── Region pills with country code badges ── */}
                            <div className="mt-5 flex flex-wrap gap-2">
                                {regions.map((region) => (
                                    <span
                                        key={region.name}
                                        className="inline-flex items-center gap-2 rounded-full border border-background/10 bg-background/5 px-3 py-1.5 transition-colors hover:bg-background/10"
                                    >
                                        {/* Country code circle */}
                                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-[8px] font-bold leading-none text-primary">
                                            {region.flag}
                                        </span>

                                        {/* Country name */}
                                        <span className="text-xs font-medium text-background/80 md:text-sm">
                                            {region.name}
                                        </span>

                                        {/* HQ tag */}
                                        {region.tag && (
                                            <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-primary">
                                                {region.tag}
                                            </span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
