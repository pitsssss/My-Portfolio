// src/components/sections/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/data';
import { useState, useEffect } from 'react';

export default function Hero() {
  // Generate stable random positions only on the client
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
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-6 text-center"
    >
      {/* Professional Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{ contain: 'strict' }}>
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'gridMove 20s linear infinite'
            }}
          />
        </div>

        {/* Floating Tech Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-8 h-8 border border-cyan-400/30 rounded-sm"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-emerald-400/20 rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-4 h-4 bg-violet-400/20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-5 h-5 border border-blue-400/30 rounded-full"
          animate={{ x: [0, 25, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Modern Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-56 md:h-56 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-72 md:h-72 bg-gradient-to-r from-violet-500/10 to-blue-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Subtle Particle Effects - Hydration Safe */}
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
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
            }}
          />
        ))}
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
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              background:
                'linear-gradient(90deg, #0ea5e9, #3b82f6, #8b5cf6)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            Full Stack Developer
          </motion.h1>

          <motion.p
            className="text-gray-300 mx-auto leading-relaxed mb-12 max-w-2xl"
            style={{ fontSize: 'clamp(1.125rem, 3.5vw, 1.375rem)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building the future with cutting-edge web technologies and innovative solutions
          </motion.p>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-5 mt-6"
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
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-7 py-3.5 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-cyan-400/40 hover:bg-gray-800/70 transition-all duration-300 text-base font-medium text-gray-200 hover:text-cyan-200"
            >
              <div className="transition-all duration-300 group-hover:scale-110">
                <item.icon size={22} />
              </div>
              <span>{item.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Custom Animation Keyframes */}
      <style jsx global>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
      `}</style>
    </section>
  );
}
