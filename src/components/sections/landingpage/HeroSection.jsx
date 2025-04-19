import React from 'react';

const HeroSections = () => {
  return (
    <div>
      <section id="home" className="relative overflow-hidden min-h-[36rem] flex items-center px-4 sm:px-6 md:px-10 py-12 md:py-0">
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Left: Hero Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-5 text-black">
              <span className="block">
                <span className="text-themeColor">Digital</span> Marketing
              </span>
              <span>Made Easy</span>
            </h1>
            <p className="mb-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-black max-w-md font-semibold">
              Trusted by many businesses, <span className="text-themeColor">Social Velocity</span> helps you win customers with Google Ads, Social Media, SEO, and visible brand transformation.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold shadow-lg transition ring-2 ring-[#be4368]/10 bg-themeColor hover:scale-105 active:scale-95 duration-200"
            >
              Let’s Talk
            </a>
          </div>

          {/* Right: Hero Image */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex items-center justify-center">
            {/* Dotted Circle Wrapper */}
            <div className="relative rounded-full border-4 border-dotted border-[#e2e9f6] p-6 sm:p-8 md:p-10 aspect-square w-full animate-fade-in">
              <img
                src="/company-logos/flash.png"
                alt="Digital Marketing for Healthcare"
                className="rounded-full shadow-2xl object-cover w-full h-full"
                loading="lazy" 
              />

              {/* Social Media Icons - Non-clickable */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 animate-float">
                <img src="/company-logos/facebook.svg" alt="Facebook" className="w-8 sm:w-10 h-8 sm:h-10 hover:scale-110 transition-transform rounded-full shadow-md border" loading="lazy" />
              </div>
              <div className="absolute top-1/4 -left-5 z-20 animate-float">
                <img src="/company-logos/instagram.svg" alt="Instagram" className="w-8 sm:w-10 h-8 sm:h-10 hover:scale-110 transition-transform rounded-full shadow-md border p-1" loading="lazy" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-5 z-20 animate-float">
                <img src="/company-logos/linkedin.svg" alt="LinkedIn" className="w-8 sm:w-10 h-8 sm:h-10 hover:scale-110 transition-transform rounded-full shadow-md border p-1" loading="lazy" />
              </div>
              <div className="absolute bottom-4 left-3/4 translate-x-1/2 z-20 animate-float">
                <img src="/company-logos/twitter.svg" alt="Twitter" className="w-8 sm:w-10 h-8 sm:h-10 hover:scale-110 transition-transform rounded-full shadow-md border" loading="lazy" />
              </div>
              <div className="absolute bottom-0  left-20 md:left-32 -translate-x-10 z-20 animate-float">
                <img src="/company-logos/google.svg" alt="Google" className="w-8 sm:w-10 h-8 sm:h-10 hover:scale-110 transition-transform rounded-full shadow-md border p-1" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSections;
