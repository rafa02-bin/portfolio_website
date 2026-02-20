import { useState } from 'react';

export default function Projects() {
  const [notification, setNotification] = useState('');

  const projects = [
    {
      id: 1,
      title: 'Web Apps in Progress',
      tech: 'JavaScript, HTML/CSS',
      description: 'Leveling up my front-end skills daily. Building interactive applications and exploring modern web technologies.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Learning & Growing',
      tech: 'React, Node.js, More TBA',
      description: 'Still grinding and expanding my full-stack capabilities. Working on cool ideas and pushing my limits as a developer.',
      image: '/learning.png'
    },
    {
      id: 3,
      title: 'Echo',
      tech: 'Unity & C# (In Active Development)',
      description: 'An atmospheric 2D platformer currently being developed in Unity, centered on a state-driven memory system. I am implementing C# scripting for responsive player movement and a dynamic puzzle framework involving 4-position rotating mirrors and pressure-plate triggers. The core of the project involves building a custom "Echo" mechanic that tracks and replays player transforms to create interactive environmental challenges. Currently refining the interaction between "Happy" and "Sad" memory planes and optimizing the playback of player state data.',
      image: '/game_placeholder.png'
    },
    {
      id: 4,
      title: 'VibeFit',
      tech: 'React, Node.js, MongoDB (In Active Development)',
      description: 'A fitness app that helps you stay fit and healthy.',
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  const handleViewProject = (projectTitle) => {
    setNotification(`Opening ${projectTitle}...`);
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <section id="projects" className="relative py-20 px-4 bg-gradient-to-br from-pastel-pink to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-4">Featured Projects</h2>
        <p className="text-center text-slate-600 mb-12 text-lg">Showcasing my recent work and technical expertise</p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden border-2 border-pastel-purple hover:border-blue-300 transition p-6 neon-glow-soft hover:shadow-lg duration-300">
              {project.image && (
                <div className="w-full h-48 bg-gradient-to-br from-pastel-purple to-pastel-blue rounded mb-4 flex items-center justify-center overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-sm text-blue-600 mb-4 font-medium">{project.tech}</p>
              {project.description && <p className="text-slate-700 mb-6">{project.description}</p>}
              <button 
                onClick={() => handleViewProject(project.title)}
                className="w-full btn-chill text-sm py-2"
              >
                View Project
              </button>
            </div>
          ))}
        </div>

        {notification && (
          <div className="fixed bottom-4 right-4 bg-gradient-to-r from-pastel-pink to-pastel-purple text-slate-900 px-6 py-3 rounded font-semibold neon-glow">
            {notification}
          </div>
        )}
      </div>

      {/* Wave Divider - Transitions to Skills (Pastel Green) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] text-pastel-green fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
