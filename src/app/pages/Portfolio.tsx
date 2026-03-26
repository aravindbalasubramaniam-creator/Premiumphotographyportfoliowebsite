import { motion } from 'motion/react';
import { MasonryGallery } from '../components/MasonryGallery';
import { portfolioProjects } from '../data/portfolioData';

export function Portfolio() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1
            className="text-white text-[clamp(3rem,10vw,7rem)] mb-6 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Portfolio
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl">
            A curated collection of editorial, fashion, and documentary work spanning over a decade
            of visual storytelling.
          </p>
          <div className="h-px bg-white/20 w-48 mt-8" />
        </motion.div>

        <MasonryGallery projects={portfolioProjects} />
      </div>
    </div>
  );
}
