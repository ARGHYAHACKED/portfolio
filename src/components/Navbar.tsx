import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[#0a0118]/50 backdrop-blur-sm z-50 px-4 py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-purple-500 font-bold text-2xl">
          <img src="/image.png" alt="L" className="w-10 h-10" />
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-purple-400">Home</a>
          <a href="#experience" className="text-white hover:text-purple-400">Experience</a>
          <a href="#projects" className="text-white hover:text-purple-400">Projects</a>
          <a href="#blog" className="text-white hover:text-purple-400">Blog</a>
          <button onClick={handleScrollToContact} className="text-white hover:text-purple-400">
            Contact
          </button>
        </div>
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
