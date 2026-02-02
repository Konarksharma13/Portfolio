
import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiTwitter, FiMail } from 'react-icons/fi';
import { PROFILE } from '../constants';

const Sidebar: React.FC = () => {
  const icons = [
    { icon: FiLinkedin, link: PROFILE.socials.linkedin, label: 'LinkedIn' },
    { icon: FiGithub, link: PROFILE.socials.github, label: 'GitHub' },
    { icon: FiMail, link: `mailto:${PROFILE.socials.email}`, label: 'Email' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed left-8 bottom-0 z-40 hidden lg:flex flex-col items-center gap-6"
    >
      <div className="flex flex-col gap-8 mb-10">
        {icons.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-emerald-500 transition-all duration-300 transform hover:-translate-y-1"
            aria-label={item.label}
          >
            <item.icon size={20} />
          </a>
        ))}
      </div>
      <div className="w-[1px] h-32 bg-gradient-to-t from-emerald-500 to-transparent opacity-50" />
    </motion.div>
  );
};

export default Sidebar;
