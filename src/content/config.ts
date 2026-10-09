import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(), // "Conseils d'entretien", "Soins naturels", "Routine de nuit", "FAQ"
    cover: z.string(),
    excerpt: z.string(),
    readingTime: z.string().optional().default("4 min"),
    author: z.string().optional().default("Justine - LoméLocks"),
  }),
});

export const collections = {
  blog: blogCollection,
};
