# Page Collections Strategy Guide

You're absolutely right! Different pages need completely different data structures. Here are the best approaches:

## 🤔 The Problem

**Homepage needs:**
```json
{
  "heroTitle": "Welcome to Rhino Africa",
  "heroSubtitle": "...",
  "featuredDestinations": [...],
  "testimonials": [...],
  "callToAction": {...}
}
```

**About page needs:**
```json
{
  "companyHistory": "...",
  "teamMembers": [...],
  "values": [...],
  "offices": [...]
}
```

**Contact page needs:**
```json
{
  "contactInfo": {...},
  "locations": [...],
  "forms": {...}
}
```

## 🎯 **Recommended Solution: Page-Specific Collections**

### Option A: Separate Collections (Best for Complex Pages)

```typescript
// src/content/config.ts
const homepageCollection = defineCollection({
  type: 'data',
  schema: z.object({
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      backgroundImage: z.string(),
    }),
    featuredDestinations: z.array(z.object({
      title: z.string(),
      image: z.string(),
      link: z.string(),
    })),
    testimonials: z.array(z.object({
      name: z.string(),
      quote: z.string(),
      rating: z.number(),
    })),
  }),
});

const aboutCollection = defineCollection({
  type: 'data', 
  schema: z.object({
    pageTitle: z.string(),
    history: z.string(),
    teamMembers: z.array(z.object({
      name: z.string(),
      role: z.string(),
      bio: z.string(),
      image: z.string(),
    })),
    values: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
  }),
});

export const collections = {
  'blog': blogCollection,
  'homepage': homepageCollection,
  'about': aboutCollection,
  'page-content': pageContentCollection, // Keep for simple pages
};
```

### Option B: Flexible Page Content (Current - Best for Simple Pages)

```typescript
// Keep using page-content collection for flexible structure
const pageContentCollection = defineCollection({
  type: 'data',
  schema: z.object({
    pageTitle: z.string(),
    pageSubtitle: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    sections: z.record(z.any()).optional(), // Flexible structure
  }),
});
```

## 📁 **File Structure Examples**

### **Separate Collections Approach:**
```
src/content/
├── blog/           # Blog posts
├── homepage/       # Homepage-specific data
│   └── content.json
├── about/          # About page-specific data  
│   └── content.json
└── page-content/   # Simple pages (blog, contact, etc.)
    ├── blog.json
    └── contact.json
```

### **Flexible Approach (Current):**
```
src/content/
├── blog/           # Blog posts
└── page-content/   # All page content
    ├── blog.json
    ├── homepage.json    # Complex structure
    ├── about.json       # Different structure  
    └── contact.json     # Simple structure
```

## 🎯 **Recommendations by Page Complexity**

### **Simple Pages** → Use `page-content` collection
- Blog listing page ✅
- Contact page
- Basic info pages

### **Complex Pages** → Create dedicated collections  
- Homepage (hero, features, testimonials)
- About page (team, history, values)
- Destination pages (galleries, itineraries)

## 💻 **Implementation Examples**

### **Homepage with Dedicated Collection:**
```typescript
// src/pages/index.astro
import { getEntry } from "astro:content";

const homepageData = await getEntry("homepage", "content");
const { hero, featuredDestinations, testimonials } = homepageData.data;
```

```json
// src/content/homepage/content.json
{
  "hero": {
    "title": "Discover Africa",
    "subtitle": "Unforgettable safari experiences",
    "backgroundImage": "/images/hero-safari.jpg"
  },
  "featuredDestinations": [
    {
      "title": "Kenya Safari",
      "image": "/images/kenya.jpg", 
      "link": "/destinations/kenya"
    }
  ],
  "testimonials": [
    {
      "name": "Sarah Johnson",
      "quote": "Amazing experience!",
      "rating": 5
    }
  ]
}
```

### **Simple Page with Flexible Collection:**
```typescript
// src/pages/contact.astro  
import { getEntry } from "astro:content";

const pageData = await getEntry("page-content", "contact");
const { pageTitle, sections } = pageData.data;
```

```json
// src/content/page-content/contact.json
{
  "pageTitle": "Contact Us",
  "pageSubtitle": "Get in touch",
  "metaTitle": "Contact | Rhino Africa",
  "metaDescription": "Contact our travel experts",
  "sections": {
    "contactInfo": {
      "phone": "+27 21 123 4567",
      "email": "hello@rhinoafrica.com"
    },
    "offices": [
      {
        "city": "Cape Town", 
        "address": "123 Main St"
      }
    ]
  }
}
```

## 🔄 **Migration Strategy**

1. **Start Simple**: Use `page-content` for all pages initially
2. **Identify Complex Pages**: As pages grow complex, migrate to dedicated collections
3. **Create Schemas**: Define proper validation for complex page types
4. **Update Components**: Modify page components to use new data structure

## ✅ **Benefits of This Approach**

- **Type Safety**: Each page type has proper validation
- **Flexibility**: Simple pages stay simple, complex pages get structure
- **Scalability**: Easy to add new page types
- **Content Team Safety**: Clear structure prevents errors
- **Developer Experience**: IntelliSense and autocomplete for page data

## 🎯 **Next Steps**

1. Decide which pages need dedicated collections
2. Create schemas for complex pages
3. Set up content files
4. Update page components to use new data
5. Document for content team

This approach gives you the best of both worlds: simplicity for simple pages and structure for complex ones! 