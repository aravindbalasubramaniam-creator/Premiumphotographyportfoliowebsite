export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  client?: string;
  year: string;
  coverImage: string;
  images: {
    url: string;
    caption?: string;
  }[];
  description: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "ethereal-visions",
    title: "Ethereal Visions",
    category: "Fashion Editorial",
    client: "Vogue India",
    year: "2024",
    coverImage: "https://images.unsplash.com/photo-1709887139259-e5fdce21afa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQyMzkxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      {
        url: "https://images.unsplash.com/photo-1709887139259-e5fdce21afa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQyMzkxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "A moment of stillness captured in motion"
      },
      {
        url: "https://images.unsplash.com/photo-1773574488217-eb936b733cae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZmFzaGlvbiUyMGx1eHVyeSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDIzOTE0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Form and fabric in dialogue"
      },
      {
        url: "https://images.unsplash.com/photo-1585439623131-6a91ce98e4c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2hlbWlhbiUyMGZhc2hpb24lMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc3NDIzOTE0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ],
    description: "An exploration of contemporary femininity through the lens of traditional Indian textiles. This editorial series merges heritage craftsmanship with modern sensibilities, creating a visual narrative that honors the past while embracing the future.",
    testimonial: {
      quote: "A masterful blend of cultural reverence and contemporary vision. Every frame tells a story.",
      author: "Priya Sharma",
      role: "Creative Director, Vogue India"
    }
  },
  {
    id: "silent-peaks",
    title: "Silent Peaks",
    category: "Landscape",
    year: "2024",
    coverImage: "https://images.unsplash.com/photo-1738245003191-8e56ed8a4bc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGRyYW1hdGljfGVufDF8fHx8MTc3NDIzOTE0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      {
        url: "https://images.unsplash.com/photo-1738245003191-8e56ed8a4bc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGRyYW1hdGljfGVufDF8fHx8MTc3NDIzOTE0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Where earth meets sky"
      },
      {
        url: "https://images.unsplash.com/photo-1599220191013-71404f71e8df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBzYW5kJTIwZHVuZXMlMjBzdW5zZXR8ZW58MXx8fHwxNzc0MTc2NjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Endless horizons"
      }
    ],
    description: "A cinematic journey through remote landscapes, capturing the raw beauty and solitude of nature's grandest theatres."
  },
  {
    id: "urban-geometry",
    title: "Urban Geometry",
    category: "Architecture",
    client: "Architectural Digest",
    year: "2023",
    coverImage: "https://images.unsplash.com/photo-1761870065047-f2da9429db23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzc0MjM5MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      {
        url: "https://images.unsplash.com/photo-1761870065047-f2da9429db23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzc0MjM5MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwaW50ZXJpb3IlMjBsdXh1cnklMjBkZXNpZ258ZW58MXx8fHwxNzc0MjM5MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Light as material"
      }
    ],
    description: "Exploring the intersection of minimalist design and spatial poetry in contemporary architecture.",
    testimonial: {
      quote: "Captures the essence of architectural vision with unparalleled clarity and artistic sensitivity.",
      author: "Marcus Chen",
      role: "Editor, Architectural Digest"
    }
  },
  {
    id: "still-moments",
    title: "Still Moments",
    category: "Still Life",
    year: "2024",
    coverImage: "https://images.unsplash.com/photo-1591030411230-90c20646b2e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHN0aWxsJTIwbGlmZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NDIzODQxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      {
        url: "https://images.unsplash.com/photo-1591030411230-90c20646b2e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHN0aWxsJTIwbGlmZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NDIzODQxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        url: "https://images.unsplash.com/photo-1770745560263-a8fc696de90b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRleHR1cmUlMjBhcnQlMjBkYXJrfGVufDF8fHx8MTc3NDIzOTE0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Texture and light in conversation"
      }
    ],
    description: "A meditative series finding extraordinary beauty in the mundane, where ordinary objects become subjects of contemplation."
  },
  {
    id: "nocturnal-streets",
    title: "Nocturnal Streets",
    category: "Street Photography",
    year: "2023",
    coverImage: "https://images.unsplash.com/photo-1639618068892-3e52108ca4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29keSUyMHN0cmVldCUyMHBob3RvZ3JhcGh5JTIwdXJiYW4lMjBuaWdodHxlbnwxfHx8fDE3NzQyMzkxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      {
        url: "https://images.unsplash.com/photo-1639618068892-3e52108ca4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29keSUyMHN0cmVldCUyMHBob3RvZ3JhcGh5JTIwdXJiYW4lMjBuaWdodHxlbnwxfHx8fDE3NzQyMzkxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Urban solitude"
      }
    ],
    description: "The city after dark—a study in shadow, neon, and human presence in metropolitan spaces."
  },
  {
    id: "luxury-essence",
    title: "Luxury Essence",
    category: "Product",
    client: "Hermès",
    year: "2024",
    coverImage: "https://images.unsplash.com/photo-1745284504942-2eb53650360a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBlbGVnYW50fGVufDF8fHx8MTc3NDIzOTE0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      {
        url: "https://images.unsplash.com/photo-1745284504942-2eb53650360a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBlbGVnYW50fGVufDF8fHx8MTc3NDIzOTE0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ],
    description: "Crafting visual narratives that elevate product into art, celebrating heritage and meticulous craftsmanship.",
    testimonial: {
      quote: "An impeccable eye for detail that truly understands luxury storytelling.",
      author: "Sophie Laurent",
      role: "Brand Director, Hermès"
    }
  },
  {
    id: "portraits-of-india",
    title: "Portraits of India",
    category: "Portrait",
    year: "2023",
    coverImage: "https://images.unsplash.com/photo-1639159635665-f41d83b1ad71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwd29tYW4lMjBhcnRpc3RpY3xlbnwxfHx8fDE3NzQyMzkxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      {
        url: "https://images.unsplash.com/photo-1639159635665-f41d83b1ad71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwd29tYW4lMjBhcnRpc3RpY3xlbnwxfHx8fDE3NzQyMzkxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Stories etched in faces"
      }
    ],
    description: "An intimate documentation of diverse lives across India, celebrating the human spirit in all its forms."
  }
];

export const aboutData = {
  name: "Aravind Bala",
  bio: "I'm a visual storyteller based between Mumbai and New Delhi, specializing in editorial, fashion, and documentary photography. My work explores the intersection of tradition and modernity, seeking to capture moments that transcend the ordinary.\n\nWith over a decade of experience, I've had the privilege of collaborating with leading publications and brands including Vogue India, Architectural Digest, Hermès, and National Geographic. My approach is rooted in patience, observation, and a deep respect for the subjects and stories I photograph.\n\nI believe photography is not just about capturing what we see, but revealing what we feel—creating images that resonate beyond the frame.",
  image: "https://images.unsplash.com/photo-1719257751404-1dea075324bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzQyMzkxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  awards: [
    "World Press Photo Award, 2023",
    "Sony World Photography Awards, Professional Winner 2022",
    "Featured in British Journal of Photography, 2021",
    "IPA International Photography Awards, Gold 2020"
  ],
  clients: [
    "Vogue India",
    "Architectural Digest",
    "Hermès",
    "National Geographic",
    "The New York Times",
    "Condé Nast Traveller"
  ]
};