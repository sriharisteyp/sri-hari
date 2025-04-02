
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Task Manager Application",
      description: "A full-stack task management application with user authentication, task categories, and a drag-and-drop interface.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "https://project-demo.example.com",
      githubLink: "https://github.com/yourusername/project",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072",
    },
    {
      title: "E-commerce Platform",
      description: "An online store with product listings, shopping cart functionality, user reviews, and payment processing integration.",
      techStack: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
      liveLink: "https://project-demo.example.com",
      githubLink: "https://github.com/yourusername/project",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069",
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that shows current conditions and forecasts based on user location or search queries.",
      techStack: ["JavaScript", "HTML5", "CSS", "Weather API"],
      liveLink: "https://project-demo.example.com",
      githubLink: "https://github.com/yourusername/project",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
    },
    {
      title: "Blog Platform",
      description: "A content management system for creating, editing, and publishing blog posts with markdown support.",
      techStack: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "https://project-demo.example.com",
      githubLink: "https://github.com/yourusername/project",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-heading">
        <span>04.</span> Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="overflow-hidden bg-portfolio-light border-portfolio-lightest/10 hover:shadow-lg hover:shadow-portfolio-teal/10 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative overflow-hidden h-48">
              <div className="absolute inset-0 bg-portfolio-navy/30 hover:bg-portfolio-navy/10 transition-all duration-300"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-portfolio-lightest-slate">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-portfolio-light-slate mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech) => (
                  <Badge 
                    key={tech} 
                    className="bg-portfolio-lightest/10 text-portfolio-teal hover:bg-portfolio-teal/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-4">
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <Github size={20} />
              </a>
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={20} />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
