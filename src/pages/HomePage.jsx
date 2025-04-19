import React from 'react'
import HeroSection from "../components/sections/landingpage/HeroSection";
import NavBar from "../components/common/NavBar";
import ServiceSection from "../components/sections/services/ServiceSection";
import OurWork from "../components/sections/workedwith/OurWork";
import OurClients from "../components/sections/trustedby/OurClients";
import About from "../components/sections/whychooseus/About";
import StastAndTestimonials from "../components/sections/testimonials/StatsAndTestimonials";
import Contact from "../components/sections/contactus/Contact";
import Footer from "../components/common/Footer";
import WhatsAppBtn from "../components/common/WhatsAppBtn";

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