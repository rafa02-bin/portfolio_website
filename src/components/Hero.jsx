export default function Hero() {
  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pastel-blue via-white to-pastel-purple py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-lg overflow-hidden border-4 border-pastel-purple neon-glow\">
              <img src="/portrait.jpeg" alt="Jafar Mohamad" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">Jafar Mohamad</h1>
            <p className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Full-Stack Developer & Software Engineer</p>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              I build modern, scalable web applications with clean code and innovative solutions. Passionate about solving complex problems and creating exceptional user experiences.
            </p>
            <a href="/Jafar Mohamad.pdf" download="Jafar-Mohamad-CV.pdf" className="btn-neon">
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>

      {/* Wave Divider - Transitions to Projects (Pastel Pink) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] text-pastel-pink fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </header>
  );
}
