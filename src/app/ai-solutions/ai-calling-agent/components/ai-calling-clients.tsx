// components/sections/ai-clients-section.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ASSETS_BASE_URL } from "@/lib/variables";
import { AiCallingSectionHeader } from "./ai-calling-section-header";

/* ── Selected clients (8) , logos designed for light bg ── */
const clientLogos: {
    name: string;
    logo: string;
    url?: string;
}[] = [
        {
            name: "Shree Falodi Finance",
            logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/shree-falodi.png`,
            url: "https://shreefalodifinpro.com/",
        },
        {
            name: "HR Walla",
            logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/hr.png`,
        },
        {
            name: "RGCSM",
            logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/rgcsm.png`,
            url: "https://www.rgcsm.org/",
        },
        {
            name: "Chabi Digital Solutions",
            logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/chabi-updated.webp`,
            url: "https://mychabi.app/",
        },
        {
            name: "Kamal Fincap",
            logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/kamal.png`,
            url: "https://www.kamalfincap.com/",
        },
        {
            name: "Shree Shree Micro serve Foundation",
            logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/msf.png`,
            url: "https://shreeshreemsf.com/",
        },
        {
            name: "TSBOS",
            logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/tsbos.webp`,
            url: "https://thesommnathbhattacharyaa.in/",
        },
        {
            name: "Divine Touch",
            logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/divinetouch.webp`,
            url: "https://divinetouch.info/",
        },
    ];

export function AiClientsSection() {
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
            aria-labelledby="clients-title"
            className="relative overflow-hidden bg-background py-12 sm:py-16"
        >
            <div className="container relative z-10">
                {/* ── Header , reusable component ── */}
                <AiCallingSectionHeader
                    id="clients-title"
                    label="Trusted By"
                    title="Deployed across"
                    highlight="forward-thinking teams."
                    isVisible={isVisible}
                />

                {/* ── Single marquee row ── */}
                <div
                    className={cn(
                        "transition-all duration-700 delay-100",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    )}
                >
                    <MarqueeRow logos={clientLogos} />
                </div>
            </div>
        </section>
    );
}

/* ── Single marquee row , clean, premium logo pills ── */

function MarqueeRow({ logos }: { logos: { name: string; logo: string; url?: string }[] }) {
    const doubled = [...logos, ...logos];

    return (
        <div
            className="overflow-hidden py-1"
            style={{
                maskImage:
                    "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            }}
        >
            <div className="flex w-max items-center gap-5 pr-5 animate-marquee">
                {doubled.map((client, i) => {
                    const logo = (
                        <img
                            src={client.logo}
                            alt={client.name}
                            loading="lazy"
                            className="max-h-10 w-auto object-contain"
                        />
                    );

                    return (
                        <div
                            key={i}
                            className="flex h-16 shrink-0 items-center rounded-xl border border-black/5 bg-white/80 px-6"
                        >
                            {client.url ? (
                                <a
                                    href={client.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${client.name} (opens in new tab)`}
                                    className="flex items-center"
                                >
                                    {logo}
                                </a>
                            ) : (
                                logo
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

/* ── Marquee keyframe ── */
const styles = `
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.animate-marquee { animation: marquee 32s linear infinite; }
`;

if (typeof document !== "undefined") {
    const id = "ai-clients-styles";
    if (!document.getElementById(id)) {
        const el = document.createElement("style");
        el.id = id;
        el.textContent = styles;
        document.head.appendChild(el);
    }
}
