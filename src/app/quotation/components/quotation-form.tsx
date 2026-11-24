"use client";

import React, { useState, useRef, useEffect } from 'react'
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SolutionsLinks } from '@/app/Components/NavigationMenu/navbarConfigs';
import { DefaultButton } from '@/app/ReusableComponents/UI';
import { SendHorizontal, Check, Globe, Smartphone, Sparkles, Users, ShieldCheck } from 'lucide-react';
import { PhoneInput } from '@/components/ui/phone-input';
import { API_ENDPOINT } from "@/lib/variables";
import { Country, getCountryCallingCode } from "react-phone-number-input";
import CaptchaDialog from '@/lib/captcha';
import { AutoCloseDialog } from '@/lib/success-dialog';

interface CaptchaRef {
    verifyCaptcha: () => boolean;
}

const SERVICES = [
    { key: "web-design-dev", title: "Web design & dev", icon: Globe, iconColor: "blue-500", iconBg: "bg-blue-50" },
    { key: "app-design-dev", title: "App design & dev", icon: Smartphone, iconColor: "violet-500", iconBg: "bg-violet-50" },
    { key: "ai-ml-services", title: "AI & ML services", icon: Sparkles, iconColor: "amber-500", iconBg: "bg-amber-50" },
    { key: "hire-resources", title: "Hire resources", icon: Users, iconColor: "emerald-500", iconBg: "bg-emerald-50" },
] as const;

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" })
        .max(50, { message: "Name must not exceed 50 characters" })
        .regex(/^[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/, "Name can only contain letters"),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string()
        .min(13, { message: "Phone number must be greater than 10 digits" })
        .max(18, { message: "Phone number must be less than 15 digits" }),
    companyName: z.string().optional(),
});

/* ── Animation variants ── */
const cardEntry = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
};

const sectionStagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
};

const sectionItem = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
};

export default function QuotationForm() {
    const searchParams = useSearchParams();

    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState<Country>("IN");
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const captchaRef = useRef<CaptchaRef>(null);

    const form = useForm<z.infer<typeof formSchema>>({ resolver: zodResolver(formSchema) });

    const [selectedOption, setSelectedOption] = useState<string>('services');
    const [selectedServices, setSelectedServices] = useState<string>('');
    const [serviceDescription, setServiceDescription] = useState<string>('');
    const [projectDescription, setProjectDescription] = useState<string>('');
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const serviceParam = searchParams.get("service");
        if (!serviceParam) return;
        const matched = SERVICES.find((s) => s.key === serviceParam);
        if (matched) {
            setSelectedOption("services");
            setSelectedServices(matched.title);
        }
    }, [searchParams]);

    const submitDataToAPI = async (values: z.infer<typeof formSchema>) => {
        setLoading(true);
        try {
            if (captchaRef.current && !captchaRef.current.verifyCaptcha()) {
                toast.error("Please verify the captcha");
                return;
            }

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const formData = {
                name: values.name.charAt(0).toUpperCase() + values.name.slice(1),
                email: values.email,
                phone: values.phone.replace(/(\+\d{2})(\d+)/, '$1-$2'),
                countryCode: getCountryCallingCode(country),
                companyName: values.companyName ? values.companyName.charAt(0).toUpperCase() + values.companyName.slice(1) : "Not Available",
                serviceType: selectedOption,
                serviceDetail: selectedOption === "other" ? "other" : selectedServices,
                aboutProject: selectedOption === "other" ? projectDescription : serviceDescription,
            };

            const raw = JSON.stringify(formData);
            const requestOptions = { method: "POST", headers: myHeaders, body: raw };

            const response = await fetch(`${API_ENDPOINT}/quotation`, requestOptions);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            await response.json();
            toast.success("Query submitted successfully");
            form.reset();
            setServiceDescription('');
            showThankYouMessage();
            setCaptchaVerified(false);
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form.", {
                description: error instanceof Error ? error.message : "Unknown error",
            });
        } finally {
            setLoading(false);
        }
    };

    function onSubmit(values: z.infer<typeof formSchema>) {
        if (selectedServices === "" && selectedOption !== "other") {
            toast.error("Please select a service");
            return
        }
        if (serviceDescription.trim() === "" && selectedOption !== "other") {
            toast.error("Please describe your project shortly");
            return
        }
        try { submitDataToAPI(values) }
        catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    const handleServiceSelect = (service: string) => {
        setSelectedServices(selectedServices === service ? '' : service);
    };

    const handleTabChange = (option: string) => {
        setSelectedOption(option);
        setSelectedServices('');
        setServiceDescription('');
        if (option !== 'other') setProjectDescription('');
    };

    const showThankYouMessage = () => { setOpen(true) }

    return (
        <div className='relative'>
            <div className='w-full flex justify-center md:container'>
                <div className='relative md:w-3/4 w-full h-fit -translate-y-20'>

                    {/* Main card , entry animation */}
                    <motion.div
                        variants={cardEntry}
                        initial="hidden"
                        animate="visible"
                        className='relative bg-white rounded-4xl md:p-10 lg:p-12 p-6 md:shadow-[0_25px_70px_-20px_rgba(15,23,42,0.18)] shadow-none border border-slate-100/80 overflow-hidden'
                    >
                    

                        {/* Header , staggered entry */}
                        <motion.div
                            variants={sectionStagger}
                            initial="hidden"
                            animate="visible"
                            className="relative mb-8"
                        >
                            <motion.div
                                variants={sectionItem}
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-5"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                                </span>
                                <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                                    Free consultation
                                </span>
                            </motion.div>
                            <motion.h2
                                variants={sectionItem}
                                className='text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-[1.1]'
                            >
                                Get a perfect quote
                            </motion.h2>
                            <motion.p
                                variants={sectionItem}
                                className="mt-3 text-base text-slate-500 max-w-md leading-relaxed"
                            >
                                Tell us about your project. We&apos;ll respond within 24 hours.
                            </motion.p>
                        </motion.div>

                        <Form {...form}>
                            <motion.form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="relative flex flex-col gap-7"
                                variants={sectionStagger}
                                initial="hidden"
                                animate="visible"
                            >

                                {/* ── SECTION 1 ── */}
                                <motion.div variants={sectionItem} className="space-y-4">
                                    <SectionLabel number={1} label="Your details" />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm font-semibold text-slate-700">Full name</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="John Doe"
                                                            type="text"
                                                            className="h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-slate-400 text-base bg-white"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-xs" />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="companyName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm font-semibold text-slate-700 inline-flex items-center gap-2">
                                                        Company
                                                        <span className="text-xs font-medium text-slate-400 normal-case">(optional)</span>
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Your company"
                                                            type="text"
                                                            className="h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-slate-400 text-base bg-white"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-xs" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm font-semibold text-slate-700">Email</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="you@company.com"
                                                            type="email"
                                                            className="h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-slate-400 text-base bg-white"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-xs" />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm font-semibold text-slate-700">Phone</FormLabel>
                                                    <FormControl>
                                                        <div className="[&_input]:h-12 [&_input]:rounded-xl [&_input]:border-slate-200 [&_input]:focus:border-primary [&_input]:focus:ring-2 [&_input]:focus:ring-primary/10 [&_input]:transition-all [&_input]:placeholder:text-slate-400 [&_input]:text-base [&_input]:bg-white">
                                                            <PhoneInput
                                                                value={field.value}
                                                                onChange={field.onChange}
                                                                defaultCountry="IN"
                                                                onCountryChange={(country) => setCountry(country || "IN")}
                                                                placeholder="Enter phone number"
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage className="text-xs" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </motion.div>

                                {/* ── SECTION 2 ── */}
                                <motion.div variants={sectionItem} className="space-y-4">
                                    <SectionLabel number={2} label="What you need" />

                                    <Tabs
                                        defaultValue="Services"
                                        onValueChange={(value) => { handleTabChange(value) }}
                                    >
                                        <TabsList className='bg-slate-100/80 border border-slate-200/70 p-1 rounded-xl gap-1 h-auto'>
                                            <TabsTrigger value="Services" className="rounded-lg px-5 py-2 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-[0_2px_8px_-2px_rgba(15,23,42,0.1)] text-slate-500 transition-all">
                                                Services
                                            </TabsTrigger>
                                            <TabsTrigger value="Ready-Products" className="rounded-lg px-5 py-2 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-[0_2px_8px_-2px_rgba(15,23,42,0.1)] text-slate-500 transition-all">
                                                Ready products
                                            </TabsTrigger>
                                            <TabsTrigger value="other" className="rounded-lg px-5 py-2 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-[0_2px_8px_-2px_rgba(15,23,42,0.1)] text-slate-500 transition-all">
                                                Other
                                            </TabsTrigger>
                                        </TabsList>

                                        {/* Services grid */}
                                        <TabsContent value="Services" className='mt-5'>
                                            <motion.div
                                                className='grid grid-cols-2 md:grid-cols-4 gap-3'
                                                initial="hidden"
                                                animate="visible"
                                                variants={{
                                                    hidden: {},
                                                    visible: { transition: { staggerChildren: 0.06 } },
                                                }}
                                            >
                                                {SERVICES.map((service) => {
                                                    const Icon = service.icon;
                                                    const isSelected = selectedServices === service.title;
                                                    return (
                                                        <motion.button
                                                            type="button"
                                                            key={service.key}
                                                            onClick={() => handleServiceSelect(service.title)}
                                                            variants={{
                                                                hidden: { opacity: 0, y: 12 },
                                                                visible: {
                                                                    opacity: 1,
                                                                    y: 0,
                                                                    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
                                                                },
                                                            }}
                                                            whileHover={{ y: -3 }}
                                                            whileTap={{ scale: 0.97 }}
                                                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                                            className={cn(
                                                                "relative group flex flex-col items-start gap-3 p-4 rounded-2xl border-2 text-left overflow-hidden",
                                                                isSelected
                                                                    ? `${service.iconBg} border-none`
                                                                    : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-[0_4px_16px_-6px_rgba(15,23,42,0.1)]"
                                                            )}
                                                        >
                                                            {/* Checkmark badge , animated in */}
                                                            <AnimatePresence>
                                                                {isSelected && (
                                                                    <motion.span
                                                                        initial={{ scale: 0, opacity: 0, rotate: -90 }}
                                                                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                                                        exit={{ scale: 0, opacity: 0, rotate: 90 }}
                                                                        transition={{ type: "spring", stiffness: 400, damping: 18 }}
                                                                        className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-primary border-2 border-white flex items-center justify-center shadow-[0_2px_6px_-1px_rgba(229,62,62,0.5)]"
                                                                    >
                                                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                                                    </motion.span>
                                                                )}
                                                            </AnimatePresence>

                                                            {/* Colored icon box , subtle wobble on select */}
                                                            <motion.div
                                                                animate={isSelected ? { rotate: [0, -8, 8, -4, 4, 0] } : { rotate: 0 }}
                                                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                                                className={cn(
                                                                    "w-10 h-10 rounded-xl flex items-center justify-center border transition-colors duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]",
                                                                    service.iconBg,
                                                                    isSelected ? "border-transparent" : "border-slate-100"
                                                                )}
                                                            >
                                                                <Icon className={cn("w-5 h-5", `text-${service.iconColor}`)} strokeWidth={2} />
                                                            </motion.div>

                                                            <span className={cn(
                                                                "text-sm font-semibold leading-tight transition-colors",
                                                                isSelected ? "text-slate-900" : "text-slate-700"
                                                            )}>
                                                                {service.title}
                                                            </span>
                                                        </motion.button>
                                                    )
                                                })}
                                            </motion.div>
                                        </TabsContent>

                                        {/* Ready Products */}
                                        <TabsContent value="Ready-Products" className='mt-5'>
                                            <motion.div
                                                className='flex flex-wrap gap-2.5'
                                                initial="hidden"
                                                animate="visible"
                                                variants={{
                                                    hidden: {},
                                                    visible: { transition: { staggerChildren: 0.04 } },
                                                }}
                                            >
                                                {SolutionsLinks.readyProductsLinks.childrens.map(product => {
                                                    const isSelected = selectedServices === product.linkTitle;
                                                    return (
                                                        <motion.button
                                                            type="button"
                                                            key={product.linkTitle}
                                                            onClick={() => handleServiceSelect(product.linkTitle)}
                                                            variants={{
                                                                hidden: { opacity: 0, scale: 0.9 },
                                                                visible: {
                                                                    opacity: 1,
                                                                    scale: 1,
                                                                    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                                                                },
                                                            }}
                                                            whileHover={{ y: -2 }}
                                                            whileTap={{ scale: 0.96 }}
                                                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                                            className={cn(
                                                                "relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border-2 transition-colors duration-200",
                                                                isSelected
                                                                    ? "bg-white border-primary/40 text-slate-900 shadow-[0_2px_12px_-2px_rgba(229,62,62,0.2)]"
                                                                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:shadow-sm"
                                                            )}
                                                        >
                                                            <AnimatePresence>
                                                                {isSelected && (
                                                                    <motion.span
                                                                        initial={{ scale: 0, width: 0, marginRight: 0 }}
                                                                        animate={{ scale: 1, width: "auto", marginRight: 0 }}
                                                                        exit={{ scale: 0, width: 0, marginRight: -8 }}
                                                                        transition={{ type: "spring", stiffness: 400, damping: 22 }}
                                                                        className="inline-flex items-center overflow-hidden"
                                                                    >
                                                                        <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                                                                    </motion.span>
                                                                )}
                                                            </AnimatePresence>
                                                            <span className='text-nowrap'>{product.linkTitle}</span>
                                                        </motion.button>
                                                    )
                                                })}
                                            </motion.div>
                                        </TabsContent>

                                        {/* Other */}
                                        <TabsContent value="other" className="mt-5">
                                            <motion.div
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                                            >
                                                <Textarea
                                                    rows={5}
                                                    placeholder="Tell us about your project , what are you building, who is it for, and what's your timeline?"
                                                    value={projectDescription}
                                                    onChange={(e) => setProjectDescription(e.target.value)}
                                                    className="rounded-xl border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-slate-400 resize-none p-4 text-base bg-white"
                                                />
                                            </motion.div>
                                        </TabsContent>
                                    </Tabs>
                                </motion.div>

                                {/* ── SECTION 3 , animated in/out ── */}
                                <AnimatePresence initial={false}>
                                    {selectedOption !== 'other' && (
                                        <motion.div
                                            key="project-details"
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            animate={{ opacity: 1, height: "auto", marginTop: 0 }}
                                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                                            className="space-y-3 overflow-hidden"
                                        >
                                            <SectionLabel number={3} label="Project details" />
                                            <Textarea
                                                rows={4}
                                                placeholder="Share your goals, timeline, budget range, or any specific requirements..."
                                                value={serviceDescription}
                                                onChange={(e) => setServiceDescription(e.target.value)}
                                                className="rounded-xl border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-slate-400 resize-none p-4 text-base bg-white"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Captcha */}
                                <motion.div variants={sectionItem}>
                                    <CaptchaDialog ref={captchaRef} isVerified={captchaVerified} onVerify={setCaptchaVerified} />
                                </motion.div>

                                {/* Success dialog */}
                                <AutoCloseDialog isOpen={open} onOpenChange={setOpen} message="Your Quotation Request has been submitted successfully." />

                                {/* Submit + trust footer */}
                                <motion.div
                                    variants={sectionItem}
                                    className="mt-2 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                                >
                                    <div className="flex items-center gap-2.5 group">
                                        <motion.div
                                            whileHover={{ scale: 1.08, rotate: -4 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                            className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center"
                                        >
                                            <ShieldCheck className="w-4 h-4 text-emerald-600" strokeWidth={2.2} />
                                        </motion.div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-700 leading-tight">NDA-protected</p>
                                            <p className="text-xs text-slate-500 mt-0.5">Your data stays private</p>
                                        </div>
                                    </div>

                                    <motion.div whileTap={{ scale: 0.97 }}>
                                        <DefaultButton
                                            icon={SendHorizontal}
                                            type='submit'
                                            title={loading ? 'Submitting...' : 'Submit request'}
                                        />
                                    </motion.div>
                                </motion.div>
                            </motion.form>
                        </Form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

/* ─── Reusable section label , number bounces in on mount ─── */
function SectionLabel({ number, label }: { number: number; label: string }) {
    return (
        <div className="flex items-center gap-3">
            <motion.span
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.1 }}
                className="relative w-8 h-8 rounded-xl bg-linear-to-br from-primary/15 to-primary/5 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]"
            >
                {number}
            </motion.span>
            <p className="text-sm font-semibold tracking-wide text-slate-700">
                {label}
            </p>
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ transformOrigin: "left" }}
                className="flex-1 h-px bg-linear-to-r from-slate-200 to-transparent"
            />
        </div>
    );
}