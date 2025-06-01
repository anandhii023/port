import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  video: string;
  description: string;
  tools: string[];
  link: string;
}

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Watch models",
      category: "UI/UX Design",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "watch.mp4",
      description: "An intuitive watch shopping experience with animated interactions and a streamlined checkout process. Designed for optimal user engagement and conversion rates.",
      tools: ["Figma", "Wireframing", "Prototyping"],
      link: "#"
    },
    {
      id: 2,
      title: "Beauty products",
      category: "UI/UX Design",
      image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "beauty.mp4",
      description: "An intuitive beauty products shopping experience with animated interactions and a streamlined checkout process. Designed for optimal user engagement and conversion rates.",
      tools: ["Figma", "Wireframing", "Prototyping"],
      link: "#"
    },
    {
      id: 3,
      title: "Smoothie",
      category: "UI/UX Design",
      image: "https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "smoothie.mp4",
      description: "A smoothie advertisement immersive user interface, featuring destination exploration, seamless booking flow, and personalized recommendations.",
      tools: ["Figma", "User Research", "Prototyping"],
      link: "#"
    },
    {
      id: 4,
      title: "Handbag shopping",
      category: "Frontend",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "handbag.mp4",
      description: "A social media application with real-time messaging, post creation, and user interaction features. Built with React.js and modern frontend technologies.",
      tools: ["Figma", "Prototyping", "Animation"],
      link: "#"
    },
    {
      id: 5,
      title: "Orange juice",
      category: "UI/UX Design",
      image: "https://images.pexels.com/photos/7567551/pexels-photo-7567551.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "orange.mp4",
      description: "This Orange Juice is a refreshing and user-friendly UI concept built in Figma, aimed at promoting a vibrant and healthy lifestyle. The design focuses on showcasing a natural, pulpy orange juice product, combining bright citrus tones with smooth, intuitive navigation.",
      tools: ["Figma", "Prototyping", "User Testing"],
      link: "#"
    },
    {
      id: 6,
      title: "Ice cream ",
      category: "Frontend",
      image: "https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "icecream.mp4",
      description: "The ad combines vibrant summer tones, playful typography, and high-quality imagery to highlight new ice cream flavors and drive customer interest.",
      tools: ["Figma", "Animation", "Prototyping"],
      link: "#"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const filters = ['all', 'UI/UX Design', ];

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="absolute top-40 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={fadeIn}
            className="text-text-secondary max-w-3xl mx-auto mb-8"
          >
            Explore a collection of my recent projects showcasing my skills in UI/UX design and frontend development.
          </motion.p>
          
          <motion.div
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'bg-surface-light/50 text-text-secondary hover:bg-surface-light'
                }`}
              >
                {filter === 'all' ? 'All Projects' : filter}
              </button>
            ))}
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              onClick={() => openProjectModal(project)}
            >
              <div className="relative overflow-hidden rounded-xl cursor-pointer card p-0 bg-surface-light/50">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <video width="900" controls autoPlay muted loop>
                    <source src={project.video} type="video/mp4" />
                  </video>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-text-secondary text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-auto bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-surface rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
          >
            <div className="relative">
              <video width="500" controls autoPlay muted loop>
                <source src={selectedProject.video} type="video/mp4" />
              </video>
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 bg-background/50 text-white p-2 rounded-full hover:bg-background transition-colors duration-300"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18"></path><path d="M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              </div>
              
              <p className="text-text-secondary mb-6">
                {selectedProject.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-surface-light rounded-full text-text-secondary text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href={selectedProject.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center gap-2 w-fit"
              >
                View Project <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;