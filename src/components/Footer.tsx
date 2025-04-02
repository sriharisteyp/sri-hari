
import React, { useState, useEffect } from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 1200);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <footer className={`py-6 px-4 text-portfolio-light-slate text-center text-sm transition-all duration-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="max-w-5xl mx-auto">
        <div className="md:hidden mb-6">
          <SocialLinks />
        </div>
        
        <p className="mb-2">
          Designed & Built with ❤️ by <span className="text-portfolio-teal">Your Name</span>
        </p>
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
