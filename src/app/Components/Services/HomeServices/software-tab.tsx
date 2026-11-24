"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
    ArrowRight,
    BrainCircuit,
    Database,
    Gamepad2,
    Globe2,
    PenTool,
    Smartphone,
} from "lucide-react";
import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;

const revealVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: (index: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            delay: index * 0.045,
            ease: easeOut,
        },
    }),
};

/* Software development services, 3x2 grid --------------------------------- */

const softwareServices = [
    {
        title: "Web & SaaS Platforms",
        text: "Corporate sites, SaaS products, dashboards, and portals.",
        icon: Globe2,
        href: "/web-solutions",
        tone: "primary",
    },
    {
        title: "Mobile Apps",
        text: "Android & iOS apps for customers, staff, and field teams.",
        icon: Smartphone,
        href: "/app-solutions",
        tone: "dark",
    },
    {
        title: "UI/UX & Product Design",
        text: "User interfaces and design systems built for usability.",
        icon: PenTool,
        href: "/design-services",
        tone: "soft",
    },
    {
        title: "Backend & APIs",
        text: "Scalable APIs, integrations, and server-side logic.",
        icon: Database,
        href: "/web-solutions",
        tone: "soft",
    },
    {
        title: "Data & Analytics",
        text: "Dashboards and insight pipelines from raw data.",
        icon: BrainCircuit,
        href: "/data-analysis",
        tone: "primary",
    },
    {
        title: "Game Development",
        text: "Custom 2D/3D games and interactive experiences.",
        icon: Gamepad2,
        href: "/game-development/",
        tone: "dark",
    },
] as const;

type Service = (typeof softwareServices)[number];

export function SoftwareLayout() {
    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-4">
            {softwareServices.map((service, index) => (
                <ServiceCard
                    key={service.title}
                    service={service}
                    index={index}
                />
            ))}
        </div>
    );
}

function ServiceCard({
    service,
    index,
}: {
    service: Service;
    index: number;
}) {
    const Icon = service.icon;
    const isDark = service.tone === "dark";
    const isPrimary = service.tone === "primary";
    const isSoft = service.tone === "soft";

    return (
        <motion.div
            custom={index}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex"
        >
            <Link
                href={service.href}
                aria-label={`Explore ${service.title}`}
                className={cn(
                    "group relative flex w-full flex-col overflow-hidden rounded-3xl p-4",
                    "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_20px_-8px_rgba(0,0,0,0.06),0_20px_50px_-20px_rgba(0,0,0,0.08)]",
                    "transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_12px_28px_-8px_rgba(0,0,0,0.1),0_30px_60px_-20px_rgba(0,0,0,0.12)]",
                    "min-h-44 2xl:min-h-52",
                    isPrimary && "bg-primary text-primary-foreground",
                    isDark && "bg-foreground text-background",
                    isSoft && "bg-primary/10 text-foreground"
                )}
            >
                <div
                    aria-hidden="true"
                    className={cn(
                        "absolute -right-10 -top-10 size-32 rounded-full blur-3xl",
                        isPrimary || isDark
                            ? "bg-background/15"
                            : "bg-primary/15"
                    )}
                />

                <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between">
                        <span
                            aria-hidden="true"
                            className={cn(
                                "flex size-10 items-center justify-center rounded-2xl ring-1 backdrop-blur-md transition group-hover:-translate-y-0.5",
                                isPrimary
                                    ? "bg-primary-foreground/12 text-primary-foreground ring-primary-foreground/15"
                                    : isDark
                                      ? "bg-background/12 text-background ring-background/15"
                                      : "bg-primary text-primary-foreground ring-primary/20"
                            )}
                        >
                            <Icon className="size-5" />
                        </span>

                        <span
                            aria-hidden="true"
                            className="text-[10px] font-semibold tabular-nums opacity-50" // Adjusted: text-xs -> text-[10px]
                        >
                            {String(index + 1).padStart(2, "0")}
                        </span>
                    </div>

                    <div className="mt-auto">
                        <h4
                            className={cn(
                                "mt-3 text-balance text-base font-bold leading-tight tracking-tight 2xl:text-lg", // Adjusted: text-lg -> text-base / 2xl:text-lg
                                isPrimary || isDark ? "text-background" : "text-foreground"
                            )}
                        >
                            {service.title}
                        </h4>

                        <p
                            className={cn(
                                "mt-1.5 line-clamp-2 text-[11px] font-medium leading-relaxed 2xl:text-xs", // Adjusted: text-sm -> text-[11px] / 2xl:text-xs
                                isPrimary || isDark ? "text-background/60" : "text-muted-foreground"
                            )}
                        >
                            {service.text}
                        </p>

                        <span
                            className={cn(
                                "mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition", // Adjusted: text-xs -> text-[10px]
                                isPrimary || isDark ? "text-background/55 group-hover:text-background" : "text-primary"
                            )}
                        >
                            Explore
                            <ArrowRight
                                aria-hidden="true"
                                className="size-3.5 transition-transform group-hover:translate-x-0.5"
                            />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}