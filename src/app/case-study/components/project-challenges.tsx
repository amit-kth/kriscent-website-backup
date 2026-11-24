"use client";

import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChallengeType {
    challenge: string;
    description: string;
}

/* ── Warm red/amber tones , signals problems/challenges ── */
const tones = [
    { card: "bg-destructive/5", hover: "hover:bg-destructive/10", chip: "bg-destructive/10 text-destructive", ghost: "text-primary/[0.08]" },
    { card: "bg-amber-500/5", hover: "hover:bg-amber-500/10", chip: "bg-amber-500/10 text-amber-600", ghost: "text-amber-600/[0.08]" },
];

export default function ProjectChallenges({
    challenges,
}: {
    challenges: ChallengeType[];
}) {
    return (
        <section className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
            <SectionHeading
                primaryHeading="Project Challenges"
                secondaryHeading="What we overcame"
                icon={AlertTriangle}
                highlightedString="Challenges"
                highlightedColor="destructive"
                description="Every project has its hurdles. Here's what we navigated to deliver on time."
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-4">
                {challenges.map((item, index) => {
                    const t = tones[index % tones.length];
                    return (
                        <div
                            key={index}
                            className={cn(
                                "group flex flex-col rounded-2xl p-5 transition duration-300 hover:-translate-y-0.5 md:p-6",
                                t.card,
                                t.hover
                            )}
                        >
                            {/* icon + index */}
                            <div className="mb-4 flex items-center justify-between">
                                <span className={cn("flex size-10 items-center justify-center rounded-lg transition duration-300 group-hover:scale-105", t.chip)}>
                                    <AlertTriangle className="size-5" strokeWidth={2} />
                                </span>
                                <span className={cn("text-3xl font-black leading-none tracking-tighter", t.ghost)}>
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            {/* content */}
                            <h3 className="text-lg font-bold leading-tight tracking-tight text-foreground">
                                {item.challenge}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
