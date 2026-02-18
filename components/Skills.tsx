import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Bot,
  Code2,
  Database,
  Settings,
  GitBranch
} from 'lucide-react';
import { SkillCategory } from '../types';

const skills: SkillCategory[] = [
  {
    category: "Core AI",
    icon: <Cpu className="w-6 h-6 text-neonCyan" />,
    items: ["Data Science", "Machine Learning", "Deep Learning", "Data Analysis", "NLP", "Medical Imaging", "Computer Vision"],
    colorClass: "hover:border-neonCyan/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
  },
  {
    category: "GenAI",
    icon: <Bot className="w-6 h-6 text-neonPurple" />,
    items: ["Agentic AI", "AI Automation", "LLMs", "RAG", "Prompt Engineering", "MCP", "GenAI Tools"],
    colorClass: "hover:border-neonPurple/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
  },
  {
    category: "Development",
    icon: <Code2 className="w-6 h-6 text-green-400" />,
    items: ["Python", "FastAPI", "React (Next.js, Vite)", "Full-Stack Development", "REST APIs", "API Integration", "JWT Auth"],
    colorClass: "hover:border-green-400/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)]"
  },
  {
    category: "Data Engineering",
    icon: <Database className="w-6 h-6 text-yellow-400" />,
    items: ["PostgreSQL", "SQL", "ETL/ELT Pipelines", "Apache Airflow"],
    colorClass: "hover:border-yellow-400/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.15)]"
  },
  {
    category: "MLOps/DevOps",
    icon: <Settings className="w-6 h-6 text-red-400" />,
    items: ["GitHub Actions", "Docker", "Model Deployment", "MLflow"],
    colorClass: "hover:border-red-400/50 hover:shadow-[0_0_20px_rgba(248,113,113,0.15)]"
  },
  {
    category: "Version Control",
    icon: <GitBranch className="w-6 h-6 text-blue-400" />,
    items: ["Git", "GitHub", "CI/CD", "Collaboration"],
    colorClass: "hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]"
  }
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <span className="text-neonCyan font-mono text-xl">05.</span>
        <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
        <div className="h-[1px] bg-gray-700 flex-grow max-w-xs ml-4 hidden md:block"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass-card p-6 rounded-xl border border-transparent transition-all duration-300 hover:-translate-y-1 group ${skill.colorClass}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-100">{skill.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-sm bg-white/5 text-gray-300 rounded-full border border-white/5 group-hover:border-white/10 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;