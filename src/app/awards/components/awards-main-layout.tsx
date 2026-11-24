"use client";

import HomeAwards from '@/app/Components/AwardsAndCertifications/HomeAwards/HomeAwards';
import Testimonials from '@/app/Components/Testimonials/Testimonials';
import ContactSection from '@/app/contact/components/contact-section';
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { Award, X, Maximize2 } from 'lucide-react';
import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogClose,
} from '@/components/ui/dialog';
import { Award as AwardType, awards } from './awards-data';

export default function AwardsMainLayout() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openDialog = (largeImgUrl: string) => {
        setSelectedImage(largeImgUrl);
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="flex w-full flex-col overflow-x-hidden md:mt-14 mt-16">
            <HomeAwards />

            {/* all awards listings */}
            <section aria-labelledby="awards-title" className="flex w-full justify-center">
                <div className="mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 md:py-20 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
                    <SectionHeading
                        primaryHeading={`Kriscent's Achievements`}
                        secondaryHeading="Awards"
                        icon={Award}
                        markPrimaryHeadingAsH1Tag
                        isCentered
                        highlightedString="Achievements"
                    />

                    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
                        {awards.map((award, index) => (
                            <div
                                key={index}
                                onClick={() => award.largeImgUrl && openDialog(award.largeImgUrl)}
                                className={award.largeImgUrl ? "cursor-pointer" : ""}
                            >
                                <div className="group relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:bg-primary/10 hover:shadow-lg">
                                    {/* award image */}
                                    <div className="mb-3 flex h-40 w-40 items-center justify-center rounded-full transition duration-300 group-hover:scale-105">
                                        <img
                                            src={award.imgUrl}
                                            alt={award.title || "Award photo"}
                                            loading="lazy"
                                            className="h-full w-full object-contain"
                                        />
                                    </div>

                                    <p className="text-center text-base font-semibold leading-tight text-foreground md:text-lg">
                                        {award.title}
                                    </p>

                                    {/* zoom hint if clickable */}
                                    {award.largeImgUrl && (
                                        <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition duration-300 group-hover:opacity-100">
                                            <Maximize2 className="size-3.5" />
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials />

            <div className="mt-20 bg-[#f5f5f5]">
                <ContactSection />
            </div>

            {/* Dialog for large image */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="flex h-[85vh] w-[92%] max-w-3xl items-center justify-center overflow-hidden rounded-2xl bg-background p-0 shadow-2xl">
                    <DialogTitle className="sr-only">Award image</DialogTitle>
                    <DialogClose
                        onClick={closeDialog}
                        className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-foreground/10 text-foreground transition hover:bg-foreground/20"
                        aria-label="Close"
                    >
                        <X size={18} />
                    </DialogClose>
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Kriscent Techno Hub award"
                            loading="lazy"
                            className="max-h-full w-full object-contain p-6"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
