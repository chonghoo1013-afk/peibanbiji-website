import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    week: z.string(), // ISO week, e.g. "2026-W33"
    date: z.date(),
    description: z.string().optional(),
  }),
});

export const collections = { posts };
