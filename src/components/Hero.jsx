import React from 'react';
import img9 from "../assets/img9.webp";

export default function Hero() {
  return (
    <div className="relative h-[100vh] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img9})` }}
      />

      {/* Semi-transparent Overlay to dim the image */}
      <div className="absolute inset-0 bg-black bg-opacity-20" />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-white text-center h-full px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-wide leading-tight">
  Where perfection meets luxury.
</h1>
<p className="mb-8 text-xl md:text-2xl text-white font-light max-w-2xl">
  Premium, elegant jewellery crafted with care and timeless design for every occasion.
</p>
<button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-10 py-4 text-xl md:text-2xl rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
  Shop Now
</button>

      </div>
    </div>
  );
}
