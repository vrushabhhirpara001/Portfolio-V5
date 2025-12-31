
// Added React import to resolve React.ReactNode type reference
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface Certificate {
  id: string;
  title: string;
  platform: string;
  year: string;
  image: string;
}

export interface SocialCard {
  icon: React.ReactNode;
  label: string;
  value: string;
  link: string;
  color?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}