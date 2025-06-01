import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
    const staggerElements = document.querySelectorAll('.stagger-children');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          // Optional: remove the class when the element is out of view
          // entry.target.classList.remove('is-visible');
        }
      });
    }, {
      threshold: 0.1
    });
    
    animateOnScrollElements.forEach(element => {
      observer.observe(element);
    });
    
    staggerElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      animateOnScrollElements.forEach(element => {
        observer.unobserve(element);
      });
      
      staggerElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
};

export default useScrollAnimation;