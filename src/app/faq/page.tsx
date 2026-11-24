"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ImageBackground } from "../Components/ImageBg";
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { FileQuestion } from "lucide-react";
import { faqData } from "./faqData";
import { SEO } from "@/lib/seo";
import { ASSETS_BASE_URL, metadata } from "@/lib/variables";

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
        },
    })),
};

export default function Faq() {
    return <>
        <SEO metadata={metadata.faqPage} additionalSchema={faqSchema}>
            <main className="relative w-full overflow-hidden bg-background">
                {/* Hero , refined editorial with glass overlay */}
                <div className='relative w-full h-[60vh] bg-foreground overflow-hidden'>
                    <ImageBackground src={`${ASSETS_BASE_URL}/tempAssets/heroSections/faq.webp`} alt="faq hero section image kriscent techno hub" />
                    {/* Subtle dark overlay for text legibility */}
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[700px] 2xl:w-[1000px] flex flex-col items-center justify-center z-10 px-4'>
                        <SectionHeading
                            primaryHeading='Frequently Asked Questions'
                            secondaryHeading='FAQ'
                            icon={FileQuestion}
                            isCentered
                            highlightedString='Questions'
                            customColor='text-white'
                            glowEffect={false}
                            markPrimaryHeadingAsH1Tag={true}
                        />
                    </div>
                </div>

                {/* FAQ content , premium editorial cards */}
                <section className="mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-8 lg:px-12 2xl:max-w-[1720px] 2xl:px-10">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqData.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index + 1}`}
                                className="rounded-3xl bg-card border border-border/20 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-border/40 focus-within:ring-2 focus-within:ring-primary/20 focus-within:outline-none"
                            >
                                <AccordionTrigger className="px-6 py-5 sm:px-8 text-sm sm:text-base md:text-lg font-bold tracking-tight text-foreground hover:no-underline text-left hover:text-foreground/90 transition-colors focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-6 sm:px-8 text-[15px] leading-[1.75] text-muted-foreground text-left">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>
            </main>
        </SEO>
    </>
}
