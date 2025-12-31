
import React from 'react';
import { Github, Twitter, Linkedin, Instagram, MapPin, Briefcase, ShieldCheck, Code, Globe, Terminal } from 'lucide-react';
import { Project, Certificate, BlogPost, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus Security Dashboard',
    description: 'A comprehensive cybersecurity monitoring platform with real-time threat detection and AI-powered vulnerability assessment.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Gemini AI'],
    image: 'https://picsum.photos/seed/nexus/800/500',
    link: '#'
  },
  {
    id: '2',
    title: 'Prism Commerce',
    description: 'High-performance e-commerce engine with edge-caching, dynamic inventory, and premium glassmorphic UI elements.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://picsum.photos/seed/prism/800/500',
    link: '#'
  },
  {
    id: '3',
    title: 'Vault Cryptography Kit',
    description: 'A developer toolset for implementing end-to-end encryption and secure key management in modern web apps.',
    tags: ['Rust', 'WebAssembly', 'TypeScript', 'Security'],
    image: 'https://picsum.photos/seed/vault/800/500',
    link: '#'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: '1',
    title: 'Web Development',
    platform: 'The Clash Adda',
    year: '2025',
    image: 'https://drive.google.com/file/d/1mUWXV5Emfw_T_eqJOIzDlUa6j0uMgCuN/view?usp=drive_link'
  },
  {
    id: '2',
    title: 'Mobile Application Development',
    platform: 'The Clash Adda',
    year: '2025',
    image: 'https://drive.google.com/file/d/1pLcfRJBJ-heGtuKuLcofRQLmYJCQ0D35/view?usp=drive_link'
  },
  {
    id: '3',
    title: 'Certified Ethical Hacker (CEH)',
    platform: 'EC-Council',
    year: '2025',
    image: 'https://drive.google.com/file/d/1S4OHW7RInqdPFmchp3Jy5GYsXMPTEHia/view?usp=drive_link'
  },
  {
    id: '4',
    title: 'Build Your Own Al Assistant',
    platform: 'WsCube Tech',
    year: '2025',
    image: 'https://drive.google.com/file/d/1WArzUdjys_PF_xkEfv-3GdMv-2xhtujZ/view?usp=drive_link'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Securing Next.js Server Components: Best Practices',
    category: 'Cyber Security',
    date: 'Jan 15, 2025',
    image: 'https://picsum.photos/seed/blog1/600/400'
  },
  {
    id: '2',
    title: 'The Future of AI in Penetration Testing',
    category: 'Artificial Intelligence',
    date: 'Dec 22, 2024',
    image: 'https://picsum.photos/seed/blog2/600/400'
  },
  {
    id: '3',
    title: 'Zero Trust Architecture in Modern Cloud Apps',
    category: 'Cloud Infrastructure',
    date: 'Nov 05, 2024',
    image: 'https://picsum.photos/seed/blog3/600/400'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    title: 'Cyber Security Intern',
    company: 'SecureTech Systems',
    period: '2023 - Present',
    description: 'Performing vulnerability assessments and implementing security protocols for enterprise-level applications.'
  },
  {
    id: '2',
    title: 'Web Development',
    company: 'Self',
    period: '2022 - 2023',
    description: 'Contributing to secure coding standards and auditing critical open-source packages for vulnerabilities.'
  },
  {
    id: '3',
    title: 'Front-End Developer',
    company: 'Self',
    period: '2024 - 2025',
    description: 'Managing a developer community of 50k+ members, organizing technical workshops and CTF challenges.'
  }
];

export const SKILLS = [
  'React', 'Node.js', 'TypeScript', 'HTML', 'Cyber Security', 
  'Typing', 'Tailwind CSS', 'Data Base', 'Network Management', 'Bug Bounty', 
  'Penetration Testing', 'Framer Motion', 'Java Script', 'Python'
];
