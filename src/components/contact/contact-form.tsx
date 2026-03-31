"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import AlertCircle from "lucide-react/dist/esm/icons/alert-circle";
import CheckCircle2 from "lucide-react/dist/esm/icons/check-circle-2";
import Loader2 from "lucide-react/dist/esm/icons/loader-2";
import { useId, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { type ContactFormData, contactFormSchema } from "@/lib/schemas/contact";

/**
 * Contact form UI with validation and mailto submission.
 *
 * @returns A fully accessible contact form.
 */
export function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const { toast } = useToast();
  const idPrefix = useId();

  const fieldIds = useMemo(
    () => ({
      name: `${idPrefix}-name`,
      email: `${idPrefix}-email`,
      message: `${idPrefix}-message`,
      honeypot: `${idPrefix}-hp`,
    }),
    [idPrefix],
  );

  const formLoadTime = useRef(Date.now());
  const [honeypot, setHoneypot] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus("idle");

    try {
      // Basic spam checks
      if (honeypot.trim() !== "") {
        throw new Error("Spam detected.");
      }

      const timeElapsed = Date.now() - formLoadTime.current;
      if (timeElapsed < 1500) {
        throw new Error("Form submitted too quickly.");
      }

      const subject = encodeURIComponent(`Portfolio inquiry from ${data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
      );

      const mailtoLink = `mailto:drusek20@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      setFormStatus("success");
      toast({
        title: "Email draft opened",
        description: "Your email app should open with the message pre-filled.",
      });

      reset();
      setHoneypot("");
      formLoadTime.current = Date.now();
    } catch (error) {
      setFormStatus("error");
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to open your email app.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      {formStatus === "success" && (
        <Alert
          role="status"
          aria-live="polite"
          className="border-emerald-200/70 bg-emerald-50/90 text-emerald-950 shadow-xs dark:border-emerald-900/60 dark:bg-emerald-950/35 dark:text-emerald-50"
        >
          <CheckCircle2
            className="h-4 w-4 text-emerald-600 dark:text-emerald-300"
            aria-hidden="true"
          />
          <AlertTitle>Email draft opened</AlertTitle>
          <AlertDescription className="text-emerald-800/90 dark:text-emerald-200/90">
            Your email app should now be open with your message ready to send to me.
          </AlertDescription>
        </Alert>
      )}

      {formStatus === "error" && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" aria-hidden="true" />
          <AlertTitle>Couldn&apos;t open email app</AlertTitle>
          <AlertDescription>
            Please try again. If the issue continues, email me directly at{" "}
            <a
              href="mailto:drusek20@gmail.com"
              className="rounded-xs underline hover:text-red-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              drusek20@gmail.com
            </a>{" "}
            or message me on{" "}
            <a
              href="https://www.linkedin.com/in/damian-rusek-3a04482a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xs underline hover:text-red-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              LinkedIn
            </a>
            .
          </AlertDescription>
        </Alert>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
        noValidate
        aria-busy={isSubmitting}
      >
        <div className="pointer-events-none absolute -left-[9999px] opacity-0" aria-hidden="true">
          <label htmlFor={fieldIds.honeypot}>
            Leave this field empty
            <input
              type="text"
              id={fieldIds.honeypot}
              name="honeypot"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <div className="space-y-2">
          <Label htmlFor={fieldIds.name}>Name</Label>
          <Input
            id={fieldIds.name}
            type="text"
            placeholder="Your name"
            {...register("name")}
            autoComplete="name"
            aria-describedby={errors.name ? `${fieldIds.name}-error` : undefined}
            aria-invalid={!!errors.name}
            disabled={isSubmitting}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p id={`${fieldIds.name}-error`} className="text-sm text-red-500" aria-live="polite">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor={fieldIds.email}>Email</Label>
          <Input
            id={fieldIds.email}
            type="email"
            placeholder="your.email@example.com"
            {...register("email")}
            autoComplete="email"
            inputMode="email"
            spellCheck={false}
            aria-describedby={errors.email ? `${fieldIds.email}-error` : undefined}
            aria-invalid={!!errors.email}
            disabled={isSubmitting}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p id={`${fieldIds.email}-error`} className="text-sm text-red-500" aria-live="polite">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor={fieldIds.message}>Message</Label>
          <Textarea
            id={fieldIds.message}
            placeholder="Your message"
            {...register("message")}
            autoComplete="off"
            aria-describedby={errors.message ? `${fieldIds.message}-error` : undefined}
            aria-invalid={!!errors.message}
            disabled={isSubmitting}
            rows={5}
            className={errors.message ? "border-red-500" : ""}
          />
          {errors.message && (
            <p id={`${fieldIds.message}-error`} className="text-sm text-red-500" aria-live="polite">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
              Opening…
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
}