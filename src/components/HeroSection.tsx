
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center px-4 max-w-5xl mx-auto">
      <div className={cn("space-y-4", isMounted ? "animate-fade-in" : "opacity-0")}>
        <p className="text-portfolio-teal mb-6">Hi, my name is</p>
        <h1 className="text-4xl md:text-7xl font-bold text-portfolio-lightest-slate">
          Your Name.
        </h1>
        <h2 className="text-3xl md:text-6xl font-bold text-portfolio-slate">
          I build things for the web.
        </h2>
        <p className="max-w-2xl text-portfolio-slate text-lg mt-6 mb-12">
          I'm a software developer specializing in building exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            className="bg-transparent hover:bg-portfolio-teal/10 border border-portfolio-teal text-portfolio-teal"
          >
            <a href="#projects">Check out my projects</a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-portfolio-light-slate text-portfolio-light-slate hover:bg-portfolio-light/10"
          >
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-portfolio-light-slate hover:text-portfolio-teal">
          <ArrowDown />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
