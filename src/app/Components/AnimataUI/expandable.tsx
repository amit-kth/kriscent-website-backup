'use client'

import { HTMLAttributes, useEffect, useState, useCallback, useRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ASSETS_BASE_URL } from '@/lib/variables'
import { motion } from 'framer-motion'

interface LocationItem {
    image: string
    city: string
    address: string
    phone: string
    email: string
    mapLink: string
}

interface ExpandableProps extends HTMLAttributes<HTMLDivElement> {
    list?: LocationItem[]
    autoPlay?: boolean
}

const LOCATIONS: LocationItem[] = [
    {
        image: `${ASSETS_BASE_URL}/tempAssets/garadia-mahadev-temple1%20(1)%20(1)%201.webp?updatedAt=1725274383969`,
        city: 'Kota',
        address: '186, Agrawal Bhawan 1st Floor Shopping Center, nearby Chaupati, Kota, Rajasthan 324007, India',
        phone: '+91 89470-27625',
        email: '',
        mapLink: 'https://maps.app.goo.gl/gaTTpTMpaZYkZJQj7',
    },
    {
        image: `${ASSETS_BASE_URL}/tempAssets/jaipur%20(2)%20(1).webp?updatedAt=1737023787377`,
        city: 'Jaipur',
        address: '70/38 Patel Marg, Mansarovar Jaipur, Rajasthan-302020, India',
        phone: '+91 89470-27625',
        email: '',
        mapLink: 'https://maps.app.goo.gl/he1r6Q3EVtcNbv28A',
    },
    {
        image: `${ASSETS_BASE_URL}/tempAssets/dubai.webp`,
        city: 'UAE',
        address: 'Shams Business Center, Sharjah Media City Free Zone, Al- Messaned, Sharjah, UAE',
        phone: '',
        email: '',
        mapLink: 'https://maps.app.goo.gl/xWHjHhc3ZghWP9e47',
    },
    {
        image: `${ASSETS_BASE_URL}/tempAssets/1399.jpg?updatedAt=1732164980564`,
        city: 'UK',
        address: '128 City Road, London, United Kingdom EC1V 2NX',
        phone: '',
        email: '',
        mapLink: 'https://maps.app.goo.gl/5S76QYKkHj4NaKZT8',
    },
    {
        image: `${ASSETS_BASE_URL}/tempAssets/385.webp?updatedAt=1738734079108`,
        city: 'Ireland',
        address: '4 Curlew Road, Dublin 12. D12RH59, Ireland',
        phone: '',
        email: '',
        mapLink: 'https://maps.app.goo.gl/hJ5EZfxNKjnrbxMNA',
    },
]

export default function Expandable({
    list = LOCATIONS,
    autoPlay = true,
    className,
    ...props
}: ExpandableProps) {
    const [activeItem, setActiveItem] = useState(0)
    const [isHovering, setIsHovering] = useState(false)
    const autoPlayRef = useRef(autoPlay)

    // Preload next image for smoother transition
    useEffect(() => {
        const nextIndex = (activeItem + 1) % list.length
        if (list[nextIndex]?.image) {
            const img = new Image()
            img.src = list[nextIndex].image
        }
    }, [activeItem, list])

    // Optimized auto-play with useCallback
    const handleAutoPlay = useCallback(() => {
        if (!autoPlayRef.current || isHovering) return
        setActiveItem((prev) => (prev + 1) % list.length)
    }, [isHovering, list.length])

    useEffect(() => {
        autoPlayRef.current = autoPlay
    }, [autoPlay])

    useEffect(() => {
        if (!autoPlay) return

        const interval = setInterval(handleAutoPlay, 5000)
        return () => clearInterval(interval)
    }, [autoPlay, handleAutoPlay])

    const handleMouseEnter = useCallback(
        (index: number) => {
            setActiveItem(index)
            setIsHovering(true)
        },
        []
    )

    const handleMouseLeave = useCallback(() => {
        setIsHovering(false)
    }, [])

    return (
        <section
            className={cn('flex h-[200px] w-full gap-2 md:h-[300px]', className)}
            aria-label="Office locations gallery"
            {...props}
        >
            {list.map((item, index) => {
                const isActive = index === activeItem
                return (
                    <article
                        key={item.city}
                        className={cn(
                            'relative flex h-full w-10 min-w-10 cursor-pointer overflow-hidden rounded-[32px] transition-all duration-500 ease-out sm:w-20 md:w-40',
                            isActive && 'grow'
                        )}
                        style={{
                            willChange: 'flex-grow, width',
                        }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        role="button"
                        tabIndex={0}
                        aria-pressed={isActive}
                        aria-label={`View ${item.city} location`}
                    >
                        <img
                            src={item.image}
                            alt={`${item.city} office location`}
                            className={cn(
                                'h-full w-full object-cover transition-[filter] duration-500 ease-out',
                                isActive ? 'brightness-50' : 'brightness-100'
                            )}
                            loading="lazy"
                            decoding="async"
                            style={{
                                willChange: isActive ? 'filter' : 'auto',
                            }}
                        />

                        {isActive ? <div className='w-full h-full absolute top-0 left-0 bg-black/20' /> : null}

                        {isActive && (
                            <div className="absolute left-1/2 top-1/2 flex h-[80%] w-[80%] min-w-fit -translate-x-1/2 -translate-y-1/2 flex-col items-start justify-between text-white">
                                <motion.div
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{duration:1, delay:0.2}}
                                >
                                    <h2 className="text-paragraphFontSizeDesktop font-extrabold uppercase sm:text-tertiaryHeadingFontSize md:text-[40px]">
                                        {item.city}
                                    </h2>
                                    <Link
                                        href={item.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[12px] font-medium leading-3 transition-opacity hover:opacity-80 md:text-[20px]"
                                    >
                                        {item.address}
                                    </Link>
                                </motion.div>
                            </div>
                        )}

                        {!isActive && (
                            <p className="absolute left-0 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-90 text-[12px] font-extrabold uppercase text-white md:bottom-4 md:left-1/2 md:top-auto md:-translate-x-1/2 md:rotate-0 md:text-paragraphFontSizeMobile">
                                {item.city}
                            </p>
                        )}
                    </article>
                )
            })}
        </section>
    )
}
