"use client"

import { FuzzyText } from '@/components/magicui/fuzzy-text'
import { ASSETS_BASE_URL } from '@/lib/variables'
import Link from 'next/link'

export default function NotFound() {
    return <>
        <head></head>
        <body>
            <div className="min-h-screen flex flex-col justify-center items-center bg-primary p-4">
                <div className="flex flex-col items-center gap-4 max-w-md w-full">
                    <img
                        src={`${ASSETS_BASE_URL}/tempAssets/logokriscent.png?updatedAt=1724488738769`}
                        alt="Kriscent logo white"
                        width={160}
                        height={40}
                        className='mb-2 translate-x-2'
                    />

                    <FuzzyText
                        baseIntensity={0.2}
                        // hoverIntensity={hoverIntensity}
                        // enableHover={enableHover}
                        color='white'
                    >
                        404
                    </FuzzyText>
                    <p className="text-xl text-white mb-4">
                        Oops! Page Not Found
                    </p>

                    <div className="flex justify-center space-x-4">
                        <Link
                            href="/"
                            className="px-4 py-2 bg-white text-black rounded-md transition-colors duration-300 inline-block"
                        >
                            Go to Homepage
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="px-4 py-2 bg-transparent border border-white text-white rounded-md hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </body>
    </>
}