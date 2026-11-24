"use client";

import React from 'react'
import AwardsMainLayout from './components/awards-main-layout';
import { metadata } from '@/lib/variables';
import { SEO } from '@/lib/seo';

export default function AwardsPage() {
    return <>
        <SEO metadata={metadata.awardsPage} >
            <AwardsMainLayout />
        </SEO>
    </>
}
