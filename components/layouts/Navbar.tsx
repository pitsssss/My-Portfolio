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

  // Close menu when scrolling
  useEffect(() => {
    if (isMenuOpen) {
      const closeMenuOnScroll = () => setIsMenuOpen(false);
      window.addEventListener('scroll', closeMenuOnScroll);
      return () => window.removeEventListener('scroll', closeMenuOnScroll);
    }
  }, [isMenuOpen]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-950/90 backdrop-blur-lg border-b border-gray-700/50'
          : 'bg-gray-950/70 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Left: Logo - Icon with name */}
        <div className="shrink-0 flex items-center gap-2">
          <motion.div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center cursor-pointer border border-gray-700/50"
            onClick={() => {
              scrollToSection('hero');
              setIsMenuOpen(false);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/favicon.ico" 
              alt="Peter Toss" 
              className="w-6 h-6 rounded-full object-cover"
            />
          </motion.div>
          <motion.span
            className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap cursor-pointer"
            onClick={() => {
              scrollToSection('hero');
              setIsMenuOpen(false);
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Peter Toss
          </motion.span>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-10">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsMenuOpen(false);
              }}
              className={`px-3 py-2 lg:px-4 lg:py-2.5 rounded-lg text-sm lg:text-base font-medium transition-all duration-200 whitespace-nowrap relative overflow-hidden
                ${
                  activeSection === item.id
                    ? 'text-emerald-300 bg-emerald-500/10'
                    : 'text-gray-300 hover:text-emerald-300 hover:bg-gray-800/50'
                }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavItem"
                  className="absolute inset-0 bg-emerald-500/10 rounded-lg z-[-1]"
                  transition={{ type: "spring", bounce: 0.25 }}
                />
              )}
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Right: Hamburger (mobile only) */}
        <div className="md:hidden ml-auto">
          <motion.button
            className="text-gray-300 hover:text-emerald-300 p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X size={24} className="text-emerald-400" />
            ) : (
              <Menu size={24} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-xl z-40"
          >
            {/* Close overlay on outside click */}
            <div 
              className="absolute inset-0" 
              onClick={() => setIsMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 120,
                duration: 0.4 
              }}
              className="absolute right-0 top-0 h-full w-full max-w-xs bg-gray-900/95 backdrop-blur-2xl border-l border-gray-800/50 flex flex-col"
            >
              {/* Header with logo and name */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center border border-gray-700/50">
                    <img 
                      src="/favicon.ico" 
                      alt="Peter Toss" 
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  </div>
                  <div className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Peter Toss
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} className="text-gray-400 hover:text-emerald-400" />
                </motion.button>
              </div>

              {/* Navigation items */}
              <div className="flex-1 flex flex-col justify-center px-6 space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full py-4 px-4 rounded-xl font-medium text-lg transition-all duration-200 text-left relative group
                      ${
                        activeSection === item.id
                          ? 'bg-emerald-500/15 text-emerald-300 border-l-2 border-emerald-500'
                          : 'text-gray-300 hover:text-emerald-300 hover:bg-gray-800/40'
                      }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {activeSection === item.id && (
                        <motion.div
                          className="w-2 h-2 bg-emerald-500 rounded-full"
                          layoutId="activeIndicator"
                        />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* CTA Button */}
              <div className="p-6 border-t border-gray-800/50">
                <motion.button
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMenuOpen(false);
                  }}
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-bold text-base text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  Get in Touch
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
