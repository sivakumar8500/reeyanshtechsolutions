import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const applySchema = z.object({
  jobId: z.string(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid E.164 phone number"),
  experience: z.string().min(1, "Please enter your years of experience"),
  portfolioUrl: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  coverLetter: z.string().min(10, "Cover letter must be at least 10 characters"),
  resumeName: z.string().min(1, "Please upload your resume"),
});

export type ApplyFormData = z.infer<typeof applySchema>;
