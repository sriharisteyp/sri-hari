
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-heading">
        <span>01.</span> About Me
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <p className="text-portfolio-light-slate mb-4">
            👋 Hello! I'm <span className="text-portfolio-teal">Your Name</span>, a passionate developer with 
            experience in front-end, back-end, and full-stack development.
          </p>
          
          <p className="text-portfolio-light-slate mb-4">
            📚 I have a background in Computer Science from [Your University]. My journey into 
            development began when I created my first website in high school, and I've been 
            hooked on creating digital experiences ever since.
          </p>
          
          <p className="text-portfolio-light-slate mb-4">
            💡 I'm particularly interested in web development, artificial intelligence, and 
            building accessible applications that solve real-world problems. When I'm not 
            coding, you can find me exploring new technologies, contributing to open source, 
            or learning something new.
          </p>
          
          <div className="mt-8">
            <h3 className="text-xl text-portfolio-lightest-slate mb-3">⚙️ Core Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "Python", "React", "Node.js", "Git", "SQL"].map((skill) => (
                <div key={skill} className="skill-pill">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-portfolio-teal rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <Card className="relative rounded-lg overflow-hidden border-2 border-portfolio-teal/20 h-full">
              <div className="aspect-square relative overflow-hidden bg-portfolio-light">
                <div className="absolute inset-0 bg-portfolio-teal/10"></div>
                <img
                  src="https://images.unsplash.com/photo-1649992355604-7d0e9e1bc22c?q=80&w=580"
                  alt="Your Name"
                  className="object-cover h-full w-full mix-blend-normal opacity-90 grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
