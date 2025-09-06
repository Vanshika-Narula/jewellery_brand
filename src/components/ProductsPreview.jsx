import React from "react";

// Import images from assets (replace with your real ones)
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img4 from "../assets/img4.webp";

export default function ProductsPreview() {
  const featuredProducts = [
    { id: 1, name: "Gold Necklace", image: img1 },
    { id: 2, name: "Diamond Ring", image: img2 },
    { id: 3, name: "Platinum Earrings", image: img4 },
  ];

  return (
    <section className="p-8 text-center">
      <h2 className="text-6xl font-extrabold mb-8 text-yellow-700 font-serif tracking-wide">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg overflow-hidden hover:scale-105 transition bg-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-contain bg-gray-50"
            />
            <div className="p-4 text-center font-semibold text-lg">
              {product.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
