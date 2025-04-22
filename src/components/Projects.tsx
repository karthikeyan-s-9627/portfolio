import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      title: 'AI-Powered Dashboard',
      description: 'An interactive dashboard with AI-driven insights for business analytics, featuring real-time data visualization and predictive modeling.',
      image: 'https://images.pexels.com/photos/7372338/pexels-photo-7372338.jpeg',
      tags: ['React', 'TypeScript', 'Machine Learning', 'D3.js'],
      github: '#',
      demo: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with inventory management, payment processing, and customer analytics.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      tags: ['Node.js', 'React', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Health & Fitness App',
      description: 'Mobile application for tracking fitness goals, nutrition planning, and workout routines with personalized recommendations.',
      image: 'https://images.pexels.com/photos/7242806/pexels-photo-7242806.jpeg',
      tags: ['React Native', 'Firebase', 'GraphQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Smart Home IoT System',
      description: 'IoT platform for smart home automation with machine learning for optimizing energy usage and enhancing security.',
      image: 'https://images.pexels.com/photos/6170939/pexels-photo-6170939.jpeg',
      tags: ['Python', 'TensorFlow', 'Raspberry Pi', 'MQTT'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Social Media Analytics',
      description: 'Tool for analyzing social media engagement, sentiment analysis, and trend prediction across multiple platforms.',
      image: 'https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg',
      tags: ['Python', 'NLP', 'React', 'Data Visualization'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Blockchain Marketplace',
      description: 'Decentralized marketplace for digital assets with smart contract integration and secure transaction processing.',
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg',
      tags: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      github: '#',
      demo: '#'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fadeInUp');
                card.classList.remove('opacity-0');
                card.classList.remove('translate-y-10');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-black relative py-20 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block relative">
            <span className="text-white">My</span>
            <span className="text-electric-purple"> Projects</span>
            <span className="block h-1 w-full bg-gradient-to-r from-electric-blue to-electric-purple mt-2"></span>
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Explore some of my recent work and personal projects
          </p>
        </div>

        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group transition-all duration-500 ease-out opacity-0 translate-y-10"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white hover:text-electric-purple transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      className="w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white hover:text-electric-blue transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-electric-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.demo || project.github || '#'} 
                  className="inline-block px-4 py-2 bg-transparent border border-electric-purple text-electric-purple text-sm rounded-full transition-all duration-300 hover:bg-electric-purple hover:text-white hover:shadow-[0_0_15px_rgba(127,0,255,0.5)]"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Projects;