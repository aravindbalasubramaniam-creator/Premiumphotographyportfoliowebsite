import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { PortfolioProject } from '../data/portfolioData';
import { Link } from 'react-router';

interface MasonryGalleryProps {
  projects: PortfolioProject[];
}

export function MasonryGallery({ projects }: MasonryGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 768) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  return (
    <Masonry columnsCount={columns} gutter="1.5rem">
      {projects.map((project, index) => (
        <Link
          key={project.id}
          to={`/portfolio/${project.id}`}
          className="relative block overflow-hidden cursor-hover group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <motion.img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black flex flex-col items-center justify-center p-8"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredIndex === index ? 0.85 : 0,
                }}
                transition={{ duration: 0.4 }}
              >
                <h3
                  className="text-white text-3xl md:text-4xl mb-2 tracking-wide text-center"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-white/70 text-xs tracking-[0.2em] uppercase">
                  {project.category}
                </p>
                {project.year && (
                  <p className="text-white/50 text-xs tracking-widest mt-2">
                    {project.year}
                  </p>
                )}
              </motion.div>
            </div>
          </motion.div>
        </Link>
      ))}
    </Masonry>
  );
}