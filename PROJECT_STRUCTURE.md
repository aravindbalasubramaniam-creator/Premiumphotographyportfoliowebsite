# Premium Photography Portfolio - Project Structure

## Overview
A premium, editorial-style photography portfolio website featuring cinematic transitions, custom cursor, parallax effects, and masonry gallery layouts.

## Core Features Implemented

### Visual & Interaction Design
- ✅ Full-bleed hero with edge-to-edge imagery
- ✅ Custom cursor (desktop only) with hover interactions
- ✅ Preloader with logo/name reveal animation
- ✅ Film grain overlay for tactile depth
- ✅ Parallax scrolling on hero sections
- ✅ Smooth page transitions (fade effect)
- ✅ Scroll-triggered animations (0.6-0.8s easing)
- ✅ Large editorial typography (80-120px headlines)
- ✅ Hover states on gallery items revealing title/category

### Gallery & Lightbox
- ✅ Masonry-style gallery grid (responsive: 1/2/3 columns)
- ✅ Lightbox for full-resolution viewing
- ✅ Keyboard navigation (ESC, ←, →)
- ✅ Image captions and counters

### Navigation
- ✅ Transparent navigation over hero
- ✅ Sticky nav with backdrop blur on scroll
- ✅ Fullscreen mobile menu overlay
- ✅ Smooth transitions between pages

### Pages
- ✅ **Home**: Hero + Featured Work + Philosophy + CTA
- ✅ **Portfolio**: Complete masonry gallery
- ✅ **Project Detail**: Immersive project pages with testimonials
- ✅ **About**: Personal bio + awards + clients
- ✅ **Contact**: Form with validation + contact info
- ✅ **404**: Custom not found page

### Forms & Data
- ✅ Contact form with React Hook Form validation
- ✅ Project type selector
- ✅ Preferred date input
- ✅ Form submission feedback

### Technical
- ✅ React Router (Data mode) for multi-page navigation
- ✅ SEO meta tags (title, description, OG, Twitter Card)
- ✅ Analytics hooks (placeholder ready)
- ✅ Mobile-first responsive design
- ✅ Performance optimizations
- ✅ Accessibility considerations

## Typography System

### Serif (Headlines) - Cormorant Garamond
- Used for: Hero titles, section headings, editorial text
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold)
- Creates high-contrast, editorial feel

### Sans-Serif (UI/Body) - Inter
- Used for: Navigation, body text, captions, form labels
- Weights: 300, 400, 500, 600
- Clean, geometric, modern

## Color Palette
- **Primary Background**: Black (#000)
- **Text**: White with opacity variations (100%, 80%, 60%, 50%, 40%)
- **Borders**: White with 10-40% opacity
- **Accents**: Film grain overlay, subtle gradients

## File Structure

```
/src/app/
├── components/
│   ├── CustomCursor.tsx      # Custom cursor with hover states
│   ├── FilmGrain.tsx          # Noise overlay for texture
│   ├── Hero.tsx               # Full-bleed parallax hero
│   ├── Lightbox.tsx           # Full-screen image viewer
│   ├── MasonryGallery.tsx     # Responsive masonry grid
│   ├── Navigation.tsx         # Sticky nav with mobile menu
│   ├── Preloader.tsx          # Intro animation
│   ├── ContactForm.tsx        # Validated contact form
│   └── SEO.tsx                # Meta tags manager
├── pages/
│   ├── Home.tsx               # Homepage
│   ├── Portfolio.tsx          # Gallery page
│   ├── ProjectDetail.tsx      # Individual project
│   ├── About.tsx              # About page
│   ├── Contact.tsx            # Contact page
│   └── NotFound.tsx           # 404 page
├── data/
│   └── portfolioData.ts       # Project data & content
├── hooks/
│   └── usePageView.ts         # Analytics tracking
├── routes.ts                  # React Router configuration
├── RootLayout.tsx             # Global layout wrapper
└── App.tsx                    # Main app entry
```

## Motion & Animation Timing

All animations use refined easing curves for a premium feel:
- **Page transitions**: 0.5s, ease `[0.43, 0.13, 0.23, 0.96]`
- **Scroll reveals**: 0.6-0.8s, viewport-triggered
- **Hover effects**: 0.3-0.6s
- **Preloader**: 2s display, 0.6s fade out
- **Navigation**: Delays staggered (2.2s after preload)

## Content Management

All portfolio content is stored in `/src/app/data/portfolioData.ts`:
- Project information
- Image arrays with captions
- Client testimonials
- About page content
- Awards and clients lists

To add/edit projects, simply modify this data file. No code changes needed.

## Mobile Responsiveness

- **Desktop**: 3-column masonry, custom cursor, larger typography
- **Tablet**: 2-column masonry, touch interactions
- **Mobile**: 1-column layout, hamburger menu, adaptive typography

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Performance Considerations

- Lazy loading with `whileInView` animations
- Viewport margins for early triggering (-100px)
- Optimized image loading via Unsplash CDN
- Minimal JavaScript bundle
- CSS animations hardware-accelerated

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid, Flexbox
- ES6+ features
- Motion API (Framer Motion)

## Future Enhancement Ideas

1. Add horizontal scroll gallery for select projects
2. Implement kinetic typography effects
3. Add video support for hero backgrounds
4. Create ambient auto-scrolling image strips
5. Integrate with a headless CMS (Contentful, Sanity, etc.)
6. Add Instagram feed integration
7. Implement image lazy loading with blur-up effect
8. Add WebGL image transitions
9. Create case study template variations
10. Add client login area for private galleries

## Customization Guide

### To change colors:
Edit `/src/styles/theme.css` and `/src/styles/index.css`

### To change fonts:
Edit `/src/styles/fonts.css` and update `fontFamily` in components

### To modify animations:
Adjust Motion component props in individual components

### To add new projects:
Add objects to `portfolioProjects` array in `/src/app/data/portfolioData.ts`

### To connect analytics:
Update `/src/app/hooks/usePageView.ts` with your provider

### To modify navigation:
Edit `navLinks` array in `/src/app/components/Navigation.tsx`

## Credits & Acknowledgments

- **Design Inspiration**: Bharat Sikka, Avani Rai, Awwwards winners
- **Typography**: Google Fonts (Cormorant Garamond, Inter)
- **Images**: Unsplash
- **Icons**: Lucide React
- **Motion**: Motion (formerly Framer Motion)
- **Routing**: React Router v7
- **Forms**: React Hook Form

---

**Note**: This is a frontend prototype. For production use with real data, connect to a CMS or database solution.
