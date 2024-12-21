import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      pubDate: z.coerce.date().optional(),
      lastUpdateDate: z.coerce.date().optional(),
      description: z.string().optional(),
    }),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      datePeriod: z.string(),
      pubDate: z.coerce.date().optional(),
    }),
});

export const collections = { blog, projects };
