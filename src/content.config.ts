import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image().optional(),
      pubDate: z.coerce.date().optional(),
      lastUpdateDate: z.coerce.date().optional(),
      description: z.string().optional(),
      unpublished: z.boolean().optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image().optional(),
      datePeriod: z.string().optional(),
      pubDate: z.coerce.date().optional(),
    }),
});

export const collections = { blog, projects };
