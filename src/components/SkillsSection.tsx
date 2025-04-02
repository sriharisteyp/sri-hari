
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const SkillsSection = () => {
  const [animatedSkills, setAnimatedSkills] = useState<boolean[]>([]);
  
  useEffect(() => {
    // Create a staggered animation effect for skills
    const skillCount = skillCategories.reduce((count, category) => count + category.skills.length, 0);
    const animationDelays = Array(skillCount).fill(false);
    
    const animateSkills = () => {
      let delay = 100;
      for (let i = 0; i < skillCount; i++) {
        setTimeout(() => {
          setAnimatedSkills(prev => {
            const newAnimated = [...prev];
            newAnimated[i] = true;
            return newAnimated;
          });
        }, delay);
        delay += 50; // Stagger each skill by 50ms
      }
    };
    
    // Start animation when component mounts
    const timeout = setTimeout(animateSkills, 300);
    return () => clearTimeout(timeout);
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3/SASS"],
      icon: "🔤"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Node.js", "Express", "Django", "Tailwind CSS"],
      icon: "📚"
    },
    {
      title: "Tools & Software",
      skills: ["Git/GitHub", "VS Code", "Docker", "Webpack", "Figma", "Postman"],
      icon: "🛠️"
    },
    {
      title: "Other Technologies",
      skills: ["RESTful APIs", "GraphQL", "MongoDB", "MySQL", "Firebase", "AWS Basics"],
      icon: "💻"
    }
  ];

  let skillIndex = 0;

  return (
    <section id="skills" className="section-container">
      <h2 className="section-heading">
        <span>03.</span> Skills & Technologies
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <Card 
            key={category.title} 
            className="bg-portfolio-light border-portfolio-lightest/10 hover:shadow-md hover:shadow-portfolio-teal/5 transition-all duration-300"
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl">
                <span className="mr-2 text-2xl">{category.icon}</span>
                {category.title}
              </CardTitle>
              <Separator className="bg-portfolio-teal/20" />
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const currentIndex = skillIndex++;
                  return (
                    <div 
                      key={skill} 
                      className={`bg-portfolio-lightest/5 text-portfolio-light-slate px-3 py-1.5 rounded-md text-sm border border-portfolio-lightest/10 hover:border-portfolio-teal/30 transition-all duration-300 transform ${animatedSkills[currentIndex] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                      {skill}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
