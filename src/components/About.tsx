import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideInFromLeft');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-black relative py-20 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block relative">
            <span className="text-white">About</span>
            <span className="text-electric-purple"> Me</span>
            <span className="block h-1 w-full bg-gradient-to-r from-electric-blue to-electric-purple mt-2"></span>
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">Who Am I?</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-5/12 relative">
            <div className="w-full h-80 md:h-96 relative rounded-lg overflow-hidden border-2 border-electric-purple/20 group transition-all duration-300 hover:shadow-[0_0_25px_rgba(127,0,255,0.3)]">
              <img 
                src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg" 
                alt="About Me" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-5 -right-5 md:-bottom-8 md:-right-8 w-20 h-20 md:w-32 md:h-32 rounded-lg bg-electric-purple/10 backdrop-blur-sm border border-electric-purple/30"></div>
            <div className="absolute -top-5 -left-5 md:-top-8 md:-left-8 w-20 h-20 md:w-32 md:h-32 rounded-lg bg-electric-blue/10 backdrop-blur-sm border border-electric-blue/30"></div>
          </div>

          <div 
            ref={textRef}
            className="md:w-7/12 opacity-0"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Hi, I'm Ricky Romansyah</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              I'm a passionate Software Engineer based in Malang, Indonesia, with expertise in front-end and back-end development. With 5+ years of experience crafting digital experiences, I focus on creating innovative, scalable solutions that solve real-world problems.
            </p>
            <p className="text-white/80 mb-6 leading-relaxed">
              My journey in technology began when I built my first website at 15. Since then, I've been obsessed with code, constantly learning and exploring new technologies to push the boundaries of what's possible in web development.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-white/60 mb-1">Name:</p>
                <p className="text-white font-medium">Ricky Romansyah</p>
              </div>
              <div>
                <p className="text-white/60 mb-1">Email:</p>
                <p className="text-white font-medium">hello@example.com</p>
              </div>
              <div>
                <p className="text-white/60 mb-1">From:</p>
                <p className="text-white font-medium">Malang, Indonesia</p>
              </div>
              <div>
                <p className="text-white/60 mb-1">Availability:</p>
                <p className="text-white font-medium">Full-time</p>
              </div>
            </div>
            <a
              href="#contact"
              className="px-8 py-3 bg-electric-purple text-white font-medium rounded-full inline-block transition-all duration-300 hover:shadow-[0_0_15px_rgba(127,0,255,0.7)] hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default About;