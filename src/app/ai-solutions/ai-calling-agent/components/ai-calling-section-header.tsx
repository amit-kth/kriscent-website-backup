"use client";

import { cn } from "@/lib/utils";

/* ── Reusable section header for the AI calling agents page ──
   Renders: eyebrow label (with primary dash) + two-tone H2 + optional
   right-aligned description. Handles its own entrance animation. */

type AiCallingSectionHeaderProps = {
    id: string; // used for the h2 id + section aria-labelledby
    label: string; // eyebrow label, e.g. "The Comparison"
    title: string; // first part of the heading (foreground color)
    highlight?: string; // second part of the heading (accent color)
    description?: string; // optional right-aligned paragraph
    align?: "left" | "center"; // default left (2-col header), center for centered
    isVisible?: boolean; // when true, animates in
    className?: string;
};

export function AiCallingSectionHeader({
    id,
    label,
    title,
    highlight,
    description,
    align = "left",
    isVisible = true,
    className,
}: AiCallingSectionHeaderProps) {
    const centered = align === "center";

    return (
        <div
            className={cn(
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                centered
                    ? "mx-auto mb-6 max-w-2xl text-center"
                    : "mb-6 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-end lg:justify-between",
                className
            )}
        >
            <div className={cn("max-w-2xl", centered && "mx-auto")}>
                {/* eyebrow label */}
                <span
                    className={cn(
                        "mb-2 inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.15em] text-muted-foreground",
                        centered && "justify-center"
                    )}
                >
                    <span className="h-px w-6 bg-primary" />
                    {label}
                    {centered && <span className="h-px w-6 bg-primary" />}
                </span>

                {/* heading , compact, single-line friendly */}
                <h2
                    id={id}
                    className="text-2xl font-bold tracking-tight text-foreground leading-tight sm:text-[28px] lg:text-[32px]"
                >
                    {title}{" "}
                    {highlight && <span className="text-primary">{highlight}</span>}
                </h2>
            </div>

            {/* optional description , right-aligned on desktop (left-aligned header only) */}
            {description && !centered && (
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:pb-1 lg:text-right">
                    {description}
                </p>
            )}
        </div>
    );
}
