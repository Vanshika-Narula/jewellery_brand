import React from 'react';
import img1 from "../assets/img1.webp";
import img7 from "../assets/img7.webp";
import img8 from "../assets/img8.webp";

const products = [
  { id: 1, name: "Gold Necklace", image: img1 },
  { id: 2, name: "Diamond Ring", image: img7 },
  { id: 3, name: "Platinum Earrings", image: img8 },
];

export default function Products() {
  return (
    <div className="py-16 px-4 w-full max-w-6xl mx-auto">
      {/* Heading kept outside grid */}
      <h2 className="text-3xl font-bold mb-10 text-center">
        Our Collections
      </h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(product => (
          <div
            key={product.id}
            className="shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 w-full"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center font-semibold">
              {product.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
