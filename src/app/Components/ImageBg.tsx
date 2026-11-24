"use client"

// Optimized background image component with lazy loading
export const ImageBackground = ({ src, className, alt, dimmingOnMobile = true }: { src: string; className?: string; alt: string; dimmingOnMobile?: boolean }) => {
    return (
        <div className="absolute inset-0 will-change-transform">
            <img
                src={src || "/placeholder.svg"}
                alt={alt}
                className={`w-full h-full object-cover ${className || ""}`}
                loading="lazy"
                decoding="async"
                draggable="false"
            />
            {/* Overlay for better text readability on mobile */}
            {dimmingOnMobile && <div className="absolute inset-0 bg-black/80 md:hidden block will-change-opacity" aria-hidden="true" />}
        </div>
    )
}

