import React from 'react'
import Marquee from "react-fast-marquee"

const OurClients = () => {

    const clientLogos = [
        "https://ext.same-assets.com/3823013307/3294975350.png",
        "https://ext.same-assets.com/3823013307/2017630956.png",
        "https://ext.same-assets.com/3823013307/3862161789.png",
        "https://ext.same-assets.com/3823013307/76453683.png",
        "https://ext.same-assets.com/3823013307/840944163.png",
        "https://ext.same-assets.com/3823013307/1736972088.png",
      ];
      
  return (
    <div>
        <section id="clients" className="py-10 md:py-14 ">
        <div className="max-w-6xl mx-auto px-2 md:px-4">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-[#1d2549]">Trusted By <span className='text-themeColor'>50+</span> Brands </h2>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <Marquee pauseOnHover={true}>
        {clientLogos.map((company,index)=><div key={index} className="mx-8 px-2 py-1 mb-10 hover:bg-mine-shaft-950 rounded-lg cursor-pointer">
            <img className="h-16 " src={`${company}`} alt={`${company}-logo`} loading="lazy" />
        </div>)}
    </Marquee>
          </div>
        </div>
      </section>

    </div>
  )
}

export default OurClients