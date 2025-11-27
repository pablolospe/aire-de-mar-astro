import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    location: z.string().optional(),
    year: z.number(),
    image: z.string(), // Ruta a la imagen principal del proyecto
  }),
});

export const collections = {
  'projects': projectsCollection,
};