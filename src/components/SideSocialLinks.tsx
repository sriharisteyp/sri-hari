
import React, { useEffect, useState } from 'react';
import SocialLinks from './SocialLinks';

const SideSocialLinks = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div 
      className={`fixed left-10 bottom-0 hidden md:block transition-all duration-700 ${
        isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
    >
      <SocialLinks vertical />
    </div>
  );
};

export default SideSocialLinks;
