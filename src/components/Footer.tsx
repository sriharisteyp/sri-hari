
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="py-6 px-4 text-portfolio-light-slate text-center text-sm">
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
