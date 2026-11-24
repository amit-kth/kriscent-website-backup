// components/forms/ai-contact-form.tsx
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
} from "lucide-react";

/* ── Zod validation schema ── */
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must not exceed 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters"),
  email: z.string().email({ message: "Invalid email address" }),
  countryCode: z
    .string()
    .max(3, { message: "Country code must not exceed 3 digits" })
    .regex(/^\d+$/, { message: "Only numbers are allowed" }),
  phone: z
    .string()
    .min(6, { message: "Phone number is required" })
    .max(15, { message: "Phone number is too long" })
    .regex(/^\d+$/, "Phone number can only contain digits"),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(600, { message: "Message must not exceed 600 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

type AiContactFormProps = {
  onSuccess?: () => void;
  submitLabel?: string;
};

export default function AiContactForm({
  onSuccess,
  submitLabel = "Build Your AI Solution",
}: AiContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [submitState, setSubmitState] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "91",
      phone: "",
      message:
        "Hi, I'm interested in exploring AI solutions for my business. I'd like to discuss my requirements and schedule a consultation.",
    },
  });

  /* Auto-hide submit state after 5 seconds */
  useEffect(() => {
    if (submitState) {
      const timer = setTimeout(() => setSubmitState(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitState]);

  /* ── Submit handler , same API pattern as reference ── */
  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    setSubmitState(null);

    try {
      const res = await fetch(`https://kriscent.in/K-GOD/api/v1/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: values.name,
          country_code: values.countryCode,
          phone: values.phone,
          email: values.email,
          category: "AI Solutions",
          subject: "AI Enquiry",
          message: values.message,
        }),
      });

      const data = await res.json();

      if (data.status) {
        setSubmitState({
          type: "success",
          message:
            data.message ||
            "Thank you! Our AI team will get back to you within one business day.",
        });
        reset();
        if (onSuccess) {
          setTimeout(onSuccess, 2000);
        }
      } else {
        setSubmitState({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitState({
        type: "error",
        message:
          "Network error. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  /* Reusable input classnames based on state */
  const getInputClass = (field: keyof FormValues) =>
    `w-full rounded-xl border bg-background px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
      errors[field]
        ? "border-destructive/50 focus:border-destructive"
        : focusedField === field
          ? "border-primary"
          : "border-border hover:border-border/80"
    }`;

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {/* Name Field */}
      <div>
        <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
          Full Name
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60">
            <User className="h-4 w-4" />
          </div>
          <input
            {...register("name")}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            maxLength={50}
            className={`${getInputClass("name")} pl-10`}
            placeholder="Enter your name"
            type="text"
          />
        </div>
        {errors.name && (
          <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
          Work Email
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60">
            <Mail className="h-4 w-4" />
          </div>
          <input
            {...register("email")}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            className={`${getInputClass("email")} pl-10`}
            placeholder="name@company.com"
            type="email"
          />
        </div>
        {errors.email && (
          <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone Field with Country Code */}
      <div>
        <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
          Phone Number
        </label>
        <div className="flex gap-2">
          {/* Country code */}
          <div className="relative w-24 flex-shrink-0">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60">
              <Phone className="h-4 w-4" />
            </div>
            <input
              {...register("countryCode")}
              onFocus={() => setFocusedField("countryCode")}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => {
                e.target.value = e.target.value
                  .replace(/[^0-9]/g, "")
                  .slice(0, 4);
                register("countryCode").onChange(e);
              }}
              maxLength={4}
              className={`${getInputClass("countryCode")} pl-10 pr-2`}
              placeholder="91"
              inputMode="numeric"
            />
          </div>

          {/* Phone number */}
          <div className="relative flex-1">
            <input
              {...register("phone")}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => {
                e.target.value = e.target.value
                  .replace(/[^0-9]/g, "")
                  .slice(0, 15);
                register("phone").onChange(e);
              }}
              inputMode="numeric"
              className={getInputClass("phone")}
              placeholder="Enter phone number"
              type="tel"
            />
          </div>
        </div>
        {(errors.countryCode || errors.phone) && (
          <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.countryCode?.message || errors.phone?.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
          Tell us about your AI needs
        </label>
        <div className="relative">
          <div className="absolute left-3 top-4 text-muted-foreground/60">
            <MessageSquare className="h-4 w-4" />
          </div>
          <textarea
            {...register("message")}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            className={`${getInputClass("message")} pl-10 resize-none`}
            placeholder="Describe your business challenge or AI use case..."
            rows={4}
          />
        </div>
        {errors.message && (
          <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 disabled:bg-primary/60 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:hover:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Sparkles className="h-4 w-4" />
            {submitLabel}
            <Send className="h-4 w-4" />
          </>
        )}
      </button>

      {/* Submit State Message */}
      {submitState && (
        <div
          className={`flex items-start gap-2 rounded-lg p-3 text-xs font-medium ${
            submitState.type === "success"
              ? "bg-primary/5 text-primary border border-primary/20"
              : "bg-destructive/5 text-destructive border border-destructive/20"
          }`}
          role="status"
        >
          {submitState.type === "success" ? (
            <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
          )}
          <span>{submitState.message}</span>
        </div>
      )}
    </form>
  );
}