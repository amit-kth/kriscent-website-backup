"use client";

/**
 * ============================================================================
 * SEO + ROOT LAYOUT COMPONENT
 * ============================================================================
 * This component wraps every page on kriscent.in and is responsible for:
 *
 *  1. COMMON SEO/TRACKING TAGS  -> identical on every page (Google Ads,
 *     structured data, Facebook Pixel, Microsoft Clarity, domain verification)
 *
 *  2. DYNAMIC SEO TAGS          -> different per page, driven by the
 *     `metadata` prop (title, description, OG tags, Twitter card tags)
 *
 *  3. PAGE STRUCTURE            -> Navbar, Footer, page content, and
 *     site-wide widgets (Tawk chat, sticky side menu, toast notifications)
 *
 * IMPORTANT FOR MAINTAINERS:
 * - All tracking <Script> tags below use strategy="beforeInteractive".
 *   This strategy ONLY works reliably when used directly inside the root
 *   layout (this file, if it's wrapping the whole app). Do NOT move these
 *   scripts into separate imported components , Next.js will not guarantee
 *   they render before hydration in that case, and tools like Google Ads'
 *   tag-verification crawler may fail to detect them.
 * - If you ever add a new common tracking script, add it here, directly,
 *   following the same pattern as the existing ones.
 * ============================================================================
 */

import React from 'react';
import { PageMetadata } from './variables';
import Navbar from '@/app/Components/NavigationMenu/Navbar';
import Footer from '@/app/Components/Footer/Footer';
import { cn } from '@/app/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import TawkMessenger from './tawk';
import StickySideMenu from '@/app/Components/StickySideMenu/StickySideMenu';
import Script from 'next/script';

interface SEOProps {
    /** Per-page metadata (title, description, OG image, etc.) */
    metadata: PageMetadata;
    /** The actual page content */
    children?: React.ReactNode;
    /** When true: skip Navbar/Footer/chat widgets (used for standalone pages e.g. landing pages without site nav) */
    standaloneLayout?: boolean;
    /** Optional page-specific*/
    additionalSchema?: object | object[];
}

export function SEO({ metadata, children, standaloneLayout = false, additionalSchema }: SEOProps) {
    return (
        <>
            <head>
                {/* ------------------------------------------------------------------
                    DYNAMIC SEO (per-page) , title, description, OG/Twitter tags
                    Driven by the `metadata` prop passed from each page.
                ------------------------------------------------------------------ */}
                <DynamicSEO metadata={metadata} />

                {/* ==================================================================
                    COMMON SEO / TRACKING TAGS , identical on every page
                    ================================================================== */}

                {/* --------------------------------------------------------------
                    GOOGLE ADS CONVERSION TAG (AW-955857601)
                    Used for Google Ads conversion tracking / campaign verification.
                    DO NOT change strategy from "beforeInteractive" , Google Ads'
                    own tag-checker needs this present in the very first render
                    to mark the campaign as "configured."
                -------------------------------------------------------------- */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-955857601"
                    strategy="beforeInteractive"
                />
                <Script id="google-ads" strategy="beforeInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-955857601');
                    `}
                </Script>

                {/* --------------------------------------------------------------
                    STRUCTURED DATA (JSON-LD) , Organization + LocalBusiness
                    This is what powers Google's "knowledge panel" / rich
                    search results (business info, ratings, map link, etc).
                    Update this directly if business details change
                    (address, phone, social links, reviews).
                -------------------------------------------------------------- */}
                <Script
                    id="json-ld-microdata"
                    type="application/ld+json"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "name": "Kriscent Techno Hub Pvt. Ltd.",
                                "alternateName": "Kriscent",
                                "url": "https://www.kriscent.in/",
                                "logo": "https://kriscent.in/apple-touch-icon.png",
                                "image": "https://kriscent.in/apple-touch-icon.png",
                                "description": "Kriscent Techno Hub Private Limited is a leading IT company with 10+ years of expertise, helping startups and businesses grow with cutting-edge technology solutions. We specialize in Web Design, AI/ML Development, Digital Marketing, and App Development.",
                                "foundingDate": "2014",
                                "founder": {
                                    "@type": "Person",
                                    "name": "Kapil Gautam"
                                },
                                "telephone": "+91-894-702-7625",
                                "email": "info@kriscent.in",
                                "knowsAbout": [
                                    "Web Development",
                                    "AI & Machine Learning Development",
                                    "Digital Marketing",
                                    "Mobile App Development",
                                    "UI/UX Design",
                                    "Software Development"
                                ],
                                "hasCredential": [
                                    { "@type": "EducationalOccupationalCredential", "name": "CMMI Level 3" },
                                    { "@type": "EducationalOccupationalCredential", "name": "ISO 9001:2015" },
                                    { "@type": "EducationalOccupationalCredential", "name": "ISO 27001" }
                                ],
                                "sameAs": [
                                    "https://kriscent.com/",
                                    "https://web.facebook.com/KriscentTechnoHub",
                                    "https://twitter.com/Kriscent_KTH",
                                    "https://plus.google.com/+KriscentTechnoHub",
                                    "https://www.youtube.com/@kriscenttech",
                                    "https://play.google.com/store/apps/dev?id=8463645970358251896",
                                    "https://www.linkedin.com/company/kriscenttechnohub/",
                                    "https://in.pinterest.com/Kriscent_KTH/",
                                    "https://www.crunchbase.com/organization/kriscent-techno-hub-pvt-ltd",
                                    "https://www.instagram.com/kriscenttechnohub/",
                                    "https://github.com/Kriscent-Techno-Hub"
                                ]
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "LocalBusiness",
                                "name": "Kriscent Techno Hub Pvt. Ltd.",
                                "image": "https://kriscent.in/apple-touch-icon.png",
                                "telephone": "+91-894-702-7625",
                                "priceRange": "₹₹",
                                "openingHours": "Mo,Tu,We,Th,Fr,Sa 10:00-19:00",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "186, Agrawal Bhawan, 1st Floor Shopping Center",
                                    "addressLocality": "Kota",
                                    "addressRegion": "Rajasthan",
                                    "postalCode": "324007",
                                    "addressCountry": "IN"
                                },
                                "geo": {
                                    "@type": "GeoCoordinates",
                                    "latitude": "25.172272",
                                    "longitude": "75.8485543"
                                },
                                "hasMap": "https://www.google.com/maps/place/Kriscent+Techno+Hub+Pvt.+Ltd./@25.172272,75.8485543,17z/data=!4m12!1m6!3m5!1s0x396f84b895107939:0x1444f01d380c68f7!2sKriscent+Techno+Hub+Pvt.+Ltd.!8m2!3d25.172272!4d75.850743!3m4!1s0x396f84b895107939:0x1444f01d380c68f7!8m2!3d25.172272!4d75.850743?hl=en-US",
                                "areaServed": [
                                    { "@type": "Country", "name": "India" },
                                    { "@type": "Country", "name": "United States" },
                                    { "@type": "Country", "name": "United Kingdom" },
                                    { "@type": "Country", "name": "United Arab Emirates" },
                                    { "@type": "Country", "name": "Ireland" },
                                    { "@type": "Country", "name": "Canada" },
                                    { "@type": "Country", "name": "Australia" }
                                ],
                                "hasOfferCatalog": {
                                    "@type": "OfferCatalog",
                                    "name": "Kriscent Services",
                                    "itemListElement": [
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Web Development",
                                                "description": "Custom website and web application development services."
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "AI & ML Development",
                                                "description": "AI-driven solutions including chatbots, calling agents, and workflow automation."
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Mobile App Development",
                                                "description": "iOS, Android, and cross-platform mobile app development."
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Digital Marketing",
                                                "description": "SEO, social media, and performance marketing services."
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "UI/UX Design",
                                                "description": "User interface and experience design for web and mobile products."
                                            }
                                        }
                                    ]
                                }
                            }
                        ]),
                    }}
                />

                {/* --------------------------------------------------------------
                    FACEBOOK PIXEL (ID: 1800966246711550)
                    Tracks page views + conversion events for Facebook/Instagram
                    ad campaigns. The matching <noscript> fallback (for users
                    with JS disabled) is placed right after <body> below ,
                    do not separate these two pieces.
                -------------------------------------------------------------- */}
                <Script
                    id="fb-pixel"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            !function(f,b,e,v,n,t,s){
                                if(f.fbq)return;
                                n=f.fbq=function(){
                                    n.callMethod ?
                                        n.callMethod.apply(n,arguments) : n.queue.push(arguments)
                                };
                                if(!f._fbq)f._fbq=n;
                                n.push=n;
                                n.loaded=!0;
                                n.version='2.0';
                                n.queue=[];
                                t=b.createElement(e);
                                t.async=!0;
                                t.src=v;
                                s=b.getElementsByTagName(e)[0];
                                s.parentNode.insertBefore(t,s)
                            }(window, document, 'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '1800966246711550');
                            fbq('track', 'PageView');
                        `,
                    }}
                />

                {/* --------------------------------------------------------------
                    MICROSOFT CLARITY (ID: q52jdthw08)
                    Session recording / heatmap analytics tool.
                    Matching <noscript> fallback is below, right after <body>.
                -------------------------------------------------------------- */}
                <Script
                    id="clarity-script"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(c,l,a,r,i,t,y){
                                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                            })(window, document, "clarity", "script", "q52jdthw08");
                        `,
                    }}
                />

                {/* ── Page-specific schema (only renders if provided) ── */}
                {additionalSchema && (
                    <Script
                        id="page-specific-schema"
                        type="application/ld+json"
                        strategy="beforeInteractive"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(
                                Array.isArray(additionalSchema) ? additionalSchema : [additionalSchema]
                            ),
                        }}
                    />
                )}

                {/* --------------------------------------------------------------
                    FACEBOOK DOMAIN VERIFICATION
                    Required by Meta Business Manager to prove ownership of
                    kriscent.in. There are 2 codes here because the domain is
                    verified under 2 separate Meta Business accounts , do NOT
                    remove either unless you've confirmed with the SEO/ads
                    person that one of those accounts no longer needs access.
                -------------------------------------------------------------- */}
                <meta name="facebook-domain-verification" content="80uua1qcawdmymnvkb23mjbw14iijl" />
                <meta name="facebook-domain-verification" content="toj2e8epax36aromb1g3y3lgq1cfq5" />
            </head>

            {/* ====================================================================
                BODY , page structure + noscript fallbacks
            ==================================================================== */}
            <body className={cn("min-h-screen bg-background font-sans antialiased")}>

                {/* Facebook Pixel noscript fallback (for users with JS disabled).
                    Must stay immediately after <body> per Meta's own instructions. */}
                <noscript>
                    <img
                        height="1"
                        width="1"
                        alt="kriscent techno hub"
                        src="https://www.facebook.com/tr?id=1800966246711550&ev=PageView&noscript=1"
                        style={{ display: "none" }}
                    />
                </noscript>

                {/* Microsoft Clarity noscript fallback */}
                <noscript>
                    <img
                        height="1"
                        width="1"
                        alt="Microsoft Clarity"
                        src="https://www.clarity.ms/tag/q52jdthw08&noscript=1"
                        style={{ display: "none" }}
                    />
                </noscript>

                {/* ----------------------------------------------------------
                    MAIN PAGE STRUCTURE
                    Navbar/Footer/chat widgets are skipped entirely when
                    `standaloneLayout` is true (e.g. for minimal landing pages).
                ---------------------------------------------------------- */}
                {!standaloneLayout && <Navbar />}

                {children}

                <Toaster richColors position="bottom-center" />

                {!standaloneLayout && <Footer />}
                {!standaloneLayout && <TawkMessenger />}
                {!standaloneLayout && <StickySideMenu />}

            </body>
        </>
    );
}

/**
 * ----------------------------------------------------------------------------
 * DynamicSEO
 * ----------------------------------------------------------------------------
 * Renders the meta tags that change PER PAGE, based on the `metadata` prop
 * each page passes in (see `PageMetadata` type in ./variables).
 *
 * To update SEO for a specific page: edit that page's `metadata` object ,
 * do NOT edit this function. This function just renders whatever it's given.
 * ----------------------------------------------------------------------------
 */
function DynamicSEO({ metadata }: { metadata: PageMetadata }) {
    return (
        <>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keywords} />

            {/* Canonical URL , tells search engines the "official" URL for this page
                (important if the same content is reachable via multiple URLs) */}
            {metadata.ogUrl && <link rel="canonical" href={metadata.ogUrl} />}

            {/* Open Graph tags , control how this page looks when shared on
                Facebook, LinkedIn, WhatsApp, etc. */}
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            {metadata.ogUrl && <meta property="og:url" content={metadata.ogUrl} />}
            {metadata.ogImage && <meta property="og:image" content={metadata.ogImage} />}

            {/* Twitter Card tags , control how this page looks when shared on Twitter/X */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metadata.title} />
            <meta name="twitter:description" content={metadata.description} />
            {metadata.ogImage && <meta name="twitter:image" content={metadata.ogImage} />}
        </>
    );
}