import React from 'react';
import { ExternalLink, Github, Link2, Send } from 'lucide-react';
import { Project, ProjectLink } from '../types';
import Modal from './ui/Modal';
import KaggleIcon from './ui/KaggleIcon';

const ExtraLinkIcon: React.FC<{ icon: ProjectLink['icon'] }> = ({ icon }) => {
  if (icon === 'kaggle') return <KaggleIcon className="w-[18px] h-[18px]" />;
  if (icon === 'telegram') return <Send size={18} />;
  return <Link2 size={18} />;
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => (
  <Modal isOpen={!!project} onClose={onClose} title={project?.title || ''}>
    <div className="space-y-6">
      {project?.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover rounded-xl border border-white/10"
        />
      )}

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-gray-400">
        <span className="text-neonCyan">{project?.period}</span>
        {project?.association && (
          <>
            <span className="text-gray-700">/</span>
            <span>{project.association}</span>
          </>
        )}
      </div>

      <div className="text-gray-300 leading-relaxed text-lg">{project?.description}</div>

      <div className="flex flex-wrap gap-2">
        {project?.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-neonCyan border border-neonCyan/20"
          >
            #{tag}
          </span>
        ))}
      </div>

      {project?.metrics && (
        <div className="p-4 bg-neonPurple/10 border border-neonPurple/30 rounded-lg">
          <span className="text-neonPurple font-bold font-mono">{project.metrics}</span>
        </div>
      )}

      <div className="flex flex-wrap gap-4 pt-4">
        {project?.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-neonCyan/10 text-neonCyan rounded-lg hover:bg-neonCyan/20 transition-colors font-mono font-bold"
          >
            <ExternalLink size={18} /> View Project
          </a>
        )}
        {project?.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors font-mono font-bold"
          >
            <Github size={18} /> Source Code
          </a>
        )}
        {project?.extraLinks?.map((extra) => (
          <a
            key={extra.href}
            href={extra.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors font-mono font-bold"
          >
            <ExtraLinkIcon icon={extra.icon} /> {extra.label}
          </a>
        ))}
      </div>
    </div>
  </Modal>
);

export default ProjectModal;
