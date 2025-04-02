
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
    },
    {
      id: "work1",
      title: "Company Name",
      role: "Front-end Developer",
      date: "2022 - Present",
      description: [
        "Developed and maintained responsive web applications using React and TypeScript",
        "Collaborated with designers to implement user interfaces according to design specifications",
        "Optimized application performance with code splitting and lazy loading techniques",
        "Integrated RESTful APIs and implemented state management solutions using Redux",
      ],
    },
    {
      id: "work2",
      title: "Previous Company",
      role: "Junior Developer",
      date: "2020 - 2022",
      description: [
        "Built and maintained websites using HTML, CSS, and JavaScript",
        "Assisted in debugging code and resolving technical issues",
        "Participated in code reviews and contributed to team projects",
        "Learned version control with Git and collaborated using GitHub",
      ],
    },
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-heading">
        <span>02.</span> Experience
      </h2>
      
      <Tabs defaultValue="steyp" className="max-w-3xl mx-auto">
        <TabsList className="w-full grid grid-cols-3 mb-8">
          {experiences.map((exp) => (
            <TabsTrigger
              key={exp.id}
              value={exp.id}
              className="text-portfolio-light-slate data-[state=active]:text-portfolio-teal"
            >
              {exp.title}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {experiences.map((exp) => (
          <TabsContent key={exp.id} value={exp.id}>
            <Card className="bg-portfolio-light border-portfolio-lightest/10">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <CardTitle className="text-portfolio-lightest-slate text-xl">
                    {exp.role} <span className="text-portfolio-teal">@ {exp.title}</span>
                  </CardTitle>
                  <CardDescription className="text-portfolio-light-slate">
                    {exp.date}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-portfolio-teal mr-3">▹</span>
                      <span className="text-portfolio-light-slate">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default ExperienceSection;
