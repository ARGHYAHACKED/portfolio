import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Text Share",
      description: "A full-stack application built with React and Node.js",
      image: "/text.png",
      github: "https://github.com/ARGHYAHACKED/Text_Sharing",
      live: "#"
    },
    {
      title: "Code Review",
      description: "Mobile-first web application with real-time features",
      image: "/code.png",
      github: "https://github.com/ARGHYAHACKED/code_review",
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
                  {/* <a href={project.live} className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a> */}
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