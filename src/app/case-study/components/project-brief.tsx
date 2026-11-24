"use client";

import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { FileText } from "lucide-react";

export default function ProjectBrief({ description }: { description: string }) {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
      <div className="relative overflow-hidden rounded-[28px] bg-primary/5 p-8 sm:p-10 lg:rounded-[32px] lg:p-14 2xl:p-16">
        <SectionHeading
          primaryHeading="Project Overview"
          secondaryHeading="The brief"
          icon={FileText}
          highlightedString="Overview"
        />

        <p className="mt-2 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
