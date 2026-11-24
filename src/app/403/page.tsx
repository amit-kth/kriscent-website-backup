"use client";

import Link from 'next/link'

export default function Forbidden() {
    return <>
        <head>
            <meta name="robots" content="noindex, nofollow" />
        </head>
        <body>
            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
                <div className="text-center max-w-md w-full">
                    <h1 className="text-6xl font-bold text-gray-800 mb-4">
                        403
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Forbidden
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link
                            href="/"
                            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-300 inline-block"
                        >
                            Go to Homepage
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-300"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </body>
    </>
}