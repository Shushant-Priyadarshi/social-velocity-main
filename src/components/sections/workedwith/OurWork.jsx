import React, { forwardRef } from 'react'

const OurWork =forwardRef ((props,workedwithyRef)=> {


// Work We Have Done / Case Studies
const works = [
    {
      image: "https://ext.same-assets.com/3823013307/3294975350.png",
      title: "OrthoCares: 2X Patient Growth",
      desc: "Scaled this orthopaedic clinic's lead volume & visibility via Google Ads & sharp social campaigns.",
    },
    {
      image: "https://ext.same-assets.com/3823013307/2017630956.png",
      title: "Renal Path Labs: 500+ Monthly Leads",
      desc: "Lab Darshi delivered high-converting landing pages and content marketing driving bookings.",
    },
    {
      image: "https://ext.same-assets.com/3823013307/3862161789.png",
      title: "Phy Rehab: Brand & Digital Suite",
      desc: "Full-stack services for a rehab chain — modern branding, social, SEO and web buildout.",
    },
    {
      image: "https://ext.same-assets.com/3823013307/76453683.png",
      title: "Dr. Arrys Mediclinic: Local Domination",
      desc: "Ranked #1 locally and engaged the city with tailored content, ads and brand refresh.",
    },
  ];
  
  return (
    <div ref={workedwithyRef}><section id="work" className="py-14 md:py-20  px-2 md:px-4 mb-4">
    <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl  md:text-4xl font-bold text-center mb-8 md:mb-16 text-[#1d2549]" data-aos="zoom-out-up">
  <span className="relative inline-block" >
    <span className="text-themeColor">Marketing</span>
    <svg
      viewBox="0 0 140 12"
      className="absolute left-0 -bottom-1 w-full h-3"
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
  </span>{" "}
  We've Done
</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {works.map((w) => (
          <div key={w.title} className="flex flex-col items-center bg-white shadow p-5 md:p-7 rounded-2xl border border-[#eaeaf3] h-full group hover:-translate-y-1 hover:shadow-xl transition">
            <img loading="lazy"  src={w.image} alt={w.title} className="h-16 w-16 md:h-24 md:w-24 mb-3 md:mb-4 object-contain rounded-full border-2 border-[#bac6de] bg-[#f0f2f7] shadow group-hover:scale-105 transition" />
            <h3 className="font-bold text-base md:text-lg text-themeColor mb-1 text-center">{w.title}</h3>
            <p className="text-[#4b5776] text-xs md:text-sm mb-1 text-center">{w.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section></div>
  )
});

export default OurWork