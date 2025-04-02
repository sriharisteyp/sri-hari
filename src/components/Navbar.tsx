
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { AlignJustify, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 py-4 md:px-8",
        scrolled ? "bg-portfolio-navy/90 backdrop-blur shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-portfolio-teal font-bold text-xl">
          Portfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors"
            >
              <span className="text-portfolio-teal mr-1">{index + 1}.</span>
              {item.name}
            </a>
          ))}
          <Button
            asChild
            variant="outline"
            className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-teal"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-portfolio-navy/95 z-40 flex flex-col items-center justify-center animate-fade-in">
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-portfolio-teal mr-1">{index + 1}.</span>
                {item.name}
              </a>
            ))}
            <Button
              asChild
              variant="outline"
              className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10 mt-4"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
