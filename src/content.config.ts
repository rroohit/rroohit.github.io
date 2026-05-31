import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      role: z.string().optional(),
      company: z.string().optional(),
      period: z.string().optional(),
      tech: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(99),
      status: z.enum(['shipped', 'open-source', 'in-progress', 'archived']).default('shipped'),
      links: z
        .object({
          github: z.string().url().optional(),
          playstore: z.string().url().optional(),
          live: z.string().url().optional(),
        })
        .default({}),
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      heroImage: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const dsa = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/dsa' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']).default('Medium'),
    topics: z.array(z.string()).default([]),
    leetcodeUrl: z.string().url().optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog, dsa };
