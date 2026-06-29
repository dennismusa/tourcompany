import React from "react";
import { Link } from "react-router-dom";

import image12 from "../assets/image12.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import aberdare from "../assets/abadare.jpg";

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-[80vh] max-h-[850px] flex items-center overflow-hidden">
      <img
        src={aberdare}
        alt="Aberdare National Park"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="relative bottom-0 left-6 md:left-20 max-w-2xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          Aberdare National Park
        </h1>
        <p className="mt-4 text-white/80 text-lg">
          Misty forests, waterfalls, and rare wildlife in Kenya’s central highlands.
        </p>
      </div>
    </section>
  );
}

/* ---------------- OVERVIEW ---------------- */
function Overview() {
  return (
    <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Overview</h2>

      <p className="text-gray-600 leading-8 text-lg">
        Aberdare National Park is a highland ecosystem known for dense forests,
        waterfalls, and alpine moorlands. It offers a cooler safari experience
        and is home to elephants, leopards, and the rare bongo antelope.
      </p>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const images = [image12, image3, image4];

  return (
    <section className="px-6 md:px-16 max-w-7xl mx-auto pb-20">
      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Aberdare view ${i + 1}`}
            className="rounded-3xl h-72 w-full object-cover shadow-lg"
          />
        ))}
      </div>
    </section>
  );
}

/* ---------------- HIGHLIGHTS ---------------- */
function Highlights() {
  const items = [
    "Scenic waterfalls like Karuru and Chania Falls",
    "Dense montane forests and bamboo zones",
    "Rare wildlife including bongo antelope",
    "Cool misty highland climate",
    "Rich birdlife and photography spots",
    "Luxury lodges overlooking waterholes",
  ];

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Key Highlights</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition"
            >
              <span className="text-green-700 font-bold">✔</span> {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WILDLIFE & ACTIVITIES ---------------- */
function WildlifeActivities() {
  const wildlife = ["Elephants", "Leopards", "Buffalos", "Black Rhinos", "Bongo Antelope"];
  const activities = [
    "Game drives through forest tracks",
    "Waterfall sightseeing tours",
    "Bird watching expeditions",
    "Nature photography",
    "Luxury lodge stays",
  ];

  return (
    <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Wildlife */}
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={image5}
            alt="Wildlife"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative p-10 text-white">
            <h3 className="text-2xl font-bold mb-6">Wildlife</h3>
            <ul className="space-y-3">
              {wildlife.map((item, i) => (
                <li key={i}>🐾 {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Activities */}
        <div className="bg-green-900 text-white p-10 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-bold mb-6">Activities</h3>
          <ul className="space-y-4 text-white/90">
            {activities.map((item, i) => (
              <li key={i}>🌿 {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="py-24 bg-black text-white text-center px-6">
      <h2 className="text-4xl font-bold">Experience Aberdare National Park</h2>

      <p className="mt-4 text-white/70 max-w-2xl mx-auto">
        Discover misty forests, waterfalls, and rare wildlife in one of Kenya’s most unique safari destinations.
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
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-yellow-500 mb-2">
            Renlen Tours and Safaris
          </h2>

          <p className="text-gray-400 text-sm mb-4">
            Website designed & developed by Dennis Musa
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

        <div>
          <h3 className="text-xl font-bold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/vehicles">Fleet</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5">Services</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Safari Vehicle Hire</li>
            <li>Airport Transfers</li>
            <li>Group Tours</li>
            <li>Private Safari Trips</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5">Contact</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Kajiado, Kenya</li>
            <li>+254 717 554177</li>
            <li>renlentours@gmail.com</li>
          </ul>

          <a
            href="https://wa.me/254717554177"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 bg-green-500 text-black px-6 py-3 rounded-lg font-bold"
          >
            WhatsApp Booking
          </a>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
        © 2026 Renlen Tours and Safaris. All Rights Reserved.
      </div>
    </footer>
  );
}

/* ---------------- MAIN PAGE ---------------- */
export default function Aberdare() {
  return (
    <div className="bg-white text-gray-800">
      <Hero />
      <Overview />
      <Gallery />
      <Highlights />
      <WildlifeActivities />
      <CTA />
      <Footer />
    </div>
    
  );
}