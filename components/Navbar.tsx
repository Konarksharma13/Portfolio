
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled 
          ? 'py-4 bg-[#0c0c0e]/95 backdrop-blur-md border-b border-white/[0.05] shadow-2xl' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center border border-emerald-500/20 rounded-lg bg-emerald-500/5">
            <span className="text-emerald-500 font-bold text-xl drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
              K
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-[0.2em] uppercase leading-none text-white/90">
              {PROFILE.name.split(' ')[0]}
            </span>

          </div>
        </motion.div>

        <div className="hidden md:flex items-center gap-12">
          {[
            { name: 'Projects', href: 'projects' },
            { name: 'Blogs', href: 'blogs' },
            { name: 'Research Papers', href: 'publication' }
          ].map((item, idx) => (
            <motion.button
              key={item.name}
              onClick={() => {
              document
                .getElementById(item.href)
                ?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx + 0.5 }}
              className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 hover:text-emerald-500 transition-all duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-emerald-500 transition-all duration-500 group-hover:w-full" />
            </motion.button>
          ))}
        </div>

   
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-2.5 rounded-full border border-emerald-500/30 text-[10px] font-bold uppercase tracking-widest text-emerald-500 hover:bg-emerald-500 hover:text-black transition-all duration-500"
          >
            Connect
          </button>
        
      </div>
    </nav>
  );
};

export default Navbar;
