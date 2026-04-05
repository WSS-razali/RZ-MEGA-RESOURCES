import { z } from "zod";

// Base fields shared across all forms
const baseSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
});

// Discriminated Union for Dynamic Brand Logic
export const contactFormSchema = z.discriminatedUnion("brandId", [
  // 1. RZ Kitchen (F&B)
  baseSchema.extend({
    brandId: z.literal("rz-kitchen"),
    eventDate: z.string().min(1, "Event date is required"),
    guestCount: z.string().min(1, "Guest count is required"),
  }),

  // 2. WSS Digital Labs (Tech)
  baseSchema.extend({
    brandId: z.literal("wss-labs"),
    budgetRange: z.string().min(1, "Budget range is required"),
    projectType: z.string().min(1, "Project type is required"),
  }),

  // 3. RXZ Ventures (Retail)
  baseSchema.extend({
    brandId: z.literal("rxz-ventures"),
    retailInterest: z.enum(["wholesale", "consumer"], { required_error: "Please select an option" }),
  }),

  // 4. Cahayateras Consultation (Finance)
  baseSchema.extend({
    brandId: z.literal("cahayateras"),
    message: z.string().min(10, "Please provide some details about your inquiry"),
  }),
]);

export type ContactFormData = z.infer<typeof contactFormSchema>;
