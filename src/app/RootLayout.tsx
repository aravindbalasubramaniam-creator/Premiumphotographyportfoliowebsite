import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { CustomCursor } from './components/CustomCursor';
import { FilmGrain } from './components/FilmGrain';
import { Preloader } from './components/Preloader';
import { usePageView } from './hooks/usePageView';

export function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Track page views for analytics
  usePageView();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          <CustomCursor />
          <FilmGrain />
          <Navigation />

          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>

          {/* Footer */}
          <footer className="bg-black border-t border-white/10 py-12 px-6 md:px-12">
            <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-white/40 text-sm tracking-wider">
                © 2024 Aravind Bala. All rights reserved.
              </p>

              <div className="flex gap-8">
                <a
                  href="https://instagram.com/arjunmehta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white/80 text-sm tracking-wider transition-colors duration-300 cursor-hover"
                >
                  Instagram
                </a>
                <a
                  href="mailto:hello@arjunmehta.photo"
                  className="text-white/40 hover:text-white/80 text-sm tracking-wider transition-colors duration-300 cursor-hover"
                >
                  Email
                </a>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
}