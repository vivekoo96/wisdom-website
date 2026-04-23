import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-studio-dark border-t border-studio-line pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-20">
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-studio-neon flex items-center justify-center font-black text-studio-dark text-xl rounded-sm">W</div>
            <span className="font-display font-black text-4xl tracking-tighter uppercase">Wisdom</span>
          </div>
          <p className="text-white/40 font-medium leading-relaxed mb-10">
            A creative software boutique engineering premium digital products. We work with visionaries who want to redefine their industry boundaries.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-studio-neon transition-colors"><Twitter /></a>
            <a href="#" className="text-white/30 hover:text-studio-neon transition-colors"><Linkedin /></a>
            <a href="#" className="text-white/30 hover:text-studio-neon transition-colors"><Github /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20 mb-8">Explore</p>
            <ul className="space-y-4 font-display font-black uppercase text-xl">
              <li><Link to="/services" className="hover:text-studio-neon transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-studio-neon transition-colors">Archived Work</Link></li>
              <li><Link to="/about" className="hover:text-studio-neon transition-colors">About Studio</Link></li>
              <li><Link to="/contact" className="hover:text-studio-neon transition-colors">Post Spec</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20 mb-8">Legal</p>
            <ul className="space-y-4 font-mono text-[10px] font-bold uppercase tracking-widest text-white/40">
              <li><a href="#" className="hover:text-studio-neon transition-colors">Privacy_Doc</a></li>
              <li><a href="#" className="hover:text-studio-neon transition-colors">Terms_Vector</a></li>
              <li><a href="#" className="hover:text-studio-neon transition-colors">Cookie_Set</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-32 pt-10 border-t border-studio-line flex flex-col md:flex-row justify-between items-center gap-8">
         <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-white/20">© 2026 Wisdom Studio / Specialized Operations</p>
         <div className="flex items-center gap-4 text-white/20">
            <span className="w-2 h-2 rounded-full bg-studio-neon animate-pulse" />
            <span className="font-mono text-[9px] font-bold uppercase tracking-widest">Systems Online</span>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
