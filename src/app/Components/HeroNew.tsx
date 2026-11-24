"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { GlassPanel } from "./glass-panel";
import { ASSETS_BASE_URL } from "@/lib/variables";
import { RatingStars } from "./Footer/Footer";

const ratings = [
    {
        title: "Google",
        href: 'https://g.co/kgs/rFi9C6c',
        platformLogo: `${ASSETS_BASE_URL}/tempAssets/Google_Icons-09-512%202.png?updatedAt=1724757228086`,
        starColor: "text-yellow-400",
        starCount: 4.2
    },
    {
        title: "Ambition Box",
        href: 'https://www.ambitionbox.com/overview/kriscent-techno-hub-overview',
        platformLogo: `${ASSETS_BASE_URL}/tempAssets/ab-brand%202.png?updatedAt=1724757228073`,
        starColor: "text-indigo-400",
        starCount: 4.6
    },
    {
        title: "Clutch",
        href: "https://clutch.co/profile/kriscent-techno-hub#highlights",
        platformLogo: `${ASSETS_BASE_URL}/tempAssets/clutch.png?updatedAt=1724492726508`,
        starColor: "text-red-600",
        starCount: 5
    }
]

const Hero = () => {
    const reduceMotion = useReducedMotion();

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: reduceMotion ? 0 : 14,
        },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: reduceMotion ? 0 : index * 0.1,
                duration: reduceMotion ? 0 : 0.62,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        }),
    };

    return (
        <section
            aria-labelledby="hero-title"
            className={[
                "relative isolate w-full overflow-hidden bg-foreground text-primary-foreground",
                "min-h-[560px] sm:min-h-[600px] lg:min-h-[634px]",
                "xl:min-h-[680px] 2xl:min-h-[760px]",
            ].join(" ")}
        >
            {/* Background image */}
            <Image
                src={`${ASSETS_BASE_URL}/tempAssets/revamp/hero-k.webp`}
                alt=""
                fill
                priority
                quality={100}
                sizes="100vw"
                className="pointer-events-none absolute inset-0 -z-30 object-cover"
            />

            {/* Blue light texture layer */}
            <div
                aria-hidden="true"
                className={[
                    "absolute inset-0 -z-10",
                    "bg-[radial-gradient(circle_at_78%_20%,rgba(60,115,255,0.42),transparent_32%),radial-gradient(circle_at_86%_72%,rgba(15,45,160,0.34),transparent_36%)]",
                    "2xl:bg-[radial-gradient(circle_at_74%_18%,rgba(60,115,255,0.42),transparent_30%),radial-gradient(circle_at_88%_74%,rgba(15,45,160,0.34),transparent_34%)]",
                ].join(" ")}
            />

            {/* Right-side K image */}
            <motion.div
                aria-hidden="true"
                initial={reduceMotion ? false : { opacity: 0, x: 34, scale: 0.98 }}
                animate={reduceMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
                transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className={[
                    "pointer-events-none absolute z-0",
                    "-right-[34%] bottom-[-10%] h-[390px] w-[640px]",
                    "sm:-right-[24%] sm:h-[470px] sm:w-[760px]",
                    "md:-right-[16%] md:bottom-[-12%] md:h-[560px] md:w-[900px]",
                    "lg:-right-[8%] lg:bottom-[-16%] lg:h-[650px] lg:w-[980px]",
                    "xl:-right-[2%] xl:h-[690px] xl:w-[1040px]",
                    "2xl:right-[2%] 2xl:bottom-[-12%] 2xl:h-[820px] 2xl:w-[1220px]",
                ].join(" ")}
            >
            </motion.div>

            <div
                className={[
                    "relative z-10 mx-auto flex w-full max-w-[1400px] items-center",
                    "min-h-[560px] px-4 sm:min-h-[600px] sm:px-6",
                    "lg:min-h-[634px] lg:px-8",
                    "xl:min-h-[680px]",
                    "2xl:min-h-[760px] 2xl:max-w-[1680px] 2xl:px-10",
                ].join(" ")}
            >
                <div className="w-full max-w-[760px] pt-16 sm:pt-20 lg:pt-10 2xl:max-w-[920px]">
                    <motion.div
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="mb-6 flex flex-wrap items-center gap-x-7 gap-y-3 sm:mb-2 2xl:mb-8 2xl:gap-x-9"
                    >
                        {ratings.map((item, itemIndex) => (
                            <Link key={itemIndex} href={item.href} target='_blank' className="gap-3 pb-2 flex items-center justify-start rounded-xl cursor-pointer bg-transparent"
                            // style={{ backgroundColor: "transparent" }}
                            >
                                <div className="w-[20px] h-[20px] relative">
                                    <img src={item.platformLogo} alt={item.title || "Platform logo"} className='w-full h-full object-cover' />
                                </div>
                                <div className={`flex gap-px`}>
                                    <RatingStars rating={item.starCount} size={13} color={item.starColor} />
                                </div>
                            </Link>
                        ))}
                    </motion.div>

                    <motion.h1
                        id="hero-title"
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className={[
                            "max-w-[700px] text-balance font-sans font-bold text-primary-foreground",
                            "text-[40px] leading-[1.04] tracking-[-0.035em]",
                            "sm:text-[50px]",
                            "md:text-[58px]",
                            "lg:text-[60px]",
                            "2xl:max-w-[900px] 2xl:text-[78px] 2xl:leading-[1.02] 2xl:tracking-[-0.045em]",
                        ].join(" ")}
                    >
                        AI-First Solutions
                        <br className="hidden sm:block" />for Global Businesses
                    </motion.h1>

                    <motion.p
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className={[
                            "mt-5 max-w-[690px] text-pretty font-medium text-primary-foreground/85",
                            "text-[17px] leading-[1.32]",
                            "sm:text-[18px]",
                            "md:text-[19px]",
                            "2xl:mt-6 2xl:max-w-[820px] 2xl:text-[23px] 2xl:leading-[1.38]",
                        ].join(" ")}
                    >
                        Empowering Fortune-scale companies across Healthcare, Finance,
                        Manufacturing &amp; Logistics to scale through AI-driven innovation.
                    </motion.p>

                    <motion.div
                        custom={3}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center 2xl:mt-8 2xl:gap-4"
                    >
                        <Link
                            href="/contact"
                            aria-label="Book a strategy call with Kriscent Techno Hub"
                            className={[
                                "group inline-flex w-full rounded-[16px] sm:w-auto",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-foreground",
                            ].join(" ")}
                        >
                            <GlassPanel className="inline-flex h-14 w-full items-center justify-center px-7">
                                Book a Strategy Call
                            </GlassPanel>
                        </Link>

                        <Link
                            href="/ai-solutions"
                            aria-label="Explore Kriscent services"
                            className={[
                                "inline-flex h-14 w-full items-center justify-center rounded-[16px]",
                                "bg-primary-foreground px-7 text-[15px] font-bold text-foreground",
                                "transition duration-200 ease-out",
                                "hover:opacity-90",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-foreground",
                                "active:scale-[0.98]",
                                "sm:w-auto",
                                "2xl:h-16 2xl:px-9 2xl:text-[17px]",
                            ].join(" ")}
                        >
                            Explore Services
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;