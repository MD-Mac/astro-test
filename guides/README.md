# Documentation & Guides

This folder contains all documentation for the Astro project.

## 📁 Guide Structure

### For Content Teams
- **`CONTENT_TEAM_GUIDE.md`** - Complete guide for blog posting and content management
- **`PAGE_CONTENT_GUIDE.md`** - Safe page content editing without touching code

### For Developers  
- **`README.md`** (this file) - Documentation overview
- **`PAGE_COLLECTIONS_STRATEGY.md`** - How to create new "page collections" for pages that don't fall into the generic collection.
- **Future guides** as the project grows

## 🛡️ Safety

This `guides/` folder is completely separate from the website code:
- ✅ Safe to add/edit documentation
- ✅ Won't affect website functionality  
- ✅ No build dependencies
- ✅ Easy to maintain

## 📝 Adding New Guides

When adding new documentation:
1. Create `.md` files in this folder
2. Use clear, descriptive filenames
3. Update this README with new guide descriptions
4. Keep guides focused and practical

## 🔗 Related Documentation

- Project README: `../README.md`
- Site Configuration: `../src/config/site.ts`
- Content Collections: `../src/content/config.ts` 