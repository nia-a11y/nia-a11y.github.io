import { defineCollection, z } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

const docs = defineCollection({ loader: docsLoader(), schema: docsSchema() });

const i18n = defineCollection({
  loader: i18nLoader(),
  schema: i18nSchema({
    extend: z.object({
      'custom.label': z.string().optional(),
    }),
  }),
});

export const collections = { docs, i18n };