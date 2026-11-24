"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function StartNewProjectCTA() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
      {/* card */}
      <div className="relative overflow-hidden rounded-[32px] bg-primary px-8 py-14 text-center text-white shadow-2xl md:py-16 2xl:rounded-[40px]">
        {/* glows */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        {/* top hairline */}
        <div aria-hidden="true" className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <div className="relative z-10">
          {/* eyebrow */}
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            <Sparkles className="size-3.5" />
            Let&apos;s work together
          </span>

          {/* heading */}
          <h2 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Start Your Project With Us
          </h2>

          {/* sub */}
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            Tell us your idea and let our team bring it to life with quality and speed.
          </p>

          {/* cta */}
          <Link
            href="/quotation"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-primary shadow-[0_10px_30px_-8px_rgba(0,0,0,0.3)] transition duration-300 hover:scale-[1.02]"
          >
            Start Now
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
