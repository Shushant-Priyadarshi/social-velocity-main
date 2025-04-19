import React from 'react';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Contact = () => {
  useEffect(()=>{
    AOS.init({duration:800});
  })

  return (
    <div>
      <section id="contact" className="py-14 md:py-20 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-3 text-[#1d2549]" data-aos="fade-right">
  Get in <span className="text-themeColor">Touch</span>
</h2>
<div className="w-24 h-1 bg-themeColor mx-auto mb-10 rounded-full" />


        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Form */}
          <div className="flex-1">
            <form className="space-y-6 bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-[#e3e7ef]">
              <div>
                <label className="block text-[#1d2549] font-semibold mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-[#dcdcdc] rounded-xl focus:ring-2 focus:ring-themeColor outline-none transition"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-[#1d2549] font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-[#dcdcdc] rounded-xl focus:ring-2 focus:ring-themeColor outline-none transition"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-[#1d2549] font-semibold mb-2">Message</label>
                <textarea
                  required
                  className="w-full px-4 py-3 border border-[#dcdcdc] rounded-xl focus:ring-2 focus:ring-themeColor outline-none transition"
                  placeholder="How can we help you?"
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-themeColor text-black font-bold text-base md:text-lg hover:bg-[#263262] hover:text-white transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-themeColor p-6 md:p-10 rounded-3xl shadow-xl text-black">
              <div className="mb-6 ">
                <h3 className="text-lg md:text-xl font-semibold mb-1">Business Hours</h3>
                <p className="text-sm md:text-base">Mon–Sat: 9:00am – 5:00pm</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-semibold mb-1">Email</h3>
                <p className="text-sm md:text-base">socialvelocity121@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1">Call</h3>
                <p className=" text-sm md:text-base">+91-95821 54304</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
