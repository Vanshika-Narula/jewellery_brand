import React from 'react';
import img1 from "../assets/img1.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow pt-32 px-8 py-16 max-w-5xl mx-auto text-center">
        <div className="h-8"></div>
        <h2 className="text-5xl font-extrabold mb-8 text-yellow-700 tracking-wide uppercase font-serif">
          About Mudrika Jewellers
        </h2>

        <p className="text-2xl mb-4">
          <span className="font-bold">Mudrika Jewellers</span> is a premium jewellery store specializing in gold, diamond, and platinum collections. 
          We craft exquisite designs to make every moment unforgettable.
        </p>
        <p className="text-2xl mb-10">
          Our mission is to bring elegance and craftsmanship to your life with every piece.
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <img
            src={img5}
            alt="Gold Jewellery"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-full h-80 object-cover"
          />
          <img
            src={img4}
            alt="Diamond Jewellery"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-full h-80 object-cover"
          />
          <img
            src={img1}
            alt="Platinum Jewellery"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-full h-80 object-cover"
          />
        </div>
      </main>
    </div>
  );
}
