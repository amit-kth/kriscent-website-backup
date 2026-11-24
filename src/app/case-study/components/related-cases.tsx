"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { BriefcaseBusiness } from "lucide-react";
import { caseStudies } from "@/app/Components/CaseStudies/case-studies-data";

export default function RelatedCases({ csID }: { csID: string }) {
  const filteredCaseStudies = caseStudies.filter((study) => study.id !== csID);

  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
      <SectionHeading
        primaryHeading="Related Case Studies"
        secondaryHeading="More to explore"
        icon={BriefcaseBusiness}
        isCentered
        highlightedString="Case Studies"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-6">
        {filteredCaseStudies.map((case_) => (
          <Link
            key={case_.id}
            href={case_.pageAddress}
            className="group flex flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1"
          >
            {/* tinted card body , subtle case-study color */}
            <div
              className="flex flex-1 flex-col p-5"
              style={{ backgroundColor: `${case_.color}0F` }} // ~6% tint
            >
              {/* image */}
              <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={case_.image}
                  alt={case_.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* platforms chip */}
                {case_.platforms?.length > 0 && (
                  <span className="absolute left-3 top-3 rounded-full bg-foreground/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-background backdrop-blur-md">
                    {case_.platforms.join(" · ")}
                  </span>
                )}
              </div>

              {/* content */}
              <div className="flex flex-1 flex-col">
                <h3 className="text-lg font-bold leading-tight tracking-tight text-foreground">
                  {case_.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {case_.description}
                </p>

                {/* cta */}
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-primary">
                  <span className="inline-flex items-center gap-1.5">
                    Read Case Study
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
