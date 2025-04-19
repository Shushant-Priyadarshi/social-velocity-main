import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full sticky top-0 z-40 bg-[#f5f9f9] border-b border-[#e3e9ef] shadow-md">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/flash.png"
            alt="social velocity logo"
            className="h-14 w-auto"
          />
          <div className="font-bold text-2xl tracking-tight flex flex-col leading-3 ">
            <span className="mb-2">Social</span>
            <span>Velocity</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          <li><a href="#home" className="hover:text-themeColor transition">Home</a></li>
          <li><a href="#services" className="hover:text-themeColor transition">Services</a></li>
          <li><a href="#work" className="hover:text-themeColor transition">Work</a></li>
          <li><a href="#clients" className="hover:text-themeColor transition">Clients</a></li>
          <li><a href="#about" className="hover:text-themeColor transition">About</a></li>
          <li><a href="#contact" className="hover:text-themeColor transition">Contact</a></li>
        </ul>

        {/* CTA Button - Desktop Only */}
        <a
          href="#contact"
          className="ml-6 hidden md:inline-block px-6 py-2 rounded-full bg-themeColor text-black font-semibold shadow transition"
        >
          Get Started
        </a>

        {/* Hamburger Icon - Mobile Only */}
        <div className="md:hidden">
          {/* <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button> */}
           <a
          href="#contact"
          className="ml-3  px-3 py-2 rounded-full bg-themeColor text-white font-semibold shadow transition"
        >
          Get Started
        </a>
        </div>
      </nav>

      
    </header>
  );
};

export default NavBar;
