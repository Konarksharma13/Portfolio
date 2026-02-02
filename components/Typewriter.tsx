
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, className, delay = 0 }) => {
  const letters = Array.from(text);

  // Added Variants type to ensure correct property inference for staggered animations
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  // Added Variants type to fix "Type 'string' is not assignable to type 'AnimationGeneratorType'" error
  const child: Variants = {
    visible: {
      opacity: 1,
      display: "inline",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      display: "none",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[4px] h-[0.9em] bg-emerald-500 ml-1 self-center"
      />
    </motion.div>
  );
};

export default Typewriter;
