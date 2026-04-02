import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, ExternalLink } from 'lucide-react';
import { Experience as ExperienceType } from '../types';
import Modal from './ui/Modal';

const experiences: ExperienceType[] = [
  {
    id: '1',
    company: 'Ai Brains',
    role: 'AI Engineer',
    period: 'Nov 2025 – Present',
    location: 'Dubai, United Arab Emirates',
    link: 'https://aibrains.com',
    type: 'work',
    logo: '/logo_aibrains.webp',
    description: "Built multiple end-to-end full-stack applications, AI chatbots, and modern user interfaces.",
    details: [
      "**Abjad Platforms (Content + PowerPoint Creator)**: AI applications that generate platform-ready posts and structured presentation decks from titles, trending topics, or short prompts.",
      "**AIRIS Website & LMS**: Learning platform with courses, quizzes/exams, certificates, and dashboards, featuring a RAG-based lecture assistant and a multi-agent AI for learner profiling, project planning, and final evaluation.",
      "**Chemisoul Perfume Shop**: AI-powered e-commerce experience that helps users discover and personalize a signature fragrance, with recommendations and a complete shopping flow.",
      "**Chatbots + Websites + Demos**: Built conversational assistants for Q&A/task automation, modern company websites, and interactive web demos/prototypes.",
    ]
  },
  {
    id: '2',
    company: 'Ai Brains',
    role: 'AI Engineer Intern',
    period: 'July 2025 – Oct 2025',
    location: 'Dubai, United Arab Emirates',
    link: 'https://aibrains.com',
    type: 'work',
    logo: '/logo_aibrains.webp',
    description: "Built multiple end-to-end full-stack applications, AI chatbots, and modern user interfaces.",
    details: [
      "**Abjad Platforms (Content + PowerPoint Creator)**: AI applications that generate platform-ready posts and structured presentation decks from titles, trending topics, or short prompts.",
      "**AIRIS Website & LMS**: Learning platform with courses, quizzes/exams, certificates, and dashboards, featuring a RAG-based lecture assistant and a multi-agent AI for learner profiling, project planning, and final evaluation.",
      "**Chemisoul Perfume Shop**: AI-powered e-commerce experience that helps users discover and personalize a signature fragrance, with recommendations and a complete shopping flow.",
      "**Chatbots + Websites + Demos**: Built conversational assistants for Q&A/task automation, modern company websites, and interactive web demos/prototypes.",
    ]
  },
  {
    id: '3',
    company: 'Bahcesehir University',
    role: 'Bachelor’s Degree in AI Engineering',
    period: 'Oct 2021 - June 2025',
    location: 'Istanbul, Turkey',
    link: 'https://www.bau.edu.tr',
    type: 'education',
    logo: '/logo_bau.webp',
    grade: "GPA: 3.39 | 2x High Honor, 2x Honor Certificates",
    details: [
      "Specialized in AI/ML.",
      "Completed rigorous coursework in Data Science, Machine Learning, and Deep Learning.",
      "Senior Capstone Project focusing on Healthcare AI."
    ]
  },
  {
    id: '4',
    company: "AL-JAWDA BOYS' SCHOOL",
    role: 'Secondary Education',
    period: 'Sep 2018 – June 2021',
    location: 'Ras Al Khaimah, United Arab Emirates',
    type: 'education',
    logo: '/logo_school.webp',
    grade: "Grade: 95.88 | UAE Golden Visa Recipient",
    details: [
      "3x Spelling Bee Awards",
      "Achieved academic excellence across all STEM subjects."
    ]
  }
];

const Experience: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<ExperienceType | null>(null);

  const formatDetail = (text: string) => {
    const parts = text.split('**');
    if (parts.length === 3) {
      return (
        <span>
          {parts[0]}
          <strong className="text-neonCyan">{parts[1]}</strong>
          {parts[2]}
        </span>
      );
    }
    return text;
  };

  return (
    <section className="py-20 px-6 md:px-20 max-w-6xl mx-auto">
      <Modal
        isOpen={!!selectedExp}
        onClose={() => setSelectedExp(null)}
        title={selectedExp?.role || ''}
      >
        <div className="space-y-4">
          {selectedExp?.logo && (
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center p-1 overflow-hidden shrink-0">
                  <img src={selectedExp.logo} alt={selectedExp.company} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{selectedExp.company}</h4>
                  <p className="text-sm text-gray-400 font-mono">{selectedExp.location}</p>
                </div>
              </div>

              {/* External Link at Top Right of Modal Header */}
              {selectedExp.link && (
                <a
                  href={selectedExp.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-neonCyan transition-colors"
                  title="Visit Website"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          )}

          {selectedExp?.grade && (
            <div className="p-3 bg-neonCyan/10 border border-neonCyan/30 rounded-lg text-neonCyan font-mono text-sm">
              {selectedExp.grade}
            </div>
          )}

          {selectedExp?.description && (
            <p className="text-gray-300 leading-relaxed mb-4">
              {selectedExp.description}
            </p>
          )}

          <ul className="space-y-3">
            {selectedExp?.details?.map((detail, idx) => (
              <li key={idx} className="text-gray-300 leading-relaxed flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-neonPurple mt-2.5 shrink-0 shadow-[0_0_5px_#a855f7]"></div>
                <span>{formatDetail(detail)}</span>
              </li>
            ))}
          </ul>
        </div>
      </Modal>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="text-neonCyan font-mono text-xl">02.</span>
        <h2 className="text-3xl font-bold text-white">Experience & Education</h2>
        <div className="h-[1px] bg-gray-700 flex-grow max-w-xs ml-4 hidden md:block"></div>
      </motion.div>

      <div className="relative pl-8 md:pl-0">
        {/* Central Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neonCyan via-neonPurple to-transparent transform -translate-x-1/2"></div>
        {/* Left Line for Mobile */}
        <div className="md:hidden absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neonCyan via-neonPurple to-transparent"></div>

        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center justify-between mb-8 md:mb-20 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
            >
              {/* Spacer for alignment */}
              <div className="hidden md:block w-5/12"></div>

              {/* Dot on the line */}
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-midnight border-2 border-neonCyan rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>

              {/* Content Card */}
              <div className="w-full md:w-5/12 pl-8 md:pl-0">
                <div
                  onClick={() => setSelectedExp(exp)}
                  className="glass-card p-5 rounded-xl relative overflow-hidden group cursor-pointer hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-neonCyan/30"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neonCyan to-neonPurple opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Header: Logo, Company Name, Date */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2 pr-12 sm:pr-0">
                    <div className="flex items-center gap-3">
                      {exp.logo && (
                        <div className="w-14 h-14 bg-white rounded-lg p-1 flex items-center justify-center shrink-0 border border-white/10 shadow-sm">
                          <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <h4 className="text-base font-bold text-gray-200 leading-tight">
                        {exp.company}
                      </h4>
                    </div>

                    {/* Desktop Date */}
                    <div className="hidden sm:block text-xs font-mono text-gray-500 whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>

                  {/* Mobile Date (Indented) */}
                  <div className="sm:hidden pl-[3.25rem] mb-2">
                    <span className="text-xs font-mono text-gray-500">{exp.period}</span>
                  </div>

                  {/* Role & Location (Indented) */}
                  <div className="pl-[3.25rem] flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-neonCyan transition-colors leading-tight">
                      {exp.role}
                    </h3>

                    {exp.location && (
                      <div className="flex items-center gap-1.5 text-xs md:text-sm text-gray-500 font-mono">
                        <MapPin size={12} className="shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Details Link - Visible on Mobile, Hover on Desktop */}
                  <div className="absolute top-3 right-3 text-[10px] text-neonCyan font-mono opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center">
                    Details <ExternalLink size={10} className="ml-1" />
                  </div>

                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;