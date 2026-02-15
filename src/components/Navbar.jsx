export default function Navbar() {
  const scrollToSection = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-white to-pastel-blue text-slate-900 px-4 py-4 border-b border-slate-200 neon-glow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-900">Jafar Mohamad</h2>
        <ul className="flex gap-8">
          <li><a href="#home" onClick={scrollToSection} className="text-slate-600 hover:text-blue-600 transition font-medium">Home</a></li>
          <li><a href="#projects" onClick={scrollToSection} className="text-slate-600 hover:text-blue-600 transition font-medium">Projects</a></li>
          <li><a href="#skills" onClick={scrollToSection} className="text-slate-600 hover:text-blue-600 transition font-medium">Skills</a></li>
          <li><a href="#contact" onClick={scrollToSection} className="text-slate-600 hover:text-blue-600 transition font-medium">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
