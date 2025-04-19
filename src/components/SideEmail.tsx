
import React, { useEffect, useState } from 'react';

const SideEmail = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div className={`fixed right-10 bottom-0 hidden md:block transition-opacity duration-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col items-center">
        <a 
          href="https://wa.me/8281176376?text=Hi" 
          className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors my-6 vertical-text"
          style={{ writingMode: 'vertical-rl' }}
        >
          Get in Touch
        </a>
        <div className="h-24 w-px bg-portfolio-light-slate"></div>
      </div>
    </div>
  );
};

export default SideEmail;
