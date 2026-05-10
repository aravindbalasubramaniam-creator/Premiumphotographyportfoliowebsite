import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const updateMousePosition = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => {
      setTimeout(() => setIsClicking(false), 150);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isVisible, rawX, rawY]);

  if (isMobile) return null;

  const ringSize = isHovering ? 48 : 36;
  const ringColor = isClicking ? '#ef4444' : 'rgba(255,255,255,0.85)';
  const dotColor = isClicking ? '#ef4444' : 'rgba(255,255,255,0.95)';

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] custom-cursor"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Outer circle ring */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: '50%',
          border: `1.5px solid ${ringColor}`,
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          borderColor: ringColor,
          scale: isClicking ? 0.88 : 1,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      />

      {/* Center dot */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          translateX: '-50%',
          translateY: '-50%',
          width: 5,
          height: 5,
          borderRadius: '50%',
          backgroundColor: dotColor,
        }}
        animate={{
          backgroundColor: dotColor,
          scale: isClicking ? 1.8 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </motion.div>
  );
}