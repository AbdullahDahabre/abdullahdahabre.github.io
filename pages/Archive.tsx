import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github } from 'lucide-react';
import { Project } from '../types';
import { projects, projectYearRange } from '../data/projects';
import { Link, useRouter } from '../lib/router';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const PAGE_TITLE = 'Project Archive | Abdullah Dahabre';
const PAGE_DESCRIPTION =
  'A complete archive of every project by Abdullah Dahabre: production AI systems, agentic LLM pipelines, MLOps, and machine learning research.';

const Archive: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { canGoBack, back } = useRouter();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;

    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content') ?? null;
    description?.setAttribute('content', PAGE_DESCRIPTION);

    const canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute('href') ?? null;
    // Trailing slash: GitHub Pages serves the route from projects/index.html and
    // redirects the slash-less form to it, so this is the URL that returns 200.
    canonical?.setAttribute('href', 'https://abdullahdahabre.com/projects/');

    return () => {
      document.title = previousTitle;
      if (previousDescription !== null) description?.setAttribute('content', previousDescription);
      if (previousCanonical !== null) canonical?.setAttribute('href', previousCanonical);
    };
  }, []);

  return (
    // `w-full` is load-bearing: <main> is a flex column, and the `mx-auto`
    // margins would otherwise stop this item stretching, collapsing the grid to
    // its content width.
    <section className="w-full pt-32 pb-20 px-6 md:px-12 xl:px-16 max-w-[110rem] mx-auto">
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Returns to the "View Full Archive" button that opened this page: a real
            history back when we came from there (restores exact scroll position),
            otherwise a direct link to the button's anchor. */}
        <Link
          to="/#archive-cta"
          onClick={(event) => {
            if (!canGoBack) return;
            event.preventDefault();
            back();
          }}
          className="inline-flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-neonCyan transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <h1 className="mt-8 text-4xl md:text-5xl font-bold text-white">
          Project <span className="gradient-text">Archive</span>
        </h1>

        <p className="mt-4 max-w-2xl text-gray-400 leading-relaxed">
          Everything I&apos;ve built: production AI products, agentic LLM pipelines, end-to-end MLOps,
          and machine learning research.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-xs text-gray-500">
          <span>
            <span className="text-neonCyan">{projects.length}</span> projects
          </span>
          <span className="text-gray-700">/</span>
          <span>
            <span className="text-neonPurple">{projectYearRange.first}</span> –{' '}
            <span className="text-neonPurple">{projectYearRange.last}</span>
          </span>
          <span className="text-gray-700">/</span>
          <a
            href="https://github.com/AbdullahDahabre"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-neonCyan transition-colors"
          >
            <Github size={13} /> github.com/AbdullahDahabre
          </a>
        </div>

        <div className="h-[1px] bg-gray-800 w-full mt-10 mb-12" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            onSelect={setSelectedProject}
            showPeriod
          />
        ))}
      </div>
    </section>
  );
};

export default Archive;
