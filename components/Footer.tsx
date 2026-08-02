import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import KaggleIcon from './ui/KaggleIcon';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="py-10 bg-black text-center relative overflow-hidden">
      {/* Footer glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-neonCyan/10 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <div className="flex justify-center gap-8 mb-12">
          <a href="https://linkedin.com/in/abdullahdahabre" target="_blank" rel="noreferrer" className="group">
            <div className="p-3 glass-card rounded-full group-hover:bg-[#0077b5]/20 transition-all group-hover:-translate-y-1">
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-[#0077b5]" />
            </div>
          </a>
          <a href="https://github.com/AbdullahDahabre" target="_blank" rel="noreferrer" className="group">
            <div className="p-3 glass-card rounded-full group-hover:bg-neonPurple/20 transition-all group-hover:-translate-y-1">
              <Github className="w-6 h-6 text-gray-300 group-hover:text-neonPurple" />
            </div>
          </a>
          <a href="https://kaggle.com/abdullahdahabre23" target="_blank" rel="noreferrer" className="group">
            <div className="p-3 glass-card rounded-full group-hover:bg-[#20BEFF]/20 transition-all group-hover:-translate-y-1">
              <KaggleIcon className="w-6 h-6 text-gray-300 group-hover:text-[#20BEFF]" />
            </div>
          </a>
        </div>

        <div className="text-xs text-gray-600 font-mono">
          <p className="mt-2">&copy; {new Date().getFullYear()} Abdullah Dahabre.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;