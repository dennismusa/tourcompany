import React from "react";
import { Link } from "react-router-dom";
import meru from "../assets/meru.jpg";

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-[80vh] max-h-[850px] overflow-hidden">
      
      <img
        src={meru}
        alt="Meru National Park"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* TEXT AT BOTTOM LEFT */}
      <div className="absolute bottom-10 left-6 md:left-16 max-w-3xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          Meru National Park
        </h1>

        <p className="mt-4 text-white/80 text-lg">
          A wild, lush paradise of rivers, swamps, and untouched safari beauty.
        </p>
      </div>

    </section>
  );
}
/* ---------------- OVERVIEW (UPDATED) ---------------- */
function Overview() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="relative">
          <img
            src={meru}
            alt="Meru Overview"
            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
          />

          {/* Decorative glow */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-green-500/20 rounded-3xl blur-2xl"></div>
          <div className="absolute -top-6 -left-6 w-40 h-40 bg-yellow-400/20 rounded-3xl blur-2xl"></div>
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Overview of Meru National Park
          </h2>

          <p className="text-gray-600 leading-8 mb-6 text-lg">
            Meru National Park is one of Kenya’s most pristine wilderness areas,
            covering over 870 km² of diverse landscapes including rivers, swamps,
            savannah, and dense vegetation. It offers a rare untouched safari experience.
          </p>

          <p className="text-gray-600 leading-8 mb-10">
            The park is famous for its connection to the Born Free story of Elsa the Lioness,
            making it both a wildlife and historical conservation landmark.
          </p>

          {/* INFO CARDS */}
          <div className="grid grid-cols-2 gap-4">

            <div className="p-5 rounded-2xl bg-green-50 border border-green-100 shadow-sm">
              <p className="text-green-800 font-bold text-sm">Size</p>
              <p className="font-semibold text-gray-700">870+ km²</p>
            </div>

            <div className="p-5 rounded-2xl bg-yellow-50 border border-yellow-100 shadow-sm">
              <p className="text-yellow-800 font-bold text-sm">Location</p>
              <p className="font-semibold text-gray-700">Eastern Kenya</p>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 shadow-sm">
              <p className="text-blue-800 font-bold text-sm">Climate</p>
              <p className="font-semibold text-gray-700">Green & Warm</p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm">
              <p className="text-emerald-800 font-bold text-sm">Highlight</p>
              <p className="font-semibold text-gray-700">Born Free Legacy</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- STORY ---------------- */
function Story() {
  return (
    <section className="py-16 bg-gray-50 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-3xl font-bold mb-6 text-green-900">
            The Born Free Legacy
          </h2>

          <p className="text-gray-600 leading-8">
            Meru is globally known for Elsa the Lioness, raised by George and Joy Adamson.
            The story inspired *Born Free*, and Elsa’s grave remains inside the park,
            making it a major conservation landmark in Africa.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border">
          <h3 className="text-2xl font-bold mb-4">Why Visit Meru</h3>

          <ul className="space-y-3 text-gray-700">
            <li>🌿 Lush green landscapes & swamps</li>
            <li>🦁 Big Five wildlife experience</li>
            <li>🐘 Low tourist density (private safari)</li>
            <li>📚 Born Free heritage site</li>
            <li>🏞️ Scenic rivers and hills</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

/* ---------------- ATTRACTIONS ---------------- */
function Attractions() {
  const items = [
    {
      title: "Adamson’s Falls",
      desc: "A scenic waterfall and one of the park’s most beautiful viewpoints.",
    },
    {
      title: "Elsa’s Grave",
      desc: "Historic resting place of Elsa the Lioness.",
    },
    {
      title: "Tana River",
      desc: "Supports hippos, crocodiles, and rich birdlife.",
    },
    {
      title: "Nyambeni Hills Views",
      desc: "Perfect photography and sunset viewpoints.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-green-900">
        Top Attractions in Meru
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white border rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- WILDLIFE & ACTIVITIES ---------------- */
function WildlifeActivities() {
  const wildlife = [
    "Elephants",
    "Lions",
    "Leopards",
    "Cheetahs",
    "Rhinos (black & white)",
    "Grevy’s Zebra",
    "Hippos",
    "Buffalo",
  ];

  const activities = [
    "Game drives",
    "Bush walks",
    "Fishing at Tana River",
    "Bush dining experiences",
    "Sundowners",
  ];

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="bg-green-900 text-white p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-6">Wildlife in Meru</h3>
          <ul className="space-y-3">
            {wildlife.map((item, i) => (
              <li key={i}>🦁 {item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-yellow-50 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-6">Activities</h3>
          <ul className="space-y-3 text-gray-700">
            {activities.map((item, i) => (
              <li key={i}>🌍 {item}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

/* ---------------- LOCATION ---------------- */
function Location() {
  return (
    <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-green-900">
        Location & Accessibility
      </h2>

      <p className="text-gray-600 leading-8">
        Meru National Park is located about 350 km from Nairobi and is accessible via Maua road or nearby airstrips.
        The park is open year-round, with the best visiting seasons from June to October and December to March.
      </p>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="py-24 bg-black text-white text-center px-6">
      <h2 className="text-4xl font-bold">Discover Untamed Meru</h2>

      <p className="mt-4 text-white/70 max-w-2xl mx-auto">
        Experience rivers, wildlife, and the legendary Born Free story.
      </p>

      <Link
        to="/contact"
        className="inline-block mt-8 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
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
export default function Meru() {
  return (
    <div className="bg-white">
      <Hero />
      <Overview />
      <Story />
      <Attractions />
      <WildlifeActivities />
      <Location />
      <CTA />
      <Footer />
    </div>
  );
}