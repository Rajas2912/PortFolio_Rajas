import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeText = ({ text }) => {
  return (
    <div className="bg-black py-2">
      <Marquee
        gradient={false} 
        speed={40}
        direction="left"
        pauseOnHover={false}
      >
        <div className="flex items-center gap-6">
          {Array(10).fill(` ${text}`).map((text, index) => (
            <span 
              key={index} 
              className="text-[3rem] font-semibold text-white/90 uppercase tracking-wider px-4 font-montserrat"
            >
              {text}
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeText; 