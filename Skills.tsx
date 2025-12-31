
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="text-center space-y-12">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold">The Secret Sauce</h2>
        <p className="text-zinc-500">The tools and technologies I use to bring ideas to life.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {SKILLS.map((skill, idx) => (
          <motion.div
            key={skill}
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, idx % 2 === 0 ? 1 : -1, 0]
            }}
            transition={{ 
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.1
            }}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderColor: 'rgba(255,255,255,0.3)'
            }}
            className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-zinc-300 font-medium text-sm transition-colors cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
