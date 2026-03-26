import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 2.2 }}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-6 md:py-8 flex items-center justify-between">
          <Link
            to="/"
            className="text-white text-xl md:text-2xl tracking-[0.15em] cursor-hover"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            ARAVIND BALA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white text-sm tracking-[0.15em] font-light transition-opacity duration-300 hover:opacity-60 ${
                  location.pathname === link.path ? 'opacity-100' : 'opacity-80'
                }`}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white cursor-hover"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 bg-black z-[999] md:hidden flex flex-col items-center justify-center"
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={false}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ duration: 0.4, delay: isMobileMenuOpen ? index * 0.1 : 0 }}
            >
              <Link
                to={link.path}
                className="text-white text-4xl tracking-[0.15em] font-light cursor-hover"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {link.label.toUpperCase()}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}