# Premium Photography Portfolio - Usage Guide

## Getting Started

Your premium photography portfolio website is ready to use! Here's how to customize and extend it.

## Quick Customization Checklist

### 1. Update Portfolio Content

Edit `/src/app/data/portfolioData.ts`:

```typescript
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "your-project-slug",
    title: "Your Project Title",
    category: "Portrait", // Fashion Editorial, Portrait, Landscape, etc.
    client: "Client Name", // Optional
    year: "2024",
    coverImage: "https://your-image-url.jpg",
    images: [
      {
        url: "https://your-image-url.jpg",
        caption: "Optional caption" // Optional
      }
    ],
    description: "Project description...",
    testimonial: { // Optional
      quote: "Client feedback...",
      author: "Client Name",
      role: "Client Role"
    }
  }
];
```

### 2. Update About Page Information

In `/src/app/data/portfolioData.ts`, modify the `aboutData` object:

```typescript
export const aboutData = {
  name: "Your Name",
  bio: "Your bio...",
  image: "https://your-headshot-url.jpg",
  awards: [
    "Award Name, Year",
    // Add more awards
  ],
  clients: [
    "Client Name",
    // Add more clients
  ]
};
```

### 3. Customize Branding

**Update name throughout:**
- Navigation component (`/src/app/components/Navigation.tsx`)
- Preloader component (`/src/app/components/Preloader.tsx`)
- Home page hero (`/src/app/pages/Home.tsx`)
- Footer in RootLayout (`/src/app/RootLayout.tsx`)

**Update contact information:**
- Email links in Contact page and Footer
- Social media links in Contact page and Footer
- Update Instagram handle

### 4. Change Color Scheme

Edit `/src/styles/index.css` to modify:
- Background colors
- Text colors
- Border colors
- Selection colors
- Scrollbar colors

Example - changing to dark gray instead of pure black:
```css
body {
  background-color: #0a0a0a;
}
```

### 5. Modify Typography

**Change headline font:**
1. Update font import in `/src/styles/fonts.css`
2. Replace `'Cormorant Garamond'` throughout components

**Change body font:**
1. Update font import in `/src/styles/fonts.css`
2. Update `font-family` in `/src/styles/index.css`

### 6. Adjust Animation Timings

Edit Motion component `transition` props:
- Faster animations: reduce `duration` values
- Different easing: change `ease` array values
- Disable animations: remove `initial`, `animate` props

Example:
```tsx
// Current (slow, cinematic)
transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}

// Faster
transition={{ duration: 0.4 }}

// No animation
// Remove initial/animate props entirely
```

## Advanced Customization

### Adding New Pages

1. Create page component in `/src/app/pages/YourPage.tsx`
2. Add route in `/src/app/routes.ts`:
```typescript
{
  path: 'your-page',
  Component: YourPage,
}
```
3. Add link to navigation in `/src/app/components/Navigation.tsx`

### Adding Video Support

Replace hero image with video:

```tsx
// In Hero.tsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="your-video.mp4" type="video/mp4" />
</video>
```

### Connecting to a CMS

Popular headless CMS options:
- **Sanity.io**: Real-time updates, image CDN
- **Contentful**: Enterprise-grade, great API
- **Strapi**: Self-hosted, full control
- **WordPress (headless)**: Familiar interface

Example Sanity integration:
```typescript
// Install: npm install @sanity/client
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true,
});

// Fetch projects
const projects = await client.fetch('*[_type == "project"]');
```

### Adding Analytics

**Google Analytics 4:**

1. Add script to your HTML file:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

2. Update `/src/app/hooks/usePageView.ts`:
```typescript
if (typeof window.gtag !== 'undefined') {
  window.gtag('event', 'page_view', {
    page_path: location.pathname + location.search,
  });
}
```

**Plausible Analytics:**

1. Add script to HTML:
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

2. Update hook (auto-tracks page views)

### Adding Contact Form Backend

**Using Formspree:**
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* Your form fields */}
</form>
```

**Using Netlify Forms:**
```tsx
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  {/* Your form fields */}
</form>
```

**Using Custom API:**
```typescript
const onSubmit = async (data: FormData) => {
  const response = await fetch('https://your-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  
  if (response.ok) {
    setIsSubmitted(true);
  }
};
```

### Performance Optimization

**Image Optimization:**
1. Use WebP format for better compression
2. Implement responsive images with `srcset`
3. Use CDN (Cloudflare, Imgix, Cloudinary)

**Lazy Loading:**
```tsx
<img
  loading="lazy"
  src="image.jpg"
  alt="Description"
/>
```

**Code Splitting:**
React Router automatically code-splits by route. No action needed!

## SEO Best Practices

### 1. Update Meta Descriptions
Edit SEO component calls in each page with relevant descriptions.

### 2. Add Structured Data
```tsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Photographer",
  "url": "https://yourwebsite.com",
  "sameAs": [
    "https://instagram.com/yourhandle"
  ]
})}
</script>
```

### 3. Generate Sitemap
Use tools like `react-router-sitemap` or create manually.

### 4. Add robots.txt
```
User-agent: *
Allow: /
Sitemap: https://yourwebsite.com/sitemap.xml
```

## Deployment

### Netlify (Recommended)
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Vercel
1. Import repository
2. Framework preset: Vite
3. Deploy!

### Custom Server
1. Build: `npm run build`
2. Upload `dist` folder to server
3. Configure server to serve `index.html` for all routes

## Maintenance

### Adding New Projects
1. Take high-quality photos (minimum 2000px width)
2. Upload to image hosting (Cloudinary, Imgix, S3)
3. Add project object to `portfolioData.ts`
4. Deploy changes

### Updating Content
All text content lives in:
- `/src/app/data/portfolioData.ts` (projects & about)
- Individual page components (static text)

### Monitoring Performance
- Use Google Lighthouse
- Check Core Web Vitals
- Monitor with analytics

## Troubleshooting

### Custom Cursor Not Showing
- Check that you're on desktop (cursor hidden on mobile)
- Verify CSS `cursor: none` is applied
- Check browser console for errors

### Images Not Loading
- Verify image URLs are accessible
- Check for CORS issues
- Ensure images are properly imported

### Animations Not Smooth
- Reduce `duration` values
- Check for heavy images (compress them)
- Test on different devices

### Form Not Submitting
- Check form validation
- Verify backend endpoint
- Check browser console for errors

## Support & Resources

- **React Router Docs**: https://reactrouter.com
- **Motion Docs**: https://motion.dev
- **Tailwind CSS**: https://tailwindcss.com
- **React Hook Form**: https://react-hook-form.com

## Tips for Success

1. **Use High-Quality Images**: Minimum 2000px width for best results
2. **Keep Load Times Fast**: Compress images, use CDN
3. **Test on Real Devices**: Don't rely only on browser DevTools
4. **Maintain Consistency**: Use the same image aspect ratios
5. **Update Regularly**: Keep portfolio fresh with new work
6. **Get Feedback**: Share with trusted colleagues before launch

---

**Need help?** Check the PROJECT_STRUCTURE.md for technical details about the codebase.

**Ready to customize?** Start with updating `/src/app/data/portfolioData.ts` with your own projects!
