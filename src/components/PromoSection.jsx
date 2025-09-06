import React from "react";

const PromoSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Text Section */}
        <div className="flex-1 text-white text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            DAZZLE with TIMELESS ELEGANCE
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Embrace the charm of exquisite craftsmanship <br />
            that defines sophistication & luxury.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="your-image.jpg"
            alt="Jewellery Collection"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
