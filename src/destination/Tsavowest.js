import React from "react";
import { Link } from "react-router-dom";

import west from "../assets/west.jpg";

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[65vh] overflow-hidden">

      {/* IMAGE */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={west}
          alt="Tsavo West National Park"
          className="w-full h-full object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* TITLE */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-7xl mx-auto px-6 pb-10 text-white">
          <h1 className="text-4xl md:text-6xl font-black">
            Tsavo West
          </h1>
        </div>
      </div>

    </section>
  );
}

/* ---------------- OVERVIEW ---------------- */
function Overview() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <img
          src={west}
          alt="Tsavo West"
          className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
        />

        <div>
          <h2 className="text-4xl font-bold text-red-900 mb-6">
            Overview of Tsavo West
          </h2>

          <p className="text-gray-600 leading-8 mb-6 text-lg">
            Tsavo West National Park is known for its rugged landscapes,
            volcanic hills, natural springs, and diverse wildlife.
          </p>

          <p className="text-gray-600 leading-8">
            The park offers dramatic scenery including lava flows, Mzima Springs,
            and rich habitats for elephants, lions, giraffes, and more.
          </p>
        </div>

      </div>
    </section>
  );
}

/* ---------------- HIGHLIGHTS ---------------- */
function Highlights() {
  const items = [
    "Mzima Springs",
    "Sheldrick Falls",
    "Shetani Lava Flow",
    "Roaring Rocks",
    "Elephants & Lions",
    "Scenic landscapes",
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
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <p className="text-gray-700 font-medium">🌍 {item}</p>
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
        Discover Tsavo West
      </h2>

      <p className="mt-4 text-white/70 max-w-2xl mx-auto">
        Explore volcanic landscapes, natural springs, and rich wildlife.
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

/* ---------------- MAIN PAGE ---------------- */
export default function TsavoWest() {
  return (
    <div>
      <Hero />
      <Overview />
      <Highlights />
      <CTA />
      <Footer />
    </div>
  );
}