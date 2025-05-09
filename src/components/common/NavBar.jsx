import React from "react";


const NavBar = ({aboutRef,scrollToSection, contactRef,landingRef,serviceRef,testimonialsRef,trustedbyRef,workedwithyRef}) => {

 

  return (
    <header className="w-full sticky top-0 z-40 bg-[#f5f9f9] border-b border-[#e3e9ef] shadow-md">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/company-logos/flash.png"
            alt="social velocity logo"
            className="h-14 w-auto"
            loading="lazy"
          />
          <div className="font-bold text-2xl tracking-tight flex flex-col leading-3 ">
            <span className="mb-2">Social</span>
            <span>Velocity</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          <button className="hover:text-themeColor transition" onClick={()=>scrollToSection(landingRef)}>Home</button>
          <button className="hover:text-themeColor transition" onClick={()=>scrollToSection(serviceRef)}>Services</button>
          <button className="hover:text-themeColor transition" onClick={()=>scrollToSection(workedwithyRef)}>Work</button>
          <button className="hover:text-themeColor transition" onClick={()=>scrollToSection(trustedbyRef)}>Clients</button>
          <button className="hover:text-themeColor transition" onClick={()=>scrollToSection(aboutRef)}>About</button>
          <button className="hover:text-themeColor transition" onClick={()=>scrollToSection(contactRef)}>Contact</button>
          {/* <li><a href="#services" className="hover:text-themeColor transition">Services</a></li>
          <li><a href="#work" className="hover:text-themeColor transition">Work</a></li>
          <li><a href="#clients" className="hover:text-themeColor transition">Clients</a></li>
          <li><a href="#about" className="hover:text-themeColor transition">About</a></li>
          <li><a href="#contact" className="hover:text-themeColor transition">Contact</a></li> */}
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
