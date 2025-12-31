
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase } from 'lucide-react';
import { EXPERIENCES } from '../constants';

interface AboutExperienceProps {
  isDark: boolean;
}

const AboutExperience: React.FC<AboutExperienceProps> = ({ isDark }) => {
  const openResume = () => {
    // Replace with your actual Google Drive Resume Link
    window.open('https://drive.google.com/file/d/1AbUYWifu-wlzQSzvvNodCffc_mzyXsC-/view?usp=drive_link', '_blank');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start py-20">
      {/* Left Side: Photo and Description */}
      <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-white/10 to-transparent rounded-[3.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className={`relative aspect-[4/5] rounded-[3rem] overflow-hidden border shadow-2xl ${
            isDark ? 'bg-zinc-900 border-white/10' : 'bg-zinc-100 border-zinc-200'
          }`}>
            <img src="VRush.jpg"
              alt="Vrushabh Hirpara"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
          <div className={`space-y-6 leading-relaxed text-lg ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            <p>
              Hello! I'm Vrushabh, a passionate Front-end Developer based in Surat, Gujarat. I love creating things that live on the internet, whether that be websites, applications, or anything in between.
            </p>
            <p>
              I bridge the gap between complex backend logic and pixel-perfect frontend experiences, ensuring everything I build is both beautiful and battle-hardened.
            </p>
          </div>
          
          <button 
            onClick={openResume}
            className="w-full group px-10 py-5 rounded-full bg-white text-black font-bold text-lg flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all shadow-xl active:scale-95 border border-zinc-200"
          >
            <Download size={22} className="group-hover:translate-y-1 transition-transform" />
            Download Resume
          </button>
        </div>
      </div>

      {/* Right Side: Experience */}
      <div className="lg:col-span-7 space-y-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 md:p-10 rounded-[3rem] glass glow-hover relative overflow-hidden group border ${
                isDark ? 'border-white/5' : 'border-zinc-200 shadow-sm'
              }`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <Briefcase size={120} />
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8">
                <div className="space-y-2">
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>{exp.title}</h3>
                  <p className="text-zinc-500 font-bold text-xl">{exp.company}</p>
                </div>
                <span className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border whitespace-nowrap ${
                  isDark ? 'border-white/10 text-zinc-500' : 'border-zinc-200 text-zinc-400'
                }`}>
                  {exp.period}
                </span>
              </div>
              <p className={`text-xl leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutExperience;
