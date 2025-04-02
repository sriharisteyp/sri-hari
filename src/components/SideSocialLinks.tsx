
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
    <div className={`fixed left-10 bottom-0 hidden md:block transition-opacity duration-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
      <SocialLinks vertical />
    </div>
  );
};

export default SideSocialLinks;
