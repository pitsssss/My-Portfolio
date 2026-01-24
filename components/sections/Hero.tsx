// // src/components/sections/Hero.tsx
// 'use client';

// import { motion } from 'framer-motion';
// import { Github, Linkedin, Mail } from 'lucide-react';
// import { SOCIAL_LINKS } from '@/lib/data';
// import { useState, useEffect } from 'react';

// export default function Hero() {
//   // Generate stable random positions only on the client
//   const [particles, setParticles] = useState<
//     { id: number; top: number; left: number }[]
//   >([]);

//   useEffect(() => {
//     const generated = Array.from({ length: 8 }, (_, i) => ({
//       id: i,
//       top: 10 + Math.random() * 80,
//       left: 10 + Math.random() * 80,
//     }));
//     setParticles(generated);
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-6 text-center"
//     >
//       {/* Professional Animated Background */}
//       <div className="absolute inset-0 z-0 pointer-events-none"
//         style={{ contain: 'strict' }}>
//         {/* Animated Grid Lines */}
//         <div className="absolute inset-0 opacity-10">
//           <div
//             className="absolute top-0 left-0 w-full h-full"
//             style={{
//               backgroundImage: `
//                 linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
//               `,
//               backgroundSize: '60px 60px',
//               animation: 'gridMove 20s linear infinite'
//             }}
//           />
//         </div>

//         {/* Floating Tech Elements */}
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-8 h-8 border border-cyan-400/30 rounded-sm"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//         />
//         <motion.div
//           className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-emerald-400/20 rounded-full"
//           animate={{ scale: [1, 1.3, 1] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-1/3 right-1/3 w-4 h-4 bg-violet-400/20"
//           animate={{ y: [0, -15, 0] }}
//           transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 left-1/3 w-5 h-5 border border-blue-400/30 rounded-full"
//           animate={{ x: [0, 25, 0] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//         />

//         {/* Modern Gradient Orbs */}
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.3, 0.5, 0.3]
//           }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-56 md:h-56 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl"
//           animate={{
//             scale: [1, 1.15, 1],
//             opacity: [0.2, 0.4, 0.2]
//           }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-72 md:h-72 bg-gradient-to-r from-violet-500/10 to-blue-500/10 rounded-full blur-2xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.15, 0.3, 0.15]
//           }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//         />

//         {/* Subtle Particle Effects - Hydration Safe */}
//         {particles.map((p) => (
//           <motion.div
//             key={p.id}
//             className="absolute w-1 h-1 bg-cyan-300/40 rounded-full"
//             animate={{
//               x: [0, Math.random() * 100 - 50],
//               y: [0, Math.random() * 100 - 50],
//               opacity: [0.4, 0.8, 0.4],
//             }}
//             transition={{
//               duration: 4 + Math.random() * 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: Math.random() * 2,
//             }}
//             style={{
//               top: `${p.top}%`,
//               left: `${p.left}%`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-3xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mb-8"
//         >
//           <motion.h1
//             className="font-bold mb-6 leading-tight"
//             style={{
//               fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
//               background:
//                 'linear-gradient(90deg, #0ea5e9, #3b82f6, #8b5cf6)',
//               backgroundSize: '200% 200%',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//             }}
//             animate={{
//               backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//             }}
//             transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
//           >
//             Full Stack Developer
//           </motion.h1>

//           <motion.p
//             className="text-gray-300 mx-auto leading-relaxed mb-12 max-w-2xl"
//             style={{ fontSize: 'clamp(1.125rem, 3.5vw, 1.375rem)' }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             Building the future with cutting-edge web technologies and innovative solutions
//           </motion.p>
//         </motion.div>

//         {/* Enhanced Social Links */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="flex flex-wrap justify-center gap-5 mt-6"
//         >
//           {[
//             { name: 'GitHub', icon: Github, link: SOCIAL_LINKS.github },
//             { name: 'LinkedIn', icon: Linkedin, link: SOCIAL_LINKS.linkedin },
//             { name: 'Email', icon: Mail, link: `mailto:${SOCIAL_LINKS.email}` },
//           ].map((item) => (
//             <motion.a
//               key={item.name}
//               href={item.link}
//               target={item.name === 'Email' ? '_self' : '_blank'}
//               rel={item.name === 'Email' ? undefined : 'noopener noreferrer'}
//               whileHover={{ y: -5, scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="group flex items-center gap-3 px-7 py-3.5 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-cyan-400/40 hover:bg-gray-800/70 transition-all duration-300 text-base font-medium text-gray-200 hover:text-cyan-200"
//             >
//               <div className="transition-all duration-300 group-hover:scale-110">
//                 <item.icon size={22} />
//               </div>
//               <span>{item.name}</span>
//             </motion.a>
//           ))}
//         </motion.div>
//       </div>

//       {/* Custom Animation Keyframes */}
//       <style jsx global>{`
//         @keyframes gridMove {
//           0% { background-position: 0 0; }
//           100% { background-position: 60px 60px; }
//         }
//       `}</style>
//     </section>
//   );
// }

// 'use client';

// import { motion } from 'framer-motion';
// import { Github, Linkedin, Mail } from 'lucide-react';
// import { SOCIAL_LINKS } from '@/lib/data';

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Ambient Background */}
//       <div className="absolute inset-0 -z-10">
//         {/* Gradient Orbs */}
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
//           transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
//           transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
//         />

//         {/* Grid */}
//         <div
//           className="absolute inset-0 opacity-[0.06]"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
//             `,
//             backgroundSize: '64px 64px',
//           }}
//         />
//       </div>

//       {/* Content */}
//       <div className="container text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: 'easeOut' }}
//           className="font-bold leading-tight mb-6"
//           style={{
//             fontSize: 'clamp(2.6rem, 7vw, 4.6rem)',
//             background:
//               'linear-gradient(90deg, #6366f1, #8b5cf6, #6366f1)',
//             backgroundSize: '200% 200%',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//           }}
//         >
//           Full Stack Developer
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mx-auto max-w-2xl text-muted mb-14"
//           style={{ fontSize: 'clamp(1.1rem, 3vw, 1.35rem)' }}
//         >
//           Building the future with cutting-edge web technologies and innovative solutions
//         </motion.p>

//         {/* Social Links */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.4 }}
//           className="flex flex-wrap justify-center gap-4"
//         >
//           {[
//             { icon: Github, label: 'GitHub', href: SOCIAL_LINKS.github },
//             { icon: Linkedin, label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
//             { icon: Mail, label: 'Email', href: `mailto:${SOCIAL_LINKS.email}` },
//           ].map((item) => (
//             <motion.a
//               key={item.label}
//               href={item.href}
//               target={item.label === 'Email' ? '_self' : '_blank'}
//               rel="noopener noreferrer"
//               whileHover={{ y: -4, scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="glass px-6 py-3 flex items-center gap-3 text-sm font-medium text-foreground hover:text-indigo-300 transition"
//             >
//               <item.icon size={18} />
//               {item.label}
//             </motion.a>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

function RotatingTorus({ scale }: { scale: number }) {
  const ref = useRef<any>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() / 2;
      ref.current.rotation.y = clock.getElapsedTime() / 3;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]} scale={scale}>
      <torusKnotGeometry args={[1, 0.35, 128, 32]} />
      <meshStandardMaterial color="#00fff0" metalness={0.6} roughness={0.2} />
    </mesh>
  );
}

export default function Hero() {
  // Media query for mobile screens
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const torusScale = isMobile ? 0.6 : 1;

  return (
    <section className="relative w-full h-screen bg-gray-950 flex items-center justify-center overflow-hidden">
      {/* 3D Canvas */}
      <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 5], fov: 50 }}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Stars
          radius={100}
          depth={50}
          count={isMobile ? 200 : 500}
          factor={4}
          saturation={0}
          fade
        />

        <RotatingTorus scale={torusScale} />

        <Sphere args={[isMobile ? 0.05 : 0.1, 32, 32]} position={[2, 1, -1]}>
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.5} />
        </Sphere>
        <Sphere args={[isMobile ? 0.04 : 0.08, 32, 32]} position={[-1.5, 0.8, 1]}>
          <meshStandardMaterial color="#10b981" transparent opacity={0.5} />
        </Sphere>
        <Sphere args={[isMobile ? 0.06 : 0.12, 32, 32]} position={[-2, -1, -0.5]}>
          <meshStandardMaterial color="#8b5cf6" transparent opacity={0.4} />
        </Sphere>
      </Canvas>

      {/* Hero Content */}
      <div className="z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Hi, I'm Peter Toss
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto"
        >
          Full Stack Engineer & AI Automation Engineer & Digital Marketing Specialist building amazing web and mobile experiences.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 inline-block px-6 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-base md:text-lg hover:scale-105 transition-transform duration-300"
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
}
