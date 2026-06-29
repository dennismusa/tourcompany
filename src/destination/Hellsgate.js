import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image19 from "../assets/image19.jpg";
import image17 from "../assets/image17.jpg";
import image10 from "../assets/image10.jpg";
import image15 from "../assets/image15.jpg";
import hellsgate from "../assets/hellsgate.jpg";

function HellsGate() {

const images=[
hellsgate,
image1,
image2,
image10,
image15,
image17,
image19
];

const [index,setIndex]=useState(0);

useEffect(()=>{

const interval=setInterval(()=>{

setIndex((prev)=>(prev+1)%images.length);

},5000);

return ()=>clearInterval(interval);

},[images.length]);

return(

<div className="bg-[#F7FAF8]">

{/* HERO */}

<section className="relative h-[60vh] md:h-[65vh] overflow-hidden">

  {/* BACKGROUND SLIDER */}
  <div className="absolute inset-0 w-full h-full">
    {images.map((img, i) => (
      <div
        key={i}
        className="absolute inset-0 w-full h-full transition-all duration-[2200ms]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: i === index ? 1 : 0,
          transform: i === index ? "scale(1)" : "scale(1.06)",
        }}
      />
    ))}
  </div>

  {/* OVERLAYS (kept for styling only) */}
  <div className="absolute inset-0 bg-black/45" />
  <div className="absolute inset-0 bg-gradient-to-r from-[#07120E]/95 via-[#07120E]/65 to-transparent" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(16,185,129,0.18),transparent_60%)]" />

  {/* FLOATING FACTS BAR (ONLY CONTENT LEFT) */}
  

</section>

{/* OVERVIEW */}

<section className="py-24 px-6">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

<img
src={image10}
alt=""
className="h-[500px] w-full object-cover rounded-[35px] shadow-xl"
/>

<div>

<span className="uppercase tracking-[4px] text-emerald-500 font-bold">

Overview

</span>

<h2 className="text-4xl font-black mt-5">

Discover Hell's Gate

</h2>

<p className="mt-8 text-gray-600 leading-8">

Hell's Gate National Park is famous for its towering cliffs,
deep gorges, geothermal steam vents and unique cycling
experiences. Unlike many safari parks, visitors can cycle
and walk near wildlife.

</p>

</div>

</div>

</section>


{/* ATTRACTIONS */}

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl text-center font-black">

Top Attractions

</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

{[
"Fischer's Tower",
"Ol Njorowa Gorge",
"Central Tower",
"Geothermal Springs"
].map((item,i)=>(

<div
key={i}
className="bg-[#F7FAF8] p-8 rounded-3xl shadow hover:-translate-y-2 transition"
>

<div className="text-4xl mb-4">

🏞️

</div>

<h3 className="font-bold text-xl">

{item}

</h3>

</div>

))}

</div>

</div>

</section>


{/* ACTIVITIES */}

<section className="py-24 bg-[#07120E] text-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-black text-center">

Activities

</h2>

<div className="grid md:grid-cols-4 gap-8 mt-14">

{[
"🚴 Cycling",
"🥾 Hiking",
"📸 Photography",
"🦓 Wildlife Viewing"
].map((item,i)=>(

<div
key={i}
className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center"
>

<h3 className="text-xl">

{item}

</h3>

</div>

))}

</div>

</div>

</section>


{/* TRAVEL TIPS */}

<section className="py-24">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl text-center font-black">

Travel Tips

</h2>

<div className="grid md:grid-cols-3 gap-8 mt-14">

{[
"Wear comfortable hiking shoes",
"Carry water and sunscreen",
"Bring a camera for landscapes"
].map((item,i)=>(

<div
key={i}
className="bg-white rounded-3xl p-8 shadow"
>

<p className="text-gray-600">

✓ {item}

</p>

</div>

))}

</div>

</div>

</section>


{/* CTA */}

<section className="py-24 bg-emerald-500 text-center">

<h2 className="text-5xl font-black text-white">

Ready For Adventure?

</h2>

<p className="mt-6 text-white/80">

Experience Hell's Gate with Renlen Tours & Safaris

</p>

<Link
to="/contact"
className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-xl font-bold"
>

Plan Tour

</Link>

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

)

}

export default HellsGate;