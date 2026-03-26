import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface HorizontalScrollProps {
  images: string[];
  title?: string;
}

/**
 * Optional horizontal scrolling image gallery
 * Triggered by vertical scroll for a unique browsing experience
 */
export function HorizontalScroll({ images, title }: HorizontalScrollProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative py-24 md:py-32 overflow-hidden">
      {title && (
        <div className="px-6 md:px-12 mb-12">
          <h2
            className="text-white text-[clamp(2.5rem,6vw,4.5rem)] tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {title}
          </h2>
          <div className="h-px bg-white/20 w-32 mt-6" />
        </div>
      )}

      <motion.div
        className="flex gap-6"
        style={{ x }}
      >
        {/* Duplicate images for seamless loop effect */}
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[40vw] h-[60vh] relative overflow-hidden cursor-hover"
          >
            <motion.img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
