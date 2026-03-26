# Quick Start Guide

## 🎨 Your Premium Photography Portfolio is Ready!

This is a complete, production-ready photography portfolio website with:

✅ Cinematic page transitions and animations  
✅ Custom cursor with hover effects  
✅ Masonry gallery with lightbox  
✅ Parallax scrolling  
✅ Mobile-responsive design  
✅ SEO optimization  
✅ Contact form with validation  

## 🚀 Immediate Next Steps

### 1. Add Your Projects (5 minutes)

Open `/src/app/data/portfolioData.ts` and replace the sample projects with your own:

```typescript
{
  id: "my-project",              // URL slug
  title: "My Amazing Project",   // Project title
  category: "Portrait",          // Category
  year: "2024",                  // Year
  coverImage: "URL_TO_IMAGE",    // Main image
  images: [                      // Project images
    { url: "IMAGE_URL", caption: "Optional caption" }
  ],
  description: "Project story...",
  testimonial: {                 // Optional
    quote: "Great work!",
    author: "Client Name",
    role: "Client Role"
  }
}
```

### 2. Update Your Information (3 minutes)

In the same file, update the `aboutData` section:

```typescript
export const aboutData = {
  name: "Your Name",
  bio: "Your story...",
  image: "YOUR_HEADSHOT_URL",
  awards: ["Award 1", "Award 2"],
  clients: ["Client 1", "Client 2"]
};
```

### 3. Customize Branding (2 minutes)

**Update your name in:**
- `/src/app/components/Navigation.tsx` (line 47)
- `/src/app/components/Preloader.tsx` (line 26)
- `/src/app/pages/Home.tsx` (line 33)

**Update contact info in:**
- `/src/app/pages/Contact.tsx`
- `/src/app/RootLayout.tsx` (footer)

### 4. Deploy! (5 minutes)

**Option A: Netlify (Easiest)**
1. Push code to GitHub
2. Go to netlify.com
3. Click "New site from Git"
4. Select your repo
5. Deploy!

**Option B: Vercel**
1. Push code to GitHub
2. Go to vercel.com
3. Import repository
4. Deploy!

## 📸 Image Requirements

For best results:
- **Minimum width**: 2000px
- **Format**: JPG or WebP
- **Quality**: High (but compressed)
- **Aspect ratio**: 3:4 (portrait) or 4:3 (landscape)

**Where to host images:**
- Cloudinary (recommended - free tier available)
- Imgix
- AWS S3
- Your own server

## 🎨 Design Customization

### Change Colors
Edit `/src/styles/index.css`:
```css
/* Replace black with your color */
.bg-black { background: #your-color; }
```

### Change Fonts
1. Edit `/src/styles/fonts.css` to import your fonts
2. Update `fontFamily` in components

### Adjust Animations
- **Slower**: Increase `duration` values in Motion components
- **Faster**: Decrease `duration` values
- **Disable**: Remove `initial` and `animate` props

## 🔧 Optional Enhancements

### Add a Blog
Create a new page in `/src/app/pages/Blog.tsx` and add route.

### Add Instagram Feed
Use Instagram API or embed widget in homepage.

### Add Video Support
Replace hero image with `<video>` element in `Hero.tsx`.

### Add Horizontal Scroll Gallery
Use the `HorizontalScroll` component (already created) in your pages.

### Connect to a CMS
Integrate with Sanity, Contentful, or Strapi for easier content management.

## 📊 SEO & Analytics

### Add Google Analytics
Update `/src/app/hooks/usePageView.ts` with your tracking ID.

### Improve SEO
- Update page titles and descriptions in each page
- Add alt text to all images
- Generate a sitemap
- Add robots.txt

## 🐛 Common Issues

**Custom cursor not showing?**  
- Only works on desktop (hidden on mobile)
- Check browser console for errors

**Images not loading?**  
- Verify URLs are publicly accessible
- Check for CORS issues

**Animations laggy?**  
- Compress your images
- Test on different devices
- Consider reducing animation complexity

## 📚 Documentation

- **PROJECT_STRUCTURE.md** - Technical architecture
- **USAGE_GUIDE.md** - Detailed customization guide
- **This file** - Quick start basics

## 🎯 Your Website Structure

```
Home Page (/)
├── Full-screen hero
├── Featured projects (6 shown)
├── Philosophy section
├── Ambient image strip
└── Contact CTA

Portfolio (/portfolio)
├── All projects in masonry grid
└── Click any project to view details

Project Detail (/portfolio/:id)
├── Full-screen hero
├── Project description
├── Image gallery with lightbox
├── Client testimonial (if available)
└── Next/Previous navigation

About (/about)
├── Parallax hero
├── Personal bio
├── Awards & recognition
├── Client list
└── Personal statement

Contact (/contact)
├── Contact form with validation
├── Contact information
└── Social links
```

## 🎉 You're All Set!

Your portfolio is production-ready. Just add your content and deploy!

**Questions?** Check the detailed guides in PROJECT_STRUCTURE.md and USAGE_GUIDE.md.

**Ready to go live?** Deploy to Netlify or Vercel in minutes!

---

**Pro tip**: Start by replacing just ONE project with your own work to get familiar with the structure. Then replace the rest!
