'use client';

import React from 'react';
import { ASSETS_BASE_URL } from '@/lib/variables';
import Link from 'next/link';

const ComingSoonPage = () => {
    return <>
        <head>
            <meta name="robots" content="noindex, nofollow" />
        </head>
        <body>
            <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${ASSETS_BASE_URL}/tempAssets/comingSoonBackground.webp)` }}>
                <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg text-center">
                    <h1 className="text-5xl font-bold text-primary mb-4">Coming Soon!</h1>
                    <p className="text-lg text-gray-600 mb-6">We are working hard to bring you something amazing. Stay tuned!</p>

                    <p className="mt-4">
                        <Link href="/" className="text-primary hover:underline">Back to Home</Link>
                    </p>
                </div>
            </div>
        </body>
    </>
};

export default ComingSoonPage;