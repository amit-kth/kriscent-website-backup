"use client";

import { Suspense } from 'react'; // 1. Import Suspense
import QuotationHeroSection from './components/quotation-hero-section';
import QuotationForm from './components/quotation-form';
import Testimonials from '../Components/Testimonials/Testimonials';
import { SEO } from '@/lib/seo';
import { metadata } from '@/lib/variables';

export default function QuotationPage() {
    return <SEO metadata={metadata.quotationPage}>
        <main className='relative'>
            <QuotationHeroSection />
            <Suspense fallback={<QuotationFormSkeleton />}>
                <QuotationForm />
            </Suspense>
            <Testimonials />
        </main>
    </SEO>
}

// 3. Simple skeleton to prevent layout jump while loading
function QuotationFormSkeleton() {
    return (
        <div className="w-full flex justify-center md:container py-20">
            <div className="md:w-3/4 w-full h-150 bg-slate-50 animate-pulse rounded-3xl border border-slate-100" />
        </div>
    );
}