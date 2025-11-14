// src/app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import type { SectionId } from '@/lib/types';
import Navbar from '@/components/layouts/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/ui/Footer';

// ✅ Define SectionId once in lib/types.ts and import it here
// Remove the duplicate local definition to avoid conflicts

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  useEffect(() => {
    // ✅ Declare the sections array here
    const sections: SectionId[] = ['hero', 'about', 'skills', 'projects', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id as SectionId);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.4, 
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden scroll-smooth">
      <Navbar activeSection={activeSection} />

      {/* Each section must have matching id */}
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}