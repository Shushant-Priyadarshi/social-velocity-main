
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
import { useRef } from "react";

const HomePage = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const landingRef = useRef(null);
  const serviceRef = useRef(null);
  const testimonialsRef = useRef(null);
  const trustedbyRef = useRef(null);
  const workedwithyRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='smooth-scroll'>

<div className="min-h-screen flex flex-col font-sans  relative overflow-x-hidden">
      {/* <div className="hidden md:block absolute top-32 left-1/2 transform -translate-x-1/2 w-1/2 h-[400px]   bg-gradient-to-r from-blue-400 to-blue-700 blur-3xl opacity-30"></div>
       */}
 
      <WhatsAppBtn />

      <header>
      {/* Navbar */}
      <NavBar  scrollToSection={scrollToSection} aboutRef = {aboutRef} contactRef={contactRef} landingRef={landingRef} serviceRef={serviceRef} testimonialsRef={testimonialsRef} trustedbyRef={trustedbyRef} workedwithyRef={workedwithyRef} />
      </header>

        <main>
      {/* Hero Section with Illustration and Enhanced Style */}
      <HeroSection ref={landingRef}/>

  
      {/* Services Section */}
      <ServiceSection ref={serviceRef}/>

      {/* Work We Have Done Section */}
      <OurWork ref={workedwithyRef} />

      {/* Decorative Divider
      <div className="w-full overflow-hidden -mb-1 rotate-180 h-24 bg-themeColor ">
       
      </div> */}

      {/* Clients Section */}
      <OurClients ref={trustedbyRef}/>

      {/* About Section (Expanded) */}
      <About ref={aboutRef}/>

      

      {/* Testimonials / Stats Section */}
      <StastAndTestimonials ref={testimonialsRef}/>

      {/* Contact Section */}
      <Contact ref={contactRef}/>
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