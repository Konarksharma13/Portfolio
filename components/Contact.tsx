
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../constants';
import { FiLinkedin, FiGithub, FiMail, FiSend } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const Contact: React.FC = () => {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="py-32 px-6 bg-transparent relative overflow-hidden">
      {/* Visual Background - Neural Connectivity */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full">
          {[...Array(15)].map((_, i) => (
            <motion.circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r={Math.random() * 2 + 1}
              fill="#10b981"
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1],
                y: [0, -50, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
          <motion.path
            d="M 100 100 Q 500 300 900 100"
            stroke="#10b981"
            strokeWidth="0.5"
            fill="transparent"
            strokeDasharray="5,10"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="opacity-30"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <SectionHeading title="Let's build something." subtitle="Connection" />
          <p className="text-xl text-white/50 font-light max-w-md leading-relaxed mb-12">
            Interested in collaboration? Or just want to discuss the future of the web? 
            My inbox is always open.
          </p>

          <div className="flex gap-8 lg:hidden">
            {[
              { icon: FiLinkedin, link: PROFILE.socials.linkedin, color: "hover:text-emerald-400" },
              { icon: FiGithub, link: PROFILE.socials.github, color: "hover:text-white" },
              { icon: FiMail, link: `mailto:${PROFILE.socials.email}`, color: "hover:text-emerald-400" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.1 }}
                className={`text-3xl text-white/10 transition-all ${social.color}`}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/[0.01] border border-white/5 p-10 rounded-[40px] backdrop-blur-md relative group overflow-hidden"
        >
          {/* Subtle interior glow */}
          <div className="absolute inset-0 bg-emerald-500/[0.02] blur-3xl rounded-full group-hover:bg-emerald-500/10 transition-colors pointer-events-none" />
          
          <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group/field">
              <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${focused === 'name' ? '-top-6 text-xs text-emerald-500 font-bold' : '-top-4 text-white/30'}`}>
                YOUR NAME
              </label>
              <input
                type="text"
                required
                onFocus={() => setFocused('name')}
                onBlur={(e) => !e.target.value && setFocused(null)}
                className="w-full bg-transparent border-b border-white/10 py-3 focus:border-emerald-500 outline-none transition-all text-white"
              />
            </div>

            <div className="relative group/field">
              <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${focused === 'email' ? '-top-6 text-xs text-emerald-500 font-bold' : '-top-4 text-white/30'}`}>
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                required
                onFocus={() => setFocused('email')}
                onBlur={(e) => !e.target.value && setFocused(null)}
                className="w-full bg-transparent border-b border-white/10 py-3 focus:border-emerald-500 outline-none transition-all text-white"
              />
            </div>

            <div className="relative group/field">
              <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${focused === 'message' ? '-top-6 text-xs text-emerald-500 font-bold' : '-top-4 text-white/30'}`}>
                MESSAGE
              </label>
              <textarea
                rows={4}
                required
                onFocus={() => setFocused('message')}
                onBlur={(e) => !e.target.value && setFocused(null)}
                className="w-full bg-transparent border-b border-white/10 py-3 focus:border-emerald-500 outline-none transition-all text-white resize-none"
              />
            </div>

            <button
              className="w-full group py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold uppercase tracking-widest rounded-2xl transition-all flex items-center justify-center gap-3 overflow-hidden relative shadow-lg shadow-emerald-500/10"
            >
              <span className="z-10">Deploy Message</span>
              <FiSend className="z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <motion.div 
                className="absolute inset-0 bg-white/20 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
