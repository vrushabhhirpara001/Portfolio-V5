
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  const redirectToGithub = () => {
    window.open('https://github.com/vrushabhhirpara001', '_blank');
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <h2 className="text-4xl font-bold tracking-tight">Selected Work</h2>
        <p className="text-zinc-500 max-w-sm">A curation of my professional contributions. Click any project to view my full GitHub profile.</p>
      </div>

      <div className="grid grid-cols-1 gap-20">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            onClick={redirectToGithub}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-[3rem] bg-zinc-900 aspect-video shadow-2xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white text-black p-5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                  <Github size={32} />
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:pl-8">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">{project.description}</p>
              <div className="inline-flex items-center gap-3 text-white font-bold group/btn">
                View on GitHub
                <div className="h-[2px] w-10 bg-white/20 group-hover/btn:w-16 transition-all" />
                <ArrowUpRight size={20} className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
