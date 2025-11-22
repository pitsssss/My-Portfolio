// src/lib/data.ts
import { Code, Server, Smartphone, Globe, GitBranch, Network, Frame } from 'lucide-react';

// ======================
// Skills & Projects (existing)
// ======================

export type Skill = {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  level: number;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export const skills: Skill[] = [
  { name: 'Next.js', icon: Code, level: 80 },
  { name: 'Laravel', icon: Code, level: 90 },
  { name: 'React.js', icon: Code, level: 65 },
  { name: 'TypeScript', icon: Code, level: 70 },
  { name: 'MySQL', icon: Server, level: 85 },
  { name: 'Git Version Control', icon: GitBranch, level: 60 },
  { name: 'RESTful APIs', icon: Network, level: 60 },
];


export const projects: Project[] = [
  {
    title: 'Syria Explorer – Digital Tourism Platform',
    description:
      'A startup‑stage digital platform built with Next.js, dedicated to showcasing Syria’s rich cultural heritage, historic sites, and traditions. Users can explore tourist destinations and ancient sites, and access articles, news and travel‑recommendations — all aimed at giving the world a fresh and authentic view of Syrian culture.',
    tech: ['React', 'Next.js', 'Typescript', 'GraphQL'],
    link: 'https://syriaexplorer.com/'
  },
  
  {
    title: 'Fatleh – Smart Tourism Platform',
    description:
      'A comprehensive tourism application designed to deliver a seamless travel experience across Syria. Users can explore destinations, hotels, restaurants, and activities; book ready-made or custom trips; and reserve flight tickets through integration with Amadeus API. The system also supports secure online payments via Stripe and real-time notifications for bookings.',
    tech: ['Laravel', 'Flutter', 'MySQL', 'Stripe'],
    link: 'https://github.com/pitsssss/Tourism-backend'
  },

  {
    title: 'Sokoban Game',
    description: 'A classic Sokoban puzzle game implemented in Java using Swing for the graphical user interface.The goal is to push all boxes onto designated target spots to complete each level.',
    tech: ['Java'],
    link: 'https://github.com/pitsssss/SokoBan-Game'
  }
];

// ======================
// Nav Items (existing)
// ======================

export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

// ======================
// ✅ NEW: Social Links (ADD THIS)
// ======================

export const SOCIAL_LINKS = {
  github: 'https://github.com/pitsssss',
  linkedin: 'https://linkedin.com/in/peter-toss',
  email: 'petertoss2004@gmail.com',
};