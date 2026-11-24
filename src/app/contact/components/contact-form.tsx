"use client"
import { useState, useRef, useEffect } from "react"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea"
import { DefaultButton } from "@/app/ReusableComponents/UI"
import { Send } from "lucide-react"
import CaptchaDialog from "@/lib/captcha"
import { API_ENDPOINT } from "@/lib/variables"
import { Country, getCountryCallingCode } from "react-phone-number-input"
import { AutoCloseDialog } from "@/lib/success-dialog"

// ZOD SCHEMA 
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" })
        .max(50, { message: "Name must not exceed 50 characters" })
        .regex(/^[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/, "Name can only contain letters"),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string()
        .min(13, { message: "Phone number must be greater than 10 digits" })
        .max(18, { message: "Phone number must be less than 15 digits" }),
    message: z.string()
        .min(10, { message: "Project description must be at least 10 characters long" })
        .max(500, { message: "Project description must not exceed 500 characters" }),
});

// Define an interface for the captcha ref
interface CaptchaRef {
    verifyCaptcha: () => boolean;
}

export default function ContactForm() {

    // For checking if user coming from a other website/ad
    var reference: string | null = null
    if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        reference = params.get('ref')
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    // use states
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState<Country>("IN");
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const captchaRef = useRef<CaptchaRef>(null);
    const [open, setOpen] = useState(false)


    // custom function for adding reference feild with message if the entry coming from a specific page
    function getMessageContent(message: string) {
        if (reference !== null && reference === "K_AI_IND_WEBV_SLF_01-07") {
            return `
                ${message} <p>
                <b>Entry Reference</b> : ${reference} (AI/ML Service Ad )</p>
            `
        }
        else {
            return message
        }
    }


    // submit function -------------------------------------------------------
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true);
        try {
            // Check captcha verification before proceeding
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
                message: getMessageContent(values.message),
                countryCode: getCountryCallingCode(country),
            };

            const raw = JSON.stringify(formData);

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
            };

            const response = await fetch(`${API_ENDPOINT}/contact`, requestOptions);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.text();
            // toast.success("Query submitted successfully");
            form.reset();
            setCaptchaVerified(false);
            setOpen(true);
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form.", {
                description: error instanceof Error ? error.message : "Unknown error",
            });
        } finally {
            setLoading(false);
        }
    }

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input
                                placeholder="Enter Your Name"
                                {...field} />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input
                                placeholder="Enter Your Email"
                                type="email"
                                {...field} />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                            <PhoneInput
                                value={field.value}
                                onChange={field.onChange}
                                defaultCountry="IN"
                                onCountryChange={(country) => setCountry(country || "IN")}
                                placeholder="Enter phone number"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Share your thoughts</FormLabel>
                        <FormControl>
                            <Textarea
                                placeholder="What's your message? "
                                className="resize-none"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <CaptchaDialog ref={captchaRef} isVerified={captchaVerified} onVerify={setCaptchaVerified} />

            {/* the success dialog */}
            <AutoCloseDialog isOpen={open} onOpenChange={setOpen} message="Your Enquiry has been submitted successfully." />

            <DefaultButton type="submit" title={loading ? "Submitting..." : "Submit"} icon={Send} disabled={loading} />
        </form>
    </Form>
}