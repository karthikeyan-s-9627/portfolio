import React, { useEffect, useRef } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const text = useTypewriter(
    "A Engineering Student currently living in Hosur, Tamil Nadu, India",
    100,
    1000
  );
  
  const profileRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (profileRef.current) {
      observer.observe(profileRef.current);
    }
    
    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <ParticleBackground />
      
      <div className="container mx-auto px-4 z-10 flex flex-col items-center justify-center">
        <div 
          ref={profileRef}
          className="opacity-0 transition-all duration-1000 mb-8 relative"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-electric-purple/30 group transition-all duration-300 hover:shadow-[0_0_25px_rgba(127,0,255,0.7)]">
            <img 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
              alt="Profile" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-r from-electric-blue to-electric-purple flex items-center justify-center text-white font-bold text-sm animate-pulse">
            <span>👋</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue via-white to-electric-purple">
            RICKY ROMANSYAH
          </span>
        </h1>
        
        <div className="h-8 mb-6">
          <p className="text-lg md:text-xl text-white">
            {text}<span className="animate-blink">|</span>
          </p>
        </div>
        
        <div className="flex space-x-4 mt-8">
          <a
            href="#contact"
            className="px-8 py-3 bg-electric-purple text-white font-medium rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(127,0,255,0.7)] hover:-translate-y-1"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-transparent border border-electric-blue text-white font-medium rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,242,255,0.7)] hover:-translate-y-1"
          >
            View Projects
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/50 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;