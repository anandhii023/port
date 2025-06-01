import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const experienceItems = [
    {
      title: 'UI/UX Designer Intern',
      description: 'Gained hands-on experience with wireframes, design protocols, and animations in UI/UX tools. Collaborated with senior designers and developers to create user-centered designs.',
      responsibilities: [
        'Created wireframes and prototypes using Figma',
        'Developed animations for digital interfaces using Adobe Aero',
        'Participated in user research and usability testing',
        'Collaborated with cross-functional teams to implement designs'
      ]
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
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
            My <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"
          ></motion.div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-primary/30 space-y-12">
            {experienceItems.map((item, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <video width="1000" controls autoPlay muted loop>
                  <source src={'beauty.mp4'} type="video/mp4" />
                </video>
                <div className="card bg-surface-light/50 hover:bg-surface-light transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <div className="flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      <Calendar size={14} className="mr-1" />
                    </div>
                  </div>
                  
                  <p className="text-accent mb-3"></p>
                  <p className="text-text-secondary mb-4">{item.description}</p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
