import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (For demo purposes, no backend connected)");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page content */}
          <main className="flex-grow pt-32 px-8 py-16 max-w-2xl mx-auto">
              <div className='h-8'></div>
        <h2 className="text-5xl font-extrabold mb-10 text-center text-yellow-700 tracking-wide">
          CONTACT US 
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 text-lg border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 text-lg border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 text-lg border rounded-lg h-40 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          
          <button
            type="submit"
            className="bg-yellow-500 text-xl font-semibold px-6 py-4 rounded-lg hover:bg-yellow-600 transition w-full shadow-md"
          >
            Send Message
          </button>
        </form>
      </main>

      
    </div>
  );
}
