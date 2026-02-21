import { z } from "zod";

export const insertMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(1, "Message is required"),
});

export type InsertMessage = z.infer<typeof insertMessageSchema>;
