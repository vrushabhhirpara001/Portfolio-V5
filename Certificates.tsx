
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { CERTIFICATES } from '../constants';

const Certificates: React.FC = () => {
  const openCertificate = (id: string) => {
    // Open specific certificate photo or the drive folder
    window.open(`https://drive.google.com/drive/folders/1gfQR7xy4SjVEzLuKPABd6WLDbe_bxS9J?usp=drive_link`, '_blank');
  };

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-6">
        <h2 className="text-4xl font-bold tracking-tight">Elite Certificates</h2>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CERTIFICATES.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => openCertificate(cert.id)}
            className="group p-5 rounded-[2rem] glass glow-hover flex flex-col gap-5 cursor-pointer border border-transparent hover:border-white/10 transition-all"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 shadow-lg">
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
              />
              <div className="absolute top-3 left-3 p-2 rounded-xl bg-black/50 backdrop-blur-md border border-white/10">
                <Award size={16} className="text-yellow-500" />
              </div>
            </div>
            
            <div className="flex-grow space-y-2">
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">{cert.platform} • {cert.year}</p>
              <h3 className="text-base font-bold text-zinc-200 line-clamp-2 leading-tight">{cert.title}</h3>
            </div>

            <button className="w-full py-3.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-all flex items-center justify-center gap-2 active:scale-95">
              View on Drive
              <ExternalLink size={14} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
