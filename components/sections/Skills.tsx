// src/components/sections/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { useState, useEffect } from 'react';

export default function Skills() {
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
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-950 px-4 md:px-6 py-16 md:py-20 lg:py-24 relative"
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

        {/* Floating Tech Elements */}
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
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(1.875rem, 6vw, 2.25rem)' }}
          >
            Technical Skills
          </h2>
          <div className="w-16 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-3"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 px-6 sm:px-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm p-7 md:p-8 rounded-2xl border border-gray-700/50 hover:border-emerald-500/40 transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-emerald-500/10"
            >
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 rounded-2xl -z-10 bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/20 group-hover:to-cyan-500/20 transition-all duration-500"></div>

              <div className="flex items-center gap-5 mb-6">
                <div className="p-3 bg-gray-700/50 rounded-xl group-hover:bg-emerald-500/10 transition-colors duration-300">
                  <skill.icon className="text-emerald-400 flex-shrink-0" size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white truncate">{skill.name}</h3>
              </div>

              <div className="w-full bg-gray-700/60 rounded-full h-3.5 mb-5 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 h-full rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                />
              </div>

              <div className="mt-auto flex justify-between items-center">
                <span className="text-sm text-gray-400">Proficiency</span>
                <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
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
