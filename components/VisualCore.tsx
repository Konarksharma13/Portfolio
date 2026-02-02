import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaDocker,
  FaGitAlt,
  FaGithubAlt,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const rings = [
  {
    radius: 70,
    duration: 18,
    reverse: false,
    icons: [
      { Icon: FaReact, color: "#61DAFB" },
      { Icon: FaJs, color: "#F7DF1E" },
      { Icon: FaNodeJs, color: "#339933" },
    ],
  },
  {
    radius: 120,
    duration: 26,
    reverse: true,
    icons: [
      { Icon: SiTypescript, color: "#3178C6" },
      { Icon: SiCplusplus, color: "#00599C" },
      { Icon: FaDocker, color: "#2496ED" },
    ],
  },
  {
    radius: 180,
    duration: 40,
    reverse: false,
    icons: [
      { Icon: FaGitAlt, color: "#F05032" },
      { Icon: FaGithubAlt, color: "#ffffff" },
      { Icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
];

const VisualCore: React.FC = () => {
  return (
    <div className="relative w-full aspect-square flex items-center justify-center select-none">
      {/* Ambient glow */}
      <div className="absolute w-3/4 h-3/4 bg-emerald-500/5 rounded-full blur-[140px]" />

      {/* Center label */}
      <div className="absolute z-10 text-emerald-500 font-serif italic text-4xl tracking-tight opacity-80">
        Skills
      </div>

      {rings.map((ring, ringIndex) => (
        <motion.div
          key={ringIndex}
          animate={{ rotate: ring.reverse ? -360 : 360 }}
          transition={{
            duration: ring.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full border border-white/5"
          style={{
            width: ring.radius * 2,
            height: ring.radius * 2,
          }}
        >
          {ring.icons.map((item, i) => {
            const angle = (i / ring.icons.length) * 360;
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `
                    rotate(${angle}deg)
                    translateY(-${ring.radius}px)
                    rotate(-${angle}deg)
                  `,
                }}
              >
                <item.Icon
                  size={16}
                  style={{ color: item.color }}
                  className="opacity-50 hover:opacity-100 transition-opacity drop-shadow-[0_0_6px_rgba(255,255,255,0.15)]"
                />
              </div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
};

export default VisualCore;
