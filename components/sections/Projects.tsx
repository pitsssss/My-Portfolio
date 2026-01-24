// // // src/components/sections/Projects.tsx
// // 'use client';

// // import { motion } from 'framer-motion';
// // import { ExternalLink } from 'lucide-react';
// // import { projects } from '@/lib/data';
// // import { useState, useEffect } from 'react';

// // export default function Projects() {
// //   const [particles, setParticles] = useState<
// //     { id: number; top: number; left: number }[]
// //   >([]);

// //   useEffect(() => {
// //     const generated = Array.from({ length: 8 }, (_, i) => ({
// //       id: i,
// //       top: 10 + Math.random() * 80,
// //       left: 10 + Math.random() * 80,
// //     }));
// //     setParticles(generated);
// //   }, []);

// //   return (
// //     <section
// //       id="projects"
// //       className="min-h-screen flex flex-col items-center justify-start bg-gray-950 px-4 md:px-6 py-16 md:py-20 lg:py-24 pt-24 md:pt-28 lg:pt-38 relative"
// //     >
// //       {/* Professional Animated Background */}
// //       <div className="absolute inset-0 z-0 pointer-events-none"
// //         style={{ contain: 'strict' }}>
// //         {/* Animated Grid */}
// //         <div className="absolute inset-0 opacity-10">
// //           <div
// //             className="absolute top-0 left-0 w-full h-full"
// //             style={{
// //               backgroundImage: `
// //                 linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
// //                 linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
// //               `,
// //               backgroundSize: '60px 60px',
// //               animation: 'gridMove 20s linear infinite',
// //             }}
// //           />
// //         </div>

// //         {/* Floating Tech Elements */}
// //         <motion.div
// //           className="absolute top-1/4 left-1/4 w-8 h-8 border border-cyan-400/30 rounded-sm"
// //           animate={{ rotate: 360 }}
// //           transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
// //         />
// //         <motion.div
// //           className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-emerald-400/20 rounded-full"
// //           animate={{ scale: [1, 1.3, 1] }}
// //           transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
// //         />
// //         <motion.div
// //           className="absolute top-1/3 right-1/3 w-4 h-4 bg-violet-400/20"
// //           animate={{ y: [0, -15, 0] }}
// //           transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
// //         />
// //         <motion.div
// //           className="absolute bottom-1/4 left-1/3 w-5 h-5 border border-blue-400/30 rounded-full"
// //           animate={{ x: [0, 25, 0] }}
// //           transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
// //         />

// //         {/* Gradient Orbs */}
// //         <motion.div
// //           className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
// //           animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
// //           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
// //         />
// //         <motion.div
// //           className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-56 md:h-56 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl"
// //           animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
// //           transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
// //         />
// //         <motion.div
// //           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-72 md:h-72 bg-gradient-to-r from-violet-500/10 to-blue-500/10 rounded-full blur-2xl"
// //           animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
// //           transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
// //         />

// //         {/* Hydration-Safe Particles */}
// //         {particles.map((p) => (
// //           <motion.div
// //             key={p.id}
// //             className="absolute w-1 h-1 bg-cyan-300/40 rounded-full"
// //             animate={{
// //               x: [0, Math.random() * 100 - 50],
// //               y: [0, Math.random() * 100 - 50],
// //               opacity: [0.4, 0.8, 0.4],
// //             }}
// //             transition={{
// //               duration: 4 + Math.random() * 4,
// //               repeat: Infinity,
// //               ease: 'easeInOut',
// //               delay: Math.random() * 2,
// //             }}
// //             style={{ top: `${p.top}%`, left: `${p.left}%` }}
// //           />
// //         ))}
// //       </div>

// //       <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 z-10">
// //         {/* Section Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //           className="text-center mb-16"
// //         >
// //           <h2
// //             className="font-bold text-white"
// //             style={{ fontSize: 'clamp(1.875rem, 6vw, 2.25rem)' }}
// //           >
// //             Featured Projects
// //           </h2>
// //           <div className="w-16 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4"></div>
// //           <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg leading-relaxed">
// //             Here are some of my recent works — built with performance, scalability, and user experience in mind.
// //           </p>
// //         </motion.div>

// //         {/* Projects Grid */}
// //         <div className="grid grid-cols-1 gap-8 px-6 sm:px-6 ">
// //           {projects.map((project, index) => (
// //             <motion.div
// //               key={project.title}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.6, delay: index * 0.1 }}
// //               whileHover={{ y: -8 }}
// //               className="group"
// //             >
// //               <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/40 overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10">
// //                 <div className="p-7 md:p-8 lg:p-10 flex flex-col h-full">
// //                   <div className="flex justify-between items-start gap-4 mb-6">
// //                     <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
// //                       {project.title}
// //                     </h3>
// //                     <motion.a
// //                       href={project.link}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
// //                       whileHover={{ x: 4 }}
// //                       aria-label={`View ${project.title}`}
// //                     >
// //                       <ExternalLink size={20} />
// //                     </motion.a>
// //                   </div>

// //                   <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-7 flex-grow">
// //                     {project.description}
// //                   </p>

// //                   {/* Tech Stack Tags */}
// //                   <div className="flex flex-wrap gap-2 mb-7">
// //                     {project.tech.map((tech) => (
// //                       <span
// //                         key={tech}
// //                         className="px-3.5 py-1.5 bg-gray-700/60 text-emerald-300 text-sm font-medium rounded-lg border border-gray-600/50 transition-colors duration-200 group-hover:border-emerald-500/30"
// //                       >
// //                         {tech}
// //                       </span>
// //                     ))}
// //                   </div>

// //                   {/* View Button */}
// //                   <motion.a
// //                     href={project.link}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="mt-auto inline-flex items-center gap-2 text-cyan-400 font-semibold text-base md:text-lg w-max"
// //                     whileHover={{ x: 4 }}
// //                   >
// //                     View Project
// //                     <ExternalLink size={18} />
// //                   </motion.a>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       <style jsx global>{`
// //         @keyframes gridMove {
// //           0% { background-position: 0 0; }
// //           100% { background-position: 60px 60px; }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }
// 'use client';

// import { motion, useMotionValue, useTransform } from 'framer-motion';
// import { ExternalLink } from 'lucide-react';
// import { projects } from '@/lib/data';

// function ProjectCard({ project, index }: any) {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useTransform(y, [-50, 50], [8, -8]);
//   const rotateY = useTransform(x, [-50, 50], [-8, 8]);

//   function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     x.set(e.clientX - rect.left - rect.width / 2);
//     y.set(e.clientY - rect.top - rect.height / 2);
//   }

//   function handleMouseLeave() {
//     x.set(0);
//     y.set(0);
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       style={{ perspective: 1000 }}
//     >
//       <motion.div
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         style={{ rotateX, rotateY }}
//         className="
//           glass rounded-2xl p-8
//           border border-white/5
//           hover:border-emerald-400/30
//           transition-all
//           h-full flex flex-col
//         "
//       >
//         <div className="flex items-start justify-between gap-4 mb-5">
//           <h3 className="text-xl md:text-2xl font-bold">
//             {project.title}
//           </h3>

//           <a
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-emerald-400 hover:translate-x-1 transition-transform"
//             aria-label={`View ${project.title}`}
//           >
//             <ExternalLink size={20} />
//           </a>
//         </div>

//         <p className="text-muted mb-6 leading-relaxed">
//           {project.description}
//         </p>

//         {/* Tech Stack */}
//         <div className="flex flex-wrap gap-2 mb-6">
//           {project.tech.map((tech: string) => (
//             <span
//               key={tech}
//               className="
//                 px-3 py-1.5 text-sm rounded-lg
//                 bg-white/5 border border-white/10
//                 text-emerald-300
//               "
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         <a
//           href={project.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-auto inline-flex items-center gap-2 text-emerald-400 font-semibold"
//         >
//           View Project
//           <ExternalLink size={16} />
//         </a>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function Projects() {
//   return (
//     <section id="projects" className="relative py-28 overflow-hidden">
//       {/* Ambient Background */}
//       <div className="absolute inset-0 -z-10">
//         <motion.div
//           className="absolute top-1/3 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
//           transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
//           transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
//         />
//       </div>

//       <div className="container">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Featured Projects
//           </h2>
//           <div className="mx-auto w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
//           <p className="text-muted mt-6 max-w-2xl mx-auto text-lg">
//             Selected projects showcasing my focus on clean architecture,
//             performance, and user experience.
//           </p>
//         </motion.div>

//         {/* Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard
//               key={project.title}
//               project={project}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// 'use client';

// import { motion, useMotionValue, useTransform } from 'framer-motion';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Torus, Sphere, OrbitControls } from '@react-three/drei';
// import { ExternalLink } from 'lucide-react';
// import { projects } from '@/lib/data';
// import React, { useRef } from 'react';

// // ----------------------------
// // 3D Rotating Element
// // ----------------------------
// function RotatingTorus() {
//   const ref = useRef<any>(null);

//   useFrame(({ clock }) => {
//     if (ref.current) {
//       ref.current.rotation.x = clock.getElapsedTime() / 2;
//       ref.current.rotation.y = clock.getElapsedTime() / 3;
//     }
//   });

//   return (
//     <mesh ref={ref} position={[0, 0, 0]}>
//       <torusKnotGeometry args={[1, 0.3, 128, 32]} />
//       <meshStandardMaterial color="#00fff0" metalness={0.6} roughness={0.2} />
//     </mesh>
//   );
// }

// // ----------------------------
// // Project Card with 3D Parallax
// // ----------------------------
// function ProjectCard({ project, index }: any) {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useTransform(y, [-50, 50], [8, -8]);
//   const rotateY = useTransform(x, [-50, 50], [-8, 8]);

//   function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     x.set(e.clientX - rect.left - rect.width / 2);
//     y.set(e.clientY - rect.top - rect.height / 2);
//   }

//   function handleMouseLeave() {
//     x.set(0);
//     y.set(0);
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       style={{ perspective: 1200 }}
//     >
//       <motion.div
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         style={{ rotateX, rotateY }}
//         className="
//           glass p-8 rounded-2xl
//           border border-white/10
//           hover:border-emerald-400/30
//           flex flex-col h-full transition-all
//         "
//       >
//         <div className="flex justify-between items-start gap-4 mb-5">
//           <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
//             {project.title}
//           </h3>
//           <a
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-emerald-400 hover:translate-x-1 transition-transform"
//             aria-label={`View ${project.title}`}
//           >
//             <ExternalLink size={20} />
//           </a>
//         </div>

//         <p className="text-gray-300 mb-6 leading-relaxed">
//           {project.description}
//         </p>

//         <div className="flex flex-wrap gap-2 mb-6">
//           {project.tech.map((tech: string) => (
//             <span
//               key={tech}
//               className="px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/10 text-emerald-300"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         <a
//           href={project.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-auto inline-flex items-center gap-2 text-emerald-400 font-semibold"
//         >
//           View Project
//           <ExternalLink size={16} />
//         </a>
//       </motion.div>
//     </motion.div>
//   );
// }

// // ----------------------------
// // Main Projects Section
// // ----------------------------
// export default function Projects() {
//   return (
//     <section id="projects" className="relative py-28 overflow-hidden bg-gray-950">
//       {/* 3D Canvas Background */}
//       <Canvas
//         className="absolute inset-0 -z-10"
//         camera={{ position: [0, 0, 10], fov: 50 }}
//       >
//         <ambientLight intensity={0.4} />
//         <directionalLight position={[5, 5, 5]} intensity={1} />
//         <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />

//         {/* Floating Orbs */}
//         <Sphere args={[0.1, 32, 32]} position={[2, 1, -1]}>
//           <meshStandardMaterial color="#3b82f6" transparent opacity={0.5} />
//         </Sphere>
//         <Sphere args={[0.08, 32, 32]} position={[-1.5, 0.8, 1]}>
//           <meshStandardMaterial color="#10b981" transparent opacity={0.5} />
//         </Sphere>
//         <Sphere args={[0.12, 32, 32]} position={[-2, -1, -0.5]}>
//           <meshStandardMaterial color="#8b5cf6" transparent opacity={0.4} />
//         </Sphere>

//         <RotatingTorus />
//       </Canvas>

//       <div className="container">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//             Featured Projects
//           </h2>
//           <div className="mx-auto w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
//           <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
//             Selected projects showcasing clean architecture, performance, and UX.
//           </p>
//         </motion.div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={project.title} project={project} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, TorusKnot, OrbitControls } from '@react-three/drei';
import React, { useRef } from 'react';

// ----------------------------
// Rotating 3D Torus for Background
// ----------------------------
function RotatingTorus() {
  const ref = useRef<any>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() / 2;
      ref.current.rotation.y = clock.getElapsedTime() / 3;
    }
  });

  return (
    <TorusKnot ref={ref} args={[1, 0.3, 128, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#00fff0" metalness={0.6} roughness={0.2} />
    </TorusKnot>
  );
}

// ----------------------------
// Project Card Component
// ----------------------------
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);
  const shadow = useTransform([x, y], ([latestX, latestY]) =>
  `${-(latestX as number) / 8}px ${(latestY as number) / 8}px 30px rgba(0,255,200,0.15)`
);


  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, boxShadow: shadow }}
        className="
          glass p-8 rounded-3xl
          border border-white/10
          hover:border-emerald-400/30
          transition-all duration-300
          flex flex-col h-full
        "
      >
        <div className="flex justify-between items-start gap-4 mb-5">
          <h3 className="text-xl md:text-2xl font-bold text-white transition-colors group-hover:text-emerald-300">
            {project.title}
          </h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:translate-x-1 transition-transform"
            aria-label={`View ${project.title}`}
          >
            <ExternalLink size={20} />
          </a>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/10 text-emerald-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-emerald-400 font-semibold"
        >
          View Project
          <ExternalLink size={16} />
        </a>
      </motion.div>
    </motion.div>
  );
}

// ----------------------------
// Main Projects Section
// ----------------------------
export default function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden bg-gray-950">
      {/* 3D Canvas Background */}
      <Canvas className="absolute inset-0 -z-10" camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />

        {/* Floating Orbs */}
        <Sphere args={[0.1, 32, 32]} position={[2, 1, -1]}>
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.5} />
        </Sphere>
        <Sphere args={[0.08, 32, 32]} position={[-1.5, 0.8, 1]}>
          <meshStandardMaterial color="#10b981" transparent opacity={0.5} />
        </Sphere>
        <Sphere args={[0.12, 32, 32]} position={[-2, -1, -0.5]}>
          <meshStandardMaterial color="#8b5cf6" transparent opacity={0.4} />
        </Sphere>

        <RotatingTorus />
      </Canvas>

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <div className="mx-auto w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Selected projects showcasing clean architecture, performance, and UX.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
