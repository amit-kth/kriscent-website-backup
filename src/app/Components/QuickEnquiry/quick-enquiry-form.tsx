"use client";

import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { DefaultButton } from '@/app/ReusableComponents/UI';
import { ArrowRight, MessageCircle, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS_BASE_URL } from '@/lib/variables';
import Link from 'next/link';
import { SectionHeading } from '@/app/ReusableComponents/section-heading';

export interface Sparkle {
    id: string;
    x: string;
    y: string;
    color: string;
    delay: number;
    scale: number;
}

export const Sparkle: React.FC<Sparkle> = ({ id, x, y, color, delay, scale }) => {
    return (
        <motion.svg
            key={id}
            className="pointer-events-none absolute z-20"
            initial={{ opacity: 0, left: x, top: y }}
            animate={{
                opacity: [0, 1, 0],
                scale: [0, scale, 0],
                rotate: [75, 120, 150],
            }}
            transition={{ duration: 0.8, repeat: Infinity, delay }}
            width="21"
            height="21"
            viewBox="0 0 21 21"
        >
            <path
                d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
                fill={color}
            />
        </motion.svg>
    );
};

export default function QuickEnquiryForm() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);

    useEffect(() => {
        const hasShownDialog = sessionStorage.getItem('hasShownDialog');

        if (!hasShownDialog) {
            const timer = setTimeout(() => {
                setIsDialogOpen(true);
                sessionStorage.setItem('hasShownDialog', 'true');
            }, 10000);

            const generateStar = (): Sparkle => {
                const starX = `${Math.random() * 100}%`;
                const starY = `${Math.random() * 100}%`;
                const color = Math.random() > 0.5 ? "var(--color-primary)" : "#FFCF49";
                const delay = Math.random() * 2;
                const scale = Math.random() * 0.5 + 0.2;
                const id = `${starX}-${starY}-${Date.now()}`;
                return { id, x: starX, y: starY, color, delay, scale };
            };

            const initializeStars = () => {
                const newSparkles = Array.from({ length: 8 }, generateStar);
                setSparkles(newSparkles);
            };

            initializeStars();

            return () => clearTimeout(timer);
        }
    }, []);

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
            <DialogContent className="z-[100] w-[92%] max-w-[580px] overflow-hidden rounded-[26px] border border-white/10 bg-background/90 p-0 shadow-2xl backdrop-blur-xl sm:w-[86%] md:w-[70%] lg:w-[42%]">
                <DialogTitle className="sr-only">Quick enquiry</DialogTitle>

                <div className="relative">
                    <div className="h-1.5 w-full bg-primary" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

                    <button
                        onClick={handleCloseDialog}
                        className="absolute right-4 top-4 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/50 bg-background/80 text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground"
                        aria-label="Close"
                    >
                        <X className="h-4 w-4" />
                    </button>

                    <div className="relative flex flex-col items-center px-5 py-8 sm:px-6 md:px-8 md:py-9">
                        <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-primary/15 bg-background/70 shadow-sm ring-8 ring-primary/5">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
                                className="h-12 w-12 md:h-14 md:w-14"
                            >
                                <img
                                    src={`${ASSETS_BASE_URL}/tempAssets/k-blue.webp`}
                                    alt="kriscent techno hub"
                                    className="h-full w-full object-contain"
                                    loading="lazy"
                                />
                            </motion.div>

                            {sparkles.map((sparkle) => (
                                <Sparkle key={sparkle.id} {...sparkle} />
                            ))}
                        </div>

                        <div className="w-full text-center">
                            <div className="origin-top scale-[0.88] sm:scale-[0.94] md:scale-100">
                                <SectionHeading
                                    primaryHeading="Your Vision And our Expertise Brings Limitless Possibilities"
                                    highlightedString="Possibilities"
                                    isCentered
                                />
                            </div>

                            <p className="mx-auto mt-2 max-w-[470px] text-center text-sm leading-6 text-muted-foreground sm:text-[15px] md:text-base">
                                Do not let technical challenges hold your business back. Get a detailed quote for your project and discover how our proven expertise can elevate your business.
                            </p>
                        </div>

                        <div className="mt-6 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
                            <Link href="/contact">
                                <DefaultButton
                                    title="Lets Talk"
                                    icon={MessageCircle}
                                />
                            </Link>

                            <Link href="/quotation">
                                <DefaultButton
                                    title="Get Quote"
                                    icon={ArrowRight}
                                    customColor="bg-transparent text-muted-foreground font-semibold border border-border hover:bg-muted/70"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}