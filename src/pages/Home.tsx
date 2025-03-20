import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <img
            src="https://avatars.githubusercontent.com/u/583231?v=4"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-purple-500/50"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          I'm a Software Engineer!
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Passionate about creating beautiful and functional web experiences
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border border-purple-600 text-purple-400 px-6 py-3 rounded-full hover:bg-purple-600/10 transition-colors"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;