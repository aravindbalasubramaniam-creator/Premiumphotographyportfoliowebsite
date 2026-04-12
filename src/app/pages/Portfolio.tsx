import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { MasonryGallery } from '../components/MasonryGallery';
import { portfolioProjects as staticProjects, PortfolioProject } from '../data/portfolioData';
import { supabase } from '../../lib/supabase';

export function Portfolio() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const { data, error: supaError } = await supabase
          .from('projects')
          .select(`
            id,
            title,
            category,
            client,
            year,
            cover_image,
            description,
            testimonial_quote,
            testimonial_author,
            testimonial_role,
            project_images (
              url,
              caption
            )
          `);

        if (supaError) throw supaError;

        if (data && data.length > 0) {
          const mappedProjects: PortfolioProject[] = data.map((p) => ({
            id: p.id,
            title: p.title,
            category: p.category,
            client: p.client,
            year: p.year,
            coverImage: p.cover_image,
            description: p.description,
            images: p.project_images || [],
            ...(p.testimonial_quote ? {
              testimonial: {
                quote: p.testimonial_quote,
                author: p.testimonial_author,
                role: p.testimonial_role
              }
            } : {})
          }));
          setProjects(mappedProjects);
        } else {
          setProjects(staticProjects); // Fallback if no data
        }
      } catch (err: any) {
        console.warn('Supabase fetch failed (schema missing?), falling back to static data:', err.message);
        setError('Could not fetch from Supabase. Displaying fallback mock data.');
        setProjects(staticProjects);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

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
          {loading && <p className="text-white/40 mt-4 text-sm">Loading projects from Supabase...</p>}
          {error && <p className="text-amber-500/80 mt-4 text-sm">{error}</p>}
          <div className="h-px bg-white/20 w-48 mt-8" />
        </motion.div>

        {!loading && <MasonryGallery projects={projects} />}
      </div>
    </div>
  );
}
