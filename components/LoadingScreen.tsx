
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 15);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b0d11]"
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 flex flex-col items-center gap-2"
      >
        <span className="text-[15px] md:text-[20px] font-serif italic text-white/90 tracking-tight">
          Composing the experience
        </span>
        <span className="text-[9px] font-mono text-white/20">
          {percent}%
        </span>
      </motion.div>
       
     
      <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden rounded-full">
        <motion.div
          className="absolute inset-0 bg-emerald-500 origin-left"
          style={{ scaleX: percent / 100 }}
        />
      </div>

       
      
    </motion.div>
  );
};

export default LoadingScreen;
