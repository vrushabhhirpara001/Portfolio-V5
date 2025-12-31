
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDark }) => {
  const [greeting, setGreeting] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) setGreeting('Good Morning');
    else if (hours < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Tools', href: '#insights' },
  ];

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center gap-1 p-1.5 rounded-full glass transition-all duration-500 ${
          scrolled ? 'scale-105 shadow-2xl' : 'scale-100'
        }`}
      >
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`px-4 py-2 text-sm font-bold transition-all rounded-full hover:bg-white/5 ${
                isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="w-[1px] h-4 bg-zinc-500/20 mx-2" />
        </div>
        
        <button 
          onClick={toggleTheme}
          title="Toggle Theme"
          className={`group flex items-center gap-3 px-5 py-2.5 rounded-full transition-all border shadow-lg ${
            isDark 
              ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' 
              : 'bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-900'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? 'bg-green-400' : 'bg-orange-400'}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? 'bg-green-500' : 'bg-orange-500'}`}></span>
          </span>
          <span className="text-sm font-bold whitespace-nowrap tracking-tight">{greeting}</span>
          <div className="ml-1 opacity-60 group-hover:opacity-100 transition-opacity">
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </div>
        </button>
      </motion.nav>
    </div>
  );
};

export default Navbar;
