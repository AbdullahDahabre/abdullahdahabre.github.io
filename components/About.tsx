import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <span className="text-neonCyan font-mono text-xl">01.</span>
        <h2 className="text-3xl font-bold text-white">About Me</h2>
        <div className="h-[1px] bg-gray-700 flex-grow max-w-xs ml-4 hidden md:block"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2 text-gray-400 leading-relaxed text-lg"
        >
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-neonPurple/10 rounded-full blur-3xl group-hover:bg-neonPurple/20 transition-all duration-500"></div>

            <p className="mb-6">
              Hello! I'm Abdullah, an <span className="text-neonCyan">Artificial Intelligence Engineer</span> with a passion for building autonomous agents and scalable AI systems. My journey started with a fascination for how data can drive decisions, leading me to specialize in <span className="text-neonPurple">LLM-based architectures</span> and end-to-end product delivery.
            </p>
            <p className="mb-6">
              I thrive in the intersection of <span className="text-white">Research</span> and <span className="text-white">Engineering</span>, transforming theoretical models into robust, real-world applications. Currently, I'm building next-gen AI solutions at <span className="text-neonCyan">Ai Brains</span>.
            </p>
            <p>
              When I'm not training models or optimizing inference pipelines, I'm exploring the latest in <span className="text-neonPurple">Agentic AI</span> and contributing to open-source projects.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full aspect-square max-w-sm rounded-2xl border-2 border-neonCyan/30 p-2 group">
            <div className="absolute inset-0 bg-neonCyan/10 rounded-2xl transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="w-full h-full rounded-xl overflow-hidden relative bg-midnight">
              <img
                src="/profile.webp"
                alt="Abdullah Dahabre"
                className="w-full h-full object-cover scale-110 transition-all duration-500 hover:scale-125"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;