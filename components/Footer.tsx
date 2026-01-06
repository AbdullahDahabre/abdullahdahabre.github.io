import React from 'react';
import { Github, Linkedin } from 'lucide-react';

// Custom Kaggle Icon Component - Perfectly Centered
const KaggleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.825 23.859c-.022.092-.117.141-.284.141h-3.139c-.187 0-.351-.082-.493-.248l-5.178-6.589-1.448 1.375v5.204c0 .164-.082.248-.242.248h-3.134c-.164 0-.243-.082-.243-.248v-23.23c0-.164.079-.248.243-.248h3.134c.164 0 .242.083.242.248v14.493l6.526-7.398c.156-.182.328-.277.516-.285h3.393c.18 0 .269.074.265.223-.005.059-.044.114-.117.168l-5.836 6.308 6.037 8.941c.088.132.127.215.117.248z" transform="scale(0.65) translate(6, 4)" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="py-10 bg-black text-center relative overflow-hidden">
      {/* Footer glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-neonCyan/10 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <div className="flex justify-center gap-8 mb-12">
          <a href="https://linkedin.com/in/abdullah-dahabre" target="_blank" rel="noreferrer" className="group">
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