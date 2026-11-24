"use client";

import { cn } from "@/lib/utils";
import { TablerIcon } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import React from 'react';

// Reusable Universal Button ------------------------------------
interface ButtonPropsTypes {
    title?: string;
    icon?: React.ElementType;
    customColor?: string;
    type?: "button" | "submit" | "reset";
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    loading?: boolean;
}


export function DefaultButton({
    title = "Button",
    icon: Icon,
    customColor,
    type = "button",
    onClick,
    disabled = false,
    loading = false // Default loading state
}: ButtonPropsTypes) {
    // Define button variants
    const baseStyles = "w-fit md:h-[50px] h-[40px] md:text-[14px] text-[12px] flex items-center gap-2 font-semibold text-nowrap justify-center md:px-6 px-4 rounded-full uppercase select-none leading-none";
    const defaultStyles = `${customColor ? customColor : "bg-primary text-white active:bg-primary hover:bg-primary"}`;
    const disabledStyles = 'bg-gray-500 text-gray-200 cursor-not-allowed';
    const loadingStyles = 'bg-blue-500 text-white cursor-not-allowed';

    // Determine the final className based on the state
    const finalClassName = `${baseStyles} ${disabled ? disabledStyles : loading ? loadingStyles : defaultStyles}`;

    return (
        <button
            type={type}
            className={finalClassName}
            onClick={disabled || loading ? undefined : onClick} // Prevent click when loading or disabled
            disabled={disabled || loading} // Disable button when loading or disabled
        >
            {loading ? (
                <LoadingSpinner className="w-4 h-4" />
            ) : (
                <>
                    {title}
                    {Icon && <Icon size={14} />}
                </>
            )}
        </button>
    );
}


// function for setting aniamtion fade fomr doun to up
export function FadeDownToUpAnimation({ children, delay, className, onClick }: { children: ReactNode, delay?: number, className?: string, onClick?: () => void }) {
    return (
        <div className={className ? className : ''} onClick={onClick} >
            {children}
        </div>
    );
}


const LoadingSpinner = ({ className }: { className?: string }) => {
    return ( // Added return statement
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("animate-spin", className)}
        >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    );
}



export const GradientBG = () => {
    return <>
        <div className='absolute w-[1050px] h-[1000px] top-0 left-0 bg-red-600 rounded-full 
        blur-[100px] opacity-10 
        translate-x-[-50%] -translate-y-1/2'
        />
        <div className='absolute w-[1000px] h-[1000px] bottom-0 right-0 bg-blue-500 rounded-full
         blur-[90px] opacity-10 
        translate-x-[50%] translate-y-1/2'
        />
    </>
}