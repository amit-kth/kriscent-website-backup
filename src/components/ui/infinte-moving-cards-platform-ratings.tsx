"use client";

import { cn } from "@/lib/utils";
import { ASSETS_BASE_URL } from "@/lib/variables";
import { IconStarFilled } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCardsPlatformRatings = ({
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const PlatformRatingsContent = [
        {
            platformLogo: `${ASSETS_BASE_URL}/tempAssets/clutch.png?updatedAt=1724492726508`,
            starCount: 5,
            starColor: "star-color-clutch",
            platformTitle: "Clutch",
            backgroundColor: "#ffffff",
        },
        {
            platformLogo: `${ASSETS_BASE_URL}/tempAssets/google.png`,
            starCount: 5,
            starColor: "star-color-google",
            backgroundColor: "#ffffff",
            platformTitle: "Google",
        },
        {
            platformLogo: `${ASSETS_BASE_URL}/tempAssets/ambition.png`,
            starCount: 5,
            starColor: "star-color-ambition",
            backgroundColor: "#ffffff",
            platformTitle: "Ambition Box",
        },
        {
            platformLogo: `${ASSETS_BASE_URL}/tempAssets/glassdoor.png`,
            starCount: 5,
            starColor: "star-color-glassdoor",
            backgroundColor: "#ffffff",
            platformTitle: "Glassdoor",
        },
        {
            platformLogo: `${ASSETS_BASE_URL}/tempAssets/meta-icon.webp`,
            starCount: 5,
            starColor: "star-color-meta",
            backgroundColor: "#ffffff",
            platformTitle: "Meta",
        },
        {
            platformLogo: `${ASSETS_BASE_URL}/tempAssets/justdial.webp`,
            starCount: 5,
            starColor: "star-color-justdial",
            backgroundColor: "#ffffff",
            platformTitle: "JustDial",
        }
    ]
    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {PlatformRatingsContent.map((item, idx) => (
                    <div key={idx} className="gap-3 p-5 flex items-center justify-center rounded-xl bg-transparent">
                        <div className="w-[40px] h-[40px] relative">
                            <img src={item.platformLogo} alt={item.platformTitle || "Platform logo"} className="w-full h-full object-cover" loading='lazy' />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <p className="text-xl font-bold">{item.platformTitle}</p>
                            {/* stars */}
                            <div className={`flex gap-px`}>
                                {[...Array(item.starCount)].map((_, index) => (
                                    <IconStarFilled size={12} key={index} className={item.starColor} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};
