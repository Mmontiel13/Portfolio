import { defineCollection } from "astro:content"
import { z } from "astro/zod";
import { glob } from "astro/loaders"

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "src/content/projects"}),
  schema: z.object({
    title: z.string(),
    status: z.string().optional(),
    description: z.string(),
    images: z.array(z.string()),
    github: z.string().optional(),
    page: z.string().optional(),
    tech: z.array(z.string()).default([])
  })
})

const experience = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "src/content/experience"}),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    description: z.string(),
    date: z.string(),
    logo: z.string()
  })
})

export const collections = {
  projects,
  experience
};