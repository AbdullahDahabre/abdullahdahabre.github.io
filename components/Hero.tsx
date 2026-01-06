import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Specializing in AI Agents, LLM-based systems, and end-to-end AI applications.";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const footer = document.getElementById('footer');
    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) projects.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-20 lg:px-32 max-w-7xl mx-auto relative z-10 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-neonCyan font-mono mb-4 text-lg tracking-wide">Hi, my name is</h2>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
      >
        Abdullah Dahabre.
      </motion.h1>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-gray-400 mb-8"
      >
        I turn ideas into AI applications.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="h-16 md:h-12 max-w-2xl mb-12"
      >
        <p className="text-neonPurple font-mono text-sm md:text-base border-r-2 border-neonCyan pr-2 animate-pulse inline-block">
          {text}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-wrap gap-4"
      >
        <button
          onClick={scrollToContact}
          className="group relative px-8 py-3 bg-transparent border border-neonCyan text-neonCyan font-mono rounded hover:bg-neonCyan/10 transition-all duration-300 flex items-center gap-2"
        >
          Contact Me
          <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 rounded ring-1 ring-white/20 group-hover:ring-white/40 transition-all" />
        </button>

        <button
          onClick={scrollToProjects}
          className="group relative px-8 py-3 bg-transparent border border-neonPurple text-neonPurple font-mono rounded hover:bg-neonPurple/10 transition-all duration-300 flex items-center gap-2"
        >
          View Work
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;