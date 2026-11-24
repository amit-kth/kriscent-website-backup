"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle, MessageSquare, ShieldCheck, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Factual, zero-fluff data source (100% synchronized with JSON-LD) ──
const homepageFaqData = [
  {
    question: "Where is Kriscent Techno Hub based and what is your team size?",
    answer:
      "Kriscent Techno Hub is headquartered in Kota, Rajasthan, India. We operate with an in-house team of over 100 tech professionals, including software engineers, UI/UX designers, QA specialists, and project managers delivering end-to-end IT solutions globally.",
  },
  {
    question: "How much does it cost to build a custom website or software?",
    answer:
      "Project costs are determined by tech stack, scope complexity, third-party integrations, and timeline. After an initial discovery call, we deliver a detailed scope breakdown, technical roadmap, and fixed-price or dedicated team estimate within 48 hours.",
  },
  {
    question: "Do you provide post-launch maintenance and support?",
    answer:
      "Yes. We offer structured Service Level Agreements (SLAs) that include 24/7 server monitoring, regular security patches, bug fixes, automated database backups, and on-demand feature iterations.",
  },
  {
    question: "What project development methodology do you follow?",
    answer:
      "We operate on an Agile/Scrum framework with 2-week sprint cycles. Clients receive sprint backlog tracking, milestone updates, bi-weekly live staging demos, and complete documentation upon project handover.",
  },
  {
    question: "What quality certifications and standards back your work?",
    answer:
      "Kriscent Techno Hub is certified with CMMI Level 3 and ISO 9001:2015. Every build passes automated unit testing, manual cross-device QA, and vulnerability checks prior to production release.",
  },
];

const containerClass =
  "mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1720px] 2xl:px-10";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Google & AI Engine Validated FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative flex w-full justify-center overflow-hidden py-20 md:py-28 2xl:py-32"
    >
      {/* ── GEO/SEO JSON-LD Schema (Initial HTML Rendered) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={containerClass}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* ── Left Column: Sticky Context & Trust Signals ── */}
          <header className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                <HelpCircle className="size-3.5" aria-hidden="true" />
                Frequently Asked Questions
              </span>

              <h2
                id="faq-title"
                className="text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[44px] 2xl:text-5xl text-balance"
              >
                Clear answers to common questions about{" "}
                <span className="text-primary">Kriscent.</span>
              </h2>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
                Direct, factual details on our technical capabilities, engagement models, and delivery standards.
              </p>

              {/* Trust Credentials */}
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-card/50 p-4 shadow-sm backdrop-blur-sm">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground">Verified Standards</p>
                  <p className="text-xs text-muted-foreground">CMMI Level 3 &amp; ISO 9001:2015 Certified</p>
                </div>
              </div>

              {/* Direct Action Contact Card */}
              <div className="mt-6 rounded-2xl border border-border/80 bg-muted/40 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-foreground text-background">
                    <MessageSquare className="size-4" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-bold text-foreground">Need a custom technical roadmap?</p>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground text-pretty">
                  Connect directly with our engineering leads in Kota for scope estimation and architecture planning.
                </p>
                <a
                  href="/contact-us"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:underline hover:text-primary/80"
                >
                  Consult with an engineer
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </header>

          {/* ── Right Column: Semantic, Accessible FAQ Items ── */}
          <div className="lg:col-span-7">
            <dl className="flex flex-col space-y-4">
              {homepageFaqData.map((faq, index) => {
                const isOpen = openIndex === index;
                const formattedNumber = `0${index + 1}`;
                const questionId = `faq-q-${index}`;
                const answerId = `faq-a-${index}`;

                return (
                  <div
                    key={faq.question}
                    className={cn(
                      "group rounded-2xl border transition-all duration-300",
                      isOpen
                        ? "border-primary/40 bg-card shadow-lg ring-1 ring-primary/20"
                        : "border-border bg-card/30 hover:border-border/80 hover:bg-card/70"
                    )}
                  >
                    <dt>
                      <h3>
                        <button
                          type="button"
                          onClick={() => toggleFaq(index)}
                          aria-expanded={isOpen}
                          aria-controls={answerId}
                          id={questionId}
                          className="flex w-full items-start justify-between gap-4 p-6 text-left"
                        >
                          <div className="flex items-start gap-4">
                            <span
                              aria-hidden="true"
                              className={cn(
                                "mt-0.5 font-mono text-xs font-bold tracking-wider tabular-nums transition-colors duration-200",
                                isOpen ? "text-primary" : "text-muted-foreground/60"
                              )}
                            >
                              {formattedNumber}
                            </span>

                            <span
                              className={cn(
                                "text-base font-bold tracking-tight transition-colors duration-200 sm:text-lg",
                                isOpen ? "text-foreground" : "text-foreground/90 group-hover:text-foreground"
                              )}
                            >
                              {faq.question}
                            </span>
                          </div>

                          <span
                            className={cn(
                              "flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                              isOpen
                                ? "border-primary bg-primary text-primary-foreground rotate-180"
                                : "border-border bg-background text-muted-foreground group-hover:border-primary/50 group-hover:text-foreground"
                            )}
                          >
                            {isOpen ? (
                              <Minus className="size-4" strokeWidth={2.5} aria-hidden="true" />
                            ) : (
                              <Plus className="size-4" strokeWidth={2.5} aria-hidden="true" />
                            )}
                          </span>
                        </button>
                      </h3>
                    </dt>

                    {/* Crawler-safe SSR DOM + CSS Grid Height Reveal */}
                    <dd
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      className={cn(
                        "grid transition-all duration-300 ease-in-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-border/50 px-6 pb-6 pt-4 pl-14 sm:pl-16">
                          <p className="text-sm leading-relaxed text-muted-foreground md:text-base text-pretty">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>

        </div>
      </div>
    </section>
  );
}