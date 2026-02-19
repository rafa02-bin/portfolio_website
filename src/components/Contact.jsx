import { useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiPhone, FiCopy } from 'react-icons/fi';

export default function Contact() {
  const [notification, setNotification] = useState('');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setNotification('Phone number copied to clipboard!');
      setTimeout(() => setNotification(''), 3000);
    });
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      text: 'joe.mohamad.02@gmail.com',
      action: 'mailto:joe.mohamad.02@gmail.com',
    },
    {
      icon: <FiLinkedin />,
      text: 'LinkedIn',
      action: 'https://www.linkedin.com/in/jafar-mohamad-7922a53a4/',
    },
    {
      icon: <FiGithub />,
      text: 'GitHub',
      action: 'https://github.com/rafa02-bin',
    },
    {
      icon: <FiPhone />,
      text: '+91 9900312491',
      action: () => copyToClipboard('+91 9900312491'),
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-white to-pastel-blue">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="section-title mb-4">Contact Me</h2>
        <p className="text-slate-600 mb-12 text-lg">Feel free to reach out. I'm always happy to connect!</p>

        <div className="space-y-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              {typeof item.action === 'string' ? (
                <a 
                  href={item.action} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 p-4 rounded-lg bg-white border border-pastel-purple hover:bg-pastel-blue transition-colors duration-300 w-full max-w-md"
                >
                  <span className="text-blue-600 text-2xl">{item.icon}</span>
                  <span className="text-slate-800 font-medium">{item.text}</span>
                </a>
              ) : (
                <button 
                  onClick={item.action} 
                  className="flex items-center gap-4 p-4 rounded-lg bg-white border border-pastel-purple hover:bg-pastel-blue transition-colors duration-300 w-full max-w-md"
                >
                  <span className="text-blue-600 text-2xl">{item.icon}</span>
                  <span className="text-slate-800 font-medium">{item.text}</span>
                  <span className="text-slate-500 ml-auto"><FiCopy /></span>
                </button>
              )}
            </div>
          ))}
        </div>

        {notification && (
          <div className="fixed bottom-4 right-4 bg-gradient-to-r from-pastel-pink to-pastel-purple text-slate-900 px-6 py-3 rounded font-semibold neon-glow">
            {notification}
          </div>
        )}
      </div>
    </section>
  );
}
