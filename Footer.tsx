
import React from 'react';
import { Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { icon: <Twitter size={18} />, link: 'https://x.com/vrushabhhirpara', name: 'Twitter' },
    { icon: <Linkedin size={18} />, link: 'https://linkedin.com/in/vrushabhhirpara/', name: 'LinkedIn' },
    { icon: <Github size={18} />, link: 'https://github.com/vrushabhhirpara001', name: 'GitHub' },
    { icon: <Instagram size={18} />, link: 'https://www.instagram.com/cyber_vrushabh/', name: 'Instagram' },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#030303] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-sm font-medium text-zinc-400">© 2025 Vrushabh Hirpara</p>
          <p className="text-xs text-zinc-600">Built with Passion in Surat, Gujarat, India</p>
        </div>

        <div className="flex items-center gap-6">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              className="p-2 text-zinc-500 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all rounded-lg"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <button 
          onClick={scrollToTop}
          className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-all group"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="text-zinc-500 group-hover:text-white group-hover:-translate-y-1 transition-all" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
