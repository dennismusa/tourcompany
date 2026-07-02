import React from "react";
import { Link } from "react-router-dom";

function Packages() {


return (
<div className="bg-[#F6FAF8]">

{/* HERO */}
<section className="relative h-[65vh] overflow-hidden">

  <img
  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1600"
  alt="Sopa Lodge Rift Valley Safari Lodge"
  className="absolute inset-0 w-full h-full object-cover"
/>

  <div className="absolute inset-0 bg-black/40"></div>
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

  <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
  <div className="max-w-3xl text-white">

    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
      Premium Accommodations & Safari Lodges
    </h1>

    <p className="mt-5 text-gray-200 text-base sm:text-lg">
      Discover carefully selected safari lodges, luxury camps, and hotels across Kenya and East Africa, offering comfort, nature views, and exceptional hospitality.
    </p>

  </div>
</div>

</section>

{/* STATS */}
<section className="-mt-12 relative z-20">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid md:grid-cols-4 gap-6">

      {[
        ["120+", "Safari Packages"],
        ["45+", "Luxury Lodges"],
        ["3000+", "Happy Travelers"],
        ["24/7", "Support"]
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white p-7 rounded-3xl shadow-xl text-center hover:scale-105 transition duration-300"
        >
          <h2 className="text-3xl font-black text-emerald-500">
            {item[0]}
          </h2>
          <p className="text-gray-500 mt-2">
            {item[1]}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

{/* PACKAGE GRID */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-black">
        Premium Kenya Safari Experiences
      </h2>
      <p className="text-gray-500 mt-4">
        Explore Kenya’s most iconic parks, lakes, and wildlife destinations.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        
      
  {
    title: "Maasai Mara Big Five Safari",
    days: "3 Days / 2 Nights",
    price: "From $750",
    type: "Luxury",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1600",
    hotel: "Mara Serena Safari Lodge",
    hotelLink: "https://www.serenahotels.com/mara",
    desc: "Explore the world-famous Maasai Mara National Reserve, home to the Big Five and the Great Migration. Enjoy guided game drives across vast savannahs, luxury lodge accommodation, and breathtaking sunrise and sunset views over the plains.",
    features: ["Game Drives", "Luxury Lodge", "Big Five", "Professional Guide"]
  },
  {
    title: "Amboseli Kilimanjaro Safari",
    days: "2 Days / 1 Night",
    price: "From $480",
    type: "Adventure",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1600",
    hotel: "Amboseli Serena Lodge",
    hotelLink: "https://www.serenahotels.com/amboseli",
    desc: "Experience Kenya’s iconic Amboseli National Park, famous for large elephant herds and stunning views of Mount Kilimanjaro. Enjoy morning and evening game drives with unforgettable photography opportunities.",
    features: ["Photography", "Game Drives", "Kilimanjaro Views", "Safari Van"]
  },
  {
    title: "Lake Nakuru Flamingo Safari",
    days: "2 Days / 1 Night",
    price: "From $420",
    type: "Family",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600",
    hotel: "Sarova Lion Hill Lodge",
    hotelLink: "https://www.sarovahotels.com/lionhill-nakuru",
    desc: "Discover Lake Nakuru National Park, known for its pink flamingos, white rhinos, and scenic Rift Valley landscapes. A perfect family-friendly safari with easy game drives and beautiful viewpoints.",
    features: ["Bird Watching", "Rhinos", "Lake Tour", "Family Friendly"]
  },
  {
    title: "Tsavo East Red Elephant Safari",
    days: "3 Days / 2 Nights",
    price: "From $620",
    type: "Adventure",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600",
    hotel: "Ashnil Aruba Lodge",
    hotelLink: "https://www.ashnilhotels.com/aruba",
    desc: "Explore Tsavo East National Park, famous for its red-dust elephants, wide-open savannah, and dramatic wilderness landscapes. Ideal for travelers seeking raw, untouched safari adventure.",
    features: ["Game Drives", "Wildlife", "Savannah Views", "Safari Lodge"]
  },
  {
    title: "Lake Naivasha Boat Safari",
    days: "2 Days / 1 Night",
    price: "From $390",
    type: "Relax",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1600",
    hotel: "Enashipai Resort",
    hotelLink: "https://www.enashipairesort.com",
    desc: "Enjoy a relaxing escape at Lake Naivasha with peaceful boat rides among hippos and exotic birds. Combine nature walks, spa relaxation, and lakeside luxury accommodation.",
    features: ["Boat Safari", "Spa", "Bird Watching", "Relaxation"]
  },
  {
    title: "Diani Beach Safari Escape",
    days: "4 Days / 3 Nights",
    price: "From $890",
    type: "Beach",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600",
    hotel: "Baobab Beach Resort",
    hotelLink: "https://www.baobab-beach-resort.com",
    desc: "Combine safari adventure with the pristine white sands of Diani Beach. Enjoy ocean views, water sports, luxury all-inclusive stays, and tropical relaxation along Kenya’s coast.",
    features: ["Beach Stay", "Snorkeling", "All Inclusive", "Water Sports"]
  }
]
      .map((pkg, index) => (
        <div
          key={index}
          className="bg-white rounded-[30px] overflow-hidden shadow-lg
                     hover:-translate-y-3 hover:shadow-2xl duration-500
                     opacity-100 transition-all ease-out"
        >

          {/* IMAGE */}
          <div className="relative">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="h-[260px] w-full object-cover hover:scale-105 transition duration-700"
            />

            <div className="absolute top-4 right-4 bg-emerald-500 px-4 py-2 rounded-full text-white text-sm font-bold">
              {pkg.price}
            </div>

            <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded-full text-white text-xs">
              {pkg.type}
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-6">

            <h3 className="font-black text-xl">
              {pkg.title}
            </h3>

            <p className="text-sm text-emerald-600 mt-1">
              {pkg.days}
            </p>

            <p className="text-gray-600 mt-4 text-sm leading-6">
              {pkg.desc}
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-2 mt-5">
              {pkg.features.map((f, i) => (
                <span
                  key={i}
                  className="bg-gray-100 px-3 py-1 rounded-full text-xs"
                >
                  ✓ {f}
                </span>
              ))}
            </div>

            {/* HOTEL */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <p className="text-xs text-gray-500">Accommodation</p>
              <a
                href={pkg.hotelLink}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-600 font-semibold hover:underline text-sm"
              >
                {pkg.hotel}
              </a>
            </div>

            {/* ACTIONS */}
            <div className="grid grid-cols-2 gap-3 mt-5">
              <Link
                to="/contact"
                className="bg-emerald-500 text-black font-bold py-2.5 rounded-xl text-center hover:bg-emerald-600 transition"
              >
                Book
              </Link>

              <a
                href={pkg.hotelLink}
                target="_blank"
                rel="noreferrer"
                className="border py-2.5 rounded-xl text-center hover:bg-gray-100 text-sm transition"
              >
                Hotel
              </a>
            </div>

          </div>
        </div>
      ))}

    </div>
  </div>
</section>

{/* FOOTER */}
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
           <li>📞 +254717554177</li>
           <li>✉ renlentours@gmail.com</li>
         </ul>
   
         
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

export default Packages;