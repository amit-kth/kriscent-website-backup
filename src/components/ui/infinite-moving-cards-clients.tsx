"use client";

import { clientsType } from "@/app/clients/components/clientsData";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: clientsType[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const duplicatedItems = [...items, ...items];

  const animationDuration =
    speed === "fast" ? "50s" : speed === "normal" ? "100s" : "150s";
  const animationDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className,
      )}
      style={
        {
          "--animation-duration": animationDuration,
          "--animation-direction": animationDirection,
        } as React.CSSProperties
      }
    >
      <ul
        className={cn(
          "flex min-w-full shrink-0 w-max flex-nowrap gap-20 animate-scroll py-4",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {mounted &&
          duplicatedItems.map((item, idx) => (
            <li
              key={`${item.tagline}-${idx}`}
              className="w-fit h-10 flex justify-center items-center shrink-0"
            >
              <img
                src={item.logo}
                alt="clients of kriscent"
                className="transition-all h-full w-full object-contain mix-blend-multiply"
                loading="lazy"
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
