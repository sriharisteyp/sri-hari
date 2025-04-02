
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      id: "steyp",
      title: "STEYP Program",
      role: "Developer",
      date: "2021 - Present",
      description: [
        "🔹 How I Joined STEYP: I discovered the program through a tech meetup and was immediately drawn to its practical approach to learning development.",
        "📚 What I Learned: Through STEYP, I mastered React, Node.js, and MongoDB, gaining hands-on experience with real-world projects.",
        "🚀 Challenges & Growth: Initially, I struggled with complex state management, but the program's mentorship helped me overcome these obstacles.",
        "🎯 Future Goals: STEYP has inspired me to pursue full-stack development with a focus on creating accessible and performant web applications.",
      ],
    }
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-heading">
        <span>02.</span> Experience
      </h2>
      
      <Card className="bg-portfolio-light border-portfolio-lightest/10">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <CardTitle className="text-portfolio-lightest-slate text-xl">
              {experiences[0].role} <span className="text-portfolio-teal">@ {experiences[0].title}</span>
            </CardTitle>
            <CardDescription className="text-portfolio-light-slate">
              {experiences[0].date}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {experiences[0].description.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-portfolio-teal mr-3">▹</span>
                <span className="text-portfolio-light-slate">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default ExperienceSection;
