import React from 'react';

export interface Project {
  title: string;
  description: string | React.ReactNode;
  tags: string[];
  link?: string; // This will serve as the Source Code (Repo) link
  demoLink?: string; // This will serve as the View Project (Web) link
  metrics?: string;
  image?: string; // Added for project preview image
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