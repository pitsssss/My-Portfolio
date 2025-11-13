'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="min-h-screen flex flex-col items-center justify-center bg-gray-950 px-4 md:px-6 py-12 md:py-16 lg:py-20"
    >
      <div className="w-full max-w-7xl mx-auto px-4">
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
          <p className="space-y-10 text-gray-400 mt-6 max-w-4xl mx-auto text-lg">
            Here are some of my recent works — built with performance, scalability, and user experience in mind.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group"
            >
              {/* Outer Card with rounded corners and overflow-hidden */}
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10">
                {/* INNER CONTENT WRAPPER with SAFE padding */}
                <div className="p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col flex-grow">
                  <div className="flex justify-between items-start gap-4 mb-7">
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <motion.a
                      href={project.link}
                      className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      whileHover={{ x: 6 }}
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink size={28} />
                    </motion.a>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-9 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-4 mb-9">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-5 py-2.5 bg-gray-700/60 text-emerald-400 text-base font-medium rounded-xl border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <motion.a
                    href={project.link}
                    className="mt-auto inline-flex items-center gap-3 text-cyan-400 font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-2"
                    whileHover={{ x: [0, 6, 0] }}
                  >
                    View Project
                    <ExternalLink size={20} />
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
