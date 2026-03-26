import { motion, useScroll } from 'motion/react';

/**
 * Optional scroll progress indicator
 * Add to RootLayout to show scroll progress on all pages
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-white/20 z-[1001] origin-left"
      style={{ scaleX: scrollYProgress }}
    >
      <div className="h-full bg-white" />
    </motion.div>
  );
}
