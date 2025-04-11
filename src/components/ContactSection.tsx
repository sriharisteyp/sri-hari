import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Github, Mail, FileText, Youtube, Phone } from 'lucide-react';

const ContactSection = () => {
  const contactLinks = [
    {
      name: "Youtube Channel",
      value: "www.youtube.com/@CodeGenesis",
      icon: <Youtube className="h-6 w-6" />,
      href: "https://www.youtube.com/@CodeGenesis335",
      color: "hover:text-portfolio-teal",
      external: true, // Mark as external link
    },
    {
      name: "Phone number",
      value: "8281176376",
      icon: <Phone className="h-6 w-6" />,
      href: "tel:+91 8281176376",
      color: "hover:text-blue-500",
      external: false,
    },
    {
      name: "GitHub",
      value: "github.com/srihariSteyp",
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/srihariSteyp",
      color: "hover:text-gray-400",
      external: true, // Mark as external link
    },
    {
      name: "Resume",
      value: "Download PDF",
      icon: <FileText className="h-6 w-6" />,
      href: "/resume.pdf",
      color: "hover:text-green-500",
      external: false, // Local link for download
      download: true, // Add download attribute
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
          <a href="https://wa.me/8281176376?text=Hi">Say Hello</a>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target={link.external ? "_blank" : "_self"} // Only open in a new tab for external links
            rel={link.external ? "noopener noreferrer" : undefined} // Add rel for security for external links
            download={link.download ? true : undefined} // Add the download attribute for resume link
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
