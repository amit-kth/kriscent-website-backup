"use client";

import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { ListChecks, Check } from "lucide-react";

export default function ClientRequirements({
  requirements,
}: {
  requirements: string[];
}) {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
      <SectionHeading
        primaryHeading="What the client needed"
        secondaryHeading="Project scope"
        icon={ListChecks}
        highlightedString="client needed"
      />

      {/* requirements , fill container, responsive columns */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-4">
        {requirements.map((requirement, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-2xl bg-primary/5 p-4 transition duration-300 hover:-translate-y-0.5 hover:bg-primary/10"
          >
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check className="size-3.5" strokeWidth={2.5} />
            </span>
            <p className="text-sm leading-relaxed text-foreground md:text-base">
              {requirement}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
