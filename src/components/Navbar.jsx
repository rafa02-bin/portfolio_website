import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); // Close menu on navigation
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-white to-pastel-blue text-slate-900 px-4 py-4 border-b border-slate-200 neon-glow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-900">Jafar Mohamad</h2>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-blue-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li><a href="#home" onClick={scrollToSection} className="text-slate-600 hover:text-blue-600 transition font-medium">Home</a></li>
          <li><a href="#projects" onClick={scrollToSection} className="text-slate-600 hover:text-blue-600 transition font-medium">Projects</a></li>
          <li><a href="#skills" onClick={scrollToSection} className="text-slate-600 hover:text-blue-600 transition font-medium">Skills</a></li>
          <li><a href="#contact" onClick={scrollToSection} className="text-slate-600 hover:text-blue-600 transition font-medium">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center gap-4 mt-4">
          <li><a href="#home" onClick={scrollToSection} className="text-slate-600 hover:text-blue-600 transition font-medium">Home</a></li>
          <li><a href="#projects" onClick={scrollToSection} className="text-slate-600 hover:text-blue-600 transition font-medium">Projects</a></li>
          <li><a href="#skills" onClick={scrollToSection} className="text-slate-600 hover:text-blue-600 transition font-medium">Skills</a></li>
          <li><a href="#contact" onClick={scrollToSection} className="text-slate-600 hover:text-blue-600 transition font-medium">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
