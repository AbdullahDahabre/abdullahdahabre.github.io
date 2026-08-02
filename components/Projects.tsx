import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { featuredProjects, projects } from '../data/projects';
import { Link } from '../lib/router';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <span className="text-neonCyan font-mono text-xl">03.</span>
        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        <div className="h-[1px] bg-gray-700 flex-grow max-w-xs ml-4 hidden md:block"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {/* Archive CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <Link
          to="/projects"
          id="archive-cta"
          className="group flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl glass-card hover:border-neonCyan/40 transition-colors scroll-mt-28"
        >
          <div className="text-center sm:text-left">
            <span className="block font-mono text-sm text-neonCyan">View Full Archive</span>
            <span className="block text-gray-400 text-sm mt-1">
              All {projects.length} projects: production AI systems, ML research, and Kaggle work.
            </span>
          </div>
          <div className="p-4 rounded-full border-2 border-gray-700 group-hover:border-neonCyan text-gray-400 group-hover:text-neonCyan transition-colors shrink-0">
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Projects;
