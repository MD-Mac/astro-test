# Page Content Management Guide

This guide explains how to safely edit page content without touching HTML, CSS, or breaking the website.

## ✅ Safe Content Areas (Content Team Access)

### 📁 `src/content/page-content/` 
**Purpose**: Edit text, titles, and descriptions for existing pages  
**File Type**: JSON files  
**Safety**: ✅ Safe to edit - won't break website structure

#### Blog Page Content: `src/content/page-content/blog.json`

```json
{
  "pageTitle": "Travel Blog",
  "pageSubtitle": "Discover amazing travel stories...",
  "metaTitle": "Travel Blog | Rhino Africa",
  "metaDescription": "Discover amazing travel stories...",
  "sections": {
    "featured": {
      "title": "Latest News",
      "subtitle": "Keeping up with the most interesting news."
    },
    "allPosts": {
      "title": "All Posts",
      "subtitle": "Browse all our travel stories"
    }
  }
}
```

**What each field does:**
- `pageTitle`: Main heading displayed on the page
- `pageSubtitle`: Subtitle text below the main heading  
- `metaTitle`: Browser tab title and SEO title
- `metaDescription`: Search engine description
- `sections.featured.title`: Heading for featured posts section
- `sections.featured.subtitle`: Description for featured posts section
- `sections.allPosts.title`: Heading for all posts section

### 📁 `src/content/blog/`
**Purpose**: Blog post content and metadata  
**File Type**: Markdown (.md) files  
**Safety**: ✅ Safe to edit - content only

## ❌ Restricted Areas (Developer Only)

### 📁 `src/pages/`
**Purpose**: HTML structure, CSS styling, JavaScript functionality  
**File Type**: .astro files  
**Safety**: ❌ Do not edit - can break website

### 📁 `src/components/`
**Purpose**: Reusable website components  
**Safety**: ❌ Do not edit - can break website

### 📁 `src/layouts/`
**Purpose**: Page templates and structure  
**Safety**: ❌ Do not edit - can break website

## 📝 How to Edit Page Content

### Step 1: Locate the Content File
- Find the JSON file in `src/content/page-content/`
- Each page has its own JSON file (e.g., `blog.json` for the blog page)

### Step 2: Edit the Content
- Open the JSON file in your text editor
- Modify the text values (keep the field names the same)
- Save the file

### Step 3: Preview Changes
- Refresh the website to see your changes
- Changes appear immediately after saving

## 🛡️ Safety Rules

### ✅ DO:
- Edit text content in JSON files
- Change titles, descriptions, and subtitles
- Add new blog posts in `src/content/blog/`
- Follow the existing JSON structure

### ❌ DON'T:
- Edit .astro files (contains HTML/CSS/JavaScript)
- Change JSON field names (only change the values)
- Delete required fields from JSON files
- Edit files outside the `src/content/` folder

## 🆘 If Something Breaks

If you accidentally break something:
1. **Don't panic** - all changes are tracked in Git
2. Contact the development team immediately
3. Provide details about what you changed
4. We can quickly restore the previous version

## 📋 Quick Reference

| Content Type | Location | Safe to Edit |
|--------------|----------|--------------|
| Page titles/text | `src/content/page-content/*.json` | ✅ Yes |
| Blog posts | `src/content/blog/*.md` | ✅ Yes |
| Navigation | `src/config/site.ts` | ⚠️ Ask developer |
| Page structure | `src/pages/*.astro` | ❌ No |
| Styling | `src/styles/*.css` | ❌ No |

## 💡 Need to Add a New Page?

Contact the development team to:
1. Create the page structure (.astro file)
2. Set up the content file for you to edit
3. Add it to the navigation if needed

This ensures the technical implementation is done safely while giving you full control over the content. 