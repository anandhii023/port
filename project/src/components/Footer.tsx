import React from 'react';
import { Github, Linkedin, Mail, } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <a href="#home" className="mb-6 flex items-center">
            <div className="w-10 h-10 mr-2 rounded overflow-hidden bg-gradient-to-br from-primary to-accent">
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
            </div>
            <span className="text-xl font-heading font-bold gradient-text">Anandhalakshmi</span>
          </a>
          
          <div className="flex items-center gap-6 mb-8">
            <a href="https://anandhii023.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="www.linkedin.com/in/anandhalakshmi-e-9150462b2" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="mailto:anandhalakshmi2311@gmail.com" className="text-text-secondary hover:text-primary transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>
          
          <div className="border-t border-surface-light w-full max-w-md mb-6"></div>
          
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              <li><a href="Hero.tsx" className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm">Home</a></li>
              <li><a href="About.tsx" className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm">About</a></li>
              <li><a href="Experience.tsx" className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm">Experience</a></li>
              <li><a href="Skills.tsx" className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm">Skills</a></li>
              <li><a href="Portfolio.tsx" className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm">Projects</a></li>
              <li><a href="Contact.tsx" className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm">Contact</a></li>
            </ul>
          </nav>
          
          <p className="text-text-secondary text-center text-sm flex items-center">
            &copy; {currentYear} Anandhalakshmi E. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;