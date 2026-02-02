
import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { PROFILE } from '../constants';
import { FiArrowDownRight } from 'react-icons/fi';
import Typewriter from './Typewriter';
import VisualCore from './VisualCore';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background Abstract Motion Elements */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
            <div className="w-10 h-[2px] bg-emerald-500" />
            <span className="text-emerald-500 text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">
              Software Engineer & AI Architect
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="mb-8 text-4xl md:text-6xl lg:text-7xl saira-stencil-one-regular leading-[0.9] tracking-tight text-white"
          >
          <Typewriter text={PROFILE.name} />
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-sm md:text-base font-serif text-white/40 italic max-w-lg leading-relaxed border-l border-white/5 pl-4 mb-10"
          >
            "Building intelligent digital ecosystems that bridge the gap between complex data and human intuition."
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-8 items-center">
            <button
              onClick={() => {
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative flex items-center gap-3 px-10 py-5 bg-emerald-500 text-black rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/10"
            >
              <span className="font-bold uppercase tracking-widest text-sm">Explore Projects</span>
              <FiArrowDownRight className="text-xl group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Enhanced Visual Composition */}
        <div className="lg:col-span-5 hidden md:block relative">
          <VisualCore />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
