import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 fixed w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Mudrika Jewellers" className="h-24 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><Link to="/" className="hover:text-yellow-600">Home</Link></li>
          <li><Link to="/products" className="hover:text-yellow-600">Products</Link></li>
          <li><Link to="/about" className="hover:text-yellow-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-600">Contact</Link></li>
        </ul>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center bg-white shadow-lg py-4">
          <li><Link to="/" className="hover:text-yellow-600">Home</Link></li>
          <li><Link to="/products" className="hover:text-yellow-600">Products</Link></li>
          <li><Link to="/about" className="hover:text-yellow-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-600">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
