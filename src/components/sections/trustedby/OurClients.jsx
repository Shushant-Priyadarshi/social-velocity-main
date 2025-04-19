import React, { forwardRef } from 'react';
import Marquee from 'react-fast-marquee';
import CountUp from '../../reactbits/CountUp';

const OurClients = forwardRef ((props,trustedbyRef) => {
  const clientLogos = [
    "https://ext.same-assets.com/3823013307/3294975350.png",
   
    "aquant",
    "https://ext.same-assets.com/3823013307/2017630956.png",

    "lasante",
    "https://ext.same-assets.com/3823013307/3862161789.png",
    "lovetowear",
    "https://ext.same-assets.com/3823013307/76453683.png",
        "myhair",
  ];

  const getImageSrc = (item) => {
    if (item.startsWith("http")) return item;
    return `/client-images/${item}.png`;
  };

  return (
    <section ref={trustedbyRef} id="clients" className="py-10 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-[#1d2549]">
          Trusted By <span className="text-themeColor">
            <CountUp from={0} to={50} separator="," direction="up" duration={1} className="count-up-text" />+
          </span> Brands
        </h2>

        <div className="relative overflow-hidden rounded-xl shadow-inner">
          <Marquee gradient gradientColor="#f5f5f5" speed={40}>
            {clientLogos.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-6 md:px-10 py-4 hover:scale-105 transition-transform"
                aria-label={`${company} logo`}
              >
                <img
                  src={getImageSrc(company)}
                  alt={`${company} logo`}
                  loading="lazy"
                  className="h-12 md:h-20 object-contain max-w-[120px]"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
});

export default OurClients;
