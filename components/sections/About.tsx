'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-950 px-4 md:px-6 py-12 md:py-16 lg:py-20 text-center relative"
    >

      {/* Background blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="w-full max-w-4xl mx-auto z-10">
        {/* Section Heading */}
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

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start text-left md:text-left">
          {/* Left Column */}
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
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-12 py-6 rounded-full font-semibold 
              text-2xl md:text-2xl 
              text-emerald-300 border-2 border-white 
              bg-transparent transition-all duration-300 ease-out
              hover:text-white hover:bg-emerald-500
              overflow-hidden group"
            >
              <span className="relative z-10">Download CV</span>
              <span
                className="absolute inset-0 rounded-full p-[2px] 
                bg-transparent 
                group-hover:bg-emerald-500 
                transition-colors duration-300"
              ></span>
            </motion.a>
          </motion.div>

          {/* Right Column */}
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
    </section>
  );
}