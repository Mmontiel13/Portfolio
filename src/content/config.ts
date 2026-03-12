import { defineCollection } from "astro:content"
import { z } from "astro/zod";
// Import the glob loader
import { glob } from "astro/loaders"

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "src/content/projects"}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image1: z.string(),
    image2: z.string().optional(),
    github: z.string().optional(),
    tech: z.array(z.string()).default([])
  })
})

const experience = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "src/content/experience"}),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    description: z.string(),
    logo: z.string()
  })
})

export const collections = {
  projects,
  experience
};