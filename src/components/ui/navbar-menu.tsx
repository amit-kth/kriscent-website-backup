"use client";
import React, { ReactNode, useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ProductItemChildrensTypes } from "@/app/Components/NavigationMenu/navbarTypes";
import { navLinksVariants } from "@/app/Components/NavigationMenu/navbarConfigs";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const transition = {
    type: "spring",
    mass: 0.2,
    damping: 11.1,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
    scrolled,
    isHome,
    target
}: {
    setActive: (item: string | null) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
    scrolled: boolean;
    isHome: boolean;
    target?: string
}) => {
    const [menuPosition, setMenuPosition] = useState({ top: 0 });
    const menuRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const router = useRouter()

    useEffect(() => {
        const updatePosition = () => {
            if (menuRef.current) {
                const rect = menuRef.current.getBoundingClientRect();
                setMenuPosition({ top: rect.bottom });
            }
        };

        updatePosition();
        window.addEventListener('resize', updatePosition);
        return () => window.removeEventListener('resize', updatePosition);
    }, [scrolled, isHome]);

    const handleMouseEnter = () => {
        setIsHovering(true);
        setActive(item);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        // Use a timeout to allow moving to submenu
        setTimeout(() => {
            if (!isHovering) {
                setActive(null);
            }
        }, 200);
    };

    const isOpen = active === item && isHovering;

    return (
        <div
            ref={menuRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
            onClick={() => { target && router.push(target) }}
        >
            <motion.div
                transition={{ duration: 0.3 }}
                className={scrolled || !isHome ? navLinksVariants.navLinks.offHome : navLinksVariants.navLinks.onHome}
            >
                {/* main link title */}
                <Link href={target || ""} className="flex gap-1 items-center text-nowrap">
                    {item}
                    {children && (
                        <ChevronDown
                            className={cn(
                                "size-3.5 transition-transform duration-300",
                                isOpen && "rotate-180"
                            )}
                        />
                    )}
                </Link>

                {/* hovering small dot below the link */}
                {isOpen && <div className={`w-4 h-1 rounded-full absolute bottom-2 left-1/2 -translate-x-1/2 ${scrolled ? "bg-white" : "bg-primary"}`}></div>}
            </motion.div>

            {/* main dropdown container , portaled to body so the navbar's
                backdrop-filter doesn't become its containing block (which
                broke the fixed positioning + blur once scrolled) */}
            {children && isOpen && createPortal(
                <motion.div
                    transition={transition}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    style={{
                        position: 'fixed',
                        top: `${menuPosition.top - 1}px`,
                        left: 0,
                        right: 0,
                        zIndex: 1000
                    }}
                    className="flex justify-center items-start pt-5 bg-[#00000067] w-screen h-screen backdrop-blur-md"
                >
                    <motion.div
                        transition={transition}
                        layoutId="active"
                        className="text-foreground w-full max-w-7xl rounded-2xl overflow-hidden"
                        onMouseLeave={() =>
                            setActive(null)
                        }
                    >
                        <div className="container px-0">
                            <motion.div layout>
                                {children}
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>,
                document.body
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav className="relative flex justify-center">
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    childrens,
    href,
    src,
    icon
}: {
    title: string;
    childrens: ProductItemChildrensTypes[];
    href: string;
    src?: string;
    icon?: ReactNode
}) => {
    return (
        <Link href={href} className="flex space-x-2">
            <div>
                <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    {/* showing icons if any otherwise showing only text */}
                    {icon ? icon : ""}{title}
                </h4>
                <div className="flex flex-col items-start gap-1">
                    {childrens && childrens.map((child, index) => {
                        return <div key={index}>
                            <p className="text-gray-300 text-nowrap hover:text-primary uppercase text-paragraphFontSizeMobile">{child.linkTitle}</p>
                        </div>
                    })}
                </div>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, href }: { children: ReactNode, href: string }) => {
    return (
        <Link
            href={href}
            className="text-foreground text-nowrap hover:text-primary uppercase text-paragraphFontSizeMobile"
        >
            {children}
        </Link>
    );
};
