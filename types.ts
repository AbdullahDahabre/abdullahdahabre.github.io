import React from 'react';

export interface ProjectLink {
  label: string;
  href: string;
  icon?: 'kaggle' | 'telegram' | 'link';
}

/** Archive sections, ordered by how current and substantial the work is. */
export type ProjectCategory = 'production' | 'applied-ml' | 'foundations';

export interface Project {
  slug: string; // Stable id used for keys and (future) deep links
  category: ProjectCategory;
  title: string;
  period: string; // e.g. "May 2026 – Present"
  association?: string; // e.g. "Bahcesehir University"
  description: string | React.ReactNode;
  tags: string[];
  link?: string; // Source code (repo) link
  demoLink?: string; // Live / "View Project" link
  extraLinks?: ProjectLink[]; // Anything else (Telegram bot, paper, etc.)
  metrics?: string;
  image?: string; // Project preview image; falls back to a generated placeholder
  featured?: boolean; // Shown in the "Featured Projects" grid on the home page
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  link?: string;
  type: 'work' | 'education';
  location?: string; // Added location
  description?: string; // Added for intro text before bullet points
  details?: string[]; // Added for detailed bullet points
  logo?: string; // Added for company/school logo
  grade?: string; // Added for GPA/Grade
}

export interface SkillCategory {
  category: string;
  items: string[];
  icon: React.ReactNode;
  colorClass: string; // Added for dynamic hover border/shadow colors
}

export interface Certification {
  name: string;
  issuer: string;
  url: string;
  logo?: string; // Added issuer logo
}
