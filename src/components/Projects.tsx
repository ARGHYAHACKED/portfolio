import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Example Project 1",
      description: "A full-stack application built with React and Node.js",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
      github: "#",
      live: "#"
    },
    {
      title: "Example Project 2",
      description: "Mobile-first web application with real-time features",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=600",
      github: "#",
      live: "#"
    },
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">Projects</h2>
      <div className="max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <div key={index} className="mb-16 bg-[#1a0b2e] rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;