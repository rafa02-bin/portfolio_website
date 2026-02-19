import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:jafar.mohamad@example.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom:%20${name}%0D%0AEmail:%20${email}`;
    window.location.href = mailtoLink;
    setNotification('Your message has been sent!');
    setTimeout(() => setNotification(''), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-white to-pastel-blue">
      <div className="max-w-2xl mx-auto">
        <h2 className="section-title text-center mb-4">Get In Touch</h2>
        <p className="text-center text-slate-600 mb-12 text-lg">I'm always open to discussing new projects and opportunities.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-slate-800 font-medium mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
              className="w-full px-4 py-2 border border-pastel-purple rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              placeholder="Your Name" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-slate-800 font-medium mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
              className="w-full px-4 py-2 border border-pastel-purple rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              placeholder="Your Email" 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-slate-800 font-medium mb-2">Message</label>
            <textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required 
              rows="5" 
              className="w-full px-4 py-2 border border-pastel-purple rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full btn-neon py-3"
          >
            Send Message
          </button>
        </form>

        {notification && (
          <div className="fixed bottom-4 right-4 bg-gradient-to-r from-pastel-pink to-pastel-purple text-slate-900 px-6 py-3 rounded font-semibold neon-glow">
            {notification}
          </div>
        )}
      </div>
    </section>
  );
}