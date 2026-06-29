import React from "react";
import { Link } from "react-router-dom";

import west from "../assets/west.jpg";
import east from "../assets/east.jpg";

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[65vh] overflow-hidden">

      {/* IMAGE */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${east})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* TITLE */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-7xl mx-auto px-6 pb-10 text-white">
          <h1 className="text-4xl md:text-6xl font-black">
            Tsavo East National Park
          </h1>
        </div>
      </div>

      {/* FACTS BAR */}
      

    </section>
  );
}

/* ---------------- OVERVIEW ---------------- */
function Overview() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <img
          src={west}
          alt="Tsavo East"
          className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
        />

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold text-red-900 mb-6">
            Vast Wilderness of Tsavo East
          </h2>

          <p className="text-gray-600 leading-8 mb-6 text-lg">
            Tsavo East National Park is one of Kenya’s largest protected areas,
            known for its endless savannah plains and iconic red-dust elephants.
          </p>

          <p className="text-gray-600 leading-8">
            The park delivers an authentic safari experience with wide horizons,
            dramatic landscapes, and exceptional wildlife sightings.
          </p>
        </div>

      </div>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */
function Features() {
  const items = [
    "Red elephants of Tsavo",
    "Galana River ecosystem",
    "Mudanda Rock viewpoint",
    "Endless savannah plains",
    "Rich birdlife diversity",
    "Raw wilderness experience",
  ];

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Key Highlights
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >
              <p className="text-gray-700 font-medium">
                🌍 {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="py-24 bg-black text-white text-center px-6">

      <h2 className="text-4xl font-bold">
        Explore Tsavo East
      </h2>

      <p className="mt-4 text-white/70 max-w-2xl mx-auto">
        Discover Kenya’s largest wilderness ecosystem and unforgettable safari drives.
      </p>

      <Link
        to="/contact"
        className="inline-block mt-8 bg-red-500 text-white px-8 py-4 rounded-full font-bold hover:bg-red-400 transition"
      >
        Plan Safari
      </Link>

    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
<footer className="relative overflow-hidden bg-black text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
  
      {/* Brand */}
      <div>
        <h2 className="text-3xl font-bold text-yellow-500 mb-2">
          Renlen Tours and safaris
        </h2>
  
        <p className="text-xs text-gray-500 mb-1">
          Website designed & developed by Dennis Musa
        </p>
  
        <p className="text-gray-400 leading-8 mb-3">
          Professional safari vehicle hire services in kajiado ,kenya. Safe, comfortable, and unforgettable safari experiences.
        </p>
  
        <a
          href="https://dennismusa.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="text-yellow-500 hover:underline text-sm font-semibold"
        >
          View Developer Portfolio
        </a>
      </div>
  
      {/* Links */}
      <div>
        <h3 className="text-xl font-bold mb-5">Quick Links</h3>
  
        <ul className="space-y-4 text-gray-400">
          <li>
            <Link to="/" className="hover:text-yellow-500 transition">
              Home
            </Link>
          </li>
  
          <li>
            <Link to="/vehicles" className="hover:text-yellow-500 transition">
              Fleet
            </Link>
          </li>
  
          <li>
            <Link to="/gallery" className="hover:text-yellow-500 transition">
              Gallery
            </Link>
          </li>
  
          <li>
            <Link to="/contact" className="hover:text-yellow-500 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
  
      {/* Services */}
      <div>
        <h3 className="text-xl font-bold mb-5">Services</h3>
  
        <ul className="space-y-4 text-gray-400">
          <li>Safari Vehicle Hire</li>
          <li>Airport Transfers</li>
          <li>Group Tours</li>
          <li>Private Safari Trips</li>
        </ul>
      </div>
  
      {/* Contact */}
      <div>
        <h3 className="text-xl font-bold mb-5">Contact Info</h3>
  
        <ul className="space-y-4 text-gray-400">
          <li>📍 Kajiado, Kenya</li>
          <li>📞 +254 717 554177</li>
          <li>✉ renlentours@gmail.com</li>
        </ul>
  
        <a
          href="https://wa.me/+254 717 554177"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-lg transition"
        >
          WhatsApp Booking
        </a>
      </div>
    </div>
  
    {/* Bottom */}
    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
      © 2026 Renlen Tours and safaris . All Rights Reserved.
    </div>
  </footer>
  );
}

/* ---------------- PAGE ---------------- */
export default function TsavoEast() {
  return (
    <div>
      <Hero />
      <Overview />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}