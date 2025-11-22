// src/components/sections/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useState, useEffect } from 'react';

const CONTACT_INFO = {
  email: 'petertoss2004@gmail.com',
  linkedin: 'linkedin.com/in/peter-toss',
  github: 'github.com/pitsssss',
};

export default function Contact() {
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
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-950 px-4 md:px-6 py-12 md:py-16 lg:py-20 relative"
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

      <div className="w-full max-w-6xl mx-auto px-4 z-10">
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
            style={{ fontSize: 'clamp(2rem, 5.5vw, 2.5rem)' }}
          >
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind? Feel free to reach out — I’d love to hear from you!
          </p>
        </motion.div>

        {/* Enhanced Social/Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-700/40 p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-emerald-500/10 transition-all duration-300"
        >
          <h3 className="text-center mb-10">
            <span className="inline-flex items-center gap-4 bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
              <Mail size={36} className="flex-shrink-0 text-emerald-400" />
              <span
                className="font-extrabold tracking-tight"
                style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.25rem)' }}
              >
                Connect With Me
              </span>
            </span>
          </h3>

          <div className="space-y-5 max-w-3xl mx-auto">
            {[
              {
                icon: Mail,
                title: 'Email',
                value: CONTACT_INFO.email,
                color: 'text-emerald-400',
                bg: 'bg-emerald-500/10',
                href: `mailto:${CONTACT_INFO.email}`
              },
              {
                icon: Linkedin,
                title: 'LinkedIn',
                value: CONTACT_INFO.linkedin,
                color: 'text-cyan-400',
                bg: 'bg-cyan-500/10',
                href: `https://${CONTACT_INFO.linkedin}`
              },
              {
                icon: Github,
                title: 'GitHub',
                value: CONTACT_INFO.github,
                color: 'text-purple-400',
                bg: 'bg-purple-500/10',
                href: `https://${CONTACT_INFO.github}`
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.title === 'Email' ? '_self' : '_blank'}
                  rel={item.title === 'Email' ? undefined : 'noopener noreferrer'}
                  className="block group"
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col sm:flex-row items-center gap-5 p-5 rounded-2xl bg-gray-700/20 hover:bg-gray-700/30 border border-transparent hover:border-emerald-500/30 transition-all duration-300">
                    <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`${item.color}`} size={28} />
                    </div>
                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-cyan-300 transition-colors text-base md:text-lg break-all">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
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
