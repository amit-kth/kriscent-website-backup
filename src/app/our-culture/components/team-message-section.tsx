"use client"

import { ASSETS_BASE_URL } from "@/lib/variables"
import { Quote, Star, Lightbulb, Users2 } from "lucide-react"
import { SectionHeading } from '@/app/ReusableComponents/section-heading'

export default function TeamMessageSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      {/* decorative blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
        <SectionHeading
          primaryHeading="The Best Team Brings Success"
          isCentered
          highlightedString="Success"
          className="mb-12"
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-12">
          {/* ── CEO profile card ── */}
          <div className="flex flex-col overflow-hidden rounded-[28px] border border-border bg-card shadow-sm lg:col-span-4">
            {/* portrait */}
            <div className="flex flex-col items-center bg-muted/50 p-6">
              <div className="h-32 w-32 overflow-hidden rounded-full">
                <img
                  src={`${ASSETS_BASE_URL}/tempAssets/About/kapilsir.webp?updatedAt=1740658088232`}
                  alt="Kapil Gautam, Founder and CEO of Kriscent"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-bold text-foreground">Kapil Gautam</p>
                <p className="text-sm text-muted-foreground">CEO &amp; Founder</p>
              </div>
            </div>

            {/* quote */}
            <div className="flex flex-1 flex-col justify-center p-6">
              <div className="rounded-xl bg-primary/5 p-5">
                <Quote className="mb-2 size-7 text-primary" />
                <p className="text-base font-medium italic leading-relaxed text-primary">
                  A rising technical company with innovation across the world.
                </p>
              </div>
            </div>
          </div>

          {/* ── CEO message ── */}
          <div className="relative flex flex-col overflow-hidden rounded-[28px] bg-foreground p-8 text-background shadow-2xl lg:col-span-8 md:p-10">
            {/* corner accent */}
            <div aria-hidden="true" className="absolute right-0 top-0 flex size-20 items-center justify-center rounded-bl-3xl bg-primary/20">
              <Star className="size-8 text-primary" />
            </div>

            <div className="relative z-10 flex flex-1 flex-col">
              <p className="max-w-3xl text-lg leading-relaxed text-background/85 md:text-xl">
                This is the perfect formula for a team. We never compromise on
                choosing the best member, because the best brings best. Our team
                is full of experience and energy to do anything by technology.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {/* message 1 */}
                <div className="rounded-xl border-l-4 border-primary bg-white/5 p-5">
                  <p className="text-sm leading-relaxed text-background/75">
                    Kriscent has a great team for development and IT solutions.
                    They don&apos;t just build software, they design your
                    imagination as software.
                  </p>
                </div>

                {/* message 2 */}
                <div className="rounded-xl border-l-4 border-primary bg-white/5 p-5">
                  <p className="text-sm leading-relaxed text-background/75">
                    Our team is the secret of our success. We work with clients to
                    understand their challenges and create the right solution.
                  </p>
                </div>
              </div>

              {/* team highlight */}
              <div className="mt-6 flex items-start gap-4 rounded-xl bg-primary/10 p-5">
                <Users2 className="mt-0.5 size-7 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-background/80">
                  Developers, Analysts, and Researchers with over 100 years of
                  combined experience across web, apps, digital marketing, and SEO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
