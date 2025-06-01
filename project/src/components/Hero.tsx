import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["UI/UX Designer", "Frontend Developer"];
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    // Show name first
    setTimeout(() => setShowName(true), 500);
    
    // Start role animation after name appears
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 -right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
        ></motion.div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showName ? 1 : 0, y: showName ? 0 : 20 }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Hi, I'm <span className="gradient-text">Anandhalakshmi</span>
              </motion.h1>

              <div className="h-20"> {/* Fixed height container for roles */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentRole}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text"
                  >
                    {roles[currentRole]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
            

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-text-secondary text-lg mb-8 max-w-lg"
            >

              
              Transforming ideas into intuitive, animated digital experiences with a perfect blend of design aesthetics and technical expertise.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a 
                href="#portfolio" 
                className="btn btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work <ArrowRight size={18} />
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="flex items-center gap-6 mt-8"
            >
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-secondary hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-secondary hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <motion.div 
              className="relative"
              animate={floatingAnimation}
            >
              <motion.div 
                className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <div className="relative overflow-hidden w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-surface-light">
                <img 
                  src="/am..jpg"
                  alt="Anandhalakshmi E"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;