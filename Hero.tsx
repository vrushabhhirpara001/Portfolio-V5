
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, MapPin, ArrowRight, Copy, Check } from 'lucide-react';

const Hero: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('offbeatcybervrushabh@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      const top = element.offsetTop - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const socialCards = [
    { 
      label: 'Open to Work', 
      value: 'Freelance & Part-time', 
      icon: <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />, 
      link: 'https://api.whatsapp.com/send/?phone=919374799880&text=Hello+Vrushabh%21+%EF%BF%BD%0A%0AI+came+across+your+portfolio+and+I%27m+impressed+with+your+work+and+skills.%0A%0AI+would+like+to+discuss+a+potential+opportunity+with+you.+Could+we+schedule+a+time+to+chat+about%3A%0A%0A%E2%80%A2+Project+requirements%0A%E2%80%A2+Timeline+and+availability++%0A%E2%80%A2+Your+rates+and+terms%0A%E2%80%A2+Next+steps%0A%0ALooking+forward+to+hearing+from+you%21%0A%0ABest+regards%21+%EF%BF%BD&type=phone_number&app_absent=0' 
    },
    { label: 'GitHub', value: '@vrushabhhirpara001', icon: <Github size={18} />, link: 'https://github.com/vrushabhhirpara001' },
    { label: 'Twitter / X', value: '@vrushabhhirpara', icon: <Twitter size={18} />, link: 'https://x.com/vrushabhhirpara' },
    { label: 'LinkedIn', value: 'vrushabhhirpara', icon: <Linkedin size={18} />, link: 'https://linkedin.com/in/vrushabhhirpara/' },
    { label: 'Instagram', value: '@cyber_vrushabh', icon: <Instagram size={18} />, link: 'https://www.instagram.com/cyber_vrushabh/' },
    { label: 'Location', value: 'Surat, Gujarat, India', icon: <MapPin size={18} />, link: '#', subtitle: 'Remote Available' },
  ];

  return (
    <div className="pt-24">
      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-4"
        >
          <div className="px-5 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm font-bold flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Available for hire
          </div>
          <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-sm font-bold flex items-center gap-2.5">
            <MapPin size={14} />
            Based in Odisha, India
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tight leading-[0.95]"
        >
          Hello, I'm Kaushal.<br />
          <span className="text-zinc-500">Full Stack Developer.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl text-xl text-zinc-400 leading-relaxed font-medium"
        >
          I am a specialized full-stack engineer with a heavy focus on high-performance web applications and cybersecurity. I bridge the gap between complex logic and pixel-perfect design.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-6 pt-4"
        >
          <button 
            onClick={scrollToAbout}
            className="group px-12 py-6 rounded-full bg-white text-black font-black text-xl flex items-center gap-3 hover:bg-zinc-200 transition-all shadow-2xl active:scale-95 border border-zinc-200"
          >
            Connect now
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={copyEmail}
            className="px-12 py-6 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center gap-3 text-zinc-300 backdrop-blur-sm active:scale-95 font-bold text-xl"
          >
            {copied ? <Check size={22} className="text-green-500" /> : <Copy size={22} />}
            {copied ? 'Copied' : 'Copy Email'}
          </button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-16">
          {socialCards.map((card, idx) => (
            <motion.a
              key={card.label}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: '0 0 40px rgba(255,255,255,0.08)',
                borderColor: 'rgba(255,255,255,0.2)' 
              }}
              className="p-6 rounded-[2rem] glass glow-hover flex flex-col justify-between h-40 group transition-all"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-white/5 text-zinc-400 group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <ArrowRight size={20} className="text-zinc-600 group-hover:text-white group-hover:-rotate-45 transition-all" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1">{card.label}</p>
                <p className="text-lg font-bold text-zinc-200">{card.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
