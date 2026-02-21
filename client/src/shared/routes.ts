import { z } from "zod";
import { insertMessageSchema } from "./schema";

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  contact: {
    submit: {
      method: "POST" as const,
      path: "/api/contact" as const,
      input: insertMessageSchema,
      responses: {
        200: z.object({ success: z.boolean() }),
        400: errorSchemas.validation,
        500: errorSchemas.internal,
      },
    },
  },
};
