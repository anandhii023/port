import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Trophy } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Code size={24} className="text-primary" />,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 85 },
        { name: "Java", level: 75 }
      ]
    },
    {
      name: "UI/UX Design",
      icon: <Palette size={24} className="text-accent" />,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe Aero", level: 80 },
        { name: "User Research", level: 75 },
        { name: "Wireframing", level: 85 },
        { name: "Prototyping", level: 80 }
      ]
    },
    {
      name: "Additional Skills",
      icon: <Trophy size={24} className="text-yellow-500" />,
      skills: [
        { name: "Responsive Design", level: 85 },
        { name: "UI Animation", level: 75 },
        { name: "Web Accessibility", level: 70 },
        { name: "Version Control (Git)", level: 80 },
        { name: "Problem Solving", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-surface/30">
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
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={fadeIn}
            className="text-text-secondary max-w-3xl mx-auto"
          >
            I've cultivated a diverse set of skills in both design and development, allowing me to create complete, functional, and aesthetically pleasing digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card glass-effect"
            >
              <div className="flex items-center mb-6">
                <div className="mr-3">{category.icon}</div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <p className="font-medium">{skill.name}</p>
                      <p className="text-text-muted">{skill.level}%</p>
                    </div>
                    <div className="w-full h-2 bg-surface-light rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) + (skillIndex * 0.1) }}
                        className={`h-full ${
                          index === 0 ? 'bg-primary' : index === 1 ? 'bg-accent' : 'bg-yellow-500'
                        } rounded-full`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;