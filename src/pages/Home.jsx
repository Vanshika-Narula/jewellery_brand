import React from 'react';
import Hero from '../components/Hero';
import ProductsPreview from '../components/ProductsPreview';
import imgg from "../assets/imgg.webp";

export default function Home() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <div className="min-h-screen">
        <Hero />
      </div>

      {/* Products Preview Section */}
      <div className="min-h-[90vh] py-24 bg-gray-50">
        <ProductsPreview />
      </div>

      {/* <div className="min-h-[70vh] py-24 bg-gray-50">
        <PromoSection />
      </div> */}

      <div className="min-h-[70vh] py-24 bg-gray-50">
        <img src={imgg} alt="Jewellery Promo" className="w-full h-100 object-cover rounded-lg shadow-lg" />
        </div>
      {/* Contact Info Section */}
      <div className="min-h-[80vh] bg-gray-100 py-32 px-8 mt-12">
        <h2 className="text-6xl font-bold text-center text-yellow-700 mb-12 font-serif">
          Visit Our Store
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-6 text-xl">
            <p>
              <span className="font-semibold">📍 Address:</span>  
              LGF 1-A, PARSVNATH PALAZA, Court Rd, Saharanpur, Uttar Pradesh 247001
            </p>
            <p>
              <span className="font-semibold">📞 Phone:</span> +91 99270 17070
            </p>
            <p>
              <span className="font-semibold">✉️ Email:</span> mudrika.jewellers1899@gmail.com
            </p>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Mudrika Jewellers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.61525112611!2d76.7926!3d30.3782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eeabc4dd6894b%3A0x6ccfa27493cc7b33!2sMudrika%20Jewellers!5e0!3m2!1sen!2sin!4v1693829912345!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
