import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  video: string;
}

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Smart Attendance System using geo fencing",
      position: "1st Runner up",
      company: "Innothon'24",
      video: "library.mp4",
      content: " Developed a web-based smart attendance system using geofencing technology.Attendance is recorded period-wise only if the student is within the defined geofence area.Implemented multi-user login functionality for students and faculty.Integrated OD (On Duty) and Leave application forms for user convenience.Added Feedback and Contact/Regards pages for user interaction and support."
    },
    {
      id: 2,
      name: "Library Management",
      position: "2nd Runner up", 
      company: "Innovation Software Hackathon Club",
      video: "library.mp4",
      content: "  Designed and developed a user-friendly library management system with role-based access for users and library .Implemented separate login portals to ensure secure and tailored access for different user roles.Integrated a personalized book recommendation system based on genres and favorite authors.Users can browse, search, and add books to a virtual cart, with real-time availability updates.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      
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
            My <span className="gradient-text">Achievements</span>
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={fadeIn}
            className="text-text-secondary max-w-3xl mx-auto"
          >
           
          </motion.p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="relative glass-effect p-8 rounded-xl"
          >
            <div className="absolute top-6 left-6 text-primary opacity-20">
              <Quote size={60} />
            </div>

            <div className="relative z-10">
              <p className="text-lg text-text-secondary italic mb-6 relative z-10">
                {testimonials[currentIndex].content}
              </p>
              
              <div>
                <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-text-secondary">
                  {testimonials[currentIndex].position} at <span className="text-accent">{testimonials[currentIndex].company}</span>
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-6 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-surface hover:bg-surface-light transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-primary' : 'bg-surface-light'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-surface hover:bg-surface-light transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
