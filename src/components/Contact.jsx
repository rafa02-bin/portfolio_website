import { useState } from 'react';

export default function Contact() {
  const [notification, setNotification] = useState('');

  const contactInfo = [
    { title: 'Email', label: 'Email', value: 'joe.mohamad.02@gmail.com', href: 'mailto:joe.mohamad.02@gmail.com' },
    { title: 'GitHub', label: 'GitHub', value: 'github.com/rafa02-bin', href: 'https://github.com/rafa02-bin' },
    { title: 'Discord', label: 'Discord', value: 'rafa02_bin', href: null },
    { title: 'LinkedIn', label: 'LinkedIn', value: 'https://www.linkedin.com/in/jafar-mohamad-7922a53a4/', href: 'https://linkedin.com' },
    { title: 'Phone', label: 'Phone', value: '+91 9900312491', href: 'tel:+1234567890' },
    { title: 'Location', label: 'Location', value: 'Bangalore, India', href: null }
  ];

  const copyEmail = () => {
    const email = 'joe.mohamad.02@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setNotification(`✓ Email copied: ${email}`);
      setTimeout(() => setNotification(''), 3000);
    });
  };

  return (
    <section id="contact" className="relative py-20 px-4 bg-gradient-to-br from-pastel-yellow to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-4">Get In Touch</h2>
        <p className="text-center text-slate-600 mb-12 text-lg">Let's connect and discuss exciting opportunities</p>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white rounded-lg border-2 border-pastel-pink p-6 hover:border-blue-300 transition neon-glow">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              {item.href ? (
                <>
                  {item.href.startsWith('tel:') ? (
                    <a href={item.href} className="text-blue-600 hover:text-blue-800 transition">
                      {item.value}
                    </a>
                  ) : item.href.startsWith('mailto:') ? (
                    <a href={item.href} className="text-blue-600 hover:text-blue-800 transition">
                      {item.value}
                    </a>
                  ) : (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
                      {item.value}
                    </a>
                  )}
                </>
              ) : (
                <p className="text-slate-700">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA Contact */}
        <div className="text-center">
          <p className="text-2xl text-slate-900 mb-6 font-bold">Ready to collaborate? Let's build something great together.</p>
          <button 
            onClick={copyEmail}
            className="btn-neon text-lg"
          >
            COPY EMAIL
          </button>
        </div>

        {notification && (
          <div className="fixed bottom-4 right-4 bg-gradient-to-r from-pastel-pink to-pastel-purple text-slate-900 px-6 py-3 rounded font-semibold neon-glow">
            {notification}
          </div>
        )}
      </div>

      {/* Wave Divider - Transitions to Footer (Slate 900) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] text-slate-900 fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
