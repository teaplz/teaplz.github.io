import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
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
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      datePeriod: z.string(),
      pubDate: z.coerce.date().optional(),
    }),
});

export const collections = { blog, projects };
