import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-[#1d2549]">
        Why Choose{" "}
        <span className="relative inline-block text-themeColor">
          Social Velocity
          <svg
            viewBox="0 0 140 12"
            className="absolute left-0 -bottom-2 w-full h-5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6 C30 12, 110 0, 138 6"
              stroke="#74AEFE"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>
        ?
      </h2>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center gap-12 mt-10">
        {/* Image + Icons */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          <div className="relative rounded-full border-4 border-dotted border-[#e2e9f6] p-6 sm:p-8 md:p-10 aspect-square w-full animate-fade-in">
            <img
              src="/company-logos/flash.png"
              alt="Digital Marketing for Healthcare"
              className="rounded-full shadow-xl object-cover w-full h-full"
              loading="lazy" 
            />

            {/* Floating Social Icons */}
            {[
              { src: "/company-logos/facebook.svg", className: "top-0 left-1/2 -translate-x-1/2" },
              { src: "/company-logos/instagram.svg", className: "top-1/4 -left-5" },
              { src: "/company-logos/linkedin.svg", className: "top-1/2 right-[-20px] -translate-y-1/2" },
              { src: "/company-logos/twitter.svg", className: "bottom-3 left-3/4 translate-x-1/2" },
              { src: "/company-logos/google.svg", className: "bottom-1 left-1/4" },
            ].map((icon, i) => (
              <div
                key={i}
                className={`absolute z-20 animate-float ${icon.className}`}
              >
                <img
                  src={icon.src}
                  alt="Icon"
                  className="w-8 sm:w-10 h-8 sm:h-10 hover:scale-110 transition-transform rounded-full shadow-md border bg-white p-1"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Textual Content */}
        <div className="flex-1 text-[#263262] md:pl-8">
          <ul className="space-y-4 text-base sm:text-lg">
            {[
              "Specialist in digital marketing for healthcare & labs",
              "Results-driven campaigns with real success stories",
              "End-to-end service: Branding, Websites, Google Ads & more",
              "Dedicated support – we become your marketing partners",
              "Transparent ROI reporting & frequent strategy reviews",
              "Trusted by top clinics, path labs, and healthcare leaders",
            ].map((text, i) => (
              <li key={i} className="flex items-start">
                <span className="w-3 h-3 mt-2 bg-themeColor rounded-full mr-3 flex-shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* Highlight Box */}
          <div className="bg-[#489fc823] p-4 sm:p-5 rounded-lg text-[#1d2549] mt-6 shadow flex items-start gap-3">
            <svg
              className="w-6 h-6 text-[#be4368] flex-shrink-0 mt-1"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" stroke="#be4368" strokeWidth="2" />
              <path d="M7 13l3 3 7-7" stroke="#be4368" strokeWidth="2" />
            </svg>
            <p className="text-sm sm:text-base">
              We measure our success by your ROI—partner with a hands-on,
              innovative team focused solely on your growth!
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-themeColor text-black rounded-full font-bold text-sm sm:text-base shadow-md hover:bg-[#263262] hover:text-white transition"
            >
              Request a Free Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
