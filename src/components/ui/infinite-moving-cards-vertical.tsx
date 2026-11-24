"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Link } from "lucide-react";
import { ProjectData } from "@/app/portfolio/components/projectData";

interface ProjectCard {
  title: string;
  description: string;
  viewLink?: string;
  cardColor?: string;
  projectImage?: string;
}

interface VerticalInfiniteMovingCardsProps {
  items: ProjectData[];
  direction: "up" | "down";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const VerticalInfiniteMovingCards: React.FC<VerticalInfiniteMovingCardsProps> = ({
  items,
  direction = "up",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.onclick = (item as HTMLElement).onclick;
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
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "up" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const speedMap = { fast: "20s", normal: "40s", slow: "80s" };
      containerRef.current.style.setProperty("--animation-duration", speedMap[speed]);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 h-[800px] overflow-hidden mask-[linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-col min-h-full shrink-0 gap-4 py-4 w-full",
          start && "animate-scroll-vertical",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className={`w-full h-[360px] min-h-[360px] rounded-lg shadow-md p-8 relative group cursor-pointer overflow-hidden bg-primary`}
            // style={{ '--card-color': item.cardColor || '#ED3237' } as React.CSSProperties}
            onClick={() => item.websites?.[0]?.url && window.open(item.websites[0].url, '_blank')}
          >
            {/* <img src={item.webCoverImage} alt={item.title} className="w-full h-full object-cover absolute top-0 left-0 opacity-10" loading='lazy' /> */}
            <p className={`text-2xl font-bold mb-3 group-hover:scale-105 transition-all duration-75 text-white`}>{item.title}</p>
            <p className="text-white text-wrap text-base group-hover:scale-105 transition-all duration-75">
              {item.desc.length > 250 ? `${item.desc.slice(0, 250)}...` : item.desc}
            </p>
            <ArrowUpRight className="absolute bottom-4 right-4 transition-all group-hover:rotate-45 text-white" />
          </li>
        ))}
      </ul>
    </div>
  );
};
