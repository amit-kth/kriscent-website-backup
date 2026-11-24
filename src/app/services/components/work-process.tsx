"use client";

import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { Lightbulb, Globe, Box, Rocket } from "lucide-react";

export default function WorkProcess() {
  const stages = [
    {
      icon: Lightbulb,
      title: "Planning",
      description: "Planning kicks off a project flawlessly and affects its progress positively.",
    },
    {
      icon: Globe,
      title: "Analysis",
      description: "To analyze the performance of the software at various stages.",
    },
    {
      icon: Box,
      title: "Design & Development",
      description: "All the components of the software are implemented in this phase.",
    },
    {
      icon: Rocket,
      title: "Testing",
      description: "The testing stage assesses the software for errors and bugs.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 2xl:py-24">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-4 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
        <SectionHeading
          primaryHeading="Our Success Plan"
          secondaryHeading="Work Process"
          highlightedString="Work Process"
          icon={Rocket}
          isCentered
        />

        {/* steps */}
        <div className="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-6">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.title}
                className="group flex flex-col items-center rounded-3xl bg-primary/5 p-7 text-center transition duration-300 hover:-translate-y-1 hover:bg-primary/10"
              >
                {/* icon */}
                <span className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-primary text-white shadow-md transition duration-300 group-hover:-translate-y-0.5">
                  <Icon className="size-7" strokeWidth={2} />
                </span>

                {/* step label */}
                <span className="mb-2 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  <span className="h-px w-4 bg-primary" />
                  Step {index + 1}
                </span>

                {/* title */}
                <h3 className="text-lg font-bold tracking-tight text-foreground">{stage.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {stage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
