
import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../constants';
import SectionHeading from './SectionHeading';
import { FiArrowUpRight } from 'react-icons/fi';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading title="Selected Works" subtitle="Portfolio" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROFILE.projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group block cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl bg-[#111] aspect-[4/3] mb-6">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                <div className="bg-white text-black p-4 rounded-full shadow-2xl">
                  <FiArrowUpRight className="text-xl" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span className="text-xs text-emerald-500 uppercase font-bold tracking-widest">
                  {project.category}
                </span>
                <div className="h-[1px] flex-1 bg-white/10" />
              </div>
              <h3 className="text-3xl font-serif text-white/90 group-hover:text-emerald-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/50 line-clamp-2 mt-2 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase border border-white/10 px-3 py-1 rounded-full text-white/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
