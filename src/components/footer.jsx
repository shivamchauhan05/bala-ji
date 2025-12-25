import React from 'react'
import './footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 footer m-top-10%">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p>
            We provide high-quality services to help your business grow and succeed online.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2"><a href="/" className="hover:text-white">Home</a></li>
            <li className="mb-2"><a href="/about" className="hover:text-white">About</a></li>
            <li className="mb-2"><a href="/services" className="hover:text-white">Services</a></li>
            <li className="mb-2"><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
