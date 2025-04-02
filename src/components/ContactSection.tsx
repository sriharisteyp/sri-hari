
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Github, Mail, FileText } from 'lucide-react';

const ContactSection = () => {
  const contactLinks = [
    {
      name: "Email",
      value: "your.email@example.com",
      icon: <Mail className="h-6 w-6" />,
      href: "mailto:your.email@example.com",
      color: "hover:text-portfolio-teal",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/yourusername",
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      value: "github.com/yourusername",
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/yourusername",
      color: "hover:text-gray-400",
    },
    {
      name: "Resume",
      value: "Download PDF",
      icon: <FileText className="h-6 w-6" />,
      href: "/resume.pdf",
      color: "hover:text-green-500",
    },
  ];

  return (
    <section id="contact" className="section-container">
      <h2 className="section-heading">
        <span>05.</span> Contact
      </h2>
      
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h3 className="text-3xl text-portfolio-lightest-slate mb-4">Get In Touch</h3>
        <p className="text-portfolio-light-slate mb-8">
          I'm currently looking for new opportunities! Whether you have a question or just want to say hi,
          I'll do my best to get back to you as soon as possible.
        </p>
        
        <Button
          asChild
          size="lg"
          className="bg-transparent hover:bg-portfolio-teal/10 border border-portfolio-teal text-portfolio-teal"
        >
          <a href="mailto:your.email@example.com">Say Hello</a>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="block"
          >
            <Card className="bg-portfolio-light border-portfolio-lightest/10 hover:border-portfolio-teal/30 transition-all duration-300">
              <CardContent className="flex items-center p-6">
                <div className={`mr-4 text-portfolio-light-slate ${link.color} transition-colors`}>
                  {link.icon}
                </div>
                <div className="text-left">
                  <p className="text-portfolio-teal font-medium">{link.name}</p>
                  <p className="text-portfolio-light-slate">{link.value}</p>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
