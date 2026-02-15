export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'HTML/CSS', 'Java', 'React']
    },
    {
      title: 'Game Development',
      skills: ['Unity', 'Godot']
    },
    {
      title: 'Tools & Technologies',
      skills: ['GitHub', 'GitLab', 'Docker', 'VS Code', 'Linux']
    }
  ];

  return (
    <section id="skills" className="relative py-20 px-4 bg-gradient-to-br from-pastel-green to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-12">Technical Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg border-2 border-pastel-yellow p-8 hover:border-blue-300 transition neon-glow">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item flex items-center gap-2 text-slate-700">
                    <span className="text-blue-600">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Divider - Transitions to Contact (Pastel Yellow) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] text-pastel-yellow fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
