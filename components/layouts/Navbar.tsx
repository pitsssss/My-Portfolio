// src/components/layout/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import type { SectionId } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/data';
import { scrollToSection } from '@/lib/utils';

export default function Navbar({ activeSection }: { activeSection: SectionId }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-950/90 backdrop-blur-lg border-b border-gray-700'
          : 'bg-gray-950/70 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Left: Logo */}
        <div className="shrink-0">
          <motion.div
            className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Peter Toss
          </motion.div>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-10">
          {navItems.map((item) => (
            <button
            key={item.id}
            onClick={() => {
              scrollToSection(item.id);
              setIsMenuOpen(false);
            }}
            className={`px-3 py-2 lg:px-4 lg:py-2.5 rounded-lg text-sm lg:text-base font-medium transition-colors duration-200 whitespace-nowrap
              ${
                activeSection === item.id
                  ? 'bg-emerald-500/20 text-emerald-300'
                  : 'text-gray-300 hover:text-emerald-300 hover:bg-gray-800/50'
              }`}
          >
            {item.label}
          </button>
          ))}
        </div>

        {/* Right: Hamburger (mobile only) */}
        <div className="md:hidden ml-auto">
          <button
            className="text-gray-300 hover:text-emerald-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 overflow-y-auto"
          >
            <div className="max-w-screen-sm mx-auto px-4 py-6 space-y-4">
              {/* Centered logo */}
              <div className="flex justify-center mb-6">
                <div className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Peter Toss
                </div>
              </div>

              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full py-3 rounded-lg font-medium text-base transition-colors ${
                    activeSection === item.id
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'text-gray-300 hover:text-emerald-300 hover:bg-gray-800/50'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-medium text-base shadow-sm shadow-emerald-500/20"
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}