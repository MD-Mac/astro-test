import { defineCollection, z } from 'astro:content';

// Homepage collection with specific schema for homepage data
const homepageCollection = defineCollection({
  type: 'data',
  schema: z.object({
    // SEO and meta information
    metaTitle: z.string(),
    metaDescription: z.string(),
    
    // Hero section content
    pageTitle: z.string(),
    pageSubtitle: z.string(),
    
    // Main intro paragraph
    homePageIntro: z.string(),
    
    // Structured sections with specific data types
    sections: z.object({
      destinations: z.object({
        title: z.string(),
        destinationList: z.array(z.string()), // Array of destination names
      }),
      topTours: z.object({
        title: z.string(),
        tourList: z.array(z.string()), // Array of tour names
      }),
    }),
  }),
});

// Blog posts collection with validation
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    pubDate: z.date(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

// Pages collection for content-managed pages
const pagesCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string(),
    showInNavigation: z.boolean().default(false),
    navigationOrder: z.number().optional(),
    navigationTitle: z.string().optional(),
    layout: z.enum(['default', 'full-width', 'minimal']).default('default'),
    seo: z.object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      noIndex: z.boolean().default(false),
    }).optional(),
  }),
});

// Page content collection for editable page data
const pageContentCollection = defineCollection({
  type: 'data',
  schema: z.object({
    pageTitle: z.string(),
    pageSubtitle: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    sections: z.record(z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      description: z.string().optional(),
    })).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'pages': pagesCollection,
  'page-content': pageContentCollection,
  'homepage': homepageCollection, // New dedicated homepage collection
}; 