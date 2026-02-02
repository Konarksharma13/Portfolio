
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 md:mb-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4"
      >
        <div className="h-[1px] w-8 bg-emerald-500" />
        <span className="text-xs uppercase tracking-[0.3em] text-emerald-500 font-bold">
          {subtitle || "Section"}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-4xl md:text-6xl font-serif mt-4 text-white/90"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
