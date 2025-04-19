import React from "react";
import CountUp from './reactbits/CountUp'
const StatsAndTestimonials = () => {
  return (
    <div>
      <section className="py-10 md:py-14 bg-themeColor">
        <div className="max-w-5xl mx-auto px-2 md:px-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-7 md:mb-10 text-[#1d2549]">
            Marketing Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col items-center bg-white rounded-2xl p-5 md:p-8 shadow">
              <span className="text-2xl md:text-4xl font-bold text-themeColor mb-2">
                
                <CountUp
                  from={0}
                  to={50}
                  separator=","
                  direction="up"
                  duration={2}
                  className="count-up-text"
                />
                +
              </span>
              <span className="uppercase tracking-widest font-bold text-xs text-[#1d2549]">
                Happy Healthcare Clients
              </span>
            </div>


            <div className="flex flex-col items-center bg-white rounded-2xl p-5 md:p-8 shadow">
              <span className="text-2xl md:text-4xl font-bold text-themeColor mb-2">
                 <CountUp
                  from={0}
                  to={100}
                  separator=","
                  direction="up"
                  duration={2}
                  className="count-up-text"
                />
                k+
              </span>
              <span className="uppercase tracking-widest font-bold text-xs text-[#1d2549]">
                Leads Generated
              </span>
            </div>

            <div className="flex flex-col items-center bg-white rounded-2xl p-5 md:p-8 shadow">
              <span className="text-2xl md:text-4xl font-bold text-themeColor mb-2">
                <CountUp
                  from={0}
                  to={300}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                %
              </span>
              <span className="uppercase tracking-widest font-bold text-xs text-[#1d2549]">
                Average Growth YoY
              </span>
            </div>
          </div>
          {/* Simple testimonial */}
          <div className="mt-8 md:mt-12 max-w-xl mx-auto bg-[#ffffffee] rounded-2xl px-6 md:px-8 py-7 md:py-8 shadow">
            <p className="italic text-base md:text-lg mb-4 text-[#20254a]">
              “Social Velocity helped us take our clinic brand online – we saw more
              patient bookings and engagement in 3 months than a whole year
              before!”
            </p>
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <img
                src="https://ext.same-assets.com/3823013307/3294975350.png"
                alt="OrthoCares"
                className="h-7 w-7 md:h-10 md:w-10 rounded-full border"
              />
              <span className="text-themeColor font-semibold text-xs md:text-base">
                Dr. Vishal – OrthoCares
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsAndTestimonials;
