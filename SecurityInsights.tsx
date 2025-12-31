
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const SecurityInsights: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
            <Sparkles size={14} className="text-indigo-400" />
            Security Insights
          </div>
          <h2 className="text-4xl font-bold">Deep Dives & Research</h2>
        </div>
        <button className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
          View all articles
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group space-y-5"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 relative">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full glass text-[10px] font-bold uppercase tracking-widest text-white/80">
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="space-y-3 px-2">
              <p className="text-xs text-zinc-500 font-medium">{post.date}</p>
              <h3 className="text-xl font-bold leading-tight group-hover:text-zinc-300 transition-colors">
                {post.title}
              </h3>
              <button className="flex items-center gap-2 text-sm font-semibold text-white/60 group-hover:text-white transition-colors">
                Read insight
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SecurityInsights;
