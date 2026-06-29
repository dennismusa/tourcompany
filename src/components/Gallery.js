import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// SLIDER IMAGES
import image21 from "../assets/image21.jpg";
import image22 from "../assets/image22.jpg";
//import image3 from "../assets/image3.jpg";
//import image4 from "../assets/image4.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";
import image13 from "../assets/image13.jpg";
import image9 from "../assets/image9.jpg";
import image7 from "../assets/image7.jpg";


function Gallery() {
  // HERO SLIDER
  const slides = [image21, image22];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // EXPERIENCES DATA
 const experiences = [
  {
    image: image7,
    title: "Sunrise Wildlife Game Drive",
    description:
      "Start the day with an early morning safari where predators return from night hunts and herbivores gather in open plains. The golden sunrise creates perfect lighting for wildlife photography.",
    details:
      "This experience focuses on early movement in the savannah. Guests travel in guided safari jeeps while exploring areas where lions, elephants, and giraffes are most active in the morning hours.",
    highlights: ["Early Morning Safari", "Big Five Sightings", "Photography Moments"],
  },
  {
    image: image7,
    title: "Elephant & Kilimanjaro Experience",
    description:
      "Get close to large elephant herds roaming freely in Amboseli National Park with the breathtaking backdrop of Mount Kilimanjaro.",
    details:
      "Visitors enjoy slow-paced viewing stops as elephants cross paths, bathe, and interact naturally. Guides explain herd behavior and migration patterns unique to the region.",
    highlights: ["Elephant Herds", "Kilimanjaro Views", "Scenic Stops"],
  },
  {
    image: image7,
    title: "Golden Hour Safari Drive",
    description:
      "Experience the savannah during sunset when the landscape transforms into warm golden colors and wildlife becomes active again after the heat of the day.",
    details:
      "This drive focuses on cinematic safari moments — silhouettes of giraffes, sunsets over acacia trees, and predator movement as evening approaches.",
    highlights: ["Sunset Safari", "Golden Hour Light", "Wildlife Silhouettes"],
  },
];

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">

      {/* HERO SLIDER */}
      <section className="relative min-h-[80vh] max-h-[850px] flex items-center overflow-hidden">

        {slides.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Safari slide ${index + 1}`}
              className="w-full h-full object-cover scale-105"
            />
          </div>
        ))}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* HERO TEXT */}
        <div className="relative z-10 px-6 text-white max-w-4xl">

          <p className="uppercase tracking-[6px] text-yellow-400 mb-4 text-sm sm:text-base">
            Safari Experiences
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Explore Kenya’s Wildlife in Motion
          </h1>

          <p className="text-gray-300 text-sm sm:text-lg leading-7 sm:leading-8">
            Real safari journeys captured across Kenya — Amboseli, Tsavo, and beyond.
          </p>

        </div>
      </section>


      {/* SAFARI MOMENTS GALLERY */}
<section className="py-24 bg-[#F8F8F6] overflow-hidden">

<div className="max-w-7xl mx-auto px-6 md:px-10">

{/* Header */}
<div className="text-center mb-16">

<span className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">

Safari Moments

</span>

<h2 className="text-4xl md:text-5xl font-bold mt-4">

Capture The Beauty Of
<span className="text-[#D4AF37]">
 Africa
</span>

</h2>

<p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">

Every safari tells a story. Witness breathtaking landscapes,
wildlife encounters and unforgettable moments.

</p>

</div>


{/* Gallery Layout */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

{/* Left Large */}
<div className="md:col-span-2 md:row-span-2 rounded-[35px] overflow-hidden group relative">

<img
src={image9}
alt=""
className="w-full h-full object-cover min-h-[620px] group-hover:scale-110 transition duration-[1500ms]"
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>

<div className="absolute bottom-8 left-8 text-white">

<h3 className="text-3xl font-bold mb-2">
Wild Adventures
</h3>

<p className="text-gray-300">
Experience Africa's beauty
</p>

</div>

</div>

{/* Right Images */}

{[
image10,
image11,
image12,
image13
].map((img,index)=>(

<div
key={index}
className="rounded-[30px] overflow-hidden relative group"
>

<img
src={img}
alt=""
className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-[1200ms]"
/>

<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>

<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition">

<div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm">

Explore

</div>

</div>

</div>

))}

</div>

</div>
</section>

      {/* EXPERIENCE GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">

  {/* HEADER */}
  <div className="text-center mb-14 sm:mb-16">
    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
      Safari Experience Highlights
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-lg leading-7 sm:leading-8">
      Every safari journey is a guided wildlife adventure across Kenya’s national parks. Our visitors experience close animal encounters, scenic landscapes, and authentic African safari moments from sunrise to sunset.
    </p>
  </div>

  {/* GRID */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">

    {experiences.map((item, index) => (
      <div
        key={index}
        className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
      >

        {/* IMAGE */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
        </div>

        {/* CONTENT */}
        <div className="p-5 sm:p-6">

          {/* TITLE */}
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">
            {item.title}
          </h3>

          {/* SHORT DESCRIPTION */}
          <p className="text-gray-600 text-sm sm:text-base leading-7 mb-3">
            {item.description}
          </p>

          {/* EXTRA EXPERIENCE DETAIL (NEW) */}
          <p className="text-gray-500 text-sm leading-6 mb-4">
            During this experience, guests are guided by professional safari drivers through
            open savannahs where they may encounter elephants, lions, giraffes, zebras,
            and other wildlife in their natural habitat. Every trip includes photography stops,
            storytelling from guides, and scenic viewpoints across Amboseli and surrounding parks.
          </p>

          {/* HIGHLIGHTS */}
          <div className="flex flex-wrap gap-2 mb-2">
            {item.highlights.map((h, i) => (
              <span
                key={i}
                className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold"
              >
                {h}
              </span>
            ))}
          </div>

          {/* EXPERIENCE NOTE (NEW SMALL INFO LINE) */}
          <p className="text-xs text-gray-400 mt-2">
            ✔ Includes guided game drive • ✔ Photography stops • ✔ Wildlife tracking
          </p>

        </div>

      </div>
    ))}
  </div>
</section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28 px-6 text-center text-white overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.18),transparent_70%)]" />

        <div className="relative max-w-3xl mx-auto">

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-5">
            Want to Experience This in Real Life?
          </h2>

          <p className="text-gray-300 text-sm sm:text-lg mb-10 leading-7 sm:leading-8">
            Book your safari with us and enjoy real wildlife encounters, guided tours, and unforgettable African adventures.
          </p>

          <a
            href="https://wa.me/254724605140"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 sm:px-10 py-4 rounded-xl shadow-lg transition"
          >
            Book Safari Experience
          </a>

        </div>
      </section>

      {/* FOOTER */}
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

    </div>
  );
}

export default Gallery;