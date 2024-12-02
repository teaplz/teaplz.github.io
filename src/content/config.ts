import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      showImage: z.boolean().optional(),
      datePeriod: z.string(),
      pubDate: z.coerce.date().optional(),
    }),
});

export const collections = { projects };
