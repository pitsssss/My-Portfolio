// src/components/sections/About.tsx
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function About() {
  const [particles, setParticles] = useState<
    { id: number; top: number; left: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      top: 10 + Math.random() * 80,
      left: 10 + Math.random() * 80,
    }));
    setParticles(generated);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-950 px-4 md:px-6 py-12 md:py-16 lg:py-20 text-center relative"
    >
      {/* Professional Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{ contain: 'strict' }}>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'gridMove 20s linear infinite',
            }}
          />
        </div>

        {/* Floating Geometric Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-8 h-8 border border-cyan-400/30 rounded-sm"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-emerald-400/20 rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-4 h-4 bg-violet-400/20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-5 h-5 border border-blue-400/30 rounded-full"
          animate={{ x: [0, 25, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-56 md:h-56 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-72 md:h-72 bg-gradient-to-r from-violet-500/10 to-blue-500/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Hydration-Safe Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 bg-cyan-300/40 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
            style={{ top: `${p.top}%`, left: `${p.left}%` }}
          />
        ))}
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(1.875rem, 6vw, 2.25rem)' }}
          >
            About Me
          </h2>
          <div className="w-16 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-3"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start text-left md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between h-full"
          >
            <div>
              <h3
                className="font-semibold mb-4"
                style={{ fontSize: 'clamp(1.5rem, 5vw, 1.875rem)' }}
              >
                Crafting Digital Experiences
              </h3>
              <p className="text-gray-300 mb-4 md:mb-5 leading-relaxed">
                With 2+ years of experience in full-stack development, I specialize
                in creating scalable, high-performance applications.
              </p>
              <p className="text-gray-300 mb-12 md:mb-16 lg:mb-20 leading-relaxed">
                I'm passionate about staying at the forefront of technology trends
                and implementing innovative solutions.
              </p>
            </div>

            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center 
    px-8 py-4 
    bg-gradient-to-r from-emerald-500 to-cyan-500 
    text-white font-semibold 
    rounded-xl 
    shadow-lg 
    hover:shadow-emerald-500/25 
    hover:shadow-xl 
    transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50
    text-lg md:text-xl 
    min-w-[200px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </motion.a>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-1 rounded-2xl shadow-lg">
              <div className="bg-gray-900 rounded-2xl p-6 md:p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '10+', label: 'Projects', color: 'text-emerald-400' },
                    { value: '5+', label: 'Clients', color: 'text-cyan-400' },
                    { value: '99%', label: 'Satisfaction', color: 'text-blue-400' },
                    { value: '24/7', label: 'Support', color: 'text-purple-400' },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div
                        className={`font-bold ${item.color}`}
                        style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)' }}
                      >
                        {item.value}
                      </div>
                      <div className="text-gray-400 text-xs md:text-sm mt-1">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
      `}</style>
    </section>
  );
}
