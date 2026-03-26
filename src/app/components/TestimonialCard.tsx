import { motion } from 'motion/react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

/**
 * Reusable testimonial card component
 * Can be used throughout the site for client feedback
 */
export function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white/[0.02] border border-white/10 p-8 md:p-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <blockquote
        className="text-white text-xl md:text-2xl mb-8 leading-relaxed italic"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        "{quote}"
      </blockquote>

      <div className="flex items-center gap-4">
        {image && (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="text-white/90 tracking-wide">{author}</p>
          <p className="text-white/50 text-sm mt-1 tracking-wider">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
