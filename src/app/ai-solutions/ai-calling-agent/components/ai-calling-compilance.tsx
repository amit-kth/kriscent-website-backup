// components/sections/voice-agents/voice-compliance-section.tsx
"use client";

import { ASSETS_BASE_URL } from "@/lib/variables";
import { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { AiCallingSectionHeader } from "./ai-calling-section-header";

/* ── Certifications ── */
const certifications = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
    imgUrl: `${ASSETS_BASE_URL}/tempAssets/awards/2015.webp`,
  },
  {
    id: "cmmi",
    title: "CMMI Level 3",
    subtitle: "Process Maturity",
    imgUrl: `${ASSETS_BASE_URL}/tempAssets/cmmi.png?updatedAt=1724492726579`,
  },
  {
    id: "iso-27001",
    title: "ISO 27001",
    subtitle: "Information Security",
    imgUrl: `${ASSETS_BASE_URL}/tempAssets/awards/27001.webp`,
  },
];

/* ── Frame image behind each certification icon ── */
const FRAME_IMG = `${ASSETS_BASE_URL}/tempAssets/1ApjuJ-award-amazing-image-download%201.webp?updatedAt=1724763918507`;

export function VoiceComplianceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="compliance-title"
      className="relative overflow-hidden bg-[#FFF9EE] py-12 sm:py-16 lg:py-20"
    >

      <div className="container relative z-10">
        {/* ── Header , no description ── */}
        <AiCallingSectionHeader
          id="compliance-title"
          label="Certifications & Trust"
          title="Built on"
          highlight="certified foundations."
          align="center"
          isVisible={isVisible}
        />

        {/* ── Medallions , compact, no card ── */}
        <div
          className={cn(
            "mt-13 grid grid-cols-1 gap-10 sm:mt-12 sm:grid-cols-3 sm:gap-8 lg:mt-14 lg:gap-12",
            "transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={cn(
                "flex flex-col items-center text-center transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${200 + index * 120}ms` }}
            >
              {/* Medallion , frame + cert image */}
              <div className="group relative mb-4 h-[140px] w-[140px] transition-transform duration-500 hover:-rotate-2 hover:scale-105 sm:h-[150px] sm:w-[150px]">
                {/* warm gold halo */}
                <div className="absolute inset-4 rounded-full bg-amber-400/20 blur-2xl" />

                {/* frame */}
                <img
                  src={FRAME_IMG}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_16px_32px_rgba(245,158,11,0.25)]"
                />

                {/* cert image */}
                <img
                  src={cert.imgUrl}
                  alt={cert.title}
                  loading="lazy"
                  className="absolute left-1/2 top-1/2 h-[64px] w-[64px] -translate-x-1/2 -translate-y-[58%] object-contain sm:h-[70px] sm:w-[70px]"
                />
              </div>

              {/* title + subtitle */}
              <h3 className="mb-0.5 text-lg font-bold tracking-tight text-foreground leading-tight">
                {cert.title}
              </h3>
              <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                {cert.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
