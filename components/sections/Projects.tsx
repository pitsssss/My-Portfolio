'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="min-h-screen flex flex-col items-center justify-center bg-gray-950 px-4 md:px-6 py-12 md:py-16 lg:py-20 relative"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 z-10">
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
          <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg">
            Here are some of my recent works — built with performance, scalability, and user experience in mind.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
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
              {/* Outer Card with rounded corners and overflow-hidden */}
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/10 relative z-10">
                {/* INNER CONTENT WRAPPER with SAFE padding */}
                <div className="p-6 sm:p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-start gap-3 mb-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <motion.a
                      href={project.link}
                      className="text-cyan-400 opacity-100 sm:opacity-0 group-hover:sm:opacity-100 transition-opacity flex-shrink-0"
                      whileHover={{ x: 4 }}
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>

                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-700/60 text-emerald-400 text-xs sm:text-sm font-medium rounded-lg border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <motion.a
                    href={project.link}
                    className="mt-auto inline-flex items-center gap-2 text-cyan-400 font-semibold text-base sm:text-lg opacity-100 transition-opacity"
                    whileHover={{ x: [0, 4, 0] }}
                  >
                    View Project
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
