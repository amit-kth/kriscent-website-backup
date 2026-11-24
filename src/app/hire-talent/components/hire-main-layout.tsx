"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import HireHero from "./hire-hero";
import StatsBento from "./hire-stats-bento";
import WhatYoullGet from "./hire-offerings";
import AIEraBand from "./hire-ai-era";
import GlobalTalent from "./hire-global-talent";
import HowItWorks from "./hire-process";
import BenefitsBand from "./hire-benefits";
import Automation from "./hire-automation";
import QuotationCTA from "./hire-quotation";


export default function HireDevMainLayout() {
    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden">
            <HireHero />
            <StatsBento />
            <WhatYoullGet />
            <AIEraBand />
            <GlobalTalent />
            <HowItWorks />

            <BenefitsBand />
            <Automation />
            <QuotationCTA />
        </main>
    );
}