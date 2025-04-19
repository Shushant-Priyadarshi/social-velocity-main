import React from 'react';

const Footer = () => {
  const linksData = [
    {
      social: "Instagram",
      icon: "/company-logos/instagram.svg",
      link: "https://www.instagram.com/socialvelocity_?igsh=MXYzbGw2b2FnNm05cw==",
    },
    {
      social: "WhatsApp",
      icon: "/company-logos/whatsapp.svg",
      link: "https://wa.me/917394982690",
    },
    {
      social: "Facebook",
      icon: "/company-logos/facebook.svg",
      link: "https://www.facebook.com/socialvelocity.in",
    },
  
  ]
  
  return (
    <footer className="bg-[#f9fafb] text-[#1d2549] border-t border-gray-200 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo & Name */}
        <div className="flex items-center space-x-3">
          <img
            src="/company-logos/flash.png"
            alt="Lab Darshi Logo"
            className="h-8 w-8 rounded-full shadow-sm"
            loading='lazy'
          />
          <span className="font-semibold text-lg md:text-xl tracking-tight">Social Velocity</span>
        </div>
        
        {/* Footer Links (Optional) */}
        <div className="flex gap-10 text-sm md:text-base mt-2 md:mt-0 text-[#5e6479]">
          {linksData.map((link) => (
            <a href={`${link.link}`} target='__blank' key={link.social} className="hover:text-themeColor transition w-8 h-8">
            <img src={`${link.icon}`} alt={link.social}></img>
          </a>
          )
          )}
          
         
        </div>

        {/* Copyright */}
        <div className="text-xs md:text-sm text-[#7b8197] mt-3 md:mt-0 text-center md:text-right">
          © 2021 Social Velocity. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
