import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Code, Zap, Target, Layout, Eye } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: <Palette size={36} className="text-primary" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive, visually appealing interfaces that enhance user experience and engagement.',
    },
    {
      icon: <Code size={36} className="text-primary" />,
      title: 'Frontend Development',
      description: 'Building responsive, interactive websites and applications using modern frontend technologies.',
    },
    {
      icon: <Zap size={36} className="text-primary" />,
      title: 'Interactive Prototypes',
      description: 'Developing high-fidelity interactive prototypes that simulate the user experience.',
    },
    {
      icon: <Layout size={36} className="text-primary" />,
      title: 'Responsive Web Design',
      description: 'Designing websites that provide optimal viewing experience across all devices.',
    },
    {
      icon: <Eye size={36} className="text-primary" />,
      title: 'User Research',
      description: 'Conducting research to understand user needs and behaviors to inform design decisions.',
    },
    {
      icon: <Target size={36} className="text-primary" />,
      title: 'Design Systems',
      description: 'Creating cohesive design systems to ensure consistency across products and platforms.',
    }
  ];

  return (
    <section id="services" className="section-padding bg-surface/30 relative">
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
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
            My <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={fadeIn}
            className="text-text-secondary max-w-3xl mx-auto"
          >
            Delivering high-quality, creative solutions with a focus on client satisfaction.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card glass-effect group hover:bg-surface-light hover:-translate-y-2"
            >
              <div className="mb-5 inline-block">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-text-secondary">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 p-8 glass-effect rounded-xl max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Need a custom service?</h3>
          <p className="text-text-secondary mb-6">
            Looking for a specific service not listed above? I offer customized solutions tailored to your unique needs and requirements.
          </p>
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;