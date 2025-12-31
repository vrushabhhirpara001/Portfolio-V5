
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('offbeatcybervrushabh@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-[4rem] overflow-hidden bg-zinc-900/50 border border-white/5 p-12 md:p-24 text-center space-y-10 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="space-y-8 relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Let's work together.</h2>
        <p className="text-xl text-zinc-500 max-w-xl mx-auto leading-relaxed">
          Ready to elevate your digital presence? Reach out now to start a conversation about your next project.
        </p>

        <div className="flex flex-col items-center gap-6 pt-8">
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-2xl">
            <a 
              href="mailto:kaushal@dev.com" 
              className="flex-1 min-w-[240px] px-10 py-6 rounded-full bg-white text-black font-bold text-lg flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all shadow-2xl active:scale-95"
            >
              <Send size={22} />
              Send an email
            </a>
            <button 
              onClick={copyEmail}
              className="flex-1 min-w-[240px] px-10 py-6 rounded-full glass text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-all border border-white/10 active:scale-95"
            >
              {copied ? <Check size={22} className="text-green-500" /> : <Copy size={22} />}
              {copied ? 'Email Copied' : 'Copy Email Address'}
            </button>
          </div>
          <p className="text-zinc-600 text-sm font-medium">Available for remote roles & freelance contracts.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
