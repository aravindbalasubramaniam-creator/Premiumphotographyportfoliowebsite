import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Home, ArrowRight } from 'lucide-react';

export function NotFound() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-white text-[clamp(6rem,15vw,12rem)] mb-4 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            404
          </h1>
          
          <div className="h-px bg-white/20 w-48 mx-auto mb-8" />
          
          <p className="text-white/60 text-xl md:text-2xl mb-12 tracking-wide">
            This page seems to have wandered off the frame.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-white border border-white/40 px-8 py-4 hover:bg-white hover:text-black transition-all duration-500 cursor-hover"
            >
              <Home size={16} />
              <span className="text-sm tracking-[0.2em] uppercase">Back Home</span>
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 text-white border border-white/40 px-8 py-4 hover:bg-white hover:text-black transition-all duration-500 cursor-hover"
            >
              <span className="text-sm tracking-[0.2em] uppercase">View Portfolio</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
