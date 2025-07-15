# Content Team Guide: Working with Astro

Welcome! This guide shows you how to manage content in our Astro website. Unlike WordPress, everything here is file-based, which gives us better performance and more control.

## 📁 Key Files & Folders for Content Teams

### 🎛️ Site Configuration (`src/config/site.ts`)

This is your **central control panel**. You can update:

- Company information (contact details, social links)
- Navigation menus (what appears in header/footer)  
- SEO defaults
- Site-wide settings

### 🖼️ Images (`public/images/`)

**Recommended Structure:**
```
public/images/
├── blog-posts/
│   ├── post-1/
│   │   ├── hero.jpg          # Hero banner image
│   │   └── content-img1.jpg  # Images used in post content
│   └── post-2/
│       ├── hero.jpg
│       └── gallery-1.jpg
└── general/
    ├── team-photos/
    └── destination-images/
```

**Image Guidelines:**
- **Hero images**: 1200×500px minimum, landscape orientation
- **Content images**: Max 800px wide for optimal loading
- **File formats**: JPG for photos, PNG for graphics with transparency
- **File naming**: Use descriptive, lowercase names with hyphens

**Example:** To add a new navigation item:
```typescript
navigation: {
  main: [
    { title: "Home", href: "/", description: "Welcome page" },
    { title: "Destinations", href: "/destinations/", description: "Our travel destinations" },
    { title: "About", href: "/about/", description: "About our company" },
    { title: "Blog", href: "/blog/", description: "Travel stories and tips" },
    { title: "Contact", href: "/contact/", description: "Get in touch" },
    // Add new items here ↓
    { title: "Gallery", href: "/gallery/", description: "Photo gallery" }
  ]
}
```

### 📝 Blog Posts (`src/content/blog/`)

Create new `.md` files here for blog posts. Each post needs this frontmatter:

```markdown
---
title: 'Your Amazing Post Title'           # Appears in hero banner as H1
description: 'Brief description for SEO and previews'  # Shows as subtitle in hero
author: 'Your Name'                        # Displayed in hero banner
pubDate: 2025-01-20                        # Shown as formatted date in hero
image:
    url: '/images/blog-posts/post-name/hero.jpg'  # Hero background image
    alt: 'Description of the image'        # For accessibility
tags: ["travel", "safari", "photography"]  # For categorization and related posts
draft: false                               # Set to true to hide from public
featured: false                            # Set to true to show in featured section
---

Write your blog post content here using Markdown formatting...

## Your First Section

Don't use # (H1) headings in content - the title becomes H1 automatically.
Start with ## (H2) for main sections.
```

**Important Notes:**
- **No H1 headings** in content - your `title` becomes the H1 in the hero
- **Hero image** should be high quality (1200×500px minimum)
- **Description** appears as subtitle in the hero banner

### 🗂️ Pages (`src/content/pages/`)

For content-managed pages (like About, FAQ, etc.), create `.md` files here:

```markdown
---
title: 'About Our Company'
description: 'Learn about our travel expertise'
showInNavigation: true
navigationOrder: 2
navigationTitle: 'About Us'    # Optional: different title for nav
layout: 'default'              # or 'full-width', 'minimal'
seo:
  metaTitle: 'About Us - Custom SEO Title'
  metaDescription: 'Custom SEO description'
  noIndex: false               # Set true to hide from Google
---

# About Our Company

Your page content here...
```

## 🔧 How to Reference Config Values in Templates

### In Astro Components (`.astro` files):

```astro
---
// Import the config
import { SITE_CONFIG } from '../config/site.ts';

// Use values in your script
const companyName = SITE_CONFIG.title;
const contactEmail = SITE_CONFIG.contact.email;
---

<!-- Use in your HTML -->
<h1>{SITE_CONFIG.title}</h1>
<p>Contact us: {SITE_CONFIG.contact.email}</p>

<!-- Loop through navigation -->
{SITE_CONFIG.navigation.main.map(item => (
  <a href={item.href}>{item.title}</a>
))}
```

### Common Examples:

**Get social media links:**
```astro
<a href={SITE_CONFIG.social.twitter}>Follow us on Twitter</a>
<a href={SITE_CONFIG.social.facebook}>Like us on Facebook</a>
```

**Use contact information:**
```astro
<p>Email: {SITE_CONFIG.contact.email}</p>
<p>Phone: {SITE_CONFIG.contact.phone}</p>
<address>
  {SITE_CONFIG.contact.address.street}<br>
  {SITE_CONFIG.contact.address.city}, {SITE_CONFIG.contact.address.zipCode}<br>
  {SITE_CONFIG.contact.address.country}
</address>
```

**Access SEO defaults:**
```astro
<title>{SITE_CONFIG.seo.defaultTitle}</title>
<meta name="description" content={SITE_CONFIG.seo.defaultDescription}>
```

## 📋 Content Team Workflow

### Creating a New Blog Post:

1. **Prepare images**: 
   - Create folder: `public/images/blog-posts/my-post-name/`
   - Add hero image (1200×500px): `hero.jpg`
   - Add any content images

2. **Create file**: `src/content/blog/my-amazing-post.md`

3. **Add frontmatter** with all required fields:
   ```markdown
   ---
   title: 'Your Post Title'
   description: 'Compelling subtitle/excerpt'
   author: 'Your Name'
   pubDate: 2025-01-20
   image:
       url: '/images/blog-posts/my-post-name/hero.jpg'
       alt: 'Descriptive alt text'
   tags: ["travel", "safari"]
   draft: true    # Start as draft
   featured: false
   ---
   ```

4. **Write content** using Markdown (start with ## headings)

5. **Preview locally** (ask dev team to show you)

6. **Set `draft: false`** when ready to publish

7. **Commit & push** to deploy

### Adding a New Page:

1. **Create file**: `src/content/pages/new-page.md`
2. **Add frontmatter** with page settings
3. **Write content**
4. **Update navigation** in `src/config/site.ts` if needed
5. **Create route** in `src/pages/` if custom layout needed

### Updating Site Information:

1. **Edit**: `src/config/site.ts`
2. **Update** contact info, social links, or navigation
3. **Save & deploy** - changes appear site-wide automatically

## 🎨 Content Formatting Tips

### Blog Post Structure

Your blog posts now feature a **hero banner** that automatically displays:
- **Background image** from your `image.url` field
- **Publication date** 
- **Post title** (becomes the main H1)
- **Description** (subtitle/excerpt)
- **Author information**

The content area below the hero is where your Markdown content appears.

### Complete Markdown Guide

#### Headings
```markdown
# Main Heading (H1) - Don't use this, it's auto-generated from title
## Section Heading (H2) 
### Subsection Heading (H3)
#### Small Heading (H4)
```

#### Text Formatting
```markdown
**Bold text** or __Bold text__
*Italic text* or _Italic text_
***Bold and italic***
~~Strikethrough text~~

`Code snippet` - for inline code
```

#### Lists
```markdown
- Bullet point
- Another point
  - Indented sub-point
  - Another sub-point

1. Numbered list
2. Second item
   1. Sub-numbered item
   2. Another sub-item

- [ ] Unchecked task
- [x] Completed task
```

#### Links and Images
```markdown
[Link text](https://example.com)
[Link with title](https://example.com "Hover title")

![Image alt text](/images/my-image.jpg)
![Image with title](/images/my-image.jpg "Image title")

<!-- Image with specific sizing -->
<img src="/images/my-image.jpg" alt="Description" width="500" height="300">
```

#### Quotes and Code
```markdown
> This is a blockquote
> It can span multiple lines
> 
> And have multiple paragraphs

```javascript
// Code block with syntax highlighting
function hello() {
    console.log("Hello, world!");
}
```

```python
# Python code example
def greet(name):
    return f"Hello, {name}!"
```
```

#### Tables
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1    | Data     | More data|
| Row 2    | Data     | More data|

<!-- Alignment -->
| Left | Center | Right |
|:-----|:------:|------:|
| Left | Center | Right |
```

#### Special Elements
```markdown
---
Horizontal rule (divider line)

**Safari Tip:** Use bold for highlighting important tips

*Travel Note:* Use italics for side notes or commentary

1. **Planning Phase** - Bold for step names
   - Research destinations
   - Book accommodations
   
2. **Departure Phase**
   - Pack essentials
   - Check documents
```

#### Image Best Practices

**Hero Image Requirements:**
- **Size**: Minimum 1200px wide × 500px tall
- **Format**: JPG or PNG
- **Location**: Place in `public/images/blog-posts/post-name/`
- **Naming**: Use descriptive names like `kenya-safari-sunset.jpg`

**In-Content Images:**
```markdown
![Detailed alt text for accessibility](/images/blog-posts/my-post/content-image.jpg)

<!-- For larger images -->
<img src="/images/blog-posts/my-post/wide-landscape.jpg" 
     alt="Panoramic view of Serengeti plains" 
     width="800" 
     style="width: 100%; height: auto;">
```

### Special Features:

**Featured Posts**: Set `featured: true` in frontmatter to show in featured section

**Draft Posts**: Set `draft: true` to hide from public while working

**SEO Optimization**: Always fill out `description` and `image` fields

**Tags**: Use consistent tags across posts for better organization

**Reading Time**: Automatically calculated from word count

## 🚀 Publishing Process

1. **Write/edit** your content
2. **Preview locally** (ask dev team to show you)
3. **Commit changes** to Git
4. **Deploy automatically** via CI/CD
5. **Check live site** to verify changes

## 🆘 Common Issues & Solutions

**Problem**: "My new blog post doesn't appear"
**Solution**: Check that `draft: false` in frontmatter

**Problem**: "Navigation link not working"
**Solution**: Ensure the `href` path matches your file structure

**Problem**: "Images not showing"
**Solution**: Place images in `public/images/` and reference as `/images/filename.jpg`

**Problem**: "SEO title/description not updating"
**Solution**: Check the frontmatter fields match the schema exactly

## 🏗️ Layout Architecture (For Reference)

Your blog posts use **BlogLayout** instead of the standard **BaseLayout**:

- **BaseLayout**: Wraps content in `<main>` tags - used for regular pages
- **BlogLayout**: No `<main>` wrapper - allows full-width hero banners

This enables the hero banner to extend edge-to-edge while keeping the content area properly contained.

## 📞 Getting Help

- **File structure questions**: Check this guide first
- **Markdown formatting**: Use the examples above
- **Image issues**: Ensure files are in `public/images/` and paths start with `/images/`
- **Hero banner problems**: Check image dimensions (min 1200×500px)
- **Technical issues**: Contact the development team
- **Content strategy**: Discuss with marketing team

## 🆘 Updated Common Issues

**Problem**: "My hero banner image isn't showing"
**Solution**: 
- Check image path starts with `/images/` not `./images/` 
- Ensure image exists in `public/images/blog-posts/your-post/`
- Verify image file name matches exactly (case-sensitive)

**Problem**: "My headings look wrong"
**Solution**: Don't use `# H1` in content - start with `## H2`

**Problem**: "Content is too wide"
**Solution**: This is normal for the hero section - content below is properly contained

Remember: Unlike WordPress, changes here are permanent once deployed, so double-check your work before publishing! 

## 📋 Quick Reference

### Blog Post Template
```markdown
---
title: 'Your Compelling Post Title'
description: 'Engaging subtitle that appears in hero and search results'
author: 'Your Name'
pubDate: 2025-01-20
image:
    url: '/images/blog-posts/post-slug/hero.jpg'
    alt: 'Descriptive alt text for accessibility'
tags: ["destination", "safari", "photography"]
draft: false
featured: false
---

Write your introduction paragraph here...

## Main Section Heading

Your content with **bold** and *italic* formatting.

### Subsection

More content here.

![Content image](/images/blog-posts/post-slug/content-image.jpg)

## Another Section

Continue your post...
```

### Most Common Markdown
```markdown
## Section Heading
### Subsection
**Bold for emphasis**
*Italic for notes*
[Link text](https://example.com)
![Image alt text](/images/path/to/image.jpg)

- Bullet point
- Another point

1. Numbered item
2. Another item

> Important quote or tip

**Pro Tip:** Use bold for highlighting key advice
```

### Image Cheat Sheet
- **Hero**: `1200×500px`, landscape, in `/images/blog-posts/post-name/hero.jpg`
- **Content**: Max `800px` wide, descriptive filename
- **Alt text**: Always include for accessibility
- **File paths**: Always start with `/images/` not `images/` or `./images/`

### Publishing Checklist
- [ ] Hero image uploaded (1200×500px minimum)
- [ ] All content images uploaded with descriptive names
- [ ] Frontmatter complete (title, description, author, date, image, tags)
- [ ] Content starts with ## (not #) headings
- [ ] All images have descriptive alt text
- [ ] Tags are consistent with other posts
- [ ] Set `draft: false` when ready to publish
- [ ] Preview looks good locally
- [ ] Commit and push to deploy 