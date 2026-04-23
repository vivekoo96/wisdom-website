import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-studio-bg/80 backdrop-blur-md border-studio-line py-4' : 'bg-transparent border-transparent py-8'}`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-studio-accent flex items-center justify-center font-black text-white text-lg rounded-sm">W</div>
            <span className="font-display font-extrabold text-2xl tracking-tighter uppercase whitespace-nowrap">Wisdom Studio</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${location.pathname === link.href ? 'text-studio-accent' : 'text-studio-dark/50 hover:text-studio-accent'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-studio-dark text-white px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-studio-accent transition-all hover:scale-105 active:scale-95">
              Hire Us
            </Link>
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-studio-accent">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed inset-0 z-[60] bg-studio-accent flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display font-black text-studio-dark text-3xl tracking-tighter uppercase">Wisdom</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-studio-dark">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {[{ name: 'Home', href: '/' }, ...navLinks].map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-display font-black text-studio-dark uppercase hover:italic transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
