import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Copyright */}
        <p className="text-gray-400 text-sm mb-6">
          &copy; {new Date().getFullYear()} Mudrika Jewellers. All rights reserved.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Follow Us */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold tracking-wide text-gray-200">
            Follow us on
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/mudrikajewellers_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 text-3xl transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
