"use client";

import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { Lightbulb, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface SolutionsType {
  title: string;
  description: string;
}

/* ── Green tones , signals solutions/answers ── */
const tones = [
  { card: "bg-emerald-500/5", hover: "hover:bg-emerald-500/10", chip: "bg-emerald-500/10 text-emerald-600", ghost: "text-emerald-600/[0.08]" },
  { card: "bg-teal-500/5", hover: "hover:bg-teal-500/10", chip: "bg-teal-500/10 text-teal-600", ghost: "text-teal-600/[0.08]" },
];

export default function Solutions({ solutions }: { solutions: SolutionsType[] }) {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
      <SectionHeading
        primaryHeading="Proposed Solution"
        secondaryHeading="How we solved it"
        icon={Lightbulb}
        highlightedString="Solution"
        highlightedColor="green"
        description="Our comprehensive solution addresses all client requirements through the following key components:"
      />

      <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2 2xl:gap-4">
        {solutions.map((solution, index) => {
          const featured = index === 0;
          const t = tones[index % tones.length];
          return (
            <div
              key={index}
              className={
                featured
                  ? "group relative overflow-hidden rounded-[24px] bg-foreground p-6 text-background md:p-8 lg:col-span-2 2xl:p-9"
                  : cn("group relative overflow-hidden rounded-2xl p-5 transition duration-300 md:p-6", t.card, t.hover)
              }
            >
              {/* glow (featured only) */}
              {featured && (
                <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/30 blur-3xl" />
              )}

              {/* number + icon */}
              <div className="relative z-10 mb-4 flex items-center justify-between">
                <span
                  className={
                    featured
                      ? "flex size-11 items-center justify-center rounded-xl bg-background/10 text-background ring-1 ring-background/15"
                      : cn("flex size-10 items-center justify-center rounded-lg", t.chip)
                  }
                >
                  <Lightbulb className="size-5" strokeWidth={2} />
                </span>
                <span
                  className={
                    featured
                      ? "text-4xl font-black leading-none tracking-tighter text-background/[0.06] md:text-5xl"
                      : cn("text-3xl font-black leading-none tracking-tighter", t.ghost)
                  }
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* content */}
              <div className="relative z-10">
                <h3
                  className={
                    featured
                      ? "text-xl font-bold leading-tight tracking-tight text-background md:text-2xl"
                      : "text-lg font-bold tracking-tight text-foreground"
                  }
                >
                  {solution.title}
                </h3>
                <p
                  className={
                    featured
                      ? "mt-2 max-w-2xl text-sm leading-relaxed text-background/70 md:text-base"
                      : "mt-1.5 text-sm leading-relaxed text-muted-foreground"
                  }
                >
                  {solution.description}
                </p>

                {featured && (
                  <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 ring-1 ring-emerald-500/25">
                    <Check className="size-3.5" strokeWidth={2.5} />
                    Core solution
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
