"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type GlassPanelProps = React.HTMLAttributes<HTMLDivElement> & {
    intensity?: "soft" | "medium" | "strong";
    radius?: number;
};

export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
    ({ className, intensity = "medium", radius = 15, style, children, ...props }, ref) => {
        const blurValue =
            intensity === "soft" ? "backdrop-blur-[1px]" :
            intensity === "medium" ? "backdrop-blur-md" : "backdrop-blur-lg";

        const bgOpacity =
            intensity === "soft" ? "bg-transparent" :
            intensity === "medium" ? "bg-white/5" : "bg-white/10";

        return (
            <div
                ref={ref}
                style={{
                    borderRadius: `${radius}px`,
                    ...style,
                }}
                className={cn(
                    // Glass core: visible blur + tint + border so background shows through
                    "relative overflow-hidden isolate",
                    "border border-white/20",
                    "shadow-xl",
                    blurValue,
                    bgOpacity,

                    // Top highlight line (visible glass edge)
                    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:z-20",
                    "before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent",

                    // Inner depth gradient for translucent depth
                    "after:pointer-events-none after:absolute after:inset-0 after:z-10",
                    "after:bg-gradient-to-b after:from-white/10 after:via-transparent after:to-white/5",

                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

GlassPanel.displayName = "GlassPanel";
