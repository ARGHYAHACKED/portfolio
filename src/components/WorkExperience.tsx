import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Example Company",
      period: "2020 - Present",
      description: "Led development of key features and maintained core systems"
    },
    {
      title: "Frontend Developer",
      company: "Tech Corp",
      period: "2018 - 2020",
      description: "Developed responsive web applications using React"
    },
  ];

  return (
    <section id="experience" className="py-20">
      <h2 className="text-2xl font-bold mb-8 text-center">Work Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="card p-6 rounded-lg border transition-all hover:border-purple-500/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-purple-500" size={24} />
              <div>
                <h3 className="font-semibold">{exp.title}</h3>
                <p className="text-purple-400 text-sm">{exp.company}</p>
              </div>
            </div>
            <p className="text-sm opacity-60">{exp.period}</p>
            <p className="mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;