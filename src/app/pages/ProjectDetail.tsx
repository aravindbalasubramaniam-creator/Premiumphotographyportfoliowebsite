import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { portfolioProjects } from '../data/portfolioData';
import { Lightbox } from '../components/Lightbox';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function ProjectDetail() {
  const { id } = useParams();
  const project = portfolioProjects.find((p) => p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  if (!project) {
    return (
      <div className="bg-black min-h-screen pt-32 px-6 text-white text-center">
        <h1 className="text-4xl mb-4">Project not found</h1>
        <Link to="/portfolio" className="text-white/60 hover:text-white">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const currentProjectIndex = portfolioProjects.findIndex((p) => p.id === id);
  const nextProject = portfolioProjects[currentProjectIndex + 1];
  const prevProject = portfolioProjects[currentProjectIndex - 1];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Image with Parallax */}
      <div className="relative h-screen w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${project.coverImage})`,
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ opacity }}
        >
          <motion.p
            className="text-white/60 text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {project.category}
          </motion.p>

          <motion.h1
            className="text-white text-[clamp(3rem,10vw,7rem)] mb-4 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {project.title}
          </motion.h1>

          {project.client && (
            <motion.p
              className="text-white/70 text-sm md:text-base tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {project.client} • {project.year}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Project Info */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto space-y-16 md:space-y-24">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              className="cursor-hover"
              onClick={() => setLightboxIndex(index)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={image.url}
                  alt={image.caption || `${project.title} ${index + 1}`}
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              {image.caption && (
                <p className="text-white/50 text-sm mt-4 italic tracking-wide text-center">
                  {image.caption}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-white/[0.02]">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <blockquote
                className="text-white text-2xl md:text-3xl mb-8 leading-relaxed italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "{project.testimonial.quote}"
              </blockquote>
              <div>
                <p className="text-white/80 tracking-wide">{project.testimonial.author}</p>
                <p className="text-white/50 text-sm mt-1 tracking-wider">{project.testimonial.role}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center gap-8">
          {prevProject ? (
            <Link
              to={`/portfolio/${prevProject.id}`}
              className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 cursor-hover"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <div className="text-left">
                <p className="text-xs tracking-[0.2em] uppercase mb-1">Previous</p>
                <p className="text-base tracking-wide">{prevProject.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              to={`/portfolio/${nextProject.id}`}
              className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 cursor-hover"
            >
              <div className="text-right">
                <p className="text-xs tracking-[0.2em] uppercase mb-1">Next</p>
                <p className="text-base tracking-wide">{nextProject.title}</p>
              </div>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() =>
            setLightboxIndex((prev) =>
              prev !== null && prev < project.images.length - 1 ? prev + 1 : prev
            )
          }
          onPrev={() =>
            setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))
          }
        />
      )}
    </div>
  );
}
