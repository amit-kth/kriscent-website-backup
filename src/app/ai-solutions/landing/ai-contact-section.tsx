// components/sections/ai-contact-section.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AiContactForm from "./ai-contact-form";

export function AiContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden border-t border-border bg-background py-20 lg:py-28"
    >
      {/* Subtle grid , single CSS-gradient element */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right,
              transparent 0, transparent calc(12.5% - 1px),
              var(--border) calc(12.5% - 1px), var(--border) 12.5%),
            repeating-linear-gradient(to bottom,
              transparent 0, transparent calc(16.666% - 1px),
              var(--border) calc(16.666% - 1px), var(--border) 16.666%)
          `,
        }}
      />

      {/* gentle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ─── Left: editorial content ─── */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {/* section label */}
            <span className="mb-6 inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.15em] text-muted-foreground sm:text-xs">
              <span className="h-px w-6 bg-primary" />
              Contact Us
            </span>

            {/* title */}
            <h2
              id="contact-title"
              className="mb-6 text-3xl font-bold tracking-tight text-foreground leading-[1.08] lg:text-5xl"
            >
              Let&apos;s build
              <br />
              <span className="text-primary">something intelligent.</span>
            </h2>

            {/* description */}
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:text-base">
              Have an operational challenge or a custom AI concept you want to
              explore? Fill out our inquiry form or send a message directly to{" "}
              <Link
                href="mailto:info@kriscent.in"
                className="font-medium text-primary transition-colors hover:underline"
              >
                info@kriscent.in
              </Link>
              . Our specialists typically respond within one business day.
            </p>
          </div>

          {/* ─── Right: form card ─── */}
          <div
            className={cn(
              "transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg lg:p-8">
              <AiContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
