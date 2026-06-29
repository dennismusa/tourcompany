import React from "react";
import { Link } from "react-router-dom";

import image1 from "../assets/image1.jpg";
import image12 from "../assets/image12.jpg";
import image3 from "../assets/image3.jpg";
import nairobi from "../assets/nairobi.jpg";

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-[80vh] max-h-[850px] overflow-hidden">
      
      <img
        src={nairobi}
        alt="Nairobi National Park"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-10 left-6 md:left-16 max-w-3xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          Nairobi National Park
        </h1>

        <p className="mt-4 text-white/80 text-lg">
          Wildlife safari next to a capital city.
        </p>
      </div>

    </section>
  );
}

/* ---------------- OVERVIEW ---------------- */
function Overview() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="relative">
          <img
            src={nairobi}
            alt="Nairobi National Park Overview"
            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
          />

          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-green-500/20 rounded-3xl blur-2xl"></div>
          <div className="absolute -top-6 -left-6 w-40 h-40 bg-yellow-400/20 rounded-3xl blur-2xl"></div>
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Overview of Nairobi National Park
          </h2>

          <p className="text-gray-600 leading-8 mb-6 text-lg">
            Nairobi National Park is one of the only national parks in the world located next to a capital city.
            It offers a rare combination of urban skyline views and free-roaming wildlife.
          </p>

          <p className="text-gray-600 leading-8 mb-10">
            Despite its proximity to the city, the park is home to lions, rhinos, giraffes,
            zebras, and over 400 bird species, making it a unique safari experience.
          </p>

          {/* INFO CARDS */}
          <div className="grid grid-cols-2 gap-4">

            <div className="p-5 rounded-2xl bg-green-50 border border-green-100 shadow-sm">
              <p className="text-green-800 font-bold text-sm">Established</p>
              <p className="font-semibold text-gray-700">1946</p>
            </div>

            <div className="p-5 rounded-2xl bg-yellow-50 border border-yellow-100 shadow-sm">
              <p className="text-yellow-800 font-bold text-sm">Location</p>
              <p className="font-semibold text-gray-700">Nairobi, Kenya</p>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 shadow-sm">
              <p className="text-blue-800 font-bold text-sm">Wildlife</p>
              <p className="font-semibold text-gray-700">100+ Species</p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm">
              <p className="text-emerald-800 font-bold text-sm">Unique Feature</p>
              <p className="font-semibold text-gray-700">City Safari</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- DESCRIPTION ---------------- */
function Description() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-12">
      <h2 className="text-3xl font-bold mb-4 text-green-900">
        Urban Safari Experience
      </h2>

      <p className="text-gray-600 leading-8">
        Nairobi National Park offers a rare safari experience where wildlife roams freely
        against the backdrop of a modern city skyline. It is ideal for short game drives,
        photography, and first-time safari visitors.
      </p>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const images = [image1, image12, image3];

  return (
    <section className="grid md:grid-cols-3 gap-4 px-6 md:px-10 max-w-7xl mx-auto pb-20">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Nairobi Park ${i + 1}`}
          className="rounded-2xl h-64 w-full object-cover shadow-md hover:shadow-xl transition"
        />
      ))}
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="py-24 bg-black text-white text-center px-6">
      <h2 className="text-4xl font-bold">
        Experience Nairobi National Park
      </h2>

      <p className="mt-4 text-white/70 max-w-2xl mx-auto">
        Enjoy a safari just minutes from the city center with lions, rhinos, and breathtaking views.
      </p>

      <Link
        to="/contact"
        className="inline-block mt-8 bg-green-500 text-black px-8 py-4 rounded-full font-bold hover:bg-green-400 transition"
      >
        Plan Your Safari
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
export default function NairobiPark() {
  return (
    <div>
      <Hero />
      <Overview />
      <Description />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
}