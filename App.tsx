
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Robust smooth scroll implementation for Safari/Firefox fallback
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
          // Update URL hash without jumping
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen selection:bg-emerald-500/20 transition-colors duration-1000">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <div key="content" className="relative">
            <Navbar />
            <Sidebar />
            
            <section id="hero">
              <Hero />
            </section>

            <section id="projects" className="scroll-mt-4">
              <Projects />
            </section>

            <section id="writing" className="scroll-mt-14">
              <Publications />
              <Blog />
            </section>

            <section id="contact" className="scroll-mt-14">
              <Contact />
            </section>
            
            <footer className="py-20 border-t border-white/[0.05] text-center px-6">
              <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
            
                
                <div className="flex gap-12">
                  <span className="text-[9px] text-white/40 uppercase tracking-widest">Adapt</span>
                  <span className="text-[9px] text-white/40 uppercase tracking-widest">Overcome</span>
                  <span className="text-[9px] text-white/40 uppercase tracking-widest">Evolve</span>
                </div>

                <p className="text-white/10 text-[9px] uppercase tracking-[0.3em] font-bold mt-4">
                  © 2025 Crafted with precision & passion by Konark Sharma
                </p>
              </div>
            </footer>

            {/* Global Subtle Noise Grain Effect */}
            <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
