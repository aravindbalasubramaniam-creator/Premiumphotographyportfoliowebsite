import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    setIsMobile(window.innerWidth < 768);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      // Keep red color for a brief moment after release
      setTimeout(() => {
        setIsClicking(false);
      }, 150);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Camera Viewfinder */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] custom-cursor"
        style={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        {/* Viewfinder Frame - 60x60px */}
        <div className="relative w-[60px] h-[60px]">
          
          {/* Focus Indicator Ring */}
          <motion.div
            className={`absolute inset-2 border rounded-full transition-colors duration-150 ${
              isClicking ? 'border-red-500/60' : 'border-white/40'
            }`}
            animate={{
              scale: isHovering ? [1, 1.1, 1] : 1,
              opacity: isHovering ? [0.4, 0.7, 0.4] : 0.4,
            }}
            transition={{
              duration: isHovering ? 0.8 : 0.3,
              repeat: isHovering ? Infinity : 0,
            }}
          />
        </div>
      </motion.div>
      
      {/* Small center dot for precision */}
      <motion.div
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] custom-cursor transition-colors duration-150 ${
          isClicking ? 'bg-red-500' : 'bg-white/90'
        }`}
        style={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        animate={{
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}