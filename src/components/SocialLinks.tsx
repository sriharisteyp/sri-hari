
import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

interface SocialLinksProps {
  vertical?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ vertical = false }) => {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:your.email@example.com", label: "Email" },
    { icon: <FileText size={20} />, href: "/resume.pdf", label: "Resume" },
  ];
  
  return (
    <div className={`flex ${vertical ? 'flex-col space-y-6' : 'space-x-6'} items-center`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors"
          aria-label={link.label}
          target={link.href.startsWith('http') ? "_blank" : undefined}
          rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
        >
          {link.icon}
        </a>
      ))}
      
      {vertical && (
        <div className="h-24 w-px bg-portfolio-light-slate"></div>
      )}
    </div>
  );
};

export default SocialLinks;
