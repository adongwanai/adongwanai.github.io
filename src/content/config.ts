import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).default([]),
    }),
});

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        stars: z.string().optional(),
        forks: z.string().optional(),
        tags: z.array(z.string()),
        link: z.string(),
        reflection: z.string().optional(),
        order: z.number().default(0)
    }),
});

const vibecoding = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        order: z.number().default(0),
        // Monetization fields
        category: z.enum(['foundation', 'project', 'article']).default('article'),
        level: z.enum(['beginner', 'intermediate', 'advanced']).default('intermediate'),
        tier: z.enum(['free', 'premium']).default('free'),
        estimatedTime: z.string().optional(),
        tags: z.array(z.string()).default([]),
        githubRepo: z.string().url().optional(),
        videoUrl: z.string().url().optional(),
    }),
});

export const collections = { posts, projects, vibecoding };
