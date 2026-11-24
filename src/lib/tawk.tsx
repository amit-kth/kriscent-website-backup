'use client';

import { useEffect, type JSX } from 'react';

declare global {
    interface Window {
        Tawk_API?: any;
        Tawk_LoadStart?: Date;
    }
}

const TawkMessenger = (): JSX.Element | null => {
    useEffect(() => {
        const loadTawk = () => {
            try {
                // Initialize Tawk_API
                window.Tawk_API = window.Tawk_API || {};
                window.Tawk_LoadStart = new Date();

                // Load Tawk script
                const script = document.createElement('script');
                script.async = true;
                script.src = 'https://embed.tawk.to/5b6d9233afc2c34e96e77468/default';
                script.setAttribute('crossorigin', '*');

                document.body.appendChild(script);
            } catch (error) {
                console.error('Error loading Tawk.to:', error);
            }
        };

        // Delay loading the Tawk script
        const timeoutId = setTimeout(loadTawk, 1000); // Delay of 1000ms (1 second)

        return () => {
            clearTimeout(timeoutId);
            // Cleanup on unmount
            try {
                const tawkScript = document.querySelector('script[src*="tawk.to"]');
                if (tawkScript) {
                    tawkScript.remove();
                }

                if (window.Tawk_API) {
                    delete window.Tawk_API;
                }
                if (window.Tawk_LoadStart) {
                    delete window.Tawk_LoadStart;
                }
            } catch (error) {
                console.error('Error cleaning up Tawk.to:', error);
            }
        };
    }, []);

    return null;
};

export default TawkMessenger;