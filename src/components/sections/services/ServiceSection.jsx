import React from "react";
import ServiceBento from "./ServiceBento";

const ServiceSection = () => {
  return (
    <div className="bg-themeColor mb-10">
      <section
        id="services"
        className="py-14 max-w-7xl mx-auto px-2 md:px-10"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-center  text-[#1d2549]" data-aos="fade-right">
          Our <span>Services</span>
        </h2>

        {/* Hand-drawn underline SVG */}
        <div className="flex justify-center ">
          <svg
            viewBox="0 0 200 20"
            className="w-40 h-6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 10 C40 20, 160 0, 198 10"
              stroke="#1d2549"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <ServiceBento />
      </section>
    </div>
  );
};

export default ServiceSection;
