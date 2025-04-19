import React from 'react'
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ServiceSection from "../components/ServiceSection";
import OurWork from "../components/OurWork";
import OurClients from "../components/OurClients";
import About from "../components/About";
import StastAndTestimonials from "../components/StatsAndTestimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppBtn from "../components/WhatsAppBtn";

const HomePage = () => {
  return (
    <div>

<div className="min-h-screen flex flex-col font-sans  relative overflow-x-hidden">
      {/* <div className="hidden md:block absolute top-32 left-1/2 transform -translate-x-1/2 w-1/2 h-[400px]   bg-gradient-to-r from-blue-400 to-blue-700 blur-3xl opacity-30"></div>
       */}
 
      <WhatsAppBtn />

      <header>
      {/* Navbar */}
      <NavBar />
      </header>

        <main>
      {/* Hero Section with Illustration and Enhanced Style */}
      <HeroSection />

  
      {/* Services Section */}
      <ServiceSection />

      {/* Work We Have Done Section */}
      <OurWork />

      {/* Decorative Divider
      <div className="w-full overflow-hidden -mb-1 rotate-180 h-24 bg-themeColor ">
       
      </div> */}

      {/* Clients Section */}
      <OurClients />

      {/* About Section (Expanded) */}
      <About />

      

      {/* Testimonials / Stats Section */}
      <StastAndTestimonials />

      {/* Contact Section */}
      <Contact />
      </main>

      <footer>

      {/* Footer */}
      <Footer />
      </footer>
    </div>
    </div>
  )
}

export default HomePage