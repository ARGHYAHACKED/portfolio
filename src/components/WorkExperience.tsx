import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Buisness Consultant",
      company: "Diginamics It Service Ltd.",
      period: "2024, March - Present",
      description: "We here consult people to grow their business",
    },
    {
      title: "Frontend Developer",
      company: "Education Arena",
      period: "2024,September - 2024,December",
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