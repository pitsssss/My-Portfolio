// // src/components/Navbar.tsx
// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import type { SectionId } from '@/lib/types';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, Navigation, X } from 'lucide-react';
// import { navItems } from '@/lib/data';
// import { scrollToSection } from '@/lib/utils';

// export default function Navbar({ activeSection }: { activeSection: SectionId }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close on ESC key
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') setIsMenuOpen(false);
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, []);

//   // Prevent background scroll
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isMenuOpen]);

//   return (
//     <motion.nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-gray-950/90 backdrop-blur-lg border-b border-gray-800/30'
//           : 'bg-gray-950/70 backdrop-blur-md'
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//     >
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 flex items-center justify-between h-16 lg:h-20">
//         {/* Logo */}
//         <div className="shrink-0 flex items-center gap-3">
//           <motion.div
//             className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center cursor-pointer border border-gray-700/50 overflow-hidden"
//             onClick={() => {
//               scrollToSection('hero');
//               setIsMenuOpen(false);
//             }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <img 
//               src="/favicon.ico" 
//               alt="Peter Toss" 
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//           <motion.span
//             className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap cursor-pointer"
//             onClick={() => {
//               scrollToSection('hero');
//               setIsMenuOpen(false);
//             }}
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             Peter Toss
//           </motion.span>
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex flex-1 justify-center items-center gap-7 lg:gap-9">
//           {navItems.map((item) => (
//             <motion.button
//               key={item.id}
//               onClick={() => {
//                 scrollToSection(item.id);
//                 setIsMenuOpen(false);
//               }}
//               className={`relative px-4 py-2 rounded-xl text-sm lg:text-base font-medium transition-all duration-200 whitespace-nowrap
//                 ${
//                   activeSection === item.id
//                     ? 'text-emerald-300'
//                     : 'text-gray-300 hover:text-emerald-300'
//                 }`}
//               whileHover={{ y: -2 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {item.label}
//               {activeSection === item.id && (
//                 <motion.div
//                   layoutId="activeNavItem"
//                   className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
//                   transition={{ type: "spring", bounce: 0.25 }}
//                 />
//               )}
//             </motion.button>
//           ))}
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden ml-auto">
//           <motion.button
//             className="p-2 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 transition-colors"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label= {!isMenuOpen ? "close navigation menu" : "Open navigation menu"}
//             whileTap={{ scale: 0.95 }}
//           >
//             {isMenuOpen ? <X size={24} className='txt-emerald-400'/>: <Menu size={24}/>}
            
//           </motion.button>
//         </div>
//       </div>

//      {/* Mobile Dropdown Menu */}
// <AnimatePresence>
//   {isMenuOpen && (
//     <motion.div
//       initial={{ opacity: 0, height: 0 }}
//       animate={{ opacity: 1, height: 'auto' }}
//       exit={{ opacity: 0, height: 0 }}
//       transition={{ duration: 0.25, ease: 'easeInOut' }}
//       className="md:hidden overflow-hidden bg-gray-900/85 backdrop-blur-xl border-t border-gray-800/40"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-5">
//         <div className="space-y-3">
//           {navItems.map((item, index) => (
//             <motion.button
//               key={item.id}
//               onClick={() => {
//                 scrollToSection(item.id);
//                 setIsMenuOpen(false);
//               }}
//               className={`w-full text-left py-3.5 px-4 rounded-xl font-medium text-lg transition-all duration-200 relative group
//                 ${
//                   activeSection === item.id
//                     ? 'text-emerald-300 bg-emerald-500/10'
//                     : 'text-gray-300 hover:text-emerald-200 hover:bg-gray-800/40'
//                 }`}
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.04, duration: 0.2 }}
//               whileHover={{ x: 6 }}
//               whileTap={{ scale: 0.985 }}
//             >
//               {item.label}
//               {activeSection === item.id && (
//                 <motion.div
//                   className="w-6 h-0.5 mt-2 ml-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
//                   layoutId="mobileActiveIndicator"
//                   transition={{ type: "spring", stiffness: 400, damping: 25 }}
//                 />
//               )}
//             </motion.button>
//           ))}

//           <motion.button
//             onClick={() => {
//               scrollToSection('contact');
//               setIsMenuOpen(false);
//             }}
//             className="w-full mt-4 py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-bold text-white shadow-sm hover:shadow-md transition-all duration-300"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.3 }}
//           >
//             Get in Touch
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>

//     </motion.nav>
//   );
// }


// 'use client';

// import { useState, useEffect } from 'react';
// import type { SectionId } from '@/lib/types';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import { navItems } from '@/lib/data';
// import { scrollToSection } from '@/lib/utils';

// export default function Navbar({ activeSection }: { activeSection: SectionId }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 12);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? 'hidden' : '';
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isMenuOpen]);

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//       className={`fixed inset-x-0 top-0 z-50 ${
//         isScrolled
//           ? 'glass shadow-lg'
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="container h-16 lg:h-20 flex items-center justify-between">
//         {/* Logo */}
//         <motion.button
//           onClick={() => scrollToSection('hero')}
//           className="flex items-center gap-3 group"
//           whileHover={{ scale: 1.04 }}
//         >
//           <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 border border-white/10 flex items-center justify-center">
//             <img
//               src="/favicon.ico"
//               alt="Peter Toss"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </div>

//           <span className="font-bold text-lg bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
//             Peter Toss
//           </span>
//         </motion.button>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-8">
//           {navItems.map((item) => (
//             <motion.button
//               key={item.id}
//               onClick={() => scrollToSection(item.id)}
//               className={`relative text-sm font-medium transition-colors ${
//                 activeSection === item.id
//                   ? 'text-indigo-300'
//                   : 'text-muted hover:text-indigo-300'
//               }`}
//               whileHover={{ y: -2 }}
//             >
//               {item.label}
//               {activeSection === item.id && (
//                 <motion.span
//                   layoutId="nav-indicator"
//                   className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
//                 />
//               )}
//             </motion.button>
//           ))}
//         </div>

//         {/* Mobile */}
//         <motion.button
//           className="md:hidden p-2 rounded-xl text-foreground hover:bg-white/5"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           whileTap={{ scale: 0.95 }}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
//         </motion.button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.25 }}
//             className="md:hidden glass border-t border-white/10"
//           >
//             <div className="container py-6 space-y-3">
//               {navItems.map((item, i) => (
//                 <motion.button
//                   key={item.id}
//                   onClick={() => {
//                     scrollToSection(item.id);
//                     setIsMenuOpen(false);
//                   }}
//                   className={`block w-full text-left px-4 py-3 rounded-xl text-lg ${
//                     activeSection === item.id
//                       ? 'bg-white/5 text-indigo-300'
//                       : 'text-muted hover:text-foreground'
//                   }`}
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.05 }}
//                 >
//                   {item.label}
//                 </motion.button>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import type { SectionId } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/data';
import { scrollToSection } from '@/lib/utils';

export default function Navbar({ activeSection }: { activeSection: SectionId }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll for background
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => {
            scrollToSection('hero');
            setIsMenuOpen(false);
          }}
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.04 }}
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 border border-white/10 flex items-center justify-center">
            <img
              src="/favicon.ico"
              alt="Peter Toss"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Peter Toss
          </span>
        </motion.button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-indigo-300'
                  : 'text-muted hover:text-indigo-300'
              }`}
              whileHover={{ y: -2 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          className="md:hidden p-2 rounded-xl text-foreground hover:bg-white/5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-t border-white/10 fixed inset-x-0 top-16 z-[1000]"
          >
            <div className="container py-6 space-y-3">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-lg ${
                    activeSection === item.id
                      ? 'bg-white/5 text-indigo-300'
                      : 'text-muted hover:text-foreground'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileTap={{ scale: 0.985 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
