import React from 'react';
import img1 from "../assets/img1.jpg";
import img5 from "../assets/img5.jpg";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";

const products = [
  { id: 1, name: "Gold Necklace", image: img1 },
  { id: 2, name: "Diamond Ring", image: img7 },
  { id: 3, name: "Platinum Earrings", image: img8 },
  { id: 4, name: "Gold Bangles", image: img5 },
];

export default function Products() {
  return (
    <div className="pt-32 px-8 py-16 max-w-7xl mx-auto">
      <h2 className="text-5xl font-extrabold mb-8 text-yellow-700 tracking-wide uppercase font-serif text-center">
        Our Collections
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map(product => (
          <div
            key={product.id}
            className="shadow-lg rounded overflow-hidden hover:scale-105 transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover bg-white"
            />
            <div className="p-4 text-center font-semibold">{product.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
