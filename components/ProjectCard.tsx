import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Boxes } from 'lucide-react';
import { Project } from '../types';

/** Deterministic 0..n-1 bucket so a project always gets the same placeholder art. */
const bucket = (seed: string, buckets: number): number => {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) hash = (hash * 31 + seed.charCodeAt(i)) % 100003;
  return hash % buckets;
};

const PLACEHOLDER_GRADIENTS = [
  'from-neonCyan/25 via-midnight to-neonPurple/20',
  'from-neonPurple/25 via-midnight to-neonCyan/20',
  'from-neonCyan/20 via-midnight to-midnight',
];

/** Shown while a project has no artwork yet, or if its image fails to load. */
const ThumbnailPlaceholder: React.FC<{ seed: string }> = ({ seed }) => (
  <div
    className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${
      PLACEHOLDER_GRADIENTS[bucket(seed, PLACEHOLDER_GRADIENTS.length)]
    }`}
  >
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
        backgroundSize: '18px 18px',
      }}
    />
    <Boxes className="w-16 h-16 text-white/10" strokeWidth={1} />
  </div>
);

interface ProjectCardProps {
  project: Project;
  index?: number;
  onSelect: (project: Project) => void;
  showPeriod?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0, onSelect, showPeriod = false }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const hasImage = Boolean(project.image) && !imageFailed;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: Math.min(index, 5) * 0.1 }}
      className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-black/50"
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      aria-label={`Read more about ${project.title}`}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onSelect(project);
        }
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-midnight">
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <ThumbnailPlaceholder seed={project.slug} />
        )}
        {/* Scrim. Holds the title legible even over light artwork, so the solid
            stop reaches ~30% up the card before it starts fading out. */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight from-30% via-midnight/75 via-65% to-transparent opacity-95 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Period sits in its own chip so it stays legible over artwork */}
      {showPeriod && (
        <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-midnight/80 backdrop-blur-sm border border-white/10 font-mono text-[10px] text-neonCyan whitespace-nowrap">
          {project.period}
        </span>
      )}

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Title Container - auto height to fit full text */}
        <div className="min-h-[3.5rem] flex items-end mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
          <div className="flex items-center text-neonCyan font-mono text-sm gap-2">
            Read More <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
