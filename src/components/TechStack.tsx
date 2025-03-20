import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', color: '#61DAFB', icon: '⚛️' },
  { name: 'TypeScript', color: '#3178C6', icon: '📘' },
  { name: 'JavaScript', color: '#F7DF1E', icon: '🟨' },
  { name: 'HTML5', color: '#E34F26', icon: '🌐' },
  { name: 'CSS3', color: '#1572B6', icon: '🎨' },
  { name: 'Node.js', color: '#339933', icon: '🟢' },
  { name: 'Git', color: '#F05032', icon: '📚' },
  { name: 'Tailwind', color: '#38B2AC', icon: '🌊' },
];

const TechStack = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118] via-transparent to-[#0a0118] z-10" />

      <div className="max-w-6xl mx-auto px-4 relative z-20">
        <h2 className="text-2xl font-bold text-white mb-12 text-center">Tech Stack</h2>

        <div className="relative h-[400px]">
          {/* Orbital Ring */}
          <div className="absolute inset-0 border-2 border-purple-500/20 rounded-full animate-[spin_20s_linear_infinite]"
            style={{ width: '100%', height: '100%', transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }} />

          {/* Tech Icons */}
          {technologies.map((tech, index) => {
            const angle = (index * 360) / technologies.length;
            const radius = 150;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={tech.name}
                className="absolute"
                style={{
                  left: 'calc(50% + ' + x + 'px)',
                  top: 'calc(50% + ' + y + 'px)',
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.2 }}
              >
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1a0b2e] 
                           border-2 border-purple-500/30 cursor-pointer transform -translate-x-1/2 -translate-y-1/2
                           hover:border-purple-500 transition-all duration-300"
                >
                  <div className="text-2xl">{tech.icon}</div>
                </div>
                <motion.div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 
                           bg-purple-900/80 px-3 py-1 rounded-full text-sm whitespace-nowrap"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {tech.name}
                </motion.div>
              </motion.div>
            );
          })}

          {/* Center Logo */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-24 h-24 bg-purple-600/20 rounded-full flex items-center justify-center
                     border-2 border-purple-500"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="text-4xl">
              <div className="text-purple-500 font-bold text-2xl">
                <img src="/image.png" alt="L" className="w-10 h-10" />
              </div>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;