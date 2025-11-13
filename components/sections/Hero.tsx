// src/components/sections/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/data';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-6 text-center"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1
            className="font-bold mb-6 leading-tight"
            style={{
              fontSize: 'clamp(2.25rem, 8vw, 4.5rem)', // 36px → 72px
              background:
                'linear-gradient(90deg, #10b981, #06b6d4, #3b82f6, #8b5cf6, #10b981)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            Full Stack Developer
          </motion.h1>

          <motion.p
            className="text-gray-300 mx-auto leading-relaxed whitespace-nowrap"
            style={{ fontSize: 'clamp(1rem, 3.5vw, 1.25rem)' }} // 16px → 20px
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building the future with cutting-edge web technologies and innovative solutions
          </motion.p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {[
            { name: 'GitHub', icon: Github, link: SOCIAL_LINKS.github },
            { name: 'LinkedIn', icon: Linkedin, link: SOCIAL_LINKS.linkedin },
            { name: 'Email', icon: Mail, link: `mailto:${SOCIAL_LINKS.email}` },
          ].map((item) => (
            <motion.a
              key={item.name}
              href={item.link}
              target={item.name === 'Email' ? '_self' : '_blank'}
              rel={item.name === 'Email' ? undefined : 'noopener noreferrer'}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-800/60 backdrop-blur-sm rounded-full border border-emerald-500/20 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors text-sm"
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}