import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  const skills: Skill[] = [
    { name: 'HTML', percentage: 95, color: '#E34F26' },
    { name: 'CSS', percentage: 90, color: '#1572B6' },
    { name: 'JavaScript', percentage: 85, color: '#F7DF1E' },
    { name: 'React', percentage: 80, color: '#61DAFB' },
    { name: 'TypeScript', percentage: 75, color: '#3178C6' },
    { name: 'Node.js', percentage: 70, color: '#339933' },
    { name: 'Python', percentage: 65, color: '#3776AB' },
    { name: 'UI/UX Design', percentage: 85, color: '#FF3366' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.progress-line');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add('animate-progressFill');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen bg-black relative py-20 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
      
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-electric-purple/20 blur-[100px]"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-electric-blue/20 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block relative">
            <span className="text-white">My</span>
            <span className="text-electric-purple"> Skills</span>
            <span className="block h-1 w-full bg-gradient-to-r from-electric-blue to-electric-purple mt-2"></span>
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Here are my technical skills and expertise areas
          </p>
        </div>

        <div 
          ref={skillsRef}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="skill-item relative opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex justify-between mb-2">
                  <h3 className="text-white font-medium">{skill.name}</h3>
                  <span className="text-white/60">{skill.percentage}%</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="progress-line h-full w-0 rounded-full"
                    style={{ 
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC)`,
                      boxShadow: `0 0 10px ${skill.color}88`,
                    }}
                    data-width={`${skill.percentage}%`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Skills;