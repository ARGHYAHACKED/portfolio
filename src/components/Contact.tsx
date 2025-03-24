import React, { useState } from "react";
import axios from "axios";
import { GitHub, LinkedIn, Mail, Close } from "@mui/icons-material";

export const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://portfolio-eaw0.onrender.com/api/contacts", formData);
      setSuccess(true);
      setTimeout(() => {
        setShowForm(false);
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error sending message:", error);
    }
    setLoading(false);
  };

  return (
    <section className="py-16 text-center relative">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="text-gray-400 mt-2">
        If you're interested in working together, feel free to reach out!
      </p>
      
      {/* Social Media Links */}
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://github.com/ARGHYAHACKED/N4si" target="_blank" rel="noopener noreferrer">
          <GitHub fontSize="large" className="hover:text-purple-500 cursor-pointer transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/arghya-samanta-4432b1256/" target="_blank" rel="noopener noreferrer">
          <LinkedIn fontSize="large" className="hover:text-blue-500 cursor-pointer transition-colors" />
        </a>
        <a href="mailto:samantaarghya204@gmail.com">
  <Mail fontSize="large" className="hover:text-red-500 cursor-pointer transition-colors" />
</a>

      </div>

      <button
        onClick={() => setShowForm(true)}
        className="mt-6 bg-purple-500 px-6 py-3 text-white rounded-lg shadow-md hover:bg-purple-600"
      >
        Contact Now
      </button>

      {/* Floating Contact Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
          <div className="bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] p-8 rounded-xl max-w-md w-full relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <Close />
            </button>

            <h3 className="text-xl font-bold mb-4 text-gray-800">Get in Touch</h3>

            {success ? (
              <p className="text-green-600 font-semibold">Message sent successfully!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#e0e0e0] border-none shadow-inner text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#e0e0e0] border-none shadow-inner text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#e0e0e0] border-none shadow-inner text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  rows={4}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 text-white bg-purple-500 rounded-lg shadow-md hover:bg-purple-600 transition-all"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
