'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="min-h-screen flex flex-col items-center justify-center bg-gray-950 px-4 md:px-6 py-12 md:py-16 lg:py-20 relative"
    >

      {/* Background blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-4 z-10">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 p-7 md:p-9 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all h-full flex flex-col relative z-10"
            >
              <div className="flex items-center gap-5 mb-6">
                <skill.icon className="text-emerald-400 flex-shrink-0" size={32} />
                <h3 className="text-xl md:text-2xl font-bold text-white truncate">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 mb-5">
                <motion.div
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
              </div>
              <div className="mt-auto text-right text-lg font-semibold text-cyan-300">
                {skill.level}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
