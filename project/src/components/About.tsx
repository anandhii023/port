import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/RenderCV_EngineeringResumes_Theme.pdf';
    link.download = 'Anandhalakshmi_Resume.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-40 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"
          ></motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-0"></div>
              <video width="1000" controls autoPlay muted loop>
                <source src={'icecream.mp4'} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-background/40 z-20"></div>
            </div>
          </motion.div>
          
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
          >
            <motion.h3 
              variants={fadeIn}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              UI/UX Designer & Frontend Developer
            </motion.h3>
            
            <motion.p 
              variants={fadeIn}
              className="text-text-secondary mb-6"
            >
              I'm a passionate UI/UX designer and frontend developer with a curious and initiative-driven approach to creating digital experiences. I specialize in developing creative solutions that blend imaginative design with structured development.
            </motion.p>
            
            <motion.div
              variants={fadeIn}
              className="mb-6"
            >
              <h4 className="text-xl font-bold mb-3">Education</h4>
              <div className="card mb-4 bg-surface-light/50">
                <h5 className="font-semibold">B.Tech in Information Technology</h5>
                <p className="text-text-secondary text-sm">St.Joseph's College of Engineering</p>
              </div>
            </motion.div>
            
            <motion.p 
              variants={fadeIn}
              className="text-text-secondary mb-6"
            >
              My passion for design is driven by the desire to create intuitive and engaging user experiences. I believe in the power of thoughtful design to solve complex problems and enhance user satisfaction. My approach combines aesthetic appeal with functional efficiency.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
            >
              <motion.button
                onClick={handleDownloadResume}
                className="btn btn-primary flex items-center gap-2 w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText size={18} /> Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;