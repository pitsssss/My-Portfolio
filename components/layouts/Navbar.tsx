// src/components/Navbar.tsx
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

  // Close menu on route change or scroll
  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    window.addEventListener('scroll', closeMenu);
    return () => window.removeEventListener('scroll', closeMenu);
  }, []);

  // Prevent background scroll when menu is open (mobile UX best practice)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <div className="shrink-0 flex items-center gap-2.5">
          <motion.div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center cursor-pointer border border-gray-700/50 overflow-hidden"
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
              className="w-full h-full object-cover"
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

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsMenuOpen(false);
              }}
              className={`relative px-4 py-2.5 rounded-xl text-sm lg:text-base font-medium transition-all duration-200 whitespace-nowrap
                ${
                  activeSection === item.id
                    ? 'text-emerald-300 bg-emerald-500/10'
                    : 'text-gray-300 hover:text-emerald-300 hover:bg-gray-800/50'
                }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavItem"
                  className="absolute inset-0 bg-emerald-500/10 rounded-xl z-[-1]"
                  transition={{ type: "spring", bounce: 0.25, stiffness: 300 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-auto">
          <motion.button
            className="text-gray-300 hover:text-emerald-300 p-2.5 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X size={26} className="text-emerald-400" />
            ) : (
              <Menu size={26} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: "spring", 
                damping: 28, 
                stiffness: 180,
                mass: 0.8
              }}
              className="md:hidden fixed right-0 top-0 h-screen w-full max-w-xs bg-gray-900/98 backdrop-blur-2xl border-l border-gray-800/60 flex flex-col z-50"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 pb-8 border-b border-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center border border-gray-700/50 overflow-hidden">
                    <img 
                      src="/favicon.ico" 
                      alt="Peter Toss" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Peter Toss
                  </span>
                </div>
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close menu"
                >
                  <X size={22} className="text-gray-400 hover:text-emerald-400" />
                </motion.button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 flex flex-col justify-center px-6 space-y-4 py-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full py-4 px-5 rounded-xl font-medium text-lg transition-all duration-200 text-left relative group
                      ${
                        activeSection === item.id
                          ? 'bg-emerald-500/15 text-emerald-300 border-l-2 border-emerald-500'
                          : 'text-gray-300 hover:text-emerald-300 hover:bg-gray-800/40'
                      }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.04, duration: 0.25 }}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.985 }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {activeSection === item.id && (
                        <motion.div
                          className="w-2.5 h-2.5 bg-emerald-500 rounded-full"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                      )}
                    </div>
                  </motion.button>
                ))}
              </nav>

              {/* CTA */}
              <div className="p-6 pt-4 border-t border-gray-800/50">
                <motion.button
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMenuOpen(false);
                  }}
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-bold text-base text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.35 }}
                >
                  Get in Touch
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
