// src/lib/data.ts
import { Code, Server, Smartphone, Globe } from 'lucide-react';

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
  { name: 'React/Next.js', icon: Code, level: 80 },
  { name: 'Laravel', icon: Server, level: 90 },
  { name: 'TypeScript', icon: Code, level: 70 },
  { name: 'MySQL', icon: Code, level: 85 },
  { name: 'Mobile Dev', icon: Smartphone, level: 60 },
  { name: 'Cloud/AWS', icon: Globe, level: 60 },
];

export const projects: Project[] = [
  {
    title: 'Syria Explorer – Digital Tourism Platform ',
    description: 'A startup‑stage digital platform built with Next.js',
    tech: ['React', 'Next.js', 'Typescript', 'GraphQL'],
    link: 'https://syriaexplorer.com/'
  },
  {
    title: 'Fatleh – Smart Tourism Platform: ',
    description: 'A comprehensive tourism application designed to deliver a seamless travel experience across Syria.',
    tech: ['Laravel', 'Flutter', 'MySQL', 'Stripe'],
    link: 'https://github.com/pitsssss/Tourism-backend'
  },
  {
    title: 'Task Management System',
    description: 'Collaborative productivity ToDo List tool with real-time sync and notifications',
    tech: ['PHP','Laravel','Firebase', 'Socket.io'],
    link: '#'
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