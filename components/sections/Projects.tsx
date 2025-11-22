// src/components/sections/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data';
import { useState, useEffect } from 'react';

export default function Projects() {
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
      id="projects"
      className="min-h-screen flex flex-col items-center justify-start bg-gray-950 px-4 md:px-6 py-16 md:py-20 lg:py-24 pt-24 md:pt-28 lg:pt-38 relative"
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(1.875rem, 6vw, 2.25rem)' }}
          >
            Featured Projects
          </h2>
          <div className="w-16 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg leading-relaxed">
            Here are some of my recent works — built with performance, scalability, and user experience in mind.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 px-6 sm:px-6 ">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/40 overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10">
                <div className="p-7 md:p-8 lg:p-10 flex flex-col h-full">
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      whileHover={{ x: 4 }}
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>

                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-7 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 bg-gray-700/60 text-emerald-300 text-sm font-medium rounded-lg border border-gray-600/50 transition-colors duration-200 group-hover:border-emerald-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-cyan-400 font-semibold text-base md:text-lg w-max"
                    whileHover={{ x: 4 }}
                  >
                    View Project
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
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
