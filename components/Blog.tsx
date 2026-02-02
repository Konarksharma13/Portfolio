
import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../constants';
import SectionHeading from './SectionHeading';
import { FiArrowUpRight } from 'react-icons/fi';

const Blog: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="blogs">
      <SectionHeading title="Blogs" subtitle="Writings and Insights" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROFILE.blogPosts.map((post, idx) => (
          <motion.a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-all border border-white/[0.05] flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-[0.2em]">
                  {post.platform}
                </span>
                <FiArrowUpRight className="text-white/20 group-hover:text-emerald-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-emerald-500 transition-colors">
                {post.title}
              </h3>
              <p className="text-white/40 leading-relaxed mb-8">
                {post.excerpt}
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/20 group-hover:text-white/60 transition-colors">
              <span>Read Full Article</span>
              <div className="h-[1px] w-8 bg-white/10 group-hover:bg-emerald-500 transition-colors" />
            </div>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Blog;