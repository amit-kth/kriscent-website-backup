"use client"
import { useState, useRef, useEffect } from "react"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea"
import { Briefcase } from "lucide-react"
import { DefaultButton } from "@/app/ReusableComponents/UI"
import CaptchaDialog from "@/lib/captcha"
import { Country, getCountryCallingCode } from "react-phone-number-input";
import { API_ENDPOINT, ASSETS_BASE_URL } from "@/lib/variables"

// Define an interface for the captcha ref
interface CaptchaRef {
    verifyCaptcha: () => boolean;
}

// Updated Validation Schema
const combinedSchema = z.object({
    applicantName: z.string()
        .min(2, { message: "Name must be at least 2 characters long" })
        .max(50, { message: "Name cannot exceed 50 characters" })
        .regex(/^[a-zA-Z\s]+$/, { message: "Name can only contain letters and spaces" }),

    applicantMail: z.string()
        .email({ message: "Invalid email address" })
        .max(100, { message: "Email address is too long" }),

    applicantPhone: z.string()
        .min(13, { message: "Phone number must be greater than 10 digits" })
        .max(18, { message: "Phone number must be less than 15 digits" }),

    noticePeriod: z.string()
        .min(1, { message: "Notice period is required" }),

    currentPackage: z.string()
        .regex(/^\d+(\.\d{1,2})?$/, {
            message: "Current package must be a valid number"
        })
        .refine((value) => {
            const numericValue = parseFloat(value);
            return numericValue >= 0 && numericValue <= 99;
        }, { message: "Package must be between 0 and 99 LPA" }),

    expectedPackage: z.string()
        .regex(/^\d+(\.\d{1,2})?$/, {
            message: "Expected package must be a valid number"
        })
        .refine((value) => {
            const numericValue = parseFloat(value);
            return numericValue >= 0 && numericValue <= 99;
        }, { message: "Package must be between 0 and 99 LPA" }),

    linkedInUrl: z.string()
        .optional()
        .refine((value = '') => value === '' || /^https:\/\/(www\.)?linkedin\.com\/.*$/.test(value), {
            message: "Please enter a valid LinkedIn URL",
        }),
    resumeUrl: z.instanceof(File, { message: "Resume is required" }),
    shortBio: z.string().optional(),
    gender: z.string(),
    githubUrl: z.string()
        .optional()
        .refine((value = '') => value === '' || /^https:\/\/(www\.)?github\.com\/.*$/.test(value), {
            message: "Please enter a valid GitHub URL",
        }),
    experienceYears: z.string()
        .regex(/^\d+$/, { message: "Experience years must be a non-negative number" }),
    experienceMonths: z.string()
        .regex(/^(0|1[0-1]|[1-9])$/, { message: "Experience months must be a non-negative number and cannot exceed 11" }),
});

export default function JobApplicationFormUpdated({ jobTitle, closeDialog }: { jobTitle: string, closeDialog: () => void }) {
    const [loading, setLoading] = useState(false);
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [open, setOpen] = useState(false)
    const [country, setCountry] = useState<Country>("IN");
    const captchaRef = useRef<CaptchaRef>(null);


    const form = useForm<z.infer<typeof combinedSchema>>({
        resolver: zodResolver(combinedSchema),
        mode: 'onBlur',
        reValidateMode: 'onChange'
    });

    const onSubmit = async (values: z.infer<typeof combinedSchema>) => {
        // Check captcha verification before proceeding
        if (captchaRef.current && !captchaRef.current.verifyCaptcha()) {
            toast.error("Please verify the captcha");
            return;
        }

        // Check experience and current package validation
        if (parseInt(values.experienceYears) >= 1 && parseFloat(values.currentPackage) === 0) {
            toast.error("Current package cannot be 0 for experience of 1 year or more");
            return;
        }

        // Validate the uploaded file extension
        const validExtensions = ['pdf', 'doc', 'docx'];
        const fileExtension = values.resumeUrl.name.split('.').pop()?.toLowerCase();

        if (!validExtensions.includes(fileExtension || '')) {
            toast.error("Unsupported file type. Only PDF, DOC, and DOCX are allowed.");
            return; // Prevent submission if the file type is invalid
        }




        await submitDataToAPI(values);
    };

    const submitDataToAPI = async (values: z.infer<typeof combinedSchema>) => {
        setLoading(true);
        try {

            const apiData = new FormData();

            apiData.append("applicantName", values.applicantName.charAt(0).toUpperCase() + values.applicantName.slice(1));
            apiData.append("applicantMail", values.applicantMail);
            apiData.append("applicantPhone", values.applicantPhone.replace(/(\+\d{2})(\d+)/, '$1-$2'));
            apiData.append("linkedInUrl", values.linkedInUrl || '');
            apiData.append("noticePeriod", values.noticePeriod);
            apiData.append("shortBio", values.shortBio || '');
            apiData.append("currentPackage", `${values.currentPackage} Lakhs Per Annum`);
            apiData.append("expectedPackage", `${values.expectedPackage} Lakhs Per Annum`);
            apiData.append("applicantRole", jobTitle);
            apiData.append("resumeUrl", values.resumeUrl);
            apiData.append("countryCode", getCountryCallingCode(country));
            apiData.append("gender", values.gender || '');
            apiData.append("github", values.githubUrl || '');
            apiData.append("experience", `${values.experienceYears} Years ${values.experienceMonths} Months` || '');

            const response = await fetch(`${API_ENDPOINT}/career`, {
                method: "POST",
                body: apiData,
                headers: {
                    "Accept": "application/json" // Change Content-Type for FormData
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // toast.success("Your application is submitted successfully", {
            //     description: "We will contact you soon",
            // });

            form.reset();
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


    const showThankYouMessage = () => {
        setOpen(true)
        setTimeout(() => {
            closeDialog();
            setOpen(false)
        }, 2000)
    }


    if (!open) {
        return <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-6 md:py-10">
                {/* Basic Details Section */}
                <h2 className="text-lg font-semibold">Basic Details</h2>
                <div className="grid grid-cols-1 gap-4">

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="applicantName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm md:text-base">Enter Your Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Full Name"
                                            className="text-sm md:text-base w-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm md:text-base">Gender</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your gender" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="z-100">
                                            <SelectItem value="male">Male</SelectItem>
                                            <SelectItem value="female">Female</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="applicantPhone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm md:text-base">Enter Phone Number</FormLabel>
                                    <FormControl>
                                        <PhoneInput
                                            placeholder="Phone"
                                            className="text-sm md:text-base w-full"
                                            value={field.value}
                                            onChange={field.onChange}
                                            defaultCountry="IN"
                                            onCountryChange={(country) => setCountry(country || "IN")}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="applicantMail"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm md:text-base">Enter Your E-Mail</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="example@email.com"
                                            className="text-sm md:text-base w-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Professional Details Section */}
                <h2 className="text-lg font-semibold">Professional Details</h2>
                <div className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="resumeUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm md:text-base">Upload Resume</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            accept=".pdf, .doc, .docx"
                                            onChange={(e) => {
                                                if (e.target.files && e.target.files.length > 0) {
                                                    const file = e.target.files[0];
                                                    field.onChange(file);
                                                } else {
                                                    field.onChange(null);
                                                }
                                            }}
                                        />
                                    </FormControl>
                                    {resumeFile && (
                                        <p className="text-sm text-green-600">
                                            {resumeFile.name} (Uploaded)
                                        </p>
                                    )}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="noticePeriod"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm md:text-base">Notice Period</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your notice period" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="z-100">
                                            <SelectItem value="immediately">Can Start Immediately</SelectItem>
                                            <SelectItem value="0-15 Days">0-15 Days</SelectItem>
                                            <SelectItem value="16-30 Days">16-30 Days</SelectItem>
                                            <SelectItem value="1-2 Months">1-2 Months</SelectItem>
                                            <SelectItem value="3-4 Months">3-4 Months</SelectItem>
                                            <SelectItem value="5-6 Months">5-6 Months</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        <FormField
                            control={form.control}
                            name="experienceYears"
                            render={({ field }) => (
                                <FormItem className="col-span-3">
                                    <FormLabel className="text-sm md:text-base">Experience</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Years"
                                            className="text-sm md:text-base w-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="experienceMonths"
                            defaultValue="0"
                            render={({ field }) => (
                                <FormItem className="col-span-1">
                                    <FormLabel className="text-sm md:text-base">&nbsp;</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Months"
                                            className="text-sm md:text-base w-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="currentPackage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm md:text-base">Current Package (in Lakhs Per Annum)</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Eg: 3"
                                            className="text-sm md:text-base w-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="expectedPackage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm md:text-base">Expected Package (in Lakhs Per Annum)</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Eg: 4"
                                            className="text-sm md:text-base w-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Other Details Section */}
                <h2 className="text-lg font-semibold">Other Details</h2>
                <div className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="linkedInUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm md:text-base">Your LinkedIn Profile (Optional)</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="https://www.linkedin.com/in/username"
                                            className="text-sm md:text-base w-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="githubUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm md:text-base">Your GitHub Profile (Optional)</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="https://github.com/username"
                                            className="text-sm md:text-base w-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="shortBio"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm md:text-base">Short Bio (Optional)</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Additional information or notes"
                                        className="resize-none text-sm md:text-base w-full"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Captcha and Submit Button */}
                <CaptchaDialog ref={captchaRef} isVerified={captchaVerified} onVerify={setCaptchaVerified} />
                {/* <AutoCloseDialog isOpen={open} onOpenChange={setOpen} message="Your request has been submitted successfully." /> */}

                <div className="w-full flex justify-between items-center">
                    <DefaultButton
                        type="submit"
                        title={loading ? 'Submitting...' : 'Submit'}
                        icon={Briefcase}
                        disabled={loading}
                    />
                </div>
            </form>
        </Form>
    }

    else return (
        <div className="h-[400px] w-full flex flex-col items-center justify-center">
            <img src={`${ASSETS_BASE_URL}/tempAssets/success.gif`} alt="check" className="w-52" />
            <p>Your Job Applications Submitted Successfully.</p>
        </div>
    )
}