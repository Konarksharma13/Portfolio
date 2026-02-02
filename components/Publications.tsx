
import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../constants';
import SectionHeading from './SectionHeading';
import { FiExternalLink } from 'react-icons/fi';

const Publications: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-transparent" id="publication">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <SectionHeading title="Research Papers" subtitle="Publications" />
          <div className="space-y-8">
            {PROFILE.publications.map((pub, idx) => (
              <motion.a
                key={pub.id}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col gap-2 border-b border-white/10 pb-8 hover:border-emerald-500 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs text-white/40 font-bold uppercase tracking-widest">{pub.publisher} — {pub.date}</span>
                  <FiExternalLink className="text-white/20 group-hover:text-emerald-500 transition-colors" />
                </div>
                <h4 className="text-2xl font-serif group-hover:text-white transition-colors leading-snug">
                  {pub.title}
                </h4>
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading title="Honors" subtitle="Achievements" />
          <div className="grid grid-cols-1 gap-6">
            {PROFILE.achievements.map((ach, idx) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-emerald-500/[0.03] hover:border-emerald-500/20 transition-all duration-500"
              >
                <div className="text-4xl font-serif text-emerald-500/30">
                  {ach.year.substring(2)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white/90">{ach.title}</h4>
                  <p className="text-sm text-white/40 uppercase tracking-widest mt-1">{ach.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
