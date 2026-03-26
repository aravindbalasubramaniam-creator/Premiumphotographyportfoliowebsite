import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface HeroProps {
  image: string;
  title: string;
  subtitle?: string;
}

export function Hero({ image, title, subtitle }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Parallax Image */}
      <motion.div
        className="absolute inset-0 w-full h-[120vh]"
        style={{ y }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ opacity }}
      >
        {/* Title and subtitle removed for cleaner hero banner */}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.2 }}
        style={{ opacity }}
      >
        <span className="text-white/60 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-white/40"
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}