import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from '../lib/router';

const NotFound: React.FC = () => (
  <section className="min-h-[70vh] pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto flex flex-col justify-center">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <span className="font-mono text-sm text-neonCyan">404</span>
      <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white">
        Page <span className="gradient-text">not found</span>
      </h1>
      <p className="mt-4 max-w-xl text-gray-400 leading-relaxed">
        That route doesn&apos;t exist. Head back home, or browse the full project archive.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-neonCyan/10 text-neonCyan rounded-lg hover:bg-neonCyan/20 transition-colors font-mono font-bold"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors font-mono font-bold"
        >
          Project Archive
        </Link>
      </div>
    </motion.div>
  </section>
);

export default NotFound;
