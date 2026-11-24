"use client";

import React from "react";
import { motion } from "framer-motion";
import { StarIcon, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export type TestimonialColumnItem = {
    id: string;
    name: string;
    role?: string;
    text: string;
    image?: string;
    imageType?: "avatar" | "logo";
};

interface TestimonialsColumnProps {
    className?: string;
    testimonials: TestimonialColumnItem[];
    duration?: number;
}

const AVATAR_COLORS = [
    "#f43f5e", // rose
    "#ec4899", // pink
    "#a855f7", // purple
    "#8b5cf6", // violet
    "#6366f1", // indigo
    "#3b82f6", // blue
    "#0ea5e9", // sky
    "#06b6d4", // cyan
    "#14b8a6", // teal
    "#10b981", // emerald
    "#22c55e", // green
    "#f97316", // orange
    "#ef4444", // red
    "#e11d48", // rose-dark
    "#7c3aed", // violet-dark
    "#2563eb", // blue-dark
];

function getAvatarColor(name: string): string {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function getInitials(name: string): string {
    return name
        .split(" ")
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase();
}

export function TestimonialsColumn({
    className,
    testimonials,
    duration = 18,
}: TestimonialsColumnProps) {
    return (
        <div className={className}>
            <motion.div
                animate={{ y: "-50%" }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6 will-change-transform"
            >
                {[0, 1].map((groupIndex) => (
                    <React.Fragment key={groupIndex}>
                        {testimonials.map((testimonial) => (
                            <Card
                                key={`${groupIndex}-${testimonial.id}`}
                                className="group relative max-w-lg w-full h-full overflow-hidden rounded-[26px] border border-primary/10 bg-background/70 backdrop-blur-md shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10"
                            >
                                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
                                <div className="pointer-events-none absolute right-5 top-3 text-[56px] leading-none text-primary/10 transition-transform duration-300 group-hover:scale-105">
                                    &ldquo;
                                </div>

                                <CardContent className="flex h-full flex-col p-4 md:p-6">
                                    <div className="mb-3 flex items-center gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon
                                                key={i}
                                                className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400 md:h-4 md:w-4"
                                            />
                                        ))}
                                    </div>

                                    <p className="text-muted-foreground text-xs md:text-base leading-relaxed line-clamp-4 pr-6">
                                        {testimonial.text}
                                    </p>

                                    <div className="mt-auto pt-4">
                                        <div className="flex items-center justify-between gap-3 rounded-2xl border border-primary/10 bg-background/60 px-3 py-2.5">
                                            <div className="flex min-w-0 items-center gap-3">
                                                {testimonial.imageType === "logo" && testimonial.image ? (
                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-background">
                                                        <img
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            className="h-7 w-7 object-contain"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                ) : (
                                                    <Avatar className="h-11 w-11 shrink-0 rounded-xl ring-1 ring-primary/10">
                                                        <AvatarImage
                                                            loading="lazy"
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            className="object-cover"
                                                        />
                                                        <AvatarFallback
                                                            className="rounded-xl text-sm font-semibold text-white"
                                                            style={{
                                                                backgroundColor: getAvatarColor(testimonial.name),
                                                            }}
                                                        >
                                                            {getInitials(testimonial.name)}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                )}

                                                <div className="min-w-0">
                                                    <p className="truncate text-sm font-semibold text-foreground">
                                                        {testimonial.name}
                                                    </p>
                                                    {testimonial.role ? (
                                                        <p className="truncate text-xs text-muted-foreground">
                                                            {testimonial.role}
                                                        </p>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
}