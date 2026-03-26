import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { MasonryGallery } from '../components/MasonryGallery';
import { SEO } from '../components/SEO';
import { portfolioProjects } from '../data/portfolioData';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function Home() {
  const featuredProjects = portfolioProjects.slice(0, 6);

  return (
    <div className="bg-black min-h-screen">
      <SEO
        title="Home"
        description="Aravind Bala is a visual storyteller specializing in editorial, fashion, and documentary photography. Based in Mumbai and New Delhi."
        image="https://images.unsplash.com/photo-1563721465742-cc3ead9deb36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2d1ZSUyMGZhc2hpb24lMjBlZGl0b3JpYWwlMjBkcmFtYXRpY3xlbnwxfHx8fDE3NzQyMzkxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Hero Section */}
      <Hero
        image="https://images.unsplash.com/photo-1563721465742-cc3ead9deb36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2d1ZSUyMGZhc2hpb24lMjBlZGl0b3JpYWwlMjBkcmFtYXRpY3xlbnwxfHx8fDE3NzQyMzkxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        title="ARAVIND BALA"
        subtitle="Visual Storyteller"
      />

      {/* Featured Work Section */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-white text-[clamp(3rem,8vw,6rem)] mb-4 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Featured Work
            </h2>
            <div className="h-px bg-white/20 w-32" />
          </motion.div>

          <MasonryGallery projects={featuredProjects} />

          <motion.div
            className="mt-16 md:mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 text-white border border-white/40 px-8 py-4 hover:bg-white hover:text-black transition-all duration-500 cursor-hover group"
            >
              <span className="text-sm tracking-[0.2em] uppercase">View All Work</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-white text-[clamp(2.5rem,6vw,5rem)] mb-8 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Creating images that resonate beyond the frame
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Photography is not just about capturing what we see, but revealing what we feel.
              Every project is an opportunity to tell a story that transcends the ordinary.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-white border border-white/40 px-8 py-4 hover:bg-white hover:text-black transition-all duration-500 cursor-hover"
            >
              <span className="text-sm tracking-[0.2em] uppercase">About Me</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Ambient Image Strip */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1659990589738-c653e1c96239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMGxhbmRzY2FwZSUyMG5hdHVyZSUyMGNpbmVtYXRpY3xlbnwxfHx8fDE3NzQyMzkxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
          }}
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-white text-[clamp(2.5rem,6vw,5rem)] mb-8 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Let's create something memorable
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Available for commissions, editorial projects, and creative collaborations worldwide.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-white border border-white/40 px-10 py-5 hover:bg-white hover:text-black transition-all duration-500 cursor-hover text-base"
            >
              <span className="tracking-[0.2em] uppercase">Get In Touch</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}