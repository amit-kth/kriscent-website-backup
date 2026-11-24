"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface FlipCardProps {
    children: React.ReactNode;
    flipDirection: "horizontal" | "vertical";
    className?: string;
}

export default function FlipCard({ children, flipDirection, className }: FlipCardProps) {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    useEffect(() => {
        // Initial flip on page load
        controls.start({
            rotateY: flipDirection === "horizontal" ? 180 : 0,
            rotateX: flipDirection === "vertical" ? 180 : 0
        });

        // Flip when in view
        if (isInView) {
            controls.start({
                rotateY: 0,
                rotateX: 0
            });
        } else {
            controls.start({
                rotateY: flipDirection === "horizontal" ? 180 : 0,
                rotateX: flipDirection === "vertical" ? 180 : 0
            });
        }
    }, [controls, isInView, flipDirection]);

    const initialClass = flipDirection === "horizontal" ? "flipcard-initial-horizontal" : "flipcard-initial-vertical";

    return (
        <motion.div
            ref={ref}
            className={`relative w-full h-full ${className} flipcardBase ${initialClass}`}
            animate={controls}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            {/* back of the card */}
            <div
                className="absolute w-full h-full bg-transparent rounded-[26px] flicard-back"
            />

            {/* front of the card */}
            <div
                className={`absolute w-full h-full flicard-back ${flipDirection === "horizontal" ? "rotateYzero" : "rotateXzero"}`}
            >
                {children}
            </div>
        </motion.div>
    );
}